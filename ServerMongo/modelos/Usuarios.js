const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
    // id:{
    //     type:String,
    //     required:true
    // },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        
    },
    nombre:{
        type: String,
        required:true
    },
    apellido:{
        type: String,
        required:true
    },
    direccion:{
        type: String,
        required:true
    },
    telefono:{
        type: String,
        required:true
    },
    dni:{
        type: String,
        required:true
    },
   

});

module.exports = mongoose.model('Usuarios', usuariosSchema);