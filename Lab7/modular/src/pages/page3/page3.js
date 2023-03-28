const header = window.FuncionHeaderLinkNL.crearHeaderConLinkNL("Nuevos Lanzamientos", "../page1/index.html", "Inicio", "../page2/libros-populares.html", "Libros Populares", "nuevos-lanzamientos.html", "Nuevos Lanzamientos");
var valoresOL = ["Tren fantasma a la Estrella de Oriente, Paul Theroux", "Los Europeos, Orlando Figes", "Asesinato en el Orient Express, Agatha Christie", "Mi historia, Sebastian Solorzano"];
const listaOL = window.FuncionListaOL.agregarListaOL(valoresOL, "../page4/inicio.html", "Detalles del libro");
const imagen = window.FuncionImagenes.agregarImagen("../../imagenes/librosproximamente.jpg", 1000, 500, "Nuevos Lanzamientos");

var link = document.createElement("link");
link.href = "page3.css";
link.rel = "stylesheet";

document.getElementById("header").appendChild(header);
document.getElementById("listaOL").appendChild(listaOL);
document.getElementById("imagen").appendChild(imagen);
document.head.appendChild(link);
