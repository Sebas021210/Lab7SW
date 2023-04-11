export const createHeader = (texto) => {
    return texto ? (
        (() => {
            const header = document.createElement("header");
            const div = document.createElement("div");
            div.classList.add("contenedor");
            const h1 = document.createElement("h1");
            h1.innerText = texto;
            header.appendChild(h1);
            div.appendChild(h1);
            header.appendChild(div);
            document.body.appendChild(header);
            return header;
        })()
    ) : (
        () => { throw new Error("Falta el parámetro 'texto' para crear el header"); }
    )();
}
