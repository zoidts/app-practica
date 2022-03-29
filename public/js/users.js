"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["users"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/DashBoardComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/DashBoardComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_includes_SideBarComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/includes/SideBarComponent.vue */ "./resources/js/components/back/pages/user/layouts/includes/SideBarComponent.vue");
/* harmony import */ var _layouts_includes_HeaderComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/includes/HeaderComponent.vue */ "./resources/js/components/back/pages/user/layouts/includes/HeaderComponent.vue");
/* harmony import */ var _layouts_includes_SectionStartComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/includes/SectionStartComponent.vue */ "./resources/js/components/back/pages/user/layouts/includes/SectionStartComponent.vue");
/* harmony import */ var _layouts_includes_FooterComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/includes/FooterComponent.vue */ "./resources/js/components/back/pages/user/layouts/includes/FooterComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SideBarComponent: _layouts_includes_SideBarComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    HeaderComponent: _layouts_includes_HeaderComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    SectionStartComponent: _layouts_includes_SectionStartComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    FooterComponent: _layouts_includes_FooterComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    IsActive: Boolean
  },
  data: function data() {
    return {
      user: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/user').then(function (res) {
      _this.user = res.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/FooterComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/FooterComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/HeaderComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/HeaderComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    name: {
      type: String,
      "default": 'Nombre usuario'
    }
  },
  data: function data() {
    return {
      IsActive: false
    };
  },
  mounted: function mounted() {
    (function () {
      /* ========= sidebar toggle ======== */
      var sidebarNavWrapper = document.querySelector(".sidebar-nav-wrapper");
      var mainWrapper = document.querySelector(".main-wrapper");
      var menuToggleButton = document.querySelector("#menu-toggle");
      var menuToggleButtonIcon = document.querySelector("#menu-toggle i");
      var overlay = document.querySelector(".overlay");
      menuToggleButton.addEventListener("click", function () {
        sidebarNavWrapper.classList.toggle("active");
        overlay.classList.add("active");
        mainWrapper.classList.toggle("active");

        if (document.body.clientWidth > 1200) {
          if (menuToggleButtonIcon.classList.contains("lni-chevron-left")) {
            menuToggleButtonIcon.classList.remove("lni-chevron-left");
            menuToggleButtonIcon.classList.add("lni-menu");
          } else {
            menuToggleButtonIcon.classList.remove("lni-menu");
            menuToggleButtonIcon.classList.add("lni-chevron-left");
          }
        } else {
          if (menuToggleButtonIcon.classList.contains("lni-chevron-left")) {
            menuToggleButtonIcon.classList.remove("lni-chevron-left");
            menuToggleButtonIcon.classList.add("lni-menu");
          }
        }
      });
      overlay.addEventListener("click", function () {
        sidebarNavWrapper.classList.remove("active");
        overlay.classList.remove("active");
        mainWrapper.classList.remove("active");
      });
    })();
  },
  methods: {
    logOut: function logOut() {
      var _this = this;

      axios.post('/api/logout').then(function () {
        _this.$router.push({
          name: 'Login'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/SectionStartComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/SectionStartComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/SideBarComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/SideBarComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./resources/js/components/back/pages/user/DashBoardComponent.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/back/pages/user/DashBoardComponent.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DashBoardComponent_vue_vue_type_template_id_49aeb7e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashBoardComponent.vue?vue&type=template&id=49aeb7e5& */ "./resources/js/components/back/pages/user/DashBoardComponent.vue?vue&type=template&id=49aeb7e5&");
/* harmony import */ var _DashBoardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashBoardComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/back/pages/user/DashBoardComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashBoardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashBoardComponent_vue_vue_type_template_id_49aeb7e5___WEBPACK_IMPORTED_MODULE_0__.render,
  _DashBoardComponent_vue_vue_type_template_id_49aeb7e5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/back/pages/user/DashBoardComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/back/pages/user/layouts/includes/FooterComponent.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/back/pages/user/layouts/includes/FooterComponent.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FooterComponent_vue_vue_type_template_id_3e9ef360___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterComponent.vue?vue&type=template&id=3e9ef360& */ "./resources/js/components/back/pages/user/layouts/includes/FooterComponent.vue?vue&type=template&id=3e9ef360&");
/* harmony import */ var _FooterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/back/pages/user/layouts/includes/FooterComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FooterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FooterComponent_vue_vue_type_template_id_3e9ef360___WEBPACK_IMPORTED_MODULE_0__.render,
  _FooterComponent_vue_vue_type_template_id_3e9ef360___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/back/pages/user/layouts/includes/FooterComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/back/pages/user/layouts/includes/HeaderComponent.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/back/pages/user/layouts/includes/HeaderComponent.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderComponent_vue_vue_type_template_id_ac4e40a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderComponent.vue?vue&type=template&id=ac4e40a4& */ "./resources/js/components/back/pages/user/layouts/includes/HeaderComponent.vue?vue&type=template&id=ac4e40a4&");
/* harmony import */ var _HeaderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/back/pages/user/layouts/includes/HeaderComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeaderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeaderComponent_vue_vue_type_template_id_ac4e40a4___WEBPACK_IMPORTED_MODULE_0__.render,
  _HeaderComponent_vue_vue_type_template_id_ac4e40a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/back/pages/user/layouts/includes/HeaderComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/back/pages/user/layouts/includes/SectionStartComponent.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/back/pages/user/layouts/includes/SectionStartComponent.vue ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SectionStartComponent_vue_vue_type_template_id_11ea573e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionStartComponent.vue?vue&type=template&id=11ea573e& */ "./resources/js/components/back/pages/user/layouts/includes/SectionStartComponent.vue?vue&type=template&id=11ea573e&");
/* harmony import */ var _SectionStartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionStartComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/back/pages/user/layouts/includes/SectionStartComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SectionStartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SectionStartComponent_vue_vue_type_template_id_11ea573e___WEBPACK_IMPORTED_MODULE_0__.render,
  _SectionStartComponent_vue_vue_type_template_id_11ea573e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/back/pages/user/layouts/includes/SectionStartComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/back/pages/user/layouts/includes/SideBarComponent.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/back/pages/user/layouts/includes/SideBarComponent.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SideBarComponent_vue_vue_type_template_id_bafbe05a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideBarComponent.vue?vue&type=template&id=bafbe05a& */ "./resources/js/components/back/pages/user/layouts/includes/SideBarComponent.vue?vue&type=template&id=bafbe05a&");
/* harmony import */ var _SideBarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBarComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/back/pages/user/layouts/includes/SideBarComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SideBarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SideBarComponent_vue_vue_type_template_id_bafbe05a___WEBPACK_IMPORTED_MODULE_0__.render,
  _SideBarComponent_vue_vue_type_template_id_bafbe05a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/back/pages/user/layouts/includes/SideBarComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/back/pages/user/DashBoardComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/back/pages/user/DashBoardComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashBoardComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/DashBoardComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/back/pages/user/layouts/includes/FooterComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/back/pages/user/layouts/includes/FooterComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/FooterComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/back/pages/user/layouts/includes/HeaderComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/back/pages/user/layouts/includes/HeaderComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/HeaderComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/back/pages/user/layouts/includes/SectionStartComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/back/pages/user/layouts/includes/SectionStartComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionStartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionStartComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/SectionStartComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionStartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/back/pages/user/layouts/includes/SideBarComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/back/pages/user/layouts/includes/SideBarComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideBarComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/SideBarComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/back/pages/user/DashBoardComponent.vue?vue&type=template&id=49aeb7e5&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/back/pages/user/DashBoardComponent.vue?vue&type=template&id=49aeb7e5& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardComponent_vue_vue_type_template_id_49aeb7e5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardComponent_vue_vue_type_template_id_49aeb7e5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardComponent_vue_vue_type_template_id_49aeb7e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashBoardComponent.vue?vue&type=template&id=49aeb7e5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/DashBoardComponent.vue?vue&type=template&id=49aeb7e5&");


/***/ }),

/***/ "./resources/js/components/back/pages/user/layouts/includes/FooterComponent.vue?vue&type=template&id=3e9ef360&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/back/pages/user/layouts/includes/FooterComponent.vue?vue&type=template&id=3e9ef360& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterComponent_vue_vue_type_template_id_3e9ef360___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterComponent_vue_vue_type_template_id_3e9ef360___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterComponent_vue_vue_type_template_id_3e9ef360___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterComponent.vue?vue&type=template&id=3e9ef360& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/FooterComponent.vue?vue&type=template&id=3e9ef360&");


/***/ }),

/***/ "./resources/js/components/back/pages/user/layouts/includes/HeaderComponent.vue?vue&type=template&id=ac4e40a4&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/back/pages/user/layouts/includes/HeaderComponent.vue?vue&type=template&id=ac4e40a4& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_template_id_ac4e40a4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_template_id_ac4e40a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_template_id_ac4e40a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderComponent.vue?vue&type=template&id=ac4e40a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/HeaderComponent.vue?vue&type=template&id=ac4e40a4&");


/***/ }),

/***/ "./resources/js/components/back/pages/user/layouts/includes/SectionStartComponent.vue?vue&type=template&id=11ea573e&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/back/pages/user/layouts/includes/SectionStartComponent.vue?vue&type=template&id=11ea573e& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionStartComponent_vue_vue_type_template_id_11ea573e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionStartComponent_vue_vue_type_template_id_11ea573e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionStartComponent_vue_vue_type_template_id_11ea573e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionStartComponent.vue?vue&type=template&id=11ea573e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/SectionStartComponent.vue?vue&type=template&id=11ea573e&");


/***/ }),

/***/ "./resources/js/components/back/pages/user/layouts/includes/SideBarComponent.vue?vue&type=template&id=bafbe05a&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/back/pages/user/layouts/includes/SideBarComponent.vue?vue&type=template&id=bafbe05a& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarComponent_vue_vue_type_template_id_bafbe05a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarComponent_vue_vue_type_template_id_bafbe05a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBarComponent_vue_vue_type_template_id_bafbe05a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideBarComponent.vue?vue&type=template&id=bafbe05a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/SideBarComponent.vue?vue&type=template&id=bafbe05a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/DashBoardComponent.vue?vue&type=template&id=49aeb7e5&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/DashBoardComponent.vue?vue&type=template&id=49aeb7e5& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("SideBarComponent"),
      _vm._v(" "),
      _c("div", { staticClass: "overlay" }),
      _vm._v(" "),
      _c(
        "main",
        { staticClass: "main-wrapper" },
        [
          _c("HeaderComponent", { attrs: { name: _vm.user.name } }),
          _vm._v(" "),
          _c("SectionStartComponent"),
          _vm._v(" "),
          _c("h1", [_vm._v("Dashboard")]),
          _vm._v("\n  name:" + _vm._s(_vm.user.name) + " "),
          _c("br"),
          _vm._v("\n  Email: " + _vm._s(_vm.user.email)),
          _c("br"),
          _vm._v(" "),
          _c("router-view"),
          _vm._v(" "),
          _c("FooterComponent"),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/FooterComponent.vue?vue&type=template&id=3e9ef360&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/FooterComponent.vue?vue&type=template&id=3e9ef360& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("footer", { staticClass: "footer" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6 order-last order-md-first" }, [
              _c(
                "div",
                { staticClass: "copyright text-center text-md-start" },
                [
                  _c("p", { staticClass: "text-sm" }, [
                    _vm._v(
                      "\n                Designed and Developed by\n                "
                    ),
                    _c(
                      "a",
                      {
                        attrs: {
                          href: "https://plainadmin.com",
                          rel: "nofollow",
                          target: "_blank",
                        },
                      },
                      [
                        _vm._v(
                          "\n                  PlainAdmin\n                "
                        ),
                      ]
                    ),
                  ]),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c(
                "div",
                {
                  staticClass:
                    "\n                terms\n                d-flex\n                justify-content-center justify-content-md-end\n              ",
                },
                [
                  _c("a", { staticClass: "text-sm", attrs: { href: "#0" } }, [
                    _vm._v("Term & Conditions"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    { staticClass: "text-sm ml-15", attrs: { href: "#0" } },
                    [_vm._v("Privacy & Policy")]
                  ),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/HeaderComponent.vue?vue&type=template&id=ac4e40a4&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/HeaderComponent.vue?vue&type=template&id=ac4e40a4& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("header", { staticClass: "header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-7 col-md-7 col-6" }, [
            _c("div", { staticClass: "header-right" }, [
              _c("div", { staticClass: "profile-box ml-15" }, [
                _c(
                  "button",
                  {
                    staticClass: "dropdown-toggle bg-transparent border-0",
                    attrs: {
                      type: "button",
                      id: "profile",
                      "data-bs-toggle": "dropdown",
                      "aria-expanded": "false",
                    },
                  },
                  [
                    _c("div", { staticClass: "profile-info" }, [
                      _c("div", { staticClass: "info" }, [
                        _c("h6", [_vm._v(_vm._s(_vm.name))]),
                        _vm._v(" "),
                        _vm._m(1),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("i", { staticClass: "lni lni-chevron-down" }),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass: "dropdown-menu dropdown-menu-end",
                    attrs: { "aria-labelledby": "profile" },
                  },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _vm._m(4),
                    _vm._v(" "),
                    _vm._m(5),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        {
                          attrs: { href: "#0" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.logOut.apply(null, arguments)
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "lni lni-exit" }),
                          _vm._v(" Cerrar Sesión"),
                        ]
                      ),
                    ]),
                  ]
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-5 col-md-5 col-6" }, [
      _c("div", { staticClass: "header-left d-flex align-items-center" }, [
        _c("div", { staticClass: "menu-toggle-btn mr-20" }, [
          _c(
            "button",
            {
              staticClass: "main-btn primary-btn btn-hover",
              attrs: { id: "menu-toggle" },
            },
            [
              _c("i", { staticClass: "lni me-2 lni-chevron-left" }),
              _vm._v(" Menu\n                "),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "header-search d-none d-md-flex" }, [
          _c("form", { attrs: { action: "#" } }, [
            _c("input", { attrs: { type: "text", placeholder: "Search..." } }),
            _vm._v(" "),
            _c("button", [_c("i", { staticClass: "lni lni-search-alt" })]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image" }, [
      _c("img", {
        attrs: { src: "assets/images/profile/profile-image.png", alt: "" },
      }),
      _vm._v(" "),
      _c("span", { staticClass: "status" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "#0" } }, [
        _c("i", { staticClass: "lni lni-user" }),
        _vm._v(" View Profile\n                    "),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "#0" } }, [
        _c("i", { staticClass: "lni lni-alarm" }),
        _vm._v(" Notifications\n                    "),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "#0" } }, [
        _c("i", { staticClass: "lni lni-inbox" }),
        _vm._v(" Messages "),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "#0" } }, [
        _c("i", { staticClass: "lni lni-cog" }),
        _vm._v(" Settings "),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/SectionStartComponent.vue?vue&type=template&id=11ea573e&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/SectionStartComponent.vue?vue&type=template&id=11ea573e& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("section", { staticClass: "section" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "title-wrapper pt-30" }, [
            _c("div", { staticClass: "row align-items-center" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "titlemb-30" }, [
                  _c("h2", [_vm._v("Title")]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "breadcrumb-wrapper mb-30" }, [
                  _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
                    _c("ol", { staticClass: "breadcrumb" }, [
                      _c("li", { staticClass: "breadcrumb-item" }, [
                        _c("a", { attrs: { href: "#0" } }, [
                          _vm._v("Dashboard"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass: "breadcrumb-item active",
                          attrs: { "aria-current": "page" },
                        },
                        [
                          _vm._v(
                            "\n                      Page\n                    "
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/SideBarComponent.vue?vue&type=template&id=bafbe05a&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/back/pages/user/layouts/includes/SideBarComponent.vue?vue&type=template&id=bafbe05a& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("aside", { staticClass: "sidebar-nav-wrapper" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("nav", { staticClass: "sidebar-nav" }, [
      _c("ul", [
        _c("li", { staticClass: "nav-item nav-item-has-children" }, [
          _c(
            "a",
            {
              staticClass: "collapsed",
              attrs: {
                href: "#0",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#ddmenu_1",
                "aria-controls": "ddmenu_1",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
              },
            },
            [
              _c("span", { staticClass: "icon" }, [
                _c(
                  "svg",
                  {
                    attrs: { width: "22", height: "22", viewBox: "0 0 22 22" },
                  },
                  [
                    _c("path", {
                      attrs: {
                        d: "M17.4167 4.58333V6.41667H13.75V4.58333H17.4167ZM8.25 4.58333V10.0833H4.58333V4.58333H8.25ZM17.4167 11.9167V17.4167H13.75V11.9167H17.4167ZM8.25 15.5833V17.4167H4.58333V15.5833H8.25ZM19.25 2.75H11.9167V8.25H19.25V2.75ZM10.0833 2.75H2.75V11.9167H10.0833V2.75ZM19.25 10.0833H11.9167V19.25H19.25V10.0833ZM10.0833 13.75H2.75V19.25H10.0833V13.75Z",
                      },
                    }),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "text" }, [_vm._v("Dashboard")]),
            ]
          ),
          _vm._v(" "),
          _vm._m(1),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item nav-item-has-children" }, [
          _c(
            "a",
            {
              attrs: {
                href: "#0",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#ddmenu_2",
                "aria-controls": "ddmenu_2",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
              },
            },
            [
              _c("span", { staticClass: "icon" }, [
                _c(
                  "svg",
                  {
                    attrs: {
                      width: "22",
                      height: "22",
                      viewBox: "0 0 22 22",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                  },
                  [
                    _c("path", {
                      attrs: {
                        d: "M12.8334 1.83325H5.50008C5.01385 1.83325 4.54754 2.02641 4.20372 2.37022C3.8599 2.71404 3.66675 3.18036 3.66675 3.66659V18.3333C3.66675 18.8195 3.8599 19.2858 4.20372 19.6296C4.54754 19.9734 5.01385 20.1666 5.50008 20.1666H16.5001C16.9863 20.1666 17.4526 19.9734 17.7964 19.6296C18.1403 19.2858 18.3334 18.8195 18.3334 18.3333V7.33325L12.8334 1.83325ZM16.5001 18.3333H5.50008V3.66659H11.9167V8.24992H16.5001V18.3333Z",
                      },
                    }),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "text" }, [_vm._v("Pages")]),
            ]
          ),
          _vm._v(" "),
          _vm._m(2),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c("a", { attrs: { href: "invoice.html" } }, [
            _c("span", { staticClass: "icon" }, [
              _c(
                "svg",
                {
                  attrs: {
                    width: "22",
                    height: "22",
                    viewBox: "0 0 22 22",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                },
                [
                  _c("path", {
                    attrs: {
                      d: "M17.4166 7.33333C18.9383 7.33333 20.1666 8.56167 20.1666 10.0833V15.5833H16.4999V19.25H5.49992V15.5833H1.83325V10.0833C1.83325 8.56167 3.06159 7.33333 4.58325 7.33333H5.49992V2.75H16.4999V7.33333H17.4166ZM7.33325 4.58333V7.33333H14.6666V4.58333H7.33325ZM14.6666 17.4167V13.75H7.33325V17.4167H14.6666ZM16.4999 13.75H18.3333V10.0833C18.3333 9.57917 17.9208 9.16667 17.4166 9.16667H4.58325C4.07909 9.16667 3.66659 9.57917 3.66659 10.0833V13.75H5.49992V11.9167H16.4999V13.75ZM17.4166 10.5417C17.4166 11.0458 17.0041 11.4583 16.4999 11.4583C15.9958 11.4583 15.5833 11.0458 15.5833 10.5417C15.5833 10.0375 15.9958 9.625 16.4999 9.625C17.0041 9.625 17.4166 10.0375 17.4166 10.5417Z",
                    },
                  }),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "text" }, [_vm._v("Invoice")]),
          ]),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item nav-item-has-children" }, [
          _c(
            "a",
            {
              staticClass: "collapsed",
              attrs: {
                href: "#0",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#ddmenu_3",
                "aria-controls": "ddmenu_3",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
              },
            },
            [
              _c("span", { staticClass: "icon" }, [
                _c(
                  "svg",
                  {
                    attrs: {
                      width: "22",
                      height: "22",
                      viewBox: "0 0 22 22",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                  },
                  [
                    _c("path", {
                      attrs: {
                        d: "M12.9067 14.2908L15.2808 11.9167H6.41667V10.0833H15.2808L12.9067 7.70917L14.2083 6.41667L18.7917 11L14.2083 15.5833L12.9067 14.2908ZM17.4167 2.75C17.9029 2.75 18.3692 2.94315 18.713 3.28697C19.0568 3.63079 19.25 4.0971 19.25 4.58333V8.86417L17.4167 7.03083V4.58333H4.58333V17.4167H17.4167V14.9692L19.25 13.1358V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C3.56583 19.25 2.75 18.425 2.75 17.4167V4.58333C2.75 3.56583 3.56583 2.75 4.58333 2.75H17.4167Z",
                      },
                    }),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "text" }, [_vm._v("Auth")]),
            ]
          ),
          _vm._v(" "),
          _vm._m(3),
        ]),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item nav-item-has-children" }, [
          _c(
            "a",
            {
              staticClass: "collapsed",
              attrs: {
                href: "#0",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#ddmenu_4",
                "aria-controls": "ddmenu_4",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
              },
            },
            [
              _c("span", { staticClass: "icon" }, [
                _c(
                  "svg",
                  {
                    attrs: {
                      width: "22",
                      height: "22",
                      viewBox: "0 0 22 22",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                  },
                  [
                    _c("path", {
                      attrs: {
                        d: "M3.66675 4.58325V16.4999H19.2501V4.58325H3.66675ZM5.50008 14.6666V6.41659H8.25008V14.6666H5.50008ZM10.0834 14.6666V11.4583H12.8334V14.6666H10.0834ZM17.4167 14.6666H14.6667V11.4583H17.4167V14.6666ZM10.0834 9.62492V6.41659H17.4167V9.62492H10.0834Z",
                      },
                    }),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "text" }, [_vm._v("UI Elements ")]),
            ]
          ),
          _vm._v(" "),
          _vm._m(5),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item nav-item-has-children" }, [
          _c(
            "a",
            {
              staticClass: "collapsed",
              attrs: {
                href: "#0",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#ddmenu_55",
                "aria-controls": "ddmenu_55",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
              },
            },
            [
              _c("span", { staticClass: "icon" }, [
                _c(
                  "svg",
                  {
                    attrs: {
                      width: "22",
                      height: "22",
                      viewBox: "0 0 22 22",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                  },
                  [
                    _c("path", {
                      attrs: {
                        d: "M1.83325 19.25V17.4167H18.3333V19.25H1.83325ZM18.3333 7.33333V4.58333H16.4999V7.33333H18.3333ZM18.3333 2.75C18.8195 2.75 19.2858 2.94315 19.6296 3.28697C19.9734 3.63079 20.1666 4.0971 20.1666 4.58333V7.33333C20.1666 7.81956 19.9734 8.28588 19.6296 8.6297C19.2858 8.97351 18.8195 9.16667 18.3333 9.16667H16.4999V11.9167C16.4999 12.8891 16.1136 13.8218 15.426 14.5094C14.7383 15.197 13.8057 15.5833 12.8333 15.5833H7.33325C6.36079 15.5833 5.42816 15.197 4.74053 14.5094C4.05289 13.8218 3.66659 12.8891 3.66659 11.9167V2.75H18.3333ZM14.6666 4.58333H5.49992V11.9167C5.49992 12.4029 5.69307 12.8692 6.03689 13.213C6.38071 13.5568 6.84702 13.75 7.33325 13.75H12.8333C13.3195 13.75 13.7858 13.5568 14.1296 13.213C14.4734 12.8692 14.6666 12.4029 14.6666 11.9167V4.58333Z",
                      },
                    }),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "text" }, [_vm._v("Icons")]),
            ]
          ),
          _vm._v(" "),
          _vm._m(6),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item nav-item-has-children" }, [
          _c(
            "a",
            {
              staticClass: "collapsed",
              attrs: {
                href: "#0",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#ddmenu_5",
                "aria-controls": "ddmenu_5",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
              },
            },
            [
              _c("span", { staticClass: "icon" }, [
                _c(
                  "svg",
                  {
                    attrs: {
                      width: "22",
                      height: "22",
                      viewBox: "0 0 22 22",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                  },
                  [
                    _c("path", {
                      attrs: {
                        d: "M13.75 4.58325H16.5L15.125 6.41659L13.75 4.58325ZM4.58333 1.83325H17.4167C18.4342 1.83325 19.25 2.65825 19.25 3.66659V18.3333C19.25 19.3508 18.4342 20.1666 17.4167 20.1666H4.58333C3.575 20.1666 2.75 19.3508 2.75 18.3333V3.66659C2.75 2.65825 3.575 1.83325 4.58333 1.83325ZM4.58333 3.66659V7.33325H17.4167V3.66659H4.58333ZM4.58333 18.3333H17.4167V9.16659H4.58333V18.3333ZM6.41667 10.9999H15.5833V12.8333H6.41667V10.9999ZM6.41667 14.6666H15.5833V16.4999H6.41667V14.6666Z",
                      },
                    }),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "text" }, [_vm._v(" Forms ")]),
            ]
          ),
          _vm._v(" "),
          _vm._m(7),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c("a", { attrs: { href: "tables.html" } }, [
            _c("span", { staticClass: "icon" }, [
              _c(
                "svg",
                {
                  attrs: {
                    width: "22",
                    height: "22",
                    viewBox: "0 0 22 22",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                },
                [
                  _c("path", {
                    attrs: {
                      d: "M4.58333 3.66675H17.4167C17.9029 3.66675 18.3692 3.8599 18.713 4.20372C19.0568 4.54754 19.25 5.01385 19.25 5.50008V16.5001C19.25 16.9863 19.0568 17.4526 18.713 17.7964C18.3692 18.1403 17.9029 18.3334 17.4167 18.3334H4.58333C4.0971 18.3334 3.63079 18.1403 3.28697 17.7964C2.94315 17.4526 2.75 16.9863 2.75 16.5001V5.50008C2.75 5.01385 2.94315 4.54754 3.28697 4.20372C3.63079 3.8599 4.0971 3.66675 4.58333 3.66675ZM4.58333 7.33341V11.0001H10.0833V7.33341H4.58333ZM11.9167 7.33341V11.0001H17.4167V7.33341H11.9167ZM4.58333 12.8334V16.5001H10.0833V12.8334H4.58333ZM11.9167 12.8334V16.5001H17.4167V12.8334H11.9167Z",
                    },
                  }),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "text" }, [_vm._v("Tables")]),
          ]),
        ]),
        _vm._v(" "),
        _vm._m(8),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c("a", { attrs: { href: "notification.html" } }, [
            _c("span", { staticClass: "icon" }, [
              _c(
                "svg",
                {
                  attrs: {
                    width: "22",
                    height: "22",
                    viewBox: "0 0 22 22",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                },
                [
                  _c("path", {
                    attrs: {
                      d: "M9.16667 19.25H12.8333C12.8333 20.2584 12.0083 21.0834 11 21.0834C9.99167 21.0834 9.16667 20.2584 9.16667 19.25ZM19.25 17.4167V18.3334H2.75V17.4167L4.58333 15.5834V10.0834C4.58333 7.24171 6.41667 4.76671 9.16667 3.94171V3.66671C9.16667 2.65837 9.99167 1.83337 11 1.83337C12.0083 1.83337 12.8333 2.65837 12.8333 3.66671V3.94171C15.5833 4.76671 17.4167 7.24171 17.4167 10.0834V15.5834L19.25 17.4167ZM15.5833 10.0834C15.5833 7.51671 13.5667 5.50004 11 5.50004C8.43333 5.50004 6.41667 7.51671 6.41667 10.0834V16.5H15.5833V10.0834Z",
                    },
                  }),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "text" }, [_vm._v("Notifications")]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navbar-logo" }, [
      _c("a", { attrs: { href: "index.html" } }, [
        _c("img", {
          attrs: { src: "assets/images/logo/logo.svg", alt: "logo" },
        }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "collapse dropdown-nav", attrs: { id: "ddmenu_1" } },
      [
        _c("li", [
          _c("a", { attrs: { href: "index.html" } }, [_vm._v(" eCommerce ")]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "collapse show dropdown-nav", attrs: { id: "ddmenu_2" } },
      [
        _c("li", [
          _c("a", { attrs: { href: "settings.html" } }, [_vm._v(" Settings ")]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            { staticClass: "active", attrs: { href: "blank-page.html" } },
            [_vm._v(" Blank Page ")]
          ),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "collapse dropdown-nav", attrs: { id: "ddmenu_3" } },
      [
        _c("li", [
          _c("a", { attrs: { href: "signin.html" } }, [_vm._v(" Sign In ")]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "signup.html" } }, [_vm._v(" Sign Up ")]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "divider" }, [_c("hr")])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "collapse dropdown-nav", attrs: { id: "ddmenu_4" } },
      [
        _c("li", [
          _c("a", { attrs: { href: "alerts.html" } }, [_vm._v(" Alerts ")]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "buttons.html" } }, [_vm._v(" Buttons ")]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "cards.html" } }, [_vm._v(" Cards ")]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "typography.html" } }, [
            _vm._v(" Typography "),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "collapse dropdown-nav", attrs: { id: "ddmenu_55" } },
      [
        _c("li", [
          _c("a", { attrs: { href: "icons.html" } }, [_vm._v(" LineIcons ")]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "mdi-icons.html" } }, [
            _vm._v(" MDI Icons "),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "collapse dropdown-nav", attrs: { id: "ddmenu_5" } },
      [
        _c("li", [
          _c("a", { attrs: { href: "form-elements.html" } }, [
            _vm._v(" Form Elements "),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "divider" }, [_c("hr")])
  },
]
render._withStripped = true



/***/ })

}]);