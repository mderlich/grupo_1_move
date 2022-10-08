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
        },
        create_at: {
            type: dataTypes.DATE,
            allowNull: false
        },
        update_at: {
            type: dataTypes.DATE,
            allowNull: false
        }
 
    };

    // CONFIGURACION /////////////////////////
    let config = {
        tableName: 'products',
        timestamps: false,
    }

    // x3 /////////////////////////
    const Product = sequelize.define(alias,cols,config);

    // ASOCIACIONES /////////////////////////
    Product.associate = function(models) {
        Product.belongsTo(models.Brand, {
            foreignKey: 'id_brand',
            as: 'brands'
        })
    }

/*       Product.associate = function(models) {
        Product.hasMany(models.Fav, { //  Es el valor de alias en el modelo
            foreignKey: "id_product",
            as: "favs" // El nombre del modelo pero en plural
        })
    }   */


    // RETURN /////////////////////////
    return Product

};
