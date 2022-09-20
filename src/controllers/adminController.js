// ************ Require's ************
/* const path = require('path');  */

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
        
        await db.Product.create(
            {
                id_brand: req.body.marca,
                name: req.body.nombre,
                description: req.body.descripcion,
                price: parseInt(req.body.precio), 		    // <= debe ser numero!
                discount: parseInt(req.body.descuento),	// <= debe ser numero!
                gender: req.body.genero,
                origin: req.body.origen,
                image: req.file.filename,    // <= Origen del nombre en midleware de la ruta
                observations: req.body.observaciones,
                fecha_creado: req.body.fecha_creado,
            }
        )
        
        
		res.redirect('/admin');
        // ---------------------------------------

        }

	},

    // EDIT // GET ************
    editGet: (req, res) => {

        

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

 

        for (let i = 0 ; i < products.length ; i++) {
            if ( products[i].id === productId ) {

                // acá lo encontramos al producto
                products[i]['marca'] = req.body.marca;
				products[i]['nombre'] = req.body.nombre;
                // Solo si se adjunta imagen...
                if(req.file){
                products[i]['image'] = req.file.filename;    // <= Origen del nombre en midleware de la ruta
                }
				products[i]['precio'] = parseInt(req.body.precio);
				products[i]['descuento'] = parseInt(req.body.descuento);
				products[i]['descripcion'] = req.body.descripcion;
                products[i]['genero'] = req.body.genero;
                products[i]['origen'] = req.body.origen;
                products[i]['nro_serie'] = req.body.nro_serie;
                products[i]['observaciones'] = req.body.observaciones;
                products[i]['fecha_modificado'] = req.body.fecha_modificado;

            }
            
        }



        
		res.redirect('/admin');


         
    },

    // EDIT // GET ************
    deleteDelete: (req, res) => {

        
		
        // tomamos el :id de la url desde archivo ruta
		const productId = parseInt(req.params.id, 10);

		// filtramos los que tengan id distinto al que buscamos...
		const productsFinal = products.filter(prod => prod.id != productId);    


        
		res.redirect('/admin');

    },
    


    

};

module.exports = controller;