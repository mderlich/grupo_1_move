const path = require('path');

//Express validator
// Hago una destructuracion, puede hacerse con check tmb:
const { body } = require('express-validator');

const validations = [
  body('name').notEmpty().withMessage('Tienes que ingresar un nombre'),
  body('last_name').notEmpty().withMessage('Tienes que ingresar un apellido'),
  body('email')
      .notEmpty().withMessage('Tienes que ingresar un email').bail()
      .isEmail().withMessage('Tienes que ingresar un formato valido'),
  body('password').notEmpty().withMessage('Tienes que ingresar una contrasena'),
  body('genero').notEmpty().withMessage('Tienes que completar este campo'),
  body('profileImage').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [ '.jpg', '.png', '.gif'];

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