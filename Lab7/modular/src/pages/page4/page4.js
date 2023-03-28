const header = window.FuncionHeader.createHeader("Historia");
var valores = ["Confiar en Dustin y llegar a la ciudad", "No confiar en Dustin y seguir buscando otros lugares"];
const listaUL = window.FuncionListaUL.agregarLista(valores);
const imagen = window.FuncionImagenes.agregarImagen("https://el-pais.brightspotcdn.com/dims4/default/1054462/2147483647/strip/false/crop/1000x563+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.amazonaws.com%2Fbrightspot%2Fuploads%2F2022%2F02%2F17%2F620eb15bdacef.jpeg", 650, 350, "Inicio de la historia");
const footer = window.FuncionFooter.agregarFooter("Regresar", "../page3/nuevos-lanzamientos.html");
const texto = window.FuncionTexto.crearParrafo("Todo comienza en el año 2025, tres años despues del comienzo de un apocalipsis zombie. Un grupo de amigos que vivian en Texas decidieron estar juntos en el apocalipsis y despues de estos tres años siguen estando juntos, apoyandose en los momentos más dificiles. Durante estos tres años tuvieron que matar a muchos zombies y buscar comida para poder sobrevivir hasta el punto de llegar a Arizona. Un dia en esta nueva ciudad se encontraron con una persona llamada Dustin, Ben que es el lider y el resto del grupo de amigos se asustaron mucho, pues en este tiempo jamas habian visto a otra persona. Ben y Dustin decidieron tener una charla, le realizo algunas preguntas y despues de un largo tiempo, Ben descubrio que Dustin vive en una ciudad cerca del norte de Arizona, en esta ciudad viven muchas personas, tienen muchos recursos y estan muy bien protegidos de los zombies.", "Ben hablo con todo el grupo y les dio dos opciones");
const progressbar = window.FuncionProgressBar.crearProgress("Progreso del libro", 100, 10);

var link = document.createElement("link");
link.href = "page4.css";
link.rel = "stylesheet";

document.getElementById("header").appendChild(header);
document.getElementById("listaUL").appendChild(listaUL);
document.getElementById("imagen").appendChild(imagen);
document.getElementById("footer").appendChild(footer);
document.getElementById("texto").appendChild(texto);
document.getElementById("progressbar").appendChild(progressbar);
document.head.appendChild(link);