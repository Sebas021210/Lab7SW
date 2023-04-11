"use strict";

var _headersLink = require("../../funciones/headersLink.js");
var _imagenes = require("../../funciones/imagenes.js");
require("../page1/page1.scss");
var _libreria = _interopRequireDefault(require("../../imagenes/libreria.jpg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//var link = document.createElement("link");
//link.href = "page1.css";
//link.rel = "stylesheet";
//document.head.appendChild(link);
document.getElementById("header").appendChild((0, _headersLink.crearHeaderConLink)("Tienda de Libros", "index.html", "Inicio", "libros-populares.html", "Libros Populares", "nuevos-lanzamientos.html", "Nuevos Lanzamientos"));
document.getElementById("imagen").appendChild((0, _imagenes.agregarImagen)([_libreria["default"]], 800, 600, "Libreria"));