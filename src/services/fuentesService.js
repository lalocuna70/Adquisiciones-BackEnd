const Fuentes = require("../models/fuentes");

const getFuentes = async () => {
    const fuentes = await Fuentes.find();
    //console.log(subsecretarias);
    console.log("Fuentes", fuentes)
    return fuentes
};

module.exports = {
    getFuentes
}