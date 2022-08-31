// ************ Require's ************
const fs = require('fs');
const path = require('path');


const controller = {

    // REGISTER ************
    readGet: (req, res) => {

        const productsFilePath = path.join(__dirname, '../database/products.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

 		res.render('admin/productRead', { 
			products: products
		}); 

    },

    // CREATE // GET ************
    createGet: (req, res) => {

        const productsFilePath = path.join(__dirname, '../database/products.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        res.render( 'admin/productCreate');

    },

    // CREATE // POST ************
    createPost: (req, res) => {

        const productsFilePath = path.join(__dirname, '../database/products.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        // IMAGEN ======================
        // 'filename' esta indicado como llega desde el multer en el ruteador de products...
        // image: req.file.filename

		// Do the magic
		let nuevoProducto = {
			// para el id, buscamos el maximo valor y le sumamos 1
			id: Math.max(...products.map( e => e.id )) + 1,
            categoria: 'zapatillas',
            marca: req.body.marca,
			nombre: req.body.nombre,
            image: req.file.filename,               // <= Leer observaciones arriba sobre origen nombre
			precio: parseInt(req.body.precio), 		    // <= debe ser numero!
			descuento: parseInt(req.body.descuento),	// <= debe ser numero!
            descripcion: req.body.descripcion,
			genero: req.body.genero,
            origen: req.body.origen,
            nroserie: req.body.nroserie,
            observaciones: req.body.observaciones,
            fechadecarga: req.body.fechadecarga,

            


		}

        // anexamos el nuevo dato...
		products.push(nuevoProducto);

		// JSON STRINGIFY...
		// las ultimas dos lineas son necesarias para que sea legible 'null, 4);'
		let productsGuardar = JSON.stringify(products,null,4);
		fs.writeFileSync(productsFilePath,productsGuardar);
		res.redirect('/admin');

	},

    // EDIT // GET ************
    editGet: (req, res) => {

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
			// enviamos la vista con el producto encontrado
			res.render('admin/productUpdate', { 
				productDetail: productDetail
			});
		}
		// si no existe el producto, mandamos error...
        else {
			res.status(404).render( "error",  {
				message: 'Producto no encontrado',
			} );
        }



    },

    // EDIT // GET ************
    editPut: (req, res) => {


		const productsFilePath = path.join(__dirname, '../database/products.json');
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        // tomamos el :id de la url desde archivo ruta
        const productId = parseInt(req.params.id, 10);

        for (let i = 0 ; i < products.length ; i++) {
            if ( products[i].id === productId ) {
                // acá lo encontramos al producto
                products[i]['codigo'] = req.body.codigo;
                products[i]['marca'] = req.body.marca;
				products[i]['nombre'] = req.body.nombre;
				products[i]['precio'] = parseInt(req.body.precio);
				products[i]['descuento'] = parseInt(req.body.descuento);
				products[i]['descripcion'] = req.body.descripcion;
              /*products[i]['categoria'] = req.body.categoria;*/
                products[i]['genero'] = req.body.genero;
                products[i]['origen'] = req.body.origen;
              /*products[i]['fechadecarga'] = req.body.fechadecarga;*/
                products[i]['fechademodificacion'] = req.body.fechademodificacion;
              /*products[i]['ref'] = req.body.ref;*/
              /*products[i]['image'] = req.body.image;*/
                // 'filename' esta indicado como llega desde el multer en el ruteador de products...
				// filename: 'ximg-1657115263090';
                // image: req.file.filename;
	
            }
        }


		// guardamos los datos...
		let productsGuardar = JSON.stringify(products,null,4);
		fs.writeFileSync(productsFilePath,productsGuardar);
		res.redirect('/admin');



    },

    // EDIT // GET ************
    deleteDelete: (req, res) => {

		const productsFilePath = path.join(__dirname, '../database/products.json');
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		
        // tomamos el :id de la url desde archivo ruta
		const productId = parseInt(req.params.id, 10);

		// filtramos los que tengan id distinto al que buscamos...
		const productsFinal = products.filter(prod => prod.id != productId);    

		// guardamos...
		let productsGuardar = JSON.stringify(productsFinal,null,4);
		fs.writeFileSync(path.resolve(__dirname, '../database/products.json'),productsGuardar);
		res.redirect('/admin');

    },
    


    

};

module.exports = controller;