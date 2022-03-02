const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'productos',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_propietario:{
            type:Sequelize.INTEGER
        },
        titulo: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        },
        precio: {
            type: Sequelize.INTEGER
        },
        imagen: {
            type: Sequelize.STRING
        },
    },
    {
        timestamps: false
    }
)