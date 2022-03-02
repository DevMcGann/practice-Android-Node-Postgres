const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'ventas',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_vendedor: {
            type: Sequelize.INTEGER
        },
        id_comprador: {
            type: Sequelize.INTEGER
        },
        id_producto: {
            type: Sequelize.INTEGER
        },
        estado_pago: {
            type: Sequelize.STRING
        },
    },
    {
        timestamps: false
    }
)