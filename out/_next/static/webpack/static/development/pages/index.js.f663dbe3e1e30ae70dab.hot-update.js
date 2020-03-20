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
      var aspect = img.width / img.height;
      var window_aspect = window.innerWidth / (window.innerHeight - sp * 2);
      console.log(aspect);
      console.log(window_aspect);
      var snapw, snaph;

      if (aspect < window_aspect) {
        // worry about height
        var adj_height = Math.min(img.height, Math.floor(window.innerHeight - sp * 2) - sp / 2);
        snapw = Math.round(adj_width / sp) * sp;
        var snapr = snapw / img.width;
        snaph = Math.round(img.height * snapr / sp) * sp;
      } else {
        // worry about width
        var _adj_width = Math.min(img.width, Math.floor(window.innerWidth - sp) - sp / 2);

        snapw = Math.round(_adj_width / sp) * sp;

        var _snapr = snapw / img.width;

        snaph = Math.round(img.height * _snapr / sp) * sp;
      } // https://www.ssense.com/en-us/men/product/veilance/black-field-lt-jacket/4784081


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
    loadImage('veilance-field-photo.jpg');
  }, []);

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
      lineNumber: 664
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666
    },
    __self: this
  }, title), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667
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
      lineNumber: 670
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
      lineNumber: 678
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
      lineNumber: 679
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684
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
      lineNumber: 685
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694
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
      lineNumber: 695
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706
    },
    __self: this
  }), __jsx("canvas", {
    ref: cref,
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 709
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
      lineNumber: 710
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
      lineNumber: 718
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
      lineNumber: 746
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
      lineNumber: 755
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
      lineNumber: 764
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775
    },
    __self: this
  }, "Superpixels are ranked and selected based on their size when compressed (size is used as a proxy for complexity). Learn more about how selection works in", ' ', __jsx("a", {
    target: "_blank",
    href: "https://res.constraint.systems",
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779
    },
    __self: this
  }, "Res"), ". Superpixels are iteratively collapsed towards the center using a distance field."), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 785
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
      lineNumber: 786
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 792
    },
    __self: this
  }, __jsx("a", {
    target: "_blank",
    href: "https://constraint.systems",
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793
    },
    __self: this
  }, "constraint.systems")), __jsx("div", {
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 797
    },
    __self: this
  }, __jsx("a", {
    target: "_blank",
    href: "https://github.com/constraint-systems/res",
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798
    },
    __self: this
  }, "View source"))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 806
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3038633697",
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}html{background:#efefef;}canvas{background:#fff;}html,body{padding:0;margin:0;font-family:'custom',monospace;font-size:12px;line-height:16px;}*{box-sizing:border-box;}a{color:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3Mvc3BpcmFsL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXl5QnlCLEFBR2dDLEFBS0EsQUFNRixBQUdILEFBSU4sQUFPWSxBQUdSLFVBVEwsSUFVWCxFQWRBLEdBSEEsQUFRa0MsRUFsQnVCLEFBS0QsQ0FtQnhELDRCQUxpQixlQUNFLGlCQUNuQixvREFmb0IsRUFMcEIsZ0JBTUEiLCJmaWxlIjoiL2hvbWUvZ3JhbnQvcy9jcy9zcGlyYWwvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxubGV0IHNwID0gMTZcbi8vIGxldCBjb2xzID0gNDBcbi8vIGxldCByb3dzID0gMzBcbi8vIGxldCBjZWxscyA9IGNvbHMgKiByb3dzXG5cbmZ1bmN0aW9uIHNweChhcnJheSkge1xuICByZXR1cm4gYXJyYXkubWFwKHYgPT4gdiAqIHNwKVxufVxuXG5sZXQgTGluZSA9ICgpID0+IDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBzcCwgd2lkdGg6ICcxMDAlJyB9fSAvPlxuXG5sZXQgU3BhY2UgPSAoKSA9PiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBzcCAvIDIgfX0gLz5cblxubGV0IEJ1dHRvbiA9ICh7XG4gIGxhYmVsLFxuICBjbGVhcmVyLFxuICB0cmlnZ2VyLFxuICB0ZXh0X2xhYmVsLFxuICBwcmVzc19nYXRlcyxcbiAgY3VzdG9tX3N0eWxlLFxufSkgPT4ge1xuICBsZXQgYnV0dG9uX3N0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICB3aWR0aDogc3AsXG4gICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICB9XG4gIGlmIChjdXN0b21fc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGJ1dHRvbl9zdHlsZSA9IE9iamVjdC5hc3NpZ24oYnV0dG9uX3N0eWxlLCBjdXN0b21fc3R5bGUpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgc3R5bGU9e2J1dHRvbl9zdHlsZX1cbiAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHt0ZXh0X2xhYmVsICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGN1cnNvcjogJ2RlZmF1bHQnIH19XG4gICAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTcGFjZSAvPlxuICAgICAgICAgIDxkaXY+e3RleHRfbGFiZWx9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxubGV0IFJlcGVhdEJ1dHRvbiA9ICh7XG4gIGxhYmVsLFxuICBjbGVhcmVyLFxuICB0cmlnZ2VyLFxuICB0ZXh0X2xhYmVsLFxuICBwcmVzc19nYXRlcyxcbiAgY3VzdG9tX3N0eWxlLFxufSkgPT4ge1xuICBsZXQgcmVwZWF0X3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgc3RhcnRfZ2F0ZSA9IHVzZVJlZihmYWxzZSlcblxuICBsZXQgdG91Y2hfbW9kZSA9IHVzZVJlZihmYWxzZSlcblxuICBsZXQgYnV0dG9uX3N0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICB3aWR0aDogc3AsXG4gICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICB9XG4gIGlmIChjdXN0b21fc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGJ1dHRvbl9zdHlsZSA9IE9iamVjdC5hc3NpZ24oYnV0dG9uX3N0eWxlLCBjdXN0b21fc3R5bGUpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgc3R5bGU9e2J1dHRvbl9zdHlsZX1cbiAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IHtcbiAgICAgICAgICB0b3VjaF9tb2RlLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgcHJlc3NfZ2F0ZXMuY3VycmVudCA9IHRydWVcbiAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVzc19nYXRlcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIHJlcGVhdF9yZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgICBjbGVhcmVyKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCA0MDApXG4gICAgICAgIH19XG4gICAgICAgIG9uVG91Y2hFbmQ9e2UgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdG91Y2hfbW9kZS5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgICB9LCA0MDApXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICBpZiAoIXRvdWNoX21vZGUuY3VycmVudCkge1xuICAgICAgICAgICAgcHJlc3NfZ2F0ZXMuY3VycmVudCA9IHRydWVcbiAgICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChwcmVzc19nYXRlcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgcmVwZWF0X3JlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgICAgIGNsZWFyZXIocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA0MDApXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlVXA9e2UgPT4ge1xuICAgICAgICAgIGlmICghdG91Y2hfbW9kZS5jdXJyZW50KSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAge3RleHRfbGFiZWwgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgY3Vyc29yOiAnZGVmYXVsdCcgfX1cbiAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgICByZXBlYXRfcmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICAgICAgY2xlYXJlcihyZXBlYXRfcmVmLmN1cnJlbnQpXG4gICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uTW91c2VVcD17ZSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgPGRpdj57dGV4dF9sYWJlbH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBsZXQgY3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgY2xlYXJfcmVuZGVyX3JlZiA9IHVzZVJlZihmYWxzZSlcbiAgbGV0IGNsZWFyX3JlZiA9IHVzZVJlZihmYWxzZSlcbiAgbGV0IHN0YXRlID0gdXNlUmVmKHt9KVxuICBsZXQga21fcmVmID0gdXNlUmVmKHt9KVxuICBsZXQgc2xpZGVyX2NsaWNrX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgc2xpZGVyX3RvdWNoX21vZGUgPSB1c2VSZWYoZmFsc2UpXG4gIGxldCBwcmVzc19nYXRlcyA9IHVzZVJlZihmYWxzZSlcbiAgbGV0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUobnVsbClcbiAgbGV0IGZpbGVfaW5wdXQgPSB1c2VSZWYobnVsbClcbiAgbGV0IHRpX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdGhyZXNoX3JlZiA9IHVzZVJlZihudWxsKVxuXG4gIGZ1bmN0aW9uIGxvYWRJbWFnZShzcmMpIHtcbiAgICBsZXQgYyA9IGNyZWYuY3VycmVudFxuICAgIGxldCBjeCA9IGMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBsZXQgYXNwZWN0ID0gaW1nLndpZHRoIC8gaW1nLmhlaWdodFxuICAgICAgbGV0IHdpbmRvd19hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvICh3aW5kb3cuaW5uZXJIZWlnaHQgLSBzcCAqIDIpXG4gICAgICBjb25zb2xlLmxvZyhhc3BlY3QpXG4gICAgICBjb25zb2xlLmxvZyh3aW5kb3dfYXNwZWN0KVxuXG4gICAgICBsZXQgc25hcHcsIHNuYXBoXG4gICAgICBpZiAoYXNwZWN0IDwgd2luZG93X2FzcGVjdCkge1xuICAgICAgICAvLyB3b3JyeSBhYm91dCBoZWlnaHRcbiAgICAgICAgbGV0IGFkal9oZWlnaHQgPSBNYXRoLm1pbihcbiAgICAgICAgaW1nLmhlaWdodCxcbiAgICAgICAgICBNYXRoLmZsb29yKHdpbmRvdy5pbm5lckhlaWdodCAtIHNwICogMikgLSBzcCAvIDJcbiAgICAgIClcbiAgICAgICAgc25hcHcgPSBNYXRoLnJvdW5kKGFkal93aWR0aCAvIHNwKSAqIHNwXG4gICAgICAgIGxldCBzbmFwciA9IHNuYXB3IC8gaW1nLndpZHRoXG4gICAgICAgIHNuYXBoID0gTWF0aC5yb3VuZCgoaW1nLmhlaWdodCAqIHNuYXByKSAvIHNwKSAqIHNwXG4gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB3b3JyeSBhYm91dCB3aWR0aFxuICAgICAgICBsZXQgYWRqX3dpZHRoID0gTWF0aC5taW4oXG4gICAgICAgICAgaW1nLndpZHRoLFxuICAgICAgICAgIE1hdGguZmxvb3Iod2luZG93LmlubmVyV2lkdGggLSBzcCApIC0gc3AgLyAyXG4gICAgICAgIClcbiAgICAgICAgc25hcHcgPSBNYXRoLnJvdW5kKGFkal93aWR0aCAvIHNwKSAqIHNwXG4gICAgICAgIGxldCBzbmFwciA9IHNuYXB3IC8gaW1nLndpZHRoXG4gICAgICAgIHNuYXBoID0gTWF0aC5yb3VuZCgoaW1nLmhlaWdodCAqIHNuYXByKSAvIHNwKSAqIHNwXG4gICAgICB9XG5cbiAgICAgIC8vIGh0dHBzOi8vd3d3LnNzZW5zZS5jb20vZW4tdXMvbWVuL3Byb2R1Y3QvdmVpbGFuY2UvYmxhY2stZmllbGQtbHQtamFja2V0LzQ3ODQwODFcblxuICAgICAgaW1nLndpZHRoID0gc25hcHdcbiAgICAgIGltZy5oZWlnaHQgPSBzbmFwaFxuXG4gICAgICBzZXRXaWR0aChpbWcud2lkdGgpXG5cbiAgICAgIGMud2lkdGggPSBpbWcud2lkdGhcbiAgICAgIGMuaGVpZ2h0ID0gaW1nLmhlaWdodFxuXG4gICAgICBsZXQgY29scyA9IGltZy53aWR0aCAvIHNwXG4gICAgICBsZXQgcm93cyA9IGltZy5oZWlnaHQgLyBzcFxuICAgICAgbGV0IGNlbGxzID0gY29scyAqIHJvd3NcblxuICAgICAgLy8gc2l6ZSBzbGlkZXJcbiAgICAgIGxldCB0aSA9IHRpX3JlZi5jdXJyZW50XG4gICAgICB0aS53aWR0aCA9IGltZy53aWR0aCAtIHNwICogNFxuICAgICAgdGkuaGVpZ2h0ID0gc3AgKiAyXG5cbiAgICAgIC8vIHByZXNlcnZlIGRpbWVuc2lvbnNcbiAgICAgIGxldCB0X2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICB0X2ltZy53aWR0aCA9IGMud2lkdGhcbiAgICAgIHRfaW1nLmhlaWdodCA9IGMuaGVpZ2h0XG4gICAgICBsZXQgdF9pbWd4ID0gdF9pbWcuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgdF9pbWd4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KVxuICAgICAgaW1nID0gdF9pbWdcblxuICAgICAgLy8gZHJhdyBvcmlnaW5hbCBpbWFnZVxuICAgICAgLy8gY3guZHJhd0ltYWdlKGltZywgMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpXG5cbiAgICAgIC8vIHN0b3JlIG9yaWdpbmFsIGltYWdlXG4gICAgICBsZXQgaW1jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgIGltYy53aWR0aCA9IGMud2lkdGhcbiAgICAgIGltYy5oZWlnaHQgPSBjLmhlaWdodFxuICAgICAgbGV0IGlteCA9IGltYy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBpbXguZHJhd0ltYWdlKGltZywgMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpXG5cbiAgICAgIC8vIGN1dCB1cCBvcmlnaW5hbCBpbWFnZVxuICAgICAgbGV0IHRpbGVzID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHM7IGkrKykge1xuICAgICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICAgIHQud2lkdGggPSBzcFxuICAgICAgICB0LmhlaWdodCA9IHNwXG4gICAgICAgIGxldCB0eCA9IHQuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgICAgIGxldCB4ID0gaSAlIGNvbHNcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKGkgLyBjb2xzKVxuXG4gICAgICAgIHR4LmRyYXdJbWFnZShpbWMsIHggKiBzcCwgeSAqIHNwLCBzcCwgc3AsIDAsIDAsIHNwLCBzcClcblxuICAgICAgICBsZXQgY29tcGxleGl0eSA9IHQudG9EYXRhVVJMKCkubGVuZ3RoIC8gKHNwICogc3ApXG5cbiAgICAgICAgdGlsZXMucHVzaCh7IHQsIGM6IGNvbXBsZXhpdHksIHgsIHksIGkgfSlcbiAgICAgIH1cbiAgICAgIHRpbGVzID0gXy5zb3J0QnkodGlsZXMsICdjJylcblxuICAgICAgLy8gZ3JpZCB3aXRoIGNvb3JkaW5hdGVzXG4gICAgICBsZXQgZ3JpZCA9IFsuLi5BcnJheShyb3dzKV0ubWFwKChuLCB5KSA9PlxuICAgICAgICBbLi4uQXJyYXkoY29scyldLm1hcCgobiwgeCkgPT4ge1xuICAgICAgICAgIGxldCBkID0gTWF0aC5zcXJ0KFxuICAgICAgICAgICAgTWF0aC5wb3coeCAtIGNvbHMgLyAyLCAyKSArIE1hdGgucG93KHkgLSByb3dzIC8gMiwgMilcbiAgICAgICAgICApLnRvRml4ZWQoOClcbiAgICAgICAgICByZXR1cm4gW3gsIHksIGRdXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIC8vIHNwaXJhbCBvcmRlciBmb3IgaXRlcmF0aW9uXG4gICAgICBsZXQgb3JkZXJlZCA9IF8uZmxhdHRlbihncmlkKVxuICAgICAgb3JkZXJlZC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGFbMl0gLSBiWzJdXG4gICAgICB9KVxuXG4gICAgICAvLyBzcGlyYWwgdGVzdFxuICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCA4MDA7IGkrKykge1xuICAgICAgLy8gICBsZXQgW3gsIHldID0gb3JkZXJlZFtpXVxuICAgICAgLy8gICBjeC5maWxsUmVjdCguLi5zcHgoW3gsIHksIDEsIDFdKSlcbiAgICAgIC8vIH1cblxuICAgICAgbGV0IHRocmVzaG9sZCA9IGNlbGxzIC0gMzAwXG4gICAgICBzdGF0ZS5jdXJyZW50LnRocmVzaG9sZCA9IHRocmVzaG9sZFxuICAgICAgc3RhdGUuY3VycmVudC5jZWxscyA9IGNlbGxzXG4gICAgICBzdGF0ZS5jdXJyZW50Lm9yZGVyZWQgPSBvcmRlcmVkXG4gICAgICBzdGF0ZS5jdXJyZW50LmdyaWQgPSBncmlkXG4gICAgICBzdGF0ZS5jdXJyZW50LmNvbHMgPSBjb2xzXG4gICAgICBzdGF0ZS5jdXJyZW50LnJvd3MgPSByb3dzXG4gICAgICBzdGF0ZS5jdXJyZW50LmltYyA9IGltY1xuICAgICAgc3RhdGUuY3VycmVudC50aWxlcyA9IHRpbGVzXG5cbiAgICAgIHJlbmRlcigpXG5cbiAgICAgIC8vIGN4LmZpbGxTdHlsZSA9ICdyZWQnXG4gICAgICAvLyBjeC5maWxsUmVjdCgoY29scyAvIDIpICogc3AgLSAxLCAwLCAyLCBjLmhlaWdodClcbiAgICAgIC8vIGN4LmZpbGxSZWN0KDAsIChyb3dzIC8gMikgKiBzcCAtIDEsIGMud2lkdGgsIDIpXG4gICAgICAvLyBjeC5maWxsU3R5bGUgPSAnYmxhY2snXG4gICAgfVxuICAgIGltZy5zcmMgPSBzcmNcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBjbGVhcl9yZW5kZXJfcmVmLmN1cnJlbnQgPSBmYWxzZVxuICAgIGxldCBjID0gY3JlZi5jdXJyZW50XG4gICAgbGV0IGN4ID0gYy5nZXRDb250ZXh0KCcyZCcpXG4gICAgbGV0IHtcbiAgICAgIGNlbGxzLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgb3JkZXJlZCxcbiAgICAgIGdyaWQsXG4gICAgICBjb2xzLFxuICAgICAgcm93cyxcbiAgICAgIGltYyxcbiAgICAgIHRpbGVzLFxuICAgIH0gPSBzdGF0ZS5jdXJyZW50XG5cbiAgICAvLyBhY3RpdmVcbiAgICBsZXQgYWN0aXZlID0gWy4uLkFycmF5KHJvd3MpXS5tYXAoKG4sIHkpID0+XG4gICAgICBbLi4uQXJyYXkoY29scyldLm1hcCgobiwgeCkgPT4gW3gsIHksIGZhbHNlXSlcbiAgICApXG4gICAgZm9yIChsZXQgaSA9IHRocmVzaG9sZDsgaSA8IGNlbGxzOyBpKyspIHtcbiAgICAgIGxldCB0aWxlID0gdGlsZXNbaV1cbiAgICAgIGxldCB4ID0gdGlsZS54XG4gICAgICBsZXQgeSA9IHRpbGUueVxuICAgICAgYWN0aXZlW3ldW3hdWzJdID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIHNsaWRlclxuICAgIGxldCB0aSA9IHRpX3JlZi5jdXJyZW50XG4gICAgbGV0IHRpeCA9IHRpLmdldENvbnRleHQoJzJkJylcbiAgICB0aXguZmlsbFN0eWxlID0gJyNkZGQnXG4gICAgdGl4LmZpbGxSZWN0KDAsIDAsIHRpLndpZHRoLCBzcCAqIDIpXG4gICAgdGl4LmZpbGxTdHlsZSA9ICcjOTk5J1xuICAgIGxldCB0bWFyayA9IE1hdGgubWluKFxuICAgICAgTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCh0aS53aWR0aCAqICgoY2VsbHMgLSB0aHJlc2hvbGQpIC8gY2VsbHMpKSksXG4gICAgICB0aS53aWR0aCAtIDJcbiAgICApXG4gICAgdGl4LmZpbGxSZWN0KHRtYXJrIC0gMSwgMCwgMywgc3AgKiAyKVxuXG4gICAgdGhyZXNoX3JlZi5jdXJyZW50LmlubmVySFRNTCA9IGNlbGxzIC0gdGhyZXNob2xkICsgJy8nICsgY2VsbHNcblxuICAgIGZ1bmN0aW9uIGdldEZyZWUoeCwgeSkge1xuICAgICAgLy8gaXQgaXQgb2ZmIG1hcCBpdCBpcyB1bmRlZmluZWRcbiAgICAgIGlmIChhY3RpdmVbeV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGxcbiAgICAgIGlmIChhY3RpdmVbeV1beF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGxcbiAgICAgIGxldCBjaGVjayA9IGFjdGl2ZVt5XVt4XVxuICAgICAgLy8gZmFsc2UgbWVhbnMgZW1wdHlcbiAgICAgIGlmIChjaGVja1syXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGdyaWRbeV1beF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gaWYgZmFsc2VcbiAgICAgIC8vIGlmIChjb29yZHMpIHtcbiAgICAgIC8vICAgbGV0IFtneCwgZ3ldID0gY29vcmRzXG4gICAgICAvLyB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TW92ZSh4LCB5KSB7XG4gICAgICBsZXQgcmF3ID0gW1xuICAgICAgICBbMCwgLTFdLFxuICAgICAgICBbMSwgLTFdLFxuICAgICAgICBbMSwgMV0sXG4gICAgICAgIFsxLCAwXSxcbiAgICAgICAgWzEsIDFdLFxuICAgICAgICBbMCwgMV0sXG4gICAgICAgIFstMSwgMV0sXG4gICAgICAgIFstMSwgMF0sXG4gICAgICAgIFstMSwgLTFdLFxuICAgICAgXS5tYXAodiA9PiBnZXRGcmVlKHggKyB2WzBdLCB5ICsgdlsxXSkpXG4gICAgICBsZXQgc2VsZiA9IGdyaWRbeV1beF1cbiAgICAgIGxldCBmaWx0ZXJlZCA9IHJhdy5maWx0ZXIodiA9PiB2ICE9PSBudWxsKVxuICAgICAgbGV0IGRpc3RhbmNlcyA9IGZpbHRlcmVkLm1hcCh2ID0+IHBhcnNlRmxvYXQodlsyXSkpXG4gICAgICBsZXQgbWluX2Rpc3RhbmNlID0gXy5taW4oZGlzdGFuY2VzKVxuICAgICAgaWYgKG1pbl9kaXN0YW5jZSA8IHNlbGZbMl0pIHtcbiAgICAgICAgbGV0IG1pbl9pID0gZGlzdGFuY2VzLmluZGV4T2YobWluX2Rpc3RhbmNlKVxuICAgICAgICByZXR1cm4gZmlsdGVyZWRbbWluX2ldXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9yZW5kZXIoKSB7XG4gICAgICBsZXQgbGVhc3RfYWN0aXZlID0gdHJ1ZVxuICAgICAgbGV0IG1vdmVkID0gZmFsc2VcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsczsgaSsrKSB7XG4gICAgICAgIGxldCBbeCwgeV0gPSBvcmRlcmVkW2ldXG4gICAgICAgIGxldCBjaGVjayA9IGFjdGl2ZVt5XVt4XVxuICAgICAgICBpZiAoY2hlY2tbMl0gPT09IHRydWUpIHtcbiAgICAgICAgICBsZWFzdF9hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgIGxldCBtb3ZlX3RvID0gZ2V0TW92ZSh4LCB5KVxuICAgICAgICAgIGlmIChtb3ZlX3RvICE9PSBudWxsKSB7XG4gICAgICAgICAgICBtb3ZlZCA9IHRydWVcbiAgICAgICAgICAgIGxldCBbbXgsIG15XSA9IG1vdmVfdG9cbiAgICAgICAgICAgIC8vIGxldCBvbGQgPSBhY3RpdmVbbXldW214XS5zbGljZSgpXG4gICAgICAgICAgICBsZXQgb2xkID0gW251bGwsIG51bGwsIGZhbHNlXVxuICAgICAgICAgICAgYWN0aXZlW215XVtteF0gPSBjaGVja1xuICAgICAgICAgICAgYWN0aXZlW3ldW3hdID0gb2xkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsZWFzdF9hY3RpdmUpIHtcbiAgICAgICAgY3guY2xlYXJSZWN0KDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KVxuICAgICAgfVxuICAgICAgaWYgKCFtb3ZlZCkge1xuICAgICAgICAvLyBvbmx5IGRyYXcgd2hlbiBkb25lXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHM7IGkrKykge1xuICAgICAgICAgIGxldCB4ID0gaSAlIGNvbHNcbiAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoaSAvIGNvbHMpXG4gICAgICAgICAgbGV0IGNoZWNrID0gYWN0aXZlW3ldW3hdXG4gICAgICAgICAgaWYgKGNoZWNrWzJdKSB7XG4gICAgICAgICAgICBjeC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgIGltYyxcbiAgICAgICAgICAgICAgLi4uc3B4KFsuLi5jaGVjay5zbGljZSgwLCAyKSwgMSwgMV0pLFxuICAgICAgICAgICAgICAuLi5zcHgoW3gsIHksIDEsIDFdKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtb3ZlZCAmJiAhY2xlYXJfcmVuZGVyX3JlZi5jdXJyZW50KSB7XG4gICAgICAgIGN4LmNsZWFyUmVjdCgwLCAwLCBjLndpZHRoLCBjLmhlaWdodClcblxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzOyBpKyspIHtcbiAgICAgICAgLy8gICBsZXQgeCA9IGkgJSBjb2xzXG4gICAgICAgIC8vICAgbGV0IHkgPSBNYXRoLmZsb29yKGkgLyBjb2xzKVxuICAgICAgICAvLyAgIGxldCBjaGVjayA9IGFjdGl2ZVt5XVt4XVxuICAgICAgICAvLyAgIC8vIGlmIChjaGVjaykge1xuICAgICAgICAvLyAgIGN4LmRyYXdJbWFnZShcbiAgICAgICAgLy8gICAgIGltYyxcbiAgICAgICAgLy8gICAgIC4uLnNweChbLi4uY2hlY2suc2xpY2UoMCwgMiksIDEsIDFdKSxcbiAgICAgICAgLy8gICAgIC4uLnNweChbeCwgeSwgMSwgMV0pXG4gICAgICAgIC8vICAgKVxuICAgICAgICAvLyAgIC8vIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIF9yZW5kZXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIF9yZW5kZXIoKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xpY2tTZXRUaHJlc2hvbGQoeCkge1xuICAgIGxldCByZWN0ID0gdGlfcmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB4ID0geCAtIHJlY3QubGVmdFxuICAgIGxldCBwZXJjZW50ID0geCAvIHRpX3JlZi5jdXJyZW50LndpZHRoXG4gICAgbGV0IHsgY2VsbHMsIHRocmVzaG9sZCB9ID0gc3RhdGUuY3VycmVudFxuICAgIGxldCBuZXdfdGhyZXNoID1cbiAgICAgIGNlbGxzIC0gTWF0aC5taW4oY2VsbHMsIE1hdGgubWF4KDAsIE1hdGgucm91bmQocGVyY2VudCAqIGNlbGxzKSkpXG4gICAgc3RhdGUuY3VycmVudC50aHJlc2hvbGQgPSBuZXdfdGhyZXNoXG4gICAgcmVuZGVyKClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZEltYWdlKCd2ZWlsYW5jZS1maWVsZC1waG90by5qcGcnKVxuICB9LCBbXSlcblxuICBmdW5jdGlvbiB0cmlnZ2VyKGtleSkge1xuICAgIGtleUFjdGlvbihrZXksIG51bGwpXG4gIH1cblxuICBmdW5jdGlvbiBrZXlBY3Rpb24oa2V5LCBldmVudCkge1xuICAgIGxldCBrbSA9IGttX3JlZi5jdXJyZW50XG4gICAgaWYgKGV2ZW50ID09PSBudWxsKSB7XG4gICAgICBldmVudCA9IHsgc2hpZnRLZXk6IGZhbHNlIH1cbiAgICB9XG5cbiAgICBsZXQgc2hpZnQgPSBldmVudC5zaGlmdEtleVxuICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAoa2V5ID09PSAnbycpIHtcbiAgICAgIGxldCBpbnB1dCA9IGZpbGVfaW5wdXQuY3VycmVudFxuICAgICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgbGV0IGZpbGVzID0gJydcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmZpbGVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coaXRlbSlcbiAgICAgICAgICBmaWxlcyArPSBpdGVtLm5hbWUgKyAnLicgKyBpdGVtLnR5cGVcbiAgICAgICAgICBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPCAwKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChpdGVtKVxuICAgICAgICAgIGxvYWRJbWFnZShzcmMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpXG4gICAgICB9XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpXG5cbiAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBNb3VzZUV2ZW50KCdjbGljaycsIHtcbiAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICB9KVxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncCcpIHtcbiAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG5cbiAgICAgIGNyZWYuY3VycmVudC50b0Jsb2IoZnVuY3Rpb24oYmxvYikge1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnZG93bmxvYWQnLFxuICAgICAgICAgICdjb2xsYXBzZS0nICtcbiAgICAgICAgICAgIG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgICAgLnNsaWNlKDAsIC00KVxuICAgICAgICAgICAgICAucmVwbGFjZSgvLS9nLCAnJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoLzovZywgJycpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9fL2csICcnKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvXFwuL2csICcnKSArXG4gICAgICAgICAgICAnWicgK1xuICAgICAgICAgICAgJy5wbmcnXG4gICAgICAgIClcblxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpXG4gICAgICAgIGxpbmsuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICBuZXcgTW91c2VFdmVudChgY2xpY2tgLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChrZXkgPT09ICdsJyB8fCBrZXkgPT09ICdhcnJvd3JpZ2h0Jykge1xuICAgICAgbGV0IG1vdmUgPSAxMFxuICAgICAgaWYgKHNoaWZ0KSBtb3ZlID0gMVxuICAgICAgc3RhdGUuY3VycmVudC50aHJlc2hvbGQgPSBNYXRoLm1heCgwLCBzdGF0ZS5jdXJyZW50LnRocmVzaG9sZCAtIG1vdmUpXG4gICAgICBjbGVhcl9yZW5kZXJfcmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICByZW5kZXIoKVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnaCcgfHwga2V5ID09PSAnYXJyb3dsZWZ0Jykge1xuICAgICAgbGV0IG1vdmUgPSAxMFxuICAgICAgaWYgKHNoaWZ0KSBtb3ZlID0gMVxuICAgICAgc3RhdGUuY3VycmVudC50aHJlc2hvbGQgPSBNYXRoLm1pbihcbiAgICAgICAgc3RhdGUuY3VycmVudC5jZWxscyxcbiAgICAgICAgc3RhdGUuY3VycmVudC50aHJlc2hvbGQgKyBtb3ZlXG4gICAgICApXG4gICAgICBjbGVhcl9yZW5kZXJfcmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICByZW5kZXIoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRvd25IYW5kbGVyKGUpIHtcbiAgICBrbV9yZWYuY3VycmVudFtlLmtleV0gPSB0cnVlXG4gICAga2V5QWN0aW9uKGUua2V5LCBlKVxuICB9XG5cbiAgZnVuY3Rpb24gdXBIYW5kbGVyKGUpIHtcbiAgICBrbV9yZWYuY3VycmVudFtlLmtleV0gPSBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlKGUpIHtcbiAgICBpZiAoIXNsaWRlcl90b3VjaF9tb2RlLmN1cnJlbnQpIHtcbiAgICAgIGlmIChzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZS5jbGllbnRYKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyZXIoaWQpIHtcbiAgICBjbGVhcl9yZWYuY3VycmVudC5wdXNoKGlkKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJSZXBlYXRJbnRlcnZhbHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGVhcl9yZWYuY3VycmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSBjbGVhcl9yZWYuY3VycmVudFtpXVxuICAgICAgY2xlYXJJbnRlcnZhbChpdGVtKVxuICAgIH1cbiAgICBjbGVhcl9yZWYuY3VycmVudCA9IFtdXG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclByZXNzR2F0ZXMoKSB7XG4gICAgcHJlc3NfZ2F0ZXMuY3VycmVudCA9IGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKGUpIHtcbiAgICBpZiAoIXNsaWRlcl90b3VjaF9tb2RlLmN1cnJlbnQpIHtcbiAgICAgIGlmIChzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQpIHtcbiAgICAgICAgc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZS5jbGllbnRYKVxuICAgICAgfVxuICAgIH1cbiAgICBjbGVhclByZXNzR2F0ZXMoKVxuICAgIGNsZWFyUmVwZWF0SW50ZXJ2YWxzKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJvcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGxldCBmaWxlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF1cbiAgICBsZXQgZmlsZW5hbWUgPSBmaWxlLnBhdGggPyBmaWxlLnBhdGggOiBmaWxlLm5hbWUgPyBmaWxlLm5hbWUgOiAnJ1xuICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgbG9hZEltYWdlKHNyYylcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZyhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSdcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUGFzdGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZS5jbGlwYm9hcmREYXRhLml0ZW1zKSB7XG4gICAgICBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPCAwKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBsZXQgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKClcbiAgICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgICBsb2FkSW1hZ2Uoc3JjKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZShlKSB7XG4gICAgaWYgKHNsaWRlcl90b3VjaF9tb2RlLmN1cnJlbnQpIHtcbiAgICAgIGlmIChzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZChlKSB7XG4gICAgLy8gdG91Y2ggZW5kIGRvZXNuJ3Qgc2VlbSB0byBoYXZlIGNsaWVudCB4XG4gICAgY2xlYXJQcmVzc0dhdGVzKClcbiAgICBjbGVhclJlcGVhdEludGVydmFscygpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIG9uUGFzdGUpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZVRvdWNoRW5kKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUsIHsgcGFzc2l2ZTogZmFsc2UgfSlcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3ApXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVUb3VjaEVuZClcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUpXG4gICAgfVxuICB9LCBbXSlcblxuICBsZXQgdGl0bGUgPSAnQ29sbGFwc2UnXG4gIC8vIFRPRE9cbiAgbGV0IGRlc2NyaXB0aW9uID1cbiAgICAnU2VsZWN0aXZlbHkgZGUtcmVzIGltYWdlIHBpeGVscyByYW5rZWQgdXNpbmcgYSBjb21wcmVzc2lvbiBhbGdvcml0aG0uJ1xuICBsZXQgc2hhcmVfaW1nX3VybCA9ICdodHRwczovL3Jlcy5jb25zdHJhaW50LnN5c3RlbXMvcmVzLnBuZydcbiAgbGV0IG9nX3VybCA9ICdodHRwczovL3Jlcy5jb25zdHJhaW50LnN5c3RlbXMnXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogd2lkdGggIT09IG51bGwgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgICAgIHdpZHRoOiB3aWR0aCAhPT0gbnVsbCA/IHdpZHRoICsgc3AgOiAnYXV0bycsXG4gICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIHJlZj17ZmlsZV9pbnB1dH0gc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJuby1zZWxlY3RcIlxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBzcCAvIDIsIHBhZGRpbmdSaWdodDogc3AgLyAyIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBsYWJlbD1cIm9cIlxuICAgICAgICAgICAgICBwcmVzc19nYXRlcz17cHJlc3NfZ2F0ZXN9XG4gICAgICAgICAgICAgIHRleHRfbGFiZWw9XCJMb2FkIGltYWdlIChvciBwYXN0ZSBvciBkcm9wKVwiXG4gICAgICAgICAgICAgIGNsZWFyZXI9e2NsZWFyZXJ9XG4gICAgICAgICAgICAgIHRyaWdnZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKCdvJylcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgbGFiZWw9XCJwXCJcbiAgICAgICAgICAgICAgcHJlc3NfZ2F0ZXM9e3ByZXNzX2dhdGVzfVxuICAgICAgICAgICAgICB0ZXh0X2xhYmVsPVwiU2F2ZSByZXN1bHQgYXMgcG5nXCJcbiAgICAgICAgICAgICAgY2xlYXJlcj17Y2xlYXJlcn1cbiAgICAgICAgICAgICAgdHJpZ2dlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyaWdnZXIoJ3AnKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxMaW5lIC8+XG5cbiAgICAgICAgICA8Y2FudmFzIHJlZj17Y3JlZn0gLz5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgaGVpZ2h0PXtzcCAqIDIzfVxuICAgICAgICAgICAgICByZWY9e3RpX3JlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHNwICogMixcbiAgICAgICAgICAgICAgICBsZWZ0OiBzcCAqIDIsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ2Nyb3NzaGFpcicsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17ZSA9PiB7XG4gICAgICAgICAgICAgICAgc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHNsaWRlcl90b3VjaF9tb2RlLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvblRvdWNoRW5kPXtlID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNsaWRlcl9jbGlja19yZWYuY3VycmVudCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICBzbGlkZXJfdG91Y2hfbW9kZS5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9LCA0MDApXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXNsaWRlcl90b3VjaF9tb2RlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHNsaWRlcl9jbGlja19yZWYuY3VycmVudCA9IHRydWVcbiAgICAgICAgICAgICAgICAgIGNsaWNrU2V0VGhyZXNob2xkKGUuY2xpZW50WClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFJlcGVhdEJ1dHRvblxuICAgICAgICAgICAgICBsYWJlbD1cImhcIlxuICAgICAgICAgICAgICBwcmVzc19nYXRlcz17cHJlc3NfZ2F0ZXN9XG4gICAgICAgICAgICAgIGN1c3RvbV9zdHlsZT17eyBoZWlnaHQ6IHNwICogMiwgd2lkdGg6IHNwICogMiB9fVxuICAgICAgICAgICAgICBjbGVhcmVyPXtjbGVhcmVyfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcignaCcpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICByZWY9e3RocmVzaF9yZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHNwICogMiArICdweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8UmVwZWF0QnV0dG9uXG4gICAgICAgICAgICAgIGxhYmVsPVwibFwiXG4gICAgICAgICAgICAgIHByZXNzX2dhdGVzPXtwcmVzc19nYXRlc31cbiAgICAgICAgICAgICAgY3VzdG9tX3N0eWxlPXt7IGhlaWdodDogc3AgKiAyLCB3aWR0aDogc3AgKiAyIH19XG4gICAgICAgICAgICAgIGNsZWFyZXI9e2NsZWFyZXJ9XG4gICAgICAgICAgICAgIHRyaWdnZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKCdsJylcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgU3VwZXJwaXhlbHMgYXJlIHJhbmtlZCBhbmQgc2VsZWN0ZWQgYmFzZWQgb24gdGhlaXIgc2l6ZSB3aGVuXG4gICAgICAgICAgICBjb21wcmVzc2VkIChzaXplIGlzIHVzZWQgYXMgYSBwcm94eSBmb3IgY29tcGxleGl0eSkuIExlYXJuIG1vcmVcbiAgICAgICAgICAgIGFib3V0IGhvdyBzZWxlY3Rpb24gd29ya3MgaW57JyAnfVxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vcmVzLmNvbnN0cmFpbnQuc3lzdGVtc1wiPlxuICAgICAgICAgICAgICBSZXNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIC4gU3VwZXJwaXhlbHMgYXJlIGl0ZXJhdGl2ZWx5IGNvbGxhcHNlZCB0b3dhcmRzIHRoZSBjZW50ZXIgdXNpbmcgYVxuICAgICAgICAgICAgZGlzdGFuY2UgZmllbGQuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2NvbnN0cmFpbnQuc3lzdGVtc1wiPlxuICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQuc3lzdGVtc1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2NvbnN0cmFpbnQtc3lzdGVtcy9yZXNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVmlldyBzb3VyY2VcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLUl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLUl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICB9XG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJywgbW9ub3NwYWNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/home/grant/s/cs/spiral/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.f663dbe3e1e30ae70dab.hot-update.js.map