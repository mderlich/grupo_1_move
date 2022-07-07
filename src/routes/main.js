const express = require("express");
const router = express.Router();


router.get('/', (req, res) => { 
    res.render('home') });
    
router.post('/', (req, res) => { 
    res.render('home') });

// ruta hacia... login
router.get('/login', (req, res) => { 
    res.render( 'login') });

// ruta hacia... productCart
router.get('/productCart', (req, res) => { 
    res.render('productCart') });

// ruta hacia... productDetail
router.get('/productDetail', (req, res) => { 
    res.render( 'productDetail') });

// ruta hacia... register
router.get('/register', (req, res) => { 
    res.render( 'register') });

// ruta hacia... forget password
router.get('/forgetpw', (req, res) => { 
    res.render( 'forgetpw') });


// ruta hacia... creacion de usuario
router.get('/register', (req, res) => { 
    res.render( 'register') });


