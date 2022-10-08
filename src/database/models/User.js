module.exports = (sequelize, dataTypes) => {
    
    // ALIAS /////////////////////////
    let alias = 'User'; 

    // COLUMNAS /////////////////////////
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(30),
            allowNull: false
            /* OBS, habria que hacerlo UNICO tambien */
        },
        password: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        gender: {
            type: dataTypes.STRING(10),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        role: {
            type: dataTypes.STRING(10),
            allowNull: false
        }
        
       
    };

    // CONFIGURACION /////////////////////////
    let config = {
        tableName: 'users',
        timestamps: false,
    }

    // x3 /////////////////////////
    const User = sequelize.define(alias,cols,config);

    // ASOCIACIONES /////////////////////////
    User.associate = function(models) {
        User.hasMany(models.Fav, { //  Es el valor de alias en el modelo
            foreignKey: "id_user",
            as: "favs" // El nombre del modelo pero en plural
        })
    } 

    // RETURN /////////////////////////
    return User

};
