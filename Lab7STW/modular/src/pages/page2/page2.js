import { crearHeaderConLinkLP } from "../../funciones/headersLinkLP.js";
import { agregarLista } from "../../funciones/listaUL.js";
import { agregarImagen } from "../../funciones/imagenes.js";
import "../page2/page2.scss";

//var link = document.createElement("link");
//link.href = "page2.css";
//link.rel = "stylesheet";
//document.head.appendChild(link);

var valores = ["Harry Potter, J. K. Rowling", "Don Quijote de la Mancha, Miguel de Cervante", "El Principito, Antoine de Saint-Exupéry"];

document.getElementById("header").appendChild(crearHeaderConLinkLP("Libros Populares", "../page1/index.html", "Inicio", "libros-populares.html", "Libros Populares", "../page3/nuevos-lanzamientos.html", "Nuevos Lanzamientos"));
document.getElementById("imagen").appendChild(agregarImagen("../../imagenes/librospopulares.jpg", 900, 500, "Libros Populares"));
