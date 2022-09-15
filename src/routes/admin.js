// ************ Require's ************
const express = require('express');
const router = express.Router();



// ************ Middlewares Require ************
const upload = require('../middlewares/adminMulter');
const validateForm = require('../middlewares/adminValidateForm');


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
// IMPORTANTE!!! 
// .'image' corresponde al name del input... <input type="file" name="image" id="image" >
// .'single' corresponde a que solo sube una sola imagen
router.post('/create', upload.single('image'), validateForm, createPost); 


// ----------------------------------------
// EDIT // GET 
router.get('/edit/:id', editGet); 
// EDIT // PUT 
router.put('/:id', upload.single('image'),validateForm ,editPut);     /* <<============= */

// ----------------------------------------
// DELETE // DELETE 
router.delete('/delete/:id', deleteDelete); /* <<============= */



// ************ Exportamos ************
module.exports = router;