const mongoose = require('mongoose');

const MascotaSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    especie: {
        type: String,
        require: true
    },
    sexo: {
        type: String,
        enum:['Macho', 'Hembra'],
        require: true,
    },
    fechaNacimiento: {
        type: Date,
        require: true
    },
    propietario: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Mascota', MascotaSchema);