export const agregarLista = (items) => {
    var ul = document.createElement("ul");
    for (var i = 0; i < items.length; i++) {
        var li = document.createElement("li");
        var b = document.createElement("b");
        var iTag = document.createElement("i");
        b.innerText = items[i];
        iTag.appendChild(b);
        li.appendChild(iTag);
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
    return ul;
}
  