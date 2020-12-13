"use strict";

const partidaService = require("../services/partidaService");

function getPartidas(req, res) {

  partidaService
    .getPartidas()
    .then(response => {
      res.status(201).send(response);
    })
    .catch(err => { console.log(err) });
}
function getPartidaDesc(req, res) {
  const { partida } = req.params
  partidaService
    .getPartidaDesc(partida)
    .then(response => {
      res.status(201).send(response);
    })
    .catch(err => { console.log(err) });
}





module.exports = {
  getPartidas,
  getPartidaDesc
};
