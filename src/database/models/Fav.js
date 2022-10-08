module.exports = (sequelize, dataTypes) => {

    // ALIAS /////////////////////////
    let alias = 'Fav'; 
    
    // COLUMNAS /////////////////////////
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        id_user: {
            type: dataTypes.INTEGER,
        },

        id_product: {
            type: dataTypes.INTEGER,
        }
       
    };

    // CONFIGURACION /////////////////////////
    let config = {
        tableName: 'favs',
        timestamps: false,
    }

    // x3 /////////////////////////
    const Fav = sequelize.define(alias,cols,config);

    // ASOCIACIONES /////////////////////////
    Fav.associate = function(models){
        Fav.belongsTo(models.User, {
            foreignKey: "id_user",
            as: "users" // El nombre del modelo pero en plural
        });
    }

    Fav.associate = function(models){
        Fav.belongsTo(models.Product, {
            foreignKey: "id_product",
            as: "products"
        });
    }

    // RETURN /////////////////////////
    return Fav

};
