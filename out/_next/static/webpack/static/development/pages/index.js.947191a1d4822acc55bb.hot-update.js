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
    className: "jsx-247518924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 641
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-247518924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643
    },
    __self: this
  }, title), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-247518924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644
    },
    __self: this
  })), __jsx("div", {
    style: {
      display: width !== null ? 'block' : 'none',
      width: width !== null ? width + sp : 'auto',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    className: "jsx-247518924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647
    },
    __self: this
  }, __jsx("input", {
    type: "file",
    ref: file_input,
    style: {
      display: 'none'
    },
    className: "jsx-247518924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655
    },
    __self: this
  }), __jsx("div", {
    style: {
      paddingLeft: sp / 2,
      paddingRight: sp / 2
    },
    className: "jsx-247518924" + " " + "no-select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-247518924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661
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
      lineNumber: 662
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671
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
      lineNumber: 672
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
    },
    __self: this
  }), __jsx("canvas", {
    ref: cref,
    className: "jsx-247518924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex',
      textAlign: 'center',
      width: '100%',
      position: 'relative'
    },
    className: "jsx-247518924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687
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
    className: "jsx-247518924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695
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
      lineNumber: 723
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
    className: "jsx-247518924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732
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
      lineNumber: 741
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "247518924",
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}html{background:#efefef;}canvas{background:#fff;}html,body{padding:0;margin:0;font-family:'custom',monospace;font-size:12px;line-height:16px;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3Mvc3BpcmFsL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWl2QnlCLEFBR2dDLEFBS0EsQUFNRixBQUdILEFBSU4sQUFPWSxVQU5iLE1BSlgsR0FIQSxBQVFrQyxFQWxCdUIsQUFLRCxDQW1CeEQsNEJBTGlCLGVBQ0UsaUJBQ25CLG9EQWZvQixFQUxwQixnQkFNQSIsImZpbGUiOiIvaG9tZS9ncmFudC9zL2NzL3NwaXJhbC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5sZXQgc3AgPSAxNlxuLy8gbGV0IGNvbHMgPSA0MFxuLy8gbGV0IHJvd3MgPSAzMFxuLy8gbGV0IGNlbGxzID0gY29scyAqIHJvd3NcblxuZnVuY3Rpb24gc3B4KGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5tYXAodiA9PiB2ICogc3ApXG59XG5cbmxldCBMaW5lID0gKCkgPT4gPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHNwLCB3aWR0aDogJzEwMCUnIH19IC8+XG5cbmxldCBTcGFjZSA9ICgpID0+IDxkaXYgc3R5bGU9e3sgd2lkdGg6IHNwIC8gMiB9fSAvPlxuXG5sZXQgQnV0dG9uID0gKHtcbiAgbGFiZWwsXG4gIGNsZWFyZXIsXG4gIHRyaWdnZXIsXG4gIHRleHRfbGFiZWwsXG4gIHByZXNzX2dhdGVzLFxuICBjdXN0b21fc3R5bGUsXG59KSA9PiB7XG4gIGxldCBidXR0b25fc3R5bGUgPSB7XG4gICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIHdpZHRoOiBzcCxcbiAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gIH1cbiAgaWYgKGN1c3RvbV9zdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgYnV0dG9uX3N0eWxlID0gT2JqZWN0LmFzc2lnbihidXR0b25fc3R5bGUsIGN1c3RvbV9zdHlsZSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBzdHlsZT17YnV0dG9uX3N0eWxlfVxuICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAge3RleHRfbGFiZWwgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgY3Vyc29yOiAnZGVmYXVsdCcgfX1cbiAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgPGRpdj57dGV4dF9sYWJlbH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5sZXQgUmVwZWF0QnV0dG9uID0gKHtcbiAgbGFiZWwsXG4gIGNsZWFyZXIsXG4gIHRyaWdnZXIsXG4gIHRleHRfbGFiZWwsXG4gIHByZXNzX2dhdGVzLFxuICBjdXN0b21fc3R5bGUsXG59KSA9PiB7XG4gIGxldCByZXBlYXRfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBzdGFydF9nYXRlID0gdXNlUmVmKGZhbHNlKVxuXG4gIGxldCB0b3VjaF9tb2RlID0gdXNlUmVmKGZhbHNlKVxuXG4gIGxldCBidXR0b25fc3R5bGUgPSB7XG4gICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIHdpZHRoOiBzcCxcbiAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gIH1cbiAgaWYgKGN1c3RvbV9zdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgYnV0dG9uX3N0eWxlID0gT2JqZWN0LmFzc2lnbihidXR0b25fc3R5bGUsIGN1c3RvbV9zdHlsZSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBzdHlsZT17YnV0dG9uX3N0eWxlfVxuICAgICAgICBvblRvdWNoU3RhcnQ9e2UgPT4ge1xuICAgICAgICAgIHRvdWNoX21vZGUuY3VycmVudCA9IHRydWVcbiAgICAgICAgICBwcmVzc19nYXRlcy5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByZXNzX2dhdGVzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgcmVwZWF0X3JlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgICAgICB9LCAxMDApXG4gICAgICAgICAgICAgIGNsZWFyZXIocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDQwMClcbiAgICAgICAgfX1cbiAgICAgICAgb25Ub3VjaEVuZD17ZSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0b3VjaF9tb2RlLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgICAgIH0sIDQwMClcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfX1cbiAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgIGlmICghdG91Y2hfbW9kZS5jdXJyZW50KSB7XG4gICAgICAgICAgICBwcmVzc19nYXRlcy5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHByZXNzX2dhdGVzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICByZXBlYXRfcmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICAgICAgICB9LCAxMDApXG4gICAgICAgICAgICAgICAgY2xlYXJlcihyZXBlYXRfcmVmLmN1cnJlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDQwMClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VVcD17ZSA9PiB7XG4gICAgICAgICAgaWYgKCF0b3VjaF9tb2RlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9idXR0b24+XG4gICAgICB7dGV4dF9sYWJlbCAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBjdXJzb3I6ICdkZWZhdWx0JyB9fVxuICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICAgIHJlcGVhdF9yZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICBjbGVhcmVyKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgIH19XG4gICAgICAgICAgb25Nb3VzZVVwPXtlID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICA8ZGl2Pnt0ZXh0X2xhYmVsfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGxldCBjcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBjbGVhcl9yZWYgPSB1c2VSZWYoZmFsc2UpXG4gIGxldCBzdGF0ZSA9IHVzZVJlZih7fSlcbiAgbGV0IGttX3JlZiA9IHVzZVJlZih7fSlcbiAgbGV0IHNsaWRlcl9jbGlja19yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHNsaWRlcl90b3VjaF9tb2RlID0gdXNlUmVmKGZhbHNlKVxuICBsZXQgcHJlc3NfZ2F0ZXMgPSB1c2VSZWYoZmFsc2UpXG4gIGxldCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBmaWxlX2lucHV0ID0gdXNlUmVmKG51bGwpXG4gIGxldCB0aV9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHRocmVzaF9yZWYgPSB1c2VSZWYobnVsbClcblxuICBmdW5jdGlvbiBsb2FkSW1hZ2Uoc3JjKSB7XG4gICAgbGV0IGMgPSBjcmVmLmN1cnJlbnRcbiAgICBsZXQgY3ggPSBjLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgbGV0IGFkal93aWR0aCA9IE1hdGgubWluKFxuICAgICAgICBpbWcud2lkdGgsXG4gICAgICAgIE1hdGguZmxvb3Iod2luZG93LmlubmVyV2lkdGggLSBzcCAqIDIpIC0gc3AgLyAyXG4gICAgICApXG4gICAgICBsZXQgZHNwID0gc3BcbiAgICAgIGxldCBzbmFwdyA9IE1hdGgucm91bmQoYWRqX3dpZHRoIC8gZHNwKSAqIGRzcFxuICAgICAgbGV0IHNuYXByID0gc25hcHcgLyBpbWcud2lkdGhcbiAgICAgIGxldCBzbmFwaCA9IE1hdGgucm91bmQoKGltZy5oZWlnaHQgKiBzbmFwcikgLyBkc3ApICogZHNwXG5cbiAgICAgIGltZy53aWR0aCA9IHNuYXB3XG4gICAgICBpbWcuaGVpZ2h0ID0gc25hcGhcblxuICAgICAgc2V0V2lkdGgoaW1nLndpZHRoKVxuXG4gICAgICBjLndpZHRoID0gaW1nLndpZHRoXG4gICAgICBjLmhlaWdodCA9IGltZy5oZWlnaHRcblxuICAgICAgbGV0IGNvbHMgPSBpbWcud2lkdGggLyBzcFxuICAgICAgbGV0IHJvd3MgPSBpbWcuaGVpZ2h0IC8gc3BcbiAgICAgIGxldCBjZWxscyA9IGNvbHMgKiByb3dzXG5cbiAgICAgIC8vIHNpemUgc2xpZGVyXG4gICAgICBsZXQgdGkgPSB0aV9yZWYuY3VycmVudFxuICAgICAgdGkud2lkdGggPSBpbWcud2lkdGggLSBzcCAqIDRcbiAgICAgIHRpLmhlaWdodCA9IHNwICogMlxuXG4gICAgICAvLyBwcmVzZXJ2ZSBkaW1lbnNpb25zXG4gICAgICBsZXQgdF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgdF9pbWcud2lkdGggPSBjLndpZHRoXG4gICAgICB0X2ltZy5oZWlnaHQgPSBjLmhlaWdodFxuICAgICAgbGV0IHRfaW1neCA9IHRfaW1nLmdldENvbnRleHQoJzJkJylcbiAgICAgIHRfaW1neC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjLndpZHRoLCBjLmhlaWdodClcbiAgICAgIGltZyA9IHRfaW1nXG5cbiAgICAgIC8vIGRyYXcgb3JpZ2luYWwgaW1hZ2VcbiAgICAgIC8vIGN4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KVxuXG4gICAgICAvLyBzdG9yZSBvcmlnaW5hbCBpbWFnZVxuICAgICAgbGV0IGltYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICBpbWMud2lkdGggPSBjLndpZHRoXG4gICAgICBpbWMuaGVpZ2h0ID0gYy5oZWlnaHRcbiAgICAgIGxldCBpbXggPSBpbWMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgaW14LmRyYXdJbWFnZShpbWcsIDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KVxuXG4gICAgICAvLyBjdXQgdXAgb3JpZ2luYWwgaW1hZ2VcbiAgICAgIGxldCB0aWxlcyA9IFtdXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzOyBpKyspIHtcbiAgICAgICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgICB0LndpZHRoID0gc3BcbiAgICAgICAgdC5oZWlnaHQgPSBzcFxuICAgICAgICBsZXQgdHggPSB0LmdldENvbnRleHQoJzJkJylcblxuICAgICAgICBsZXQgeCA9IGkgJSBjb2xzXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihpIC8gY29scylcblxuICAgICAgICB0eC5kcmF3SW1hZ2UoaW1jLCB4ICogc3AsIHkgKiBzcCwgc3AsIHNwLCAwLCAwLCBzcCwgc3ApXG5cbiAgICAgICAgbGV0IGNvbXBsZXhpdHkgPSB0LnRvRGF0YVVSTCgpLmxlbmd0aCAvIChzcCAqIHNwKVxuXG4gICAgICAgIHRpbGVzLnB1c2goeyB0LCBjOiBjb21wbGV4aXR5LCB4LCB5LCBpIH0pXG4gICAgICB9XG4gICAgICB0aWxlcyA9IF8uc29ydEJ5KHRpbGVzLCAnYycpXG5cbiAgICAgIC8vIGdyaWQgd2l0aCBjb29yZGluYXRlc1xuICAgICAgbGV0IGdyaWQgPSBbLi4uQXJyYXkocm93cyldLm1hcCgobiwgeSkgPT5cbiAgICAgICAgWy4uLkFycmF5KGNvbHMpXS5tYXAoKG4sIHgpID0+IHtcbiAgICAgICAgICBsZXQgZCA9IE1hdGguc3FydChcbiAgICAgICAgICAgIE1hdGgucG93KHggLSBjb2xzIC8gMiwgMikgKyBNYXRoLnBvdyh5IC0gcm93cyAvIDIsIDIpXG4gICAgICAgICAgKS50b0ZpeGVkKDgpXG4gICAgICAgICAgcmV0dXJuIFt4LCB5LCBkXVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICAvLyBzcGlyYWwgb3JkZXIgZm9yIGl0ZXJhdGlvblxuICAgICAgbGV0IG9yZGVyZWQgPSBfLmZsYXR0ZW4oZ3JpZClcbiAgICAgIG9yZGVyZWQuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBhWzJdIC0gYlsyXVxuICAgICAgfSlcblxuICAgICAgLy8gc3BpcmFsIHRlc3RcbiAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgODAwOyBpKyspIHtcbiAgICAgIC8vICAgbGV0IFt4LCB5XSA9IG9yZGVyZWRbaV1cbiAgICAgIC8vICAgY3guZmlsbFJlY3QoLi4uc3B4KFt4LCB5LCAxLCAxXSkpXG4gICAgICAvLyB9XG5cbiAgICAgIGxldCB0aHJlc2hvbGQgPSBjZWxscyAtIDMwMFxuICAgICAgc3RhdGUuY3VycmVudC50aHJlc2hvbGQgPSB0aHJlc2hvbGRcbiAgICAgIHN0YXRlLmN1cnJlbnQuY2VsbHMgPSBjZWxsc1xuICAgICAgc3RhdGUuY3VycmVudC5vcmRlcmVkID0gb3JkZXJlZFxuICAgICAgc3RhdGUuY3VycmVudC5ncmlkID0gZ3JpZFxuICAgICAgc3RhdGUuY3VycmVudC5jb2xzID0gY29sc1xuICAgICAgc3RhdGUuY3VycmVudC5yb3dzID0gcm93c1xuICAgICAgc3RhdGUuY3VycmVudC5pbWMgPSBpbWNcbiAgICAgIHN0YXRlLmN1cnJlbnQudGlsZXMgPSB0aWxlc1xuXG4gICAgICByZW5kZXIoKVxuXG4gICAgICAvLyBjeC5maWxsU3R5bGUgPSAncmVkJ1xuICAgICAgLy8gY3guZmlsbFJlY3QoKGNvbHMgLyAyKSAqIHNwIC0gMSwgMCwgMiwgYy5oZWlnaHQpXG4gICAgICAvLyBjeC5maWxsUmVjdCgwLCAocm93cyAvIDIpICogc3AgLSAxLCBjLndpZHRoLCAyKVxuICAgICAgLy8gY3guZmlsbFN0eWxlID0gJ2JsYWNrJ1xuICAgIH1cbiAgICBpbWcuc3JjID0gc3JjXG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgY2xlYXJfcmVuZGVyX3JlZi5jdXJyZW50ID0gZmFsc2VcbiAgICBsZXQgYyA9IGNyZWYuY3VycmVudFxuICAgIGxldCBjeCA9IGMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCB7XG4gICAgICBjZWxscyxcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIG9yZGVyZWQsXG4gICAgICBncmlkLFxuICAgICAgY29scyxcbiAgICAgIHJvd3MsXG4gICAgICBpbWMsXG4gICAgICB0aWxlcyxcbiAgICB9ID0gc3RhdGUuY3VycmVudFxuXG4gICAgLy8gYWN0aXZlXG4gICAgbGV0IGFjdGl2ZSA9IFsuLi5BcnJheShyb3dzKV0ubWFwKChuLCB5KSA9PlxuICAgICAgWy4uLkFycmF5KGNvbHMpXS5tYXAoKG4sIHgpID0+IFt4LCB5LCBmYWxzZV0pXG4gICAgKVxuICAgIGZvciAobGV0IGkgPSB0aHJlc2hvbGQ7IGkgPCBjZWxsczsgaSsrKSB7XG4gICAgICBsZXQgdGlsZSA9IHRpbGVzW2ldXG4gICAgICBsZXQgeCA9IHRpbGUueFxuICAgICAgbGV0IHkgPSB0aWxlLnlcbiAgICAgIGFjdGl2ZVt5XVt4XVsyXSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBzbGlkZXJcbiAgICBsZXQgdGkgPSB0aV9yZWYuY3VycmVudFxuICAgIGxldCB0aXggPSB0aS5nZXRDb250ZXh0KCcyZCcpXG4gICAgdGl4LmZpbGxTdHlsZSA9ICcjZGRkJ1xuICAgIHRpeC5maWxsUmVjdCgwLCAwLCB0aS53aWR0aCwgc3AgKiAyKVxuICAgIHRpeC5maWxsU3R5bGUgPSAnIzk5OSdcbiAgICBsZXQgdG1hcmsgPSBNYXRoLm1pbihcbiAgICAgIE1hdGgubWF4KDEsIE1hdGgucm91bmQodGkud2lkdGggKiAoKGNlbGxzIC0gdGhyZXNob2xkKSAvIGNlbGxzKSkpLFxuICAgICAgdGkud2lkdGggLSAyXG4gICAgKVxuICAgIHRpeC5maWxsUmVjdCh0bWFyayAtIDEsIDAsIDMsIHNwICogMilcblxuICAgIGZ1bmN0aW9uIGdldEZyZWUoeCwgeSkge1xuICAgICAgLy8gaXQgaXQgb2ZmIG1hcCBpdCBpcyB1bmRlZmluZWRcbiAgICAgIGlmIChhY3RpdmVbeV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGxcbiAgICAgIGlmIChhY3RpdmVbeV1beF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGxcbiAgICAgIGxldCBjaGVjayA9IGFjdGl2ZVt5XVt4XVxuICAgICAgLy8gZmFsc2UgbWVhbnMgZW1wdHlcbiAgICAgIGlmIChjaGVja1syXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGdyaWRbeV1beF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gaWYgZmFsc2VcbiAgICAgIC8vIGlmIChjb29yZHMpIHtcbiAgICAgIC8vICAgbGV0IFtneCwgZ3ldID0gY29vcmRzXG4gICAgICAvLyB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TW92ZSh4LCB5KSB7XG4gICAgICBsZXQgcmF3ID0gW1xuICAgICAgICBbMCwgLTFdLFxuICAgICAgICBbMSwgLTFdLFxuICAgICAgICBbMSwgMV0sXG4gICAgICAgIFsxLCAwXSxcbiAgICAgICAgWzEsIDFdLFxuICAgICAgICBbMCwgMV0sXG4gICAgICAgIFstMSwgMV0sXG4gICAgICAgIFstMSwgMF0sXG4gICAgICAgIFstMSwgLTFdLFxuICAgICAgXS5tYXAodiA9PiBnZXRGcmVlKHggKyB2WzBdLCB5ICsgdlsxXSkpXG4gICAgICBsZXQgc2VsZiA9IGdyaWRbeV1beF1cbiAgICAgIGxldCBmaWx0ZXJlZCA9IHJhdy5maWx0ZXIodiA9PiB2ICE9PSBudWxsKVxuICAgICAgbGV0IGRpc3RhbmNlcyA9IGZpbHRlcmVkLm1hcCh2ID0+IHBhcnNlRmxvYXQodlsyXSkpXG4gICAgICBsZXQgbWluX2Rpc3RhbmNlID0gXy5taW4oZGlzdGFuY2VzKVxuICAgICAgaWYgKG1pbl9kaXN0YW5jZSA8IHNlbGZbMl0pIHtcbiAgICAgICAgbGV0IG1pbl9pID0gZGlzdGFuY2VzLmluZGV4T2YobWluX2Rpc3RhbmNlKVxuICAgICAgICByZXR1cm4gZmlsdGVyZWRbbWluX2ldXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9yZW5kZXIoKSB7XG4gICAgICBsZXQgbGVhc3RfYWN0aXZlID0gdHJ1ZVxuICAgICAgbGV0IG1vdmVkID0gZmFsc2VcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsczsgaSsrKSB7XG4gICAgICAgIGxldCBbeCwgeV0gPSBvcmRlcmVkW2ldXG4gICAgICAgIGxldCBjaGVjayA9IGFjdGl2ZVt5XVt4XVxuICAgICAgICBpZiAoY2hlY2tbMl0gPT09IHRydWUpIHtcbiAgICAgICAgICBsZWFzdF9hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgIGxldCBtb3ZlX3RvID0gZ2V0TW92ZSh4LCB5KVxuICAgICAgICAgIGlmIChtb3ZlX3RvICE9PSBudWxsKSB7XG4gICAgICAgICAgICBtb3ZlZCA9IHRydWVcbiAgICAgICAgICAgIGxldCBbbXgsIG15XSA9IG1vdmVfdG9cbiAgICAgICAgICAgIC8vIGxldCBvbGQgPSBhY3RpdmVbbXldW214XS5zbGljZSgpXG4gICAgICAgICAgICBsZXQgb2xkID0gW251bGwsIG51bGwsIGZhbHNlXVxuICAgICAgICAgICAgYWN0aXZlW215XVtteF0gPSBjaGVja1xuICAgICAgICAgICAgYWN0aXZlW3ldW3hdID0gb2xkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsZWFzdF9hY3RpdmUpIHtcbiAgICAgICAgY3guY2xlYXJSZWN0KDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KVxuICAgICAgfVxuICAgICAgaWYgKCFtb3ZlZCkge1xuICAgICAgICAvLyBvbmx5IGRyYXcgd2hlbiBkb25lXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHM7IGkrKykge1xuICAgICAgICAgIGxldCB4ID0gaSAlIGNvbHNcbiAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoaSAvIGNvbHMpXG4gICAgICAgICAgbGV0IGNoZWNrID0gYWN0aXZlW3ldW3hdXG4gICAgICAgICAgaWYgKGNoZWNrWzJdKSB7XG4gICAgICAgICAgICBjeC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgIGltYyxcbiAgICAgICAgICAgICAgLi4uc3B4KFsuLi5jaGVjay5zbGljZSgwLCAyKSwgMSwgMV0pLFxuICAgICAgICAgICAgICAuLi5zcHgoW3gsIHksIDEsIDFdKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtb3ZlZCAmJiAhY2xlYXJfcmVuZGVyX3JlZi5jdXJyZW50KSB7XG4gICAgICAgIGN4LmNsZWFyUmVjdCgwLCAwLCBjLndpZHRoLCBjLmhlaWdodClcblxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzOyBpKyspIHtcbiAgICAgICAgLy8gICBsZXQgeCA9IGkgJSBjb2xzXG4gICAgICAgIC8vICAgbGV0IHkgPSBNYXRoLmZsb29yKGkgLyBjb2xzKVxuICAgICAgICAvLyAgIGxldCBjaGVjayA9IGFjdGl2ZVt5XVt4XVxuICAgICAgICAvLyAgIC8vIGlmIChjaGVjaykge1xuICAgICAgICAvLyAgIGN4LmRyYXdJbWFnZShcbiAgICAgICAgLy8gICAgIGltYyxcbiAgICAgICAgLy8gICAgIC4uLnNweChbLi4uY2hlY2suc2xpY2UoMCwgMiksIDEsIDFdKSxcbiAgICAgICAgLy8gICAgIC4uLnNweChbeCwgeSwgMSwgMV0pXG4gICAgICAgIC8vICAgKVxuICAgICAgICAvLyAgIC8vIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIF9yZW5kZXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIF9yZW5kZXIoKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xpY2tTZXRUaHJlc2hvbGQoeCkge1xuICAgIGxldCByZWN0ID0gdGlfcmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB4ID0geCAtIHJlY3QubGVmdFxuICAgIGxldCBwZXJjZW50ID0geCAvIHRpX3JlZi5jdXJyZW50LndpZHRoXG4gICAgbGV0IHsgY2VsbHMsIHRocmVzaG9sZCB9ID0gc3RhdGUuY3VycmVudFxuICAgIGxldCBuZXdfdGhyZXNoID1cbiAgICAgIGNlbGxzIC0gTWF0aC5taW4oY2VsbHMsIE1hdGgubWF4KDAsIE1hdGgucm91bmQocGVyY2VudCAqIGNlbGxzKSkpXG4gICAgc3RhdGUuY3VycmVudC50aHJlc2hvbGQgPSBuZXdfdGhyZXNoXG4gICAgcmVuZGVyKClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZEltYWdlKCdtcnJvYm90Mi5qcGcnKVxuICB9KVxuXG4gIGZ1bmN0aW9uIHRyaWdnZXIoa2V5KSB7XG4gICAga2V5QWN0aW9uKGtleSwgbnVsbClcbiAgfVxuXG4gIGZ1bmN0aW9uIGtleUFjdGlvbihrZXksIGV2ZW50KSB7XG4gICAgbGV0IGttID0ga21fcmVmLmN1cnJlbnRcbiAgICBpZiAoZXZlbnQgPT09IG51bGwpIHtcbiAgICAgIGV2ZW50ID0geyBzaGlmdEtleTogZmFsc2UgfVxuICAgIH1cblxuICAgIGxldCBzaGlmdCA9IGV2ZW50LnNoaWZ0S2V5XG4gICAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKClcblxuICAgIGlmIChrZXkgPT09ICdvJykge1xuICAgICAgbGV0IGlucHV0ID0gZmlsZV9pbnB1dC5jdXJyZW50XG4gICAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBsZXQgZmlsZXMgPSAnJ1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuZmlsZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgICAgICAgIGZpbGVzICs9IGl0ZW0ubmFtZSArICcuJyArIGl0ZW0udHlwZVxuICAgICAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGl0ZW0pXG4gICAgICAgICAgbG9hZEltYWdlKHNyYylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSlcbiAgICAgIH1cbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSlcblxuICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdwJykge1xuICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcblxuICAgICAgY3JlZi5jdXJyZW50LnRvQmxvYihmdW5jdGlvbihibG9iKSB7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdkb3dubG9hZCcsXG4gICAgICAgICAgJ3Jlcy0nICtcbiAgICAgICAgICAgIG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgICAgLnNsaWNlKDAsIC00KVxuICAgICAgICAgICAgICAucmVwbGFjZSgvLS9nLCAnJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoLzovZywgJycpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9fL2csICcnKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvXFwuL2csICcnKSArXG4gICAgICAgICAgICAnWicgK1xuICAgICAgICAgICAgJy5wbmcnXG4gICAgICAgIClcblxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpXG4gICAgICAgIGxpbmsuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICBuZXcgTW91c2VFdmVudChgY2xpY2tgLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChrZXkgPT09ICdsJyB8fCBrZXkgPT09ICdhcnJvd3JpZ2h0Jykge1xuICAgICAgbGV0IG1vdmUgPSAxMFxuICAgICAgaWYgKHNoaWZ0KSBtb3ZlID0gMVxuICAgICAgc3RhdGUuY3VycmVudC50aHJlc2hvbGQgPSBNYXRoLm1heCgwLCBzdGF0ZS5jdXJyZW50LnRocmVzaG9sZCAtIG1vdmUpXG4gICAgICBjbGVhcl9yZW5kZXJfcmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICByZW5kZXIoKVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnaCcgfHwga2V5ID09PSAnYXJyb3dsZWZ0Jykge1xuICAgICAgbGV0IG1vdmUgPSAxMFxuICAgICAgaWYgKHNoaWZ0KSBtb3ZlID0gMVxuICAgICAgc3RhdGUuY3VycmVudC50aHJlc2hvbGQgPSBNYXRoLm1pbihcbiAgICAgICAgc3RhdGUuY3VycmVudC5jZWxscyxcbiAgICAgICAgc3RhdGUuY3VycmVudC50aHJlc2hvbGQgKyBtb3ZlXG4gICAgICApXG4gICAgICBjbGVhcl9yZW5kZXJfcmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICByZW5kZXIoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRvd25IYW5kbGVyKGUpIHtcbiAgICBrbV9yZWYuY3VycmVudFtlLmtleV0gPSB0cnVlXG4gICAga2V5QWN0aW9uKGUua2V5LCBlKVxuICB9XG5cbiAgZnVuY3Rpb24gdXBIYW5kbGVyKGUpIHtcbiAgICBrbV9yZWYuY3VycmVudFtlLmtleV0gPSBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlKGUpIHtcbiAgICBpZiAoIXNsaWRlcl90b3VjaF9tb2RlLmN1cnJlbnQpIHtcbiAgICAgIGlmIChzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZS5jbGllbnRYKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyZXIoaWQpIHtcbiAgICBjbGVhcl9yZWYuY3VycmVudC5wdXNoKGlkKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJSZXBlYXRJbnRlcnZhbHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGVhcl9yZWYuY3VycmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSBjbGVhcl9yZWYuY3VycmVudFtpXVxuICAgICAgY2xlYXJJbnRlcnZhbChpdGVtKVxuICAgIH1cbiAgICBjbGVhcl9yZWYuY3VycmVudCA9IFtdXG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclByZXNzR2F0ZXMoKSB7XG4gICAgcHJlc3NfZ2F0ZXMuY3VycmVudCA9IGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKGUpIHtcbiAgICBpZiAoIXNsaWRlcl90b3VjaF9tb2RlLmN1cnJlbnQpIHtcbiAgICAgIGlmIChzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQpIHtcbiAgICAgICAgc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZS5jbGllbnRYKVxuICAgICAgfVxuICAgIH1cbiAgICBjbGVhclByZXNzR2F0ZXMoKVxuICAgIGNsZWFyUmVwZWF0SW50ZXJ2YWxzKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJvcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGxldCBmaWxlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF1cbiAgICBsZXQgZmlsZW5hbWUgPSBmaWxlLnBhdGggPyBmaWxlLnBhdGggOiBmaWxlLm5hbWUgPyBmaWxlLm5hbWUgOiAnJ1xuICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgbG9hZEltYWdlKHNyYylcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZyhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSdcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUGFzdGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZS5jbGlwYm9hcmREYXRhLml0ZW1zKSB7XG4gICAgICBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPCAwKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBsZXQgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKClcbiAgICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgICBsb2FkSW1hZ2Uoc3JjKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZShlKSB7XG4gICAgaWYgKHNsaWRlcl90b3VjaF9tb2RlLmN1cnJlbnQpIHtcbiAgICAgIGlmIChzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZChlKSB7XG4gICAgLy8gdG91Y2ggZW5kIGRvZXNuJ3Qgc2VlbSB0byBoYXZlIGNsaWVudCB4XG4gICAgY2xlYXJQcmVzc0dhdGVzKClcbiAgICBjbGVhclJlcGVhdEludGVydmFscygpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIG9uUGFzdGUpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZVRvdWNoRW5kKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUsIHsgcGFzc2l2ZTogZmFsc2UgfSlcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3ApXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVUb3VjaEVuZClcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUpXG4gICAgfVxuICB9LCBbXSlcblxuICBsZXQgdGl0bGUgPSAnQ29sbGFwc2UnXG4gIC8vIFRPRE9cbiAgbGV0IGRlc2NyaXB0aW9uID1cbiAgICAnU2VsZWN0aXZlbHkgZGUtcmVzIGltYWdlIHBpeGVscyByYW5rZWQgdXNpbmcgYSBjb21wcmVzc2lvbiBhbGdvcml0aG0uJ1xuICBsZXQgc2hhcmVfaW1nX3VybCA9ICdodHRwczovL3Jlcy5jb25zdHJhaW50LnN5c3RlbXMvcmVzLnBuZydcbiAgbGV0IG9nX3VybCA9ICdodHRwczovL3Jlcy5jb25zdHJhaW50LnN5c3RlbXMnXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogd2lkdGggIT09IG51bGwgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgICAgIHdpZHRoOiB3aWR0aCAhPT0gbnVsbCA/IHdpZHRoICsgc3AgOiAnYXV0bycsXG4gICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIHJlZj17ZmlsZV9pbnB1dH0gc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJuby1zZWxlY3RcIlxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBzcCAvIDIsIHBhZGRpbmdSaWdodDogc3AgLyAyIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBsYWJlbD1cIm9cIlxuICAgICAgICAgICAgICBwcmVzc19nYXRlcz17cHJlc3NfZ2F0ZXN9XG4gICAgICAgICAgICAgIHRleHRfbGFiZWw9XCJMb2FkIGltYWdlIChvciBwYXN0ZSBvciBkcm9wKVwiXG4gICAgICAgICAgICAgIGNsZWFyZXI9e2NsZWFyZXJ9XG4gICAgICAgICAgICAgIHRyaWdnZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKCdvJylcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgbGFiZWw9XCJwXCJcbiAgICAgICAgICAgICAgcHJlc3NfZ2F0ZXM9e3ByZXNzX2dhdGVzfVxuICAgICAgICAgICAgICB0ZXh0X2xhYmVsPVwiU2F2ZSByZXN1bHQgYXMgcG5nXCJcbiAgICAgICAgICAgICAgY2xlYXJlcj17Y2xlYXJlcn1cbiAgICAgICAgICAgICAgdHJpZ2dlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyaWdnZXIoJ3AnKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxMaW5lIC8+XG5cbiAgICAgICAgICA8Y2FudmFzIHJlZj17Y3JlZn0gLz5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgaGVpZ2h0PXtzcCAqIDIzfVxuICAgICAgICAgICAgICByZWY9e3RpX3JlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHNwICogMixcbiAgICAgICAgICAgICAgICBsZWZ0OiBzcCAqIDIsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ2Nyb3NzaGFpcicsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17ZSA9PiB7XG4gICAgICAgICAgICAgICAgc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHNsaWRlcl90b3VjaF9tb2RlLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvblRvdWNoRW5kPXtlID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNsaWRlcl9jbGlja19yZWYuY3VycmVudCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICBzbGlkZXJfdG91Y2hfbW9kZS5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9LCA0MDApXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXNsaWRlcl90b3VjaF9tb2RlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHNsaWRlcl9jbGlja19yZWYuY3VycmVudCA9IHRydWVcbiAgICAgICAgICAgICAgICAgIGNsaWNrU2V0VGhyZXNob2xkKGUuY2xpZW50WClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFJlcGVhdEJ1dHRvblxuICAgICAgICAgICAgICBsYWJlbD1cImhcIlxuICAgICAgICAgICAgICBwcmVzc19nYXRlcz17cHJlc3NfZ2F0ZXN9XG4gICAgICAgICAgICAgIGN1c3RvbV9zdHlsZT17eyBoZWlnaHQ6IHNwICogMiwgd2lkdGg6IHNwICogMiB9fVxuICAgICAgICAgICAgICBjbGVhcmVyPXtjbGVhcmVyfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcignaCcpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICByZWY9e3RocmVzaF9yZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHNwICogMiArICdweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8UmVwZWF0QnV0dG9uXG4gICAgICAgICAgICAgIGxhYmVsPVwibFwiXG4gICAgICAgICAgICAgIHByZXNzX2dhdGVzPXtwcmVzc19nYXRlc31cbiAgICAgICAgICAgICAgY3VzdG9tX3N0eWxlPXt7IGhlaWdodDogc3AgKiAyLCB3aWR0aDogc3AgKiAyIH19XG4gICAgICAgICAgICAgIGNsZWFyZXI9e2NsZWFyZXJ9XG4gICAgICAgICAgICAgIHRyaWdnZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKCdsJylcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1JdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgfVxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICB9XG4gICAgICAgIGNhbnZhcyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbScsIG1vbm9zcGFjZTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/home/grant/s/cs/spiral/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.947191a1d4822acc55bb.hot-update.js.map