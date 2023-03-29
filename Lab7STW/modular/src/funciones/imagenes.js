export const agregarImagen = (src, ancho, alto, textoAlternativo) => {
    var imagen = document.createElement("img");
    imagen.setAttribute("src", src);
    imagen.setAttribute("width", ancho);
    imagen.setAttribute("height", alto);
    imagen.setAttribute("alt", textoAlternativo);
    document.body.appendChild(imagen);
    return imagen;   
}
  