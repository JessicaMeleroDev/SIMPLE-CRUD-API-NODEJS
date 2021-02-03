// Importaciones de librerías
const express = require('express');
const router = express.Router();
const { check } = require('express-validator')
const mascotaController = require('../controllers/mascota')
// Ruta para crear una mascota
router.post('/',
    [
        check('nombre', 'El nombre de la mascota es necesario').not().isEmpty(),
        check('especie', 'La especie de la mascota es necesario').not().isEmpty(),
        check('sexo', 'El sexo de la mascota es necesario').not().isEmpty(),
        check('edad', 'La edad de la mascota es necesario').not().isEmpty(),
        check('propietario', 'El propietario de la mascota es necesario').not().isEmpty()
    ], 
    mascotaController.crearMascota
)

// Ruta para recoger todas las mascotas
router.get('/', mascotaController.recogerMascotas)

// Ruta para recoger una mascota
router.get('/:id', mascotaController.recogerUnaMascota)

// Ruta para actualizar una mascota
router.put('/:id', mascotaController.actualizarMascota)

// Ruta para eliminar una mascota
router.delete('/:id',
)
module.exports = router;