const header = window.FuncionHeaderLinkLP.crearHeaderConLinkLP("Libros Populares", "../page1/index.html", "Inicio", "libros-populares.html", "Libros Populares", "../page3/nuevos-lanzamientos.html", "Nuevos Lanzamientos");
var valores = ["Harry Potter, J. K. Rowling", "Don Quijote de la Mancha, Miguel de Cervante", "El Principito, Antoine de Saint-Exupéry"];
const lista = window.FuncionListaUL.agregarLista(valores);
const imagen = window.FuncionImagenes.agregarImagen("../../imagenes/librospopulares.jpg", 900, 500, "Libros Populares");

var link = document.createElement("link");
link.href = "page2.css";
link.rel = "stylesheet";

document.getElementById("header").appendChild(header);
document.getElementById("lista").appendChild(lista);
document.getElementById("imagen").appendChild(imagen);
document.head.appendChild(link);
