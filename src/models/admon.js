const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;



const admonSchema = new Schema({
    rfc: { type: String, required: true },
    email: { type: String, required: true },
    typeUser: { type: String, enum: ['Admin','AdminAux','Requisicion','Financiero'], required: true },
},

{ collection: 'admon' },
    {
        timestamps: true
    }
);

    admonSchema.methods.getAdmon = function (rfc, email) {
        return this.findOne({
            rfc: rfc, email: email
        })
            .then((email) => {
                if (!email) {
                    return Promise.resolve(false);
                }
                return Promise.resolve(true);
            }).catch(err => {
                console.log(err)
                err
            });
    };
    




module.exports = mongoose.model('admon', admonSchema);
