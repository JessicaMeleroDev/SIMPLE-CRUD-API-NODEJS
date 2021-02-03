// Importamos librerías
const express = require('express');
require('dotenv').config({path: '.env'});
const conectarDB = require('./config/db.js');

// Creamos el servidor
const app = express();

// Conectamos la db 
conectarDB();

// Habilitamos express.json
app.use(express.json({extended:true}))

// Creamos el puerto
const port = process.env.PORT || 4000;

// Importamos las rutas

// Arrancamos el servidor
app.listen(port, '0.0.0.0', ()=> {
    console.log("Servidor funcionando en el puerto: " + port);
})
