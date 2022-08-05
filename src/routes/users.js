var express = require('express');
const router = express.Router();

//Controlador
const usersController = require('../controllers/usersController');

//Middlewares a nivel de rutas
const uploadFile = require('../../middlewares/multerMiddleware');
const validations = require('../../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../../middlewares/guestMiddleware');
const authMiddleware = require('../../middlewares/authMiddleware');


//RUTEO:
//Muestra la vista register:
router.get('/register', guestMiddleware, usersController.register);

//Procesa el register: (al middleware le paso el atributo name que puse en el formulario en la vista:)
router.post('/register', uploadFile.single('profileImage'), validations, usersController.processRegister);

// muestra la vista login:
router.get('/login', guestMiddleware, usersController.login);

//Procesa el login:
router.post('/login', usersController.loginProcess);

//Muestra el perfil de usuarios:
router.get('/profile/', authMiddleware, usersController.profile);

//Logout:
router.get('/logout/', usersController.logout);

module.exports = router;
