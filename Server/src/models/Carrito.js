module.exports = (sequelize, type) => {
    return sequelize.define('carritos', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
           
        },
        usuario_id:type.INTEGER,
        productos_id:type.ARRAY(INTEGER),
       
    })
}