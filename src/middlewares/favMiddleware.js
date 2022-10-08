function favMiddleware (req, res, next) {
    
    /* si no esta logueado lo enviamos a login... */
    if( ( !req.session.userLogged ) ) {
        return res.redirect('/users/login')
    }
    next();

}

module.exports = favMiddleware;