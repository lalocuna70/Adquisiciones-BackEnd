const fuentesService = require("../services/fuentesService");

function getFuentes(req, res) {
    console.log("CONTROLLER Fuentes")
    fuentesService
        .getFuentes()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { });
}

module.exports = {
    getFuentes
}