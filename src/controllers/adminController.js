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

		// Do the magic
		let nuevoProducto = {
			// para el id, buscamos el maximo valor y le sumamos 1
			id: Math.max(...products.map( e => e.id )) + 1,
            codigo: req.body.codigo,
			marca: req.body.marca,
			nombre: req.body.nombre,
			precio: parseInt(req.body.precio), 		// <= debe ser numero!
			descuento: parseInt(req.body.descuento),	// <= debe ser numero!
            descripcion: req.body.descripcion,
			categoria: 'zapatillas',
			genero: req.body.genero,
            origen: req.body.origen,
            fechadecarga: req.body.fechadecarga,
            //ref: req.body.ref,
            ref: '',
            image: '',
            // 'filename' esta indicado como llega desde el multer en el ruteador de products...
			// filename: 'ximg-1657115263090',

			// image: req.file.filename

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

		
		// si queremos ver lo enviado por el formulario...
		res.json(req.body) 

    },

    // EDIT // GET ************
    deleteDelete: (req, res) => {

        res.send('delete');

    },
    
};

module.exports = controller;