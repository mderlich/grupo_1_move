// ************ Require's ************
const fs = require('fs');
const path = require('path');


const controller = {

    // REGISTER ************
    admin: (req, res) => {

        const productsFilePath = path.join(__dirname, '../database/products.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        res.render( 'productRead');

	},

    // REGISTER ************
    create: (req, res) => {

        const productsFilePath = path.join(__dirname, '../database/products.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        res.render( 'productCreate');

    },

};

module.exports = controller;