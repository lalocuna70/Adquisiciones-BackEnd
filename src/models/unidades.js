const mongoose = require('mongoose');


const { Schema } = mongoose;


const UnidadesSchema = new Schema(

    {
        unidad: { type: String, required: true },
       

    },
    { collection: 'unidades' },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('Unidades', UnidadesSchema);