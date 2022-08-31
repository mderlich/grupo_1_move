// ************ Require's ************
const express = require('express');
const router = express.Router();
// multer util para imagenes
const multer = require('multer');
const path = require('path');


// ************ Multer Settings ************
// acompaña a la linea de ruta mas adelante...
// router.post('/', upload.single('image'), store);      

const storage = multer.diskStorage({
    /* destination... indicamos la carpeta donde se van a guardar...  */
	destination: (req, file, cb) => {
        let folder = path.join(__dirname, "../../public/images/products");
        cb(null, folder)
	},
    /* filename... definimos el nombre del archivo */
	filename: (req, file, cb) => {

        // Limpiamos el nombre que viene desde el formulario...
        // ej... "  your string 123 .-_!@  " => "YourString123"
        let abc = req.body.nombre;
        let abc2 = abc.replace(/\b\w/g, l => l.toUpperCase())
        let abc3 = abc2.replace(/[^a-zA-Z0-9]/g, "");
 
        // Datos propios del 'file' son...
        // fieldname / originalname / encoding / mimetype / destination / filename / path / size
        // en caso de requerir la fecha en milisegundos... Date.now()
		let nombreImagen = "zapatillas_" + req.body.marca + "_" + abc3 + path.extname(file.originalname);
        cb(null, nombreImagen)
	}
})

// se utiliza como middleware de la ruta POST que lo utilice
let upload = multer({ storage })

// /multer fin --------------------------------

// ************ Controller Require ************
const {
    readGet,
    createGet,
    createPost,
    editGet,
    editPut,
    deleteDelete
} = require('../controllers/adminController');

const { 
    proppatch 
} = require('./main');


// ************ Rutas Privadas ************
// ----------------------------------------
// READ // GET 
router.get('/', readGet); 

// ----------------------------------------
// CREATE // GET 
router.get('/create', createGet); 
// CREATE // POST 
// IMPORTANTE!!! 
// .'image' corresponde al name del input... <input type="file" name="image" id="image" >
// .'single' corresponde a que solo sube una sola imagen
router.post('/create', upload.single('image'), createPost); 


// ----------------------------------------
// EDIT // GET 
router.get('/edit/:id', editGet); 
// EDIT // PUT 
router.put('/:id', editPut);     /* <<============= */

// ----------------------------------------
// DELETE // DELETE 
router.delete('/delete/:id', deleteDelete); /* <<============= */



// ************ Exportamos ************
module.exports = router;