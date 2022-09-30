const db = require("../../database/models");
const Op = db.Sequelize.Op;

const productsApiController = {
    list: (req, res) => {
        db.Product.findAll()
        .then(products => {
            return res.json(products)
        })
    }
}

module.exports = productsApiController;