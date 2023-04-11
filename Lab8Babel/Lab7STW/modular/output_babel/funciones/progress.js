"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearProgress = void 0;
var crearProgress = function crearProgress(titulo, valorMaximo, valorActual) {
  var div = document.createElement("div");
  var h3 = document.createElement("h3");
  h3.innerText = titulo;
  var progress = document.createElement("progress");
  progress.setAttribute("max", valorMaximo);
  progress.setAttribute("value", valorActual);
  progress.innerText = valorActual + "%";
  var span = document.createElement("span");
  span.innerText = valorActual + "%";
  div.appendChild(h3);
  div.appendChild(progress);
  div.appendChild(span);
  document.body.appendChild(div);
  return div;
};
exports.crearProgress = crearProgress;