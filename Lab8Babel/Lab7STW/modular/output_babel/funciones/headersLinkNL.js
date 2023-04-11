"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearHeaderConLinkNL = void 0;
var crearHeaderConLinkNL = function crearHeaderConLinkNL(titulo, url, texto, url1, texto1, url2, texto2) {
  var header = document.createElement("header");
  var div = document.createElement("div");
  div.classList.add("contenedor");
  var h1 = document.createElement("h1");
  h1.innerText = titulo;
  var nav = document.createElement("nav");
  var a = document.createElement("a");
  a.setAttribute("href", url);
  a.innerText = texto;
  var a1 = document.createElement("a");
  a1.setAttribute("href", url1);
  a1.innerText = texto1;
  var a2 = document.createElement("a");
  a2.setAttribute("href", url2);
  a2.classList.add("principal");
  a2.innerText = texto2;
  nav.appendChild(a);
  nav.appendChild(a1);
  nav.appendChild(a2);
  div.appendChild(h1);
  div.appendChild(nav);
  header.appendChild(div);
  document.body.appendChild(header);
  return header;
};
exports.crearHeaderConLinkNL = crearHeaderConLinkNL;