//require
const mongoose = require('mongoose');


const { Schema } = mongoose;


const PartidaSchema = new Schema(
    {
        partida: { type: Number, required: true },
        nombre: { type: String, required: true },
        descripcion: { type: String, required: true },
    },
    { collection: 'partidas' },
    {
        timestamps: true
    }
);

PartidaSchema.methods.getPartida = function (partida) {
    return this.findOne({
        partida: partida
    })
        .then((partida) => {
            if (!partida) {
                return Promise.resolve(false);
            }
            return Promise.resolve(true);
        }).catch(err => {
            console.log(err)
            err
        });
};

module.exports = mongoose.model('Partida', PartidaSchema);
