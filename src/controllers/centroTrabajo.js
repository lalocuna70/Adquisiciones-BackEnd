"use strict";

const centroTrabajoService = require("../services/centroTrabajoService");

function getCentrosTrabajo(req, res) {

    centroTrabajoService
        .getCentrosTrabajo()
        .then(response => {
            res.status(201).send(response);
        })
        .catch(err => { console.log(err) });
}

function getCentroTrabajo(req, res) {
  const { cv_cct } = req.params
  const { cv_mun } = req.params
  const { cv_loc } = req.params
  centroTrabajoService
    .getCentroTrabajo(cv_cct,cv_mun,cv_loc)
    .then(response => {
      res.status(201).send(response);
    })
    .catch(err => { console.log(err) });
}

function getCentroTrabajoCCT(req, res) {
  const { cv_cct } = req.params
  centroTrabajoService
    .getCentroTrabajoCCT(cv_cct)
    .then(response => {
      res.status(201).send(response);
    })
    .catch(err => { console.log(err) });
}

module.exports = {
    getCentrosTrabajo,
    getCentroTrabajo,
    getCentroTrabajoCCT
};
