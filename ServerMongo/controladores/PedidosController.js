const Pedidos = require('../modelos/Compra');

exports.nuevoPedido = async (req, res, next) => {
    const pedido = new Pedidos(req.body);
    try{
        //cheaquear el pago
        //TODO: 


        await pedido.save();
        res.json({mensaje: 'Se agregó el pedido'})
    }catch(error){
        console.log(error);
        next();
    }
}

exports.mostrarPedidos = async (req,res,next)=> {
    try{
        const pedidos = await Pedidos.find({}).populate('cliente').populate({
            path:'pedido.producto',
            model:'Productos'
        });
        res.json({mensaje: 'ahi salen capo'})
    }catch(error){
        console.log(error);
        next();
    }
}

exports.mostrarPedidoPorId = async (req,res,next)=>{
    try{
        const pedido = await Pedidos.findById(req.params.idPedido).populate('cliente').populate({
            path:'pedido.producto',
            model:'Productos'
        });
        if(!pedido){
            res.json({mensaje: 'no existe ese pedido'});
            next();
        }
        res.json(pedido)
    }catch(error){
        console.log(error);
        next();
    }
}


exports.actualizarPedido = async (req,res,next)=>{
    try{
        let pedido = await Pedidos.findOneAndUpdate({_id : req.params.idPedido}, req.body ,{
            new:true
        }).populate('cliente').populate({
            path:'pedido.producto',
            model:'Productos'
        });
        
        res.json(pedido)
    }catch(error){
        console.log(error);
        next();
    }
}

exports.eliminarPedido = async (req,res,next)=>{
    try{
         await Pedidos.findOneAndDelete({_id : req.params.idPedido});
        res.json({mensaje: 'Se eliminó el pedido'});
    }catch(error){
        console.log(error);
        next();
    }
}