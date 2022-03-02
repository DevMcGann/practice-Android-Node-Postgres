const express = require("express")
const prodRouter = express.Router()

const Producto = require("../models/Productos")

prodRouter.get('/productos', async  (req, res) => {
  const prd = await Producto.getAll()
  res.sendStatus(prd)
})

prodRouter.post('/producto', async (req,res) => {
    const producto = {
        id_propietario : req.body.id_propietario,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        imagen: req.body.imagen
    }

    const response = await Producto.create(producto)
    return res.sendStatus(response)
})