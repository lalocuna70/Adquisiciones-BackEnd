const mongoose = require('mongoose');

const { Schema } = mongoose;

const RequisicionSchema = new Schema({

        elaborado: { type: String, required: true },
        //expediente: { type: Number, required: true },
        folio: { type: Number, required: false },
        cv_cct: { type: String, required: true },
        ct_subsec: { type: String, required: true },
        fechae: { type: Date, required: true },
        fechar: { type: Date, required: true },
        destinoCT: { type: String, required: true },
        destinoCTNombre: { type: String, required: true},
        //subsecCTNombre: { type: String, required: true},
        titularSubsec :{ type: String, required: true},
        domicilioEntrega: { type: String, required: true },
        fuente: { type: Number, required: true },
        accion: { type: Number, required: true },
        titular: { type: String, required: true },
        cargo: { type: String, required: true },
        observaciones: { type: String, required: true },
        estatus: { type: Number, required: true },
        revisado: { type: String, required: false },
        auditado: { type: String, required: false },
        asignado: { type: String, required: false },
        cotizado: { type: Boolean, required: false },
    }, 
    {
        timestamps: true
    },
    { collection: 'requisicion' });

module.exports = mongoose.model('Requisicion', RequisicionSchema);
