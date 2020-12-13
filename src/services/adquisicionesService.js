const Presupuestal = require("../models/presupuestal");

let adquisicion = {
    acciones: [],
    partidas: []
};


const getAdquisiciones = async (fuente) => {
    console.log("FUENTE", fuente)
    const presupuestal = await Presupuestal.find({ fuente: fuente })

    presupuestal.map((p) => {
        adquisicion.acciones.push(p.accion)
        adquisicion.partidas.push(p.partida)
    });

    adquisicion.acciones = [...new Set(adquisicion.acciones)]
    adquisicion.partidas = [...new Set(adquisicion.partidas)]


    console.log("ADQUISICION", adquisicion)

    return adquisicion
};

module.exports = {
    getAdquisiciones
}