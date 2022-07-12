// ************ Require's ************
const express = require('express');
const router = express.Router();
const logDBMiddleware =require('../../middlewares/logDBMiddleware');

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

router.get('/register', logDBMiddleware ,register); 

router.get('/forgetpw', forgetpw); 






// ************ Exportamos ************
module.exports = router;