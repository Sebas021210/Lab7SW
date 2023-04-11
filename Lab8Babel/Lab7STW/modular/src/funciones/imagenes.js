export const agregarImagen = (src, ancho, alto, textoAlternativo) => {
    const imagen = document.createElement("img");
    return src && ancho && alto ? (
        imagen.setAttribute("src", src),
        imagen.setAttribute("width", ancho),
        imagen.setAttribute("height", alto),
        imagen.setAttribute("alt", textoAlternativo),
        document.body.appendChild(imagen),
        imagen
    ) : (
        () => { throw new Error("Faltan algunos parámetros necesarios para agregar la imagen"); }
    )(); 
}

