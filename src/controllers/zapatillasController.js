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
/*         else {
			res.status(404).render( "error",  {
				message: 'Producto no encontrado',
			} );
        } */



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


	
	// Update - Method to update
	update: (req, res) => {

		
		// si queremos ver lo enviado por el formulario...
		// res.json(req.body) 

		
		const productsFilePath = path.join(__dirname, '../database/products.json');
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        const productId = parseInt(req.params.id, 10);

        for (let i = 0 ; i < products.length ; i++) {
            if ( products[i].id === productId ) {
                // acá lo encontramos al producto
				products[i]['name'] = req.body.name;
				products[i]['price'] = req.body.price;
				products[i]['discount'] = req.body.discount;
				products[i]['category'] = req.body.category;
				products[i]['description'] = req.body.description;
				// 'filename' esta indicado como llega desde el multer en el ruteador de products...
				// filename: 'ximg-1657115263090',
	
				
            }
        }


		

		// guardamos los datos...
		let productsGuardar = JSON.stringify(products,null,4);
		fs.writeFileSync(productsFilePath,productsGuardar);
		res.redirect('/products');

	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {

		const productsFilePath = path.join(__dirname, '../database/products.json');
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		
		// Do the magic
		const productId = parseInt(req.params.id, 10);
		// filtramos los que tengan id distinto al que buscamos...
		const productsFinal = products.filter(prod => prod.id != productId);        
		// guardamos...
		let productsGuardar = JSON.stringify(productsFinal,null,4);
		fs.writeFileSync(path.resolve(__dirname, '../database/products.json'),productsGuardar);
		res.redirect('/products');
		
	}
};


module.exports = controller;