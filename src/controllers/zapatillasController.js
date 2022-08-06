// ************ Require's ************
// fs requerido para JSON
const fs = require('fs');
const path = require('path');


/* 
// De aqui se retiro y envio dentro de cada funcion porque sino no lo tomaba bien al .json
const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
*/

const controller = {


	
	// Root - Show all products
	readAll: (req, res) => {

		const productsFilePath = path.join(__dirname, '../database/products.json');
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		
		let genero = '';

		// Do the magic
		res.render('productAll', { 
			genero: genero,
			productsFiltrados: products
		});
		
	},
 	
	// Root - Show all products
	readGenero: (req, res) => {

		const productsFilePath = path.join(__dirname, '../database/products.json');
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		
		/* Obtenemos desde la ruta... /:genero */
		/* debe ser 'let' sino no podemos modificarlo luego  */
		let genero = req.params.genero;
		let productsFiltrados = '';

		if( genero == 'mujeres' ){ genero = 'mujer'; }
		if( genero == 'hombres' ){ genero = 'hombre'; }

		if ( genero == 'mujer' || genero == 'hombre' || genero == 'unisex' ){
			productsFiltrados = products.filter((e)=> {
				return e.genero == genero;
			});
		}else{
			productsFiltrados = products.filter((e)=> {
				
				return e.marca == genero;
			});
		} 

		// Do the magic
		res.render('productAll', { 
			products: products,
			genero: genero,
			productsFiltrados: productsFiltrados
		});
		
	},


	
	

	// Detail - Detail from one product
	readId: (req, res) => {

		const productsFilePath = path.join(__dirname, '../database/products.json');
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		
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


	// De aqui en adelante todavia esta pendiente de aplicar
	// ------------------------------------------------------

	detailApiAll: (req, res) => {

		const productsFilePath = path.join(__dirname, '../database/products.json');
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		// Do the magic
		res.status(201).send(products); 
	},


	// Detail - Detail from one product
	detailApi: (req, res) => {

		const productsFilePath = path.join(__dirname, '../database/products.json');
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
			res.status(201).send(productDetail); 
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