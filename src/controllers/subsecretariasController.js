const subsecretaríasService = require("../services/subsecretariasService");

function getSubsecretarias(req, res) {
    console.log("CONTROLLER SUBS")
    subsecretaríasService
        .getSubsecretarias()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { });
}

module.exports = {
    getSubsecretarias
}