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

/***/ "./src/pages/page4/page4.scss":
/*!************************************!*\
  !*** ./src/pages/page4/page4.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://modular/./src/pages/page4/page4.scss?");

/***/ }),

/***/ "./src/funciones/footer.js":
/*!*********************************!*\
  !*** ./src/funciones/footer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"agregarFooter\": () => (/* binding */ agregarFooter)\n/* harmony export */ });\nconst agregarFooter = (texto, url) => {\r\n    var footer = document.createElement(\"footer\");\r\n    var a = document.createElement(\"a\");\r\n    a.setAttribute(\"href\", url);\r\n    a.innerText = texto;\r\n    footer.appendChild(a);\r\n    document.body.appendChild(footer)\r\n    return footer;\r\n}\r\n\r\n\r\n  \n\n//# sourceURL=webpack://modular/./src/funciones/footer.js?");

/***/ }),

/***/ "./src/funciones/header.js":
/*!*********************************!*\
  !*** ./src/funciones/header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\nconst createHeader = (texto) => {\r\n    var header = document.createElement(\"header\");\r\n    var div = document.createElement(\"div\");\r\n    div.classList.add(\"contenedor\");\r\n    var h1 = document.createElement(\"h1\");\r\n    h1.innerText = texto;\r\n    header.appendChild(h1);\r\n    div.appendChild(h1);\r\n    header.appendChild(div);\r\n    document.body.appendChild(header)\r\n    return header;\r\n}\r\n\n\n//# sourceURL=webpack://modular/./src/funciones/header.js?");

/***/ }),

/***/ "./src/funciones/imagenes.js":
/*!***********************************!*\
  !*** ./src/funciones/imagenes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"agregarImagen\": () => (/* binding */ agregarImagen)\n/* harmony export */ });\nconst agregarImagen = (src, ancho, alto, textoAlternativo) => {\r\n    var imagen = document.createElement(\"img\");\r\n    imagen.setAttribute(\"src\", src);\r\n    imagen.setAttribute(\"width\", ancho);\r\n    imagen.setAttribute(\"height\", alto);\r\n    imagen.setAttribute(\"alt\", textoAlternativo);\r\n    document.body.appendChild(imagen);\r\n    return imagen;   \r\n}\r\n  \n\n//# sourceURL=webpack://modular/./src/funciones/imagenes.js?");

/***/ }),

/***/ "./src/funciones/listaUL.js":
/*!**********************************!*\
  !*** ./src/funciones/listaUL.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"agregarLista\": () => (/* binding */ agregarLista)\n/* harmony export */ });\nconst agregarLista = (items) => {\r\n    var ul = document.createElement(\"ul\");\r\n    for (var i = 0; i < items.length; i++) {\r\n        var li = document.createElement(\"li\");\r\n        var b = document.createElement(\"b\");\r\n        var iTag = document.createElement(\"i\");\r\n        b.innerText = items[i];\r\n        iTag.appendChild(b);\r\n        li.appendChild(iTag);\r\n        ul.appendChild(li);\r\n    }\r\n    document.body.appendChild(ul);\r\n    return ul;\r\n}\r\n  \n\n//# sourceURL=webpack://modular/./src/funciones/listaUL.js?");

/***/ }),

/***/ "./src/funciones/parrafo.js":
/*!**********************************!*\
  !*** ./src/funciones/parrafo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crearParrafo\": () => (/* binding */ crearParrafo)\n/* harmony export */ });\nconst crearParrafo = (texto, texto2) => {\r\n    var article = document.createElement(\"article\");\r\n    var p = document.createElement(\"p\");\r\n    p.innerText = texto;\r\n    article.appendChild(p);\r\n    var p2 = document.createElement(\"p\");\r\n    p2.innerText = texto2;\r\n    article.appendChild(p2);\r\n    document.body.appendChild(article);\r\n    return article;\r\n}\r\n\n\n//# sourceURL=webpack://modular/./src/funciones/parrafo.js?");

/***/ }),

/***/ "./src/funciones/progress.js":
/*!***********************************!*\
  !*** ./src/funciones/progress.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crearProgress\": () => (/* binding */ crearProgress)\n/* harmony export */ });\nconst crearProgress = (titulo, valorMaximo, valorActual) => {\r\n    var div = document.createElement(\"div\");\r\n    var h3 = document.createElement(\"h3\");\r\n    h3.innerText = titulo;\r\n    var progress = document.createElement(\"progress\");\r\n    progress.setAttribute(\"max\", valorMaximo);\r\n    progress.setAttribute(\"value\", valorActual);\r\n    progress.innerText = valorActual + \"%\";\r\n    var span = document.createElement(\"span\");\r\n    span.innerText = valorActual + \"%\";\r\n    div.appendChild(h3);\r\n    div.appendChild(progress);\r\n    div.appendChild(span);   \r\n    document.body.appendChild(div);\r\n    return div;\r\n}\r\n\n\n//# sourceURL=webpack://modular/./src/funciones/progress.js?");

/***/ }),

/***/ "./src/pages/page4/page4.js":
/*!**********************************!*\
  !*** ./src/pages/page4/page4.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funciones_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../funciones/header.js */ \"./src/funciones/header.js\");\n/* harmony import */ var _funciones_parrafo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../funciones/parrafo.js */ \"./src/funciones/parrafo.js\");\n/* harmony import */ var _funciones_listaUL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../funciones/listaUL.js */ \"./src/funciones/listaUL.js\");\n/* harmony import */ var _funciones_imagenes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../funciones/imagenes.js */ \"./src/funciones/imagenes.js\");\n/* harmony import */ var _funciones_progress_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../funciones/progress.js */ \"./src/funciones/progress.js\");\n/* harmony import */ var _funciones_footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../funciones/footer.js */ \"./src/funciones/footer.js\");\n/* harmony import */ var _page4_page4_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../page4/page4.scss */ \"./src/pages/page4/page4.scss\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//var link = document.createElement(\"link\");\r\n//link.href = \"page4.css\";\r\n//link.rel = \"stylesheet\";\r\n//document.head.appendChild(link);\r\n\r\nvar valores = [\"Confiar en Dustin y llegar a la ciudad\", \"No confiar en Dustin y seguir buscando otros lugares\"];\r\n\r\ndocument.getElementById(\"header\").appendChild((0,_funciones_header_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)(\"Historia\"));\r\ndocument.getElementById(\"texto\").appendChild((0,_funciones_parrafo_js__WEBPACK_IMPORTED_MODULE_1__.crearParrafo)(\"Todo comienza en el año 2025, tres años despues del comienzo de un apocalipsis zombie. Un grupo de amigos que vivian en Texas decidieron estar juntos en el apocalipsis y despues de estos tres años siguen estando juntos, apoyandose en los momentos más dificiles. Durante estos tres años tuvieron que matar a muchos zombies y buscar comida para poder sobrevivir hasta el punto de llegar a Arizona. Un dia en esta nueva ciudad se encontraron con una persona llamada Dustin, Ben que es el lider y el resto del grupo de amigos se asustaron mucho, pues en este tiempo jamas habian visto a otra persona. Ben y Dustin decidieron tener una charla, le realizo algunas preguntas y despues de un largo tiempo, Ben descubrio que Dustin vive en una ciudad cerca del norte de Arizona, en esta ciudad viven muchas personas, tienen muchos recursos y estan muy bien protegidos de los zombies.\", \"Ben hablo con todo el grupo y les dio dos opciones\"));\r\ndocument.getElementById(\"listaUL\").appendChild((0,_funciones_listaUL_js__WEBPACK_IMPORTED_MODULE_2__.agregarLista)(valores));\r\ndocument.getElementById(\"imagen\").appendChild((0,_funciones_imagenes_js__WEBPACK_IMPORTED_MODULE_3__.agregarImagen)(\"https://el-pais.brightspotcdn.com/dims4/default/1054462/2147483647/strip/false/crop/1000x563+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.amazonaws.com%2Fbrightspot%2Fuploads%2F2022%2F02%2F17%2F620eb15bdacef.jpeg\", 650, 350, \"Inicio de la historia\"));\r\ndocument.getElementById(\"progressbar\").appendChild((0,_funciones_progress_js__WEBPACK_IMPORTED_MODULE_4__.crearProgress)(\"Progreso del libro\", 100, 10));\r\ndocument.getElementById(\"footer\").appendChild((0,_funciones_footer_js__WEBPACK_IMPORTED_MODULE_5__.agregarFooter)(\"Regresar\", \"nuevos-lanzamientos.html\"));\r\n\n\n//# sourceURL=webpack://modular/./src/pages/page4/page4.js?");

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