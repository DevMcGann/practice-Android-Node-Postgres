module.exports = (sequelize, type) => {
    return sequelize.define('productos', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
           
        },
        owner_id: type.INTGER,
        nombre:type.STRING,
        descripcion: type.STRING,
        precio:type.DOUBLE,
        imagenes:type.ARRAY(Sequelize.STRING)
    })
}