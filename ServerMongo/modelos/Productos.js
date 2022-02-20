const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productosSchema = new Schema({
    // id:{
    //     type:String, 
    //     required:true
    // },
    nombre:{
        type:String,
        required:true
    },
    precio:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    imagen:{
        type:String
    },
    id_propietario:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Productos', productosSchema);
