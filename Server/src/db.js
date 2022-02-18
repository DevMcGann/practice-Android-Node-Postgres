const Sequelize = require('sequelize')

/* const Usuario = require('./models/Producto')
const Producto = require('./models/Producto')
const Pedido = require('./models/Pedido') */

const user = 'postgres'
const host = 'localhost'
const database = 'mercadito'
const password = '123123'
const port = '5432'

const sequelize = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'postgres',
    logging: false
  })


/* const usuario  = Usuario(sequelize, Sequelize)
const producto = Producto(sequelize,Sequelize)
const pedido = Pedido(sequelize,Sequelize) */

//syncronizar
sequelize.sync({force:false})
.then( ()=> {
    console.log("tablas creadas")
})


module.exports = {
/*     usuario,
    producto,
    pedido */
}