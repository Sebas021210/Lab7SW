import { createHeader } from "../../funciones/header.js";
import { crearParrafo } from "../../funciones/parrafo.js";
import { agregarLista } from "../../funciones/listaUL.js";
import { agregarImagen } from "../../funciones/imagenes.js";
import { crearProgress } from "../../funciones/progress.js";
import { agregarFooter } from "../../funciones/footer.js";
import "../page4/page4.scss";

//var link = document.createElement("link");
//link.href = "page4.css";
//link.rel = "stylesheet";
//document.head.appendChild(link);

var valores = ["Confiar en Dustin y llegar a la ciudad", "No confiar en Dustin y seguir buscando otros lugares"];

document.getElementById("header").appendChild(createHeader("Historia"));
document.getElementById("texto").appendChild(crearParrafo("Todo comienza en el año 2025, tres años despues del comienzo de un apocalipsis zombie. Un grupo de amigos que vivian en Texas decidieron estar juntos en el apocalipsis y despues de estos tres años siguen estando juntos, apoyandose en los momentos más dificiles. Durante estos tres años tuvieron que matar a muchos zombies y buscar comida para poder sobrevivir hasta el punto de llegar a Arizona. Un dia en esta nueva ciudad se encontraron con una persona llamada Dustin, Ben que es el lider y el resto del grupo de amigos se asustaron mucho, pues en este tiempo jamas habian visto a otra persona. Ben y Dustin decidieron tener una charla, le realizo algunas preguntas y despues de un largo tiempo, Ben descubrio que Dustin vive en una ciudad cerca del norte de Arizona, en esta ciudad viven muchas personas, tienen muchos recursos y estan muy bien protegidos de los zombies.", "Ben hablo con todo el grupo y les dio dos opciones"));
document.getElementById("listaUL").appendChild(agregarLista(valores));
document.getElementById("imagen").appendChild(agregarImagen("https://el-pais.brightspotcdn.com/dims4/default/1054462/2147483647/strip/false/crop/1000x563+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.amazonaws.com%2Fbrightspot%2Fuploads%2F2022%2F02%2F17%2F620eb15bdacef.jpeg", 650, 350, "Inicio de la historia"));
document.getElementById("progressbar").appendChild(crearProgress("Progreso del libro", 100, 10));
document.getElementById("footer").appendChild(agregarFooter("Regresar", "nuevos-lanzamientos.html"));
