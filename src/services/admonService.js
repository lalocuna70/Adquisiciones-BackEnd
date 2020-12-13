"use strict";

const Admon = require("../models/admon");

const getAdmon = async (rfc,email) => {
    //const estatus = 'ACTIVO';
    const admon = await Admon.findOne(
        { rfc: rfc, email: email });
    console.log("ADMINISTRATIVO", admon)
    return admon
};


module.exports = {
    getAdmon
};
