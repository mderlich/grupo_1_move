// ************ Require's ************
const express = require('express');
const router = express.Router();



// ************ Controller Require ************
const {
    search,
    favoritasGet,
    favoritasPost,
    readAll,
    readGenero,
    readId,
} = require('../controllers/zapatillasController');


// ************ Middlewares Require ************
const favMiddleware = require('../middlewares/favMiddleware');


/* ruta del buscador... */
router.get('/search', search); 

/* favoritas... */
router.post('/favoritas/:id', favMiddleware, favoritasPost); 
// router.get('/favoritas', favMiddleware, favoritas); 
router.get('/favoritas', favMiddleware, favoritasGet); 

/* ZAPATILLAS SEGUN GENERO */
router.get('/', readAll); 

/* ZAPATILLAS SEGUN GENERO */
router.get('/:genero', readGenero); 

/*** GET ONE PRODUCT ***/ 
router.get('/id/:id/', readId); 









module.exports = router;