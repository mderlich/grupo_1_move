const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));

// ---------------------------------------------------------------
// ruta hacia... home
app.get('/', (req, res) => { res.sendFile( path.join(__dirname, '/views/home.html') ); });
app.post('/', (req, res) => { res.sendFile( path.join(__dirname, '/views/home.html') ); });

// ruta hacia... login
app.get('/login', (req, res) => { res.sendFile( path.join(__dirname, '/views/login.html') ); });
// ruta hacia... productCart
app.get('/productCart', (req, res) => { res.sendFile( path.join(__dirname, '/views/productCart.html') ); });
// ruta hacia... productDetail
app.get('/productDetail', (req, res) => { res.sendFile( path.join(__dirname, '/views/productDetail.html') ); });
// ruta hacia... register
app.get('/register', (req, res) => { res.sendFile( path.join(__dirname, '/views/register.html') ); });
// ---------------------------------------------------------------

// el puerto segun indiquen
app.listen(3000, () => console.log('Listo para ver en (Ctrl + Click)... http://localhost:3000/') );