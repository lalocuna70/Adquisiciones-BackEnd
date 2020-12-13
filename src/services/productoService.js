"use strict";

const Producto = require("../models/producto");

const insertaProducto = async (articulo,unidad,descripcion,partida1,partida2,partida3,partida4,partida5,verificado) => {
    
    const nuevoProducto = new Producto();
    nuevoProducto.articulo = articulo;
    nuevoProducto.unidad = unidad;
    nuevoProducto.descripcion = descripcion;
    nuevoProducto.partida1 = partida1;
    nuevoProducto.partida2 = partida2;
    nuevoProducto.partida3 = partida3;
    nuevoProducto.partida4 = partida4;
    nuevoProducto.partida5 = partida5;
    nuevoProducto.verificado = verificado; 
 
    const productoActualizado = await nuevoProducto.save();
    return productoActualizado
}
const actualizaProducto = async (id,articulo,unidad,descripcion,partida1,partida2,partida3,partida4,partida5,verificado) => {
    const filter = { "_id": id };
    const update = { "articulo":articulo,"unidad":unidad,"descripcion":descripcion,"partida1":partida1,"partida2":partida2,"partida3":partida3,"partida4":partida4,"partida5":partida5,"verificado":verificado};
    const productoActualizado = await Producto.findOneAndUpdate(filter,update);
    return productoActualizado
}
const getProductos = async () => {
    const productos = await Producto.find();
    return productos
};

const getProductosByPartida = async (partida) => {
    console.log("partida by partida", partida)
    let productos = await Producto.find({
        $or: [{ partida1: partida }, { partida2: partida }, { partida3: partida }, { partida4: partida }, { partida5: partida }]
    });
    console.log("PRODUCTOS BY PARTIDA")
    return productos
};
const editProductoPartida = async (partidaId) => {
    const productoPartida = await Producto.find()
    if (productoPartida.partida1) {
        return productoPartida.partida1;
    }
    return null;
};

module.exports = {
    getProductos,
    editProductoPartida,
    getProductosByPartida,
    actualizaProducto,
    insertaProducto
};
