const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()

var port = process.env.port || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

const Users = require('./routes/Users')

app.use('/users', Users)

app.listen(port, () => {
    console.log("Servidor corriendo en puerto " + port)
})