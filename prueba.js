const db = require('./src/database/models')

db.User.findOne({
    where: {
        email: 'estefi@gmail.com'
    },
    raw: true
})
.then((resultado) => console.log(resultado))



