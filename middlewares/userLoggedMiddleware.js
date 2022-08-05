const User = require('../src/models/Users');

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false; 

	let emailInCookie = req.cookies.userEmail; //solicito el mail que se guardo en la cookie
	let userFromCookie = User.findByField('email', emailInCookie); // con ese mail busco el usuario

    //si vino un usuario a traves de la cookie se lo paso a session:
	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	};

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged; //le paso a locals los datos del usuario loggeado
	};

	next();
}

module.exports = userLoggedMiddleware;


//DESPUES EN LA VISTA HAY QUE OCULTAR LA BARRA DE NAVEGACION SI ESTOY LOGGEADO Y EL PROFILE SI NO ESTOY LOGGEADO  (VER VIDEO 1.25)