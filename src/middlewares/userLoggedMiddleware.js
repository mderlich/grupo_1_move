
const db = require('../database/models');

async function userLoggedMiddleware(req, res, next) {
	
	// por defecto arranca en "false"
	res.locals.isLogged = false; 
	res.locals.isAdmin = false;


	/* COOKIE (inicio)====================================== */
	//solicito el mail que se guardo en la cookie
	let emailInCookie = req.cookies.userEmail; 
	// ¿Hay cookies?
	// ¿Hay cookies?
	if(emailInCookie){
		//res.send("hay cookies");
        const userFromCookie = await db.User.findOne({
            where: {
                email: emailInCookie
            }
        })

		// si hay resultados en la db que coinciden...
		if(userFromCookie){

			delete userFromCookie.password; // le sacamos el password por las dudas
			req.session.userLogged = userFromCookie;
			req.session.userRole = userFromCookie.role;
		} 
	}
	/* 	
	else{
		res.send("no hay cookies");
	} 
	*/
	/* COOKIE (fin)====================================== */


	
	// ----------------------------------------------------
	// SESSION // Si existe la session...
	// caso 1... por login (session)
	// caso 2... por login + recordame (cookie + session)
	if(req.session.userLogged){

		res.locals.isLogged = true;
		//la sig linea no la utilice, aunque en el video la indicaron
		//res.locals.userLogged = req.session.userLogged; 
	}
	// ----------------------------------------------------

	// ----------------------------------------------------
	// SESSION // Role "admin" chequear...
	// caso 1... por login (session)
	// caso 2... por login + recordame (cookie + session)
	if( req.session.userLogged && req.session.userRole == "admin" ){

		res.locals.isAdmin = true;

	}
	// ----------------------------------------------------

	


	next();
	/* -------------------- */
	
}

module.exports = userLoggedMiddleware;



//DESPUES EN LA VISTA HAY QUE OCULTAR LA BARRA DE NAVEGACION SI ESTOY LOGGEADO Y EL PROFILE SI NO ESTOY LOGGEADO  (VER VIDEO 1.25)