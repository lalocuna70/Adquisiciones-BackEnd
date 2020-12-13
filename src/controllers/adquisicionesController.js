const adquisicionesService = require("../services/adquisicionesService");

function getAdquisiciones(req, res) {
    console.log("FUENTE CONTROLLER", req.params)
    const { fuente } = req.params
    adquisicionesService
        .getAdquisiciones(fuente)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { });
}

module.exports = {
    getAdquisiciones
}