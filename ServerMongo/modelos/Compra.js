const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comprasSchema = new Schema({
    comprador:{
        type:Schema.ObjectId,
        ref: 'Usuarios'
    },
    id_vendedor:{
        type:String,
        required:true
    },
    // producto :{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'Productos'
    // },

    pedido:[{
        producto:{
            type:Schema.ObjectId,
            ref: "Producdos"
        },
        cantidad:Number
    }],

    total:{type:Number},
    
    estadoPago:{
        type:String,
        required:true
    },

   
});

module.exports = mongoose.model('Compras', comprasSchema);
