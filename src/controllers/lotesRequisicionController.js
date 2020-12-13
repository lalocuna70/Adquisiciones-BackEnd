"use strict";

const lotesRequisicionService = require("../services/lotesRequisicionService");

function getLotesByIdReq(req, res) {
    const { idRequisicion } = req.params
    console.log("CONTROLLER Lotes", idRequisicion)
    lotesRequisicionService
        .getLotesByIdReq(idRequisicion)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { });
}

function actualizaLote(req, res) {
    const {_id} = req.body
    const {idRequisicion} = req.body
    const {lote} = req.body
    const {sec} = req.body
    const {dep} = req.body
    const {uni} = req.body
    const {obj} = req.body
    const {prog} = req.body
    const {sub} = req.body
    const {proy} = req.body
    const {com} = req.body
    const {accion} = req.body
    const {partida} = req.body
    const {fuente} = req.body
    const {articulo} = req.body
    const {unidad} = req.body
    const {cantidad} = req.body
    const {descripcion} = req.body
    const {anexos} = req.body

    lotesRequisicionService
        
        .actualizaLote(_id,idRequisicion,lote,sec,dep,uni,obj,prog,sub,proy,com,accion,partida,fuente,articulo,unidad,cantidad,descripcion,anexos)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { });
}
function insertaLote(req, res) {
    const {idRequisicion} = req.body
    const {lote} = req.body
    const {sec} = req.body
    const {dep} = req.body
    const {uni} = req.body
    const {obj} = req.body
    const {prog} = req.body
    const {sub} = req.body
    const {proy} = req.body
    const {com} = req.body
    const {accion} = req.body
    const {partida} = req.body
    const {fuente} = req.body
    const {articulo} = req.body
    const {unidad} = req.body
    const {cantidad} = req.body
    const {descripcion} = req.body
    const {anexos} = req.body

    lotesRequisicionService
        .insertaLote(idRequisicion,lote,sec,dep,uni,obj,prog,sub,proy,com,accion,partida,fuente,articulo,unidad,cantidad,descripcion,anexos)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { 
            console.log(err);
        });
}

module.exports = {
    getLotesByIdReq,
    actualizaLote,
    insertaLote

};
