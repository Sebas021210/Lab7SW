import { crearHeaderConLinkNL } from "../../funciones/headersLinkNL.js";
import { agregarListaOL } from "../../funciones/listaOL.js";
import { agregarImagen } from "../../funciones/imagenes.js";
import "../page3/page3.scss";
import img from "../../imagenes/librosproximamente.jpg";

//var link = document.createElement("link");
//link.href = "page3.css";
//link.rel = "stylesheet";
//document.head.appendChild(link);

var valoresOL = ["Tren fantasma a la Estrella de Oriente, Paul Theroux", "Los Europeos, Orlando Figes", "Asesinato en el Orient Express, Agatha Christie", "Mi historia, Sebastian Solorzano"];

document.getElementById("header").appendChild(crearHeaderConLinkNL("Nuevos Lanzamientos", "index.html", "Inicio", "libros-populares.html", "Libros Populares", "nuevos-lanzamientos.html", "Nuevos Lanzamientos"));
document.getElementById("listaOL").appendChild(agregarListaOL(valoresOL, "inicio.html", "Detalles del libro"));
document.getElementById("imagen").appendChild(agregarImagen([img], 1000, 500, "Nuevos Lanzamientos"));

