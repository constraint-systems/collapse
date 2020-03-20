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
  var clear_render_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(false);
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
  var ti_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var thresh_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

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
      var cells = cols * rows; // size slider

      var ti = ti_ref.current;
      ti.width = img.width - sp * 4;
      ti.height = sp * 2; // preserve dimensions

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
    clear_render_ref.current = false;
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
    } // slider


    var ti = ti_ref.current;
    var tix = ti.getContext('2d');
    tix.fillStyle = '#ddd';
    tix.fillRect(0, 0, ti.width, sp * 2);
    tix.fillStyle = '#999';
    var tmark = Math.min(Math.max(1, Math.round(ti.width * ((cells - threshold) / cells))), ti.width - 2);
    tix.fillRect(tmark - 1, 0, 3, sp * 2);
    thresh_ref.current.innerHTML = cells - threshold + '/' + cells;

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
      } else if (moved && !clear_render_ref.current) {
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

  function clickSetThreshold(x) {
    var rect = ti_ref.current.getBoundingClientRect();
    x = x - rect.left;
    var percent = x / ti_ref.current.width;
    var _state$current2 = state.current,
        cells = _state$current2.cells,
        threshold = _state$current2.threshold;
    var new_thresh = cells - Math.min(cells, Math.max(0, Math.round(percent * cells)));
    state.current.threshold = new_thresh;
    render();
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
        link.setAttribute('download', 'collapse-' + new Date().toISOString().slice(0, -4).replace(/-/g, '').replace(/:/g, '').replace(/_/g, '').replace(/\./g, '') + 'Z' + '.png');
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
      clear_render_ref.current = true;
      render();
    } else if (key === 'h' || key === 'arrowleft') {
      var _move = 10;
      if (shift) _move = 1;
      state.current.threshold = Math.min(state.current.cells, state.current.threshold + _move);
      clear_render_ref.current = true;
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
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646
    },
    __self: this
  }, title), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647
    },
    __self: this
  })), __jsx("div", {
    style: {
      display: width !== null ? 'block' : 'none',
      width: width !== null ? width + sp : 'auto',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650
    },
    __self: this
  }, __jsx("input", {
    type: "file",
    ref: file_input,
    style: {
      display: 'none'
    },
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658
    },
    __self: this
  }), __jsx("div", {
    style: {
      paddingLeft: sp / 2,
      paddingRight: sp / 2
    },
    className: "jsx-3038633697" + " " + "no-select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664
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
      lineNumber: 665
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674
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
      lineNumber: 675
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686
    },
    __self: this
  }), __jsx("canvas", {
    ref: cref,
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex',
      textAlign: 'center',
      width: '100%',
      position: 'relative'
    },
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690
    },
    __self: this
  }, __jsx("canvas", {
    height: sp * 23,
    ref: ti_ref,
    style: {
      position: 'absolute',
      height: sp * 2,
      left: sp * 2,
      top: 0,
      cursor: 'crosshair'
    },
    onTouchStart: function onTouchStart(e) {
      slider_click_ref.current = true;
      slider_touch_mode.current = true;
      clickSetThreshold(e.changedTouches[0].clientX);
    },
    onTouchEnd: function onTouchEnd(e) {
      setTimeout(function () {
        slider_click_ref.current = false;
        slider_touch_mode.current = false;
      }, 400);
    },
    onMouseDown: function onMouseDown(e) {
      if (!slider_touch_mode.current) {
        slider_click_ref.current = true;
        clickSetThreshold(e.clientX);
      }
    },
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698
    },
    __self: this
  }), __jsx(RepeatButton, {
    label: "h",
    press_gates: press_gates,
    custom_style: {
      height: sp * 2,
      width: sp * 2
    },
    clearer: clearer,
    trigger: function trigger() {
      _trigger('h');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726
    },
    __self: this
  }), __jsx("div", {
    ref: thresh_ref,
    style: {
      flexGrow: 1,
      position: 'relative',
      pointerEvents: 'none',
      lineHeight: sp * 2 + 'px'
    },
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735
    },
    __self: this
  }), __jsx(RepeatButton, {
    label: "l",
    press_gates: press_gates,
    custom_style: {
      height: sp * 2,
      width: sp * 2
    },
    clearer: clearer,
    trigger: function trigger() {
      _trigger('l');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 744
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 755
    },
    __self: this
  }, "Superpixels are ranked and selected based on their size when compressed (as a proxy for complexity). Learn more about how selection works in ", __jsx("a", {
    target: "_blank",
    href: "https://res.constraint.systems",
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758
    },
    __self: this
  }, "Res"), "."), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 760
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767
    },
    __self: this
  }, __jsx("a", {
    target: "_blank",
    href: "https://constraint.systems",
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768
    },
    __self: this
  }, "constraint.systems")), __jsx("div", {
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 770
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/constraint-systems/res",
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 771
    },
    __self: this
  }, "View source"))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 776
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3038633697",
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}html{background:#efefef;}canvas{background:#fff;}html,body{padding:0;margin:0;font-family:'custom',monospace;font-size:12px;line-height:16px;}*{box-sizing:border-box;}a{color:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3Mvc3BpcmFsL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJ3QnlCLEFBR2dDLEFBS0EsQUFNRixBQUdILEFBSU4sQUFPWSxBQUdSLFVBVEwsSUFVWCxFQWRBLEdBSEEsQUFRa0MsRUFsQnVCLEFBS0QsQ0FtQnhELDRCQUxpQixlQUNFLGlCQUNuQixvREFmb0IsRUFMcEIsZ0JBTUEiLCJmaWxlIjoiL2hvbWUvZ3JhbnQvcy9jcy9zcGlyYWwvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxubGV0IHNwID0gMTZcbi8vIGxldCBjb2xzID0gNDBcbi8vIGxldCByb3dzID0gMzBcbi8vIGxldCBjZWxscyA9IGNvbHMgKiByb3dzXG5cbmZ1bmN0aW9uIHNweChhcnJheSkge1xuICByZXR1cm4gYXJyYXkubWFwKHYgPT4gdiAqIHNwKVxufVxuXG5sZXQgTGluZSA9ICgpID0+IDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBzcCwgd2lkdGg6ICcxMDAlJyB9fSAvPlxuXG5sZXQgU3BhY2UgPSAoKSA9PiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBzcCAvIDIgfX0gLz5cblxubGV0IEJ1dHRvbiA9ICh7XG4gIGxhYmVsLFxuICBjbGVhcmVyLFxuICB0cmlnZ2VyLFxuICB0ZXh0X2xhYmVsLFxuICBwcmVzc19nYXRlcyxcbiAgY3VzdG9tX3N0eWxlLFxufSkgPT4ge1xuICBsZXQgYnV0dG9uX3N0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICB3aWR0aDogc3AsXG4gICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICB9XG4gIGlmIChjdXN0b21fc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGJ1dHRvbl9zdHlsZSA9IE9iamVjdC5hc3NpZ24oYnV0dG9uX3N0eWxlLCBjdXN0b21fc3R5bGUpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgc3R5bGU9e2J1dHRvbl9zdHlsZX1cbiAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHt0ZXh0X2xhYmVsICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGN1cnNvcjogJ2RlZmF1bHQnIH19XG4gICAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTcGFjZSAvPlxuICAgICAgICAgIDxkaXY+e3RleHRfbGFiZWx9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxubGV0IFJlcGVhdEJ1dHRvbiA9ICh7XG4gIGxhYmVsLFxuICBjbGVhcmVyLFxuICB0cmlnZ2VyLFxuICB0ZXh0X2xhYmVsLFxuICBwcmVzc19nYXRlcyxcbiAgY3VzdG9tX3N0eWxlLFxufSkgPT4ge1xuICBsZXQgcmVwZWF0X3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgc3RhcnRfZ2F0ZSA9IHVzZVJlZihmYWxzZSlcblxuICBsZXQgdG91Y2hfbW9kZSA9IHVzZVJlZihmYWxzZSlcblxuICBsZXQgYnV0dG9uX3N0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICB3aWR0aDogc3AsXG4gICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICB9XG4gIGlmIChjdXN0b21fc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGJ1dHRvbl9zdHlsZSA9IE9iamVjdC5hc3NpZ24oYnV0dG9uX3N0eWxlLCBjdXN0b21fc3R5bGUpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgc3R5bGU9e2J1dHRvbl9zdHlsZX1cbiAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IHtcbiAgICAgICAgICB0b3VjaF9tb2RlLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgcHJlc3NfZ2F0ZXMuY3VycmVudCA9IHRydWVcbiAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVzc19nYXRlcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIHJlcGVhdF9yZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgICBjbGVhcmVyKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCA0MDApXG4gICAgICAgIH19XG4gICAgICAgIG9uVG91Y2hFbmQ9e2UgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdG91Y2hfbW9kZS5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgICB9LCA0MDApXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICBpZiAoIXRvdWNoX21vZGUuY3VycmVudCkge1xuICAgICAgICAgICAgcHJlc3NfZ2F0ZXMuY3VycmVudCA9IHRydWVcbiAgICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChwcmVzc19nYXRlcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgcmVwZWF0X3JlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgICAgIGNsZWFyZXIocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA0MDApXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlVXA9e2UgPT4ge1xuICAgICAgICAgIGlmICghdG91Y2hfbW9kZS5jdXJyZW50KSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAge3RleHRfbGFiZWwgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgY3Vyc29yOiAnZGVmYXVsdCcgfX1cbiAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgICByZXBlYXRfcmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICAgICAgY2xlYXJlcihyZXBlYXRfcmVmLmN1cnJlbnQpXG4gICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uTW91c2VVcD17ZSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgPGRpdj57dGV4dF9sYWJlbH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBsZXQgY3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgY2xlYXJfcmVuZGVyX3JlZiA9IHVzZVJlZihmYWxzZSlcbiAgbGV0IGNsZWFyX3JlZiA9IHVzZVJlZihmYWxzZSlcbiAgbGV0IHN0YXRlID0gdXNlUmVmKHt9KVxuICBsZXQga21fcmVmID0gdXNlUmVmKHt9KVxuICBsZXQgc2xpZGVyX2NsaWNrX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgc2xpZGVyX3RvdWNoX21vZGUgPSB1c2VSZWYoZmFsc2UpXG4gIGxldCBwcmVzc19nYXRlcyA9IHVzZVJlZihmYWxzZSlcbiAgbGV0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUobnVsbClcbiAgbGV0IGZpbGVfaW5wdXQgPSB1c2VSZWYobnVsbClcbiAgbGV0IHRpX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdGhyZXNoX3JlZiA9IHVzZVJlZihudWxsKVxuXG4gIGZ1bmN0aW9uIGxvYWRJbWFnZShzcmMpIHtcbiAgICBsZXQgYyA9IGNyZWYuY3VycmVudFxuICAgIGxldCBjeCA9IGMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBsZXQgYWRqX3dpZHRoID0gTWF0aC5taW4oXG4gICAgICAgIGltZy53aWR0aCxcbiAgICAgICAgTWF0aC5mbG9vcih3aW5kb3cuaW5uZXJXaWR0aCAtIHNwICogMikgLSBzcCAvIDJcbiAgICAgIClcbiAgICAgIGxldCBkc3AgPSBzcFxuICAgICAgbGV0IHNuYXB3ID0gTWF0aC5yb3VuZChhZGpfd2lkdGggLyBkc3ApICogZHNwXG4gICAgICBsZXQgc25hcHIgPSBzbmFwdyAvIGltZy53aWR0aFxuICAgICAgbGV0IHNuYXBoID0gTWF0aC5yb3VuZCgoaW1nLmhlaWdodCAqIHNuYXByKSAvIGRzcCkgKiBkc3BcblxuICAgICAgaW1nLndpZHRoID0gc25hcHdcbiAgICAgIGltZy5oZWlnaHQgPSBzbmFwaFxuXG4gICAgICBzZXRXaWR0aChpbWcud2lkdGgpXG5cbiAgICAgIGMud2lkdGggPSBpbWcud2lkdGhcbiAgICAgIGMuaGVpZ2h0ID0gaW1nLmhlaWdodFxuXG4gICAgICBsZXQgY29scyA9IGltZy53aWR0aCAvIHNwXG4gICAgICBsZXQgcm93cyA9IGltZy5oZWlnaHQgLyBzcFxuICAgICAgbGV0IGNlbGxzID0gY29scyAqIHJvd3NcblxuICAgICAgLy8gc2l6ZSBzbGlkZXJcbiAgICAgIGxldCB0aSA9IHRpX3JlZi5jdXJyZW50XG4gICAgICB0aS53aWR0aCA9IGltZy53aWR0aCAtIHNwICogNFxuICAgICAgdGkuaGVpZ2h0ID0gc3AgKiAyXG5cbiAgICAgIC8vIHByZXNlcnZlIGRpbWVuc2lvbnNcbiAgICAgIGxldCB0X2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICB0X2ltZy53aWR0aCA9IGMud2lkdGhcbiAgICAgIHRfaW1nLmhlaWdodCA9IGMuaGVpZ2h0XG4gICAgICBsZXQgdF9pbWd4ID0gdF9pbWcuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgdF9pbWd4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KVxuICAgICAgaW1nID0gdF9pbWdcblxuICAgICAgLy8gZHJhdyBvcmlnaW5hbCBpbWFnZVxuICAgICAgLy8gY3guZHJhd0ltYWdlKGltZywgMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpXG5cbiAgICAgIC8vIHN0b3JlIG9yaWdpbmFsIGltYWdlXG4gICAgICBsZXQgaW1jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgIGltYy53aWR0aCA9IGMud2lkdGhcbiAgICAgIGltYy5oZWlnaHQgPSBjLmhlaWdodFxuICAgICAgbGV0IGlteCA9IGltYy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBpbXguZHJhd0ltYWdlKGltZywgMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpXG5cbiAgICAgIC8vIGN1dCB1cCBvcmlnaW5hbCBpbWFnZVxuICAgICAgbGV0IHRpbGVzID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHM7IGkrKykge1xuICAgICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICAgIHQud2lkdGggPSBzcFxuICAgICAgICB0LmhlaWdodCA9IHNwXG4gICAgICAgIGxldCB0eCA9IHQuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgICAgIGxldCB4ID0gaSAlIGNvbHNcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKGkgLyBjb2xzKVxuXG4gICAgICAgIHR4LmRyYXdJbWFnZShpbWMsIHggKiBzcCwgeSAqIHNwLCBzcCwgc3AsIDAsIDAsIHNwLCBzcClcblxuICAgICAgICBsZXQgY29tcGxleGl0eSA9IHQudG9EYXRhVVJMKCkubGVuZ3RoIC8gKHNwICogc3ApXG5cbiAgICAgICAgdGlsZXMucHVzaCh7IHQsIGM6IGNvbXBsZXhpdHksIHgsIHksIGkgfSlcbiAgICAgIH1cbiAgICAgIHRpbGVzID0gXy5zb3J0QnkodGlsZXMsICdjJylcblxuICAgICAgLy8gZ3JpZCB3aXRoIGNvb3JkaW5hdGVzXG4gICAgICBsZXQgZ3JpZCA9IFsuLi5BcnJheShyb3dzKV0ubWFwKChuLCB5KSA9PlxuICAgICAgICBbLi4uQXJyYXkoY29scyldLm1hcCgobiwgeCkgPT4ge1xuICAgICAgICAgIGxldCBkID0gTWF0aC5zcXJ0KFxuICAgICAgICAgICAgTWF0aC5wb3coeCAtIGNvbHMgLyAyLCAyKSArIE1hdGgucG93KHkgLSByb3dzIC8gMiwgMilcbiAgICAgICAgICApLnRvRml4ZWQoOClcbiAgICAgICAgICByZXR1cm4gW3gsIHksIGRdXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIC8vIHNwaXJhbCBvcmRlciBmb3IgaXRlcmF0aW9uXG4gICAgICBsZXQgb3JkZXJlZCA9IF8uZmxhdHRlbihncmlkKVxuICAgICAgb3JkZXJlZC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGFbMl0gLSBiWzJdXG4gICAgICB9KVxuXG4gICAgICAvLyBzcGlyYWwgdGVzdFxuICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCA4MDA7IGkrKykge1xuICAgICAgLy8gICBsZXQgW3gsIHldID0gb3JkZXJlZFtpXVxuICAgICAgLy8gICBjeC5maWxsUmVjdCguLi5zcHgoW3gsIHksIDEsIDFdKSlcbiAgICAgIC8vIH1cblxuICAgICAgbGV0IHRocmVzaG9sZCA9IGNlbGxzIC0gMzAwXG4gICAgICBzdGF0ZS5jdXJyZW50LnRocmVzaG9sZCA9IHRocmVzaG9sZFxuICAgICAgc3RhdGUuY3VycmVudC5jZWxscyA9IGNlbGxzXG4gICAgICBzdGF0ZS5jdXJyZW50Lm9yZGVyZWQgPSBvcmRlcmVkXG4gICAgICBzdGF0ZS5jdXJyZW50LmdyaWQgPSBncmlkXG4gICAgICBzdGF0ZS5jdXJyZW50LmNvbHMgPSBjb2xzXG4gICAgICBzdGF0ZS5jdXJyZW50LnJvd3MgPSByb3dzXG4gICAgICBzdGF0ZS5jdXJyZW50LmltYyA9IGltY1xuICAgICAgc3RhdGUuY3VycmVudC50aWxlcyA9IHRpbGVzXG5cbiAgICAgIHJlbmRlcigpXG5cbiAgICAgIC8vIGN4LmZpbGxTdHlsZSA9ICdyZWQnXG4gICAgICAvLyBjeC5maWxsUmVjdCgoY29scyAvIDIpICogc3AgLSAxLCAwLCAyLCBjLmhlaWdodClcbiAgICAgIC8vIGN4LmZpbGxSZWN0KDAsIChyb3dzIC8gMikgKiBzcCAtIDEsIGMud2lkdGgsIDIpXG4gICAgICAvLyBjeC5maWxsU3R5bGUgPSAnYmxhY2snXG4gICAgfVxuICAgIGltZy5zcmMgPSBzcmNcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBjbGVhcl9yZW5kZXJfcmVmLmN1cnJlbnQgPSBmYWxzZVxuICAgIGxldCBjID0gY3JlZi5jdXJyZW50XG4gICAgbGV0IGN4ID0gYy5nZXRDb250ZXh0KCcyZCcpXG4gICAgbGV0IHtcbiAgICAgIGNlbGxzLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgb3JkZXJlZCxcbiAgICAgIGdyaWQsXG4gICAgICBjb2xzLFxuICAgICAgcm93cyxcbiAgICAgIGltYyxcbiAgICAgIHRpbGVzLFxuICAgIH0gPSBzdGF0ZS5jdXJyZW50XG5cbiAgICAvLyBhY3RpdmVcbiAgICBsZXQgYWN0aXZlID0gWy4uLkFycmF5KHJvd3MpXS5tYXAoKG4sIHkpID0+XG4gICAgICBbLi4uQXJyYXkoY29scyldLm1hcCgobiwgeCkgPT4gW3gsIHksIGZhbHNlXSlcbiAgICApXG4gICAgZm9yIChsZXQgaSA9IHRocmVzaG9sZDsgaSA8IGNlbGxzOyBpKyspIHtcbiAgICAgIGxldCB0aWxlID0gdGlsZXNbaV1cbiAgICAgIGxldCB4ID0gdGlsZS54XG4gICAgICBsZXQgeSA9IHRpbGUueVxuICAgICAgYWN0aXZlW3ldW3hdWzJdID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIHNsaWRlclxuICAgIGxldCB0aSA9IHRpX3JlZi5jdXJyZW50XG4gICAgbGV0IHRpeCA9IHRpLmdldENvbnRleHQoJzJkJylcbiAgICB0aXguZmlsbFN0eWxlID0gJyNkZGQnXG4gICAgdGl4LmZpbGxSZWN0KDAsIDAsIHRpLndpZHRoLCBzcCAqIDIpXG4gICAgdGl4LmZpbGxTdHlsZSA9ICcjOTk5J1xuICAgIGxldCB0bWFyayA9IE1hdGgubWluKFxuICAgICAgTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCh0aS53aWR0aCAqICgoY2VsbHMgLSB0aHJlc2hvbGQpIC8gY2VsbHMpKSksXG4gICAgICB0aS53aWR0aCAtIDJcbiAgICApXG4gICAgdGl4LmZpbGxSZWN0KHRtYXJrIC0gMSwgMCwgMywgc3AgKiAyKVxuXG4gICAgdGhyZXNoX3JlZi5jdXJyZW50LmlubmVySFRNTCA9IGNlbGxzIC0gdGhyZXNob2xkICsgJy8nICsgY2VsbHNcblxuICAgIGZ1bmN0aW9uIGdldEZyZWUoeCwgeSkge1xuICAgICAgLy8gaXQgaXQgb2ZmIG1hcCBpdCBpcyB1bmRlZmluZWRcbiAgICAgIGlmIChhY3RpdmVbeV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGxcbiAgICAgIGlmIChhY3RpdmVbeV1beF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGxcbiAgICAgIGxldCBjaGVjayA9IGFjdGl2ZVt5XVt4XVxuICAgICAgLy8gZmFsc2UgbWVhbnMgZW1wdHlcbiAgICAgIGlmIChjaGVja1syXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGdyaWRbeV1beF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gaWYgZmFsc2VcbiAgICAgIC8vIGlmIChjb29yZHMpIHtcbiAgICAgIC8vICAgbGV0IFtneCwgZ3ldID0gY29vcmRzXG4gICAgICAvLyB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TW92ZSh4LCB5KSB7XG4gICAgICBsZXQgcmF3ID0gW1xuICAgICAgICBbMCwgLTFdLFxuICAgICAgICBbMSwgLTFdLFxuICAgICAgICBbMSwgMV0sXG4gICAgICAgIFsxLCAwXSxcbiAgICAgICAgWzEsIDFdLFxuICAgICAgICBbMCwgMV0sXG4gICAgICAgIFstMSwgMV0sXG4gICAgICAgIFstMSwgMF0sXG4gICAgICAgIFstMSwgLTFdLFxuICAgICAgXS5tYXAodiA9PiBnZXRGcmVlKHggKyB2WzBdLCB5ICsgdlsxXSkpXG4gICAgICBsZXQgc2VsZiA9IGdyaWRbeV1beF1cbiAgICAgIGxldCBmaWx0ZXJlZCA9IHJhdy5maWx0ZXIodiA9PiB2ICE9PSBudWxsKVxuICAgICAgbGV0IGRpc3RhbmNlcyA9IGZpbHRlcmVkLm1hcCh2ID0+IHBhcnNlRmxvYXQodlsyXSkpXG4gICAgICBsZXQgbWluX2Rpc3RhbmNlID0gXy5taW4oZGlzdGFuY2VzKVxuICAgICAgaWYgKG1pbl9kaXN0YW5jZSA8IHNlbGZbMl0pIHtcbiAgICAgICAgbGV0IG1pbl9pID0gZGlzdGFuY2VzLmluZGV4T2YobWluX2Rpc3RhbmNlKVxuICAgICAgICByZXR1cm4gZmlsdGVyZWRbbWluX2ldXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9yZW5kZXIoKSB7XG4gICAgICBsZXQgbGVhc3RfYWN0aXZlID0gdHJ1ZVxuICAgICAgbGV0IG1vdmVkID0gZmFsc2VcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsczsgaSsrKSB7XG4gICAgICAgIGxldCBbeCwgeV0gPSBvcmRlcmVkW2ldXG4gICAgICAgIGxldCBjaGVjayA9IGFjdGl2ZVt5XVt4XVxuICAgICAgICBpZiAoY2hlY2tbMl0gPT09IHRydWUpIHtcbiAgICAgICAgICBsZWFzdF9hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgIGxldCBtb3ZlX3RvID0gZ2V0TW92ZSh4LCB5KVxuICAgICAgICAgIGlmIChtb3ZlX3RvICE9PSBudWxsKSB7XG4gICAgICAgICAgICBtb3ZlZCA9IHRydWVcbiAgICAgICAgICAgIGxldCBbbXgsIG15XSA9IG1vdmVfdG9cbiAgICAgICAgICAgIC8vIGxldCBvbGQgPSBhY3RpdmVbbXldW214XS5zbGljZSgpXG4gICAgICAgICAgICBsZXQgb2xkID0gW251bGwsIG51bGwsIGZhbHNlXVxuICAgICAgICAgICAgYWN0aXZlW215XVtteF0gPSBjaGVja1xuICAgICAgICAgICAgYWN0aXZlW3ldW3hdID0gb2xkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsZWFzdF9hY3RpdmUpIHtcbiAgICAgICAgY3guY2xlYXJSZWN0KDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KVxuICAgICAgfVxuICAgICAgaWYgKCFtb3ZlZCkge1xuICAgICAgICAvLyBvbmx5IGRyYXcgd2hlbiBkb25lXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHM7IGkrKykge1xuICAgICAgICAgIGxldCB4ID0gaSAlIGNvbHNcbiAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoaSAvIGNvbHMpXG4gICAgICAgICAgbGV0IGNoZWNrID0gYWN0aXZlW3ldW3hdXG4gICAgICAgICAgaWYgKGNoZWNrWzJdKSB7XG4gICAgICAgICAgICBjeC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgIGltYyxcbiAgICAgICAgICAgICAgLi4uc3B4KFsuLi5jaGVjay5zbGljZSgwLCAyKSwgMSwgMV0pLFxuICAgICAgICAgICAgICAuLi5zcHgoW3gsIHksIDEsIDFdKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtb3ZlZCAmJiAhY2xlYXJfcmVuZGVyX3JlZi5jdXJyZW50KSB7XG4gICAgICAgIGN4LmNsZWFyUmVjdCgwLCAwLCBjLndpZHRoLCBjLmhlaWdodClcblxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzOyBpKyspIHtcbiAgICAgICAgLy8gICBsZXQgeCA9IGkgJSBjb2xzXG4gICAgICAgIC8vICAgbGV0IHkgPSBNYXRoLmZsb29yKGkgLyBjb2xzKVxuICAgICAgICAvLyAgIGxldCBjaGVjayA9IGFjdGl2ZVt5XVt4XVxuICAgICAgICAvLyAgIC8vIGlmIChjaGVjaykge1xuICAgICAgICAvLyAgIGN4LmRyYXdJbWFnZShcbiAgICAgICAgLy8gICAgIGltYyxcbiAgICAgICAgLy8gICAgIC4uLnNweChbLi4uY2hlY2suc2xpY2UoMCwgMiksIDEsIDFdKSxcbiAgICAgICAgLy8gICAgIC4uLnNweChbeCwgeSwgMSwgMV0pXG4gICAgICAgIC8vICAgKVxuICAgICAgICAvLyAgIC8vIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIF9yZW5kZXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIF9yZW5kZXIoKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xpY2tTZXRUaHJlc2hvbGQoeCkge1xuICAgIGxldCByZWN0ID0gdGlfcmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB4ID0geCAtIHJlY3QubGVmdFxuICAgIGxldCBwZXJjZW50ID0geCAvIHRpX3JlZi5jdXJyZW50LndpZHRoXG4gICAgbGV0IHsgY2VsbHMsIHRocmVzaG9sZCB9ID0gc3RhdGUuY3VycmVudFxuICAgIGxldCBuZXdfdGhyZXNoID1cbiAgICAgIGNlbGxzIC0gTWF0aC5taW4oY2VsbHMsIE1hdGgubWF4KDAsIE1hdGgucm91bmQocGVyY2VudCAqIGNlbGxzKSkpXG4gICAgc3RhdGUuY3VycmVudC50aHJlc2hvbGQgPSBuZXdfdGhyZXNoXG4gICAgcmVuZGVyKClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZEltYWdlKCdtcnJvYm90Mi5qcGcnKVxuICB9KVxuXG4gIGZ1bmN0aW9uIHRyaWdnZXIoa2V5KSB7XG4gICAga2V5QWN0aW9uKGtleSwgbnVsbClcbiAgfVxuXG4gIGZ1bmN0aW9uIGtleUFjdGlvbihrZXksIGV2ZW50KSB7XG4gICAgbGV0IGttID0ga21fcmVmLmN1cnJlbnRcbiAgICBpZiAoZXZlbnQgPT09IG51bGwpIHtcbiAgICAgIGV2ZW50ID0geyBzaGlmdEtleTogZmFsc2UgfVxuICAgIH1cblxuICAgIGxldCBzaGlmdCA9IGV2ZW50LnNoaWZ0S2V5XG4gICAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKClcblxuICAgIGlmIChrZXkgPT09ICdvJykge1xuICAgICAgbGV0IGlucHV0ID0gZmlsZV9pbnB1dC5jdXJyZW50XG4gICAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBsZXQgZmlsZXMgPSAnJ1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuZmlsZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgICAgICAgIGZpbGVzICs9IGl0ZW0ubmFtZSArICcuJyArIGl0ZW0udHlwZVxuICAgICAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGl0ZW0pXG4gICAgICAgICAgbG9hZEltYWdlKHNyYylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSlcbiAgICAgIH1cbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSlcblxuICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdwJykge1xuICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcblxuICAgICAgY3JlZi5jdXJyZW50LnRvQmxvYihmdW5jdGlvbihibG9iKSB7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdkb3dubG9hZCcsXG4gICAgICAgICAgJ2NvbGxhcHNlLScgK1xuICAgICAgICAgICAgbmV3IERhdGUoKVxuICAgICAgICAgICAgICAudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgICAuc2xpY2UoMCwgLTQpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC8tL2csICcnKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvOi9nLCAnJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL18vZywgJycpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC4vZywgJycpICtcbiAgICAgICAgICAgICdaJyArXG4gICAgICAgICAgICAnLnBuZydcbiAgICAgICAgKVxuXG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSlcbiAgICAgICAgbGluay5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgIG5ldyBNb3VzZUV2ZW50KGBjbGlja2AsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ2wnIHx8IGtleSA9PT0gJ2Fycm93cmlnaHQnKSB7XG4gICAgICBsZXQgbW92ZSA9IDEwXG4gICAgICBpZiAoc2hpZnQpIG1vdmUgPSAxXG4gICAgICBzdGF0ZS5jdXJyZW50LnRocmVzaG9sZCA9IE1hdGgubWF4KDAsIHN0YXRlLmN1cnJlbnQudGhyZXNob2xkIC0gbW92ZSlcbiAgICAgIGNsZWFyX3JlbmRlcl9yZWYuY3VycmVudCA9IHRydWVcbiAgICAgIHJlbmRlcigpXG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdoJyB8fCBrZXkgPT09ICdhcnJvd2xlZnQnKSB7XG4gICAgICBsZXQgbW92ZSA9IDEwXG4gICAgICBpZiAoc2hpZnQpIG1vdmUgPSAxXG4gICAgICBzdGF0ZS5jdXJyZW50LnRocmVzaG9sZCA9IE1hdGgubWluKFxuICAgICAgICBzdGF0ZS5jdXJyZW50LmNlbGxzLFxuICAgICAgICBzdGF0ZS5jdXJyZW50LnRocmVzaG9sZCArIG1vdmVcbiAgICAgIClcbiAgICAgIGNsZWFyX3JlbmRlcl9yZWYuY3VycmVudCA9IHRydWVcbiAgICAgIHJlbmRlcigpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZG93bkhhbmRsZXIoZSkge1xuICAgIGttX3JlZi5jdXJyZW50W2Uua2V5XSA9IHRydWVcbiAgICBrZXlBY3Rpb24oZS5rZXksIGUpXG4gIH1cblxuICBmdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgIGttX3JlZi5jdXJyZW50W2Uua2V5XSA9IGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZSkge1xuICAgIGlmICghc2xpZGVyX3RvdWNoX21vZGUuY3VycmVudCkge1xuICAgICAgaWYgKHNsaWRlcl9jbGlja19yZWYuY3VycmVudCkge1xuICAgICAgICBjbGlja1NldFRocmVzaG9sZChlLmNsaWVudFgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJlcihpZCkge1xuICAgIGNsZWFyX3JlZi5jdXJyZW50LnB1c2goaWQpXG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclJlcGVhdEludGVydmFscygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsZWFyX3JlZi5jdXJyZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IGNsZWFyX3JlZi5jdXJyZW50W2ldXG4gICAgICBjbGVhckludGVydmFsKGl0ZW0pXG4gICAgfVxuICAgIGNsZWFyX3JlZi5jdXJyZW50ID0gW11cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyUHJlc3NHYXRlcygpIHtcbiAgICBwcmVzc19nYXRlcy5jdXJyZW50ID0gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoZSkge1xuICAgIGlmICghc2xpZGVyX3RvdWNoX21vZGUuY3VycmVudCkge1xuICAgICAgaWYgKHNsaWRlcl9jbGlja19yZWYuY3VycmVudCkge1xuICAgICAgICBzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgICBjbGlja1NldFRocmVzaG9sZChlLmNsaWVudFgpXG4gICAgICB9XG4gICAgfVxuICAgIGNsZWFyUHJlc3NHYXRlcygpXG4gICAgY2xlYXJSZXBlYXRJbnRlcnZhbHMoKVxuICB9XG5cbiAgZnVuY3Rpb24gb25Ecm9wKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgbGV0IGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXVxuICAgIGxldCBmaWxlbmFtZSA9IGZpbGUucGF0aCA/IGZpbGUucGF0aCA6IGZpbGUubmFtZSA/IGZpbGUubmFtZSA6ICcnXG4gICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcbiAgICBsb2FkSW1hZ2Uoc3JjKVxuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5J1xuICB9XG5cbiAgZnVuY3Rpb24gb25QYXN0ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBlLmNsaXBib2FyZERhdGEuaXRlbXMpIHtcbiAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGxldCBmaWxlID0gaXRlbS5nZXRBc0ZpbGUoKVxuICAgICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcbiAgICAgIGxvYWRJbWFnZShzcmMpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKGUpIHtcbiAgICBpZiAoc2xpZGVyX3RvdWNoX21vZGUuY3VycmVudCkge1xuICAgICAgaWYgKHNsaWRlcl9jbGlja19yZWYuY3VycmVudCkge1xuICAgICAgICBjbGlja1NldFRocmVzaG9sZChlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKGUpIHtcbiAgICAvLyB0b3VjaCBlbmQgZG9lc24ndCBzZWVtIHRvIGhhdmUgY2xpZW50IHhcbiAgICBjbGVhclByZXNzR2F0ZXMoKVxuICAgIGNsZWFyUmVwZWF0SW50ZXJ2YWxzKClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgb25QYXN0ZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWcpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3ApXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlVG91Y2hFbmQpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoTW92ZSwgeyBwYXNzaXZlOiBmYWxzZSB9KVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSlcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlTW91c2VVcClcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwYXN0ZScsIG9uUGFzdGUpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWcpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIG9uRHJvcClcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZVRvdWNoRW5kKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoTW92ZSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGxldCB0aXRsZSA9ICdDb2xsYXBzZSdcbiAgLy8gVE9ET1xuICBsZXQgZGVzY3JpcHRpb24gPVxuICAgICdTZWxlY3RpdmVseSBkZS1yZXMgaW1hZ2UgcGl4ZWxzIHJhbmtlZCB1c2luZyBhIGNvbXByZXNzaW9uIGFsZ29yaXRobS4nXG4gIGxldCBzaGFyZV9pbWdfdXJsID0gJ2h0dHBzOi8vcmVzLmNvbnN0cmFpbnQuc3lzdGVtcy9yZXMucG5nJ1xuICBsZXQgb2dfdXJsID0gJ2h0dHBzOi8vcmVzLmNvbnN0cmFpbnQuc3lzdGVtcydcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiB3aWR0aCAhPT0gbnVsbCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgd2lkdGg6IHdpZHRoICE9PSBudWxsID8gd2lkdGggKyBzcCA6ICdhdXRvJyxcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgcmVmPXtmaWxlX2lucHV0fSBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLXNlbGVjdFwiXG4gICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IHNwIC8gMiwgcGFkZGluZ1JpZ2h0OiBzcCAvIDIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGxhYmVsPVwib1wiXG4gICAgICAgICAgICAgIHByZXNzX2dhdGVzPXtwcmVzc19nYXRlc31cbiAgICAgICAgICAgICAgdGV4dF9sYWJlbD1cIkxvYWQgaW1hZ2UgKG9yIHBhc3RlIG9yIGRyb3ApXCJcbiAgICAgICAgICAgICAgY2xlYXJlcj17Y2xlYXJlcn1cbiAgICAgICAgICAgICAgdHJpZ2dlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyaWdnZXIoJ28nKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTcGFjZSAvPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBsYWJlbD1cInBcIlxuICAgICAgICAgICAgICBwcmVzc19nYXRlcz17cHJlc3NfZ2F0ZXN9XG4gICAgICAgICAgICAgIHRleHRfbGFiZWw9XCJTYXZlIHJlc3VsdCBhcyBwbmdcIlxuICAgICAgICAgICAgICBjbGVhcmVyPXtjbGVhcmVyfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcigncCcpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPExpbmUgLz5cblxuICAgICAgICAgIDxjYW52YXMgcmVmPXtjcmVmfSAvPlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICBoZWlnaHQ9e3NwICogMjN9XG4gICAgICAgICAgICAgIHJlZj17dGlfcmVmfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogc3AgKiAyLFxuICAgICAgICAgICAgICAgIGxlZnQ6IHNwICogMixcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAnY3Jvc3NoYWlyJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IHtcbiAgICAgICAgICAgICAgICBzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgc2xpZGVyX3RvdWNoX21vZGUuY3VycmVudCA9IHRydWVcbiAgICAgICAgICAgICAgICBjbGlja1NldFRocmVzaG9sZChlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uVG91Y2hFbmQ9e2UgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgIHNsaWRlcl90b3VjaF9tb2RlLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH0sIDQwMClcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghc2xpZGVyX3RvdWNoX21vZGUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZS5jbGllbnRYKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UmVwZWF0QnV0dG9uXG4gICAgICAgICAgICAgIGxhYmVsPVwiaFwiXG4gICAgICAgICAgICAgIHByZXNzX2dhdGVzPXtwcmVzc19nYXRlc31cbiAgICAgICAgICAgICAgY3VzdG9tX3N0eWxlPXt7IGhlaWdodDogc3AgKiAyLCB3aWR0aDogc3AgKiAyIH19XG4gICAgICAgICAgICAgIGNsZWFyZXI9e2NsZWFyZXJ9XG4gICAgICAgICAgICAgIHRyaWdnZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKCdoJylcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHJlZj17dGhyZXNoX3JlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogc3AgKiAyICsgJ3B4JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDxSZXBlYXRCdXR0b25cbiAgICAgICAgICAgICAgbGFiZWw9XCJsXCJcbiAgICAgICAgICAgICAgcHJlc3NfZ2F0ZXM9e3ByZXNzX2dhdGVzfVxuICAgICAgICAgICAgICBjdXN0b21fc3R5bGU9e3sgaGVpZ2h0OiBzcCAqIDIsIHdpZHRoOiBzcCAqIDIgfX1cbiAgICAgICAgICAgICAgY2xlYXJlcj17Y2xlYXJlcn1cbiAgICAgICAgICAgICAgdHJpZ2dlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyaWdnZXIoJ2wnKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBTdXBlcnBpeGVscyBhcmUgcmFua2VkIGFuZCBzZWxlY3RlZCBiYXNlZCBvbiB0aGVpciBzaXplIHdoZW5cbiAgICAgICAgICAgIGNvbXByZXNzZWQgKGFzIGEgcHJveHkgZm9yIGNvbXBsZXhpdHkpLiBMZWFybiBtb3JlIGFib3V0IGhvd1xuICAgICAgICAgICAgc2VsZWN0aW9uIHdvcmtzIGluIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3Jlcy5jb25zdHJhaW50LnN5c3RlbXNcIj5SZXM8L2E+LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9jb25zdHJhaW50LnN5c3RlbXNcIj5jb25zdHJhaW50LnN5c3RlbXM8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY29uc3RyYWludC1zeXN0ZW1zL3Jlc1wiPlxuICAgICAgICAgICAgICAgIFZpZXcgc291cmNlXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1JdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgfVxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICB9XG4gICAgICAgIGNhbnZhcyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbScsIG1vbm9zcGFjZTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/home/grant/s/cs/spiral/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.13d179cdce5d1bd3dc31.hot-update.js.map