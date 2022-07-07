// ************ Require's ************
const express = require('express');
const path = require('path');
// Permite usar el method="POST" en el formulario como PUT y DELETE
const methodOverride =  require('method-override'); 


// ************ express() - (don't touch) ************
const app = express();


// ************ Middlewares - (don't touch) ************
// Necesario para los archivos estáticos en el folder /public
app.use(express.static(path.join(__dirname, '/public')));  
// Necesarios para utilizar method="POST"
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Permite usar el method="POST" en el formulario como PUT y DELETE
// npm install method-override --save
app.use(methodOverride('_method')); 

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
// Define la ubicación de la carpeta de las Vistas
app.set('views', path.join(__dirname, '/views')); 




// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
const mainRouter = require('./src/routes/main'); // Rutas main
const productsRouter = require('./src/routes/products'); // Rutas /products

app.use('/', mainRouter);
app.use('/products', productsRouter);



// ************ PUERTO ************
// el puerto segun indiquen
// Modificacion para emplear en Heroku... 'process.env.PORT ||'
const puerto = 3000;
app.listen(process.env.PORT ||  puerto , () => console.log("Listo para ver en (Ctrl + Click)... http://localhost:" + puerto) );