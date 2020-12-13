const accionesService = require("../services/accionesService");

function getAccionDesc(req, res) {
    const { accion } = req.params
    accionesService
        .getAccionDesc(accion)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { });
}

function getAcciones(req, res) {
    accionesService
        .getAcciones()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { });
}

module.exports = {
    getAccionDesc,
    getAcciones
}