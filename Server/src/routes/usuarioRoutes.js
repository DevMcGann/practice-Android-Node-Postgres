const router = require('express').Router();
const Usuario  = require('../models/Usuario');
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

router.use(cors())

router.post('/registrar', (req, res) => {
    const data = {
        nombre : req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password
    }

    Usuario.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    Usuario.create(data)
                        .then(user => {
                            res.json({ status: user.email + ' registrado con éxito!' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({ error: "El usuario ya existe" })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})




module.exports = router