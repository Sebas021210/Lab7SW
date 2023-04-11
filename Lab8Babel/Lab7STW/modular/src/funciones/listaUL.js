export const agregarLista = (items) => {
    return items && items.length > 0 ? (
        (() => {
            const ul = document.createElement("ul");
            for (let i = 0; i < items.length; i++) {
                const li = document.createElement("li");
                const b = document.createElement("b");
                const iTag = document.createElement("i");
                b.innerText = items[i];
                iTag.appendChild(b);
                li.appendChild(iTag);
                ul.appendChild(li);
            }
            document.body.appendChild(ul);
            return ul;
        })()
    ) : (
        () => { throw new Error("La lista de items está vacía o no se ha proporcionado"); }
    )();
}
