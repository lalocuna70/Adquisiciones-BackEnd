"use strict";

const ML = require("../models/municipioLocalidad");

const getMunicipioLocalidad = async () => {
    //const estatus = 'ACTIVO';
    const municipioLocalidad = await ML.find();
    //console.log("Municipio Localidad", municipioLocalidad)
    return municipioLocalidad
};

module.exports = {
    getMunicipioLocalidad
};
