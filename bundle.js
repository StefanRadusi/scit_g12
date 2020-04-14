/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/header/header.js":
/*!*************************************!*\
  !*** ./components/header/header.js ***!
  \*************************************/
/*! exports provided: createHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHeader\", function() { return createHeader; });\n/* harmony import */ var _homeButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeButton */ \"./components/header/homeButton.js\");\n/* harmony import */ var _mealButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mealButton */ \"./components/header/mealButton.js\");\n\n\n\nfunction createHeader() {\n  const header = document.createElement(\"div\");\n  header.classList.add(\"header\");\n\n  header.appendChild(Object(_homeButton__WEBPACK_IMPORTED_MODULE_0__[\"generateHomeButton\"])());\n  header.appendChild(Object(_mealButton__WEBPACK_IMPORTED_MODULE_1__[\"generateMealButton\"])());\n  document.body.appendChild(header);\n}\n\n\n//# sourceURL=webpack:///./components/header/header.js?");

/***/ }),

/***/ "./components/header/homeButton.js":
/*!*****************************************!*\
  !*** ./components/header/homeButton.js ***!
  \*****************************************/
/*! exports provided: generateHomeButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateHomeButton\", function() { return generateHomeButton; });\nfunction generateHomeButton() {\n  const button = document.createElement(\"button\");\n  button.classList.add(\"home-button\");\n  button.classList.add(\"selected\");\n  button.id = \"home-button\";\n  button.innerText = \"Home\";\n  return button;\n}\n\n\n//# sourceURL=webpack:///./components/header/homeButton.js?");

/***/ }),

/***/ "./components/header/mealButton.js":
/*!*****************************************!*\
  !*** ./components/header/mealButton.js ***!
  \*****************************************/
/*! exports provided: generateMealButton, highlightMealButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateMealButton\", function() { return generateMealButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"highlightMealButton\", function() { return highlightMealButton; });\nfunction generateMealButton() {\n  const button = document.createElement(\"button\");\n  button.classList.add(\"meal-button\");\n  button.id = \"meal-button\";\n  button.innerText = \"Meal\";\n  return button;\n}\n\nfunction highlightMealButton() {\n  document.getElementById(\"meal-button\").classList.add(\"selected\");\n  document.getElementById(\"home-button\").classList.remove(\"selected\");\n}\n\n\n//# sourceURL=webpack:///./components/header/mealButton.js?");

/***/ }),

/***/ "./components/homePage/home.js":
/*!*************************************!*\
  !*** ./components/homePage/home.js ***!
  \*************************************/
/*! exports provided: generateHomePage, hideHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateHomePage\", function() { return generateHomePage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideHomePage\", function() { return hideHomePage; });\n/* harmony import */ var _mealPage_meal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mealPage/meal */ \"./components/mealPage/meal.js\");\n\n\nfunction generateAlphabetLetters(homePage) {\n  const letterContainer = document.createElement(\"div\");\n  letterContainer.classList.add(\"letters-container\");\n  for (let i = 65; i < 91; i++) {\n    const letter = String.fromCharCode(i);\n    const letterDOM = document.createElement(\"p\");\n    letterDOM.innerText = letter;\n    letterContainer.appendChild(letterDOM);\n    letterDOM.addEventListener(\"click\", _mealPage_meal__WEBPACK_IMPORTED_MODULE_0__[\"generateMealPage\"]);\n  }\n  homePage.appendChild(letterContainer);\n}\n\nfunction generateHomePage() {\n  const homePage = document.createElement(\"div\");\n  homePage.classList.add(\"home-page\");\n  document.body.appendChild(homePage);\n\n  addExplanationText(homePage);\n  generateAlphabetLetters(homePage);\n}\n\nfunction hideHomePage(homePage) {\n  homePage.style.display = \"none\";\n}\n\nfunction addExplanationText(homePage) {\n  const explanation = document.createElement(\"h2\");\n  explanation.classList.add(\"explanation\");\n  explanation.innerText = \"Choose a letter to find meals:\";\n  homePage.appendChild(explanation);\n}\n\n\n//# sourceURL=webpack:///./components/homePage/home.js?");

/***/ }),

/***/ "./components/mealPage/meal.js":
/*!*************************************!*\
  !*** ./components/mealPage/meal.js ***!
  \*************************************/
/*! exports provided: generateMealPage, renderMealsElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateMealPage\", function() { return generateMealPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMealsElements\", function() { return renderMealsElements; });\n/* harmony import */ var _homePage_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../homePage/home */ \"./components/homePage/home.js\");\n/* harmony import */ var _mealsNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mealsNavigation */ \"./components/mealPage/mealsNavigation.js\");\n/* harmony import */ var _header_mealButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/mealButton */ \"./components/header/mealButton.js\");\n\n\n\n\nfunction generateMealPage(event) {\n  console.log(\"generating meal page\");\n  Object(_header_mealButton__WEBPACK_IMPORTED_MODULE_2__[\"highlightMealButton\"])();\n  Object(_homePage_home__WEBPACK_IMPORTED_MODULE_0__[\"hideHomePage\"])(event.target.parentNode);\n  getMealsFromServer(event.target.innerText);\n}\n\nfunction getMealsFromServer(letter) {\n  const url = generateUrl(letter);\n  fetch(url)\n    .then(r => r.json())\n    .then(json => {\n      generateMeal(json, letter);\n    });\n  console.log(url);\n}\n\nfunction generateUrl(letter) {\n  return `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;\n}\n\nfunction generateMeal(json, letter) {\n  const meals = json.meals;\n  let mealIndex = 0;\n\n  const container = document.createElement(\"div\");\n  container.classList.add(\"meal-page\");\n  document.body.appendChild(container);\n\n  renderMealsElements(meals[mealIndex], letter, container);\n  Object(_mealsNavigation__WEBPACK_IMPORTED_MODULE_1__[\"addMealsNavigation\"])(meals, letter, container);\n}\n\nfunction renderMealsElements(mealData, letter, container) {\n  container.innerHTML = null;\n\n  const title = document.createElement(\"h1\");\n  title.innerText = `Meal that start with: ${letter}`;\n  container.appendChild(title);\n\n  const mealName = document.createElement(\"h2\");\n  mealName.innerText = `Name: ${mealData.strMeal}`;\n  container.appendChild(mealName);\n\n  const mealImg = document.createElement(\"img\");\n  mealImg.setAttribute(\"src\", mealData.strMealThumb);\n  mealImg.classList.add(\"meal-img\");\n  container.appendChild(mealImg);\n\n  const mealDesc = document.createElement(\"p\");\n  mealDesc.innerText = mealData.strInstructions;\n  container.appendChild(mealDesc);\n}\n\n\n//# sourceURL=webpack:///./components/mealPage/meal.js?");

/***/ }),

/***/ "./components/mealPage/mealsNavigation.js":
/*!************************************************!*\
  !*** ./components/mealPage/mealsNavigation.js ***!
  \************************************************/
/*! exports provided: addMealsNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addMealsNavigation\", function() { return addMealsNavigation; });\n/* harmony import */ var _meal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meal */ \"./components/mealPage/meal.js\");\n\n\nfunction addMealsNavigation(meals, letter, container) {\n  const navigation = document.createElement(\"div\");\n  navigation.classList.add(\"meal-navigation\");\n\n  const leftButton = document.createElement(\"div\");\n  leftButton.innerText = \"<\";\n  leftButton.style.opacity = \"0.5\";\n\n  const rightButton = document.createElement(\"div\");\n  rightButton.innerText = \">\";\n\n  navigation.appendChild(leftButton);\n  navigation.appendChild(rightButton);\n\n  document.body.appendChild(navigation);\n\n  setNavigationFunctionality(meals, leftButton, rightButton, letter, container);\n}\n\nfunction setNavigationFunctionality(\n  meals,\n  leftButton,\n  rightButton,\n  letter,\n  container\n) {\n  let currentIndexMeal = 0;\n\n  leftButton.addEventListener(\"click\", () => {\n    if (currentIndexMeal > 0) {\n      currentIndexMeal--;\n      Object(_meal__WEBPACK_IMPORTED_MODULE_0__[\"renderMealsElements\"])(meals[currentIndexMeal], letter, container);\n      rightButton.style.opacity = 1;\n    }\n\n    if (currentIndexMeal === 0) {\n      leftButton.style.opacity = 0.5;\n    }\n  });\n\n  rightButton.addEventListener(\"click\", () => {\n    if (currentIndexMeal + 1 < meals.length) {\n      currentIndexMeal++;\n      Object(_meal__WEBPACK_IMPORTED_MODULE_0__[\"renderMealsElements\"])(meals[currentIndexMeal], letter, container);\n      leftButton.style.opacity = 1;\n    }\n\n    if (currentIndexMeal === meals.length - 1) {\n      rightButton.style.opacity = 0.5;\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./components/mealPage/mealsNavigation.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header */ \"./components/header/header.js\");\n/* harmony import */ var _components_homePage_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/homePage/home */ \"./components/homePage/home.js\");\n\n\n\nconsole.log(\"start stef\");\nObject(_components_header_header__WEBPACK_IMPORTED_MODULE_0__[\"createHeader\"])();\nObject(_components_homePage_home__WEBPACK_IMPORTED_MODULE_1__[\"generateHomePage\"])();\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });