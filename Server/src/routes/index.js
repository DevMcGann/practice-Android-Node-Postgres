const router = require('express').Router();
const usuariosRoutes = require('./usuarioRoutes');
const productosRoutes = require('./productoRoutes');
const ventasRoutes = require('./ventasRoutes');

router.use('/usuarios', usuariosRoutes);
router.use('/productos', productosRoutes);
router.use('/ventas', ventasRoutes);

module.exports = router;