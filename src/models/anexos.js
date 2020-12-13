const mongoose = require('mongoose');

const { Schema } = mongoose;

const AnexosSchema = new Schema(

    {
        id: { type: String, required: true },
        nombreoriginal: { type: String, required: true },
        nombrearchivo: { type: String, required: true },
        clasificacion: { type: String, required: true },
        descripcion: { type: String, required: true },
        tipo: { type: String, required: true },
        size: { type: Number, required: true },
        anexo: { type: Number, required: true }


    },
    { collection: 'anexos' },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Anexos', AnexosSchema);
