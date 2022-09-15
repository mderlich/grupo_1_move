
// util para las validaciones del formulario...
const { check } = require('express-validator');


// Validaciones del formulario...
const validateForm = [
    // Verifica que el campo no esté vacío
    check('marca')
        .notEmpty().withMessage('MARCA // No puede estar vacio'),
    // Verifica la longitud de los datos
    check('nombre')
        .notEmpty().withMessage('NOMBRE // No puede estar vacio').bail()
        .isLength({ min: 5, max: 30 }).withMessage('NOMBRE // debe tener entre 5 y 30 caracteres'),
    // Verifica que sea un número entero
    check('precio')
        .isInt().withMessage('PRECIO // Debe ser un numero entero'),
    check('descuento')
        .isInt().withMessage('DESCUENTO // Debe ser un numero entero'),
    check('descripcion')
        .notEmpty().withMessage('DESCRIPCION // No puede estar vacio').bail()
        .isLength({ min: 20, max: 600 }).withMessage('NOMBRE // debe tener entre 20 y 600 caracteres'),
    check('genero')
        .notEmpty().withMessage('GENERO // No puede estar vacio'),
    check('origen')
        .notEmpty().withMessage('ORIGEN // No puede estar vacio'),
    // nro_serie */
    // ERROR IMAGEN (customizado)
    check('image').custom( (value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif','.jpeg'];
        if(!file){
            throw new Error ('IMAGEN // Tienes que subir una imagen');
        }else {
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
            throw new Error ('IMAGEN // Extensiones permitidas son...' + acceptedExtensions.join(', '));
            }
        }
            return true;
        })

]



module.exports = validateForm;