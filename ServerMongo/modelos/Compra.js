const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comprasSchema = new Schema({
    // id:{
    //     type:String, 
    //     required:true
    // },
    producto :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Productos'
    },
    cantidad:{
        type:Number,
        required:true
    },
    estadoPago:{
        type:String,
        required:true
    },
    id_compradror:{
        type:String,
        required:true
    },
    id_vendedor:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Compras', comprasSchema);
