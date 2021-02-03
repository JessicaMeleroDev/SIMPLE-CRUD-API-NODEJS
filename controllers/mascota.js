const Mascota = require('../models/mascota');
const { validationResult } = require('express-validator');

// Crear una mascota
exports.crearMascota = async (req, res) => {
    // Revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }
    try {
        const mascota = new Mascota(req.body);
        await mascota.save();
        res.json({ mascota });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

// Recoger todas las mascotas
exports.recogerMascotas = async (req, res) => {
    // Revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }
    try {
        const mascotas = await Mascota.find();
        res.json({ mascotas });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

// Recoger una mascota con su id
exports.recogerUnaMascota = async (req, res) => {
    // Revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }
    const { id } = req.params
    try {
        const mascota = await Mascota.findById({ _id: id });
        res.json({ mascota });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

// Actualizar una mascota
exports.actualizarMascota = async (req, res) => {
    // Revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }
    const { id } = req.params;
    try {
        const mascotaActualizada = await Mascota.updateOne({ _id: id }, req.body);
        res.json({ mascotaActualizada });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

// Eliminar una mascota
exports.eliminarMascota = async (req, res) => {
    // Revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }
    const { id } = req.params;
    try {
        const mascotaEliminada = await Mascota.deleteOne({ _id: id }, req.body);
        res.json({ mascotaEliminada });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}