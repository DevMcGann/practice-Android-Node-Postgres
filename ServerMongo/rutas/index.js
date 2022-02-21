const express = require('express');
const router = express.Router();

const usuariosController = require('../controladores/UsuariosController');
const productosController = require('../controladores/ProductosController');
const pedidosController = require('../controladores/PedidosController');

const auth = require('../middleware/Auth.js');


module.exports = function(){

      //crear usuario
      router.post('/usuarios/nuevo', usuariosController.registrarUsuario);
      //iniciar sesion
      router.post('/usuarios/login', usuariosController.autenticarUsuario);

    router.post('/productos/nuevo',
        productosController.subirArchivo,
        productosController.nuevoProducto
    );
    
    router.get('/productos', productosController.mostrarProductos);
    router.get('/productos/:idProducto', productosController.mostrarProducto);
    router.put('productos/:idProducto',
        auth,
        productosController.subirArchivo,
        productosController.actualizarProducto
    );
    router.delete('/productos/:idProducto', productosController.eliminarProducto);
    router.post('/productos/busqueda/:query', productosController.buscarProducto);
    
    //******PEDIDOS****** */
    router.get('/pedidos', pedidosController.mostrarPedidos);
    router.post('/pedidos/nuevo', pedidosController.nuevoPedido);
    router.get('pedido/:idPedido', pedidosController.mostrarPedidoPorId);
    router.put('pedido/:idPedido', pedidosController.actualizarPedido);
    router.delete('pedido/:idPedido', pedidosController.eliminarPedido);
    
    return router;
    
    }