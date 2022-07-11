// ************ Require's ************
const express = require('express');
const router = express.Router();


// ************ Controller Require ************
const {
    admin,
    create
} = require('../controllers/adminController');


// ************ Rutas Privadas ************
router.get('/', admin); 

router.get('/create', create); 

// ************ Exportamos ************
module.exports = router;