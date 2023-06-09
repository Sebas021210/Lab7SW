"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHeader = void 0;
var createHeader = function createHeader(texto) {
  return texto ? function () {
    var header = document.createElement("header");
    var div = document.createElement("div");
    div.classList.add("contenedor");
    var h1 = document.createElement("h1");
    h1.innerText = texto;
    header.appendChild(h1);
    div.appendChild(h1);
    header.appendChild(div);
    document.body.appendChild(header);
    return header;
  }() : function () {
    throw new Error("Falta el parámetro 'texto' para crear el header");
  }();
};
exports.createHeader = createHeader;