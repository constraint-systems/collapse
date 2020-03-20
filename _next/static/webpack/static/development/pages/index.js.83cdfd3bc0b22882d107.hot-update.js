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

  function trigger(key) {
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
  return __jsx("div", {
    className: "jsx-1833542653",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1833542653",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460
    },
    __self: this
  }, "Spiral"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-1833542653",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461
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
      lineNumber: 464
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
      lineNumber: 472
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
      lineNumber: 473
    },
    __self: this
  }, __jsx("canvas", {
    ref: cref,
    className: "jsx-1833542653",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1833542653",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3Mvc3BpcmFsL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdleUIsQUFJcUIsQUFPWSxVQU5iLFNBR0csR0FJZCxtSUFIQSIsImZpbGUiOiIvaG9tZS9ncmFudC9zL2NzL3NwaXJhbC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5sZXQgc3AgPSAxNlxuLy8gbGV0IGNvbHMgPSA0MFxuLy8gbGV0IHJvd3MgPSAzMFxuLy8gbGV0IGNlbGxzID0gY29scyAqIHJvd3NcblxuZnVuY3Rpb24gc3B4KGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5tYXAodiA9PiB2ICogc3ApXG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGxldCBjcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBjbGVhcl9yZWYgPSB1c2VSZWYoZmFsc2UpXG4gIGxldCBzdGF0ZSA9IHVzZVJlZih7fSlcbiAgbGV0IGttX3JlZiA9IHVzZVJlZih7fSlcbiAgbGV0IHNsaWRlcl9jbGlja19yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHNsaWRlcl90b3VjaF9tb2RlID0gdXNlUmVmKGZhbHNlKVxuICBsZXQgcHJlc3NfZ2F0ZXMgPSB1c2VSZWYoZmFsc2UpXG4gIGxldCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBmaWxlX2lucHV0ID0gdXNlUmVmKG51bGwpXG5cbiAgZnVuY3Rpb24gbG9hZEltYWdlKHNyYykge1xuICAgIGxldCBjID0gY3JlZi5jdXJyZW50XG4gICAgbGV0IGN4ID0gYy5nZXRDb250ZXh0KCcyZCcpXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGxldCBhZGpfd2lkdGggPSBNYXRoLm1pbihcbiAgICAgICAgaW1nLndpZHRoLFxuICAgICAgICBNYXRoLmZsb29yKHdpbmRvdy5pbm5lcldpZHRoIC0gc3AgKiAyKSAtIHNwIC8gMlxuICAgICAgKVxuICAgICAgbGV0IGRzcCA9IHNwXG4gICAgICBsZXQgc25hcHcgPSBNYXRoLnJvdW5kKGFkal93aWR0aCAvIGRzcCkgKiBkc3BcbiAgICAgIGxldCBzbmFwciA9IHNuYXB3IC8gaW1nLndpZHRoXG4gICAgICBsZXQgc25hcGggPSBNYXRoLnJvdW5kKChpbWcuaGVpZ2h0ICogc25hcHIpIC8gZHNwKSAqIGRzcFxuXG4gICAgICBpbWcud2lkdGggPSBzbmFwd1xuICAgICAgaW1nLmhlaWdodCA9IHNuYXBoXG5cbiAgICAgIHNldFdpZHRoKGltZy53aWR0aClcblxuICAgICAgYy53aWR0aCA9IGltZy53aWR0aFxuICAgICAgYy5oZWlnaHQgPSBpbWcuaGVpZ2h0XG5cbiAgICAgIGxldCBjb2xzID0gaW1nLndpZHRoIC8gc3BcbiAgICAgIGxldCByb3dzID0gaW1nLmhlaWdodCAvIHNwXG4gICAgICBsZXQgY2VsbHMgPSBjb2xzICogcm93c1xuXG4gICAgICAvLyBwcmVzZXJ2ZSBkaW1lbnNpb25zXG4gICAgICBsZXQgdF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgdF9pbWcud2lkdGggPSBjLndpZHRoXG4gICAgICB0X2ltZy5oZWlnaHQgPSBjLmhlaWdodFxuICAgICAgbGV0IHRfaW1neCA9IHRfaW1nLmdldENvbnRleHQoJzJkJylcbiAgICAgIHRfaW1neC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjLndpZHRoLCBjLmhlaWdodClcbiAgICAgIGltZyA9IHRfaW1nXG5cbiAgICAgIC8vIGRyYXcgb3JpZ2luYWwgaW1hZ2VcbiAgICAgIC8vIGN4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KVxuXG4gICAgICAvLyBzdG9yZSBvcmlnaW5hbCBpbWFnZVxuICAgICAgbGV0IGltYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICBpbWMud2lkdGggPSBjLndpZHRoXG4gICAgICBpbWMuaGVpZ2h0ID0gYy5oZWlnaHRcbiAgICAgIGxldCBpbXggPSBpbWMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgaW14LmRyYXdJbWFnZShpbWcsIDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KVxuXG4gICAgICAvLyBjdXQgdXAgb3JpZ2luYWwgaW1hZ2VcbiAgICAgIGxldCB0aWxlcyA9IFtdXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzOyBpKyspIHtcbiAgICAgICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgICB0LndpZHRoID0gc3BcbiAgICAgICAgdC5oZWlnaHQgPSBzcFxuICAgICAgICBsZXQgdHggPSB0LmdldENvbnRleHQoJzJkJylcblxuICAgICAgICBsZXQgeCA9IGkgJSBjb2xzXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihpIC8gY29scylcblxuICAgICAgICB0eC5kcmF3SW1hZ2UoaW1jLCB4ICogc3AsIHkgKiBzcCwgc3AsIHNwLCAwLCAwLCBzcCwgc3ApXG5cbiAgICAgICAgbGV0IGNvbXBsZXhpdHkgPSB0LnRvRGF0YVVSTCgpLmxlbmd0aCAvIChzcCAqIHNwKVxuXG4gICAgICAgIHRpbGVzLnB1c2goeyB0LCBjOiBjb21wbGV4aXR5LCB4LCB5LCBpIH0pXG4gICAgICB9XG4gICAgICB0aWxlcyA9IF8uc29ydEJ5KHRpbGVzLCAnYycpXG5cbiAgICAgIC8vIGdyaWQgd2l0aCBjb29yZGluYXRlc1xuICAgICAgbGV0IGdyaWQgPSBbLi4uQXJyYXkocm93cyldLm1hcCgobiwgeSkgPT5cbiAgICAgICAgWy4uLkFycmF5KGNvbHMpXS5tYXAoKG4sIHgpID0+IHtcbiAgICAgICAgICBsZXQgZCA9IE1hdGguc3FydChcbiAgICAgICAgICAgIE1hdGgucG93KHggLSBjb2xzIC8gMiwgMikgKyBNYXRoLnBvdyh5IC0gcm93cyAvIDIsIDIpXG4gICAgICAgICAgKS50b0ZpeGVkKDgpXG4gICAgICAgICAgcmV0dXJuIFt4LCB5LCBkXVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICAvLyBzcGlyYWwgb3JkZXIgZm9yIGl0ZXJhdGlvblxuICAgICAgbGV0IG9yZGVyZWQgPSBfLmZsYXR0ZW4oZ3JpZClcbiAgICAgIG9yZGVyZWQuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBhWzJdIC0gYlsyXVxuICAgICAgfSlcblxuICAgICAgLy8gc3BpcmFsIHRlc3RcbiAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgODAwOyBpKyspIHtcbiAgICAgIC8vICAgbGV0IFt4LCB5XSA9IG9yZGVyZWRbaV1cbiAgICAgIC8vICAgY3guZmlsbFJlY3QoLi4uc3B4KFt4LCB5LCAxLCAxXSkpXG4gICAgICAvLyB9XG5cbiAgICAgIGxldCB0aHJlc2hvbGQgPSBjZWxscyAtIDMwMFxuICAgICAgc3RhdGUuY3VycmVudC50aHJlc2hvbGQgPSB0aHJlc2hvbGRcbiAgICAgIHN0YXRlLmN1cnJlbnQuY2VsbHMgPSBjZWxsc1xuICAgICAgc3RhdGUuY3VycmVudC5vcmRlcmVkID0gb3JkZXJlZFxuICAgICAgc3RhdGUuY3VycmVudC5ncmlkID0gZ3JpZFxuICAgICAgc3RhdGUuY3VycmVudC5jb2xzID0gY29sc1xuICAgICAgc3RhdGUuY3VycmVudC5yb3dzID0gcm93c1xuICAgICAgc3RhdGUuY3VycmVudC5pbWMgPSBpbWNcbiAgICAgIHN0YXRlLmN1cnJlbnQudGlsZXMgPSB0aWxlc1xuXG4gICAgICByZW5kZXIoKVxuXG4gICAgICAvLyBjeC5maWxsU3R5bGUgPSAncmVkJ1xuICAgICAgLy8gY3guZmlsbFJlY3QoKGNvbHMgLyAyKSAqIHNwIC0gMSwgMCwgMiwgYy5oZWlnaHQpXG4gICAgICAvLyBjeC5maWxsUmVjdCgwLCAocm93cyAvIDIpICogc3AgLSAxLCBjLndpZHRoLCAyKVxuICAgICAgLy8gY3guZmlsbFN0eWxlID0gJ2JsYWNrJ1xuICAgIH1cbiAgICBpbWcuc3JjID0gc3JjXG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgY2xlYXJfcmVmLmN1cnJlbnQgPSBmYWxzZVxuICAgIGxldCBjID0gY3JlZi5jdXJyZW50XG4gICAgbGV0IGN4ID0gYy5nZXRDb250ZXh0KCcyZCcpXG4gICAgbGV0IHtcbiAgICAgIGNlbGxzLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgb3JkZXJlZCxcbiAgICAgIGdyaWQsXG4gICAgICBjb2xzLFxuICAgICAgcm93cyxcbiAgICAgIGltYyxcbiAgICAgIHRpbGVzLFxuICAgIH0gPSBzdGF0ZS5jdXJyZW50XG5cbiAgICAvLyBhY3RpdmVcbiAgICBsZXQgYWN0aXZlID0gWy4uLkFycmF5KHJvd3MpXS5tYXAoKG4sIHkpID0+XG4gICAgICBbLi4uQXJyYXkoY29scyldLm1hcCgobiwgeCkgPT4gW3gsIHksIGZhbHNlXSlcbiAgICApXG4gICAgZm9yIChsZXQgaSA9IHRocmVzaG9sZDsgaSA8IGNlbGxzOyBpKyspIHtcbiAgICAgIGxldCB0aWxlID0gdGlsZXNbaV1cbiAgICAgIGxldCB4ID0gdGlsZS54XG4gICAgICBsZXQgeSA9IHRpbGUueVxuICAgICAgYWN0aXZlW3ldW3hdWzJdID0gdHJ1ZVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhhY3RpdmUpXG5cbiAgICBmdW5jdGlvbiBnZXRGcmVlKHgsIHkpIHtcbiAgICAgIC8vIGl0IGl0IG9mZiBtYXAgaXQgaXMgdW5kZWZpbmVkXG4gICAgICBpZiAoYWN0aXZlW3ldID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsXG4gICAgICBpZiAoYWN0aXZlW3ldW3hdID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsXG4gICAgICBsZXQgY2hlY2sgPSBhY3RpdmVbeV1beF1cbiAgICAgIC8vIGZhbHNlIG1lYW5zIGVtcHR5XG4gICAgICBpZiAoY2hlY2tbMl0gPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBncmlkW3ldW3hdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIGlmIGZhbHNlXG4gICAgICAvLyBpZiAoY29vcmRzKSB7XG4gICAgICAvLyAgIGxldCBbZ3gsIGd5XSA9IGNvb3Jkc1xuICAgICAgLy8gfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE1vdmUoeCwgeSkge1xuICAgICAgbGV0IHJhdyA9IFtcbiAgICAgICAgWzAsIC0xXSxcbiAgICAgICAgWzEsIC0xXSxcbiAgICAgICAgWzEsIDFdLFxuICAgICAgICBbMSwgMF0sXG4gICAgICAgIFsxLCAxXSxcbiAgICAgICAgWzAsIDFdLFxuICAgICAgICBbLTEsIDFdLFxuICAgICAgICBbLTEsIDBdLFxuICAgICAgICBbLTEsIC0xXSxcbiAgICAgIF0ubWFwKHYgPT4gZ2V0RnJlZSh4ICsgdlswXSwgeSArIHZbMV0pKVxuICAgICAgbGV0IHNlbGYgPSBncmlkW3ldW3hdXG4gICAgICBsZXQgZmlsdGVyZWQgPSByYXcuZmlsdGVyKHYgPT4gdiAhPT0gbnVsbClcbiAgICAgIGxldCBkaXN0YW5jZXMgPSBmaWx0ZXJlZC5tYXAodiA9PiBwYXJzZUZsb2F0KHZbMl0pKVxuICAgICAgbGV0IG1pbl9kaXN0YW5jZSA9IF8ubWluKGRpc3RhbmNlcylcbiAgICAgIGlmIChtaW5fZGlzdGFuY2UgPCBzZWxmWzJdKSB7XG4gICAgICAgIGxldCBtaW5faSA9IGRpc3RhbmNlcy5pbmRleE9mKG1pbl9kaXN0YW5jZSlcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkW21pbl9pXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcmVuZGVyKCkge1xuICAgICAgbGV0IGxlYXN0X2FjdGl2ZSA9IHRydWVcbiAgICAgIGxldCBtb3ZlZCA9IGZhbHNlXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHM7IGkrKykge1xuICAgICAgICBsZXQgW3gsIHldID0gb3JkZXJlZFtpXVxuICAgICAgICBsZXQgY2hlY2sgPSBhY3RpdmVbeV1beF1cbiAgICAgICAgaWYgKGNoZWNrWzJdID09PSB0cnVlKSB7XG4gICAgICAgICAgbGVhc3RfYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICBsZXQgbW92ZV90byA9IGdldE1vdmUoeCwgeSlcbiAgICAgICAgICBpZiAobW92ZV90byAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbW92ZWQgPSB0cnVlXG4gICAgICAgICAgICBsZXQgW214LCBteV0gPSBtb3ZlX3RvXG4gICAgICAgICAgICAvLyBsZXQgb2xkID0gYWN0aXZlW215XVtteF0uc2xpY2UoKVxuICAgICAgICAgICAgbGV0IG9sZCA9IFtudWxsLCBudWxsLCBmYWxzZV1cbiAgICAgICAgICAgIGFjdGl2ZVtteV1bbXhdID0gY2hlY2tcbiAgICAgICAgICAgIGFjdGl2ZVt5XVt4XSA9IG9sZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobGVhc3RfYWN0aXZlKSB7XG4gICAgICAgIGN4LmNsZWFyUmVjdCgwLCAwLCBjLndpZHRoLCBjLmhlaWdodClcbiAgICAgIH1cbiAgICAgIGlmICghbW92ZWQpIHtcbiAgICAgICAgLy8gb25seSBkcmF3IHdoZW4gZG9uZVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzOyBpKyspIHtcbiAgICAgICAgICBsZXQgeCA9IGkgJSBjb2xzXG4gICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKGkgLyBjb2xzKVxuICAgICAgICAgIGxldCBjaGVjayA9IGFjdGl2ZVt5XVt4XVxuICAgICAgICAgIGlmIChjaGVja1syXSkge1xuICAgICAgICAgICAgY3guZHJhd0ltYWdlKFxuICAgICAgICAgICAgICBpbWMsXG4gICAgICAgICAgICAgIC4uLnNweChbLi4uY2hlY2suc2xpY2UoMCwgMiksIDEsIDFdKSxcbiAgICAgICAgICAgICAgLi4uc3B4KFt4LCB5LCAxLCAxXSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobW92ZWQgJiYgIWNsZWFyX3JlZi5jdXJyZW50KSB7XG4gICAgICAgIGN4LmNsZWFyUmVjdCgwLCAwLCBjLndpZHRoLCBjLmhlaWdodClcblxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzOyBpKyspIHtcbiAgICAgICAgLy8gICBsZXQgeCA9IGkgJSBjb2xzXG4gICAgICAgIC8vICAgbGV0IHkgPSBNYXRoLmZsb29yKGkgLyBjb2xzKVxuICAgICAgICAvLyAgIGxldCBjaGVjayA9IGFjdGl2ZVt5XVt4XVxuICAgICAgICAvLyAgIC8vIGlmIChjaGVjaykge1xuICAgICAgICAvLyAgIGN4LmRyYXdJbWFnZShcbiAgICAgICAgLy8gICAgIGltYyxcbiAgICAgICAgLy8gICAgIC4uLnNweChbLi4uY2hlY2suc2xpY2UoMCwgMiksIDEsIDFdKSxcbiAgICAgICAgLy8gICAgIC4uLnNweChbeCwgeSwgMSwgMV0pXG4gICAgICAgIC8vICAgKVxuICAgICAgICAvLyAgIC8vIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIF9yZW5kZXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIF9yZW5kZXIoKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkSW1hZ2UoJ21ycm9ib3QyLmpwZycpXG4gIH0pXG5cbiAgZnVuY3Rpb24gdHJpZ2dlcihrZXkpIHtcbiAgICBrZXlBY3Rpb24oa2V5LCBudWxsKVxuICB9XG5cbiAgZnVuY3Rpb24ga2V5QWN0aW9uKGtleSwgZXZlbnQpIHtcbiAgICBsZXQga20gPSBrbV9yZWYuY3VycmVudFxuICAgIGlmIChldmVudCA9PT0gbnVsbCkge1xuICAgICAgZXZlbnQgPSB7IHNoaWZ0S2V5OiBmYWxzZSB9XG4gICAgfVxuXG4gICAgbGV0IHNoaWZ0ID0gZXZlbnQuc2hpZnRLZXlcbiAgICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKGtleSA9PT0gJ28nKSB7XG4gICAgICBsZXQgaW5wdXQgPSBmaWxlX2lucHV0LmN1cnJlbnRcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIGxldCBmaWxlcyA9ICcnXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5maWxlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgICAgICAgZmlsZXMgKz0gaXRlbS5uYW1lICsgJy4nICsgaXRlbS50eXBlXG4gICAgICAgICAgaWYgKGl0ZW0udHlwZS5pbmRleE9mKCdpbWFnZScpIDwgMCkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoaXRlbSlcbiAgICAgICAgICBsb2FkSW1hZ2Uoc3JjKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKVxuICAgICAgfVxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKVxuXG4gICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgTW91c2VFdmVudCgnY2xpY2snLCB7XG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3AnKSB7XG4gICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuXG4gICAgICBjcmVmLmN1cnJlbnQudG9CbG9iKGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ2Rvd25sb2FkJyxcbiAgICAgICAgICAncmVzLScgK1xuICAgICAgICAgICAgbmV3IERhdGUoKVxuICAgICAgICAgICAgICAudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgICAuc2xpY2UoMCwgLTQpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC8tL2csICcnKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvOi9nLCAnJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL18vZywgJycpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC4vZywgJycpICtcbiAgICAgICAgICAgICdaJyArXG4gICAgICAgICAgICAnLnBuZydcbiAgICAgICAgKVxuXG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSlcbiAgICAgICAgbGluay5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgIG5ldyBNb3VzZUV2ZW50KGBjbGlja2AsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ2wnIHx8IGtleSA9PT0gJ2Fycm93cmlnaHQnKSB7XG4gICAgICBsZXQgbW92ZSA9IDEwXG4gICAgICBpZiAoc2hpZnQpIG1vdmUgPSAxXG4gICAgICBzdGF0ZS5jdXJyZW50LnRocmVzaG9sZCA9IE1hdGgubWF4KDAsIHN0YXRlLmN1cnJlbnQudGhyZXNob2xkIC0gbW92ZSlcbiAgICAgIGNsZWFyX3JlZi5jdXJyZW50ID0gdHJ1ZVxuICAgICAgcmVuZGVyKClcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2gnIHx8IGtleSA9PT0gJ2Fycm93bGVmdCcpIHtcbiAgICAgIGxldCBtb3ZlID0gMTBcbiAgICAgIGlmIChzaGlmdCkgbW92ZSA9IDFcbiAgICAgIHN0YXRlLmN1cnJlbnQudGhyZXNob2xkID0gTWF0aC5taW4oXG4gICAgICAgIHN0YXRlLmN1cnJlbnQuY2VsbHMsXG4gICAgICAgIHN0YXRlLmN1cnJlbnQudGhyZXNob2xkICsgbW92ZVxuICAgICAgKVxuICAgICAgY2xlYXJfcmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICByZW5kZXIoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRvd25IYW5kbGVyKGUpIHtcbiAgICBrbV9yZWYuY3VycmVudFtlLmtleV0gPSB0cnVlXG4gICAga2V5QWN0aW9uKGUua2V5LCBlKVxuICB9XG5cbiAgZnVuY3Rpb24gdXBIYW5kbGVyKGUpIHtcbiAgICBrbV9yZWYuY3VycmVudFtlLmtleV0gPSBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlKGUpIHtcbiAgICBpZiAoIXNsaWRlcl90b3VjaF9tb2RlLmN1cnJlbnQpIHtcbiAgICAgIGlmIChzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZS5jbGllbnRYKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyZXIoaWQpIHtcbiAgICBjbGVhcl9yZWYuY3VycmVudC5wdXNoKGlkKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJSZXBlYXRJbnRlcnZhbHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGVhcl9yZWYuY3VycmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSBjbGVhcl9yZWYuY3VycmVudFtpXVxuICAgICAgY2xlYXJJbnRlcnZhbChpdGVtKVxuICAgIH1cbiAgICBjbGVhcl9yZWYuY3VycmVudCA9IFtdXG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclByZXNzR2F0ZXMoKSB7XG4gICAgcHJlc3NfZ2F0ZXMuY3VycmVudCA9IGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKGUpIHtcbiAgICBpZiAoIXNsaWRlcl90b3VjaF9tb2RlLmN1cnJlbnQpIHtcbiAgICAgIGlmIChzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQpIHtcbiAgICAgICAgc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZS5jbGllbnRYKVxuICAgICAgfVxuICAgIH1cbiAgICBjbGVhclByZXNzR2F0ZXMoKVxuICAgIGNsZWFyUmVwZWF0SW50ZXJ2YWxzKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJvcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGxldCBmaWxlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF1cbiAgICBsZXQgZmlsZW5hbWUgPSBmaWxlLnBhdGggPyBmaWxlLnBhdGggOiBmaWxlLm5hbWUgPyBmaWxlLm5hbWUgOiAnJ1xuICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgbG9hZEltYWdlKHNyYylcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZyhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSdcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUGFzdGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZS5jbGlwYm9hcmREYXRhLml0ZW1zKSB7XG4gICAgICBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPCAwKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBsZXQgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKClcbiAgICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgICBsb2FkSW1hZ2Uoc3JjKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZShlKSB7XG4gICAgaWYgKHNsaWRlcl90b3VjaF9tb2RlLmN1cnJlbnQpIHtcbiAgICAgIGlmIChzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZChlKSB7XG4gICAgLy8gdG91Y2ggZW5kIGRvZXNuJ3Qgc2VlbSB0byBoYXZlIGNsaWVudCB4XG4gICAgY2xlYXJQcmVzc0dhdGVzKClcbiAgICBjbGVhclJlcGVhdEludGVydmFscygpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIG9uUGFzdGUpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZVRvdWNoRW5kKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUsIHsgcGFzc2l2ZTogZmFsc2UgfSlcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3ApXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVUb3VjaEVuZClcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNwaXJhbDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IHdpZHRoICE9PSBudWxsID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgICAgICB3aWR0aDogd2lkdGggIT09IG51bGwgPyB3aWR0aCArIHNwIDogJ2F1dG8nLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiByZWY9e2ZpbGVfaW5wdXR9IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwibm8tc2VsZWN0XCJcbiAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogc3AgLyAyLCBwYWRkaW5nUmlnaHQ6IHNwIC8gMiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGNhbnZhcyByZWY9e2NyZWZ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/home/grant/s/cs/spiral/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.83cdfd3bc0b22882d107.hot-update.js.map