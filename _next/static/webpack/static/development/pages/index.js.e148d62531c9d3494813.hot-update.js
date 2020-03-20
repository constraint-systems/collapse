webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/home/grant/s/cs/spiral/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



var sp = 16; // let cols = 40
// let rows = 30
// let cells = cols * rows

function spx(array) {
  return array.map(function (v) {
    return v * sp;
  });
}

var Line = function Line() {
  return __jsx("div", {
    style: {
      height: sp,
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  });
};

var Space = function Space() {
  return __jsx("div", {
    style: {
      width: sp / 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  });
};

var Button = function Button(_ref) {
  var label = _ref.label,
      clearer = _ref.clearer,
      trigger = _ref.trigger,
      text_label = _ref.text_label,
      press_gates = _ref.press_gates,
      custom_style = _ref.custom_style;
  var button_style = {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: 'none',
    padding: 0,
    margin: 0,
    width: sp,
    background: 'black',
    color: 'white',
    display: 'block'
  };

  if (custom_style !== undefined) {
    button_style = Object.assign(button_style, custom_style);
  }

  return __jsx("div", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("button", {
    style: button_style,
    onMouseDown: function onMouseDown(e) {
      trigger();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, label), text_label !== undefined ? __jsx("div", {
    style: {
      display: 'flex',
      cursor: 'default'
    },
    onMouseDown: function onMouseDown(e) {
      trigger();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, text_label)) : null);
};

var RepeatButton = function RepeatButton(_ref2) {
  var label = _ref2.label,
      clearer = _ref2.clearer,
      trigger = _ref2.trigger,
      text_label = _ref2.text_label,
      press_gates = _ref2.press_gates,
      custom_style = _ref2.custom_style;
  var repeat_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var start_gate = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(false);
  var touch_mode = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(false);
  var button_style = {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: 'none',
    padding: 0,
    margin: 0,
    width: sp,
    background: 'black',
    color: 'white',
    display: 'block'
  };

  if (custom_style !== undefined) {
    button_style = Object.assign(button_style, custom_style);
  }

  return __jsx("div", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("button", {
    style: button_style,
    onTouchStart: function onTouchStart(e) {
      touch_mode.current = true;
      press_gates.current = true;
      trigger();
      setTimeout(function () {
        if (press_gates.current) {
          repeat_ref.current = setInterval(function () {
            trigger();
          }, 100);
          clearer(repeat_ref.current);
        }
      }, 400);
    },
    onTouchEnd: function onTouchEnd(e) {
      setTimeout(function () {
        touch_mode.current = false;
      }, 400);
      e.preventDefault();
    },
    onMouseDown: function onMouseDown(e) {
      if (!touch_mode.current) {
        press_gates.current = true;
        trigger();
        setTimeout(function () {
          if (press_gates.current) {
            repeat_ref.current = setInterval(function () {
              trigger();
            }, 100);
            clearer(repeat_ref.current);
          }
        }, 400);
      }
    },
    onMouseUp: function onMouseUp(e) {
      if (!touch_mode.current) {
        clearInterval(repeat_ref.current);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, label), text_label !== undefined ? __jsx("div", {
    style: {
      display: 'flex',
      cursor: 'default'
    },
    onMouseDown: function onMouseDown(e) {
      repeat_ref.current = setInterval(function () {
        trigger();
      }, 200);
      clearer(repeat_ref.current);
      trigger();
    },
    onMouseUp: function onMouseUp(e) {
      clearInterval(repeat_ref.current);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, text_label)) : null);
};

var Home = function Home() {
  var cref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var clear_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(false);
  var state = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])({});
  var km_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])({});
  var slider_click_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var slider_touch_mode = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(false);
  var press_gates = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(false);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      width = _useState[0],
      setWidth = _useState[1];

  var file_input = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  function loadImage(src) {
    var c = cref.current;
    var cx = c.getContext('2d');
    var img = document.createElement('img');

    img.onload = function () {
      var adj_width = Math.min(img.width, Math.floor(window.innerWidth - sp * 2) - sp / 2);
      var dsp = sp;
      var snapw = Math.round(adj_width / dsp) * dsp;
      var snapr = snapw / img.width;
      var snaph = Math.round(img.height * snapr / dsp) * dsp;
      img.width = snapw;
      img.height = snaph;
      setWidth(img.width);
      c.width = img.width;
      c.height = img.height;
      var cols = img.width / sp;
      var rows = img.height / sp;
      var cells = cols * rows; // preserve dimensions

      var t_img = document.createElement('canvas');
      t_img.width = c.width;
      t_img.height = c.height;
      var t_imgx = t_img.getContext('2d');
      t_imgx.drawImage(img, 0, 0, c.width, c.height);
      img = t_img; // draw original image
      // cx.drawImage(img, 0, 0, c.width, c.height)
      // store original image

      var imc = document.createElement('canvas');
      imc.width = c.width;
      imc.height = c.height;
      var imx = imc.getContext('2d');
      imx.drawImage(img, 0, 0, c.width, c.height); // cut up original image

      var tiles = [];

      for (var i = 0; i < cells; i++) {
        var t = document.createElement('canvas');
        t.width = sp;
        t.height = sp;
        var tx = t.getContext('2d');
        var x = i % cols;
        var y = Math.floor(i / cols);
        tx.drawImage(imc, x * sp, y * sp, sp, sp, 0, 0, sp, sp);
        var complexity = t.toDataURL().length / (sp * sp);
        tiles.push({
          t: t,
          c: complexity,
          x: x,
          y: y,
          i: i
        });
      }

      tiles = lodash__WEBPACK_IMPORTED_MODULE_5__["sortBy"](tiles, 'c'); // grid with coordinates

      var grid = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(rows)).map(function (n, y) {
        return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(cols)).map(function (n, x) {
          var d = Math.sqrt(Math.pow(x - cols / 2, 2) + Math.pow(y - rows / 2, 2)).toFixed(8);
          return [x, y, d];
        });
      }); // spiral order for iteration


      var ordered = lodash__WEBPACK_IMPORTED_MODULE_5__["flatten"](grid);

      ordered.sort(function (a, b) {
        return a[2] - b[2];
      }); // spiral test
      // for (let i = 0; i < 800; i++) {
      //   let [x, y] = ordered[i]
      //   cx.fillRect(...spx([x, y, 1, 1]))
      // }

      var threshold = cells - 300;
      state.current.threshold = threshold;
      state.current.cells = cells;
      state.current.ordered = ordered;
      state.current.grid = grid;
      state.current.cols = cols;
      state.current.rows = rows;
      state.current.imc = imc;
      state.current.tiles = tiles;
      render(); // cx.fillStyle = 'red'
      // cx.fillRect((cols / 2) * sp - 1, 0, 2, c.height)
      // cx.fillRect(0, (rows / 2) * sp - 1, c.width, 2)
      // cx.fillStyle = 'black'
    };

    img.src = src;
  }

  function render() {
    clear_ref.current = false;
    var c = cref.current;
    var cx = c.getContext('2d');
    var _state$current = state.current,
        cells = _state$current.cells,
        threshold = _state$current.threshold,
        ordered = _state$current.ordered,
        grid = _state$current.grid,
        cols = _state$current.cols,
        rows = _state$current.rows,
        imc = _state$current.imc,
        tiles = _state$current.tiles; // active

    var active = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(rows)).map(function (n, y) {
      return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(cols)).map(function (n, x) {
        return [x, y, false];
      });
    });

    for (var i = threshold; i < cells; i++) {
      var tile = tiles[i];
      var x = tile.x;
      var y = tile.y;
      active[y][x][2] = true;
    }

    console.log(active);

    function getFree(x, y) {
      // it it off map it is undefined
      if (active[y] === undefined) return null;
      if (active[y][x] === undefined) return null;
      var check = active[y][x]; // false means empty

      if (check[2] === false) {
        return grid[y][x];
      } else {
        return null;
      } // return if false
      // if (coords) {
      //   let [gx, gy] = coords
      // }

    }

    function getMove(x, y) {
      var raw = [[0, -1], [1, -1], [1, 1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1]].map(function (v) {
        return getFree(x + v[0], y + v[1]);
      });
      var self = grid[y][x];
      var filtered = raw.filter(function (v) {
        return v !== null;
      });
      var distances = filtered.map(function (v) {
        return parseFloat(v[2]);
      });

      var min_distance = lodash__WEBPACK_IMPORTED_MODULE_5__["min"](distances);

      if (min_distance < self[2]) {
        var min_i = distances.indexOf(min_distance);
        return filtered[min_i];
      } else {
        return null;
      }
    }

    function _render() {
      var least_active = true;
      var moved = false;

      for (var _i = 0; _i < cells; _i++) {
        var _ordered$_i = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(ordered[_i], 2),
            _x = _ordered$_i[0],
            _y = _ordered$_i[1];

        var check = active[_y][_x];

        if (check[2] === true) {
          least_active = false;
          var move_to = getMove(_x, _y);

          if (move_to !== null) {
            moved = true;

            var _move_to = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(move_to, 2),
                mx = _move_to[0],
                my = _move_to[1]; // let old = active[my][mx].slice()


            var old = [null, null, false];
            active[my][mx] = check;
            active[_y][_x] = old;
          }
        }
      }

      if (least_active) {
        cx.clearRect(0, 0, c.width, c.height);
      }

      if (!moved) {
        // only draw when done
        for (var _i2 = 0; _i2 < cells; _i2++) {
          var _x2 = _i2 % cols;

          var _y2 = Math.floor(_i2 / cols);

          var _check = active[_y2][_x2];

          if (_check[2]) {
            cx.drawImage.apply(cx, [imc].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(spx([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_check.slice(0, 2)), [1, 1]))), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(spx([_x2, _y2, 1, 1]))));
          }
        }
      } else if (moved && !clear_ref.current) {
        cx.clearRect(0, 0, c.width, c.height); // for (let i = 0; i < cells; i++) {
        //   let x = i % cols
        //   let y = Math.floor(i / cols)
        //   let check = active[y][x]
        //   // if (check) {
        //   cx.drawImage(
        //     imc,
        //     ...spx([...check.slice(0, 2), 1, 1]),
        //     ...spx([x, y, 1, 1])
        //   )
        //   // }
        // }

        _render();
      }
    }

    _render();
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    loadImage('mrrobot2.jpg');
  });

  function _trigger(key) {
    keyAction(key, null);
  }

  function keyAction(key, event) {
    var km = km_ref.current;

    if (event === null) {
      event = {
        shiftKey: false
      };
    }

    var shift = event.shiftKey;
    key = key.toLowerCase();

    if (key === 'o') {
      var handleChange = function handleChange(e) {
        var files = '';
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;
            console.log(item);
            files += item.name + '.' + item.type;

            if (item.type.indexOf('image') < 0) {
              continue;
            }

            var src = URL.createObjectURL(item);
            loadImage(src);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.removeEventListener('change', handleChange);
      };

      var input = file_input.current;
      input.addEventListener('change', handleChange);
      input.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));
    } else if (key === 'p') {
      var link = document.createElement('a');
      cref.current.toBlob(function (blob) {
        link.setAttribute('download', 'res-' + new Date().toISOString().slice(0, -4).replace(/-/g, '').replace(/:/g, '').replace(/_/g, '').replace(/\./g, '') + 'Z' + '.png');
        link.setAttribute('href', URL.createObjectURL(blob));
        link.dispatchEvent(new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window
        }));
      });
    }

    if (key === 'l' || key === 'arrowright') {
      var move = 10;
      if (shift) move = 1;
      state.current.threshold = Math.max(0, state.current.threshold - move);
      clear_ref.current = true;
      render();
    } else if (key === 'h' || key === 'arrowleft') {
      var _move = 10;
      if (shift) _move = 1;
      state.current.threshold = Math.min(state.current.cells, state.current.threshold + _move);
      clear_ref.current = true;
      render();
    }
  }

  function downHandler(e) {
    km_ref.current[e.key] = true;
    keyAction(e.key, e);
  }

  function upHandler(e) {
    km_ref.current[e.key] = false;
  }

  function handleMouseMove(e) {
    if (!slider_touch_mode.current) {
      if (slider_click_ref.current) {
        clickSetThreshold(e.clientX);
      }
    }
  }

  function clearer(id) {
    clear_ref.current.push(id);
  }

  function clearRepeatIntervals() {
    for (var i = 0; i < clear_ref.current.length; i++) {
      var item = clear_ref.current[i];
      clearInterval(item);
    }

    clear_ref.current = [];
  }

  function clearPressGates() {
    press_gates.current = false;
  }

  function handleMouseUp(e) {
    if (!slider_touch_mode.current) {
      if (slider_click_ref.current) {
        slider_click_ref.current = false;
        clickSetThreshold(e.clientX);
      }
    }

    clearPressGates();
    clearRepeatIntervals();
  }

  function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    var file = e.dataTransfer.files[0];
    var filename = file.path ? file.path : file.name ? file.name : '';
    var src = URL.createObjectURL(file);
    loadImage(src);
  }

  function onDrag(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  function onPaste(e) {
    e.preventDefault();
    e.stopPropagation();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = e.clipboardData.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;

        if (item.type.indexOf('image') < 0) {
          continue;
        }

        var file = item.getAsFile();
        var src = URL.createObjectURL(file);
        loadImage(src);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  function handleTouchMove(e) {
    if (slider_touch_mode.current) {
      if (slider_click_ref.current) {
        clickSetThreshold(e.changedTouches[0].clientX);
        e.preventDefault();
      }
    }
  }

  function handleTouchEnd(e) {
    // touch end doesn't seem to have client x
    clearPressGates();
    clearRepeatIntervals();
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('paste', onPaste);
    window.addEventListener('dragover', onDrag);
    window.addEventListener('drop', onDrop);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchmove', handleTouchMove, {
      passive: false
    });
    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('paste', onPaste);
      window.removeEventListener('dragover', onDrag);
      window.removeEventListener('drop', onDrop);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
  var title = 'Collapse'; // TODO

  var description = 'Selectively de-res image pixels ranked using a compression algorithm.';
  var share_img_url = 'https://res.constraint.systems/res.png';
  var og_url = 'https://res.constraint.systems';
  return __jsx("div", {
    className: "jsx-1833542653",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1833542653",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614
    },
    __self: this
  }, title), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-1833542653",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615
    },
    __self: this
  })), __jsx("div", {
    style: {
      display: width !== null ? 'block' : 'none',
      width: width !== null ? width + sp : 'auto',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    className: "jsx-1833542653",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618
    },
    __self: this
  }, __jsx("input", {
    type: "file",
    ref: file_input,
    style: {
      display: 'none'
    },
    className: "jsx-1833542653",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-1833542653",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629
    },
    __self: this
  }, __jsx(Button, {
    label: "o",
    press_gates: press_gates,
    text_label: "Load image (or paste or drop)",
    clearer: clearer,
    trigger: function trigger() {
      _trigger('o');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639
    },
    __self: this
  }), __jsx(Button, {
    label: "p",
    press_gates: press_gates,
    text_label: "Save result as png",
    clearer: clearer,
    trigger: function trigger() {
      _trigger('p');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651
    },
    __self: this
  }), __jsx("div", {
    style: {
      paddingLeft: sp / 2,
      paddingRight: sp / 2
    },
    className: "jsx-1833542653" + " " + "no-select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653
    },
    __self: this
  }, __jsx("canvas", {
    ref: cref,
    className: "jsx-1833542653",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1833542653",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3Mvc3BpcmFsL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9wQnlCLEFBSXFCLEFBT1ksVUFOYixTQUdHLEdBSWQsbUlBSEEiLCJmaWxlIjoiL2hvbWUvZ3JhbnQvcy9jcy9zcGlyYWwvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxubGV0IHNwID0gMTZcbi8vIGxldCBjb2xzID0gNDBcbi8vIGxldCByb3dzID0gMzBcbi8vIGxldCBjZWxscyA9IGNvbHMgKiByb3dzXG5cbmZ1bmN0aW9uIHNweChhcnJheSkge1xuICByZXR1cm4gYXJyYXkubWFwKHYgPT4gdiAqIHNwKVxufVxuXG5sZXQgTGluZSA9ICgpID0+IDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBzcCwgd2lkdGg6ICcxMDAlJyB9fSAvPlxuXG5sZXQgU3BhY2UgPSAoKSA9PiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBzcCAvIDIgfX0gLz5cblxubGV0IEJ1dHRvbiA9ICh7XG4gIGxhYmVsLFxuICBjbGVhcmVyLFxuICB0cmlnZ2VyLFxuICB0ZXh0X2xhYmVsLFxuICBwcmVzc19nYXRlcyxcbiAgY3VzdG9tX3N0eWxlLFxufSkgPT4ge1xuICBsZXQgYnV0dG9uX3N0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICB3aWR0aDogc3AsXG4gICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICB9XG4gIGlmIChjdXN0b21fc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGJ1dHRvbl9zdHlsZSA9IE9iamVjdC5hc3NpZ24oYnV0dG9uX3N0eWxlLCBjdXN0b21fc3R5bGUpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgc3R5bGU9e2J1dHRvbl9zdHlsZX1cbiAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHt0ZXh0X2xhYmVsICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGN1cnNvcjogJ2RlZmF1bHQnIH19XG4gICAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTcGFjZSAvPlxuICAgICAgICAgIDxkaXY+e3RleHRfbGFiZWx9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxubGV0IFJlcGVhdEJ1dHRvbiA9ICh7XG4gIGxhYmVsLFxuICBjbGVhcmVyLFxuICB0cmlnZ2VyLFxuICB0ZXh0X2xhYmVsLFxuICBwcmVzc19nYXRlcyxcbiAgY3VzdG9tX3N0eWxlLFxufSkgPT4ge1xuICBsZXQgcmVwZWF0X3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgc3RhcnRfZ2F0ZSA9IHVzZVJlZihmYWxzZSlcblxuICBsZXQgdG91Y2hfbW9kZSA9IHVzZVJlZihmYWxzZSlcblxuICBsZXQgYnV0dG9uX3N0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICB3aWR0aDogc3AsXG4gICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICB9XG4gIGlmIChjdXN0b21fc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGJ1dHRvbl9zdHlsZSA9IE9iamVjdC5hc3NpZ24oYnV0dG9uX3N0eWxlLCBjdXN0b21fc3R5bGUpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgc3R5bGU9e2J1dHRvbl9zdHlsZX1cbiAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IHtcbiAgICAgICAgICB0b3VjaF9tb2RlLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgcHJlc3NfZ2F0ZXMuY3VycmVudCA9IHRydWVcbiAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVzc19nYXRlcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIHJlcGVhdF9yZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgICBjbGVhcmVyKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCA0MDApXG4gICAgICAgIH19XG4gICAgICAgIG9uVG91Y2hFbmQ9e2UgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdG91Y2hfbW9kZS5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgICB9LCA0MDApXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICBpZiAoIXRvdWNoX21vZGUuY3VycmVudCkge1xuICAgICAgICAgICAgcHJlc3NfZ2F0ZXMuY3VycmVudCA9IHRydWVcbiAgICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChwcmVzc19nYXRlcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgcmVwZWF0X3JlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgICAgIGNsZWFyZXIocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA0MDApXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlVXA9e2UgPT4ge1xuICAgICAgICAgIGlmICghdG91Y2hfbW9kZS5jdXJyZW50KSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAge3RleHRfbGFiZWwgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgY3Vyc29yOiAnZGVmYXVsdCcgfX1cbiAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgICByZXBlYXRfcmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICAgICAgY2xlYXJlcihyZXBlYXRfcmVmLmN1cnJlbnQpXG4gICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uTW91c2VVcD17ZSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgPGRpdj57dGV4dF9sYWJlbH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBsZXQgY3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgY2xlYXJfcmVmID0gdXNlUmVmKGZhbHNlKVxuICBsZXQgc3RhdGUgPSB1c2VSZWYoe30pXG4gIGxldCBrbV9yZWYgPSB1c2VSZWYoe30pXG4gIGxldCBzbGlkZXJfY2xpY2tfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBzbGlkZXJfdG91Y2hfbW9kZSA9IHVzZVJlZihmYWxzZSlcbiAgbGV0IHByZXNzX2dhdGVzID0gdXNlUmVmKGZhbHNlKVxuICBsZXQgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZShudWxsKVxuICBsZXQgZmlsZV9pbnB1dCA9IHVzZVJlZihudWxsKVxuXG4gIGZ1bmN0aW9uIGxvYWRJbWFnZShzcmMpIHtcbiAgICBsZXQgYyA9IGNyZWYuY3VycmVudFxuICAgIGxldCBjeCA9IGMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBsZXQgYWRqX3dpZHRoID0gTWF0aC5taW4oXG4gICAgICAgIGltZy53aWR0aCxcbiAgICAgICAgTWF0aC5mbG9vcih3aW5kb3cuaW5uZXJXaWR0aCAtIHNwICogMikgLSBzcCAvIDJcbiAgICAgIClcbiAgICAgIGxldCBkc3AgPSBzcFxuICAgICAgbGV0IHNuYXB3ID0gTWF0aC5yb3VuZChhZGpfd2lkdGggLyBkc3ApICogZHNwXG4gICAgICBsZXQgc25hcHIgPSBzbmFwdyAvIGltZy53aWR0aFxuICAgICAgbGV0IHNuYXBoID0gTWF0aC5yb3VuZCgoaW1nLmhlaWdodCAqIHNuYXByKSAvIGRzcCkgKiBkc3BcblxuICAgICAgaW1nLndpZHRoID0gc25hcHdcbiAgICAgIGltZy5oZWlnaHQgPSBzbmFwaFxuXG4gICAgICBzZXRXaWR0aChpbWcud2lkdGgpXG5cbiAgICAgIGMud2lkdGggPSBpbWcud2lkdGhcbiAgICAgIGMuaGVpZ2h0ID0gaW1nLmhlaWdodFxuXG4gICAgICBsZXQgY29scyA9IGltZy53aWR0aCAvIHNwXG4gICAgICBsZXQgcm93cyA9IGltZy5oZWlnaHQgLyBzcFxuICAgICAgbGV0IGNlbGxzID0gY29scyAqIHJvd3NcblxuICAgICAgLy8gcHJlc2VydmUgZGltZW5zaW9uc1xuICAgICAgbGV0IHRfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgIHRfaW1nLndpZHRoID0gYy53aWR0aFxuICAgICAgdF9pbWcuaGVpZ2h0ID0gYy5oZWlnaHRcbiAgICAgIGxldCB0X2ltZ3ggPSB0X2ltZy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICB0X2ltZ3guZHJhd0ltYWdlKGltZywgMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpXG4gICAgICBpbWcgPSB0X2ltZ1xuXG4gICAgICAvLyBkcmF3IG9yaWdpbmFsIGltYWdlXG4gICAgICAvLyBjeC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjLndpZHRoLCBjLmhlaWdodClcblxuICAgICAgLy8gc3RvcmUgb3JpZ2luYWwgaW1hZ2VcbiAgICAgIGxldCBpbWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgaW1jLndpZHRoID0gYy53aWR0aFxuICAgICAgaW1jLmhlaWdodCA9IGMuaGVpZ2h0XG4gICAgICBsZXQgaW14ID0gaW1jLmdldENvbnRleHQoJzJkJylcbiAgICAgIGlteC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjLndpZHRoLCBjLmhlaWdodClcblxuICAgICAgLy8gY3V0IHVwIG9yaWdpbmFsIGltYWdlXG4gICAgICBsZXQgdGlsZXMgPSBbXVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsczsgaSsrKSB7XG4gICAgICAgIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgICAgdC53aWR0aCA9IHNwXG4gICAgICAgIHQuaGVpZ2h0ID0gc3BcbiAgICAgICAgbGV0IHR4ID0gdC5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICAgICAgbGV0IHggPSBpICUgY29sc1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoaSAvIGNvbHMpXG5cbiAgICAgICAgdHguZHJhd0ltYWdlKGltYywgeCAqIHNwLCB5ICogc3AsIHNwLCBzcCwgMCwgMCwgc3AsIHNwKVxuXG4gICAgICAgIGxldCBjb21wbGV4aXR5ID0gdC50b0RhdGFVUkwoKS5sZW5ndGggLyAoc3AgKiBzcClcblxuICAgICAgICB0aWxlcy5wdXNoKHsgdCwgYzogY29tcGxleGl0eSwgeCwgeSwgaSB9KVxuICAgICAgfVxuICAgICAgdGlsZXMgPSBfLnNvcnRCeSh0aWxlcywgJ2MnKVxuXG4gICAgICAvLyBncmlkIHdpdGggY29vcmRpbmF0ZXNcbiAgICAgIGxldCBncmlkID0gWy4uLkFycmF5KHJvd3MpXS5tYXAoKG4sIHkpID0+XG4gICAgICAgIFsuLi5BcnJheShjb2xzKV0ubWFwKChuLCB4KSA9PiB7XG4gICAgICAgICAgbGV0IGQgPSBNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyh4IC0gY29scyAvIDIsIDIpICsgTWF0aC5wb3coeSAtIHJvd3MgLyAyLCAyKVxuICAgICAgICAgICkudG9GaXhlZCg4KVxuICAgICAgICAgIHJldHVybiBbeCwgeSwgZF1cbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgLy8gc3BpcmFsIG9yZGVyIGZvciBpdGVyYXRpb25cbiAgICAgIGxldCBvcmRlcmVkID0gXy5mbGF0dGVuKGdyaWQpXG4gICAgICBvcmRlcmVkLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gYVsyXSAtIGJbMl1cbiAgICAgIH0pXG5cbiAgICAgIC8vIHNwaXJhbCB0ZXN0XG4gICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDgwMDsgaSsrKSB7XG4gICAgICAvLyAgIGxldCBbeCwgeV0gPSBvcmRlcmVkW2ldXG4gICAgICAvLyAgIGN4LmZpbGxSZWN0KC4uLnNweChbeCwgeSwgMSwgMV0pKVxuICAgICAgLy8gfVxuXG4gICAgICBsZXQgdGhyZXNob2xkID0gY2VsbHMgLSAzMDBcbiAgICAgIHN0YXRlLmN1cnJlbnQudGhyZXNob2xkID0gdGhyZXNob2xkXG4gICAgICBzdGF0ZS5jdXJyZW50LmNlbGxzID0gY2VsbHNcbiAgICAgIHN0YXRlLmN1cnJlbnQub3JkZXJlZCA9IG9yZGVyZWRcbiAgICAgIHN0YXRlLmN1cnJlbnQuZ3JpZCA9IGdyaWRcbiAgICAgIHN0YXRlLmN1cnJlbnQuY29scyA9IGNvbHNcbiAgICAgIHN0YXRlLmN1cnJlbnQucm93cyA9IHJvd3NcbiAgICAgIHN0YXRlLmN1cnJlbnQuaW1jID0gaW1jXG4gICAgICBzdGF0ZS5jdXJyZW50LnRpbGVzID0gdGlsZXNcblxuICAgICAgcmVuZGVyKClcblxuICAgICAgLy8gY3guZmlsbFN0eWxlID0gJ3JlZCdcbiAgICAgIC8vIGN4LmZpbGxSZWN0KChjb2xzIC8gMikgKiBzcCAtIDEsIDAsIDIsIGMuaGVpZ2h0KVxuICAgICAgLy8gY3guZmlsbFJlY3QoMCwgKHJvd3MgLyAyKSAqIHNwIC0gMSwgYy53aWR0aCwgMilcbiAgICAgIC8vIGN4LmZpbGxTdHlsZSA9ICdibGFjaydcbiAgICB9XG4gICAgaW1nLnNyYyA9IHNyY1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGNsZWFyX3JlZi5jdXJyZW50ID0gZmFsc2VcbiAgICBsZXQgYyA9IGNyZWYuY3VycmVudFxuICAgIGxldCBjeCA9IGMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCB7XG4gICAgICBjZWxscyxcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIG9yZGVyZWQsXG4gICAgICBncmlkLFxuICAgICAgY29scyxcbiAgICAgIHJvd3MsXG4gICAgICBpbWMsXG4gICAgICB0aWxlcyxcbiAgICB9ID0gc3RhdGUuY3VycmVudFxuXG4gICAgLy8gYWN0aXZlXG4gICAgbGV0IGFjdGl2ZSA9IFsuLi5BcnJheShyb3dzKV0ubWFwKChuLCB5KSA9PlxuICAgICAgWy4uLkFycmF5KGNvbHMpXS5tYXAoKG4sIHgpID0+IFt4LCB5LCBmYWxzZV0pXG4gICAgKVxuICAgIGZvciAobGV0IGkgPSB0aHJlc2hvbGQ7IGkgPCBjZWxsczsgaSsrKSB7XG4gICAgICBsZXQgdGlsZSA9IHRpbGVzW2ldXG4gICAgICBsZXQgeCA9IHRpbGUueFxuICAgICAgbGV0IHkgPSB0aWxlLnlcbiAgICAgIGFjdGl2ZVt5XVt4XVsyXSA9IHRydWVcbiAgICB9XG4gICAgY29uc29sZS5sb2coYWN0aXZlKVxuXG4gICAgZnVuY3Rpb24gZ2V0RnJlZSh4LCB5KSB7XG4gICAgICAvLyBpdCBpdCBvZmYgbWFwIGl0IGlzIHVuZGVmaW5lZFxuICAgICAgaWYgKGFjdGl2ZVt5XSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbFxuICAgICAgaWYgKGFjdGl2ZVt5XVt4XSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbFxuICAgICAgbGV0IGNoZWNrID0gYWN0aXZlW3ldW3hdXG4gICAgICAvLyBmYWxzZSBtZWFucyBlbXB0eVxuICAgICAgaWYgKGNoZWNrWzJdID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZ3JpZFt5XVt4XVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBpZiBmYWxzZVxuICAgICAgLy8gaWYgKGNvb3Jkcykge1xuICAgICAgLy8gICBsZXQgW2d4LCBneV0gPSBjb29yZHNcbiAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRNb3ZlKHgsIHkpIHtcbiAgICAgIGxldCByYXcgPSBbXG4gICAgICAgIFswLCAtMV0sXG4gICAgICAgIFsxLCAtMV0sXG4gICAgICAgIFsxLCAxXSxcbiAgICAgICAgWzEsIDBdLFxuICAgICAgICBbMSwgMV0sXG4gICAgICAgIFswLCAxXSxcbiAgICAgICAgWy0xLCAxXSxcbiAgICAgICAgWy0xLCAwXSxcbiAgICAgICAgWy0xLCAtMV0sXG4gICAgICBdLm1hcCh2ID0+IGdldEZyZWUoeCArIHZbMF0sIHkgKyB2WzFdKSlcbiAgICAgIGxldCBzZWxmID0gZ3JpZFt5XVt4XVxuICAgICAgbGV0IGZpbHRlcmVkID0gcmF3LmZpbHRlcih2ID0+IHYgIT09IG51bGwpXG4gICAgICBsZXQgZGlzdGFuY2VzID0gZmlsdGVyZWQubWFwKHYgPT4gcGFyc2VGbG9hdCh2WzJdKSlcbiAgICAgIGxldCBtaW5fZGlzdGFuY2UgPSBfLm1pbihkaXN0YW5jZXMpXG4gICAgICBpZiAobWluX2Rpc3RhbmNlIDwgc2VsZlsyXSkge1xuICAgICAgICBsZXQgbWluX2kgPSBkaXN0YW5jZXMuaW5kZXhPZihtaW5fZGlzdGFuY2UpXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZFttaW5faV1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3JlbmRlcigpIHtcbiAgICAgIGxldCBsZWFzdF9hY3RpdmUgPSB0cnVlXG4gICAgICBsZXQgbW92ZWQgPSBmYWxzZVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzOyBpKyspIHtcbiAgICAgICAgbGV0IFt4LCB5XSA9IG9yZGVyZWRbaV1cbiAgICAgICAgbGV0IGNoZWNrID0gYWN0aXZlW3ldW3hdXG4gICAgICAgIGlmIChjaGVja1syXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGxlYXN0X2FjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgbGV0IG1vdmVfdG8gPSBnZXRNb3ZlKHgsIHkpXG4gICAgICAgICAgaWYgKG1vdmVfdG8gIT09IG51bGwpIHtcbiAgICAgICAgICAgIG1vdmVkID0gdHJ1ZVxuICAgICAgICAgICAgbGV0IFtteCwgbXldID0gbW92ZV90b1xuICAgICAgICAgICAgLy8gbGV0IG9sZCA9IGFjdGl2ZVtteV1bbXhdLnNsaWNlKClcbiAgICAgICAgICAgIGxldCBvbGQgPSBbbnVsbCwgbnVsbCwgZmFsc2VdXG4gICAgICAgICAgICBhY3RpdmVbbXldW214XSA9IGNoZWNrXG4gICAgICAgICAgICBhY3RpdmVbeV1beF0gPSBvbGRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGxlYXN0X2FjdGl2ZSkge1xuICAgICAgICBjeC5jbGVhclJlY3QoMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpXG4gICAgICB9XG4gICAgICBpZiAoIW1vdmVkKSB7XG4gICAgICAgIC8vIG9ubHkgZHJhdyB3aGVuIGRvbmVcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsczsgaSsrKSB7XG4gICAgICAgICAgbGV0IHggPSBpICUgY29sc1xuICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihpIC8gY29scylcbiAgICAgICAgICBsZXQgY2hlY2sgPSBhY3RpdmVbeV1beF1cbiAgICAgICAgICBpZiAoY2hlY2tbMl0pIHtcbiAgICAgICAgICAgIGN4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgaW1jLFxuICAgICAgICAgICAgICAuLi5zcHgoWy4uLmNoZWNrLnNsaWNlKDAsIDIpLCAxLCAxXSksXG4gICAgICAgICAgICAgIC4uLnNweChbeCwgeSwgMSwgMV0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG1vdmVkICYmICFjbGVhcl9yZWYuY3VycmVudCkge1xuICAgICAgICBjeC5jbGVhclJlY3QoMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpXG5cbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsczsgaSsrKSB7XG4gICAgICAgIC8vICAgbGV0IHggPSBpICUgY29sc1xuICAgICAgICAvLyAgIGxldCB5ID0gTWF0aC5mbG9vcihpIC8gY29scylcbiAgICAgICAgLy8gICBsZXQgY2hlY2sgPSBhY3RpdmVbeV1beF1cbiAgICAgICAgLy8gICAvLyBpZiAoY2hlY2spIHtcbiAgICAgICAgLy8gICBjeC5kcmF3SW1hZ2UoXG4gICAgICAgIC8vICAgICBpbWMsXG4gICAgICAgIC8vICAgICAuLi5zcHgoWy4uLmNoZWNrLnNsaWNlKDAsIDIpLCAxLCAxXSksXG4gICAgICAgIC8vICAgICAuLi5zcHgoW3gsIHksIDEsIDFdKVxuICAgICAgICAvLyAgIClcbiAgICAgICAgLy8gICAvLyB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICBfcmVuZGVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfcmVuZGVyKClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZEltYWdlKCdtcnJvYm90Mi5qcGcnKVxuICB9KVxuXG4gIGZ1bmN0aW9uIHRyaWdnZXIoa2V5KSB7XG4gICAga2V5QWN0aW9uKGtleSwgbnVsbClcbiAgfVxuXG4gIGZ1bmN0aW9uIGtleUFjdGlvbihrZXksIGV2ZW50KSB7XG4gICAgbGV0IGttID0ga21fcmVmLmN1cnJlbnRcbiAgICBpZiAoZXZlbnQgPT09IG51bGwpIHtcbiAgICAgIGV2ZW50ID0geyBzaGlmdEtleTogZmFsc2UgfVxuICAgIH1cblxuICAgIGxldCBzaGlmdCA9IGV2ZW50LnNoaWZ0S2V5XG4gICAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKClcblxuICAgIGlmIChrZXkgPT09ICdvJykge1xuICAgICAgbGV0IGlucHV0ID0gZmlsZV9pbnB1dC5jdXJyZW50XG4gICAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBsZXQgZmlsZXMgPSAnJ1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuZmlsZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgICAgICAgIGZpbGVzICs9IGl0ZW0ubmFtZSArICcuJyArIGl0ZW0udHlwZVxuICAgICAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGl0ZW0pXG4gICAgICAgICAgbG9hZEltYWdlKHNyYylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSlcbiAgICAgIH1cbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSlcblxuICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdwJykge1xuICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcblxuICAgICAgY3JlZi5jdXJyZW50LnRvQmxvYihmdW5jdGlvbihibG9iKSB7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdkb3dubG9hZCcsXG4gICAgICAgICAgJ3Jlcy0nICtcbiAgICAgICAgICAgIG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgICAgLnNsaWNlKDAsIC00KVxuICAgICAgICAgICAgICAucmVwbGFjZSgvLS9nLCAnJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoLzovZywgJycpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9fL2csICcnKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvXFwuL2csICcnKSArXG4gICAgICAgICAgICAnWicgK1xuICAgICAgICAgICAgJy5wbmcnXG4gICAgICAgIClcblxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpXG4gICAgICAgIGxpbmsuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICBuZXcgTW91c2VFdmVudChgY2xpY2tgLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChrZXkgPT09ICdsJyB8fCBrZXkgPT09ICdhcnJvd3JpZ2h0Jykge1xuICAgICAgbGV0IG1vdmUgPSAxMFxuICAgICAgaWYgKHNoaWZ0KSBtb3ZlID0gMVxuICAgICAgc3RhdGUuY3VycmVudC50aHJlc2hvbGQgPSBNYXRoLm1heCgwLCBzdGF0ZS5jdXJyZW50LnRocmVzaG9sZCAtIG1vdmUpXG4gICAgICBjbGVhcl9yZWYuY3VycmVudCA9IHRydWVcbiAgICAgIHJlbmRlcigpXG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdoJyB8fCBrZXkgPT09ICdhcnJvd2xlZnQnKSB7XG4gICAgICBsZXQgbW92ZSA9IDEwXG4gICAgICBpZiAoc2hpZnQpIG1vdmUgPSAxXG4gICAgICBzdGF0ZS5jdXJyZW50LnRocmVzaG9sZCA9IE1hdGgubWluKFxuICAgICAgICBzdGF0ZS5jdXJyZW50LmNlbGxzLFxuICAgICAgICBzdGF0ZS5jdXJyZW50LnRocmVzaG9sZCArIG1vdmVcbiAgICAgIClcbiAgICAgIGNsZWFyX3JlZi5jdXJyZW50ID0gdHJ1ZVxuICAgICAgcmVuZGVyKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkb3duSGFuZGxlcihlKSB7XG4gICAga21fcmVmLmN1cnJlbnRbZS5rZXldID0gdHJ1ZVxuICAgIGtleUFjdGlvbihlLmtleSwgZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAga21fcmVmLmN1cnJlbnRbZS5rZXldID0gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZShlKSB7XG4gICAgaWYgKCFzbGlkZXJfdG91Y2hfbW9kZS5jdXJyZW50KSB7XG4gICAgICBpZiAoc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50KSB7XG4gICAgICAgIGNsaWNrU2V0VGhyZXNob2xkKGUuY2xpZW50WClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcmVyKGlkKSB7XG4gICAgY2xlYXJfcmVmLmN1cnJlbnQucHVzaChpZClcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyUmVwZWF0SW50ZXJ2YWxzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xlYXJfcmVmLmN1cnJlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gY2xlYXJfcmVmLmN1cnJlbnRbaV1cbiAgICAgIGNsZWFySW50ZXJ2YWwoaXRlbSlcbiAgICB9XG4gICAgY2xlYXJfcmVmLmN1cnJlbnQgPSBbXVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJQcmVzc0dhdGVzKCkge1xuICAgIHByZXNzX2dhdGVzLmN1cnJlbnQgPSBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTW91c2VVcChlKSB7XG4gICAgaWYgKCFzbGlkZXJfdG91Y2hfbW9kZS5jdXJyZW50KSB7XG4gICAgICBpZiAoc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50KSB7XG4gICAgICAgIHNsaWRlcl9jbGlja19yZWYuY3VycmVudCA9IGZhbHNlXG4gICAgICAgIGNsaWNrU2V0VGhyZXNob2xkKGUuY2xpZW50WClcbiAgICAgIH1cbiAgICB9XG4gICAgY2xlYXJQcmVzc0dhdGVzKClcbiAgICBjbGVhclJlcGVhdEludGVydmFscygpXG4gIH1cblxuICBmdW5jdGlvbiBvbkRyb3AoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBsZXQgZmlsZSA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdXG4gICAgbGV0IGZpbGVuYW1lID0gZmlsZS5wYXRoID8gZmlsZS5wYXRoIDogZmlsZS5uYW1lID8gZmlsZS5uYW1lIDogJydcbiAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKVxuICAgIGxvYWRJbWFnZShzcmMpXG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWcoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknXG4gIH1cblxuICBmdW5jdGlvbiBvblBhc3RlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGUuY2xpcGJvYXJkRGF0YS5pdGVtcykge1xuICAgICAgaWYgKGl0ZW0udHlwZS5pbmRleE9mKCdpbWFnZScpIDwgMCkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgbGV0IGZpbGUgPSBpdGVtLmdldEFzRmlsZSgpXG4gICAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKVxuICAgICAgbG9hZEltYWdlKHNyYylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZSkge1xuICAgIGlmIChzbGlkZXJfdG91Y2hfbW9kZS5jdXJyZW50KSB7XG4gICAgICBpZiAoc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50KSB7XG4gICAgICAgIGNsaWNrU2V0VGhyZXNob2xkKGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoZSkge1xuICAgIC8vIHRvdWNoIGVuZCBkb2Vzbid0IHNlZW0gdG8gaGF2ZSBjbGllbnQgeFxuICAgIGNsZWFyUHJlc3NHYXRlcygpXG4gICAgY2xlYXJSZXBlYXRJbnRlcnZhbHMoKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlTW91c2VVcClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRHJhZylcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIG9uRHJvcClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVUb3VjaEVuZClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlLCB7IHBhc3NpdmU6IGZhbHNlIH0pXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgb25QYXN0ZSlcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRHJhZylcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlVG91Y2hFbmQpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgbGV0IHRpdGxlID0gJ0NvbGxhcHNlJ1xuICAvLyBUT0RPXG4gIGxldCBkZXNjcmlwdGlvbiA9XG4gICAgJ1NlbGVjdGl2ZWx5IGRlLXJlcyBpbWFnZSBwaXhlbHMgcmFua2VkIHVzaW5nIGEgY29tcHJlc3Npb24gYWxnb3JpdGhtLidcbiAgbGV0IHNoYXJlX2ltZ191cmwgPSAnaHR0cHM6Ly9yZXMuY29uc3RyYWludC5zeXN0ZW1zL3Jlcy5wbmcnXG4gIGxldCBvZ191cmwgPSAnaHR0cHM6Ly9yZXMuY29uc3RyYWludC5zeXN0ZW1zJ1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IHdpZHRoICE9PSBudWxsID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgICAgICB3aWR0aDogd2lkdGggIT09IG51bGwgPyB3aWR0aCArIHNwIDogJ2F1dG8nLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiByZWY9e2ZpbGVfaW5wdXR9IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSAvPlxuXG4gICAgICAgIDxMaW5lIC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGxhYmVsPVwib1wiXG4gICAgICAgICAgICBwcmVzc19nYXRlcz17cHJlc3NfZ2F0ZXN9XG4gICAgICAgICAgICB0ZXh0X2xhYmVsPVwiTG9hZCBpbWFnZSAob3IgcGFzdGUgb3IgZHJvcClcIlxuICAgICAgICAgICAgY2xlYXJlcj17Y2xlYXJlcn1cbiAgICAgICAgICAgIHRyaWdnZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgdHJpZ2dlcignbycpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgbGFiZWw9XCJwXCJcbiAgICAgICAgICAgIHByZXNzX2dhdGVzPXtwcmVzc19nYXRlc31cbiAgICAgICAgICAgIHRleHRfbGFiZWw9XCJTYXZlIHJlc3VsdCBhcyBwbmdcIlxuICAgICAgICAgICAgY2xlYXJlcj17Y2xlYXJlcn1cbiAgICAgICAgICAgIHRyaWdnZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgdHJpZ2dlcigncCcpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxMaW5lIC8+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLXNlbGVjdFwiXG4gICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IHNwIC8gMiwgcGFkZGluZ1JpZ2h0OiBzcCAvIDIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxjYW52YXMgcmVmPXtjcmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/home/grant/s/cs/spiral/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.e148d62531c9d3494813.hot-update.js.map