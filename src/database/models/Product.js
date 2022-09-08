module.exports = (sequelize, dataTypes) => {

    // ALIAS /////////////////////////
    let alias = 'Product'; 
    
    // COLUMNAS /////////////////////////
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_brand: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(600),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        gender: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
        origin: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
        observations: {
            type: dataTypes.STRING(500),
            allowNull: false
        }
 
    };

    // CONFIGURACION /////////////////////////
    let config = {
        tableName: 'products',
        timestamps: true,
    }

    // x3 /////////////////////////
    const Product = sequelize.define(alias,cols,config);

    // ASOCIACIONES /////////////////////////
    Product.associate = function(models) {

        Product.belongsTo(models.Brand, {
            as: 'brands',
            foreingKey: 'id_brand'
        })
        
    }

    // RETURN /////////////////////////
    return Product

};
