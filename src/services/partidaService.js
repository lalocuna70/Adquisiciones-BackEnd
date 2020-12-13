"use strict";

const Partida = require("../models/partida");

const getPartidas = async () => {

  const partidas = await Partida.find();
  //console.log(partidas);
  return partidas
};

const getPartidaDesc = async (partida) => {
  const partidaMongo = await Partida.findOne({ partida: partida });
  return partidaMongo.nombre
};



module.exports = {
  getPartidas,
  getPartidaDesc
};
