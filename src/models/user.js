const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;

const userSchema = new Schema({
    numcedula: { type: String, required: true },
    rfc: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    nombreUser: { type: String, required: true },
    typeUser: { type: String, enum: ['Proveedor'], required: true }
});

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('user', userSchema);