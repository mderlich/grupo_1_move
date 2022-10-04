const db = require("../../database/models");
const Op = db.Sequelize.Op;

const productsApiController = {
    list: async (req, res) => {
       
        let products = await db.Product.findAll();
        let productsApi = products.map( (product) => {  //recorro los productos y a cada uno le agrego el detail con una url
          
          return {
            id: product.id,
            name: product.name,
            description: product.description,
            brand: product.id_brand,
            relation: "", //falta esto
            detail: 'http://localhost:3000/api/products/'+ product.id, 
           // image: 'http://localhost:3000/api/products/'+ product.image
          } 
        })
        res.json({
          meta : {
            status: 200,
            count: products.length,
            countByBrand: "", //falta completar esto
          },
          productsApi
          
        });
    },
    productsDetails: async (req,res)=>{
     
        let oneProduct = await db.Product.findOne({
          where: {id : req.params.id},
        })
        res.json({
          meta : {
            status:200
          },
          data: {
            ...oneProduct.dataValues, //la promesa me devuelve un objeto del cual solo me interesa la propiedad dataValues
            relation: '', //falta completar esto
            urlImage: 'http://localhost:3000/images/products/' + oneProduct.dataValues.image
          }
        });
    },
    getBrands: async (req, res) => {
      let brands = await db.Brand.findAll();
      res.json({
      brands,
      count: brands.length
    })
    }
}

module.exports = productsApiController;