const mongoose = require('mongoose');
var Partida = mongoose.model('Partida');

const { Schema } = mongoose;


const ProductopartidaSchema = new Schema(

    {
        articulo: { type: String, required: true },
        unidad: { type: String, required: true },
        descripcion: { type: String, required: true },
        partida1: { type: Schema.ObjectId, ref: "Partida"},
        partida2: { type: Number },
        partida3: { type: Number },
        partida4: { type: Number },
        partida5: { type: Number },
    },
    { collection: 'productopartida' },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('Productopartida', ProductopartidaSchema);
