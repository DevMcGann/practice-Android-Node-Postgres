// mongodb+srv://devMcgann:prueba123@mercadillo.btfhp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const express = require('express');
require('dotenv').config()
const routes = require ('./rutas/index');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');

mongoose.Promise = global.Promise;
/*mongoose.connect('mongodb://localhost/pruebaApi', {
    useNewUrlParser:true,
    useUnifiedTopology: true
});*/
mongoose.connect('mongodb+srv://mercadillo:HOLA321@mercadillo.btfhp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology: true
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/', routes());

app.use(express.static('uploads'));

app.listen(5000, ()=>{
    console.log("Servidor Andando en puerto 5000")
});