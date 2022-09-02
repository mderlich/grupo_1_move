const db = require('./src/database/models')

db.User.findOne({
    where: {
        email: ''
    },
    raw: true
})
.then((resultado) => console.log(resultado))



