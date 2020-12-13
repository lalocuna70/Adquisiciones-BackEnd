const requisicionesService = require("../services/requisicionesService");

function getRequisiciones(req, res) {
    console.log("FUENTE CONTROLLER", req.params)
    const { fuente } = req.params
    requisicionesService
        .getRequisiciones(fuente)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { });
}

function getRequisicionesUser(req, res) {
    //console.log("FUENTE CONTROLLER", req.params)
    const { elaborado } = req.params
    requisicionesService
        .getRequisicionesUser(elaborado)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { });
}

function getRequisicionId(req, res) {
    //console.log("FUENTE CONTROLLER", req.params)
    const { id } = req.params
    requisicionesService
        .getRequisicionId(id)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { });
}

function getFolios(req, res) {
    console.log("Obtener Foios")
    requisicionesService
        .getFolios()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { });
}

function insertaRequisicion(req, res) {
    console.log("CONTROLLER Requisiciones: ",req.body);
    const {elaborado} = req.body;
    const {folio} = req.body;
    const {cv_cct} = req.body;
    const {ct_subsec} = req.body;
    const {fechae} = req.body;
    const {fechar, fuente, destinoCT, destinoCTNombre, titularSubsec, domicilioEntrega, accion, titular, cargo, observaciones, estatus} = req.body
    requisicionesService
        .insertaRequisicion(elaborado, folio, cv_cct, ct_subsec, fechae, fechar, fuente, destinoCT, destinoCTNombre, titularSubsec, domicilioEntrega, accion, titular, cargo, observaciones, estatus)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { 
            console.log(err);
        });
}

function actualizaRequisicion(req, res) {
    const {_id} = req.body
    const {elaborado} = req.body;
    const {folio} = req.body;
    const {cv_cct} = req.body;
    const {ct_subsec} = req.body;
    const {fechae} = req.body;
    const {fechar, fuente, destinoCT, destinoCTNombre, titularSubsec, domicilioEntrega, accion, titular, cargo, observaciones, estatus} = req.body
    requisicionesService
        .actualizaRequisicion(_id,elaborado, folio, cv_cct, ct_subsec, fechae, fechar, fuente, destinoCT, destinoCTNombre, titularSubsec, domicilioEntrega, accion, titular, cargo, observaciones, estatus)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { 
            console.log(err);
        });
}


module.exports = {
    getFolios,
    getRequisiciones,
    insertaRequisicion,
    actualizaRequisicion,
    getRequisicionesUser,
    getRequisicionId
}