const Unidades = require("../models/unidades");

const getUnidades = async () => {
    const unidades = await Unidades.find();
    //console.log(subsecretarias);
    return unidades
};

module.exports = {
    getUnidades
}