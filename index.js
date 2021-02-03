// Importamos librería de express
const express = require('express');

// Creamos el servidor
const app = express();

// Habilitamos express.json
app.use(express.json({extended:true}))

// Creamos el puerto
const port = 4000;

// Importamos las rutas

// Arrancamos el servidor
app.listen(port, '0.0.0.0', ()=> {
    console.log("Servidor funcionando en el puerto: " + port);
})
