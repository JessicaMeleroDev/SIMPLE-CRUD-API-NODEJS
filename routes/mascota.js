// Importaciones de librerías
const express = require('express');
const router = express.Router();
const { check } = require('express-validator')
const Mascota = require('../models/mascota');

// Ruta para crear una mascota
router.post('/',
    [
        check('nombre', 'El nombre de la mascota es necesario').not().isEmpty(),
        check('especie', 'La especie de la mascota es necesario').not().isEmpty(),
        check('sexo', 'El sexo de la mascota es necesario').not().isEmpty(),
        check('edad', 'La edad de la mascota es necesario').not().isEmpty(),
        check('propietario', 'El propietario de la mascota es necesario').not().isEmpty()
    ], 
    async(req, res) => {
        try {
            const mascota = new Mascota(req.body);
            await mascota.save();
            res.json({mascota});
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    }
)

// Ruta para recoger todas las mascotas
router.get('/', 
    async(req, res) => {
        try {
            const mascotas = await Mascota.find();
            res.json({mascotas});
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    }
)

// Ruta para actualizar una mascota
router.put('/:id',
    async(req, res) => {
        const { id } = req.params;
        try {
            const mascotaActualizada = await Mascota.updateOne({_id: id}, req.body);
            res.json({mascotaActualizada});
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    }
)

// Ruta para eliminar una mascota
router.delete('/:id',
    async(req, res) => {
        const { id } = req.params;
        try {
            const mascotaEliminada = await Mascota.deleteOne({_id: id}, req.body);
            res.json({mascotaEliminada});
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    }
)
module.exports = router;