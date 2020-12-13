"use strict";

const municipioLocalidadService = require("../services/municipioLocalidadService");

function getMunicipioLocalidad(req, res) {

    municipioLocalidadService
        .getMunicipioLocalidad()
        .then(response => {
            res.status(201).send(response);
        })
        .catch(err => { console.log(err) });
}

module.exports = {
    getMunicipioLocalidad,
};
