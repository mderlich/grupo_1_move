/* const express = require('express');
const router = express.Router();
const { body } = require('express-validator');


// ************ Controller Require ************
const {

    store
    
} = require('../controllers/loginController');

// Validaciones
const validateCreateForm = [
body('nombre').notEmpty().withMessage('Debes completar es campo de nombre'),
body('apellido').notEmpty().withMessage('Debes completar es campo de apellido'),
body('email').isEmail().withMessage('Debes completar es campo'),
]


// Procesamiento de formulario de creación
router.post('/', validateCreateForm ,store);


module.exports = router; */