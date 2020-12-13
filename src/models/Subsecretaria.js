//require
const mongoose = require('mongoose');


const { Schema } = mongoose;


const SubsecretariaSchema = new Schema(

    {
        cct: { type: String, required: true },
        subsecretaria: { type: String, required: true },
        titular: { type: String, required: true },

    },
    { collection: 'subsecretarias' },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('Subsecretarias', SubsecretariaSchema);
