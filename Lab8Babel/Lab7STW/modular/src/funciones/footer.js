export const agregarFooter = (texto, url) => {
    return texto && url ? (
        (() => {
            const footer = document.createElement("footer");
            const a = document.createElement("a");
            a.setAttribute("href", url);
            a.innerText = texto;
            footer.appendChild(a);
            document.body.appendChild(footer);
            return footer;
        })()
    ) : (
        () => { throw new Error("Faltan algunos parámetros necesarios para agregar el footer"); }
    )();
}
