
// util para las validaciones del formulario...
const { body } = require('express-validator');


// Validaciones del formulario...
const validateForm = [
    // Verifica que el campo no esté vacío
    body('marca')
        .notEmpty().withMessage('MARCA // No puede estar vacio'),
    // Verifica la longitud de los datos
    body('nombre')
        .notEmpty().withMessage('NOMBRE // No puede estar vacio').bail()
        .isLength({ min: 5, max: 30 }).withMessage('NOMBRE // debe tener entre 5 y 30 caracteres'),
    // Verifica que sea un número entero
    body('precio')
        .isInt().withMessage('PRECIO // Debe ser un numero entero'),
    body('descuento')
        .isInt().withMessage('DESCUENTO // Debe ser un numero entero'),
    body('descripcion')
        .notEmpty().withMessage('DESCRIPCION // No puede estar vacio'),
    body('genero')
        .notEmpty().withMessage('GENERO // No puede estar vacio'),
    body('origen')
        .notEmpty().withMessage('ORIGEN // No puede estar vacio'),
    // nro_serie */

]


module.exports = validateForm;