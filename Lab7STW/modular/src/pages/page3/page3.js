import { crearHeaderConLinkNL } from "../../funciones/headersLinkNL.js";
import { agregarListaOL } from "../../funciones/listaOL.js";
import { agregarImagen } from "../../funciones/imagenes.js";
import "../page3/page3.scss";

//var link = document.createElement("link");
//link.href = "page3.css";
//link.rel = "stylesheet";
//document.head.appendChild(link);

var valoresOL = ["Tren fantasma a la Estrella de Oriente, Paul Theroux", "Los Europeos, Orlando Figes", "Asesinato en el Orient Express, Agatha Christie", "Mi historia, Sebastian Solorzano"];

document.getElementById("header").appendChild(crearHeaderConLinkNL("Nuevos Lanzamientos", "../page1/index.html", "Inicio", "../page2/libros-populares.html", "Libros Populares", "nuevos-lanzamientos.html", "Nuevos Lanzamientos"));
document.getElementById("listaOL").appendChild(agregarListaOL(valoresOL, "../page4/inicio.html", "Detalles del libro"));
document.getElementById("imagen").appendChild(agregarImagen("../../imagenes/librosproximamente.jpg", 1000, 500, "Nuevos Lanzamientos"));

