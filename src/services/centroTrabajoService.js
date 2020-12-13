"use strict";

const CT = require("../models/centroTrabajo");

const getCentrosTrabajo = async () => {
    const estatus = 'ACTIVO';
    const centroTrabajo = await CT.find({ estatus: estatus });
    console.log("CENTRO TRABAJO")
    return centroTrabajo
};

const getCentroTrabajo = async (cv_cct,cv_municipio,cv_localidad) => {
    const estatus = 'ACTIVO';
    const centroTrabajo = await CT.findOne(
        { estatus: estatus, cv_cct: cv_cct, cv_mun: cv_municipio, cv_loc: cv_localidad });
    console.log("CENTRO TRABAJO", centroTrabajo)
    return centroTrabajo
};

const getCentroTrabajoCCT = async (cv_cct) => {
    const estatus = 'ACTIVO';
    const centroTrabajo = await CT.findOne(
        { estatus: estatus, cv_cct: cv_cct });
    console.log("CENTRO TRABAJO CCT", centroTrabajo)
    return centroTrabajo
};

module.exports = {
    getCentrosTrabajo,
    getCentroTrabajo,
    getCentroTrabajoCCT
};
