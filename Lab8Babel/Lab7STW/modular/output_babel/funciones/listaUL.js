"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.agregarLista = void 0;
var agregarLista = function agregarLista(items) {
  return items && items.length > 0 ? function () {
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
  }() : function () {
    throw new Error("La lista de items está vacía o no se ha proporcionado");
  }();
};
exports.agregarLista = agregarLista;