"use strict";

var _headersLinkNL = require("../../funciones/headersLinkNL.js");
var _listaOL = require("../../funciones/listaOL.js");
var _imagenes = require("../../funciones/imagenes.js");
require("../page3/page3.scss");
var _librosproximamente = _interopRequireDefault(require("../../imagenes/librosproximamente.jpg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//var link = document.createElement("link");
//link.href = "page3.css";
//link.rel = "stylesheet";
//document.head.appendChild(link);
var valoresOL = ["Tren fantasma a la Estrella de Oriente, Paul Theroux", "Los Europeos, Orlando Figes", "Asesinato en el Orient Express, Agatha Christie", "Mi historia, Sebastian Solorzano"];
document.getElementById("header").appendChild((0, _headersLinkNL.crearHeaderConLinkNL)("Nuevos Lanzamientos", "index.html", "Inicio", "libros-populares.html", "Libros Populares", "nuevos-lanzamientos.html", "Nuevos Lanzamientos"));
document.getElementById("listaOL").appendChild((0, _listaOL.agregarListaOL)(valoresOL, "inicio.html", "Detalles del libro"));
document.getElementById("imagen").appendChild((0, _imagenes.agregarImagen)([_librosproximamente["default"]], 1000, 500, "Nuevos Lanzamientos"));