module.exports = (sequelize, dataTypes) => {

    // ALIAS /////////////////////////
    let alias = 'Brand'; 
    
    // COLUMNAS /////////////////////////
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(20),
        }
       
    };

    // CONFIGURACION /////////////////////////
    let config = {
        tableName: 'brands',
        timestamps: false,
    }

    // x3 /////////////////////////
    const Brand = sequelize.define(alias,cols,config);

    // ASOCIACIONES /////////////////////////
    Brand.associate = function(models) {

        Brand.hasMany(models.Product, { //  Es el valor de alias en el modelo
            as: "products", // El nombre del modelo pero en plural
            foreignKey: "id_brand"
        })
        
    }

    // RETURN /////////////////////////
    return Brand

};
