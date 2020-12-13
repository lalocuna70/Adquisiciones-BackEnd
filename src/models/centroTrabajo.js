//require
const mongoose = require('mongoose');


const { Schema } = mongoose;


const CentroTrabajoSchema = new Schema(

    {
        cv_ctt: { type: String, required: true },
        nombre: { type: String, required: true },
        cv_tipo: { type: Number, required: true },
        tipo: { type: String, required: true },
        cv_estatus: { type: Number, required: true },
        estatus: { type: String, required: true },
        calle: { type: String, required: true },
        num_next: { type: Number, required: true },
        colonia: { type: String, required: true },
        cv_mun: { type: Number, required: true },
        municipio: { type: String, required: true },
        cv_loc: { type: Number, required: true },
        localidad: { type: String, required: true },
        cp: { type: Number, required: true },
        sostenimiento: { type: String, required: true },


    },
    { collection: 'centros_trabajo' },
    {
        timestamps: true
    }
);

    CentroTrabajoSchema.methods.getCentroTrabajo = function (cv_cct) {
        return this.findOne({
            cv_cct: cv_cct
        })
            .then((cv_cct) => {
                if (!cv_cct) {
                    return Promise.resolve(false);
                }
                return Promise.resolve(true);
            }).catch(err => {
                console.log(err)
                err
            });
    };
    




module.exports = mongoose.model('CentroTrabajo', CentroTrabajoSchema);
