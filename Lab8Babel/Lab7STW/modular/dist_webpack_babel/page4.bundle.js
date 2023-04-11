/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/funciones/footer.js":
/*!*********************************!*\
  !*** ./src/funciones/footer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"agregarFooter\": () => (/* binding */ agregarFooter)\n/* harmony export */ });\nvar agregarFooter = function agregarFooter(texto, url) {\n  return texto && url ? function () {\n    var footer = document.createElement(\"footer\");\n    var a = document.createElement(\"a\");\n    a.setAttribute(\"href\", url);\n    a.innerText = texto;\n    footer.appendChild(a);\n    document.body.appendChild(footer);\n    return footer;\n  }() : function () {\n    throw new Error(\"Faltan algunos parámetros necesarios para agregar el footer\");\n  }();\n};\n\n//# sourceURL=webpack://modular/./src/funciones/footer.js?");

/***/ }),

/***/ "./src/funciones/header.js":
/*!*********************************!*\
  !*** ./src/funciones/header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\nvar createHeader = function createHeader(texto) {\n  return texto ? function () {\n    var header = document.createElement(\"header\");\n    var div = document.createElement(\"div\");\n    div.classList.add(\"contenedor\");\n    var h1 = document.createElement(\"h1\");\n    h1.innerText = texto;\n    header.appendChild(h1);\n    div.appendChild(h1);\n    header.appendChild(div);\n    document.body.appendChild(header);\n    return header;\n  }() : function () {\n    throw new Error(\"Falta el parámetro 'texto' para crear el header\");\n  }();\n};\n\n//# sourceURL=webpack://modular/./src/funciones/header.js?");

/***/ }),

/***/ "./src/funciones/imagenes.js":
/*!***********************************!*\
  !*** ./src/funciones/imagenes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"agregarImagen\": () => (/* binding */ agregarImagen)\n/* harmony export */ });\nvar agregarImagen = function agregarImagen(src, ancho, alto, textoAlternativo) {\n  var imagen = document.createElement(\"img\");\n  return src && ancho && alto ? (imagen.setAttribute(\"src\", src), imagen.setAttribute(\"width\", ancho), imagen.setAttribute(\"height\", alto), imagen.setAttribute(\"alt\", textoAlternativo), document.body.appendChild(imagen), imagen) : function () {\n    throw new Error(\"Faltan algunos parámetros necesarios para agregar la imagen\");\n  }();\n};\n\n//# sourceURL=webpack://modular/./src/funciones/imagenes.js?");

/***/ }),

/***/ "./src/funciones/listaUL.js":
/*!**********************************!*\
  !*** ./src/funciones/listaUL.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"agregarLista\": () => (/* binding */ agregarLista)\n/* harmony export */ });\nvar agregarLista = function agregarLista(items) {\n  return items && items.length > 0 ? function () {\n    var ul = document.createElement(\"ul\");\n    for (var i = 0; i < items.length; i++) {\n      var li = document.createElement(\"li\");\n      var b = document.createElement(\"b\");\n      var iTag = document.createElement(\"i\");\n      b.innerText = items[i];\n      iTag.appendChild(b);\n      li.appendChild(iTag);\n      ul.appendChild(li);\n    }\n    document.body.appendChild(ul);\n    return ul;\n  }() : function () {\n    throw new Error(\"La lista de items está vacía o no se ha proporcionado\");\n  }();\n};\n\n//# sourceURL=webpack://modular/./src/funciones/listaUL.js?");

/***/ }),

/***/ "./src/funciones/parrafo.js":
/*!**********************************!*\
  !*** ./src/funciones/parrafo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crearParrafo\": () => (/* binding */ crearParrafo)\n/* harmony export */ });\nvar crearParrafo = function crearParrafo(texto, texto2) {\n  var article = document.createElement(\"article\");\n  var p = document.createElement(\"p\");\n  p.innerText = texto;\n  article.appendChild(p);\n  var p2 = document.createElement(\"p\");\n  p2.innerText = texto2;\n  article.appendChild(p2);\n  document.body.appendChild(article);\n  return article;\n};\n\n//# sourceURL=webpack://modular/./src/funciones/parrafo.js?");

/***/ }),

/***/ "./src/funciones/progress.js":
/*!***********************************!*\
  !*** ./src/funciones/progress.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crearProgress\": () => (/* binding */ crearProgress)\n/* harmony export */ });\nvar crearProgress = function crearProgress(titulo, valorMaximo, valorActual) {\n  var div = document.createElement(\"div\");\n  var h3 = document.createElement(\"h3\");\n  h3.innerText = titulo;\n  var progress = document.createElement(\"progress\");\n  progress.setAttribute(\"max\", valorMaximo);\n  progress.setAttribute(\"value\", valorActual);\n  progress.innerText = valorActual + \"%\";\n  var span = document.createElement(\"span\");\n  span.innerText = valorActual + \"%\";\n  div.appendChild(h3);\n  div.appendChild(progress);\n  div.appendChild(span);\n  document.body.appendChild(div);\n  return div;\n};\n\n//# sourceURL=webpack://modular/./src/funciones/progress.js?");

/***/ }),

/***/ "./src/pages/page4/page4.js":
/*!**********************************!*\
  !*** ./src/pages/page4/page4.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funciones_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../funciones/header.js */ \"./src/funciones/header.js\");\n/* harmony import */ var _funciones_parrafo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../funciones/parrafo.js */ \"./src/funciones/parrafo.js\");\n/* harmony import */ var _funciones_listaUL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../funciones/listaUL.js */ \"./src/funciones/listaUL.js\");\n/* harmony import */ var _funciones_imagenes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../funciones/imagenes.js */ \"./src/funciones/imagenes.js\");\n/* harmony import */ var _funciones_progress_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../funciones/progress.js */ \"./src/funciones/progress.js\");\n/* harmony import */ var _funciones_footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../funciones/footer.js */ \"./src/funciones/footer.js\");\n/* harmony import */ var _page4_page4_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../page4/page4.scss */ \"./src/pages/page4/page4.scss\");\n\n\n\n\n\n\n\n\n//var link = document.createElement(\"link\");\n//link.href = \"page4.css\";\n//link.rel = \"stylesheet\";\n//document.head.appendChild(link);\n\nvar valores = [\"Confiar en Dustin y llegar a la ciudad\", \"No confiar en Dustin y seguir buscando otros lugares\"];\ndocument.getElementById(\"header\").appendChild((0,_funciones_header_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)(\"Historia\"));\ndocument.getElementById(\"texto\").appendChild((0,_funciones_parrafo_js__WEBPACK_IMPORTED_MODULE_1__.crearParrafo)(\"Todo comienza en el año 2025, tres años despues del comienzo de un apocalipsis zombie. Un grupo de amigos que vivian en Texas decidieron estar juntos en el apocalipsis y despues de estos tres años siguen estando juntos, apoyandose en los momentos más dificiles. Durante estos tres años tuvieron que matar a muchos zombies y buscar comida para poder sobrevivir hasta el punto de llegar a Arizona. Un dia en esta nueva ciudad se encontraron con una persona llamada Dustin, Ben que es el lider y el resto del grupo de amigos se asustaron mucho, pues en este tiempo jamas habian visto a otra persona. Ben y Dustin decidieron tener una charla, le realizo algunas preguntas y despues de un largo tiempo, Ben descubrio que Dustin vive en una ciudad cerca del norte de Arizona, en esta ciudad viven muchas personas, tienen muchos recursos y estan muy bien protegidos de los zombies.\", \"Ben hablo con todo el grupo y les dio dos opciones\"));\ndocument.getElementById(\"listaUL\").appendChild((0,_funciones_listaUL_js__WEBPACK_IMPORTED_MODULE_2__.agregarLista)(valores));\ndocument.getElementById(\"imagen\").appendChild((0,_funciones_imagenes_js__WEBPACK_IMPORTED_MODULE_3__.agregarImagen)(\"https://el-pais.brightspotcdn.com/dims4/default/1054462/2147483647/strip/false/crop/1000x563+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.amazonaws.com%2Fbrightspot%2Fuploads%2F2022%2F02%2F17%2F620eb15bdacef.jpeg\", 650, 350, \"Inicio de la historia\"));\ndocument.getElementById(\"progressbar\").appendChild((0,_funciones_progress_js__WEBPACK_IMPORTED_MODULE_4__.crearProgress)(\"Progreso del libro\", 100, 10));\ndocument.getElementById(\"footer\").appendChild((0,_funciones_footer_js__WEBPACK_IMPORTED_MODULE_5__.agregarFooter)(\"Regresar\", \"nuevos-lanzamientos.html\"));\n\n//# sourceURL=webpack://modular/./src/pages/page4/page4.js?");

/***/ }),

/***/ "./src/pages/page4/page4.scss":
/*!************************************!*\
  !*** ./src/pages/page4/page4.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://modular/./src/pages/page4/page4.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/page4/page4.js");
/******/ 	
/******/ })()
;