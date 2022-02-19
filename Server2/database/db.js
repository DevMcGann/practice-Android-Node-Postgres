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
sequelize.sync({force:false})
.then( ()=> {
    console.log("tablas creadas")
})

module.exports = db


/* Host
ec2-18-233-27-224.compute-1.amazonaws.com
Database
d7ksaibf33u9o4
User
yonqruomtantkm
Port
5432
Password
68587a81147f1051e99a08390811aa0dbf3a81f399d4cea18876a95e707e7f14
URI
postgres://yonqruomtantkm:68587a81147f1051e99a08390811aa0dbf3a81f399d4cea18876a95e707e7f14@ec2-18-233-27-224.compute-1.amazonaws.com:5432/d7ksaibf33u9o4
Heroku CLI
heroku pg:psql postgresql-amorphous-43867 --app mercaditoapi */