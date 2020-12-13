
const mongoose = require('mongoose');
const { Schema } = mongoose;
const FuentesSchema = new Schema(
    {
        fuente: { type: Number, required: true },
        descripcion: { type: String, required: true },
    },
    { collection: 'fuentes' },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('Fuentes', FuentesSchema);
