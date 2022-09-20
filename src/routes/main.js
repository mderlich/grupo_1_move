// ************ Require's ************
const express = require('express');
const router = express.Router();
const logDBMiddleware =require('../middlewares/logDBMiddleware');

// ************ Controller Require ************
const {
    index,
    forgetpw,
    carrito
} = require('../controllers/mainController');


// ************ Rutas Generales ************

router.get('/', index); 

router.get('/forgetpw', forgetpw); 

/*** CARRO DE PRODUCTOS ***/ 
router.get('/carrito', carrito); 




// ************ Exportamos ************
module.exports = router;