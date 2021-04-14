webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Anton&family=Corben:wght@700&family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n    box-sizing: border-box;\n  }\n\n  .container {\n      padding-right: 0;\n      padding-left: 0;\n  }\n\nhtml,\nbody,\n#root,\n#root > div,\ndiv[data-reactroot] {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n/* Anchors */\n\na,\na:link,\na:visited,\na:hover,\na:active,\na:focus,\n.nav-link,\n.nav-link.active,\n.active,\n.nav-item,\n.footerText {\n    color: #f3f0c5;\n    text-decoration: none;\n}\n\n.nav-link:hover,\n.navbar-brand-jg:hover {\n    color: hotpink;\n}\n\n/* link for project code/vies */\n.g-card-sub-title.alink {\n    background-color: grey;\n    color:#f3f0c5;\n    padding: 5px 7px;\n    border-radius: 12px;\n  \n}\n\n.fab.fa-github-alt,\n.fab.fa-linkedin-in {\n    font-size: 30px;\n    text-align: center;\n}\n\n\n/* Text */\n.navbar-brand-jg,\n.mainTagLine, \n.aboutTagLine,\n.contactTagLine,\nh1,\nh2,\nh3,\nh4 {\n  font-family: \"Corben\", cursive, \"Anton\", sans-serif;\n}\n\n\np,\n.footerText,\n.aboutsubTitle {\n    font-family: \"Roboto\", sans-serif; \n}\n\n.aboutsubTitle {\n  font-size: 1.75rem;\n  font-weight: 800;\n\n}\n\n.mainTagLine,\n.aboutTagLine,\n.contactTagLine {\nfont-size: 4rem;\nline-height: 1;\n}\n\n.contactTagLine {\n    margin-bottom: 50px;\n}\n\n/* Nav & Footer */\n.navbar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 1;\n  }\n\n  .footer {\n    position: sticky;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n    height: 100px;\n    padding-top: 20px;\n    height: auto; \n  /* NOTE: height resolves shriking up on mobile */\n  }\n\n\n/* MAIN */\n.wrapper,\n.container-jgMain {\n    min-height: 90vh;\n    background: rgb(255, 168, 183);\n    color: #202020;\n    \n}\n\n.container-jgMain {\n    padding-top: 14rem;\n    /* background: pink; */\n    background: rgb(255, 168, 183);  \n}\n\n.image-jgMain {\n    width: 350px;\n  }\n\n\n\n  /* About */\n  .wrapperAbout,\n  .container-jgAbout {\n      min-height: 92vh;\n      /* background: #d8f789; */\n      background: rgb(137, 255, 137);\n      color: #202020;\n      line-height: 2;\n    }\n    \n    .container-jgAbout {\n        padding-top: 14rem;\n    }\n\n    .heart {\n      color: hotpink;\n    }\n\n.pheart {\n  text-align: center;\n}\n\n\n/* Projects */\n.wrapperProjects,\n.container-jgProjects {\n    background-color: #f5f5f5; \n    padding-top: 35px;\n    width: 100vw;\n}\n\n.rowProjects {\n    padding-top: 50px;\n}\n\n/* Cards */\n.g-card {\n    margin: 20px;\n  }\n\n  .g-card-image {\n    border-radius: 10;\n    width: 700px;\n    /* height: 300px; */\n    border: 1px solid black;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  .g-card-info {\n    font-size: 24px;\n    margin-top: 10px;\n    min-height: 100px;\n  }\n\n  .g-card-info a {\n    margin-right: 12px;\n  }\n\n  .g-card-title {\n  font-size: 24px;\n  margin: 0px;\n  }\n\n  .g-card-sub-title {\n    font-size: 16px;\n    margin: 0px;\n  }\n\n  /* Contacts */\n  .wrapperContact,\n  .container-jgContact {\n      min-height: 92vh;\n      background: #81e8ff;\n      /* color: #f3f0c5; */\n\n  }\n  \n  .container-jgContact {\n      padding-top: 14rem;\n      /* background: #91ca00; */\n      background: #81e8ff;\n      color: #202020;\n      line-height: 2;\n  }\n\n .contactme {\n    font-size: 5rem;\n    text-align: center;\n  }\n\n  .form {\n      width: 600px;\n      margin-left: auto;\n      margin-right: auto;\n  }\n\n  .btnContact {\n      padding-top: 5px 15px;\n  }\n\n  .success-msg {\n      color: #571773;\n      padding: 10px 15px;\n  }\n\n  .err-msg {\n      color: #ee6352;\n      padding: 10px 15px;\n  }\n\n\n/* Media Queries */\n\n/* Mobile: main */\n@media (max-width: 600px) {\n\n    .container-jgMain {\n        padding-top: 6rem;\n        padding-bottom: 6rem;\n    }\n    .nav-container {\n        margin-bottom: 100px;\n    }\n\n    /* Nav on Toggle */\n    .navbar-nav.nav-link {\n    background-color: #fff;\n    }\n\n    .navbar-brand-jg {\n      font-size: 0.75rem;\n    }\n\n    .mainTagLine,\n    .aboutTagLine,\n    .contactTagLine {\n        font-size: 2rem;\n      }\n\n      .h3Main {\n          font-size: 1.5rem;\n      }\n\n      .h4Main {\n          font-size: 1.15rem;\n      }\n      .stuff-jg,\n      .imageMain-jg {\n        padding: 20px 15px;\n        text-align: center;\n      }\n\n      .image-jgMain {\n          width: 250px;\n          display: block;\n      }\n\n      .g-card-image {\n        border-radius: 10;\n        width: 400px;\n        /* height: 300px; */\n        border: 2px solid black;\n      }\n\n}\n      @media screen and (max-width: 992px) {\n    .image-jgMain {\n    padding-bottom: 2rem;\n    }\n}\n      @media screen and (max-width: 760px) {\n    .container-jgMain {\n    padding-bottom: 2rem;\n    }\n\n    .g-card-image {\n        border-radius: 10;\n        width: 400px;\n        /* height: 300px; */\n        border: 2px solid black;\n      }\n\n\n\n\n}", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Anton&family=Corben:wght@700&family=Roboto&display=swap');\n\n* {\n    box-sizing: border-box;\n  }\n\n  .container {\n      padding-right: 0;\n      padding-left: 0;\n  }\n\nhtml,\nbody,\n#root,\n#root > div,\ndiv[data-reactroot] {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n/* Anchors */\n\na,\na:link,\na:visited,\na:hover,\na:active,\na:focus,\n.nav-link,\n.nav-link.active,\n.active,\n.nav-item,\n.footerText {\n    color: #f3f0c5;\n    text-decoration: none;\n}\n\n.nav-link:hover,\n.navbar-brand-jg:hover {\n    color: hotpink;\n}\n\n/* link for project code/vies */\n.g-card-sub-title.alink {\n    background-color: grey;\n    color:#f3f0c5;\n    padding: 5px 7px;\n    border-radius: 12px;\n  \n}\n\n.fab.fa-github-alt,\n.fab.fa-linkedin-in {\n    font-size: 30px;\n    text-align: center;\n}\n\n\n/* Text */\n.navbar-brand-jg,\n.mainTagLine, \n.aboutTagLine,\n.contactTagLine,\nh1,\nh2,\nh3,\nh4 {\n  font-family: \"Corben\", cursive, \"Anton\", sans-serif;\n}\n\n\np,\n.footerText,\n.aboutsubTitle {\n    font-family: \"Roboto\", sans-serif; \n}\n\n.aboutsubTitle {\n  font-size: 1.75rem;\n  font-weight: 800;\n\n}\n\n.mainTagLine,\n.aboutTagLine,\n.contactTagLine {\nfont-size: 4rem;\nline-height: 1;\n}\n\n.contactTagLine {\n    margin-bottom: 50px;\n}\n\n/* Nav & Footer */\n.navbar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 1;\n  }\n\n  .footer {\n    position: sticky;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n    height: 100px;\n    padding-top: 20px;\n    height: auto; \n  /* NOTE: height resolves shriking up on mobile */\n  }\n\n\n/* MAIN */\n.wrapper,\n.container-jgMain {\n    min-height: 90vh;\n    background: rgb(255, 168, 183);\n    color: #202020;\n    \n}\n\n.container-jgMain {\n    padding-top: 14rem;\n    /* background: pink; */\n    background: rgb(255, 168, 183);  \n}\n\n.image-jgMain {\n    width: 350px;\n  }\n\n\n\n  /* About */\n  .wrapperAbout,\n  .container-jgAbout {\n      min-height: 92vh;\n      /* background: #d8f789; */\n      background: rgb(137, 255, 137);\n      color: #202020;\n      line-height: 2;\n    }\n    \n    .container-jgAbout {\n        padding-top: 14rem;\n    }\n\n    .heart {\n      color: hotpink;\n    }\n\n.pheart {\n  text-align: center;\n}\n\n\n/* Projects */\n.wrapperProjects,\n.container-jgProjects {\n    background-color: #f5f5f5; \n    padding-top: 35px;\n    width: 100vw;\n}\n\n.rowProjects {\n    padding-top: 50px;\n}\n\n/* Cards */\n.g-card {\n    margin: 20px;\n  }\n\n  .g-card-image {\n    border-radius: 10;\n    width: 700px;\n    /* height: 300px; */\n    border: 1px solid black;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  .g-card-info {\n    font-size: 24px;\n    margin-top: 10px;\n    min-height: 100px;\n  }\n\n  .g-card-info a {\n    margin-right: 12px;\n  }\n\n  .g-card-title {\n  font-size: 24px;\n  margin: 0px;\n  }\n\n  .g-card-sub-title {\n    font-size: 16px;\n    margin: 0px;\n  }\n\n  /* Contacts */\n  .wrapperContact,\n  .container-jgContact {\n      min-height: 92vh;\n      background: #81e8ff;\n      /* color: #f3f0c5; */\n\n  }\n  \n  .container-jgContact {\n      padding-top: 14rem;\n      /* background: #91ca00; */\n      background: #81e8ff;\n      color: #202020;\n      line-height: 2;\n  }\n\n .contactme {\n    font-size: 5rem;\n    text-align: center;\n  }\n\n  .form {\n      width: 600px;\n      margin-left: auto;\n      margin-right: auto;\n  }\n\n  .btnContact {\n      padding-top: 5px 15px;\n  }\n\n  .success-msg {\n      color: #571773;\n      padding: 10px 15px;\n  }\n\n  .err-msg {\n      color: #ee6352;\n      padding: 10px 15px;\n  }\n\n\n/* Media Queries */\n\n/* Mobile: main */\n@media (max-width: 600px) {\n\n    .container-jgMain {\n        padding-top: 6rem;\n        padding-bottom: 6rem;\n    }\n    .nav-container {\n        margin-bottom: 100px;\n    }\n\n    /* Nav on Toggle */\n    .navbar-nav.nav-link {\n    background-color: #fff;\n    }\n\n    .navbar-brand-jg {\n      font-size: 0.75rem;\n    }\n\n    .mainTagLine,\n    .aboutTagLine,\n    .contactTagLine {\n        font-size: 2rem;\n      }\n\n      .h3Main {\n          font-size: 1.5rem;\n      }\n\n      .h4Main {\n          font-size: 1.15rem;\n      }\n      .stuff-jg,\n      .imageMain-jg {\n        padding: 20px 15px;\n        text-align: center;\n      }\n\n      .image-jgMain {\n          width: 250px;\n          display: block;\n      }\n\n      .g-card-image {\n        border-radius: 10;\n        width: 400px;\n        /* height: 300px; */\n        border: 2px solid black;\n      }\n\n}\n      @media screen and (max-width: 992px) {\n    .image-jgMain {\n    padding-bottom: 2rem;\n    }\n}\n      @media screen and (max-width: 760px) {\n    .container-jgMain {\n    padding-bottom: 2rem;\n    }\n\n    .g-card-image {\n        border-radius: 10;\n        width: 400px;\n        /* height: 300px; */\n        border: 2px solid black;\n      }\n\n\n\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=main.54dec4ba464b5e881f7d.hot-update.js.map