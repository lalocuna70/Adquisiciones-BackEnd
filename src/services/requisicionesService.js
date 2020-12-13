const Presupuestal = require("../models/presupuestal");
const Requisicion = require("../models/requisicion");
const requisicionesController = require("../controllers/requisicionesController");
const fuentes = require("../models/fuentes");

let requisicion = {
    acciones: [],
    presupuestal: []
};


const getRequisiciones = async (fuente) => {
    console.log("FUENTE getRequisiciones", fuente)
    const presupuestal = await Presupuestal.find({ fuente: fuente })

    
    presupuestal.map((p) => {
        requisicion.acciones.push(p.accion)
        
    });

    requisicion.acciones = [...new Set(requisicion.acciones)]
    requisicion.presupuestal = presupuestal;
    console.log("ADQUISICION",requisicion.acciones);
    return requisicion

};

const getRequisicionesUser = async (elaborado) => {
    //
    const requisiciones = await Requisicion.find({ elaborado: elaborado})
    console.log("requisiciones", requisiciones)
    return requisiciones

};

const getRequisicionId = async (id) => {
    //console.log("FUENTE", fuente)
    const requisicion = await Requisicion.find({ _id: id})
    return requisicion

};

const getFolios = async () => {
    //console.log("ACCION", typeof accion);
    const folios = await Requisicion.find({},{folio:1,_id:0});
    //console.log("Folios:",folios);
    return folios
};

const insertaRequisicion = async (elaborado, folio, cv_cct, ct_subsec, fechae, fechar, fuente, destinoCT, destinoCTNombre, titularSubsec, domicilioEntrega, accion, titular, cargo, observaciones, estatus) => {
    
    const nuevaRequisicion = new Requisicion();
    nuevaRequisicion.elaborado = elaborado;
    nuevaRequisicion.folio = folio;
    nuevaRequisicion.cv_cct = cv_cct ;
    nuevaRequisicion.ct_subsec = ct_subsec;
    nuevaRequisicion.fechae = fechae;
    nuevaRequisicion.fechar = fechar;
    nuevaRequisicion.fuente = fuente;
    nuevaRequisicion.destinoCT = destinoCT;
    nuevaRequisicion.destinoCTNombre = destinoCTNombre;
    nuevaRequisicion.titularSubsec = titularSubsec;
    nuevaRequisicion.domicilioEntrega = domicilioEntrega;
    nuevaRequisicion.accion = accion;
    nuevaRequisicion.titular = titular;
    nuevaRequisicion.cargo = cargo;
    nuevaRequisicion.observaciones = observaciones;
    nuevaRequisicion.estatus = estatus;

    const requisicionInsert = await nuevaRequisicion.save();
    
    console.log(requisicionInsert);
    return requisicionInsert
}
const actualizaRequisicion = async (id,elaborado,folio,cv_cct,ct_subsec,fechae,fechar,fuente,destinoCT,destinoCTNombre,titularSubsec,domicilioEntrega,accion,titular,cargo,observaciones,estatus) => {
    const filter = { "_id": id };
    const update = { 
        "elaborado":elaborado,
        "folio":folio,
        "ct_subsec":ct_subsec,
        "fechae":fechae,
        "fechar":fechar,
        "fuente":fuente,
        "destinoCT":destinoCT,
        "destinoCTNombre":destinoCTNombre,
        //"subsecCTNombre":subsecCTNombre,
        "titularSubsec":titularSubsec,
        "domicilioEntrega":domicilioEntrega,
        "accion":accion,
        "titular":titular,
        "cargo":cargo,
        "observaciones":observaciones,
        "estatus":estatus
    };
    const requisicion = await Requisicion.findOneAndUpdate(filter,update);
    const requisicionActualizada = await Requisicion.findOne(filter);
    console.log("Requisición actualizada", requisicionActualizada);
    return requisicionActualizada
}


module.exports = {
    getFolios,
    getRequisiciones,
    insertaRequisicion,
    actualizaRequisicion,
    getRequisicionesUser,
    getRequisicionId
}