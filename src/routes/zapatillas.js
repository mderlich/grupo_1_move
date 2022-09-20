// ************ Require's ************
const express = require('express');
const router = express.Router();



// ************ Controller Require ************
const {
    readAll,
    readGenero,
    readId,
} = require('../controllers/zapatillasController');

/* ZAPATILLAS SEGUN GENERO */
router.get('/', readAll); 

/* ZAPATILLAS SEGUN GENERO */
router.get('/:genero', readGenero); 


/*** GET ONE PRODUCT ***/ 
router.get('/id/:id/', readId); 








module.exports = router;