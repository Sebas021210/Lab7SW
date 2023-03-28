const header = window.FuncionHeaderLink.crearHeaderConLink("Tienda de Libros", "index.html", "Inicio", "../page2/libros-populares.html", "Libros Populares", "../page3/nuevos-lanzamientos.html", "Nuevos Lanzamientos");
const imagen = window.FuncionImagenes.agregarImagen("../../imagenes/libreria-.jpg", 800, 600, "Libreria");

var link = document.createElement("link");
link.href = "page1.css";
link.rel = "stylesheet";

document.getElementById("header").appendChild(header);
document.getElementById("imagen").appendChild(imagen);
document.head.appendChild(link);

