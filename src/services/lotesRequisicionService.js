const lotesRequisicionController = require("../controllers/lotesRequisicionController");
const LotesRequisicion = require("../models/lotesRequisicion");

const getLotesByIdReq = async (idRequisicion) => {
    
    const lotesRequisicion = await LotesRequisicion.find({ idRequisicion: idRequisicion })

    return lotesRequisicion

};

const insertaLote = async (idRequisicion,lote,sec,dep,uni,obj,prog,sub,proy,com,accion,partida,fuente,articulo,unidad,cantidad,descripcion,anexos) => {
    
    const nuevoLote = new LotesRequisicion();
    nuevoLote.idRequisicion = idRequisicion;
    nuevoLote.lote = lote;
    nuevoLote.sec = sec;
    nuevoLote.dep = dep;
    nuevoLote.uni = uni;
    nuevoLote.obj = obj;
    nuevoLote.prog = prog;
    nuevoLote.sub = sub;
    nuevoLote.proy = proy;
    nuevoLote.com = com;
    nuevoLote.accion = accion;
    nuevoLote.partida = partida;
    nuevoLote.fuente = fuente;
    nuevoLote.articulo = articulo;
    nuevoLote.unidad = unidad;
    nuevoLote.cantidad = cantidad;
    nuevoLote.descripcion = descripcion;
    nuevoLote.anexos = anexos;

    const loteInsert = await nuevoLote.save();
    return loteInsert
}
const actualizaLote = async (id,idRequisicion,lote,sec,dep,uni,obj,prog,sub,proy,com,accion,partida,fuente,articulo,unidad,cantidad,descripcion,anexos) => {
    const filter = { "_id": id };
    const update = { 
        "lote" : lote,
        "sec" :  sec,
        "dep" :  dep,
        "uni" :  uni,
        "obj" :  obj,
        "prog" :  prog,
        "sub" :  sub,
        "proy" :  proy,
        "com" :  com,
        "accion" :  accion,
        "partida" :  partida,
        "fuente" :  fuente,
        "articulo" :  articulo,
        "unidad" :  unidad,
        "cantidad" :  cantidad,
        "descripcion" :  descripcion,
        "anexos" :  anexos
    };
    const loteReq = await LotesRequisicion.findOneAndUpdate(filter,update);
    const lotesActualizado = await LotesRequisicion.findOne(filter);
    return lotesActualizado
}


module.exports = {
    getLotesByIdReq,
    insertaLote,
    actualizaLote
}