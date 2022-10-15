// ************ Require's ************
// para base de datos...
const db = require('../database/models');




/* 
OBS no se empleo aun, creo es para pasar a miles los numeros... ej 1.000
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); 
*/

const controller = {

    // INDEX ************
	index: (req, res) => {

        res.render( 'index');

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

		
		// llenamos array de id
/* 		let arrayId = [];

		for (const {id_product} of fav) {
			arrayId.push(id_product);
		} */


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


	
};

module.exports = controller;
