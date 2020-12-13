const unidadesService = require("../services/unidadesService");

function getUnidades(req, res) {
    console.log("CONTROLLER Unidades")
    unidadesService
        .getUnidades()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { });
}

module.exports = {
    getUnidades
}