"use strict";

var _headersLinkLP = require("../../funciones/headersLinkLP.js");
var _listaUL = require("../../funciones/listaUL.js");
var _imagenes = require("../../funciones/imagenes.js");
require("../page2/page2.scss");
var _librospopulares = _interopRequireDefault(require("../../imagenes/librospopulares.jpg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//var link = document.createElement("link");
//link.href = "page2.css";
//link.rel = "stylesheet";
//document.head.appendChild(link);
var valores = ["Harry Potter, J. K. Rowling", "Don Quijote de la Mancha, Miguel de Cervante", "El Principito, Antoine de Saint-Exupéry"];
document.getElementById("header").appendChild((0, _headersLinkLP.crearHeaderConLinkLP)("Libros Populares", "index.html", "Inicio", "libros-populares.html", "Libros Populares", "nuevos-lanzamientos.html", "Nuevos Lanzamientos"));
document.getElementById("lista").appendChild((0, _listaUL.agregarLista)(valores));
document.getElementById("imagen").appendChild((0, _imagenes.agregarImagen)([_librospopulares["default"]], 900, 500, "Libros Populares"));