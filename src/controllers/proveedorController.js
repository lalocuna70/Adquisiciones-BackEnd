"use strict";

const proveedorService = require("../services/proveedorService");

function getProveedor(req, res) {

    proveedorService
        .getProveedor()
        .then(response => {
            res.status(201).send(response);
        })
        .catch(err => { console.log(err) });
}

function getProveedor(req, res) {
  const { cedula } = req.params
  const { rfc } = req.params

  proveedorService
    .getProveedor(cedula,rfc)
    .then(response => {
      res.status(201).send(response);
    })
    .catch(err => { console.log(err) });
}


module.exports = {
    getProveedor
};