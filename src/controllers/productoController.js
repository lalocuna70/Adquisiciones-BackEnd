"use strict";

const productoService = require("../services/productoService");

function getProductos(req, res) {
    console.log("===BODY PRODUCTOS CONTROLLER", req.body);

    productoService
        .getProductos()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { });
}

function getProductosByPartida(req, res) {
    const { partida } = req.params
    console.log("CONTROLLER PARTIDA", partida)
    productoService
        .getProductosByPartida(partida)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { });
}

function actualizaProducto(req, res) {
    const {_id} = req.body
    const {articulo} = req.body
    const {unidad} = req.body
    const {descripcion} = req.body
    const {partida1} = req.body
    const {partida2} = req.body
    const {partida3} = req.body
    const {partida4} = req.body
    const {partida5} = req.body
    const {verificado} = req.body
    console.log("CONTROLLER Producto: ",_id);
    console.log("CONTROLLER Producto: ",verificado);
    productoService
        
        .actualizaProducto(_id,articulo,unidad,descripcion,partida1,partida2,partida3,partida4,partida5,verificado)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { });
}
function insertaProducto(req, res) {
    console.log("CONTROLLER Producto: ",req.body);
    const {articulo} = req.body
    const {unidad} = req.body
    const {descripcion} = req.body
    const {partida1} = req.body
    const {partida2} = req.body
    const {partida3} = req.body
    const {partida4} = req.body
    const {partida5} = req.body
    const {verificado} = req.body
    productoService
        .insertaProducto(articulo,unidad,descripcion,partida1,partida2,partida3,partida4,partida5,verificado)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { 
            console.log(err);
        });
}



function editProductoPartida(req, res) {

    const { partidaId } = req.body;
    productoService
        .editProductoPartida(partidaId)
        .then(response => {
            res.status(201).send(response);
        })
        .catch(err => { });
}



module.exports = {
    getProductos,
    editProductoPartida,
    getProductosByPartida,
    actualizaProducto,
    insertaProducto

};
