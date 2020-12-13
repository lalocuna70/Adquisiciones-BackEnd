//require
const mongoose = require('mongoose');


const { Schema } = mongoose;


const municipio_localidadSchema = new Schema(
    {
        id_municipio: { type: Number, required: true },
        municipio: { type: String, required: true },
        id_localidad: { type: Number, required: true },
        localidad: { type: String, required: true }
    },
    { collection: 'municipio_localidad' }, 
    {
        timestamps: true
    }
);


module.exports = mongoose.model('municipio_localidad', municipio_localidadSchema);
