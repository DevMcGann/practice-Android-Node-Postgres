const Usuarios = require('../modelos/Usuarios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.registrarUsuario = async (req, res) => {
    const usuario = new Usuarios(req.body);
    usuario.password = await bcrypt.hash(req.body.password, 12);
    try {
        await usuario.save();
        res.json({mensaje : 'Usuario Creado Correctamente'});
    } catch (error) {
        console.log(error);
        res.json({mensaje : 'Hubo un error'});
    }
    
}

exports.autenticarUsuario = async (req,res,next) => {
    //buscar el user por mail
    const {email,password} = req.body;
    const usuario = await Usuarios.findOne({email});

     if (!usuario) {
         await res.status(401).json({mensaje: 'Usuario o pass incorrecto'});
         next();
     }else{
         //si el user existe pero el pass esta incorrecto
         if (!bcrypt.compareSync(password, usuario.password)) {
            await res.status(401).json({mensaje: 'Usuario o pass incorrecto'});
            next();
         }else{
             //psw correcto, firmar token
             const token = jwt.sign(
                {
                    email:usuario.email,
                    password:usuario.password,
                    id:usuario._id
                },
                'LLAVESECRETA',  
                {
                    expiresIn:'300h'
                }
            );

            res.json({token});
         }
     }   
}