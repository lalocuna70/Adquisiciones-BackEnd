const mongoose = require('mongoose');

const { Schema } = mongoose;

const lotesRequisicionSchema = new Schema(

    {
        idRequisicion: { type: String, required: true },
        lote: { type: Number, required: true },
        sec: { type: Number, required: true },
        dep: { type: Number, required: true },
        uni: { type: Number },
        obj: { type: Number },
        prog: { type: Number },
        sub: { type: Number },
        proy: { type: Number, required: true },
        com: { type: Number, required: true },
        accion: { type: Number, required: true },
        partida: { type: Number, required: true},
        fuente: { type: Number, required: true },
        articulo: { type: String, required: false },
        unidad: { type: String, required: false },
        cantidad: { type: Number, required: true },
        descripcion: { type: String, required: false },
        anexos: { type: Number, required: false }
    },
    { collection: 'lotesrequisicion' },
    {
        timestamps: true
    },
    
);
module.exports = mongoose.model('lotesRequisicion', lotesRequisicionSchema);
