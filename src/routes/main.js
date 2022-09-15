// ************ Require's ************
const express = require('express');
const router = express.Router();
const logDBMiddleware =require('../middlewares/logDBMiddleware');

// ************ Controller Require ************
const {
    index,
    search,
    login,
    register,
    forgetpw,
    carrito
} = require('../controllers/mainController');


// ************ Rutas Generales ************

router.get('/', index); 

/* ruta del buscador... */
router.get('/search', search); 

//Estas rutas se pasaron al archivo Users:
//router.get('/login', login); 

//router.get('/register', logDBMiddleware ,register); 

router.get('/forgetpw', forgetpw); 

/*** CARRO DE PRODUCTOS ***/ 
router.get('/carrito', carrito); 




// ************ Exportamos ************
module.exports = router;