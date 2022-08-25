module.exports = (sequelize, dataTypes) => {
    let alias = 'User'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        gender: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
       
    };
    let config = {
        tableName: 'users',
        timestamps: false,
    }
    const User = sequelize.define(alias,cols,config);

   

    return User
};
