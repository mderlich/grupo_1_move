// ************ Require's ************
const express = require('express');
const router = express.Router();


// ************ Controller Require ************
const {
    admin
} = require('../controllers/adminController');


// ************ Rutas Privadas ************
router.get('/', admin); 



// ************ Exportamos ************
module.exports = router;