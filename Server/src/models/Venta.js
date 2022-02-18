module.exports = (sequelize, type) => {
    return sequelize.define('ventas', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
           
        },
        vendedor_id:type.INTEGER,
        compardor_id:type.INTEGER,
        productos_id:type.ARRAY(INTEGER),
        precio: type.DOUBLE,
        pago:type.BOOLEAN,
        estado_pago:type.STRING
    })
}