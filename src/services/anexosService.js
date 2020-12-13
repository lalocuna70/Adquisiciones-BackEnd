
const Anexos = require("../models/anexos");
const anexosController = require("../controllers/anexosController");

const cuentaAnexosById = async (id) => {
    
    console.log("Anexos cuentaAnexosById", id)
    //const anexos = await
    const anexos = await Anexos.find({ id: id }
        /*
        , function(err, res) {
        if (err) {
          console.log(err);
        } else {
          
          //res = '{"anexos":'+res+'}';
          console.log("Numero de anexos: " + res);
          return res
        }
        */
      );
      return anexos

};
const getAnexosById = async (id) => {
    //console.log("FUENTE getRequisiciones", fuente)
    const anexos = await Anexos.find({ id: id })
    return anexos

};


const getAnexo = async (id) => {
    //
    const anexo = await Anexos.find({ _id: id})
    return anexo

};


const insertaAnexo = async (id, nombreoriginal, nombrearchivo, clasificacion, descripcion, tipo, size, anexo) => {
    
    const nuevoAnexo = new Anexos();
    nuevoAnexo.id = id;
    nuevoAnexo.nombreoriginal = nombreoriginal;
    nuevoAnexo.nombrearchivo = nombrearchivo;
    nuevoAnexo.clasificacion = clasificacion;
    nuevoAnexo.descripcion = descripcion ;
    nuevoAnexo.tipo = tipo;
    nuevoAnexo.size = size;
    nuevoAnexo.anexo = anexo;
    
    const anexoInsert = await nuevoAnexo.save();
    
    return anexoInsert
}

module.exports = {
    cuentaAnexosById,
    getAnexosById,
    getAnexo,
    insertaAnexo
}