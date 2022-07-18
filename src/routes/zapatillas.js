// ************ Require's ************
const express = require('express');
const router = express.Router();



// ************ Controller Require ************
const {
    readAll,
    readGenero,
    readId,
    detailApiAll,
    detailApi,    
} = require('../controllers/zapatillasController');

/* ZAPATILLAS SEGUN GENERO */
router.get('/', readAll); 
  

/* ZAPATILLAS SEGUN GENERO */
router.get('/:genero', readGenero); 


/*** GET ONE PRODUCT ***/ 
router.get('/id/:id/', readId); 


// De aqui en adelante todavia esta pendiente de aplicar
// ------------------------------------------------------

/*** API // TODOS LOS PRODUCTOS ***/ 
router.get('/api', detailApiAll); 


/*** GET ONE PRODUCT ***/ 
router.get('/api/:id', detailApi); 





module.exports = router;