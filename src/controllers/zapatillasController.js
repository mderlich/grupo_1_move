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
		const productsAll = await db.Product.findAll({ order: [['id', 'DESC']] });

		// Do the magic
		res.render('productAll', { 
			genero: genero,
			productsFiltrados: productsAll
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
				where: {
					gender: genero
				}
			});

		}else{
			
			let idMarca = await db.Brand.findOne({
				where: {
				  name: genero
				}
			})

			/* si no existe la marca le enviamos pagina de error */
			if(!idMarca){
				return res.status(404).render( "error",  {
					message: 'Producto no encontrado',
				} );
			}

 			productsFiltrados = await db.Product.findAll({
				where: {
					id_brand: idMarca.id
				}
			}); 



		} 

		// Do the magic
		res.render('productAll', { 
			genero: genero,
			productsFiltrados: productsFiltrados
		});
		
	},


	
	

	// Detail - Detail from one product
	readId: async function(req, res) {

		// Do the magic
        const productId = parseInt(req.params.id, 10);

		let productFind = await db.Product.findByPk(productId)
		const brandFind = await db.Brand.findByPk(productFind.id_brand);

        let [ productDetail, brandDetail ] = await Promise.all([ productFind , brandFind ]);

        // si existe...
        if (productDetail){
           res.render( "productDetail",  {productDetail, brandDetail} ); 
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
			  name: {[Op.Like]:'%dida%'}
			}
		})

		res.send(resultados)

 		res.render('productResultados', { 
			productDetail: resultados 
		});

        
	},





};


module.exports = controller;