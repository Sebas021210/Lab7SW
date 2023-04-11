"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.agregarImagen = void 0;
var agregarImagen = function agregarImagen(src, ancho, alto, textoAlternativo) {
  var imagen = document.createElement("img");
  return src && ancho && alto ? (imagen.setAttribute("src", src), imagen.setAttribute("width", ancho), imagen.setAttribute("height", alto), imagen.setAttribute("alt", textoAlternativo), document.body.appendChild(imagen), imagen) : function () {
    throw new Error("Faltan algunos parámetros necesarios para agregar la imagen");
  }();
};
exports.agregarImagen = agregarImagen;