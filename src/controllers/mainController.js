// ************ Require's ************
// para base de datos...
const db = require('../database/models');
const Op = db.Sequelize.Op;



/* 
OBS no se empleo aun, creo es para pasar a miles los numeros... ej 1.000
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); 
*/

const controller = {

    // INDEX ************
	index: async function(req, res) {

		// mas recientes...
		const productsRecientes = await db.Product.findAll({ 
			order: [['id', 'DESC']] ,
			include: [{association: "brands"}],
			limit: 4
		});

		// con dto...
		const productsDto = await db.Product.findAll({ 
			order: [['id', 'DESC']] ,
			where: {discount: { [Op.gt]: 0 }},
			include: [{association: "brands"}],
			limit: 4
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
		// -------------------------------

		
		res.render('index', { 
			productsRecientes: productsRecientes,
			productsDto: productsDto,
			arrayFav: arrayFav
		});

	},

    
    // SEARCH ************
	search: async function(req, res) {


		
        // pasamos a minuscula, lo que nos envia por formulario
        // 'keywords' es el name del input del buscador del header.ejs
 		let buscado = req.query.keywords.toLowerCase();

		
 		let resultados = await db.Product.findAll({
			where: {
			  description: {[Op.like]:'%'+buscado+'%'}
			}
		});

		// si existe...
		if (resultados){

				res.render( "productResultados",  {productDetail: resultados} ); 

				
		}


        
	},

    // FORGET PASWORD ************
    forgetpw: (req, res) => {


        res.render( 'forgetpw');
    
	},

	carritoEmpty: async function(req, res) {
		// Do the magic
		res.render('productCart');
	},
	

	carrito: async function(req, res) {

		// ["15_39","16_39"]
		let postZapatillas = req.body.postZapatillas;

		if(!postZapatillas){
			return res.redirect('/carrito');
		}

		postZapatillas = JSON.parse( postZapatillas);

		let cart = postZapatillas;

		// let postZapatillasN = req.body.postZapatillasN;

		let idCarrito = [];
		
		for (let key in postZapatillas) {
            idCarrito.push(postZapatillas[key].split('_')[0]);
        }

		// borramos duplicados...
		idCarrito = [...new Set(idCarrito)];


		// REF lo de traer el array de id
		// https://stackoverflow.com/questions/59167685/how-to-return-sequelize-findallarray-in-the-original-order-of-the-array
		const productsAll = await db.Product.findAll({ 
			order: [['id', 'DESC']] ,
			where: { id: idCarrito }, 
			include: [{association: "brands"}]
		});

		

		


		// referencias...
		// https://stackoverflow.com/questions/6429959/objects-inside-objects-in-javascript
		// https://stackoverflow.com/questions/19837916/creating-object-with-dynamic-keys
		// si o si con llavecitas, sino no funciona
		let byId={}; 
		for(var i=0;i<productsAll.length;i++){

			byId[productsAll[i].id] = productsAll[i];
			
		}

		//res.send(byId);

		

		// Do the magic
		res.render('productCart', { 
			productsFiltrados: byId,
			cart: cart,
			
		});
				

	},

	compraexitosa: async function(req, res) {
		// Do the magic
		res.render('productCartok');
	},

	
};

module.exports = controller;
