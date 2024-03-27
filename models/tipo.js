const { Schema, model } = require('mongoose')

const TipoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre del tipo requerido'],
        minlength: 1
    },
    fechaCreacion: {
        type: Date,
        default: new Date()

    },
    fechaModificacion: {
        type: Date,
        default: new Date()
    },
    descripcion: {
        type: String
    }
})

module.exports = model('Tipo', TipoSchema )