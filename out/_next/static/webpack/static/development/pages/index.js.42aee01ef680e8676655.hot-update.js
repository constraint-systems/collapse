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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('favicon.png'),
      favicon = _useState2[0],
      setFavicon = _useState2[1];

  function loadImage(src) {
    var c = cref.current;
    var cx = c.getContext('2d');
    var img = document.createElement('img');

    img.onload = function () {
      var aspect = img.width / img.height;
      var window_aspect = (window.innerWidth - sp) / (window.innerHeight - sp * 8);
      console.log(aspect);
      console.log(window_aspect);
      var snapw, snaph;

      if (aspect < window_aspect) {
        // worry about height
        var adj_height = Math.min(img.height, Math.floor(window.innerHeight - sp * 8));
        snaph = Math.round(adj_height / sp) * sp;
        var snapr = snaph / img.height;
        snapw = Math.round(img.width * snapr / sp) * sp;
      } else {
        // worry about width
        var adj_width = Math.min(img.width, Math.floor(window.innerWidth - sp) - sp / 2);
        snapw = Math.round(adj_width / sp) * sp;

        var _snapr = snapw / img.width;

        snaph = Math.round(img.height * _snapr / sp) * sp;
      }

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
        var _t = document.createElement('canvas');

        _t.width = sp;
        _t.height = sp;

        var _tx = _t.getContext('2d');

        var x = i % cols;
        var y = Math.floor(i / cols);

        _tx.drawImage(imc, x * sp, y * sp, sp, sp, 0, 0, sp, sp);

        var complexity = _t.toDataURL().length / (sp * sp);
        tiles.push({
          t: _t,
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

      var threshold = cells - Math.round(cells / 2);
      state.current.threshold = threshold;
      state.current.cells = cells;
      state.current.ordered = ordered;
      state.current.grid = grid;
      state.current.cols = cols;
      state.current.rows = rows;
      state.current.imc = imc;
      state.current.tiles = tiles; // favicon

      var t = document.createElement('canvas');
      t.width = 16;
      t.height = 16;
      var tx = t.getContext('2d');
      tx.imageSmoothingEnabled = false;
      tx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 16, 16);
      setFavicon(t.toDataURL());
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
  var share_img_url = 'https://collapse.constraint.systems/collapse.png';
  var og_url = 'https://collapse.constraint.systems';
  return __jsx("div", {
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673
    },
    __self: this
  }, __jsx("meta", {
    charset: "UTF-8",
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675
    },
    __self: this
  }, title), __jsx("link", {
    rel: "shortcut icon",
    href: favicon,
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,shrink-to-fit=no",
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677
    },
    __self: this
  }), __jsx("meta", {
    name: "theme-color",
    content: "#000000",
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682
    },
    __self: this
  }, title), __jsx("meta", {
    name: "description",
    content: description,
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: title,
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: description,
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: share_img_url,
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: og_url,
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688
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
      lineNumber: 691
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
      lineNumber: 699
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
      lineNumber: 700
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705
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
      lineNumber: 706
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715
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
      lineNumber: 716
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727
    },
    __self: this
  }), __jsx("canvas", {
    ref: cref,
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 730
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
      lineNumber: 731
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
      lineNumber: 739
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
      lineNumber: 767
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
      lineNumber: 776
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
      lineNumber: 785
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 796
    },
    __self: this
  }, "Superpixels are ranked and selected based on their size when compressed (compression size is used as a proxy for complexity). Learn more about how selection works in", ' ', __jsx("a", {
    target: "_blank",
    href: "https://res.constraint.systems",
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 800
    },
    __self: this
  }, "Res"), ". Superpixels are iteratively collapsed towards the center using a distance field."), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 806
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 807
    },
    __self: this
  }, "Original model photo from", ' ', __jsx("a", {
    target: "_blank",
    href: "https://www.ssense.com/en-us/men/product/veilance/black-field-lt-jacket/4784081",
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 809
    },
    __self: this
  }, "Ssense"), "."), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 817
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
      lineNumber: 818
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 824
    },
    __self: this
  }, __jsx("a", {
    target: "_blank",
    href: "https://constraint.systems",
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 825
    },
    __self: this
  }, "constraint.systems")), __jsx("div", {
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 829
    },
    __self: this
  }, __jsx("a", {
    target: "_blank",
    href: "https://github.com/constraint-systems/res",
    className: "jsx-3038633697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830
    },
    __self: this
  }, "View source"))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 838
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3038633697",
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}html{background:#efefef;}canvas{background:#fff;}html,body{padding:0;margin:0;font-family:'custom',monospace;font-size:12px;line-height:16px;}*{box-sizing:border-box;}a{color:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3Mvc3BpcmFsL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXkwQnlCLEFBR2dDLEFBS0EsQUFNRixBQUdILEFBSU4sQUFPWSxBQUdSLFVBVEwsSUFVWCxFQWRBLEdBSEEsQUFRa0MsRUFsQnVCLEFBS0QsQ0FtQnhELDRCQUxpQixlQUNFLGlCQUNuQixvREFmb0IsRUFMcEIsZ0JBTUEiLCJmaWxlIjoiL2hvbWUvZ3JhbnQvcy9jcy9zcGlyYWwvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxubGV0IHNwID0gMTZcbi8vIGxldCBjb2xzID0gNDBcbi8vIGxldCByb3dzID0gMzBcbi8vIGxldCBjZWxscyA9IGNvbHMgKiByb3dzXG5cbmZ1bmN0aW9uIHNweChhcnJheSkge1xuICByZXR1cm4gYXJyYXkubWFwKHYgPT4gdiAqIHNwKVxufVxuXG5sZXQgTGluZSA9ICgpID0+IDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBzcCwgd2lkdGg6ICcxMDAlJyB9fSAvPlxuXG5sZXQgU3BhY2UgPSAoKSA9PiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBzcCAvIDIgfX0gLz5cblxubGV0IEJ1dHRvbiA9ICh7XG4gIGxhYmVsLFxuICBjbGVhcmVyLFxuICB0cmlnZ2VyLFxuICB0ZXh0X2xhYmVsLFxuICBwcmVzc19nYXRlcyxcbiAgY3VzdG9tX3N0eWxlLFxufSkgPT4ge1xuICBsZXQgYnV0dG9uX3N0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICB3aWR0aDogc3AsXG4gICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICB9XG4gIGlmIChjdXN0b21fc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGJ1dHRvbl9zdHlsZSA9IE9iamVjdC5hc3NpZ24oYnV0dG9uX3N0eWxlLCBjdXN0b21fc3R5bGUpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgc3R5bGU9e2J1dHRvbl9zdHlsZX1cbiAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHt0ZXh0X2xhYmVsICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGN1cnNvcjogJ2RlZmF1bHQnIH19XG4gICAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTcGFjZSAvPlxuICAgICAgICAgIDxkaXY+e3RleHRfbGFiZWx9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxubGV0IFJlcGVhdEJ1dHRvbiA9ICh7XG4gIGxhYmVsLFxuICBjbGVhcmVyLFxuICB0cmlnZ2VyLFxuICB0ZXh0X2xhYmVsLFxuICBwcmVzc19nYXRlcyxcbiAgY3VzdG9tX3N0eWxlLFxufSkgPT4ge1xuICBsZXQgcmVwZWF0X3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgc3RhcnRfZ2F0ZSA9IHVzZVJlZihmYWxzZSlcblxuICBsZXQgdG91Y2hfbW9kZSA9IHVzZVJlZihmYWxzZSlcblxuICBsZXQgYnV0dG9uX3N0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICB3aWR0aDogc3AsXG4gICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICB9XG4gIGlmIChjdXN0b21fc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGJ1dHRvbl9zdHlsZSA9IE9iamVjdC5hc3NpZ24oYnV0dG9uX3N0eWxlLCBjdXN0b21fc3R5bGUpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgc3R5bGU9e2J1dHRvbl9zdHlsZX1cbiAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IHtcbiAgICAgICAgICB0b3VjaF9tb2RlLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgcHJlc3NfZ2F0ZXMuY3VycmVudCA9IHRydWVcbiAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVzc19nYXRlcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIHJlcGVhdF9yZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgICBjbGVhcmVyKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCA0MDApXG4gICAgICAgIH19XG4gICAgICAgIG9uVG91Y2hFbmQ9e2UgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdG91Y2hfbW9kZS5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgICB9LCA0MDApXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICBpZiAoIXRvdWNoX21vZGUuY3VycmVudCkge1xuICAgICAgICAgICAgcHJlc3NfZ2F0ZXMuY3VycmVudCA9IHRydWVcbiAgICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChwcmVzc19nYXRlcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgcmVwZWF0X3JlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgICAgIGNsZWFyZXIocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA0MDApXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlVXA9e2UgPT4ge1xuICAgICAgICAgIGlmICghdG91Y2hfbW9kZS5jdXJyZW50KSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAge3RleHRfbGFiZWwgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgY3Vyc29yOiAnZGVmYXVsdCcgfX1cbiAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgICByZXBlYXRfcmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICAgICAgY2xlYXJlcihyZXBlYXRfcmVmLmN1cnJlbnQpXG4gICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uTW91c2VVcD17ZSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgPGRpdj57dGV4dF9sYWJlbH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBsZXQgY3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgY2xlYXJfcmVuZGVyX3JlZiA9IHVzZVJlZihmYWxzZSlcbiAgbGV0IGNsZWFyX3JlZiA9IHVzZVJlZihmYWxzZSlcbiAgbGV0IHN0YXRlID0gdXNlUmVmKHt9KVxuICBsZXQga21fcmVmID0gdXNlUmVmKHt9KVxuICBsZXQgc2xpZGVyX2NsaWNrX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgc2xpZGVyX3RvdWNoX21vZGUgPSB1c2VSZWYoZmFsc2UpXG4gIGxldCBwcmVzc19nYXRlcyA9IHVzZVJlZihmYWxzZSlcbiAgbGV0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUobnVsbClcbiAgbGV0IGZpbGVfaW5wdXQgPSB1c2VSZWYobnVsbClcbiAgbGV0IHRpX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgdGhyZXNoX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgW2Zhdmljb24sIHNldEZhdmljb25dID0gdXNlU3RhdGUoJ2Zhdmljb24ucG5nJylcblxuICBmdW5jdGlvbiBsb2FkSW1hZ2Uoc3JjKSB7XG4gICAgbGV0IGMgPSBjcmVmLmN1cnJlbnRcbiAgICBsZXQgY3ggPSBjLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgbGV0IGFzcGVjdCA9IGltZy53aWR0aCAvIGltZy5oZWlnaHRcbiAgICAgIGxldCB3aW5kb3dfYXNwZWN0ID1cbiAgICAgICAgKHdpbmRvdy5pbm5lcldpZHRoIC0gc3ApIC8gKHdpbmRvdy5pbm5lckhlaWdodCAtIHNwICogOClcbiAgICAgIGNvbnNvbGUubG9nKGFzcGVjdClcbiAgICAgIGNvbnNvbGUubG9nKHdpbmRvd19hc3BlY3QpXG5cbiAgICAgIGxldCBzbmFwdywgc25hcGhcbiAgICAgIGlmIChhc3BlY3QgPCB3aW5kb3dfYXNwZWN0KSB7XG4gICAgICAgIC8vIHdvcnJ5IGFib3V0IGhlaWdodFxuICAgICAgICBsZXQgYWRqX2hlaWdodCA9IE1hdGgubWluKFxuICAgICAgICAgIGltZy5oZWlnaHQsXG4gICAgICAgICAgTWF0aC5mbG9vcih3aW5kb3cuaW5uZXJIZWlnaHQgLSBzcCAqIDgpXG4gICAgICAgIClcbiAgICAgICAgc25hcGggPSBNYXRoLnJvdW5kKGFkal9oZWlnaHQgLyBzcCkgKiBzcFxuICAgICAgICBsZXQgc25hcHIgPSBzbmFwaCAvIGltZy5oZWlnaHRcbiAgICAgICAgc25hcHcgPSBNYXRoLnJvdW5kKChpbWcud2lkdGggKiBzbmFwcikgLyBzcCkgKiBzcFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd29ycnkgYWJvdXQgd2lkdGhcbiAgICAgICAgbGV0IGFkal93aWR0aCA9IE1hdGgubWluKFxuICAgICAgICAgIGltZy53aWR0aCxcbiAgICAgICAgICBNYXRoLmZsb29yKHdpbmRvdy5pbm5lcldpZHRoIC0gc3ApIC0gc3AgLyAyXG4gICAgICAgIClcbiAgICAgICAgc25hcHcgPSBNYXRoLnJvdW5kKGFkal93aWR0aCAvIHNwKSAqIHNwXG4gICAgICAgIGxldCBzbmFwciA9IHNuYXB3IC8gaW1nLndpZHRoXG4gICAgICAgIHNuYXBoID0gTWF0aC5yb3VuZCgoaW1nLmhlaWdodCAqIHNuYXByKSAvIHNwKSAqIHNwXG4gICAgICB9XG5cbiAgICAgIGltZy53aWR0aCA9IHNuYXB3XG4gICAgICBpbWcuaGVpZ2h0ID0gc25hcGhcblxuICAgICAgc2V0V2lkdGgoaW1nLndpZHRoKVxuXG4gICAgICBjLndpZHRoID0gaW1nLndpZHRoXG4gICAgICBjLmhlaWdodCA9IGltZy5oZWlnaHRcblxuICAgICAgbGV0IGNvbHMgPSBpbWcud2lkdGggLyBzcFxuICAgICAgbGV0IHJvd3MgPSBpbWcuaGVpZ2h0IC8gc3BcbiAgICAgIGxldCBjZWxscyA9IGNvbHMgKiByb3dzXG5cbiAgICAgIC8vIHNpemUgc2xpZGVyXG4gICAgICBsZXQgdGkgPSB0aV9yZWYuY3VycmVudFxuICAgICAgdGkud2lkdGggPSBpbWcud2lkdGggLSBzcCAqIDRcbiAgICAgIHRpLmhlaWdodCA9IHNwICogMlxuXG4gICAgICAvLyBwcmVzZXJ2ZSBkaW1lbnNpb25zXG4gICAgICBsZXQgdF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgdF9pbWcud2lkdGggPSBjLndpZHRoXG4gICAgICB0X2ltZy5oZWlnaHQgPSBjLmhlaWdodFxuICAgICAgbGV0IHRfaW1neCA9IHRfaW1nLmdldENvbnRleHQoJzJkJylcbiAgICAgIHRfaW1neC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjLndpZHRoLCBjLmhlaWdodClcbiAgICAgIGltZyA9IHRfaW1nXG5cbiAgICAgIC8vIGRyYXcgb3JpZ2luYWwgaW1hZ2VcbiAgICAgIC8vIGN4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KVxuXG4gICAgICAvLyBzdG9yZSBvcmlnaW5hbCBpbWFnZVxuICAgICAgbGV0IGltYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICBpbWMud2lkdGggPSBjLndpZHRoXG4gICAgICBpbWMuaGVpZ2h0ID0gYy5oZWlnaHRcbiAgICAgIGxldCBpbXggPSBpbWMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgaW14LmRyYXdJbWFnZShpbWcsIDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KVxuXG4gICAgICAvLyBjdXQgdXAgb3JpZ2luYWwgaW1hZ2VcbiAgICAgIGxldCB0aWxlcyA9IFtdXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzOyBpKyspIHtcbiAgICAgICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgICB0LndpZHRoID0gc3BcbiAgICAgICAgdC5oZWlnaHQgPSBzcFxuICAgICAgICBsZXQgdHggPSB0LmdldENvbnRleHQoJzJkJylcblxuICAgICAgICBsZXQgeCA9IGkgJSBjb2xzXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihpIC8gY29scylcblxuICAgICAgICB0eC5kcmF3SW1hZ2UoaW1jLCB4ICogc3AsIHkgKiBzcCwgc3AsIHNwLCAwLCAwLCBzcCwgc3ApXG5cbiAgICAgICAgbGV0IGNvbXBsZXhpdHkgPSB0LnRvRGF0YVVSTCgpLmxlbmd0aCAvIChzcCAqIHNwKVxuXG4gICAgICAgIHRpbGVzLnB1c2goeyB0LCBjOiBjb21wbGV4aXR5LCB4LCB5LCBpIH0pXG4gICAgICB9XG4gICAgICB0aWxlcyA9IF8uc29ydEJ5KHRpbGVzLCAnYycpXG5cbiAgICAgIC8vIGdyaWQgd2l0aCBjb29yZGluYXRlc1xuICAgICAgbGV0IGdyaWQgPSBbLi4uQXJyYXkocm93cyldLm1hcCgobiwgeSkgPT5cbiAgICAgICAgWy4uLkFycmF5KGNvbHMpXS5tYXAoKG4sIHgpID0+IHtcbiAgICAgICAgICBsZXQgZCA9IE1hdGguc3FydChcbiAgICAgICAgICAgIE1hdGgucG93KHggLSBjb2xzIC8gMiwgMikgKyBNYXRoLnBvdyh5IC0gcm93cyAvIDIsIDIpXG4gICAgICAgICAgKS50b0ZpeGVkKDgpXG4gICAgICAgICAgcmV0dXJuIFt4LCB5LCBkXVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICAvLyBzcGlyYWwgb3JkZXIgZm9yIGl0ZXJhdGlvblxuICAgICAgbGV0IG9yZGVyZWQgPSBfLmZsYXR0ZW4oZ3JpZClcbiAgICAgIG9yZGVyZWQuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBhWzJdIC0gYlsyXVxuICAgICAgfSlcblxuICAgICAgLy8gc3BpcmFsIHRlc3RcbiAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgODAwOyBpKyspIHtcbiAgICAgIC8vICAgbGV0IFt4LCB5XSA9IG9yZGVyZWRbaV1cbiAgICAgIC8vICAgY3guZmlsbFJlY3QoLi4uc3B4KFt4LCB5LCAxLCAxXSkpXG4gICAgICAvLyB9XG5cbiAgICAgIGxldCB0aHJlc2hvbGQgPSBjZWxscyAtIE1hdGgucm91bmQoY2VsbHMgLyAyKVxuICAgICAgc3RhdGUuY3VycmVudC50aHJlc2hvbGQgPSB0aHJlc2hvbGRcbiAgICAgIHN0YXRlLmN1cnJlbnQuY2VsbHMgPSBjZWxsc1xuICAgICAgc3RhdGUuY3VycmVudC5vcmRlcmVkID0gb3JkZXJlZFxuICAgICAgc3RhdGUuY3VycmVudC5ncmlkID0gZ3JpZFxuICAgICAgc3RhdGUuY3VycmVudC5jb2xzID0gY29sc1xuICAgICAgc3RhdGUuY3VycmVudC5yb3dzID0gcm93c1xuICAgICAgc3RhdGUuY3VycmVudC5pbWMgPSBpbWNcbiAgICAgIHN0YXRlLmN1cnJlbnQudGlsZXMgPSB0aWxlc1xuXG4gICAgICAvLyBmYXZpY29uXG4gICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICB0LndpZHRoID0gMTZcbiAgICAgIHQuaGVpZ2h0ID0gMTZcbiAgICAgIGxldCB0eCA9IHQuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2VcbiAgICAgIHR4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCwgMCwgMCwgMTYsIDE2KVxuICAgICAgc2V0RmF2aWNvbih0LnRvRGF0YVVSTCgpKVxuXG4gICAgICByZW5kZXIoKVxuXG4gICAgICAvLyBjeC5maWxsU3R5bGUgPSAncmVkJ1xuICAgICAgLy8gY3guZmlsbFJlY3QoKGNvbHMgLyAyKSAqIHNwIC0gMSwgMCwgMiwgYy5oZWlnaHQpXG4gICAgICAvLyBjeC5maWxsUmVjdCgwLCAocm93cyAvIDIpICogc3AgLSAxLCBjLndpZHRoLCAyKVxuICAgICAgLy8gY3guZmlsbFN0eWxlID0gJ2JsYWNrJ1xuICAgIH1cbiAgICBpbWcuc3JjID0gc3JjXG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgY2xlYXJfcmVuZGVyX3JlZi5jdXJyZW50ID0gZmFsc2VcbiAgICBsZXQgYyA9IGNyZWYuY3VycmVudFxuICAgIGxldCBjeCA9IGMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCB7XG4gICAgICBjZWxscyxcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIG9yZGVyZWQsXG4gICAgICBncmlkLFxuICAgICAgY29scyxcbiAgICAgIHJvd3MsXG4gICAgICBpbWMsXG4gICAgICB0aWxlcyxcbiAgICB9ID0gc3RhdGUuY3VycmVudFxuXG4gICAgLy8gYWN0aXZlXG4gICAgbGV0IGFjdGl2ZSA9IFsuLi5BcnJheShyb3dzKV0ubWFwKChuLCB5KSA9PlxuICAgICAgWy4uLkFycmF5KGNvbHMpXS5tYXAoKG4sIHgpID0+IFt4LCB5LCBmYWxzZV0pXG4gICAgKVxuICAgIGZvciAobGV0IGkgPSB0aHJlc2hvbGQ7IGkgPCBjZWxsczsgaSsrKSB7XG4gICAgICBsZXQgdGlsZSA9IHRpbGVzW2ldXG4gICAgICBsZXQgeCA9IHRpbGUueFxuICAgICAgbGV0IHkgPSB0aWxlLnlcbiAgICAgIGFjdGl2ZVt5XVt4XVsyXSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBzbGlkZXJcbiAgICBsZXQgdGkgPSB0aV9yZWYuY3VycmVudFxuICAgIGxldCB0aXggPSB0aS5nZXRDb250ZXh0KCcyZCcpXG4gICAgdGl4LmZpbGxTdHlsZSA9ICcjZGRkJ1xuICAgIHRpeC5maWxsUmVjdCgwLCAwLCB0aS53aWR0aCwgc3AgKiAyKVxuICAgIHRpeC5maWxsU3R5bGUgPSAnIzk5OSdcbiAgICBsZXQgdG1hcmsgPSBNYXRoLm1pbihcbiAgICAgIE1hdGgubWF4KDEsIE1hdGgucm91bmQodGkud2lkdGggKiAoKGNlbGxzIC0gdGhyZXNob2xkKSAvIGNlbGxzKSkpLFxuICAgICAgdGkud2lkdGggLSAyXG4gICAgKVxuICAgIHRpeC5maWxsUmVjdCh0bWFyayAtIDEsIDAsIDMsIHNwICogMilcblxuICAgIHRocmVzaF9yZWYuY3VycmVudC5pbm5lckhUTUwgPSBjZWxscyAtIHRocmVzaG9sZCArICcvJyArIGNlbGxzXG5cbiAgICBmdW5jdGlvbiBnZXRGcmVlKHgsIHkpIHtcbiAgICAgIC8vIGl0IGl0IG9mZiBtYXAgaXQgaXMgdW5kZWZpbmVkXG4gICAgICBpZiAoYWN0aXZlW3ldID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsXG4gICAgICBpZiAoYWN0aXZlW3ldW3hdID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsXG4gICAgICBsZXQgY2hlY2sgPSBhY3RpdmVbeV1beF1cbiAgICAgIC8vIGZhbHNlIG1lYW5zIGVtcHR5XG4gICAgICBpZiAoY2hlY2tbMl0gPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBncmlkW3ldW3hdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIGlmIGZhbHNlXG4gICAgICAvLyBpZiAoY29vcmRzKSB7XG4gICAgICAvLyAgIGxldCBbZ3gsIGd5XSA9IGNvb3Jkc1xuICAgICAgLy8gfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE1vdmUoeCwgeSkge1xuICAgICAgbGV0IHJhdyA9IFtcbiAgICAgICAgWzAsIC0xXSxcbiAgICAgICAgWzEsIC0xXSxcbiAgICAgICAgWzEsIDFdLFxuICAgICAgICBbMSwgMF0sXG4gICAgICAgIFsxLCAxXSxcbiAgICAgICAgWzAsIDFdLFxuICAgICAgICBbLTEsIDFdLFxuICAgICAgICBbLTEsIDBdLFxuICAgICAgICBbLTEsIC0xXSxcbiAgICAgIF0ubWFwKHYgPT4gZ2V0RnJlZSh4ICsgdlswXSwgeSArIHZbMV0pKVxuICAgICAgbGV0IHNlbGYgPSBncmlkW3ldW3hdXG4gICAgICBsZXQgZmlsdGVyZWQgPSByYXcuZmlsdGVyKHYgPT4gdiAhPT0gbnVsbClcbiAgICAgIGxldCBkaXN0YW5jZXMgPSBmaWx0ZXJlZC5tYXAodiA9PiBwYXJzZUZsb2F0KHZbMl0pKVxuICAgICAgbGV0IG1pbl9kaXN0YW5jZSA9IF8ubWluKGRpc3RhbmNlcylcbiAgICAgIGlmIChtaW5fZGlzdGFuY2UgPCBzZWxmWzJdKSB7XG4gICAgICAgIGxldCBtaW5faSA9IGRpc3RhbmNlcy5pbmRleE9mKG1pbl9kaXN0YW5jZSlcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkW21pbl9pXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcmVuZGVyKCkge1xuICAgICAgbGV0IGxlYXN0X2FjdGl2ZSA9IHRydWVcbiAgICAgIGxldCBtb3ZlZCA9IGZhbHNlXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHM7IGkrKykge1xuICAgICAgICBsZXQgW3gsIHldID0gb3JkZXJlZFtpXVxuICAgICAgICBsZXQgY2hlY2sgPSBhY3RpdmVbeV1beF1cbiAgICAgICAgaWYgKGNoZWNrWzJdID09PSB0cnVlKSB7XG4gICAgICAgICAgbGVhc3RfYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICBsZXQgbW92ZV90byA9IGdldE1vdmUoeCwgeSlcbiAgICAgICAgICBpZiAobW92ZV90byAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbW92ZWQgPSB0cnVlXG4gICAgICAgICAgICBsZXQgW214LCBteV0gPSBtb3ZlX3RvXG4gICAgICAgICAgICAvLyBsZXQgb2xkID0gYWN0aXZlW215XVtteF0uc2xpY2UoKVxuICAgICAgICAgICAgbGV0IG9sZCA9IFtudWxsLCBudWxsLCBmYWxzZV1cbiAgICAgICAgICAgIGFjdGl2ZVtteV1bbXhdID0gY2hlY2tcbiAgICAgICAgICAgIGFjdGl2ZVt5XVt4XSA9IG9sZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobGVhc3RfYWN0aXZlKSB7XG4gICAgICAgIGN4LmNsZWFyUmVjdCgwLCAwLCBjLndpZHRoLCBjLmhlaWdodClcbiAgICAgIH1cbiAgICAgIGlmICghbW92ZWQpIHtcbiAgICAgICAgLy8gb25seSBkcmF3IHdoZW4gZG9uZVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzOyBpKyspIHtcbiAgICAgICAgICBsZXQgeCA9IGkgJSBjb2xzXG4gICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKGkgLyBjb2xzKVxuICAgICAgICAgIGxldCBjaGVjayA9IGFjdGl2ZVt5XVt4XVxuICAgICAgICAgIGlmIChjaGVja1syXSkge1xuICAgICAgICAgICAgY3guZHJhd0ltYWdlKFxuICAgICAgICAgICAgICBpbWMsXG4gICAgICAgICAgICAgIC4uLnNweChbLi4uY2hlY2suc2xpY2UoMCwgMiksIDEsIDFdKSxcbiAgICAgICAgICAgICAgLi4uc3B4KFt4LCB5LCAxLCAxXSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobW92ZWQgJiYgIWNsZWFyX3JlbmRlcl9yZWYuY3VycmVudCkge1xuICAgICAgICBjeC5jbGVhclJlY3QoMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpXG5cbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsczsgaSsrKSB7XG4gICAgICAgIC8vICAgbGV0IHggPSBpICUgY29sc1xuICAgICAgICAvLyAgIGxldCB5ID0gTWF0aC5mbG9vcihpIC8gY29scylcbiAgICAgICAgLy8gICBsZXQgY2hlY2sgPSBhY3RpdmVbeV1beF1cbiAgICAgICAgLy8gICAvLyBpZiAoY2hlY2spIHtcbiAgICAgICAgLy8gICBjeC5kcmF3SW1hZ2UoXG4gICAgICAgIC8vICAgICBpbWMsXG4gICAgICAgIC8vICAgICAuLi5zcHgoWy4uLmNoZWNrLnNsaWNlKDAsIDIpLCAxLCAxXSksXG4gICAgICAgIC8vICAgICAuLi5zcHgoW3gsIHksIDEsIDFdKVxuICAgICAgICAvLyAgIClcbiAgICAgICAgLy8gICAvLyB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICBfcmVuZGVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfcmVuZGVyKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsaWNrU2V0VGhyZXNob2xkKHgpIHtcbiAgICBsZXQgcmVjdCA9IHRpX3JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgeCA9IHggLSByZWN0LmxlZnRcbiAgICBsZXQgcGVyY2VudCA9IHggLyB0aV9yZWYuY3VycmVudC53aWR0aFxuICAgIGxldCB7IGNlbGxzLCB0aHJlc2hvbGQgfSA9IHN0YXRlLmN1cnJlbnRcbiAgICBsZXQgbmV3X3RocmVzaCA9XG4gICAgICBjZWxscyAtIE1hdGgubWluKGNlbGxzLCBNYXRoLm1heCgwLCBNYXRoLnJvdW5kKHBlcmNlbnQgKiBjZWxscykpKVxuICAgIHN0YXRlLmN1cnJlbnQudGhyZXNob2xkID0gbmV3X3RocmVzaFxuICAgIHJlbmRlcigpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRJbWFnZSgndmVpbGFuY2UtZmllbGQtcGhvdG8uanBnJylcbiAgfSwgW10pXG5cbiAgZnVuY3Rpb24gdHJpZ2dlcihrZXkpIHtcbiAgICBrZXlBY3Rpb24oa2V5LCBudWxsKVxuICB9XG5cbiAgZnVuY3Rpb24ga2V5QWN0aW9uKGtleSwgZXZlbnQpIHtcbiAgICBsZXQga20gPSBrbV9yZWYuY3VycmVudFxuICAgIGlmIChldmVudCA9PT0gbnVsbCkge1xuICAgICAgZXZlbnQgPSB7IHNoaWZ0S2V5OiBmYWxzZSB9XG4gICAgfVxuXG4gICAgbGV0IHNoaWZ0ID0gZXZlbnQuc2hpZnRLZXlcbiAgICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKGtleSA9PT0gJ28nKSB7XG4gICAgICBsZXQgaW5wdXQgPSBmaWxlX2lucHV0LmN1cnJlbnRcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIGxldCBmaWxlcyA9ICcnXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5maWxlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgICAgICAgZmlsZXMgKz0gaXRlbS5uYW1lICsgJy4nICsgaXRlbS50eXBlXG4gICAgICAgICAgaWYgKGl0ZW0udHlwZS5pbmRleE9mKCdpbWFnZScpIDwgMCkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoaXRlbSlcbiAgICAgICAgICBsb2FkSW1hZ2Uoc3JjKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKVxuICAgICAgfVxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKVxuXG4gICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgTW91c2VFdmVudCgnY2xpY2snLCB7XG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3AnKSB7XG4gICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuXG4gICAgICBjcmVmLmN1cnJlbnQudG9CbG9iKGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ2Rvd25sb2FkJyxcbiAgICAgICAgICAnY29sbGFwc2UtJyArXG4gICAgICAgICAgICBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgIC50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAgIC5zbGljZSgwLCAtNClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoLy0vZywgJycpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC86L2csICcnKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvXy9nLCAnJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCAnJykgK1xuICAgICAgICAgICAgJ1onICtcbiAgICAgICAgICAgICcucG5nJ1xuICAgICAgICApXG5cbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKVxuICAgICAgICBsaW5rLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAnbCcgfHwga2V5ID09PSAnYXJyb3dyaWdodCcpIHtcbiAgICAgIGxldCBtb3ZlID0gMTBcbiAgICAgIGlmIChzaGlmdCkgbW92ZSA9IDFcbiAgICAgIHN0YXRlLmN1cnJlbnQudGhyZXNob2xkID0gTWF0aC5tYXgoMCwgc3RhdGUuY3VycmVudC50aHJlc2hvbGQgLSBtb3ZlKVxuICAgICAgY2xlYXJfcmVuZGVyX3JlZi5jdXJyZW50ID0gdHJ1ZVxuICAgICAgcmVuZGVyKClcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2gnIHx8IGtleSA9PT0gJ2Fycm93bGVmdCcpIHtcbiAgICAgIGxldCBtb3ZlID0gMTBcbiAgICAgIGlmIChzaGlmdCkgbW92ZSA9IDFcbiAgICAgIHN0YXRlLmN1cnJlbnQudGhyZXNob2xkID0gTWF0aC5taW4oXG4gICAgICAgIHN0YXRlLmN1cnJlbnQuY2VsbHMsXG4gICAgICAgIHN0YXRlLmN1cnJlbnQudGhyZXNob2xkICsgbW92ZVxuICAgICAgKVxuICAgICAgY2xlYXJfcmVuZGVyX3JlZi5jdXJyZW50ID0gdHJ1ZVxuICAgICAgcmVuZGVyKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkb3duSGFuZGxlcihlKSB7XG4gICAga21fcmVmLmN1cnJlbnRbZS5rZXldID0gdHJ1ZVxuICAgIGtleUFjdGlvbihlLmtleSwgZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAga21fcmVmLmN1cnJlbnRbZS5rZXldID0gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZShlKSB7XG4gICAgaWYgKCFzbGlkZXJfdG91Y2hfbW9kZS5jdXJyZW50KSB7XG4gICAgICBpZiAoc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50KSB7XG4gICAgICAgIGNsaWNrU2V0VGhyZXNob2xkKGUuY2xpZW50WClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcmVyKGlkKSB7XG4gICAgY2xlYXJfcmVmLmN1cnJlbnQucHVzaChpZClcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyUmVwZWF0SW50ZXJ2YWxzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xlYXJfcmVmLmN1cnJlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gY2xlYXJfcmVmLmN1cnJlbnRbaV1cbiAgICAgIGNsZWFySW50ZXJ2YWwoaXRlbSlcbiAgICB9XG4gICAgY2xlYXJfcmVmLmN1cnJlbnQgPSBbXVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJQcmVzc0dhdGVzKCkge1xuICAgIHByZXNzX2dhdGVzLmN1cnJlbnQgPSBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTW91c2VVcChlKSB7XG4gICAgaWYgKCFzbGlkZXJfdG91Y2hfbW9kZS5jdXJyZW50KSB7XG4gICAgICBpZiAoc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50KSB7XG4gICAgICAgIHNsaWRlcl9jbGlja19yZWYuY3VycmVudCA9IGZhbHNlXG4gICAgICAgIGNsaWNrU2V0VGhyZXNob2xkKGUuY2xpZW50WClcbiAgICAgIH1cbiAgICB9XG4gICAgY2xlYXJQcmVzc0dhdGVzKClcbiAgICBjbGVhclJlcGVhdEludGVydmFscygpXG4gIH1cblxuICBmdW5jdGlvbiBvbkRyb3AoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBsZXQgZmlsZSA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdXG4gICAgbGV0IGZpbGVuYW1lID0gZmlsZS5wYXRoID8gZmlsZS5wYXRoIDogZmlsZS5uYW1lID8gZmlsZS5uYW1lIDogJydcbiAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKVxuICAgIGxvYWRJbWFnZShzcmMpXG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWcoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknXG4gIH1cblxuICBmdW5jdGlvbiBvblBhc3RlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGUuY2xpcGJvYXJkRGF0YS5pdGVtcykge1xuICAgICAgaWYgKGl0ZW0udHlwZS5pbmRleE9mKCdpbWFnZScpIDwgMCkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgbGV0IGZpbGUgPSBpdGVtLmdldEFzRmlsZSgpXG4gICAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKVxuICAgICAgbG9hZEltYWdlKHNyYylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZSkge1xuICAgIGlmIChzbGlkZXJfdG91Y2hfbW9kZS5jdXJyZW50KSB7XG4gICAgICBpZiAoc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50KSB7XG4gICAgICAgIGNsaWNrU2V0VGhyZXNob2xkKGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoZSkge1xuICAgIC8vIHRvdWNoIGVuZCBkb2Vzbid0IHNlZW0gdG8gaGF2ZSBjbGllbnQgeFxuICAgIGNsZWFyUHJlc3NHYXRlcygpXG4gICAgY2xlYXJSZXBlYXRJbnRlcnZhbHMoKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlTW91c2VVcClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRHJhZylcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIG9uRHJvcClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVUb3VjaEVuZClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlLCB7IHBhc3NpdmU6IGZhbHNlIH0pXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgb25QYXN0ZSlcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRHJhZylcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlVG91Y2hFbmQpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgbGV0IHRpdGxlID0gJ0NvbGxhcHNlJ1xuICAvLyBUT0RPXG4gIGxldCBkZXNjcmlwdGlvbiA9XG4gICAgJ1NlbGVjdGl2ZWx5IGRlLXJlcyBpbWFnZSBwaXhlbHMgcmFua2VkIHVzaW5nIGEgY29tcHJlc3Npb24gYWxnb3JpdGhtLidcbiAgbGV0IHNoYXJlX2ltZ191cmwgPSAnaHR0cHM6Ly9jb2xsYXBzZS5jb25zdHJhaW50LnN5c3RlbXMvY29sbGFwc2UucG5nJ1xuICBsZXQgb2dfdXJsID0gJ2h0dHBzOi8vY29sbGFwc2UuY29uc3RyYWludC5zeXN0ZW1zJ1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIiAvPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPXtmYXZpY29ufSAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEsc2hyaW5rLXRvLWZpdD1ub1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwMDAwXCIgLz5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtzaGFyZV9pbWdfdXJsfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e29nX3VybH0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IHdpZHRoICE9PSBudWxsID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgICAgICB3aWR0aDogd2lkdGggIT09IG51bGwgPyB3aWR0aCArIHNwIDogJ2F1dG8nLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiByZWY9e2ZpbGVfaW5wdXR9IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwibm8tc2VsZWN0XCJcbiAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogc3AgLyAyLCBwYWRkaW5nUmlnaHQ6IHNwIC8gMiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgbGFiZWw9XCJvXCJcbiAgICAgICAgICAgICAgcHJlc3NfZ2F0ZXM9e3ByZXNzX2dhdGVzfVxuICAgICAgICAgICAgICB0ZXh0X2xhYmVsPVwiTG9hZCBpbWFnZSAob3IgcGFzdGUgb3IgZHJvcClcIlxuICAgICAgICAgICAgICBjbGVhcmVyPXtjbGVhcmVyfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcignbycpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGxhYmVsPVwicFwiXG4gICAgICAgICAgICAgIHByZXNzX2dhdGVzPXtwcmVzc19nYXRlc31cbiAgICAgICAgICAgICAgdGV4dF9sYWJlbD1cIlNhdmUgcmVzdWx0IGFzIHBuZ1wiXG4gICAgICAgICAgICAgIGNsZWFyZXI9e2NsZWFyZXJ9XG4gICAgICAgICAgICAgIHRyaWdnZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKCdwJylcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8TGluZSAvPlxuXG4gICAgICAgICAgPGNhbnZhcyByZWY9e2NyZWZ9IC8+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICAgIGhlaWdodD17c3AgKiAyM31cbiAgICAgICAgICAgICAgcmVmPXt0aV9yZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBzcCAqIDIsXG4gICAgICAgICAgICAgICAgbGVmdDogc3AgKiAyLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdjcm9zc2hhaXInLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ9e2UgPT4ge1xuICAgICAgICAgICAgICAgIHNsaWRlcl9jbGlja19yZWYuY3VycmVudCA9IHRydWVcbiAgICAgICAgICAgICAgICBzbGlkZXJfdG91Y2hfbW9kZS5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGNsaWNrU2V0VGhyZXNob2xkKGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WClcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25Ub3VjaEVuZD17ZSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgc2xpZGVyX3RvdWNoX21vZGUuY3VycmVudCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfSwgNDAwKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFzbGlkZXJfdG91Y2hfbW9kZS5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICBzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICBjbGlja1NldFRocmVzaG9sZChlLmNsaWVudFgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxSZXBlYXRCdXR0b25cbiAgICAgICAgICAgICAgbGFiZWw9XCJoXCJcbiAgICAgICAgICAgICAgcHJlc3NfZ2F0ZXM9e3ByZXNzX2dhdGVzfVxuICAgICAgICAgICAgICBjdXN0b21fc3R5bGU9e3sgaGVpZ2h0OiBzcCAqIDIsIHdpZHRoOiBzcCAqIDIgfX1cbiAgICAgICAgICAgICAgY2xlYXJlcj17Y2xlYXJlcn1cbiAgICAgICAgICAgICAgdHJpZ2dlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyaWdnZXIoJ2gnKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgcmVmPXt0aHJlc2hfcmVmfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBzcCAqIDIgKyAncHgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgPFJlcGVhdEJ1dHRvblxuICAgICAgICAgICAgICBsYWJlbD1cImxcIlxuICAgICAgICAgICAgICBwcmVzc19nYXRlcz17cHJlc3NfZ2F0ZXN9XG4gICAgICAgICAgICAgIGN1c3RvbV9zdHlsZT17eyBoZWlnaHQ6IHNwICogMiwgd2lkdGg6IHNwICogMiB9fVxuICAgICAgICAgICAgICBjbGVhcmVyPXtjbGVhcmVyfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcignbCcpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFN1cGVycGl4ZWxzIGFyZSByYW5rZWQgYW5kIHNlbGVjdGVkIGJhc2VkIG9uIHRoZWlyIHNpemUgd2hlblxuICAgICAgICAgICAgY29tcHJlc3NlZCAoY29tcHJlc3Npb24gc2l6ZSBpcyB1c2VkIGFzIGEgcHJveHkgZm9yIGNvbXBsZXhpdHkpLlxuICAgICAgICAgICAgTGVhcm4gbW9yZSBhYm91dCBob3cgc2VsZWN0aW9uIHdvcmtzIGlueycgJ31cbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3Jlcy5jb25zdHJhaW50LnN5c3RlbXNcIj5cbiAgICAgICAgICAgICAgUmVzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAuIFN1cGVycGl4ZWxzIGFyZSBpdGVyYXRpdmVseSBjb2xsYXBzZWQgdG93YXJkcyB0aGUgY2VudGVyIHVzaW5nIGFcbiAgICAgICAgICAgIGRpc3RhbmNlIGZpZWxkLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIE9yaWdpbmFsIG1vZGVsIHBob3RvIGZyb217JyAnfVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnNzZW5zZS5jb20vZW4tdXMvbWVuL3Byb2R1Y3QvdmVpbGFuY2UvYmxhY2stZmllbGQtbHQtamFja2V0LzQ3ODQwODFcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTc2Vuc2VcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIC5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vY29uc3RyYWludC5zeXN0ZW1zXCI+XG4gICAgICAgICAgICAgICAgY29uc3RyYWludC5zeXN0ZW1zXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY29uc3RyYWludC1zeXN0ZW1zL3Jlc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBWaWV3IHNvdXJjZVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAgICAgfVxuICAgICAgICBjYW52YXMge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nLCBtb25vc3BhY2U7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/home/grant/s/cs/spiral/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.42aee01ef680e8676655.hot-update.js.map