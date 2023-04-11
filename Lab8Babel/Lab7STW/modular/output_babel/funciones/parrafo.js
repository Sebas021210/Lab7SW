"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearParrafo = void 0;
var crearParrafo = function crearParrafo(texto, texto2) {
  var article = document.createElement("article");
  var p = document.createElement("p");
  p.innerText = texto;
  article.appendChild(p);
  var p2 = document.createElement("p");
  p2.innerText = texto2;
  article.appendChild(p2);
  document.body.appendChild(article);
  return article;
};
exports.crearParrafo = crearParrafo;