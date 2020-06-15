(this["webpackJsonpportfoliov1"] = this["webpackJsonpportfoliov1"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/index.scss":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/scss/index.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap);"]);
// Module
exports.push([module.i, ".Navbar {\n  font-size: 1.6rem; }\n  .Navbar__icon {\n    cursor: pointer;\n    height: 25px;\n    width: 25px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around; }\n    .Navbar__icon::before {\n      content: '';\n      height: 1px;\n      background-color: black; }\n    .Navbar__icon--middle {\n      height: 1px;\n      background-color: black; }\n    .Navbar__icon::after {\n      content: '';\n      height: 1px;\n      background-color: black; }\n    @media (min-width: 669px) {\n      .Navbar__icon {\n        display: none; } }\n  .Navbar__items {\n    display: none; }\n    @media (min-width: 669px) {\n      .Navbar__items {\n        display: grid;\n        grid-auto-flow: column; }\n        .Navbar__items--primary {\n          grid-column-gap: 2rem;\n          column-gap: 2rem; }\n          .Navbar__items--primary .Navbar__item {\n            text-transform: uppercase;\n            font-weight: 600; }\n        .Navbar__items--secondary {\n          grid-column-gap: 5rem;\n          column-gap: 5rem; }\n        .Navbar__items--socials {\n          grid-column-gap: 2rem;\n          column-gap: 2rem; } }\n  .Navbar__item {\n    cursor: pointer; }\n    .Navbar__item--active {\n      color: #b3b3b3; }\n    .Navbar__item:hover {\n      color: #b3b3b3; }\n  .Navbar--primary .Navbar__item {\n    text-transform: uppercase;\n    font-weight: 600; }\n\n.Home {\n  height: 100vh;\n  max-height: 1050px;\n  width: 100vw;\n  position: relative;\n  display: grid; }\n  @media only screen and (min-width: 664px) {\n    .Home {\n      grid-template-columns: 2fr 3fr; } }\n  .Home__media {\n    display: none;\n    background-color: lightblue; }\n    @media only screen and (min-width: 664px) {\n      .Home__media {\n        display: block; } }\n    .Home__media video {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      filter: saturate(40%) brightness(1.15); }\n  .Home__main {\n    position: relative; }\n  .Home__navbar {\n    position: absolute;\n    top: 30px;\n    right: 30px; }\n  .Home__socials {\n    position: absolute;\n    bottom: 30px;\n    right: 30px; }\n  .Home__header {\n    top: 15%;\n    left: 15%;\n    font-size: 5rem;\n    font-weight: 700;\n    margin-bottom: 5rem; }\n    @media only screen and (min-width: 664px) {\n      .Home__header {\n        font-size: 7.5rem;\n        top: 150px;\n        left: -90px;\n        width: 55vw;\n        margin-left: -17.5vw; } }\n  .Home__content {\n    height: 100%;\n    width: 100%;\n    padding: 6rem 4rem;\n    display: flex;\n    flex-direction: column; }\n    @media only screen and (min-width: 664px) {\n      .Home__content {\n        padding: 10vw; } }\n  .Home__arrows {\n    margin: auto 0;\n    align-self: flex-end;\n    width: 30px;\n    display: flex;\n    flex-direction: column; }\n    .Home__arrows div {\n      border-bottom: 1px solid black; }\n  .Home__text {\n    margin-top: auto;\n    max-width: 334px; }\n    .Home__text p {\n      line-height: 1.6; }\n\n.Projects__header {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 5rem; }\n  @media only screen and (min-width: 664px) {\n    .Projects__header {\n      flex-direction: row;\n      align-items: center;\n      justify-content: space-between; } }\n\n@media only screen and (min-width: 700px) {\n  .Projects__content {\n    display: grid;\n    grid-row-gap: 8rem;\n    row-gap: 8rem; } }\n\n.Projects__row {\n  position: relative;\n  height: 39rem; }\n  .Projects__row:not(:last-child) {\n    margin-bottom: 2rem; }\n  @media only screen and (min-width: 700px) {\n    .Projects__row {\n      display: grid;\n      height: 40rem;\n      grid-template-columns: repeat(12, 1fr);\n      grid-template-rows: repeat(12, 1fr);\n      grid-column-gap: 2rem;\n      column-gap: 2rem; }\n      .Projects__row:not(:last-child) {\n        margin-bottom: 0rem; } }\n  .Projects__row__image {\n    display: block;\n    height: 100%;\n    cursor: pointer;\n    position: relative;\n    grid-column: 1/-1;\n    grid-row: 4/-1; }\n    @media only screen and (min-width: 700px) {\n      .Projects__row__image {\n        grid-column: 5/-1;\n        grid-row: 1/-1; } }\n  .Projects__row__links {\n    display: flex;\n    width: 5rem;\n    justify-content: space-between; }\n  .Projects__row__description {\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    padding: 3rem;\n    background-color: rgba(0, 0, 0, 0.75);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n    @media only screen and (min-width: 700px) {\n      .Projects__row__description {\n        z-index: 0;\n        grid-column: 1/4;\n        grid-row: 6/-1;\n        background-color: transparent;\n        padding: 0; } }\n    .Projects__row__description__keywords {\n      font-weight: 600;\n      color: white; }\n      @media only screen and (min-width: 700px) {\n        .Projects__row__description__keywords {\n          color: black; } }\n    .Projects__row__description__text {\n      color: white; }\n      @media only screen and (min-width: 700px) {\n        .Projects__row__description__text {\n          color: #404040; } }\n    .Projects__row__description__iconLink {\n      color: white; }\n      @media only screen and (min-width: 700px) {\n        .Projects__row__description__iconLink {\n          color: black; } }\n  .Projects__row--reversed .Projects__row__image {\n    grid-column: 1/-1;\n    grid-row: 4/-1;\n    display: block;\n    height: 100%; }\n    @media only screen and (min-width: 700px) {\n      .Projects__row--reversed .Projects__row__image {\n        grid-column: 1/9;\n        grid-row: 1/-1; } }\n  .Projects__row--reversed .Projects__row__description {\n    grid-column: 1/-1;\n    grid-row: 1/3;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n    @media only screen and (min-width: 700px) {\n      .Projects__row--reversed .Projects__row__description {\n        grid-column: 10/-1;\n        grid-row: 4/11;\n        text-align: right; } }\n    @media only screen and (min-width: 1000px) {\n      .Projects__row--reversed .Projects__row__description {\n        grid-row: 6/-1; } }\n  .Projects__row--reversed .Projects__row__links {\n    align-self: flex-end; }\n  .Projects__row--stacked {\n    height: 75rem;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(12, 1fr); }\n\n.Projects__projectName {\n  font-size: 2rem;\n  font-weight: 500; }\n  @media only screen and (min-width: 664px) {\n    .Projects__projectName {\n      font-size: inherit;\n      font-weight: normal; } }\n\n.Projects__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  filter: saturate(90%);\n  transition: filter .2s ease-in; }\n  @media (min-width: 700px) {\n    .Projects__img {\n      object-fit: contain; } }\n  @media (min-width: 1000px) {\n    .Projects__img {\n      object-fit: cover; } }\n  .Projects__img--narrow {\n    object-position: top; }\n  .Projects__img:hover {\n    filter: saturate(100%); }\n\n.Modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000000;\n  height: 100vh;\n  width: 100vw;\n  background-color: white; }\n  .Modal__main {\n    height: 75%; }\n  .Modal__content {\n    max-width: 1100px;\n    height: 100%;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column; }\n    @media (min-width: 1147px) {\n      .Modal__content {\n        flex-direction: row; } }\n  .Modal__info {\n    flex: 1.5 1;\n    display: flex;\n    align-items: center;\n    width: 90%;\n    margin-top: 2rem;\n    margin-left: auto;\n    margin-right: auto; }\n    @media (min-width: 1147px) {\n      .Modal__info {\n        width: auto;\n        margin-top: 0;\n        margin-left: auto;\n        margin-right: auto; } }\n  .Modal__infoBox {\n    width: 60%; }\n  .Modal__keywords {\n    margin-bottom: 2rem;\n    display: flex;\n    flex-wrap: wrap; }\n  .Modal__text {\n    line-height: 1.6;\n    font-weight: bold;\n    color: grey; }\n  .Modal__image {\n    flex: 3 1;\n    border-left: 1.5px solid rgba(148, 148, 148, 0.178);\n    border-right: 1.5px solid rgba(148, 148, 148, 0.178);\n    position: relative; }\n  .Modal__close {\n    position: absolute;\n    right: 25px;\n    top: 25px;\n    cursor: pointer; }\n  .Modal__imageContainer {\n    background-color: lightblue;\n    margin-top: 5rem;\n    margin-left: auto;\n    width: 90%;\n    margin-right: auto;\n    height: 35rem; }\n    .Modal__imageContainer img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover; }\n    @media (min-width: 768px) {\n      .Modal__imageContainer {\n        margin-top: 5rem;\n        height: 40rem; } }\n    @media (min-width: 1147px) {\n      .Modal__imageContainer {\n        margin-top: 20rem;\n        height: 50rem; } }\n  .Modal__footer {\n    background-color: black;\n    height: 25%;\n    display: flex;\n    align-items: center; }\n  .Modal__footerContent {\n    border-left: 1.5px solid white;\n    padding-left: 1.5rem;\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: white;\n    max-width: 1100px;\n    flex: 1 1;\n    margin: 0 auto; }\n\n.Technologies__header {\n  font-size: 5rem;\n  font-weight: 700; }\n\n.Technologies__main {\n  margin-top: 7rem;\n  margin-bottom: 9rem; }\n\n.Technologies__text {\n  font-size: 1.8rem;\n  font-weight: 300;\n  width: 45%;\n  margin-right: 9rem;\n  margin-left: auto; }\n\n.Technologies__media {\n  display: flex;\n  flex-wrap: wrap; }\n  @media (min-width: 669px) {\n    .Technologies__media {\n      justify-content: space-between; } }\n\n.Technologies__logo {\n  height: 6.5rem;\n  margin-right: 1rem;\n  margin-bottom: 1.5rem;\n  filter: grayscale(100%); }\n  .Technologies__logo:last-child {\n    margin-right: 0;\n    margin-bottom: 0; }\n\n.Contact__content {\n  display: flex;\n  flex-direction: column; }\n  @media (min-width: 600px) {\n    .Contact__content {\n      flex-direction: row; } }\n\n.Contact__details {\n  flex: 1 1;\n  padding-right: 4rem;\n  margin-bottom: 3rem; }\n  @media (min-width: 600px) {\n    .Contact__details {\n      margin-bottom: 0; } }\n\n.Contact__detail {\n  display: grid;\n  grid-template-columns: min-content 1fr;\n  grid-column-gap: 1rem;\n  column-gap: 1rem;\n  margin-bottom: 1rem; }\n  .Contact__detail p {\n    font-size: 1.2rem; }\n\n.Contact__form {\n  flex: 1.5 1; }\n\n.ContactForm__section {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 3rem; }\n  .ContactForm__section > div:not(:last-child) {\n    margin-bottom: 2rem; }\n  @media (min-width: 500px) {\n    .ContactForm__section {\n      flex-direction: row; }\n      .ContactForm__section > div:not(:last-child) {\n        margin-right: 4rem;\n        margin-bottom: 0; } }\n\n.ContactForm__group {\n  flex: 1 1;\n  display: flex;\n  flex-direction: column-reverse; }\n\n.ContactForm__button > * {\n  width: 100%; }\n  @media (min-width: 500px) {\n    .ContactForm__button > * {\n      width: auto;\n      margin-left: auto; } }\n\n.Button {\n  background-color: white;\n  color: black;\n  padding: 1rem 4rem;\n  border: 2px solid black;\n  font-weight: 700; }\n  .Button--secondary {\n    color: #b88b61;\n    border: .6px solid #b88b61;\n    font-size: 1.5rem;\n    padding: 2rem 3rem;\n    font-weight: 300;\n    letter-spacing: 15px;\n    text-transform: uppercase; }\n\n.About {\n  max-width: 700px;\n  border-top: 1px solid #e7e5e5;\n  border-bottom: 1px solid #e7e5e5; }\n  .About__content {\n    display: flex;\n    flex-direction: column; }\n    @media (min-width: 620px) {\n      .About__content {\n        flex-direction: row;\n        justify-content: space-between; } }\n  .About__text {\n    width: 80%;\n    margin-bottom: 3rem; }\n    @media (min-width: 620px) {\n      .About__text {\n        width: 40%;\n        margin-bottom: 0; } }\n  .About__list {\n    margin-top: 2rem;\n    display: grid;\n    list-style: none;\n    grid-template-columns: repeat(2, minmax(140px, 200px));\n    grid-row-gap: .5rem;\n    row-gap: .5rem; }\n  .About__image {\n    height: 30rem; }\n  @media (min-width: 620px) {\n    .About {\n      border-top: none; } }\n\n.SideNav {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  right: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  z-index: 2;\n  transform: translateX(100%);\n  transition: transform 0.3s ease-out; }\n  .SideNav--open {\n    transform: translateX(0); }\n  .SideNav__fill {\n    width: 30%; }\n  .SideNav__bar {\n    background-color: white;\n    width: 80%;\n    padding: 9vw;\n    display: flex;\n    justify-content: space-between;\n    box-shadow: -4px 0px 14px -6px rgba(0, 0, 0, 0.44); }\n  .SideNav__icon {\n    cursor: pointer;\n    align-self: flex-start;\n    font-size: 2.5rem; }\n  .SideNav__navigation {\n    text-align: right; }\n  .SideNav__navItem {\n    cursor: pointer;\n    font-size: 2.2rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    margin-bottom: 3rem; }\n\n.Footer {\n  padding: 5rem 0;\n  display: flex;\n  justify-content: center;\n  background-color: black;\n  color: white; }\n\n/* General Reset  */\n* {\n  margin: 0;\n  padding: 0; }\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%; }\n\nbody {\n  font-family: Helvetica, sans-serif; }\n\n#root {\n  position: relative; }\n\nbutton {\n  font-family: inherit;\n  border-style: none;\n  cursor: pointer;\n  display: block; }\n  button:focus {\n    outline: none; }\n\nul {\n  list-style: none; }\n\na[type=\"icon\"] {\n  color: black; }\n  a[type=\"icon\"]:hover {\n    color: #b3b3b3; }\n\nlabel {\n  color: #b3b3b3;\n  display: inline-block;\n  transition: color .3s ease-out;\n  font-weight: 300; }\n\ninput, textarea {\n  display: block;\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #b3b3b3;\n  padding: 1rem 0;\n  font-family: inherit;\n  transition: border-bottom .3s ease-out;\n  resize: none; }\n  input:focus, textarea:focus {\n    outline: none;\n    border-bottom: 1px solid black; }\n    input:focus + label, textarea:focus + label {\n      color: black; }\n\np {\n  font-size: 1.6rem;\n  color: #404040;\n  font-weight: 300;\n  line-height: 1.6; }\n\n.Lead {\n  text-transform: uppercase;\n  letter-spacing: 15px;\n  font-size: 1.6rem;\n  color: #b88b61;\n  margin-bottom: 50px;\n  display: inline-block; }\n  .Lead--secondary {\n    letter-spacing: 3px; }\n\n.Header {\n  font-size: 4rem;\n  font-weight: 600;\n  margin-bottom: 5rem;\n  display: inline-block; }\n  @media (min-width: 669px) {\n    .Header {\n      font-size: 5rem; } }\n\n.SectionNarrow {\n  padding: 5rem 3rem;\n  max-width: 1000px;\n  margin: 0 auto;\n  font-size: 1.3rem; }\n  @media (min-width: 669px) {\n    .SectionNarrow {\n      padding: 8rem 3rem; } }\n\n.Keyword {\n  padding: 0.5rem 2rem;\n  font-weight: bold;\n  background-color: rgba(148, 148, 148, 0.178);\n  color: grey;\n  margin-right: .8rem;\n  margin-top: .8rem; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/assets/aboutPhoto.jpeg":
/*!************************************!*\
  !*** ./src/assets/aboutPhoto.jpeg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/aboutPhoto.8e43f277.jpeg";

/***/ }),

/***/ "./src/assets/budgety.jpg":
/*!********************************!*\
  !*** ./src/assets/budgety.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/budgety.226b48a6.jpg";

/***/ }),

/***/ "./src/assets/cenexscreenshot.png":
/*!****************************************!*\
  !*** ./src/assets/cenexscreenshot.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/cenexscreenshot.c07fca2d.png";

/***/ }),

/***/ "./src/assets/ecom-large.png":
/*!***********************************!*\
  !*** ./src/assets/ecom-large.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ecom-large.cb64d345.png";

/***/ }),

/***/ "./src/assets/ecommerce-med.png":
/*!**************************************!*\
  !*** ./src/assets/ecommerce-med.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ecommerce-med.db57c10e.png";

/***/ }),

/***/ "./src/assets/ecommerce.jpg":
/*!**********************************!*\
  !*** ./src/assets/ecommerce.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ecommerce.fd4c2496.jpg";

/***/ }),

/***/ "./src/assets/ig-large.png":
/*!*********************************!*\
  !*** ./src/assets/ig-large.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ig-large.b2931abf.png";

/***/ }),

/***/ "./src/assets/ig-med.png":
/*!*******************************!*\
  !*** ./src/assets/ig-med.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ig-med.33eb14b5.png";

/***/ }),

/***/ "./src/assets/ig-small.png":
/*!*********************************!*\
  !*** ./src/assets/ig-small.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ig-small.08087cb3.png";

/***/ }),

/***/ "./src/assets/nexter.jpg":
/*!*******************************!*\
  !*** ./src/assets/nexter.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/nexter.5fdfaf95.jpg";

/***/ }),

/***/ "./src/assets/ocean1.mp4":
/*!*******************************!*\
  !*** ./src/assets/ocean1.mp4 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ocean1.5cda38b5.mp4";

/***/ }),

/***/ "./src/assets/trillo.jpg":
/*!*******************************!*\
  !*** ./src/assets/trillo.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/trillo.5b62f392.jpg";

/***/ }),

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Header */ "./src/ui/Header.js");
/* harmony import */ var _assets_aboutPhoto_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/aboutPhoto.jpeg */ "./src/assets/aboutPhoto.jpeg");
/* harmony import */ var _assets_aboutPhoto_jpeg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_aboutPhoto_jpeg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
var _jsxFileName = "/Users/anastasia/Documents/Projects/portfoliov1/src/components/About.js";




const skills = ['JavaScript', 'SCSS', 'React', 'Redux', 'Node.js'];

const About = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "SectionNarrow About",
    style: {
      maxWidth: '750px'
    },
    "data-aos": "fade-down",
    "data-aos-easing": "linear",
    "data-aos-duration": "1500",
    "data-aos-once": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "About",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "About__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "About__text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "I enjoy creating responsive sites and web applications, using the lastest tools. I believe in having a solid foundation and using tools to futher aid in development."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      marginTop: '2rem'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "Quos consequuntur maxime quia fuga, eaque est ex, perferendis quam a voluptatem, aliquid."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "About__list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, skills.map(skill => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__["BsChevronRight"], {
    style: {
      marginRight: '4px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }), skill))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "About__image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_aboutPhoto_jpeg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Anastasia",
    style: {
      height: '100%',
      filter: 'saturation(50%)'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ "./src/components/Home.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects */ "./src/components/Projects.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contact */ "./src/components/Contact.js");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./About */ "./src/components/About.js");
/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SideNav */ "./src/components/SideNav.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/anastasia/Documents/Projects/portfoliov1/src/components/App.js";









class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      sideNavOpen: false
    };

    this.toggleSideNav = () => {
      this.setState({
        sideNavOpen: !this.state.sideNavOpen
      });
    };

    this.scrollToTop = () => {
      react_scroll__WEBPACK_IMPORTED_MODULE_7__["animateScroll"].scrollToTop();
    };
  }

  render() {
    const {
      sideNavOpen
    } = this.state;

    if (sideNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SideNav__WEBPACK_IMPORTED_MODULE_5__["default"], {
      open: sideNavOpen,
      toggleSideNav: this.toggleSideNav,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
      toggleSideNav: this.toggleSideNav,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Element"], {
      name: "about",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_About__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Element"], {
      name: "projects",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects__WEBPACK_IMPORTED_MODULE_2__["default"], {
      viewProject: this.handleViewProject,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Element"], {
      name: "contact",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contact__WEBPACK_IMPORTED_MODULE_3__["default"], {
      scrollToTop: this.scrollToTop,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Header */ "./src/ui/Header.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form */ "./src/components/Form.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _jsxFileName = "/Users/anastasia/Documents/Projects/portfoliov1/src/components/Contact.js";





const Contact = ({
  scrollToTop
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "SectionNarrow Contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Contact__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Contact__details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Contact__detail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaGithub"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "aslyadneva")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Contact__detail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaEnvelope"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "slyadneva.anastasia@gmail.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Contact__detail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaMapPin"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Dallas, TX"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Contact__form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: scrollToTop,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "Scroll to top"));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/anastasia/Documents/Projects/portfoliov1/src/components/Footer.js";


const Footer = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "Footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      fontWeight: '300'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Built by Anastasia Slyadneva. ", new Date().getFullYear()));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Button */ "./src/ui/Button.js");
var _jsxFileName = "/Users/anastasia/Documents/Projects/portfoliov1/src/components/Form.js";



class Form extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.handleSubmit = e => {
      e.preventDefault();
      console.log(this.state);
      this.setState({
        name: '',
        email: '',
        message: ''
      });
    };

    this.handleChange = ({
      target: {
        name,
        value
      }
    }) => {
      this.setState({
        [name]: value
      });
    };
  }

  render() {
    const {
      name,
      email,
      message
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      autoComplete: "off",
      onSubmit: this.handleSubmit,
      className: "ContactForm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ContactForm__section",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ContactForm__group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      value: name,
      name: "name",
      id: "name",
      type: "text",
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, "Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ContactForm__group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      value: email,
      name: "email",
      id: "email",
      type: "email",
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "email",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }, "Email"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ContactForm__section",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ContactForm__group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
      value: message,
      name: "message",
      id: "message",
      onChange: this.handleChange,
      rows: "5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "message",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, "Your message"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ContactForm__button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Send Message",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_ocean1_mp4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/ocean1.mp4 */ "./src/assets/ocean1.mp4");
/* harmony import */ var _assets_ocean1_mp4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_ocean1_mp4__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_Lead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Lead */ "./src/ui/Lead.js");
/* harmony import */ var _ui_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/Navbar */ "./src/ui/Navbar.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
var _jsxFileName = "/Users/anastasia/Documents/Projects/portfoliov1/src/components/Home.js";






const navLinks = ['Projects', 'Contact', 'About'];
const navSocials = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaGithub"], {
  className: "github",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 21
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaLinkedin"], {
  className: "linkedin",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 53
  }
})];

const Home = ({
  toggleSideNav
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "home",
    className: "Home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", {
    className: "Home__media",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
    autoPlay: true,
    loop: true,
    muted: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    src: _assets_ocean1_mp4__WEBPACK_IMPORTED_MODULE_1___default.a,
    type: "video/mp4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "Home__main",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Home__navbar",
    "data-aos": "fade-left",
    "data-aos-duration": "1000",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "primary",
    items: navLinks,
    toggleSideNav: toggleSideNav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Home__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "Home__header",
    "data-aos": "fade-right",
    "data-aos-duration": "1000",
    "data-aos-once": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Anastasia ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 23
    }
  }), " front-end developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Home__arrows",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineArrowDown"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Home__text",
    "data-aos": "fade-up",
    "data-aos-duration": "1000",
    "data-aos-once": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Lead__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Hello",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "Hi there! I'm Anastasia, a front-end developer based in Dallas, TX. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 83
    }
  }), "I love to learn new technologies and bring beautiful designs to life on the web."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Home__socials",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "socials",
    items: navSocials,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/ProjectRow.js":
/*!**************************************!*\
  !*** ./src/components/ProjectRow.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _jsxFileName = "/Users/anastasia/Documents/Projects/portfoliov1/src/components/ProjectRow.js";



const ProjectRow = ({
  name,
  images: {
    small,
    medium,
    large
  },
  keywords,
  reversed,
  description,
  liveURL,
  gitURL
}) => {
  if (reversed) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Projects__row Projects__row--reversed",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "Projects__row__image",
      href: liveURL,
      target: "_blank",
      rel: "noopener_noreferrer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("picture", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
      media: "(min-width:1000px)",
      srcSet: large,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
      media: "(min-width:700px)",
      srcSet: medium,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: small,
      className: "Projects__img",
      alt: name,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Projects__row__description",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: liveURL,
      target: "_blank",
      rel: "noopener_noreferrer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Projects__projectName Lead Lead--secondary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Projects__row__description__keywords",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }, keywords.map(keyword => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 38
      }
    }, `${keyword} / `))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "Projects__row__description__text",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 18
      }
    }, description, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Projects__row__links",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "Projects__row__description__iconLink",
      href: gitURL,
      target: "_blank",
      rel: "noopener_noreferrer",
      style: {
        fontSize: "1.6rem"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaGithub"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "Projects__row__description__iconLink",
      href: liveURL,
      rel: "noopener_noreferrer",
      target: "_blank",
      style: {
        fontSize: "1.6rem"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaExternalLinkAlt"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 15
      }
    })))));
  } else if (!reversed) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Projects__row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 12
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Projects__row__description",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: liveURL,
      target: "_blank",
      rel: "noopener_noreferrer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Projects__projectName Lead Lead--secondary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Projects__row__description__keywords",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }
    }, keywords.map(keyword => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 42
      }
    }, `${keyword} / `))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", {
      style: {
        color: '#404040'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "Projects__row__description__text",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }, description, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Projects__row__links",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "Projects__row__description__iconLink",
      href: gitURL,
      target: "_blank",
      rel: "noopener_noreferrer",
      style: {
        fontSize: "1.6rem"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaGithub"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 19
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "Projects__row__description__iconLink",
      href: liveURL,
      target: "_blank",
      rel: "noopener_noreferrer",
      style: {
        fontSize: "1.6rem"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaExternalLinkAlt"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 19
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "Projects__row__image",
      href: liveURL,
      target: "_blank",
      rel: "noopener_noreferrer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("picture", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
      media: "(min-width:1000px)",
      srcSet: large,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
      media: "(min-width:700px)",
      srcSet: medium,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: small,
      className: "Projects__img",
      alt: name,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }))));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectRow);

/***/ }),

/***/ "./src/components/Projects.js":
/*!************************************!*\
  !*** ./src/components/Projects.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Header */ "./src/ui/Header.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./src/data.js");
/* harmony import */ var _ProjectRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectRow */ "./src/components/ProjectRow.js");
var _jsxFileName = "/Users/anastasia/Documents/Projects/portfoliov1/src/components/Projects.js";




const navItems = ["React", "Javascript", "HTML/CSS"];

class Projects extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      active: 0
    };

    this.handleNavClick = index => {
      this.setState({
        active: index
      });
    };

    this.renderNavItems = () => {
      return navItems.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: index === this.state.active ? 'Navbar__item--active' : 'Navbar__item',
        key: item,
        onClick: () => this.handleNavClick(index),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 7
        }
      }, item));
    };

    this.renderProjects = () => {
      if (this.state.active === 0) {
        return _data__WEBPACK_IMPORTED_MODULE_2__["projectData"].react.map((project, idx) => {
          if (idx % 2 > 0) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
              key: project.name,
              name: project.name,
              images: project.images,
              description: project.description,
              keywords: project.keywords,
              reversed: false,
              liveURL: project.liveURL,
              gitURL: project.gitURL,
              viewProject: this.props.viewProject,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 18
              }
            });
          } else if (idx % 2 === 0) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
              key: project.name,
              name: project.name,
              images: project.images,
              description: project.description,
              keywords: project.keywords,
              reversed: true,
              liveURL: project.liveURL,
              gitURL: project.gitURL,
              viewProject: this.props.viewProject,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 18
              }
            });
          }
        });
      } else if (this.state.active === 1) {
        return _data__WEBPACK_IMPORTED_MODULE_2__["projectData"].javascript.map((project, idx) => {
          if (idx % 2 > 0) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
              key: project.name,
              name: project.name,
              images: project.images,
              keywords: project.keywords,
              reversed: false,
              viewProject: this.props.viewProject,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 18
              }
            });
          } else if (idx % 2 === 0) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
              key: project.name,
              name: project.name,
              images: project.images,
              keywords: project.keywords,
              reversed: true,
              viewProject: this.props.viewProject,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 18
              }
            });
          }
        });
      } else if (this.state.active === 2) {
        return _data__WEBPACK_IMPORTED_MODULE_2__["projectData"]['html/css'].map((project, idx) => {
          if (idx % 2 > 0) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
              key: project.name,
              name: project.name,
              images: project.images,
              keywords: project.keywords,
              reversed: false,
              viewProject: this.props.viewProject,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 18
              }
            });
          } else if (idx % 2 === 0) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
              key: project.name,
              name: project.name,
              images: project.images,
              keywords: project.keywords,
              reversed: true,
              viewProject: this.props.viewProject,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 18
              }
            });
          }
        });
      }
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "SectionNarrow Projects",
      id: "#projects",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Projects",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Projects__content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }
    }, this.renderProjects()));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/components/SideNav.js":
/*!***********************************!*\
  !*** ./src/components/SideNav.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/anastasia/Documents/Projects/portfoliov1/src/components/SideNav.js";




class SideNav extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    window.addEventListener('resize', ({
      target: {
        screen
      }
    }) => {
      if (screen.width > 669 && this.props.open) {
        this.props.toggleSideNav();
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
  }

  render() {
    const {
      open,
      toggleSideNav
    } = this.props; // if (this.state.open) {
    //   document.body.style.overflow = 'hidden'
    // } else {
    //   document.body.style.overflow = 'auto'
    // }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: `SideNav SideNav--${open && 'open'}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "SideNav__fill",
      onClick: toggleSideNav,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "SideNav__bar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "SideNav__icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdClose"], {
      onClick: toggleSideNav,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: "SideNav__navigation",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "SideNav__navItem",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      onClick: toggleSideNav,
      to: "projects",
      smooth: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, "Projects")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "SideNav__navItem",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      onClick: toggleSideNav,
      to: "contact",
      smooth: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "SideNav__navItem",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      onClick: toggleSideNav,
      to: "about",
      smooth: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, "About"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SideNav);

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: projectData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectData", function() { return projectData; });
/* harmony import */ var _assets_ecommerce_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/ecommerce.jpg */ "./src/assets/ecommerce.jpg");
/* harmony import */ var _assets_ecommerce_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_ecommerce_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_ecommerce_med_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/ecommerce-med.png */ "./src/assets/ecommerce-med.png");
/* harmony import */ var _assets_ecommerce_med_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_ecommerce_med_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_ecom_large_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/ecom-large.png */ "./src/assets/ecom-large.png");
/* harmony import */ var _assets_ecom_large_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_ecom_large_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_ig_small_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/ig-small.png */ "./src/assets/ig-small.png");
/* harmony import */ var _assets_ig_small_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_ig_small_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_ig_med_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/ig-med.png */ "./src/assets/ig-med.png");
/* harmony import */ var _assets_ig_med_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_ig_med_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_ig_large_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/ig-large.png */ "./src/assets/ig-large.png");
/* harmony import */ var _assets_ig_large_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_ig_large_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_budgety_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/budgety.jpg */ "./src/assets/budgety.jpg");
/* harmony import */ var _assets_budgety_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_budgety_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_trillo_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/trillo.jpg */ "./src/assets/trillo.jpg");
/* harmony import */ var _assets_trillo_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_trillo_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_nexter_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/nexter.jpg */ "./src/assets/nexter.jpg");
/* harmony import */ var _assets_nexter_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_nexter_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_cenexscreenshot_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/cenexscreenshot.png */ "./src/assets/cenexscreenshot.png");
/* harmony import */ var _assets_cenexscreenshot_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_cenexscreenshot_png__WEBPACK_IMPORTED_MODULE_9__);










const projectData = {
  react: [{
    name: 'E-Commerce',
    liveURL: 'https://ecom-site.netlify.app',
    gitURL: 'https://github.com/aslyadneva/ecommerce-store',
    images: {
      small: _assets_ecommerce_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
      medium: _assets_ecommerce_med_png__WEBPACK_IMPORTED_MODULE_1___default.a,
      large: _assets_ecom_large_png__WEBPACK_IMPORTED_MODULE_2___default.a
    },
    description: 'An e-commerce site with checkout functionality. Browsee through products, add them to cart, and search for your favorites.',
    keywords: ['React.js', 'Redux', 'SCSS', 'Cloud Firestore']
  }, {
    name: 'IG Dashboard',
    liveURL: 'https://ig-dashboard.netlify.app',
    gitURL: 'https://github.com/aslyadneva/Instagram-Analytics-Dashboard',
    images: {
      small: _assets_ig_small_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      medium: _assets_ig_med_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      large: _assets_ig_large_png__WEBPACK_IMPORTED_MODULE_5___default.a
    },
    description: 'Search for any instagram account, and track their stats.',
    keywords: ['React.js', 'Redux', 'SCSS', 'Apex Charts']
  }, {
    name: 'IT Consulting',
    liveURL: 'https://cenex-consulting-template.netlify.app/',
    gitURL: 'https://github.com/aslyadneva/CenexConsulting',
    images: {
      small: _assets_cenexscreenshot_png__WEBPACK_IMPORTED_MODULE_9___default.a,
      medium: _assets_cenexscreenshot_png__WEBPACK_IMPORTED_MODULE_9___default.a,
      large: _assets_cenexscreenshot_png__WEBPACK_IMPORTED_MODULE_9___default.a
    },
    description: 'An IT consulting business website template.',
    keywords: ['Gatsby.js', 'GraphQL', 'React.js']
  }],
  javascript: [{
    name: 'Budgety',
    images: {
      small: _assets_budgety_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
      medium: _assets_budgety_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
      large: _assets_budgety_jpg__WEBPACK_IMPORTED_MODULE_6___default.a
    },
    keywords: ['Javascript', 'IIFE']
  }],
  "html/css": [{
    name: 'Trillo',
    images: {
      small: _assets_trillo_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
      medium: _assets_trillo_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
      large: _assets_trillo_jpg__WEBPACK_IMPORTED_MODULE_7___default.a
    },
    keywords: ['HTML', 'SCSS', 'Flexbox']
  }, {
    name: 'Nexter',
    images: {
      small: _assets_nexter_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
      medium: _assets_nexter_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
      large: _assets_nexter_jpg__WEBPACK_IMPORTED_MODULE_8___default.a
    },
    keywords: ['HTML', 'SCSS', 'CSS Grid']
  }]
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/anastasia/Documents/Projects/portfoliov1/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 17
  }
}), document.getElementById('root'));

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/index.scss", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/index.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/ui/Button.js":
/*!**************************!*\
  !*** ./src/ui/Button.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/anastasia/Documents/Projects/portfoliov1/src/ui/Button.js";


const Button = ({
  title,
  type
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: `Button Button--${type}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, title);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/ui/Header.js":
/*!**************************!*\
  !*** ./src/ui/Header.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/anastasia/Documents/Projects/portfoliov1/src/ui/Header.js";


const Header = ({
  title
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "Header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, title);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/ui/Lead.js":
/*!************************!*\
  !*** ./src/ui/Lead.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/anastasia/Documents/Projects/portfoliov1/src/ui/Lead.js";


const Lead = ({
  title
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "Lead",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, title);
};

/* harmony default export */ __webpack_exports__["default"] = (Lead);

/***/ }),

/***/ "./src/ui/Navbar.js":
/*!**************************!*\
  !*** ./src/ui/Navbar.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/anastasia/Documents/Projects/portfoliov1/src/ui/Navbar.js";



class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      type,
      items,
      toggleSideNav
    } = this.props;

    if (type === 'primary') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "Navbar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Navbar__icon",
        onClick: toggleSideNav,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Navbar__icon--middle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: `Navbar__items Navbar__items--${type}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }
      }, items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "Navbar__item",
        to: item.toLowerCase(),
        smooth: true,
        key: item,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 15
        }
      }, item))));
    } else if (type === 'socials') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "Navbar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: `Navbar__items Navbar__items--${type}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }
      }, items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: `http://www.${item.props.className.split(' ')[0]}.com/aslyadneva`,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "Navbar__item",
        key: item,
        type: "icon",
        style: {
          fontSize: '2rem'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 15
        }
      }, item))));
    } else if (type === 'secondary') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "Navbar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: `Navbar__items Navbar__items--${type}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }
      }, items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "Navbar__item",
        key: item,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 15
        }
      }, item))));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/anastasia/Documents/Projects/portfoliov1/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/anastasia/Documents/Projects/portfoliov1/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/anastasia/Documents/Projects/portfoliov1/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map