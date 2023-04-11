"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.agregarListaOL = void 0;
var agregarListaOL = function agregarListaOL(items, url, texto) {
  var ol = document.createElement("ol");
  var lastLi;
  for (var i = 0; i < items.length; i++) {
    var li = document.createElement("li");
    var b = document.createElement("b");
    var iTag = document.createElement("i");
    b.innerText = items[i];
    iTag.appendChild(b);
    li.appendChild(iTag);
    ol.appendChild(li);
    lastLi = li;
  }
  var br = document.createElement("br");
  document.body.appendChild(br);
  var a = document.createElement("a");
  a.setAttribute("href", url);
  a.innerText = texto;
  document.body.appendChild(a);
  lastLi.appendChild(br);
  lastLi.appendChild(a);
  return ol;
};
exports.agregarListaOL = agregarListaOL;