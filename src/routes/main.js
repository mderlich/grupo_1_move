// ************ Require's ************
const express = require('express');
const router = express.Router();


// ************ Controller Require ************
const {
    index,
    search,
    login,
    register,
    forgetpw
} = require('../controllers/mainController');

// ************ Rutas Generales ************

router.get('/', index); 

router.get('/search', search); 

router.get('/login', login); 

router.get('/register', register); 

router.get('/forgetpw', forgetpw); 



// ********************************************
// OBS estas dos siguientes hay que llevarlas a products
// ruta hacia... productCart
router.get('/productCart', (req, res) => { 
    res.render('productCart') });

// ruta hacia... productDetail
router.get('/productDetail', (req, res) => { 
    res.render( 'productDetail') });



// ************ Exportamos ************
module.exports = router;