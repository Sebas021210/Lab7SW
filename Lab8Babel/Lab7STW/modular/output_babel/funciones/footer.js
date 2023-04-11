"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.agregarFooter = void 0;
var agregarFooter = function agregarFooter(texto, url) {
  return texto && url ? function () {
    var footer = document.createElement("footer");
    var a = document.createElement("a");
    a.setAttribute("href", url);
    a.innerText = texto;
    footer.appendChild(a);
    document.body.appendChild(footer);
    return footer;
  }() : function () {
    throw new Error("Faltan algunos parámetros necesarios para agregar el footer");
  }();
};
exports.agregarFooter = agregarFooter;