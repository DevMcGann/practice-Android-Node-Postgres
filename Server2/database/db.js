const Sequelize = require("sequelize")
const db = {}

const user = 'postgres'
const host = 'localhost'
const database = 'mercadito'
const password = '123123'
const port = '5432'

const sequelize = new Sequelize(database,user,password, {
    host: host,
    port: port,
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

})

db.sequelize = sequelize
db.Sequelize = Sequelize



//syncronizar
sequelize.sync({force:true})
.then( ()=> {
    console.log("tablas creadas")
})

module.exports = db