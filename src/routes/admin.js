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
	destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images"))
	},
	filename: (req, file, cb) => {
        // Datos propios del 'file' son...
        // fieldname / originalname / encoding / mimetype / destination / filename / path / size
		let nombreImagen = "ximg-" + Date.now() + path.extname(file.originalname);
        cb(null, nombreImagen)
	}
})

var upload = multer({ storage: storage })

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


// ************ Rutas Privadas ************
// ----------------------------------------
// READ // GET 
router.get('/', readGet); 

// ----------------------------------------
// CREATE // GET 
router.get('/create', createGet); 
// CREATE // POST 
// STORE, falta agregar las sig. linea de midleware
router.post('/create', createPost); 
// IMPORTANTE!!! 'image' corresponde al name del input... <input type="file" name="image" id="image" >
// router.post('/', upload.single('image'), store);        /* <<============= */

// ----------------------------------------
// EDIT // GET 
router.get('/edit/:id', editGet); 
// EDIT // PUT 
router.put('/:id', editPut);     /* <<============= */

// ----------------------------------------
// DELETE // DELETE 
router.delete('/:id', deleteDelete); /* <<============= */



// ************ Exportamos ************
module.exports = router;