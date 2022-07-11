// ************ Require's ************
const express = require('express');
const router = express.Router();


// ************ Controller Require ************
const {
    admin,
    create,
    store
} = require('../controllers/adminController');


// ************ Rutas Privadas ************
router.get('/', admin); 

router.get('/create', create); 

router.post('/create', store); 

// ************ Exportamos ************
module.exports = router;