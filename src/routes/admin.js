// ************ Require's ************
const express = require('express');
const router = express.Router();


// ************ Controller Require ************
const {
    admin,
    create,
    store,
    edit
} = require('../controllers/adminController');


// ************ Rutas Privadas ************
router.get('/', admin); 

router.get('/create', create); 
router.post('/create', store); 

router.get('/edit/:id', edit); 

// ************ Exportamos ************
module.exports = router;