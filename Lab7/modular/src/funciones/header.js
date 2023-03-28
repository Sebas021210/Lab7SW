window.FuncionHeader = {
    createHeader: function(texto) {
        var header = document.createElement("header");
        var div = document.createElement("div");
        div.classList.add("contenedor");
        var h1 = document.createElement("h1");
        h1.innerText = texto;
        header.appendChild(h1);
        div.appendChild(h1);
        header.appendChild(div);
        document.body.appendChild(header)
        return header;
    }
}

 
  