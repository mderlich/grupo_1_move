const path = require('path');

const { body } = require('express-validator');

const validations = [
  body('name')
    .notEmpty().withMessage('Tienes que ingresar un nombre')
    .isLength({min:2}).withMessage('Debe contener al menos 2 caracteres'),
  body('last_name')
    .notEmpty().withMessage('Tienes que ingresar un apellido')
    .isLength({min:2}).withMessage('Debe contener al menos 2 caracteres'),
  body('email')
      .notEmpty().withMessage('Tienes que ingresar un email').bail()
      .isEmail().withMessage('Tienes que ingresar un formato valido'),
  body('password')
    .notEmpty().withMessage('Tienes que ingresar una contrasena')
    .isLength({min:8}).withMessage('Debe contener al menos 8 caracteres')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/).withMessage('Debe contener al menos una letra mayúscula, una minúscula, un número y un carácter especial'),
  body('genero').notEmpty().withMessage('Tienes que completar este campo'),
  body('profileImage').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [ '.jpeg','.jpg', '.png', '.gif'];

    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if(!acceptedExtensions.includes(fileExtension)) {
        throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
      }
    }

    return true;
  })
];

module.exports = validations;