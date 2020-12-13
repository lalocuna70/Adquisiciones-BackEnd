const anexosService = require("../services/anexosService");

function cuentaAnexosById(req, res) {
    console.log("Anexos CONTROLLER", req.params)
    const { id } = req.params
    anexosService
        .cuentaAnexosById(id)
        .then(response => {
            res.status(200).send(response);
            console.log("Respuesta Anexos:",response);
        })
        .catch(err => { });
}

function getAnexosById(req, res) {
    console.log("Anexos CONTROLLER", req.params)
    const { id } = req.params
    anexosService
        .getAnexosById(id)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { });
}

function getAnexo(req, res) {
    //console.log("FUENTE CONTROLLER", req.params)
    const { id } = req.params
    anexosService
        .getAnexo(elaborado)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { });
}

function insertaAnexo(req, res) {
    console.log("CONTROLLER Anexos: ",req.body);
    const {id} = req.body
    const {nombreoriginal} = req.body
    const {nombrearchivo} = req.body
    const {clasificacion} = req.body
    const {descripcion} = req.body
    const {tipo} = req.body
    const {size} = req.body
    const {anexo} = req.body
    anexosService
        .insertaAnexo(id, nombreoriginal, nombrearchivo, clasificacion, descripcion, tipo, size, anexo)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => { 
            console.log(err);
        });
}


module.exports = {
    cuentaAnexosById,
    getAnexosById,
    getAnexo,
    insertaAnexo
}