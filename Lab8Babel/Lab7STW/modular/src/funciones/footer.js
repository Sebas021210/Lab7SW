export const agregarFooter = (texto, url) => {
    var footer = document.createElement("footer");
    var a = document.createElement("a");
    a.setAttribute("href", url);
    a.innerText = texto;
    footer.appendChild(a);
    document.body.appendChild(footer)
    return footer;
}
