"use strict";

const userService = require("../services/userService");

function setEstatus(req, res) {
  //console.log("REQ activateuser controller", req.body);
  const { id } = req.body
  const { estatus } = req.body
  
  userService
    .setEstatus(id, estatus)
    .then(response => {
      res.status(201).send(response);
    })
    .catch(err => { console.log(err) });
}

function setNewPass(req, res) {
  //console.log("REQ activateuser controller", req.body);
  const { id } = req.body
  const { password } = req.body
  
  userService
    .setNewPass(id, password)
    .then(response => {
      res.status(201).send(response);
    })
    .catch(err => { console.log(err) });
}

function getEmail(req, res) {
  //console.log("REQ activateuser controller", req.body);
  const { email } = req.params
  userService
    .getEmail(email)
    .then(response => {
      res.status(201).send(response);
    })
    .catch(err => { console.log(err) });
}


module.exports = {
    getEmail,
    setNewPass,
    setEstatus
};