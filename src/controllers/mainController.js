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

        const productsFilePath = path.join(__dirname, '../database/products.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        /* --------------------------------------------
		// array de 'visited'
		const visited = products.filter((product)=> {
			return product.category === 'visited';
		});

		// array de 'in-sale'
		const sale = products.filter((product)=> {
			return product.category === 'in-sale';
		});

		res.render('index', { 
			visited: visited,
			sale: sale 
		});
        -------------------------------------------- */

        res.render( 'index');

	},

    // SEARCH ************
	search: (req, res) => {

        /* --------------------------------------------
        const productsFilePath = path.join(__dirname, '../database/products.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let buscado = req.query.keywords.toLowerCase();

		let resultados = [];

		for (let i = 0; i < products.length; i++) {
            if ( (products[i].name.toLowerCase()).includes(buscado) ) {
                // acá lo encontramos al producto
                resultados.push( products[i] );
            }
        }

 		res.render('results', { 
			productDetail: resultados
		});
        -------------------------------------------- */

        res.render( 'results');

	},

    // LOGIN ************
	login: (req, res) => {

        const productsFilePath = path.join(__dirname, '../database/products.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        res.render( 'login');

	},

    // REGISTER ************
    register: (req, res) => {

        const productsFilePath = path.join(__dirname, '../database/products.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        res.render( 'register');

	},

    // FORGET PASWORD ************
    forgetpw: (req, res) => {

        const productsFilePath = path.join(__dirname, '../database/products.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        res.render( 'forgetpw');
    
	},


  

};

module.exports = controller;
