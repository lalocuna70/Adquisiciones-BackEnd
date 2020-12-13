//require
const mongoose = require('mongoose');


const { Schema } = mongoose;


const ProveedoresSchema = new Schema(

    {
        cedula: { type: String, required: true },
        razon_social: { type: String, required: true },
        representante: { type: String, required: true },
        calle: { type: String, required: true },
        num_ext: { type: String, required: true },
        num_int: { type: String, required: true },
        colonia: { type: String, required: true },
        municipio: { type: String, required: true },
        estado: { type: String, required: true },
        pais: { type: String, required: true },
        cp: { type: Number, required: true },
        telefonos: { type: String, required: true },
        email: { type: String, required: true },
        rfc: { type: String, required: true },
        fecha_exp: { type: Date, required: true },
        vigencia: { type: String, required: true },
        fecha_cad: { type: Date, required: true },
        tipo: { type: String, required: true },
        giro: { type: String, required: true },
        email_user: { type: String, required: false },

    },
    { collection: 'proveedores' },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('Proveedores', ProveedoresSchema);
