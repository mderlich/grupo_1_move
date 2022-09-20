// ************ Require's ************
const fs = require('fs');
const path = require('path');




/* 
OBS no se empleo aun, creo es para pasar a miles los numeros... ej 1.000
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); 
*/

const controller = {

    // INDEX ************
	index: (req, res) => {

        res.render( 'index');

	},

    

    // FORGET PASWORD ************
    forgetpw: (req, res) => {

        const productsFilePath = path.join(__dirname, '../database/products.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        res.render( 'forgetpw');
    
	},


	carrito: (req, res) => {

		res.render('productCart');

	},
  

};

module.exports = controller;
