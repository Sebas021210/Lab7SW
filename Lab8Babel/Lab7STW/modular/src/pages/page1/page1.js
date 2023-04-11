import { crearHeaderConLink } from "../../funciones/headersLink.js";
import { agregarImagen } from "../../funciones/imagenes.js";
import "../page1/page1.scss";
import img from "../../imagenes/libreria.jpg";

//var link = document.createElement("link");
//link.href = "page1.css";
//link.rel = "stylesheet";
//document.head.appendChild(link);

document.getElementById("header").appendChild(crearHeaderConLink("Tienda de Libros", "index.html", "Inicio", "libros-populares.html", "Libros Populares", "nuevos-lanzamientos.html", "Nuevos Lanzamientos"));
document.getElementById("imagen").appendChild(agregarImagen([img], 800, 600, "Libreria"));