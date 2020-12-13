"use strict";

const emailService = require("../services/emailService");

function enviarCorreo(req, res) {
    
    emailService
        .enviarCorreo()
        .then(response => {
            res.status(201).send(response);
        })
        .catch(err => { console.log(err) });
}

module.exports = {
    enviarCorreo
};