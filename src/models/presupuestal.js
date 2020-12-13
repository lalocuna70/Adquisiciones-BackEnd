//require
const mongoose = require('mongoose');


const { Schema } = mongoose;


const PresupuestalSchema = new Schema(

    {
        eje: { type: Number, required: true },
        sec: { type: Number, required: true },
        dep: { type: Number, required: true },
        uni: { type: Number },
        obj: { type: Number },
        prog: { type: Number },
        sub: { type: Number },
        proy: { type: Number, required: true },
        com: { type: Number, required: true },
        accion: { type: Number, required: true },
        tp: { type: Number, required: true },
        partida: { type: Number },
        fuente: { type: Number, required: true },

    },
    { collection: 'presupuestal' },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('Presupuestal', PresupuestalSchema);
