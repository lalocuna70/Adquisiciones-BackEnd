"use strict";

const Proveedores = require("../models/proveedores");

const getProveedor = async (cedula,rfc) => {
    //const estatus = 'ACTIVO';
    const proveedor = await Proveedores.find({ cedula: cedula, rfc: rfc});
    console.log("Proveedor", proveedor)
    return proveedor
};


module.exports = {
    getProveedor
};
