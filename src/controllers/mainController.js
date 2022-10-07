// ************ Require's ************





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


	carrito: (req, res) => {

		res.render('productCart');

	},


};

module.exports = controller;
