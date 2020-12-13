const Acciones = require("../models/acciones");

const getAcciones = async () => {
    //console.log("ACCION", typeof accion);
    const acciones = await Acciones.find();

    return acciones
};
const getAccionDesc = async (accion) => {
    console.log("ACCION", typeof accion);
    const accionMongo = await Acciones.find({ accion: accion });

    return accionMongo[0].descripcion
};

module.exports = {
    getAccionDesc,
    getAcciones
}