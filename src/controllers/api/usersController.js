const db = require("../../database/models");
const Op = db.Sequelize.Op;

const controller ={
    users: async (req, res) => {
       
          let users = await db.User.findAll({
            attributes: ['id','first_name','last_name','email' ] //selecciono solo los datos que quiero mostrar(si no me va a traer password y demas)
          });
          let usersApi = users.map( (user) => {  //recorro los usuarios y a cada uno le agrego el detail con una url
            
            return {
              id: user.id,
              first_name: user.first_name,
              last: user.last_name,
              email: user.email,
              detail: 'http://localhost:3000/api/users/'+ user.id, 
            } 
          })
          res.json({
            status: 200,
            count: users.length,
            data: usersApi,
          });
      },
      usersDetails: async (req,res)=>{
       
          let oneUser = await db.User.findOne({
            where: {id : req.params.id},
            attributes: ['id','first_name','last_name','email', 'image']
          })
          res.json({
            status:200,
            data:{
              ...oneUser.dataValues, //la promesa me devuelve un objeto del cual solo me interesa la propiedad dataValues
              urlImage: 'http://localhost:3000/images/users/' + oneUser.dataValues.image
            }
          });
       

      },
    
}




module.exports=controller