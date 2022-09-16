function adminAuth (req, res, next) {
    
    /*
    caso 1... no esta logeado
    caso 2... esta logueado pero no es role "admin"
    */
    if( ( !req.session.userLogged ) || ( req.session.userLogged && req.session.userRole != "admin" )) {
        return res.redirect('/users/login')
    }
    next();

}

module.exports = adminAuth;