module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
           
        },
        nombre:type.STRING,
        apellido:type.STRING,
        email:type.STRING,
        password: type.STRING,
    })
}