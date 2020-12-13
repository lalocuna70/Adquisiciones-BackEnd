"use strict";

const admonService = require("../services/admonService");

function getAdmon(req, res) {

    getAdmonService
        .getAdmon()
        .then(response => {
            res.status(201).send(response);
        })
        .catch(err => { console.log(err) });
}

function getAdmon(req, res) {
  const { rfc } = req.params
  const { email } = req.params
  admonService
    .getAdmon(rfc,email)
    .then(response => {
      res.status(201).send(response);
    })
    .catch(err => { console.log(err) });
}


module.exports = {
    getAdmon
};
