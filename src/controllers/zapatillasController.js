// ************ Require's ************
// para base de datos...
const db = require('../database/models');


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
	readId: (req, res) => {

	
		
		// Do the magic
        const productId = parseInt(req.params.id, 10);
        let productDetail; 

        for (let i = 0; i < products.length; i++) {
            if ( products[i].id === productId ) {
                // acá lo encontramos al producto
                productDetail = products[i];
            }
        }

		
        // si existe...
        if (productDetail){
           res.render( "productDetail",  {productDetail: productDetail} ); 
		}
		// si no hay producto...
         else {
			res.status(404).render( "error",  {
				message: 'Producto no encontrado',
			} );
        } 



	},






};


module.exports = controller;