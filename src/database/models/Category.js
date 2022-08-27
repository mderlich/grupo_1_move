module.exports = (sequelize, dataTypes) => {
    let alias = 'Category'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45),
        }
       
    };
    let config = {
        tableName: 'categories',
        timestamps: false,
    }
    const Category = sequelize.define(alias,cols,config);

    Category.associate = function(models) {
        Category.hasMany(models.Product, { //  Es el valor de alias en el modelo
            as: "products", // El nombre del modelo pero en plural
            foreignKey: "id_category"
        })
    }

    return Category
};
