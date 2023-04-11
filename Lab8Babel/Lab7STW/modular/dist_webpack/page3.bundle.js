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

/***/ }),

/***/ "./src/funciones/headersLinkNL.js":
/*!****************************************!*\
  !*** ./src/funciones/headersLinkNL.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crearHeaderConLinkNL\": () => (/* binding */ crearHeaderConLinkNL)\n/* harmony export */ });\nconst crearHeaderConLinkNL = (titulo, url, texto, url1, texto1, url2, texto2) => {\r\n    var header = document.createElement(\"header\");\r\n    var div = document.createElement(\"div\");\r\n    div.classList.add(\"contenedor\");\r\n    var h1 = document.createElement(\"h1\");\r\n    h1.innerText = titulo;\r\n    \r\n    var nav = document.createElement(\"nav\");\r\n    var a = document.createElement(\"a\");\r\n    a.setAttribute(\"href\", url);\r\n    a.innerText = texto;\r\n    var a1 = document.createElement(\"a\");\r\n    a1.setAttribute(\"href\", url1);\r\n    a1.innerText = texto1;\r\n    var a2 = document.createElement(\"a\");\r\n    a2.setAttribute(\"href\", url2);\r\n    a2.classList.add(\"principal\");\r\n    a2.innerText = texto2;\r\n    \r\n    nav.appendChild(a);\r\n    nav.appendChild(a1);\r\n    nav.appendChild(a2);\r\n    \r\n    div.appendChild(h1);\r\n    div.appendChild(nav);\r\n    header.appendChild(div);\r\n    document.body.appendChild(header);\r\n    return header;\r\n}\n\n//# sourceURL=webpack://modular/./src/funciones/headersLinkNL.js?");

/***/ }),

/***/ "./src/funciones/imagenes.js":
/*!***********************************!*\
  !*** ./src/funciones/imagenes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"agregarImagen\": () => (/* binding */ agregarImagen)\n/* harmony export */ });\nconst agregarImagen = (src, ancho, alto, textoAlternativo) => {\r\n    var imagen = document.createElement(\"img\");\r\n    imagen.setAttribute(\"src\", src);\r\n    imagen.setAttribute(\"width\", ancho);\r\n    imagen.setAttribute(\"height\", alto);\r\n    imagen.setAttribute(\"alt\", textoAlternativo);\r\n    document.body.appendChild(imagen);\r\n    return imagen;   \r\n}\r\n  \n\n//# sourceURL=webpack://modular/./src/funciones/imagenes.js?");

/***/ }),

/***/ "./src/funciones/listaOL.js":
/*!**********************************!*\
  !*** ./src/funciones/listaOL.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"agregarListaOL\": () => (/* binding */ agregarListaOL)\n/* harmony export */ });\nconst agregarListaOL = (items, url, texto) => {\r\n    var ol = document.createElement(\"ol\");\r\n    var lastLi;\r\n    for (var i = 0; i < items.length; i++) {\r\n        var li = document.createElement(\"li\");\r\n        var b = document.createElement(\"b\");\r\n        var iTag = document.createElement(\"i\");\r\n        b.innerText = items[i];\r\n        iTag.appendChild(b);\r\n        li.appendChild(iTag);\r\n        ol.appendChild(li);\r\n        lastLi = li;\r\n    }\r\n    var br = document.createElement(\"br\");\r\n    document.body.appendChild(br);\r\n    var a = document.createElement(\"a\");\r\n    a.setAttribute(\"href\", url);\r\n    a.innerText = texto;\r\n    document.body.appendChild(a);\r\n    lastLi.appendChild(br);\r\n    lastLi.appendChild(a);\r\n    return ol;\r\n}\n\n//# sourceURL=webpack://modular/./src/funciones/listaOL.js?");

/***/ }),

/***/ "./src/pages/page3/page3.js":
/*!**********************************!*\
  !*** ./src/pages/page3/page3.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funciones_headersLinkNL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../funciones/headersLinkNL.js */ \"./src/funciones/headersLinkNL.js\");\n/* harmony import */ var _funciones_listaOL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../funciones/listaOL.js */ \"./src/funciones/listaOL.js\");\n/* harmony import */ var _funciones_imagenes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../funciones/imagenes.js */ \"./src/funciones/imagenes.js\");\n/* harmony import */ var _page3_page3_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page3/page3.scss */ \"./src/pages/page3/page3.scss\");\n/* harmony import */ var _imagenes_librosproximamente_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../imagenes/librosproximamente.jpg */ \"./src/imagenes/librosproximamente.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n//var link = document.createElement(\"link\");\r\n//link.href = \"page3.css\";\r\n//link.rel = \"stylesheet\";\r\n//document.head.appendChild(link);\r\n\r\nvar valoresOL = [\"Tren fantasma a la Estrella de Oriente, Paul Theroux\", \"Los Europeos, Orlando Figes\", \"Asesinato en el Orient Express, Agatha Christie\", \"Mi historia, Sebastian Solorzano\"];\r\n\r\ndocument.getElementById(\"header\").appendChild((0,_funciones_headersLinkNL_js__WEBPACK_IMPORTED_MODULE_0__.crearHeaderConLinkNL)(\"Nuevos Lanzamientos\", \"index.html\", \"Inicio\", \"libros-populares.html\", \"Libros Populares\", \"nuevos-lanzamientos.html\", \"Nuevos Lanzamientos\"));\r\ndocument.getElementById(\"listaOL\").appendChild((0,_funciones_listaOL_js__WEBPACK_IMPORTED_MODULE_1__.agregarListaOL)(valoresOL, \"inicio.html\", \"Detalles del libro\"));\r\ndocument.getElementById(\"imagen\").appendChild((0,_funciones_imagenes_js__WEBPACK_IMPORTED_MODULE_2__.agregarImagen)([_imagenes_librosproximamente_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]], 1000, 500, \"Nuevos Lanzamientos\"));\r\n\r\n\n\n//# sourceURL=webpack://modular/./src/pages/page3/page3.js?");

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