const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');

const mainRoutes = require('./src/routes/main');
app.use('/', mainRoutes);

// el puerto segun indiquen
// Modificacion para emplear en Heroku... 'process.env.PORT ||'
app.listen(process.env.PORT || 3000, () => console.log('Listo para ver en (Ctrl + Click)... http://localhost:3000/') );