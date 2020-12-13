const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;

const usersSchema = new Schema({
    cedula: { type: String, required: false },
    rfc: { type: String, required: false },
    cv_cct: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    nombreUser: { type: String, required: true },
    typeUser: { type: String, enum: ['Admin','AdminAux','Requisicion','Financiero','Area','Proveedor'], required: true },
    estatus: { type: Number, default: 0, required: false },
    subsec: { type: String, required: false },
    titular: { type: String, required: false },
    cargo: { type: String, required: false }
}, {
    timestamps: true
});

usersSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

usersSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};



module.exports = mongoose.model('users', usersSchema);