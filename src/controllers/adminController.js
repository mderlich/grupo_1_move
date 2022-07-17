// ************ Require's ************
const fs = require('fs');
const path = require('path');


const controller = {

    // REGISTER ************
    admin: (req, res) => {

        const productsFilePath = path.join(__dirname, '../database/products.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        res.render( 'admin/productRead');

	},

    // CREATE ************
    create: (req, res) => {

        const productsFilePath = path.join(__dirname, '../database/products.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        res.render( 'admin/productCreate');

    },

    // STORE ************
    store: (req, res) => {

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
            fechadecarga: req.body.fechadecarga,
            descripcion: req.body.descripcion,
			categoria: req.body.categoria,
			genero: req.body.genero,
            ref: req.body.ref,
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

    // EDIT ************
    edit: (req, res) => {

        const productsFilePath = path.join(__dirname, '../database/products.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        res.render( 'admin/productUpdate');

    },

};

module.exports = controller;