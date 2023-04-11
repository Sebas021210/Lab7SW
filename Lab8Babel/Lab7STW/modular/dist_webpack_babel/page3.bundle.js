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

/***/ "./src/funciones/headersLinkNL.js":
/*!****************************************!*\
  !*** ./src/funciones/headersLinkNL.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crearHeaderConLinkNL\": () => (/* binding */ crearHeaderConLinkNL)\n/* harmony export */ });\nvar crearHeaderConLinkNL = function crearHeaderConLinkNL(titulo, url, texto, url1, texto1, url2, texto2) {\n  var header = document.createElement(\"header\");\n  var div = document.createElement(\"div\");\n  div.classList.add(\"contenedor\");\n  var h1 = document.createElement(\"h1\");\n  h1.innerText = titulo;\n  var nav = document.createElement(\"nav\");\n  var a = document.createElement(\"a\");\n  a.setAttribute(\"href\", url);\n  a.innerText = texto;\n  var a1 = document.createElement(\"a\");\n  a1.setAttribute(\"href\", url1);\n  a1.innerText = texto1;\n  var a2 = document.createElement(\"a\");\n  a2.setAttribute(\"href\", url2);\n  a2.classList.add(\"principal\");\n  a2.innerText = texto2;\n  nav.appendChild(a);\n  nav.appendChild(a1);\n  nav.appendChild(a2);\n  div.appendChild(h1);\n  div.appendChild(nav);\n  header.appendChild(div);\n  document.body.appendChild(header);\n  return header;\n};\n\n//# sourceURL=webpack://modular/./src/funciones/headersLinkNL.js?");

/***/ }),

/***/ "./src/funciones/imagenes.js":
/*!***********************************!*\
  !*** ./src/funciones/imagenes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"agregarImagen\": () => (/* binding */ agregarImagen)\n/* harmony export */ });\nvar agregarImagen = function agregarImagen(src, ancho, alto, textoAlternativo) {\n  var imagen = document.createElement(\"img\");\n  return src && ancho && alto ? (imagen.setAttribute(\"src\", src), imagen.setAttribute(\"width\", ancho), imagen.setAttribute(\"height\", alto), imagen.setAttribute(\"alt\", textoAlternativo), document.body.appendChild(imagen), imagen) : function () {\n    throw new Error(\"Faltan algunos parámetros necesarios para agregar la imagen\");\n  }();\n};\n\n//# sourceURL=webpack://modular/./src/funciones/imagenes.js?");

/***/ }),

/***/ "./src/funciones/listaOL.js":
/*!**********************************!*\
  !*** ./src/funciones/listaOL.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"agregarListaOL\": () => (/* binding */ agregarListaOL)\n/* harmony export */ });\nvar agregarListaOL = function agregarListaOL(items, url, texto) {\n  var ol = document.createElement(\"ol\");\n  var lastLi;\n  for (var i = 0; i < items.length; i++) {\n    var li = document.createElement(\"li\");\n    var b = document.createElement(\"b\");\n    var iTag = document.createElement(\"i\");\n    b.innerText = items[i];\n    iTag.appendChild(b);\n    li.appendChild(iTag);\n    ol.appendChild(li);\n    lastLi = li;\n  }\n  var br = document.createElement(\"br\");\n  document.body.appendChild(br);\n  var a = document.createElement(\"a\");\n  a.setAttribute(\"href\", url);\n  a.innerText = texto;\n  document.body.appendChild(a);\n  lastLi.appendChild(br);\n  lastLi.appendChild(a);\n  return ol;\n};\n\n//# sourceURL=webpack://modular/./src/funciones/listaOL.js?");

/***/ }),

/***/ "./src/pages/page3/page3.js":
/*!**********************************!*\
  !*** ./src/pages/page3/page3.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funciones_headersLinkNL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../funciones/headersLinkNL.js */ \"./src/funciones/headersLinkNL.js\");\n/* harmony import */ var _funciones_listaOL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../funciones/listaOL.js */ \"./src/funciones/listaOL.js\");\n/* harmony import */ var _funciones_imagenes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../funciones/imagenes.js */ \"./src/funciones/imagenes.js\");\n/* harmony import */ var _page3_page3_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page3/page3.scss */ \"./src/pages/page3/page3.scss\");\n/* harmony import */ var _imagenes_librosproximamente_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../imagenes/librosproximamente.jpg */ \"./src/imagenes/librosproximamente.jpg\");\n\n\n\n\n\n\n//var link = document.createElement(\"link\");\n//link.href = \"page3.css\";\n//link.rel = \"stylesheet\";\n//document.head.appendChild(link);\n\nvar valoresOL = [\"Tren fantasma a la Estrella de Oriente, Paul Theroux\", \"Los Europeos, Orlando Figes\", \"Asesinato en el Orient Express, Agatha Christie\", \"Mi historia, Sebastian Solorzano\"];\ndocument.getElementById(\"header\").appendChild((0,_funciones_headersLinkNL_js__WEBPACK_IMPORTED_MODULE_0__.crearHeaderConLinkNL)(\"Nuevos Lanzamientos\", \"index.html\", \"Inicio\", \"libros-populares.html\", \"Libros Populares\", \"nuevos-lanzamientos.html\", \"Nuevos Lanzamientos\"));\ndocument.getElementById(\"listaOL\").appendChild((0,_funciones_listaOL_js__WEBPACK_IMPORTED_MODULE_1__.agregarListaOL)(valoresOL, \"inicio.html\", \"Detalles del libro\"));\ndocument.getElementById(\"imagen\").appendChild((0,_funciones_imagenes_js__WEBPACK_IMPORTED_MODULE_2__.agregarImagen)([_imagenes_librosproximamente_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]], 1000, 500, \"Nuevos Lanzamientos\"));\n\n//# sourceURL=webpack://modular/./src/pages/page3/page3.js?");

/***/ }),

/***/ "./src/imagenes/librosproximamente.jpg":
/*!*********************************************!*\
  !*** ./src/imagenes/librosproximamente.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"imagenes/librosproximamente.jpg\");\n\n//# sourceURL=webpack://modular/./src/imagenes/librosproximamente.jpg?");

/***/ }),

/***/ "./src/pages/page3/page3.scss":
/*!************************************!*\
  !*** ./src/pages/page3/page3.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://modular/./src/pages/page3/page3.scss?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/page3/page3.js");
/******/ 	
/******/ })()
;