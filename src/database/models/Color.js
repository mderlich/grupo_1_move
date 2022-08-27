module.exports = (sequelize, dataTypes) => {
    let alias = 'Color'; 
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
        tableName: 'colors',
        timestamps: false,
    }
    const Color = sequelize.define(alias,cols,config);

    Color.associate = function(models) {
        Color.hasMany(models.Product, { //  Es el valor de alias en el modelo
            as: "products", // El nombre del modelo pero en plural
            foreignKey: "id_color"
        })
    }

    return Color
};