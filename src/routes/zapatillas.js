// ************ Require's ************
const express = require('express');
const router = express.Router();



// ************ Controller Require ************
const {
    readAll,
    readGenero,
    detailApiAll,
    detailApi,
    detail
} = require('../controllers/zapatillasController');

/* ZAPATILLAS SEGUN GENERO */
router.get('/', readAll); 
  
/* ZAPATILLAS SEGUN GENERO */
router.get('/:genero', readGenero); 



// De aqui en adelante todavia esta pendiente de aplicar
// ------------------------------------------------------

/*** API // TODOS LOS PRODUCTOS ***/ 
router.get('/api', detailApiAll); 


/*** GET ONE PRODUCT ***/ 
router.get('/api/:id', detailApi); 


/*** GET ONE PRODUCT ***/ 
router.get('/:id/', detail); 



module.exports = router;