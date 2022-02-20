const Productos = require('../modelos/Productos.js');
const Usuarios = require('../modelos/Usuarios');

//subir imagen
const multer = require('multer');
const shortid = require('shortid');
const gm = require('gm').subClass({imageMagick: true});
const fs = require('fs');


const redimensionar = (upload) => {
    gm(upload)
        .resize(400, 400)
        .noProfile()
        .gravity('Center')
        .extent()
        .write(__dirname + '../../uploads/'  + 'ImagenProducto' + Date.now() , 
        function(err){
        if(!err) console.log('done');
        });
}


const configuracionMulter = {
    storage: fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname+'../../uploads/');
        },
        filename: (req, file, cb) => {
            const extension = file.mimetype.split('/')[1];
            cb(null, `${shortid.generate()}.${extension}`);
        }
         

    }),
    fileFilter(req, file, cb) {
        if ( file.mimetype === 'image/jpeg' ||  file.mimetype ==='image/png' ) {
            cb(null, true);
        } else {
            cb(new Error('Formato No válido'))
        }
    },
}
// pasar la configuración y el campo
const dimensionado = redimensionar(multer(configuracionMulter).single('imagen'))
const upload = multer(configuracionMulter).single('imagen');


exports.subirArchivo = (req,res,next)=> {
    
    upload(req,res, function(error){
        
        if(error){
            res.json({mensaje:"error"})
        }
        return next();
    })
    
}

////////////////////////////////////////////////////////////////////////////////////////////////////

exports.nuevoProducto = async (req,res,next) => {
    const producto = new Productos(req.body);
    console.log(producto)
    try {
        if(req.file.filename){
            producto.imagen = req.file.filename;
        }
        await producto.save();
        res.json({mensaje:"Producto agregado"})
    } catch (error) {
        console.log(error);
        res.json({mensaje:"Error en controlador de Productos - Metodo Nuevo Producto. "})
        next();
    }
}


exports.mostrarProductos = async (req,res,next) => {
    try {
        const productos = await Productos.find({});
        res.json(productos)
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.mostrarProductosPorIdPropietario = async (req, res, next) => {
    try {
        const productos = await Productos.find({ id_propietario: req.params.id_propietario }).exec();
        if(!productos){
            res.json({mensaje:"Este usuario no tiene productos a la venta"});
            return next();
        }else{
            res.json(productos)
        }
    } catch (error) {
        console.log(error);
        next();
    }
}


exports.mostrarProducto = async (req,res,next) => {
    const producto = await Productos.findById(req.params.idProducto);
    if(!producto){
        res.json({mensaje:"Ese producto no existe"});
        return next();
    }
    res.json(producto);
}


exports.actualizarProducto=async(req,res,next) => {
    try {
        let productoAnterior = await Productos.findById(req.params.idProducto);
        let nuevoProducto = req.body;
        if(req.file){
            nuevoProducto.imagen=req.file.filename;
        }else{
            nuevoProducto.imagen=productoAnterior.imagen;
        }
    let producto = await Productos.findOneAndUpdate({_id:req.params.idProducto}, nuevoProducto, {new:true});
    res.json(producto)

    } catch (error) {
        console.log(error);
        next();
    }
}



exports.eliminarProducto = async (req,res,next) => {
    try {
        const producto = await Productos.findById({_id:req.params.idProducto})
        console.log(producto.imagen)
        fs.unlink(__dirname + '../../uploads/' + producto.imagen, function (err) {
        if (err) throw err;
        // if no error, file has been deleted successfully
        console.log('File deleted!');
        });

        
        await Productos.findOneAndDelete({_id: req.params.idProducto});
        
        res.json({mensaje:"Producto Eliminado"})
    } catch (error) {
        console.log(error);
        next();
    }
}


exports.buscarProducto = async (req,res,next) => {
    try {
        const {query} = req.params;
        const producto = await Productos.find({nombre: new RegExp(query,'i')});
        res.json(producto);
    } catch (error) {
        console.log(error);
        next();
    }
}