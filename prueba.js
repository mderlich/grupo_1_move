const bcrypt = require('bcrypt')

let password = "tomandomate"; 

let resultado = bcrypt.hashSync (password,10);
 console.log(password)
 console.log(resultado);
