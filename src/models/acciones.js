//require
const mongoose = require('mongoose');


const { Schema } = mongoose;


const AccionesSchema = new Schema(

    {
        accion: { type: Number, required: true },
        descripcion: { type: String, required: true },
    },
    { collection: 'acciones' },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('Acciones', AccionesSchema);
