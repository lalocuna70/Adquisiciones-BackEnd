//require
const mongoose = require('mongoose');


const { Schema } = mongoose;


const ProductoSchema = new Schema(

    {
        articulo: { type: String, required: true },
        unidad: { type: String, required: true },
        descripcion: { type: String, required: true },
        partida1: { type: Number,required: true },
        partida2: { type: Number },
        partida3: { type: Number },
        partida4: { type: Number },
        partida5: { type: Number },
        verificado: {type: Boolean}
    },
    { collection: 'productos' },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('Productos', ProductoSchema);
