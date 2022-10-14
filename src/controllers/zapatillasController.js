// ************ Require's ************
// para base de datos...
const db = require('../database/models');
const Op = db.Sequelize.Op;


/* 
// De aqui se retiro y envio dentro de cada funcion porque sino no lo tomaba bien al .json
const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
*/

const controller = {


	
	// Root - Show all products
	readAll: async function(req, res) {


		
		let genero = 'todas';

		// ordenamos los array para que los nuevos ingresos figuren arriba (id mayor... id menor)
		const productsAll = await db.Product.findAll({ 
			order: [['id', 'DESC']] ,
			include: [{association: "brands"}]
		});

		/* LIKE CORAZON */
		let fav = "";
		let arrayFav = [];

		if(req.session.userLogged){

			const userJson = req.session.userLogged;
			let userId = userJson.id;
	
			fav = await db.Fav.findAll({
				where: { id_user: userId }
			});

			for (const {id_product} of fav) {
				arrayFav.push(id_product);
			}

		}


		// Do the magic
		res.render('productAll', { 
			genero: genero,
			productsFiltrados: productsAll,
			arrayFav: arrayFav
		});
		
	},
 	
	// Root - Show all products
	readGenero: async function(req, res) {


		
		/* Obtenemos desde la ruta... /:genero */
		/* debe ser 'let' sino no podemos modificarlo luego  */
		let genero = req.params.genero;
		let productsFiltrados = '';

		if( genero == 'mujeres' ){ genero = 'mujer'; }
		if( genero == 'hombres' ){ genero = 'hombre'; }

		if ( genero == 'mujer' || genero == 'hombre' || genero == 'unisex' ){
			
			productsFiltrados = await db.Product.findAll({
				where: { gender: genero },
				include: [{association: "brands"}]
			});


		}else{
			
			let idMarca = await db.Brand.findOne({
				where: { name: genero }
			})

			/* si no existe la marca le enviamos pagina de error */
			if(!idMarca){
				return res.status(404).render( "error",  {
					message: 'Producto no encontrado',
				} );
			}

 			productsFiltrados = await db.Product.findAll({
				where: { id_brand: idMarca.id },
				include: [{association: "brands"}]

			}); 

		} 

		
		/* LIKE CORAZON */
		let fav = "";
		let arrayFav = [];

		if(req.session.userLogged){

			const userJson = req.session.userLogged;
			let userId = userJson.id;
	
			fav = await db.Fav.findAll({
				where: { id_user: userId }
			});

			for (const {id_product} of fav) {
				arrayFav.push(id_product);
			}

		}


		// Do the magic
		res.render('productAll', { 
			genero: genero,
			productsFiltrados: productsFiltrados,
			arrayFav: arrayFav
		});
		
	},


	
	

	// Detail - Detail from one product
	readId: async function(req, res) {

		// Do the magic
        const productId = parseInt(req.params.id, 10);

		let productFind = await db.Product.findByPk(productId)
		const brandFind = await db.Brand.findByPk(productFind.id_brand);

        let [ productDetail, brandDetail ] = await Promise.all([ productFind , brandFind ]);

		// array de favoritos...
		/* LIKE CORAZON */
		let fav = "";
		let arrayFav = [];

		if(req.session.userLogged){

			const userJson = req.session.userLogged;
			let userId = userJson.id;
	
			fav = await db.Fav.findAll({
				where: { id_user: userId }
			});

			for (const {id_product} of fav) {
				arrayFav.push(id_product);
			}

		}


        // si existe...
        if (productDetail){
           res.render( "productDetail",  {
			productDetail, 
			brandDetail,
			arrayFav: arrayFav
		} ); 
		}
		// si no hay producto...
        else {
			res.status(404).render( "error",  {
				message: 'Producto no encontrado',
			} );
        } 



	},


	
    // SEARCH ************
	search: async function(req, res) {


		
        // pasamos a minuscula, lo que nos envia por formulario
        // 'keywords' es el name del input del buscador del header.ejs
 		let buscado = req.query.keywords.toLowerCase();

		
 		let resultados = await db.Product.findAll({
			where: {
			  description: {[Op.like]:'%'+buscado+'%'}
			},
			include: [{association: "brands"}]
		});


		/* LIKE CORAZON */
		let fav = "";
		let arrayFav = [];

		if(req.session.userLogged){

			const userJson = req.session.userLogged;
			let userId = userJson.id;
	
			fav = await db.Fav.findAll({
				where: { id_user: userId }
			});

			for (const {id_product} of fav) {
				arrayFav.push(id_product);
			}

		}


		// si existe...
		if (resultados){

				res.render( "productResultados",  {
					productDetail: resultados,
					arrayFav: arrayFav

				} ); 

				
		}


        
	},


	
    // FAVORITAS ************
	favoritasGet: async function(req, res) {
	
		
		/* LIKE CORAZON */
		let fav = "";
		let arrayFav = [];

		if(req.session.userLogged){

			const userJson = req.session.userLogged;
			let userId = userJson.id;
	
			fav = await db.Fav.findAll({
				where: { id_user: userId }
			});

			for (const {id_product} of fav) {
				arrayFav.push(id_product);
			}

		}

		// REF lo de traer el array de id
		// https://stackoverflow.com/questions/59167685/how-to-return-sequelize-findallarray-in-the-original-order-of-the-array
		const productsAll = await db.Product.findAll({ 
			order: [['id', 'DESC']] ,
			where: { id: arrayFav }, // arrayFav = [3, 1, 2];
			include: [{association: "brands"}]
		});

		// Do the magic
		res.render('productFavoritas', { 
			productsFiltrados: productsAll,
			arrayFav: arrayFav
		});

        
	},

	// FAVORITAS ************
	favoritasPost: async function(req, res) {


		/* ID del usuario */
		const userJson = req.session.userLogged;
		let userId = userJson.id;

		/* ID del producto */
		let productId = req.params.id;
     
		// vemos si existe...
		let favExist = await db.Fav.findOne({
			where: {
                id_user: userId,
                id_product: productId,
			}
		})

		// si existe, lo borramos...
		if(favExist){
			await db.Fav.destroy({
				where: {
					id_user: userId,
					id_product: productId,
				}
			});
			res.send("oops");
		}
		// si no existe lo creamos...
		else{
			await db.Fav.create(
				{
					id_user: userId,
					id_product: productId,
				}
			) 	
			res.send("ok");
		}

		
	},



};


module.exports = controller;