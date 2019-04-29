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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/common/GenericButton.js":
/*!*************************************!*\
  !*** ./src/common/GenericButton.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ "./src/common/constants.js");
var _this = undefined;

 // instance of the game, x coordinate, y coordinate, button display text, and state to move to

var GenericButton = function GenericButton(game, x, y, btnName, callback) {
  var genericButton = game.add.text(x, y, btnName, _common_constants__WEBPACK_IMPORTED_MODULE_0__["ButtonStyle"]);
  genericButton.anchor.setTo(0, 0);
  genericButton.inputEnabled = true;
  genericButton.events.onInputUp.add(callback);
  genericButton.events.onInputOver.add(function () {
    genericButton.alpha = .5;
  }, _this);
  genericButton.events.onInputOut.add(function () {
    genericButton.alpha = 1;
  }, _this);
  return genericButton;
};

/* harmony default export */ __webpack_exports__["default"] = (GenericButton);

/***/ }),

/***/ "./src/common/ItemButton.js":
/*!**********************************!*\
  !*** ./src/common/ItemButton.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ "./src/common/constants.js");
var _this = undefined;

 // instance of the game, x coordinate, y coordinate, button display text, and state to move to

var ItemButton = function ItemButton(game, x, y, btnName, callback) {
  var itemButton = game.add.text(x, y, btnName, _common_constants__WEBPACK_IMPORTED_MODULE_0__["ButtonStyle"]);
  /*itemButton.setTextBounds(x, y, 100, 100);
  itemButton.style.align = "left";
  itemButton.style.boundsAlignH = "left";
  itemButton.style.boundsAlignV = "top";*/

  itemButton.inputEnabled = true;
  itemButton.events.onInputUp.add(callback);
  itemButton.events.onInputOver.add(function () {
    itemButton.alpha = .5;
  }, _this);
  itemButton.events.onInputOut.add(function () {
    itemButton.alpha = 1;
  }, _this);
  return itemButton;
};

/* harmony default export */ __webpack_exports__["default"] = (ItemButton);

/***/ }),

/***/ "./src/common/StateTransitionButton.js":
/*!*********************************************!*\
  !*** ./src/common/StateTransitionButton.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ "./src/common/constants.js");
/* harmony import */ var _GenericButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenericButton */ "./src/common/GenericButton.js");

 // instance of the game, x coordinate, y coordinate, button display text, and state to move to

var StateTransitionButton = function StateTransitionButton(game, x, y, btnName) {
  for (var _len = arguments.length, state = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    state[_key - 4] = arguments[_key];
  }

  return Object(_GenericButton__WEBPACK_IMPORTED_MODULE_1__["default"])(game, x, y, btnName, function () {
    if (state.length > 1) {
      for (var i = 0; i < state.length; i++) {
        game.state.start(state[i]);
      }
    } else {
      game.state.start(state[0]);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (StateTransitionButton);

/***/ }),

/***/ "./src/common/TitleText.js":
/*!*********************************!*\
  !*** ./src/common/TitleText.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TitleText; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/common/constants.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var titleStyle = _objectSpread({}, _constants__WEBPACK_IMPORTED_MODULE_0__["BaseStyle"], {
  fontSize: '48px'
});

titleStyle.align = 'center';
function TitleText(game, x, y, contents) {
  var text = game.add.text(x, y, contents, titleStyle);
  text.anchor.set(0.5);
}

/***/ }),

/***/ "./src/common/constants.js":
/*!*********************************!*\
  !*** ./src/common/constants.js ***!
  \*********************************/
/*! exports provided: FONT_COLOR, BaseStyle, ButtonStyle, DescriptionStyle, MARGIN, ITEM_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_COLOR", function() { return FONT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseStyle", function() { return BaseStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonStyle", function() { return ButtonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionStyle", function() { return DescriptionStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARGIN", function() { return MARGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEM_MAP", function() { return ITEM_MAP; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FONT_COLOR = "#589b00";
var BaseStyle = {
  font: 'Gloria Hallelujah',
  fill: FONT_COLOR,
  align: 'left'
};
var ButtonStyle = _objectSpread({}, BaseStyle, {
  fontSize: '32px'
});
var DescriptionStyle = _objectSpread({}, BaseStyle, {
  fontSize: '18px'
});
var MARGIN = 24;
var ITEM_MAP = {
  "Speed": {
    icon: "speedIcon",
    descr: "Doubles movement speed",
    cost: 40
  },
  "Swamp Bubble": {
    icon: "swampBubbleIcon",
    descr: "Takes one free hit & adds bounce ability",
    cost: 40
  },
  "Fart in a Jar": {
    icon: "fartJarIcon",
    descr: "Adds double-jump ability",
    cost: 60
  },
  "Big Onion": {
    icon: "bigFistIcon",
    descr: "Higher damage and knock back",
    cost: 80
  },
  "Fairie Dust": {
    icon: "fairieDustIcon",
    descr: "Slows fall speed",
    cost: 100
  }
};

/***/ }),

/***/ "./src/common/gitButton.js":
/*!*********************************!*\
  !*** ./src/common/gitButton.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ "./src/common/constants.js");
/* harmony import */ var _GenericButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenericButton */ "./src/common/GenericButton.js");



var GitButton = function GitButton(game, x, y, btnName, link) {
  Object(_GenericButton__WEBPACK_IMPORTED_MODULE_1__["default"])(game, x, y, btnName, function () {
    window.open(link);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (GitButton);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _states_entry_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./states/entry-state */ "./src/states/entry-state.js");
/* harmony import */ var _states_about_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states/about-state */ "./src/states/about-state.js");
/* harmony import */ var _states_instructions_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states/instructions-state */ "./src/states/instructions-state.js");
/* harmony import */ var _states_instructions_state2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states/instructions-state2 */ "./src/states/instructions-state2.js");
/* harmony import */ var _states_instructions_state3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./states/instructions-state3 */ "./src/states/instructions-state3.js");
/* harmony import */ var _states_instructions_state4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./states/instructions-state4 */ "./src/states/instructions-state4.js");
/* harmony import */ var _states_game_over_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./states/game-over-state */ "./src/states/game-over-state.js");
/* harmony import */ var _states_asset_load_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./states/asset-load-state */ "./src/states/asset-load-state.js");
/* harmony import */ var _states_font_load_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./states/font-load-state */ "./src/states/font-load-state.js");









var game = new Phaser.Game(640, 512, Phaser.AUTO, Phaser.AUTO, 'game', undefined, undefined, false);
game.state.add("Entry", Object(_states_entry_state__WEBPACK_IMPORTED_MODULE_0__["default"])(game));
game.state.add("About", Object(_states_about_state__WEBPACK_IMPORTED_MODULE_1__["default"])(game));
game.state.add("Instructions", Object(_states_instructions_state__WEBPACK_IMPORTED_MODULE_2__["default"])(game));
game.state.add("Instructions2", Object(_states_instructions_state2__WEBPACK_IMPORTED_MODULE_3__["default"])(game));
game.state.add("Instructions3", Object(_states_instructions_state3__WEBPACK_IMPORTED_MODULE_4__["default"])(game));
game.state.add("Instructions4", Object(_states_instructions_state4__WEBPACK_IMPORTED_MODULE_5__["default"])(game));
game.state.add("GameOver", Object(_states_game_over_state__WEBPACK_IMPORTED_MODULE_6__["default"])(game));
game.state.add("AssetLoad", Object(_states_asset_load_state__WEBPACK_IMPORTED_MODULE_7__["default"])(game));
game.state.add("FontLoad", Object(_states_font_load_state__WEBPACK_IMPORTED_MODULE_8__["default"])(game));
game.state.start("FontLoad");

/***/ }),

/***/ "./src/states/about-state.js":
/*!***********************************!*\
  !*** ./src/states/about-state.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return aboutState; });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ "./src/common/constants.js");
/* harmony import */ var _common_StateTransitionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/StateTransitionButton */ "./src/common/StateTransitionButton.js");
/* harmony import */ var _common_gitButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/gitButton */ "./src/common/gitButton.js");



function aboutState(game) {
  var textCrawlStyle = {
    font: '15px Gloria Hallelujah',
    fill: _common_constants__WEBPACK_IMPORTED_MODULE_0__["FONT_COLOR"],
    align: 'left',
    wordWrap: true,
    wordWrapWidth: game.width - 60
  };
  var textCrawl = 'About\n\n' + 'Original story, art, music, and gameplay developed by libjared, scottyseus, \njronsomers, and endlessDreamHero  for' + ' Ludum Dare Jam 44.\n\n' + 'Check out the links below:\n\n';
  return {
    create: function create() {
      Object(_common_StateTransitionButton__WEBPACK_IMPORTED_MODULE_1__["default"])(game, 60, 30, '< Back', "Entry");
      Object(_common_gitButton__WEBPACK_IMPORTED_MODULE_2__["default"])(game, 60, 250, '> scottyseus on GitHub <', "https://github.com/scottyseus/due-process");
      Object(_common_gitButton__WEBPACK_IMPORTED_MODULE_2__["default"])(game, 60, 290, '> libjared on GitHub <', "https://github.com/libjared");
      Object(_common_gitButton__WEBPACK_IMPORTED_MODULE_2__["default"])(game, 60, 330, "> jronsomers GitHub", "https://github.com/jronSomers");
      Object(_common_gitButton__WEBPACK_IMPORTED_MODULE_2__["default"])(game, 60, 370, '> Ludum Dare page <', "https://ldjam.com/events/ludum-dare/44/subs");
      var aboutText = game.add.text(60, 90, textCrawl, textCrawlStyle);
    }
  };
}
;

/***/ }),

/***/ "./src/states/asset-load-state.js":
/*!****************************************!*\
  !*** ./src/states/asset-load-state.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assetLoadState; });
function assetLoadState(game) {
  function preload() {
    game.load.image('ground', 'src/assets/ground.png');
    game.load.image('groundTop', 'src/assets/groundTop.png');
    game.load.spritesheet('shrek', 'src/assets/shrek.png', 126 / 3, 72);
    game.load.spritesheet('donkey', 'src/assets/donkey.png', 192 / 4, 48);
    game.load.spritesheet('unicorn', 'src/assets/unicorn.png', 92, 82);
    game.load.spritesheet('gnome', 'src/assets/gnome.png', 30, 50);
    game.load.spritesheet('fairy', 'src/assets/fairy.png', 56 / 4, 17);
    game.load.spritesheet('phoenix', 'src/assets/phoenix.png', 56, 56);
    game.load.spritesheet('imp', 'src/assets/imp.png', 32, 48);
    game.load.spritesheet('goblinWarrior', 'src/assets/goblinWarrior.png', 52, 72);
    game.load.image('tree1', 'src/assets/tree1.png');
    game.load.image('tree2', 'src/assets/tree2.png');
    game.load.image('tree3', 'src/assets/tree3.png');
    game.load.image("berryBush", "src/assets/berryBush.png");
    game.load.image("store", "src/assets/store.png");
    game.load.image("forestBackground", "src/assets/forestBackground.png");
    game.load.image("storeBackground", "src/assets/storeBackground.png");
    game.load.spritesheet("chop", "src/assets/chop.png", 68, 90);
    game.load.spritesheet("bigfist", "src/assets/bigfist.png", 90, 120);
    game.load.spritesheet("net", "src/assets/net.png", 110, 108);
    game.load.image("sky", "src/assets/sky.png");
    game.load.image("heart", "src/assets/heart.png");
    game.load.spritesheet("coin", "src/assets/coin.png", 128 / 8, 16);
    game.load.image("swampBubble", "src/assets/swampBubble.png");
    game.load.image("fairieDust", "src/assets/fairieDust.png"); // icons

    game.load.image("donkeyIcon", "src/assets/donkeyIcon.png");
    game.load.image("fairyIcon", "src/assets/fairyIcon.png");
    game.load.image("gnomeIcon", "src/assets/gnomeIcon.png");
    game.load.image("unicornIcon", "src/assets/unicornIcon.png");
    game.load.image("phoenixIcon", "src/assets/phoenixIcon.png");
    game.load.image("impIcon", "src/assets/impIcon.png");
    game.load.image("goblinWarriorIcon", "src/assets/goblinWarriorIcon.png");
    game.load.image("iconBag", "src/assets/iconBag.png");
    game.load.image("iconBagOverlay", "src/assets/iconBagOverlay.png");
    game.load.image("swampBubbleIcon", "src/assets/swampBubbleIcon.png");
    game.load.image("fairieDustIcon", "src/assets/fairieDustIcon.png");
    game.load.image("bigFistIcon", "src/assets/bigFistIcon.png");
    game.load.image("speedIcon", "src/assets/speedIcon.png");
    game.load.image("fartJarIcon", "src/assets/fartJarIcon.png"); // sounds

    game.load.audio("net", "src/assets/sound/net.wav");
    game.load.audio("purchase", "src/assets/sound/cashreg.wav");
    game.load.audio("denied", "src/assets/sound/denied.wav");
    game.load.audio("bubbleGet", "src/assets/sound/bubbleget.wav");
    game.load.audio("bubbleBounce", "src/assets/sound/bubblebounce.wav");
    game.load.audio("bubblePop", "src/assets/sound/bubblePop.wav");
    game.load.audio("fart", "src/assets/sound/fart.wav");
    game.load.audio("hit", "src/assets/sound/hit.wav");
    game.load.audio("hitBig", "src/assets/sound/hit2.wav");
    game.load.audio("loserFart", "src/assets/sound/loserFart.wav");
  }

  function create() {
    game.state.start('Entry');
  }

  return {
    preload: preload,
    create: create
  };
}

/***/ }),

/***/ "./src/states/creatureConstants.js":
/*!*****************************************!*\
  !*** ./src/states/creatureConstants.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CREATURE_NAMES = {
  DONKEY: "donkey",
  FAIRY: "fairy",
  GNOME: "gnome",
  UNICORN: "unicorn",
  PHOENIX: "phoenix",
  IMP: "imp",
  GOBLIN: "goblinWarrior"
};
var BASE_ENEMY = {
  turnProb: 0.02,
  knockbackVelocityX: 200,
  knockbackVelocityY: -200,
  flier: false,
  altitude: 0,
  // height above ground level
  minDistance: 250 // minimum spawn distance from store

};

var DONKEY = _objectSpread({}, BASE_ENEMY, {
  name: CREATURE_NAMES.DONKEY,
  price: 20,
  baseSpeed: 200,
  baseHealth: 3,
  baseSpawnRate: 3600,
  minDistance: 1200
});

var FAIRY = _objectSpread({}, BASE_ENEMY, {
  name: CREATURE_NAMES.FAIRY,
  price: 10,
  baseSpeed: 60,
  baseHealth: 1,
  baseSpawnRate: 2400,
  flier: true,
  altitude: 100,
  knockbackVelocityY: 0
});

var UNICORN = _objectSpread({}, BASE_ENEMY, {
  name: CREATURE_NAMES.UNICORN,
  price: 40,
  baseSpeed: 150,
  baseHealth: 3,
  baseSpawnRate: 4200,
  minDistance: 2400
});

var GNOME = _objectSpread({}, BASE_ENEMY, {
  name: CREATURE_NAMES.GNOME,
  price: 20,
  baseSpeed: 100,
  baseHealth: 2,
  baseSpawnRate: 3600,
  minDistance: 1200
});

var PHOENIX = _objectSpread({}, BASE_ENEMY, {
  name: CREATURE_NAMES.PHOENIX,
  price: 60,
  baseSpeed: 125,
  baseHealth: 2,
  baseSpawnRate: 4200,
  altitude: 400,
  flier: true
});

var IMP = _objectSpread({}, BASE_ENEMY, {
  name: CREATURE_NAMES.IMP,
  price: 10,
  baseSpeed: 125,
  baseHealth: 1,
  baseSpawnRate: 2400
});

var GOBLIN = _objectSpread({}, BASE_ENEMY, {
  name: CREATURE_NAMES.GOBLIN,
  price: 40,
  baseSpeed: 85,
  baseHealth: 4,
  baseSpawnRate: 4200,
  minDistance: 2400
});

var CREATURE_LIST = [DONKEY, FAIRY, GNOME, UNICORN, PHOENIX, IMP, GOBLIN];
var CREATURE_NAME_MAP = {};
CREATURE_LIST.forEach(function (creature) {
  CREATURE_NAME_MAP[creature.name] = creature;
});
var CreatureConstants = {
  CREATURE_NAMES: CREATURE_NAMES,
  DONKEY: DONKEY,
  UNICORN: UNICORN,
  FAIRY: FAIRY,
  GNOME: GNOME,
  PHOENIX: PHOENIX,
  IMP: IMP,
  GOBLIN: GOBLIN,
  CREATURE_LIST: CREATURE_LIST,
  CREATURE_NAME_MAP: CREATURE_NAME_MAP
};
/* harmony default export */ __webpack_exports__["default"] = (CreatureConstants);

/***/ }),

/***/ "./src/states/entry-state.js":
/*!***********************************!*\
  !*** ./src/states/entry-state.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return entryState; });
/* harmony import */ var _common_StateTransitionButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/StateTransitionButton */ "./src/common/StateTransitionButton.js");
/* harmony import */ var _common_TitleText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/TitleText */ "./src/common/TitleText.js");
/* harmony import */ var _play_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play-state */ "./src/states/play-state.js");



var TITLE_Y = 70;
function entryState(game) {
  return {
    preload: function preload() {},
    init: function init() {},
    create: function create() {
      Object(_common_TitleText__WEBPACK_IMPORTED_MODULE_1__["default"])(game, game.width / 2, TITLE_Y, "Shrek Unknown's\nBattleSwamps");
      Object(_common_StateTransitionButton__WEBPACK_IMPORTED_MODULE_0__["default"])(game, 30, TITLE_Y + 72, "Play", "Instructions");
      Object(_common_StateTransitionButton__WEBPACK_IMPORTED_MODULE_0__["default"])(game, 30, TITLE_Y + 72 * 2, 'About', "About");
    },
    update: function update() {}
  };
}
;

/***/ }),

/***/ "./src/states/font-load-state.js":
/*!***************************************!*\
  !*** ./src/states/font-load-state.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fontLoadState; });
function fontLoadState(game) {
  window.fontsLoaded = function () {
    game.state.start('AssetLoad');
  };

  return {
    preload: function preload() {
      //  The Google WebFont Loader will look for this object, so create it before loading the script.
      global.WebFontConfig = {
        //  'active' means all requested fonts have finished loading
        //  We set a 1 second delay before calling 'createText'.
        //  For some reason if we don't the browser cannot render the text the first time it's created.
        active: function active() {
          game.time.events.add(Phaser.Timer.SECOND, fontsLoaded, this);
        },
        //  The Google Fonts we want to load (specify as many as you like in the array)
        google: {
          families: ['Gloria Hallelujah']
        }
      }; //  Load the Google WebFont Loader script

      game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    }
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/states/game-over-state.js":
/*!***************************************!*\
  !*** ./src/states/game-over-state.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gameOverState; });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ "./src/common/constants.js");
/* harmony import */ var _common_StateTransitionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/StateTransitionButton */ "./src/common/StateTransitionButton.js");
/* harmony import */ var _common_TitleText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/TitleText */ "./src/common/TitleText.js");



function gameOverState(game) {
  function create() {
    Object(_common_TitleText__WEBPACK_IMPORTED_MODULE_2__["default"])(game, game.width / 2, game.width / 2, 'Game Over');
    Object(_common_StateTransitionButton__WEBPACK_IMPORTED_MODULE_1__["default"])(game, 60, 30, '< Back', "Entry");
  }

  return {
    create: create
  };
}

/***/ }),

/***/ "./src/states/instructions-state.js":
/*!******************************************!*\
  !*** ./src/states/instructions-state.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return instructionsState; });
/* harmony import */ var _common_StateTransitionButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/StateTransitionButton */ "./src/common/StateTransitionButton.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "./src/common/constants.js");


function instructionsState(game) {
  var instructionsText = '\n\n Shrek needs more gold to buy back his swamp!\n\n' + 'The Royal Guards are paying a pretty penny in exchange\n for mythical Creatures...\n\n' + "What's an Orge to do? Go to the would-be-king to talk?\n\n...Nah rounding up these things seems way easier.\n\n";
  return {
    create: function create() {
      Object(_common_StateTransitionButton__WEBPACK_IMPORTED_MODULE_0__["default"])(game, 60, 30, '< Back', "Entry");
      var nextButton = Object(_common_StateTransitionButton__WEBPACK_IMPORTED_MODULE_0__["default"])(game, game.width - 60, 30, 'Next >', "Instructions2");
      nextButton.anchor.setTo(1, 0);
      var generatedText = game.add.text(60, 90, instructionsText, _common_constants__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyle"]);
    }
  };
}

/***/ }),

/***/ "./src/states/instructions-state2.js":
/*!*******************************************!*\
  !*** ./src/states/instructions-state2.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return instructionsState2; });
/* harmony import */ var _common_StateTransitionButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/StateTransitionButton */ "./src/common/StateTransitionButton.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "./src/common/constants.js");


function instructionsState2(game) {
  var donkeySprite;
  var frame = 0;
  var keyDescriptionMap = {
    'ARROW KEYS': 'Movement*.',
    'A': 'Attack creatures.',
    'S': 'Capture creatures.',
    'SPACEBAR': 'Open shoppe menu**.'
  };
  var instructionsText = '*The DOWN key performs a bounce only with the Swamp Bubble\n  Power-up enabled.\n**Shrek needs to be standing at the Shoppe.';
  return {
    create: function create() {
      Object(_common_StateTransitionButton__WEBPACK_IMPORTED_MODULE_0__["default"])(game, 60, 30, '< Back', "Instructions");
      var nextButton = Object(_common_StateTransitionButton__WEBPACK_IMPORTED_MODULE_0__["default"])(game, game.width - 60, 30, 'Next >', "Instructions3");
      nextButton.anchor.setTo(1, 0);
      game.add.text(60, 90, "CONTROLS:", _common_constants__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyle"]);
      Object.keys(keyDescriptionMap).forEach(function (key, i) {
        game.add.text(60, 120 + i * 18, key, _common_constants__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyle"]);
        game.add.text(240, 120 + i * 18, keyDescriptionMap[key], _common_constants__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyle"]);
      });
      game.add.text(60, 230, instructionsText, _common_constants__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyle"]);
      game.add.text(60, 320, "COMBAT:", _common_constants__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyle"]);
      var donkeyY = 350;
      donkeySprite = game.add.sprite(90, donkeyY, "donkey");
      donkeySprite.animations.add("donkeyWalk", [0, 1, 2, 0], 12, true);
      game.add.text(200, donkeyY, "Attacking creatures damages them. Critically\n" + "damaged creatures can be captured with the\n" + "net. Creatures flash when critically damaged.\n" + "Hitting a critically damaged\n" + "creature destroys it.", _common_constants__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyle"]);
    },
    update: function update() {
      ++frame;
      donkeySprite.alpha = frame % 4 >= 2 ? 0.1 : 1;

      if (frame > 2000000000) {
        frame = 0;
      }
    }
  };
}

/***/ }),

/***/ "./src/states/instructions-state3.js":
/*!*******************************************!*\
  !*** ./src/states/instructions-state3.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return instructionsState3; });
/* harmony import */ var _common_StateTransitionButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/StateTransitionButton */ "./src/common/StateTransitionButton.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "./src/common/constants.js");
/* harmony import */ var _play_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play-state */ "./src/states/play-state.js");
/* harmony import */ var _creatureConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./creatureConstants */ "./src/states/creatureConstants.js");




function instructionsState3(game) {
  return {
    create: function create() {
      Object(_common_StateTransitionButton__WEBPACK_IMPORTED_MODULE_0__["default"])(game, 60, 30, '< Back', "Instructions2");
      game.state.add('Play', Object(_play_state__WEBPACK_IMPORTED_MODULE_2__["default"])(game));
      var nextButton = Object(_common_StateTransitionButton__WEBPACK_IMPORTED_MODULE_0__["default"])(game, game.width - 60, 30, 'Next >', "Instructions4");
      nextButton.anchor.setTo(1, 0);
      var BAG_X = 60;
      var BAG_Y = 90;
      var bagSprite = game.add.sprite(BAG_X, BAG_Y, "iconBag");
      bagSprite.alpha = 0.5;
      var bagOverlaySprite = game.add.sprite(BAG_X, BAG_Y, "iconBagOverlay");
      var row = 0;
      _creatureConstants__WEBPACK_IMPORTED_MODULE_3__["default"].CREATURE_LIST.forEach(function (creatureProps) {
        var creatureName = creatureProps.name;
        var y = BAG_Y + bagSprite.height - 16 - row * 23;
        var x = BAG_X + 6;
        var icon = game.add.image(x, y, creatureName + 'Icon');
        var text = game.add.text(x + 16, y, ' x ' + 0, {
          font: 'Gloria Hallelujah',
          fill: _common_constants__WEBPACK_IMPORTED_MODULE_1__["FONT_COLOR"],
          align: 'left',
          fontSize: '12px'
        });
        text.anchor.setTo(0, 0.5);
        text.fixedToCamera = true;
        icon.anchor.setTo(0, 0.5);
        ++row;
      });
      game.add.text(180, 180, "The bag displays the number of creatures yet\nto be sold.", _common_constants__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyle"]);
      var COIN_Y = 340;
      var COIN_X = 60;
      var coinSprite = game.add.sprite(COIN_X, COIN_Y, "coin");
      coinSprite.animations.add('rotate', [0, 1, 2, 3, 4, 5, 6, 7], 14, true);
      coinSprite.animations.play('rotate');
      game.add.text(COIN_X + 20, COIN_Y, ' x ' + 0, {
        font: 'Gloria Hallelujah',
        fill: _common_constants__WEBPACK_IMPORTED_MODULE_1__["FONT_COLOR"],
        align: 'left',
        fontSize: '12px'
      });
      game.add.text(180, COIN_Y, "The coin indicates your current amount of gold.", _common_constants__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyle"]);
      var HEART_Y = 400;
      game.add.sprite(60, HEART_Y, 'heart');
      game.add.text(180, HEART_Y, "Your health is equal to the number of hearts.", _common_constants__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyle"]);
    }
  };
}

/***/ }),

/***/ "./src/states/instructions-state4.js":
/*!*******************************************!*\
  !*** ./src/states/instructions-state4.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return instructionsState3; });
/* harmony import */ var _common_StateTransitionButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/StateTransitionButton */ "./src/common/StateTransitionButton.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "./src/common/constants.js");
/* harmony import */ var _play_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play-state */ "./src/states/play-state.js");
/* harmony import */ var _creatureConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./creatureConstants */ "./src/states/creatureConstants.js");




function instructionsState3(game) {
  return {
    create: function create() {
      Object(_common_StateTransitionButton__WEBPACK_IMPORTED_MODULE_0__["default"])(game, 60, 30, '< Back', "Instructions3");
      game.state.add('Play', Object(_play_state__WEBPACK_IMPORTED_MODULE_2__["default"])(game));
      var nextButton = Object(_common_StateTransitionButton__WEBPACK_IMPORTED_MODULE_0__["default"])(game, game.width - 60, 30, 'Play >', "Play");
      nextButton.anchor.setTo(1, 0);
      var BAG_X = 60;
      var BAG_Y = 90;
      var storeSprite = game.add.sprite(BAG_X, BAG_Y, "store");
      game.add.text(200, BAG_Y + storeSprite.height / 2, "Press the space bar while standing in front\n" + "of the store to buy items and\nsell creatures.", _common_constants__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyle"]);
      var col = 0;
      var ICON_X = 90;
      var ICON_Y = BAG_Y + storeSprite.height + 80;
      Object.keys(_common_constants__WEBPACK_IMPORTED_MODULE_1__["ITEM_MAP"]).forEach(function (itemName) {
        var itemProps = _common_constants__WEBPACK_IMPORTED_MODULE_1__["ITEM_MAP"][itemName];
        var y = ICON_Y;
        var x = ICON_X + 18 * col;
        var icon = game.add.image(x, y, itemProps.icon);
        ++col;
      });
      game.add.text(200, ICON_Y, "These icons at the top of your screen\nindicate owned items. Except for Swamp Bubble,\nall items can only be bought once.", _common_constants__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyle"]);
    }
  };
}

/***/ }),

/***/ "./src/states/play-state.js":
/*!**********************************!*\
  !*** ./src/states/play-state.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return playState; });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ "./src/common/constants.js");
/* harmony import */ var _common_GenericButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/GenericButton */ "./src/common/GenericButton.js");
/* harmony import */ var _common_ItemButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/ItemButton */ "./src/common/ItemButton.js");
/* harmony import */ var _storeMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storeMenu */ "./src/states/storeMenu.js");
/* harmony import */ var _creatureConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./creatureConstants */ "./src/states/creatureConstants.js");





function playState(game) {
  var GRAVITY = 600 * 2;
  var BOUNCE = 0; // locations

  var GROUND_LEVEL;
  var HEALTH_BAR_X = 10;
  var HEALTH_BAR_Y = 10;
  var COIN_STAT_X = 224;
  var COIN_STAT_Y = 10;
  var STORE_X;
  var STORE_Y;
  var STORE_RADIUS = 180;
  var BAG_X = game.width - 82;
  var BAG_Y = 10;
  var ITEM_X = 324;
  var ITEM_Y = 10; // game stats

  var level = 0; // groups

  var cursors;
  var groundPlatform; // characters

  var shrek, swampBubble;
  var SHREK_BASE_SPEED = 150;
  var SHREK_BASE_JUMP_SPEED = 525;
  var SHREK_KNOCKBACK_TIME = 45;
  var SHREK_KNOCKBACK_SPEED = 200;
  var actionSprites = {};
  var actionArmFromRight = 14; // distance from shoulder socket to rightside of sprite frame

  var actionSpriteProps = {
    'chop': {
      speed: 30,
      collisionCheckFunction: function collisionCheckFunction() {
        checkChopCollision(false);
      }
    },
    'net': {
      speed: 12,
      collisionCheckFunction: checkNetCollision
    },
    'bigfist': {
      speed: 18,
      collisionCheckFunction: function collisionCheckFunction() {
        checkChopCollision(true);
      }
    }
  };
  var coinIcon, coinText, heartGroup, iconBag;
  var creatureCountText = {};
  var isShrekActing = false;
  var doubleJumped = false;
  var jumpKeyWasPressed = false;
  var storeUI;
  var choiceLabel;
  var enemies = [];
  var enemiesSold = 0;
  var timeSinceEnemySpawn = {};
  var CAPTURABLE_DURATION = 360;
  var storePurchaseSound;
  var storePurchaseDenied;
  var netCaptureSound;
  var bubbleGetSound;
  var bubbleBounceSound;
  var bubblePopSound;
  var fartSound;
  var hitSound;
  var hitBigSound;
  var loserFartSound; // flags

  var isShrekFacingLeft = true;
  var bouncing = false;
  var isStoreOpen = false; // player stats

  var gold = 0;
  var inventory = {};
  var inventoryDisplay = {};
  var capturedCreatures = [];
  var creatureCounts = {};
  var health = 10; // keys

  var SPACE_BAR;
  var ACTION_KEY;
  var NET_KEY;
  var emitterManager;
  var fairieDustEmitter;

  function preload() {}

  function create() {
    GROUND_LEVEL = game.world.height - 64;
    STORE_X = 640 * 5 + 450;
    STORE_Y = GROUND_LEVEL - 64;
    game.world.setBounds(0, 0, 6400, 512);
    game.stage.disableVisibilityChange = true;
    cursors = game.input.keyboard.createCursorKeys();
    addBackgroundScenery();
    level = getLevelFromEnemiesSold();
    addEnemies();
    addShrek();
    addActionSprites(); //  We're going to be using physics, so enable the Arcade Physics system

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.camera.follow(shrek, Phaser.Camera.FOLLOW_LOCKON);
    _creatureConstants__WEBPACK_IMPORTED_MODULE_4__["default"].CREATURE_LIST.forEach(function (creatureProps) {
      creatureCounts[creatureProps.name] = 0;
    }); // addForegroundScenery();

    addStatOverlay();
    SPACE_BAR = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    SPACE_BAR.onUp.add(toggleStore, this);
    ACTION_KEY = game.input.keyboard.addKey(Phaser.Keyboard.A);
    ACTION_KEY.onUp.add(function () {
      if (inventory["Big Onion"] === 1) animateAction('bigfist');else animateAction('chop');
    }, this);
    NET_KEY = game.input.keyboard.addKey(Phaser.Keyboard.S);
    NET_KEY.onUp.add(function () {
      animateAction('net');
    }, this);
    createInventory();
    storePurchaseSound = game.add.audio("purchase");
    storePurchaseDenied = game.add.audio("denied");
    netCaptureSound = game.add.audio("net");
    bubbleGetSound = game.add.audio("bubbleGet");
    bubbleBounceSound = game.add.audio("bubbleBounce");
    bubblePopSound = game.add.audio("bubblePop");
    fartSound = game.add.audio("fart");
    hitSound = game.add.audio("hit");
    hitBigSound = game.add.audio("hitBig");
    loserFartSound = game.add.audio("loserFart");
    initSpawnTimeMap();
  }

  function update() {
    level = getLevelFromEnemiesSold();
    updateShrek();
    updateEnemies();
    updateShrekAction();
    updateStatOverlay();
  }

  function updateShrekAction() {
    Object.keys(actionSpriteProps).forEach(function (actionName) {
      var sprite = actionSprites[actionName].sprite;

      if (sprite.alpha > 0.5) {
        actionSpriteProps[actionName].collisionCheckFunction();
      }
    });
  }

  function createInventory() {
    var items = Object.keys(_common_constants__WEBPACK_IMPORTED_MODULE_0__["ITEM_MAP"]);

    for (var i = 0; i < items.length; i++) {
      inventory[items[i]] = 0;
    }
  }

  function addBackgroundScenery() {
    //  The groundPlatform group contains the ground and the 2 ledges we can jump on
    groundPlatform = game.add.group(); //  We will enable physics for any object that is created in this group

    if (groundPlatform) {
      groundPlatform.enableBody = true;
    } // Here we create the ground.


    for (var i = 0; i < 65; ++i) {
      var x = i * 256;
      var y = GROUND_LEVEL;
      var ground = groundPlatform.create(x, y, 'ground');
      game.add.sprite(x, y - 32, 'groundTop');
      ground.body.immovable = true;
    } // add the forest background


    for (var i = 0; i < 10; ++i) {
      var x = i * 640;
      var y = game.world.height - 64 - 12 - 320;
      game.add.sprite(x, 0, 'sky');

      if (i == 5) {
        game.add.sprite(x, y, 'storeBackground');
      } else {
        game.add.sprite(x, y, 'forestBackground');
      }
    }

    var store = game.add.sprite(STORE_X, STORE_Y, "store");
    store.scale.setTo(2);
    store.anchor.setTo(0.5, 0.5);
  }

  function addShrek() {
    shrek = game.add.sprite(0, 0, 'shrek');
    shrek.anchor.setTo(0.5, 1);
    shrek.x = STORE_X;
    shrek.y = GROUND_LEVEL;
    game.physics.arcade.enable(shrek);
    shrek.body.bounce.y = BOUNCE;
    shrek.body.gravity.y = GRAVITY;
    shrek.body.collideWorldBounds = true;
    shrek.animations.add('shrekWalk', [0, 1, 2], 10, false);
    shrek.hitTimer = 0;
    addSwampBubble();
  }

  function addSwampBubble() {
    swampBubble = game.add.image(shrek.x, shrek.y, "swampBubble");
    swampBubble.alpha = 0;
    swampBubble.anchor.setTo(0.5, 1);
  }

  function addActionSprites() {
    var _this = this;

    Object.keys(actionSpriteProps).forEach(function (spriteName) {
      var spriteProps = actionSpriteProps[spriteName];
      var actionSprite = game.add.sprite(0, 0, spriteName);
      actionSprite.alpha = 0;
      var animationName = spriteName + 'Anim';
      var actionAnim = actionSprite.animations.add(animationName, [0, 1, 2, 2, 2], spriteProps.speed, false);
      actionAnim.onComplete.add(function () {
        actionSprite.alpha = 0;
        actionSprites[spriteName].collidedEnemies = [];
      }, _this);
      actionSprites[spriteName] = {
        sprite: actionSprite,
        animationName: animationName,
        name: spriteName,
        collidedEnemies: []
      };
    });
  }

  function addEnemies() {
    for (var i = 0; i < 10; i++) {
      spawnEnemy(_creatureConstants__WEBPACK_IMPORTED_MODULE_4__["default"].FAIRY);
      spawnEnemy(_creatureConstants__WEBPACK_IMPORTED_MODULE_4__["default"].IMP);
    }
  }

  function initSpawnTimeMap() {
    _creatureConstants__WEBPACK_IMPORTED_MODULE_4__["default"].CREATURE_LIST.forEach(function (creatureProps) {
      timeSinceEnemySpawn[creatureProps.name] = 0;
    });
  }

  function spawnEnemy(enemyTemplate) {
    var enemy = game.add.sprite(0, 0, enemyTemplate.name);
    enemy.anchor.setTo(0.5, 1);
    enemy.x = randomSpawnX(enemyTemplate);
    enemy.y = GROUND_LEVEL - enemyTemplate.altitude;
    game.physics.arcade.enable(enemy);
    enemy.body.bounce.y = BOUNCE;
    enemy.body.gravity.y = enemyTemplate.flier ? 0 : GRAVITY;
    enemy.body.collideWorldBounds = true;
    enemy.animations.add(enemyTemplate.name + 'Walk', [0, 1, 2, 0], 12, false);
    enemy.direction = -1; // custom state

    enemy.health = enemyTemplate.baseHealth + level;
    enemy.name = enemyTemplate.name;
    enemy.template = enemyTemplate;
    enemy.pauseTimer = 0;
    enemy.capturableTimer = 0;
    enemies.push(enemy);
  }

  function randomSpawnX(enemyTemplate) {
    var rand = Math.random();
    var denormalized = rand * (game.world.width / 2 - STORE_RADIUS - enemyTemplate.minDistance - 250);
    var spawnX = rand > 0.5 ? denormalized : game.world.width - denormalized;
    return spawnX;
  }

  function addForegroundScenery() {
    for (var i = 0; i < 12; ++i) {
      var rand = Math.random();
      var imageName = void 0;

      if (rand < 0.33) {
        imageName = 'tree1';
      } else if (rand < 0.66) {
        imageName = 'tree2';
      } else {
        imageName = 'tree3';
      }

      var n = new Date().getMilliseconds();
      var treeX = void 0,
          treeY = void 0;
      treeX = i * 6400 / 40;

      if (n % 2 == 0) {
        treeX -= 13;
        treeY = GROUND_LEVEL + 35;
      } else {
        treeX += 13;
        treeY = GROUND_LEVEL + 45;
      }

      var treeImage = game.add.image(treeX, treeY, imageName);
      treeImage.alpha = 0.75;
      treeImage.anchor.setTo(0.5, 1);
    }

    game.add.sprite(150, game.world.height - 215, 'tree1');
    game.add.sprite(400, game.world.height - 115, "berryBush");
    game.add.sprite(500, game.world.height - 270, 'tree2');
    game.add.sprite(800, game.world.height - 284, 'tree3');
    game.add.sprite(100, game.world.height - 125, "berryBush");
  }

  function toggleStore() {
    if (isStoreOpen) {
      storeUI.destroy();
      isStoreOpen = false;
      return;
    }

    if (shrek.x <= STORE_X + STORE_RADIUS && shrek.x >= STORE_X - STORE_RADIUS && !isStoreOpen) {
      createStore();
      isStoreOpen = true;
    }
  }

  function createStore() {
    storeUI = game.add.group(); // Then add the menu

    var menuContainer = Object(_storeMenu__WEBPACK_IMPORTED_MODULE_3__["default"])(game);
    storeUI.add(menuContainer);
    var sellButtonCoords = camera_izeCoordinates(game.width - _common_constants__WEBPACK_IMPORTED_MODULE_0__["MARGIN"] * 2, game.height - _common_constants__WEBPACK_IMPORTED_MODULE_0__["MARGIN"] * 2);
    var sellButton = Object(_common_GenericButton__WEBPACK_IMPORTED_MODULE_1__["default"])(game, sellButtonCoords.x, sellButtonCoords.y, 'SELL CREATURES', function () {
      capturedCreatures.forEach(function (creature, i) {
        var creatureName = creature.name;
        gold += creature.price;
        enemiesSold++;
        delete capturedCreatures[i];
        storePurchaseSound.play();
        creatureCounts[creatureName] = 0;
      });
      capturedCreatures = [];
    });
    sellButton.anchor.setTo(1, 0.5);
    storeUI.add(sellButton);
    var closeButtonCoords = camera_izeCoordinates(game.width - _common_constants__WEBPACK_IMPORTED_MODULE_0__["MARGIN"] * 2, _common_constants__WEBPACK_IMPORTED_MODULE_0__["MARGIN"] * 2);
    var closeButton = Object(_common_GenericButton__WEBPACK_IMPORTED_MODULE_1__["default"])(game, closeButtonCoords.x, closeButtonCoords.y - 32, 'X', function () {
      storeUI.destroy();
      isStoreOpen = false;
    });
    closeButton.anchor.setTo(0, 0);
    storeUI.add(closeButton);
    var y = _common_constants__WEBPACK_IMPORTED_MODULE_0__["MARGIN"];
    var items = Object.keys(_common_constants__WEBPACK_IMPORTED_MODULE_0__["ITEM_MAP"]);
    var coords = camera_izeCoordinates(_common_constants__WEBPACK_IMPORTED_MODULE_0__["MARGIN"] * 2, y);

    var _loop = function _loop() {
      var itemName = items[i];
      var itemDesc = _common_constants__WEBPACK_IMPORTED_MODULE_0__["ITEM_MAP"][items[i]].descr;
      var itemCost = _common_constants__WEBPACK_IMPORTED_MODULE_0__["ITEM_MAP"][items[i]].cost;
      var itemButton = Object(_common_ItemButton__WEBPACK_IMPORTED_MODULE_2__["default"])(game, coords.x, coords.y, itemName, function () {
        // ensure player has enough currency to buy this item
        if (validatePurchase(_common_constants__WEBPACK_IMPORTED_MODULE_0__["ITEM_MAP"][itemName], itemName)) {
          inventory[itemName] += 1;
          gold -= _common_constants__WEBPACK_IMPORTED_MODULE_0__["ITEM_MAP"][itemName].cost;

          if (itemName === "Swamp Bubble") {
            bubbleGetSound.play();
          } else {
            storePurchaseSound.play();
          }
        } else {
          storePurchaseDenied.play();
        }
      });
      storeUI.add(itemButton);
      var itemDescr = game.add.text(coords.x + 25, coords.y + 45, itemDesc + " ($" + itemCost + ")", _common_constants__WEBPACK_IMPORTED_MODULE_0__["DescriptionStyle"]);
      storeUI.add(itemDescr);
      coords.y += _common_constants__WEBPACK_IMPORTED_MODULE_0__["MARGIN"] * 3;
    };

    for (var i = 0; i < items.length; ++i) {
      _loop();
    }
  }

  function validatePurchase(item, itemName) {
    return item && item.cost <= gold && inventory[itemName] === 0;
  }

  function addStatOverlay() {
    heartGroup = game.add.group(); // add coins

    var coinCoords = camera_izeCoordinates(COIN_STAT_X, COIN_STAT_Y);
    coinIcon = game.add.sprite(coinCoords.x, coinCoords.y, 'coin');
    coinIcon.animations.add('rotate', [0, 1, 2, 3, 4, 5, 6, 7], 14, true);
    coinIcon.animations.play('rotate');
    coinIcon.anchor.setTo(0, 0);
    coinIcon.fixedToCamera = true;
    coinText = game.add.text(coinCoords.x + 20, coinCoords.y, ' x ' + gold, {
      font: 'Gloria Hallelujah',
      fill: _common_constants__WEBPACK_IMPORTED_MODULE_0__["FONT_COLOR"],
      align: 'left',
      fontSize: '12px'
    });
    coinText.fixedToCamera = true; // add hearts

    for (var i = 0; i < health; ++i) {
      var coords = camera_izeCoordinates(HEALTH_BAR_X + 18 * i, HEALTH_BAR_Y);
      var heart = game.add.sprite(coords.x, coords.y, 'heart');
      heart.fixedToCamera = true;
      heart.anchor.set(0, 0);
      heartGroup.add(heart);
    } // add captured creatures


    var bagCoords = camera_izeCoordinates(BAG_X, BAG_Y);
    iconBag = game.add.image(bagCoords.x, bagCoords.y, "iconBag");
    iconBag.anchor.setTo(0, 0);
    iconBag.fixedToCamera = true;
    iconBag.alpha = 0.7;
    var iconBagOverlay = game.add.image(bagCoords.x, bagCoords.y, "iconBagOverlay");
    iconBagOverlay.anchor.setTo(0, 0);
    iconBagOverlay.fixedToCamera = true;
    var row = 0;
    _creatureConstants__WEBPACK_IMPORTED_MODULE_4__["default"].CREATURE_LIST.forEach(function (creatureProps) {
      var creatureName = creatureProps.name;
      var y = BAG_Y + iconBag.height - 16 - row * 23;
      var x = BAG_X + 6;
      var icon = game.add.image(x, y, creatureName + 'Icon');
      var text = game.add.text(x + 16, y, ' x ' + creatureCounts[creatureName], {
        font: 'Gloria Hallelujah',
        fill: _common_constants__WEBPACK_IMPORTED_MODULE_0__["FONT_COLOR"],
        align: 'left',
        fontSize: '12px'
      });
      text.anchor.setTo(0, 0.5);
      text.fixedToCamera = true;
      creatureCountText[creatureName] = text;
      icon.fixedToCamera = true;
      icon.anchor.setTo(0, 0.5);
      ++row;
    });
  }

  function updateStatOverlay() {
    coinText.x = COIN_STAT_X + 20;
    coinText.y = COIN_STAT_Y.y;
    coinText.text = ' x ' + gold;

    for (var i = 0; i < heartGroup.children.length; ++i) {
      var heart = heartGroup.getChildAt(i);

      if (i < health) {
        heart.visible = true;
      } else {
        heart.visible = false;
      }
    } // creature count text


    Object.keys(creatureCountText).forEach(function (creatureName) {
      creatureCountText[creatureName].text = ' x ' + creatureCounts[creatureName];
    }); // items

    Object.keys(inventory).forEach(function (itemName) {
      if (inventory[itemName] < 1 || inventoryDisplay[itemName] || itemName === "Swamp Bubble") {
        return;
      }

      var col = Object.keys(inventoryDisplay).length;
      var itemIcon = game.add.image(ITEM_X + 18 * col, ITEM_Y, _common_constants__WEBPACK_IMPORTED_MODULE_0__["ITEM_MAP"][itemName].icon);
      itemIcon.fixedToCamera = true;
      itemIcon.anchor.setTo(0, 0);
      inventoryDisplay[itemName] = itemIcon;
    });
  }

  function updateShrek() {
    if (inventory["Swamp Bubble"] > 0) {
      swampBubble.alpha = 0.6;
    } else {
      swampBubble.alpha = 0;
    }

    if (inventory["Fairie Dust"] && !fairieDustEmitter) {
      fairieDustEmitter = game.add.emitter(shrek.x, shrek.y - 50, 200, 200);
      fairieDustEmitter.makeParticles("fairieDust");
      fairieDustEmitter.flow(1000, 300, 1, -1);
      fairieDustEmitter.alpha = .35;
    }

    if (isStoreOpen) {
      game.physics.arcade.collide(shrek, groundPlatform);
      shrek.body.velocity.x = 0;
      return;
    }

    reanchorActionSprites();

    if (shrek.hitTimer > 0) {
      game.physics.arcade.collide(shrek, groundPlatform);
      updateKnockedBackSprite(shrek);
    } else {
      updateShrekNormal();
    }

    swampBubble.x = shrek.x;
    swampBubble.y = shrek.y;

    if (fairieDustEmitter) {
      fairieDustEmitter.x = shrek.x;
      fairieDustEmitter.y = shrek.y - 75;
    }
  }

  function getShrekRunSpeed() {
    return inventory["Speed"] ? SHREK_BASE_SPEED * 2 : SHREK_BASE_SPEED;
  }

  function updateShrekNormal() {
    var _this2 = this;

    var isOnGround = game.physics.arcade.collide(shrek, groundPlatform); //  Reset the players velocity (movement)

    shrek.body.velocity.x = 0;
    shrek.body.bounce.y = bouncing ? 0.7 : BOUNCE;

    if (cursors.left.isDown) {
      if (!isShrekFacingLeft) {
        flipShrek(); // flips shrek about the y axis

        isShrekFacingLeft = true;
      } //  Move to the left


      shrek.body.velocity.x = -getShrekRunSpeed();
      shrek.animations.play('shrekWalk');
    } else if (cursors.right.isDown) {
      if (isShrekFacingLeft) {
        flipShrek(); // flips shrek about the y axis

        isShrekFacingLeft = false;
      } //  Move to the right


      shrek.body.velocity.x = getShrekRunSpeed();
      shrek.animations.play('shrekWalk');
    } else {
      shrek.frame = 0;
    } //  Allow the shrek to jump if they are touching the ground.


    if (cursors.up.isDown) {
      if (shrek.body.touching.down && isOnGround) {
        shrek.body.velocity.y = -SHREK_BASE_JUMP_SPEED;
      } else if (!doubleJumped && !jumpKeyWasPressed && inventory["Fart in a Jar"] > 0) {
        shrek.body.velocity.y = -SHREK_BASE_JUMP_SPEED;
        doubleJumped = true;
        fartSound.play();
      }

      jumpKeyWasPressed = true;
    } else {
      jumpKeyWasPressed = false;
    } // bounce logic


    if (isOnGround) {
      if (bouncing) {
        bubbleBounceSound.play();
      }

      bouncing = false;
      doubleJumped = false;
    } else if (inventory["Fairie Dust"]) {
      shrek.body.gravity.y = GRAVITY / 2;
    }

    var currentDown = cursors.down.isDown;

    if (currentDown && !lastDown && !isOnGround && bouncing === false && inventory["Swamp Bubble"] === 1) {
      shrek.body.velocity.y = 900 * 1.25;
      bouncing = true;
    }

    enemies.forEach(function (enemy) {
      game.physics.arcade.overlap(shrek, enemy, onShrekHit, null, _this2);
    });
    lastDown = currentDown;
  }

  var lastDown = false;

  function updateKnockedBackSprite(sprite) {
    sprite.hitTimer--;
    sprite.tint = sprite.hitTimer % 4 >= 2 ? '0xff6666' : '0xffffff';
  }

  function updateCapturableEnemy(enemy) {
    enemy.capturableTimer--;
    enemy.alpha = enemy.capturableTimer % 4 >= 2 ? 0.1 : 1;
  }

  function updateEnemies() {
    Object.keys(timeSinceEnemySpawn).forEach(function (enemyName) {
      var timeSinceSpawn = timeSinceEnemySpawn[enemyName]++;
      var enemyProps = _creatureConstants__WEBPACK_IMPORTED_MODULE_4__["default"].CREATURE_NAME_MAP[enemyName];

      if (timeSinceSpawn > enemyProps.baseSpawnRate - 360 * level) {
        spawnEnemy(enemyProps);
        timeSinceEnemySpawn[enemyName] = 0;
      }
    });
    enemies.forEach(function (enemy) {
      var isOnGround = game.physics.arcade.collide(enemy, groundPlatform);

      if (enemy.hitTimer > 0) {
        updateKnockedBackSprite(enemy);
        return;
      }

      if (enemy.health < 0) {
        destroyEnemy(enemy);
        return;
      }

      if (enemy.health === 0) {
        updateCapturableEnemy(enemy); // enemies are capturable only for a limited duration

        if (enemy.capturableTimer === 0) {
          enemy.health = 1;
          enemy.alpha = 1;
        }
      }

      if (enemy.pauseTimer > 0) {
        enemy.pauseTimer--;
        return;
      }

      var speed = getEnemySpeedFromLevel(enemy.template);

      if (enemy.health === 0) {
        speed /= 2;
      }

      if (enemy.x > STORE_X - STORE_RADIUS && enemy.x < STORE_X) {
        enemy.body.velocity.x = -speed;

        if (enemy.direction === 1) {
          flipSpriteDirection(enemy);
        }

        enemy.direction = -1;
        return;
      } else if (enemy.x < STORE_X + STORE_RADIUS && enemy.x > STORE_X) {
        if (enemy.direction === -1) {
          flipSpriteDirection(enemy);
        }

        enemy.body.velocity.x = speed;
        enemy.direction = 1;
        return;
      }

      enemy.body.velocity.x = speed * enemy.direction;
      enemy.animations.play(enemy.name + 'Walk');

      if (Math.random() < enemy.template.turnProb) {
        enemy.direction *= -1;
        flipSpriteDirection(enemy);
      } //  Allow the enemy to jump if they are touching the ground.


      if (enemy.body.touching.down && isOnGround) {
        if (Math.random() * 1000 > 992) {
          enemy.body.velocity.y = -SHREK_BASE_JUMP_SPEED;
        }
      }
    });
  }

  function reanchorActionSprites() {
    Object.keys(actionSprites).forEach(function (actionSpriteName) {
      return anchorActionSprite(actionSprites[actionSpriteName].sprite);
    });
  }

  function onShrekHit(shrek, enemy) {
    enemy.body.velocity.x = 0;
    enemy.body.velocity.y = 0;
    enemy.pauseTimer = SHREK_KNOCKBACK_TIME / 2;
    knockbackSprite(shrek, enemy);

    if (inventory["Swamp Bubble"] > 0) {
      inventory["Swamp Bubble"] = inventory["Swamp Bubble"] - 1;
      bubblePopSound.play();
      return;
    }

    health--;

    if (health < 1) {
      loserFartSound.play();
      game.state.start("GameOver");
    }
  }

  function knockbackSprite(sprite, adversary) {
    sprite.hitTimer = SHREK_KNOCKBACK_TIME;
    var template = sprite.template || {};
    var kbX = template.knockbackVelocityX;
    var kbY = template.knockbackVelocityY;

    if (adversary === shrek && inventory["Big Onion"] === 1) {
      kbX *= 1;
      kbY *= 5;
    }

    var velocityX = kbX !== undefined ? kbX : SHREK_KNOCKBACK_SPEED;
    var velocityY = kbY !== undefined ? kbY : -SHREK_KNOCKBACK_SPEED;
    sprite.body.velocity.x = adversary.body.x > sprite.body.x ? -velocityX : velocityX;
    sprite.body.velocity.y = velocityY;
  }

  function animateAction(actionSpriteName) {
    if (isShrekActing) {
      return;
    }

    isShrekActing = true;
    var actionSprite = actionSprites[actionSpriteName].sprite;
    var animationName = actionSprites[actionSpriteName].animationName;
    actionSprite.alpha = 1;
    var frameWidth = actionSprite.animations.currentFrame.width;
    var xPercent = (frameWidth - actionArmFromRight) / frameWidth;
    actionSprite.anchor.setTo(xPercent, 0.5);
    anchorActionSprite(actionSprite);
    var anim = actionSprite.animations.play(animationName);
    anim.onComplete.add(function () {
      isShrekActing = false;
    });
  } // flips sprite about the y-axis


  function flipSpriteDirection(sprite) {
    sprite.scale.x *= -1;
  }

  function flipShrek() {
    flipSpriteDirection(shrek);
    Object.keys(actionSprites).forEach(function (actionSpriteName) {
      return flipSpriteDirection(actionSprites[actionSpriteName].sprite);
    });
  }

  function anchorActionSprite(actionSprite) {
    var armAnchor = getShrekActionAnchor();
    actionSprite.x = armAnchor.anchorX;
    actionSprite.y = armAnchor.anchorY;
  }

  function getShrekActionAnchor() {
    var anchorX = isShrekFacingLeft ? shrek.x - 17 : shrek.x + 17;
    var anchorY = shrek.y - 52;
    return {
      anchorX: anchorX,
      anchorY: anchorY
    };
  }

  function camera_izeCoordinates(x, y) {
    return {
      x: game.camera.x + x,
      y: game.camera.y + y
    };
  }

  function getEnemySpeedFromLevel(enemyTemplate) {
    return enemyTemplate.baseSpeed + 20 * level;
  }

  function checkNetCollision() {
    var net = actionSprites['net'];
    var netSprite = net.sprite;
    enemies.forEach(function (enemy) {
      if (net.collidedEnemies.length >= 1 || Object.keys(capturedCreatures).includes(enemy.name) || enemy.health > 0) {
        return;
      }

      var foundCollision = Phaser.Rectangle.intersects(enemy.getBounds(), netSprite.getBounds());

      if (foundCollision) {
        net.collidedEnemies.push(enemy);
        creatureCounts[enemy.name] += 1;
        capturedCreatures.push(enemy.template);
        destroyEnemy(enemy);
        netCaptureSound.play();
      }
    });
  }

  var checkChopCollision = function checkChopCollision(isBigFist) {
    var chop = isBigFist ? actionSprites['bigfist'] : actionSprites['chop'];
    var chopSprite = chop.sprite;
    enemies.forEach(function (enemy) {
      if (chop.collidedEnemies.includes(enemy)) {
        return;
      }

      var foundCollision = Phaser.Rectangle.intersects(enemy.getBounds(), chopSprite.getBounds());

      if (foundCollision) {
        isBigFist ? hitBigSound.play() : hitSound.play();
        chop.collidedEnemies.push(enemy);
        var hadZeroHealth = enemy.health === 0;
        var damageDealt = isBigFist ? 4 : 1;
        enemy.health -= damageDealt;
        knockbackSprite(enemy, shrek); // at least one hit needs to make enemy capturable

        if (!hadZeroHealth && enemy.health < 0) {
          enemy.health = 0;
        }

        if (enemy.health === 0) {
          enemy.capturableTimer = CAPTURABLE_DURATION * (isBigFist ? 3 : 1);
        }
      }
    });
  };

  function destroyEnemy(enemy) {
    enemies.splice(enemies.indexOf(enemy), 1);
    enemy.destroy();
  }

  function getLevelFromEnemiesSold() {
    if (enemiesSold < 10) {
      return 0;
    } else if (enemiesSold < 20) {
      return 1;
    } else if (enemiesSold < 30) {
      return 2;
    } else if (enemiesSold < 50) {
      return 3;
    } else {
      return 4;
    }
  }

  return {
    preload: preload,
    create: create,
    update: update
  };
}

/***/ }),

/***/ "./src/states/storeMenu.js":
/*!*********************************!*\
  !*** ./src/states/storeMenu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StoreMenu; });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ "./src/common/constants.js");

function StoreMenu(game) {
  var menuContainer;
  var width = game.width - _common_constants__WEBPACK_IMPORTED_MODULE_0__["MARGIN"] * 2; // example;

  var height = game.height - _common_constants__WEBPACK_IMPORTED_MODULE_0__["MARGIN"] * 2; // example;

  var bmd = game.add.bitmapData(width, height);
  bmd.ctx.beginPath();
  bmd.ctx.rect(0, 0, width, height);
  bmd.ctx.fillStyle = '#000000';
  bmd.ctx.fill();
  menuContainer = game.add.sprite(game.camera.x + game.width / 2, game.camera.y + game.height / 2, bmd);
  menuContainer.anchor.setTo(0.5, 0.5);
  menuContainer.bringToTop();
  menuContainer.alpha = 0.75;
  return menuContainer;
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map