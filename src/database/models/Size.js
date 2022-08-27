module.exports = (sequelize, dataTypes) => {
    let alias = 'Size'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        size_number: {
            type: dataTypes.INTEGER,
        }
       
    };
    let config = {
        tableName: 'sizes',
        timestamps: false,
    }
    const Size = sequelize.define(alias,cols,config);

    Size.associate = function(models) {
        Size.hasMany(models.Product, { //  Product es el valor de alias
            as: "products", // El nombre del modelo pero en plural
            foreignKey: "id_size"
        })
    }

    return Size
};
