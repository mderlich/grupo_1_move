// ************ Require's ************
const express = require('express');
const router = express.Router();
const logDBMiddleware =require('../middlewares/logDBMiddleware');

// ************ Controller Require ************
const {
    index,
    forgetpw,
    carrito,
} = require('../controllers/mainController');


// ************ Middlewares Require ************
const cartMiddleware = require('../middlewares/cartMiddleware');



// ************ Rutas Generales ************

router.get('/', index); 

router.get('/forgetpw', forgetpw); 

/*** CARRO DE PRODUCTOS ***/ 
router.get('/carrito', cartMiddleware, carrito); 




// ************ Exportamos ************
module.exports = router;