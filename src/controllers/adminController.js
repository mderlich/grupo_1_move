// util para las validaciones del formulario...
const { validationResult } = require('express-validator');

// para base de datos...
const db = require('../database/models');


/* CONTROLLER ********************************* */
/* ******************************************** */
const controller = {

    // REGISTER ************
    readGet: async function(req, res) {
        
        // ordenamos los array para que los nuevos ingresos figuren arriba (id mayor... id menor)
        const productsAll = await db.Product.findAll({ order: [['id', 'DESC']] });
        const brandsAll = await db.Brand.findAll();

        let [ products, brands ] = await Promise.all([ productsAll , brandsAll ]);

        res.render('admin/productRead', { products, brands });

    },


    

    // CREATE // GET ************
    createGet: async function(req, res) {

        const brands = await db.Brand.findAll();

        res.render('admin/productCreate', { brands });

    },

    // CREATE // POST ************
    createPost: async function(req, res) {

        // ERRORES... chequeamos si los hay
        /* (validacion por backend) */
        let errors = validationResult(req);

        const brands = await db.Brand.findAll();

        /* si hay errores... */
        if(!errors.isEmpty()){
            res.render('admin/productCreate', { 
                errors: errors.array(),
                old: req.body,
                brands
            });
        } 
        /* si no hubo errores, continuamos... */
        // ---------------------------------------
        else{       
        
            let rbNombre = req.body.nombre;
            let rbNombreMayuscula = rbNombre.replace(/\b\w/g, l => l.toUpperCase());

        await db.Product.create(
            {
                image: req.file.filename,    // <= Origen del nombre en midleware de la ruta
                name: rbNombreMayuscula,
                id_brand: parseInt(req.body.marca),
                price: parseInt(req.body.precio), 		    // <= debe ser numero!
                discount: parseInt(req.body.descuento),	// <= debe ser numero!
                description: req.body.descripcion,
                gender: req.body.genero,
                origin: req.body.origen,
                observations: req.body.observaciones,
                create_at: req.body.fecha_creado,
                update_at: req.body.fecha_creado,
            }
        )
        
        
		res.redirect('/admin');
        // ---------------------------------------

        }

	},

    // EDIT // GET ************
    editGet: async function(req, res) {

		// Do the magic
        const productId = parseInt(req.params.id, 10);

        let productFind = await db.Product.findByPk(productId)
        let brandsAll = await db.Brand.findAll();

        let [ productDetail, brands ] = await Promise.all([ productFind , brandsAll ]);

        // si existe...
        if (productDetail){
			// enviamos la vista con el producto encontrado
			res.render('admin/productUpdate', { 
				productDetail, brands
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
    editPut: async function(req, res) {

        //  // ERRORES... chequeamos si los hay
        //  let errors = validationResult(req);

        //  if(!errors.isEmpty()){
        //      res.render('admin/productEdit/19', { 
        //          errors: errors.array(),
        //          old: req.body
        //      });
        //  }else{
         // ---------------------------------------
         
         
        // tomamos el :id de la url desde archivo ruta
        const productId = parseInt(req.params.id, 10);

        // Actualizara el nombre de imagen solo si se actualizo
        let imageName;
        if(req.file){
            imageName = req.file.filename;    // <= Origen del nombre en midleware de la ruta
        } else{
            // el nombre se sube por campo oculto
            imageName = req.body.imgFilename;
        }
        // ----------------------------------

        let rbNombre = req.body.nombre;
        let rbNombreMayuscula = rbNombre.replace(/\b\w/g, l => l.toUpperCase());

        await db.Product.update(
            {
            
            image: imageName,  
            name: rbNombreMayuscula,
            id_brand: parseInt(req.body.marca),         // <= debe ser numero!
            price: parseInt(req.body.precio), 		    // <= debe ser numero!
            discount: parseInt(req.body.descuento),	    // <= debe ser numero!
            description: req.body.descripcion,
            gender: req.body.genero,
            origin: req.body.origen,
            observations: req.body.observaciones,
            update_at: req.body.fecha_modificado,

            },
            {where: {id: productId} }
        );

        
		res.redirect('/admin');


         
    },

    // EDIT // GET ************
    deleteDelete: async function(req, res) {
		
        // tomamos el :id de la url desde archivo ruta
		const productId = parseInt(req.params.id, 10);

        await db.Product.destroy({
            where: {id: productId}
        });
        
		res.redirect('/admin');

    },
    


    

};

module.exports = controller;