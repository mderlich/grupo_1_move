
const db = require('../database/models');

async function userLoggedMiddleware(req, res, next) {
	
	// por defecto arranca en "false"
	res.locals.isLogged = false; 

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
		} 
	}
	/* COOKIE (fin)====================================== */

	/* 	
	else{
		res.send("no hay cookies");
	} 
	*/

	// Si existe la session...
	// caso 1... por login (session)
	// caso 2... por login + recordame (cookie + session)
	if(req.session.userLogged){
		//res.send("esta");
		res.locals.isLogged = true;
		//res.locals.userLogged = req.session.userLogged; 
	}



	next();
	/* -------------------- */
	
}

module.exports = userLoggedMiddleware;



//DESPUES EN LA VISTA HAY QUE OCULTAR LA BARRA DE NAVEGACION SI ESTOY LOGGEADO Y EL PROFILE SI NO ESTOY LOGGEADO  (VER VIDEO 1.25)