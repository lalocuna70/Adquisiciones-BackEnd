const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;



const areaSchema = new Schema({
    cv_cct: { type: String, required: true },
    municipio: { type: String, required: true },
    localidad: { type: String, required: true },
    email: { type: String, required: true },
    typeUser: { type: String, enum: ['Area'], required: true },
    nombreUser: { type: String, required: true },
    password: { type: String, required: true },
});

areaSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

areaSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('area', areaSchema);