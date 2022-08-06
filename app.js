// ************ Require's ************
const express = require('express');
const path = require('path');
// Permite usar el method="POST" en el formulario como PUT y DELETE
const methodOverride =  require('method-override'); 
 //Requerimos el logMiddleware//   
//const logMiddleware = require('./middlewares/logMiddleware');

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
// ************ express() - (don't touch) ************
const app = express();
///*********************express-session require*************************///
const session = require('express-session');

var cookieParser = require('cookie-parser');


// ************ Middlewares - (don't touch) ************
// Necesario para los archivos estáticos en el folder /public
app.use(express.static(path.join(__dirname, '/public')));  
// Necesarios para utilizar method="POST"
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Permite usar el method="POST" en el formulario como PUT y DELETE
// npm install method-override --save
app.use(methodOverride('_method')); 
//Permite usar logmiddleware//
//app.use(logMiddleware);
// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
// Define la ubicación de la carpeta de las Vistas
app.set('views', path.join(__dirname, '/views')); 
//npm install express-session --save ----lo cruzamos a traves de toda la app, middleware lvlgloval
app.use(session({
    secret: "Secreto",
    resave: true,
    saveUninitialized: true
}));

app.use(cookieParser());

app.use(userLoggedMiddleware); //este middleware tiene que ir desp de session porque la sesion se tiene que inicializar antes

// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
const mainRouter = require('./src/routes/main'); // Rutas main
const zapatillasRouter = require('./src/routes/zapatillas'); // Rutas /products
const adminRouter = require('./src/routes/admin'); // Rutas admin
const usersRouter = require('./src/routes/users'); // Rutas users


app.use('/', mainRouter);
app.use('/zapatillas', zapatillasRouter);
app.use('/admin', adminRouter);
app.use('/users', usersRouter);

// ************ PUERTO ************
// el puerto segun indiquen
// Modificacion para emplear en Heroku... 'process.env.PORT ||'
const puerto = 3000;
app.listen(process.env.PORT ||  puerto , () => console.log("Listo para ver en (Ctrl + Click)... http://localhost:" + puerto) );