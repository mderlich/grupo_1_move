const { validationResult } = require('express-validator')

// para base de datos...
const db = require('../database/models');

// para el encriptado de password...
const bcryptjs = require('bcryptjs');


const usersController = {

    register: function(req, res) { 
        res.render('register');
    },   

    processRegister: async function (req, res) {

        //Hago la validacion de lo que viene en el request:
        const result = validationResult(req);
        // Esto me devuelve un objeto literal con la propiedad errors, y dentro de esto un array con los campos que tuvieron error, 
        //tiene un indice por cada campo que valide, y en cada indice tiene un objeto literal

        //si hay errores (el array no esta vacio, es decir, existe la propiedad errors del objeto):
        //el mapped() es un metodo de express que toma el array y lo convierte en objeto literal
        if(result.errors.length > 0){
           return res.render('register', { 
                errors : result.mapped(),
                oldData: req.body //Para mantener la info que estaba bien y no dio error, desp la paso a la vista
            });
        }

        //VALIDACION: Antes de crearlo chequeo si ya hay un usuario registrado con ese mail:
        let userEmail = req.body.email

        const userExist = await db.User.findOne({
            where: {
                email: userEmail
            },
            raw: true
        })

        if(userExist) {
            return res.render('register', { 
                errors : { email : { msg: 'Este email ya esta registrado'}},
                oldData: req.body
            })
        }


        await db.User.create(
            {
                first_name: req.body.name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10), // password hasheado
                gender: req.body.genero,
                image: req.file.filename,
                role: 'user'
            }
        )
        
        

        return res.redirect('/users/login')
                     

        
         //VALIDACION: Antes de crearlo chequeo si ya hay un usuario registrado con ese mail:
        // let userInDb = User.findByField('email', req.body.email);
        // if(userInDb) {
        //     res.render('register', { 
        //         errors : { email : { msg: 'Este email ya esta registrado'}},
        //         oldData: req.body
        //     });
        // };

        //Le agrego la imagen que viene en el req.file, no en el body, y le piso la contrasena por una hasheada:
        // let userToCreate = {
        //     ...req.body,
        //     password: bcryptjs.hashSync(req.body.password, 10), // este password va a pisar el campo con el mismo nombre que viene en el body, que seria la contrasena sin hashear
        //     profileImage: req.file.filename
        // };

        // //Creo el usuario, lo guardo en una variable y redirijo al login:
        // let userCreated = User.create(userToCreate);
        // return res.redirect('/users/login'); 
        },
        
    login: function(req, res) {
        res.render('login');
    },

    loginProcess: (req, res) => {

        //VALIDACIONES: verifico si existe un usuario con ese mail, y luego si la contrasena es correcta:
        //let userToLogin = User.findByField('email', req.body.email);
        
        let userEmail = req.body.email
        db.User.findOne({
            where: {
                email: userEmail
            },
            raw: true
        })
        .then((userToLogin) => {


            if(userToLogin){

                let isPasswordOk = bcryptjs.compareSync(req.body.password, userToLogin.password)

                // si el password es correcto...
                if(isPasswordOk){
    
                    //Antes de redirigir me guargo la info del usuario logueado para usarlo en session:
                    //el password no quiero que quede guardado en session
                    // (el delete es un operador que remueve una propiedad de un objeto)
                    delete userToLogin.password; 
                    req.session.userLogged = userToLogin;
                    /* Guardamos el rol que tiene el usuario (util para "ADMIN") */
                    req.session.userRole = userToLogin.role;
    
                    // Si quiere recordar logueo guardamos en cookie
                    if(req.body.recordarme){
                        //primero le paso el nombre, desp lo que quiero que me guarde y desp la duracion
                        // "cookie" (sin ese) para creacion!
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) *2}) 
                    }
    
                    //Si esta ok la contrasena redirijo al perfil del usuario:
                    return res.redirect('/users/profile');
                }

                //Si la contrasena es incorrecta mando error a la vista:
                return res.render('login', { errors: { email : {msg: 'ERROR // password incorrecto'}}})

            }
    
            //Si no encuentra el email manda un error a la vista:
            return res.render('login', { errors: { email : {msg: 'ERROR // email inexistente'}}})
        }) 
    },

    profile: function(req, res) {
        res.render('profile', { user: req.session.userLogged  }); //mando a la vista el nombre del usuario loggeado
    },

    editProfile: function(req, res){ 
        let userId =  req.params.id;
        res.render('editProfile', { user: req.session.userLogged }); //mando a la vista el nombre del usuario loggeado
      
    },

    updateProfile: async function(req, res){ 

        // ACTUALIZAMOS...
        const userToLogin = 
            {
                first_name: req.body.name,
                last_name: req.body.last_name,
                gender: req.body.genero,
            }

        await db.User.update(
            userToLogin,
            {
                where: {id: req.params.id}
            }
        )

        // TRAEMOS LOS NUEVOS VALORES
        let userNewValues = await db.User.findOne({
            where: { id: req.params.id }
        })
   
        delete userNewValues.password; 
        req.session.userLogged = userNewValues;

        return res.redirect('/users/profile'); 

    },

    logout: function(req, res){ 
        // tengo que borrar la cookie porque si no voy a seguir loggeado aunque haga logout
        // porque la cookie le va a seguir pasando el usuario a session hasta que pase el tiempo seteado y se destruya
        res.clearCookie('userEmail'); 
        // el destroy borra todo lo que esta en session
        req.session.destroy(); 
        return res.redirect('/');
    },
}

module.exports = usersController;




