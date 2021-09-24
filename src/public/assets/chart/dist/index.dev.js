"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _get2(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get2 = Reflect.get; } else { _get2 = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get2(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Chart.js v3.5.0
 * https://www.chartjs.org
 * (c) 2021 Chart.js Contributors
 * Released under the MIT License
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Chart = e();
}(void 0, function () {
  "use strict";

  var t = "undefined" == typeof window ? function (t) {
    return t();
  } : window.requestAnimationFrame;

  function e(e, i, n) {
    var o = n || function (t) {
      return Array.prototype.slice.call(t);
    };

    var s = !1,
        a = [];
    return function () {
      for (var _len = arguments.length, n = new Array(_len), _key = 0; _key < _len; _key++) {
        n[_key] = arguments[_key];
      }

      a = o(n), s || (s = !0, t.call(window, function () {
        s = !1, e.apply(i, a);
      }));
    };
  }

  function i(t, e) {
    var i;
    return function () {
      return e ? (clearTimeout(i), i = setTimeout(t, e)) : t(), e;
    };
  }

  var n = function n(t) {
    return "start" === t ? "left" : "end" === t ? "right" : "center";
  },
      o = function o(t, e, i) {
    return "start" === t ? e : "end" === t ? i : (e + i) / 2;
  },
      s = function s(t, e, i, n) {
    return t === (n ? "left" : "right") ? i : "center" === t ? (e + i) / 2 : e;
  };

  var a = new (
  /*#__PURE__*/
  function () {
    function _class() {
      _classCallCheck(this, _class);

      this._request = null, this._charts = new Map(), this._running = !1, this._lastDate = void 0;
    }

    _createClass(_class, [{
      key: "_notify",
      value: function _notify(t, e, i, n) {
        var o = e.listeners[n],
            s = e.duration;
        o.forEach(function (n) {
          return n({
            chart: t,
            initial: e.initial,
            numSteps: s,
            currentStep: Math.min(i - e.start, s)
          });
        });
      }
    }, {
      key: "_refresh",
      value: function _refresh() {
        var e = this;
        e._request || (e._running = !0, e._request = t.call(window, function () {
          e._update(), e._request = null, e._running && e._refresh();
        }));
      }
    }, {
      key: "_update",
      value: function _update() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
        var e = this;
        var i = 0;
        e._charts.forEach(function (n, o) {
          if (!n.running || !n.items.length) return;
          var s = n.items;
          var a,
              r = s.length - 1,
              l = !1;

          for (; r >= 0; --r) {
            a = s[r], a._active ? (a._total > n.duration && (n.duration = a._total), a.tick(t), l = !0) : (s[r] = s[s.length - 1], s.pop());
          }

          l && (o.draw(), e._notify(o, n, t, "progress")), s.length || (n.running = !1, e._notify(o, n, t, "complete"), n.initial = !1), i += s.length;
        }), e._lastDate = t, 0 === i && (e._running = !1);
      }
    }, {
      key: "_getAnims",
      value: function _getAnims(t) {
        var e = this._charts;
        var i = e.get(t);
        return i || (i = {
          running: !1,
          initial: !0,
          items: [],
          listeners: {
            complete: [],
            progress: []
          }
        }, e.set(t, i)), i;
      }
    }, {
      key: "listen",
      value: function listen(t, e, i) {
        this._getAnims(t).listeners[e].push(i);
      }
    }, {
      key: "add",
      value: function add(t, e) {
        var _this$_getAnims$items;

        e && e.length && (_this$_getAnims$items = this._getAnims(t).items).push.apply(_this$_getAnims$items, _toConsumableArray(e));
      }
    }, {
      key: "has",
      value: function has(t) {
        return this._getAnims(t).items.length > 0;
      }
    }, {
      key: "start",
      value: function start(t) {
        var e = this._charts.get(t);

        e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce(function (t, e) {
          return Math.max(t, e._duration);
        }, 0), this._refresh());
      }
    }, {
      key: "running",
      value: function running(t) {
        if (!this._running) return !1;

        var e = this._charts.get(t);

        return !!(e && e.running && e.items.length);
      }
    }, {
      key: "stop",
      value: function stop(t) {
        var e = this._charts.get(t);

        if (!e || !e.items.length) return;
        var i = e.items;
        var n = i.length - 1;

        for (; n >= 0; --n) {
          i[n].cancel();
        }

        e.items = [], this._notify(t, e, Date.now(), "complete");
      }
    }, {
      key: "remove",
      value: function remove(t) {
        return this._charts["delete"](t);
      }
    }]);

    return _class;
  }())();
  /*!
   * @kurkle/color v0.1.9
   * https://github.com/kurkle/color#readme
   * (c) 2020 Jukka Kurkela
   * Released under the MIT License
   */

  var r = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  },
      l = "0123456789ABCDEF",
      c = function c(t) {
    return l[15 & t];
  },
      h = function h(t) {
    return l[(240 & t) >> 4] + l[15 & t];
  },
      d = function d(t) {
    return (240 & t) >> 4 == (15 & t);
  };

  function u(t) {
    var e = function (t) {
      return d(t.r) && d(t.g) && d(t.b) && d(t.a);
    }(t) ? c : h;
    return t ? "#" + e(t.r) + e(t.g) + e(t.b) + (t.a < 255 ? e(t.a) : "") : t;
  }

  function f(t) {
    return t + .5 | 0;
  }

  var g = function g(t, e, i) {
    return Math.max(Math.min(t, i), e);
  };

  function p(t) {
    return g(f(2.55 * t), 0, 255);
  }

  function m(t) {
    return g(f(255 * t), 0, 255);
  }

  function x(t) {
    return g(f(t / 2.55) / 100, 0, 1);
  }

  function b(t) {
    return g(f(100 * t), 0, 100);
  }

  var _ = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
  var y = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

  function v(t, e, i) {
    var n = e * Math.min(i, 1 - i),
        o = function o(e) {
      var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (e + t / 30) % 12;
      return i - n * Math.max(Math.min(o - 3, 9 - o, 1), -1);
    };

    return [o(0), o(8), o(4)];
  }

  function w(t, e, i) {
    var n = function n(_n2) {
      var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (_n2 + t / 60) % 6;
      return i - i * e * Math.max(Math.min(o, 4 - o, 1), 0);
    };

    return [n(5), n(3), n(1)];
  }

  function M(t, e, i) {
    var n = v(t, 1, .5);
    var o;

    for (e + i > 1 && (o = 1 / (e + i), e *= o, i *= o), o = 0; o < 3; o++) {
      n[o] *= 1 - e - i, n[o] += e;
    }

    return n;
  }

  function k(t) {
    var e = t.r / 255,
        i = t.g / 255,
        n = t.b / 255,
        o = Math.max(e, i, n),
        s = Math.min(e, i, n),
        a = (o + s) / 2;
    var r, l, c;
    return o !== s && (c = o - s, l = a > .5 ? c / (2 - o - s) : c / (o + s), r = o === e ? (i - n) / c + (i < n ? 6 : 0) : o === i ? (n - e) / c + 2 : (e - i) / c + 4, r = 60 * r + .5), [0 | r, l || 0, a];
  }

  function S(t, e, i, n) {
    return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, n)).map(m);
  }

  function P(t, e, i) {
    return S(v, t, e, i);
  }

  function D(t) {
    return (t % 360 + 360) % 360;
  }

  function C(t) {
    var e = y.exec(t);
    var i,
        n = 255;
    if (!e) return;
    e[5] !== i && (n = e[6] ? p(+e[5]) : m(+e[5]));
    var o = D(+e[2]),
        s = +e[3] / 100,
        a = +e[4] / 100;
    return i = "hwb" === e[1] ? function (t, e, i) {
      return S(M, t, e, i);
    }(o, s, a) : "hsv" === e[1] ? function (t, e, i) {
      return S(w, t, e, i);
    }(o, s, a) : P(o, s, a), {
      r: i[0],
      g: i[1],
      b: i[2],
      a: n
    };
  }

  var O = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh"
  },
      T = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32"
  };
  var A;

  function L(t) {
    A || (A = function () {
      var t = {},
          e = Object.keys(T),
          i = Object.keys(O);
      var n, o, s, a, r;

      for (n = 0; n < e.length; n++) {
        for (a = r = e[n], o = 0; o < i.length; o++) {
          s = i[o], r = r.replace(s, O[s]);
        }

        s = parseInt(T[a], 16), t[r] = [s >> 16 & 255, s >> 8 & 255, 255 & s];
      }

      return t;
    }(), A.transparent = [0, 0, 0, 0]);
    var e = A[t.toLowerCase()];
    return e && {
      r: e[0],
      g: e[1],
      b: e[2],
      a: 4 === e.length ? e[3] : 255
    };
  }

  function R(t, e, i) {
    if (t) {
      var _n3 = k(t);

      _n3[e] = Math.max(0, Math.min(_n3[e] + _n3[e] * i, 0 === e ? 360 : 1)), _n3 = P(_n3), t.r = _n3[0], t.g = _n3[1], t.b = _n3[2];
    }
  }

  function E(t, e) {
    return t ? Object.assign(e || {}, t) : t;
  }

  function I(t) {
    var e = {
      r: 0,
      g: 0,
      b: 0,
      a: 255
    };
    return Array.isArray(t) ? t.length >= 3 && (e = {
      r: t[0],
      g: t[1],
      b: t[2],
      a: 255
    }, t.length > 3 && (e.a = m(t[3]))) : (e = E(t, {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    })).a = m(e.a), e;
  }

  function z(t) {
    return "r" === t.charAt(0) ? function (t) {
      var e = _.exec(t);

      var i,
          n,
          o,
          s = 255;

      if (e) {
        if (e[7] !== i) {
          var _t2 = +e[7];

          s = 255 & (e[8] ? p(_t2) : 255 * _t2);
        }

        return i = +e[1], n = +e[3], o = +e[5], i = 255 & (e[2] ? p(i) : i), n = 255 & (e[4] ? p(n) : n), o = 255 & (e[6] ? p(o) : o), {
          r: i,
          g: n,
          b: o,
          a: s
        };
      }
    }(t) : C(t);
  }

  var F =
  /*#__PURE__*/
  function () {
    function F(t) {
      _classCallCheck(this, F);

      if (t instanceof F) return t;

      var e = _typeof(t);

      var i;
      var n, o, s;
      "object" === e ? i = I(t) : "string" === e && (s = (n = t).length, "#" === n[0] && (4 === s || 5 === s ? o = {
        r: 255 & 17 * r[n[1]],
        g: 255 & 17 * r[n[2]],
        b: 255 & 17 * r[n[3]],
        a: 5 === s ? 17 * r[n[4]] : 255
      } : 7 !== s && 9 !== s || (o = {
        r: r[n[1]] << 4 | r[n[2]],
        g: r[n[3]] << 4 | r[n[4]],
        b: r[n[5]] << 4 | r[n[6]],
        a: 9 === s ? r[n[7]] << 4 | r[n[8]] : 255
      })), i = o || L(t) || z(t)), this._rgb = i, this._valid = !!i;
    }

    _createClass(F, [{
      key: "rgbString",
      value: function rgbString() {
        return this._valid ? (t = this._rgb) && (t.a < 255 ? "rgba(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ", ").concat(x(t.a), ")") : "rgb(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ")")) : this._rgb;
        var t;
      }
    }, {
      key: "hexString",
      value: function hexString() {
        return this._valid ? u(this._rgb) : this._rgb;
      }
    }, {
      key: "hslString",
      value: function hslString() {
        return this._valid ? function (t) {
          if (!t) return;
          var e = k(t),
              i = e[0],
              n = b(e[1]),
              o = b(e[2]);
          return t.a < 255 ? "hsla(".concat(i, ", ").concat(n, "%, ").concat(o, "%, ").concat(x(t.a), ")") : "hsl(".concat(i, ", ").concat(n, "%, ").concat(o, "%)");
        }(this._rgb) : this._rgb;
      }
    }, {
      key: "mix",
      value: function mix(t, e) {
        var i = this;

        if (t) {
          var _n4 = i.rgb,
              _o2 = t.rgb;

          var _s2;

          var _a = e === _s2 ? .5 : e,
              _r = 2 * _a - 1,
              _l = _n4.a - _o2.a,
              _c = ((_r * _l == -1 ? _r : (_r + _l) / (1 + _r * _l)) + 1) / 2;

          _s2 = 1 - _c, _n4.r = 255 & _c * _n4.r + _s2 * _o2.r + .5, _n4.g = 255 & _c * _n4.g + _s2 * _o2.g + .5, _n4.b = 255 & _c * _n4.b + _s2 * _o2.b + .5, _n4.a = _a * _n4.a + (1 - _a) * _o2.a, i.rgb = _n4;
        }

        return i;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new F(this.rgb);
      }
    }, {
      key: "alpha",
      value: function alpha(t) {
        return this._rgb.a = m(t), this;
      }
    }, {
      key: "clearer",
      value: function clearer(t) {
        return this._rgb.a *= 1 - t, this;
      }
    }, {
      key: "greyscale",
      value: function greyscale() {
        var t = this._rgb,
            e = f(.3 * t.r + .59 * t.g + .11 * t.b);
        return t.r = t.g = t.b = e, this;
      }
    }, {
      key: "opaquer",
      value: function opaquer(t) {
        return this._rgb.a *= 1 + t, this;
      }
    }, {
      key: "negate",
      value: function negate() {
        var t = this._rgb;
        return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
      }
    }, {
      key: "lighten",
      value: function lighten(t) {
        return R(this._rgb, 2, t), this;
      }
    }, {
      key: "darken",
      value: function darken(t) {
        return R(this._rgb, 2, -t), this;
      }
    }, {
      key: "saturate",
      value: function saturate(t) {
        return R(this._rgb, 1, t), this;
      }
    }, {
      key: "desaturate",
      value: function desaturate(t) {
        return R(this._rgb, 1, -t), this;
      }
    }, {
      key: "rotate",
      value: function rotate(t) {
        return function (t, e) {
          var i = k(t);
          i[0] = D(i[0] + e), i = P(i), t.r = i[0], t.g = i[1], t.b = i[2];
        }(this._rgb, t), this;
      }
    }, {
      key: "valid",
      get: function get() {
        return this._valid;
      }
    }, {
      key: "rgb",
      get: function get() {
        var t = E(this._rgb);
        return t && (t.a = x(t.a)), t;
      },
      set: function set(t) {
        this._rgb = I(t);
      }
    }]);

    return F;
  }();

  function B(t) {
    return new F(t);
  }

  var V = function V(t) {
    return t instanceof CanvasGradient || t instanceof CanvasPattern;
  };

  function W(t) {
    return V(t) ? t : B(t);
  }

  function N(t) {
    return V(t) ? t : B(t).saturate(.5).darken(.1).hexString();
  }

  function H() {}

  var j = function () {
    var t = 0;
    return function () {
      return t++;
    };
  }();

  function $(t) {
    return null == t;
  }

  function Y(t) {
    if (Array.isArray && Array.isArray(t)) return !0;
    var e = Object.prototype.toString.call(t);
    return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
  }

  function U(t) {
    return null !== t && "[object Object]" === Object.prototype.toString.call(t);
  }

  var X = function X(t) {
    return ("number" == typeof t || t instanceof Number) && isFinite(+t);
  };

  function q(t, e) {
    return X(t) ? t : e;
  }

  function K(t, e) {
    return void 0 === t ? e : t;
  }

  var G = function G(t, e) {
    return "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : t / e;
  },
      Z = function Z(t, e) {
    return "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;
  };

  function Q(t, e, i) {
    if (t && "function" == typeof t.call) return t.apply(i, e);
  }

  function J(t, e, i, n) {
    var o, s, a;
    if (Y(t)) {
      if (s = t.length, n) for (o = s - 1; o >= 0; o--) {
        e.call(i, t[o], o);
      } else for (o = 0; o < s; o++) {
        e.call(i, t[o], o);
      }
    } else if (U(t)) for (a = Object.keys(t), s = a.length, o = 0; o < s; o++) {
      e.call(i, t[a[o]], a[o]);
    }
  }

  function tt(t, e) {
    var i, n, o, s;
    if (!t || !e || t.length !== e.length) return !1;

    for (i = 0, n = t.length; i < n; ++i) {
      if (o = t[i], s = e[i], o.datasetIndex !== s.datasetIndex || o.index !== s.index) return !1;
    }

    return !0;
  }

  function et(t) {
    if (Y(t)) return t.map(et);

    if (U(t)) {
      var _e2 = Object.create(null),
          _i2 = Object.keys(t),
          _n5 = _i2.length;

      var _o3 = 0;

      for (; _o3 < _n5; ++_o3) {
        _e2[_i2[_o3]] = et(t[_i2[_o3]]);
      }

      return _e2;
    }

    return t;
  }

  function it(t) {
    return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
  }

  function nt(t, e, i, n) {
    if (!it(t)) return;
    var o = e[t],
        s = i[t];
    U(o) && U(s) ? ot(o, s, n) : e[t] = et(s);
  }

  function ot(t, e, i) {
    var n = Y(e) ? e : [e],
        o = n.length;
    if (!U(t)) return t;
    var s = (i = i || {}).merger || nt;

    for (var _a2 = 0; _a2 < o; ++_a2) {
      if (!U(e = n[_a2])) continue;

      var _o4 = Object.keys(e);

      for (var _n6 = 0, _a3 = _o4.length; _n6 < _a3; ++_n6) {
        s(_o4[_n6], t, e, i);
      }
    }

    return t;
  }

  function st(t, e) {
    return ot(t, e, {
      merger: at
    });
  }

  function at(t, e, i) {
    if (!it(t)) return;
    var n = e[t],
        o = i[t];
    U(n) && U(o) ? st(n, o) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = et(o));
  }

  function rt(t, e) {
    var i = t.indexOf(".", e);
    return -1 === i ? t.length : i;
  }

  function lt(t, e) {
    if ("" === e) return t;
    var i = 0,
        n = rt(e, i);

    for (; t && n > i;) {
      t = t[e.substr(i, n - i)], i = n + 1, n = rt(e, i);
    }

    return t;
  }

  function ct(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }

  var ht = function ht(t) {
    return void 0 !== t;
  },
      dt = function dt(t) {
    return "function" == typeof t;
  },
      ut = function ut(t, e) {
    if (t.size !== e.size) return !1;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _i3 = _step.value;
        if (!e.has(_i3)) return !1;
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

    return !0;
  },
      ft = Object.create(null),
      gt = Object.create(null);

  function pt(t, e) {
    if (!e) return t;
    var i = e.split(".");

    for (var _e3 = 0, _n7 = i.length; _e3 < _n7; ++_e3) {
      var _n8 = i[_e3];
      t = t[_n8] || (t[_n8] = Object.create(null));
    }

    return t;
  }

  function mt(t, e, i) {
    return "string" == typeof e ? ot(pt(t, e), i) : ot(pt(t, ""), e);
  }

  var xt = new (
  /*#__PURE__*/
  function () {
    function _class2(t) {
      _classCallCheck(this, _class2);

      this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = function (t) {
        return t.chart.platform.getDevicePixelRatio();
      }, this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null
      }, this.hover = {}, this.hoverBackgroundColor = function (t, e) {
        return N(e.backgroundColor);
      }, this.hoverBorderColor = function (t, e) {
        return N(e.borderColor);
      }, this.hoverColor = function (t, e) {
        return N(e.color);
      }, this.indexAxis = "x", this.interaction = {
        mode: "nearest",
        intersect: !0
      }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.describe(t);
    }

    _createClass(_class2, [{
      key: "set",
      value: function set(t, e) {
        return mt(this, t, e);
      }
    }, {
      key: "get",
      value: function get(t) {
        return pt(this, t);
      }
    }, {
      key: "describe",
      value: function describe(t, e) {
        return mt(gt, t, e);
      }
    }, {
      key: "override",
      value: function override(t, e) {
        return mt(ft, t, e);
      }
    }, {
      key: "route",
      value: function route(t, e, i, n) {
        var _Object$definePropert;

        var o = pt(this, t),
            s = pt(this, i),
            a = "_" + e;
        Object.defineProperties(o, (_Object$definePropert = {}, _defineProperty(_Object$definePropert, a, {
          value: o[e],
          writable: !0
        }), _defineProperty(_Object$definePropert, e, {
          enumerable: !0,
          get: function get() {
            var t = this[a],
                e = s[n];
            return U(t) ? Object.assign({}, e, t) : K(t, e);
          },
          set: function set(t) {
            this[a] = t;
          }
        }), _Object$definePropert));
      }
    }]);

    return _class2;
  }())({
    _scriptable: function _scriptable(t) {
      return !t.startsWith("on");
    },
    _indexable: function _indexable(t) {
      return "events" !== t;
    },
    hover: {
      _fallback: "interaction"
    },
    interaction: {
      _scriptable: !1,
      _indexable: !1
    }
  });

  var bt = Math.PI,
      _t = 2 * bt,
      yt = _t + bt,
      vt = Number.POSITIVE_INFINITY,
      wt = bt / 180,
      Mt = bt / 2,
      kt = bt / 4,
      St = 2 * bt / 3,
      Pt = Math.log10,
      Dt = Math.sign;

  function Ct(t) {
    var e = Math.round(t);
    t = At(t, e, t / 1e3) ? e : t;
    var i = Math.pow(10, Math.floor(Pt(t))),
        n = t / i;
    return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * i;
  }

  function Ot(t) {
    var e = [],
        i = Math.sqrt(t);
    var n;

    for (n = 1; n < i; n++) {
      t % n == 0 && (e.push(n), e.push(t / n));
    }

    return i === (0 | i) && e.push(i), e.sort(function (t, e) {
      return t - e;
    }).pop(), e;
  }

  function Tt(t) {
    return !isNaN(parseFloat(t)) && isFinite(t);
  }

  function At(t, e, i) {
    return Math.abs(t - e) < i;
  }

  function Lt(t, e) {
    var i = Math.round(t);
    return i - e <= t && i + e >= t;
  }

  function Rt(t, e, i) {
    var n, o, s;

    for (n = 0, o = t.length; n < o; n++) {
      s = t[n][i], isNaN(s) || (e.min = Math.min(e.min, s), e.max = Math.max(e.max, s));
    }
  }

  function Et(t) {
    return t * (bt / 180);
  }

  function It(t) {
    return t * (180 / bt);
  }

  function zt(t) {
    if (!X(t)) return;
    var e = 1,
        i = 0;

    for (; Math.round(t * e) / e !== t;) {
      e *= 10, i++;
    }

    return i;
  }

  function Ft(t, e) {
    var i = e.x - t.x,
        n = e.y - t.y,
        o = Math.sqrt(i * i + n * n);
    var s = Math.atan2(n, i);
    return s < -.5 * bt && (s += _t), {
      angle: s,
      distance: o
    };
  }

  function Bt(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  }

  function Vt(t, e) {
    return (t - e + yt) % _t - bt;
  }

  function Wt(t) {
    return (t % _t + _t) % _t;
  }

  function Nt(t, e, i, n) {
    var o = Wt(t),
        s = Wt(e),
        a = Wt(i),
        r = Wt(s - o),
        l = Wt(a - o),
        c = Wt(o - s),
        h = Wt(o - a);
    return o === s || o === a || n && s === a || r > l && c < h;
  }

  function Ht(t, e, i) {
    return Math.max(e, Math.min(i, t));
  }

  function jt(t) {
    return Ht(t, -32768, 32767);
  }

  function $t(t) {
    return !t || $(t.size) || $(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
  }

  function Yt(t, e, i, n, o) {
    var s = e[o];
    return s || (s = e[o] = t.measureText(o).width, i.push(o)), s > n && (n = s), n;
  }

  function Ut(t, e, i, n) {
    var o = (n = n || {}).data = n.data || {},
        s = n.garbageCollect = n.garbageCollect || [];
    n.font !== e && (o = n.data = {}, s = n.garbageCollect = [], n.font = e), t.save(), t.font = e;
    var a = 0;
    var r = i.length;
    var l, c, h, d, u;

    for (l = 0; l < r; l++) {
      if (d = i[l], null != d && !0 !== Y(d)) a = Yt(t, o, s, a, d);else if (Y(d)) for (c = 0, h = d.length; c < h; c++) {
        u = d[c], null == u || Y(u) || (a = Yt(t, o, s, a, u));
      }
    }

    t.restore();
    var f = s.length / 2;

    if (f > i.length) {
      for (l = 0; l < f; l++) {
        delete o[s[l]];
      }

      s.splice(0, f);
    }

    return a;
  }

  function Xt(t, e, i) {
    var n = t.currentDevicePixelRatio,
        o = 0 !== i ? Math.max(i / 2, .5) : 0;
    return Math.round((e - o) * n) / n + o;
  }

  function qt(t, e) {
    (e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore();
  }

  function Kt(t, e, i, n) {
    var o, s, a, r, l;
    var c = e.pointStyle,
        h = e.rotation,
        d = e.radius;
    var u = (h || 0) * wt;
    if (c && "object" == _typeof(c) && (o = c.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(i, n), t.rotate(u), t.drawImage(c, -c.width / 2, -c.height / 2, c.width, c.height), void t.restore();

    if (!(isNaN(d) || d <= 0)) {
      switch (t.beginPath(), c) {
        default:
          t.arc(i, n, d, 0, _t), t.closePath();
          break;

        case "triangle":
          t.moveTo(i + Math.sin(u) * d, n - Math.cos(u) * d), u += St, t.lineTo(i + Math.sin(u) * d, n - Math.cos(u) * d), u += St, t.lineTo(i + Math.sin(u) * d, n - Math.cos(u) * d), t.closePath();
          break;

        case "rectRounded":
          l = .516 * d, r = d - l, s = Math.cos(u + kt) * r, a = Math.sin(u + kt) * r, t.arc(i - s, n - a, l, u - bt, u - Mt), t.arc(i + a, n - s, l, u - Mt, u), t.arc(i + s, n + a, l, u, u + Mt), t.arc(i - a, n + s, l, u + Mt, u + bt), t.closePath();
          break;

        case "rect":
          if (!h) {
            r = Math.SQRT1_2 * d, t.rect(i - r, n - r, 2 * r, 2 * r);
            break;
          }

          u += kt;

        case "rectRot":
          s = Math.cos(u) * d, a = Math.sin(u) * d, t.moveTo(i - s, n - a), t.lineTo(i + a, n - s), t.lineTo(i + s, n + a), t.lineTo(i - a, n + s), t.closePath();
          break;

        case "crossRot":
          u += kt;

        case "cross":
          s = Math.cos(u) * d, a = Math.sin(u) * d, t.moveTo(i - s, n - a), t.lineTo(i + s, n + a), t.moveTo(i + a, n - s), t.lineTo(i - a, n + s);
          break;

        case "star":
          s = Math.cos(u) * d, a = Math.sin(u) * d, t.moveTo(i - s, n - a), t.lineTo(i + s, n + a), t.moveTo(i + a, n - s), t.lineTo(i - a, n + s), u += kt, s = Math.cos(u) * d, a = Math.sin(u) * d, t.moveTo(i - s, n - a), t.lineTo(i + s, n + a), t.moveTo(i + a, n - s), t.lineTo(i - a, n + s);
          break;

        case "line":
          s = Math.cos(u) * d, a = Math.sin(u) * d, t.moveTo(i - s, n - a), t.lineTo(i + s, n + a);
          break;

        case "dash":
          t.moveTo(i, n), t.lineTo(i + Math.cos(u) * d, n + Math.sin(u) * d);
      }

      t.fill(), e.borderWidth > 0 && t.stroke();
    }
  }

  function Gt(t, e, i) {
    return i = i || .5, t && e && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i;
  }

  function Zt(t, e) {
    t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
  }

  function Qt(t) {
    t.restore();
  }

  function Jt(t, e, i, n, o) {
    if (!e) return t.lineTo(i.x, i.y);

    if ("middle" === o) {
      var _n9 = (e.x + i.x) / 2;

      t.lineTo(_n9, e.y), t.lineTo(_n9, i.y);
    } else "after" === o != !!n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);

    t.lineTo(i.x, i.y);
  }

  function te(t, e, i, n) {
    if (!e) return t.lineTo(i.x, i.y);
    t.bezierCurveTo(n ? e.cp1x : e.cp2x, n ? e.cp1y : e.cp2y, n ? i.cp2x : i.cp1x, n ? i.cp2y : i.cp1y, i.x, i.y);
  }

  function ee(t, e, i, n, o) {
    var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    var a = Y(e) ? e : [e],
        r = s.strokeWidth > 0 && "" !== s.strokeColor;
    var l, c;

    for (t.save(), t.font = o.string, function (t, e) {
      e.translation && t.translate(e.translation[0], e.translation[1]);
      $(e.rotation) || t.rotate(e.rotation);
      e.color && (t.fillStyle = e.color);
      e.textAlign && (t.textAlign = e.textAlign);
      e.textBaseline && (t.textBaseline = e.textBaseline);
    }(t, s), l = 0; l < a.length; ++l) {
      c = a[l], r && (s.strokeColor && (t.strokeStyle = s.strokeColor), $(s.strokeWidth) || (t.lineWidth = s.strokeWidth), t.strokeText(c, i, n, s.maxWidth)), t.fillText(c, i, n, s.maxWidth), ie(t, i, n, c, s), n += o.lineHeight;
    }

    t.restore();
  }

  function ie(t, e, i, n, o) {
    if (o.strikethrough || o.underline) {
      var _s3 = t.measureText(n),
          _a4 = e - _s3.actualBoundingBoxLeft,
          _r2 = e + _s3.actualBoundingBoxRight,
          _l2 = i - _s3.actualBoundingBoxAscent,
          _c2 = i + _s3.actualBoundingBoxDescent,
          _h = o.strikethrough ? (_l2 + _c2) / 2 : _c2;

      t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = o.decorationWidth || 2, t.moveTo(_a4, _h), t.lineTo(_r2, _h), t.stroke();
    }
  }

  function ne(t, e) {
    var i = e.x,
        n = e.y,
        o = e.w,
        s = e.h,
        a = e.radius;
    t.arc(i + a.topLeft, n + a.topLeft, a.topLeft, -Mt, bt, !0), t.lineTo(i, n + s - a.bottomLeft), t.arc(i + a.bottomLeft, n + s - a.bottomLeft, a.bottomLeft, bt, Mt, !0), t.lineTo(i + o - a.bottomRight, n + s), t.arc(i + o - a.bottomRight, n + s - a.bottomRight, a.bottomRight, Mt, 0, !0), t.lineTo(i + o, n + a.topRight), t.arc(i + o - a.topRight, n + a.topRight, a.topRight, 0, -Mt, !0), t.lineTo(i + a.topLeft, n);
  }

  function oe(t, e, i) {
    i = i || function (i) {
      return t[i] < e;
    };

    var n,
        o = t.length - 1,
        s = 0;

    for (; o - s > 1;) {
      n = s + o >> 1, i(n) ? s = n : o = n;
    }

    return {
      lo: s,
      hi: o
    };
  }

  var se = function se(t, e, i) {
    return oe(t, i, function (n) {
      return t[n][e] < i;
    });
  },
      ae = function ae(t, e, i) {
    return oe(t, i, function (n) {
      return t[n][e] >= i;
    });
  };

  function re(t, e, i) {
    var n = 0,
        o = t.length;

    for (; n < o && t[n] < e;) {
      n++;
    }

    for (; o > n && t[o - 1] > i;) {
      o--;
    }

    return n > 0 || o < t.length ? t.slice(n, o) : t;
  }

  var le = ["push", "pop", "shift", "splice", "unshift"];

  function ce(t, e) {
    t._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
      configurable: !0,
      enumerable: !1,
      value: {
        listeners: [e]
      }
    }), le.forEach(function (e) {
      var i = "_onData" + ct(e),
          n = t[e];
      Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: !1,
        value: function value() {
          for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            e[_key2] = arguments[_key2];
          }

          var o = n.apply(this, e);
          return t._chartjs.listeners.forEach(function (t) {
            "function" == typeof t[i] && t[i].apply(t, e);
          }), o;
        }
      });
    }));
  }

  function he(t, e) {
    var i = t._chartjs;
    if (!i) return;
    var n = i.listeners,
        o = n.indexOf(e);
    -1 !== o && n.splice(o, 1), n.length > 0 || (le.forEach(function (e) {
      delete t[e];
    }), delete t._chartjs);
  }

  function de(t) {
    var e = new Set();
    var i, n;

    for (i = 0, n = t.length; i < n; ++i) {
      e.add(t[i]);
    }

    return e.size === n ? t : Array.from(e);
  }

  function ue() {
    return "undefined" != typeof window && "undefined" != typeof document;
  }

  function fe(t) {
    var e = t.parentNode;
    return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
  }

  function ge(t, e, i) {
    var n;
    return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n;
  }

  var pe = function pe(t) {
    return window.getComputedStyle(t, null);
  };

  function me(t, e) {
    return pe(t).getPropertyValue(e);
  }

  var xe = ["top", "right", "bottom", "left"];

  function be(t, e, i) {
    var n = {};
    i = i ? "-" + i : "";

    for (var _o5 = 0; _o5 < 4; _o5++) {
      var _s4 = xe[_o5];
      n[_s4] = parseFloat(t[e + "-" + _s4 + i]) || 0;
    }

    return n.width = n.left + n.right, n.height = n.top + n.bottom, n;
  }

  function _e(t, e) {
    var i = e.canvas,
        n = e.currentDevicePixelRatio,
        o = pe(i),
        s = "border-box" === o.boxSizing,
        a = be(o, "padding"),
        r = be(o, "border", "width"),
        _ref = function (t, e) {
      var i = t["native"] || t,
          n = i.touches,
          o = n && n.length ? n[0] : i,
          s = o.offsetX,
          a = o.offsetY;
      var r,
          l,
          c = !1;
      if (function (t, e, i) {
        return (t > 0 || e > 0) && (!i || !i.shadowRoot);
      }(s, a, i.target)) r = s, l = a;else {
        var _t3 = e.getBoundingClientRect();

        r = o.clientX - _t3.left, l = o.clientY - _t3.top, c = !0;
      }
      return {
        x: r,
        y: l,
        box: c
      };
    }(t, i),
        l = _ref.x,
        c = _ref.y,
        h = _ref.box,
        d = a.left + (h && r.left),
        u = a.top + (h && r.top);

    var f = e.width,
        g = e.height;
    return s && (f -= a.width + r.width, g -= a.height + r.height), {
      x: Math.round((l - d) / f * i.width / n),
      y: Math.round((c - u) / g * i.height / n)
    };
  }

  var ye = function ye(t) {
    return Math.round(10 * t) / 10;
  };

  function ve(t, e, i, n) {
    var o = pe(t),
        s = be(o, "margin"),
        a = ge(o.maxWidth, t, "clientWidth") || vt,
        r = ge(o.maxHeight, t, "clientHeight") || vt,
        l = function (t, e, i) {
      var n, o;

      if (void 0 === e || void 0 === i) {
        var _s5 = fe(t);

        if (_s5) {
          var _t4 = _s5.getBoundingClientRect(),
              _a5 = pe(_s5),
              _r3 = be(_a5, "border", "width"),
              _l3 = be(_a5, "padding");

          e = _t4.width - _l3.width - _r3.width, i = _t4.height - _l3.height - _r3.height, n = ge(_a5.maxWidth, _s5, "clientWidth"), o = ge(_a5.maxHeight, _s5, "clientHeight");
        } else e = t.clientWidth, i = t.clientHeight;
      }

      return {
        width: e,
        height: i,
        maxWidth: n || vt,
        maxHeight: o || vt
      };
    }(t, e, i);

    var c = l.width,
        h = l.height;

    if ("content-box" === o.boxSizing) {
      var _t5 = be(o, "border", "width"),
          _e4 = be(o, "padding");

      c -= _e4.width + _t5.width, h -= _e4.height + _t5.height;
    }

    return c = Math.max(0, c - s.width), h = Math.max(0, n ? Math.floor(c / n) : h - s.height), c = ye(Math.min(c, a, l.maxWidth)), h = ye(Math.min(h, r, l.maxHeight)), c && !h && (h = ye(c / 2)), {
      width: c,
      height: h
    };
  }

  function we(t, e, i) {
    var n = e || 1,
        o = Math.floor(t.height * n),
        s = Math.floor(t.width * n);
    t.height = o / n, t.width = s / n;
    var a = t.canvas;
    return a.style && (i || !a.style.height && !a.style.width) && (a.style.height = "".concat(t.height, "px"), a.style.width = "".concat(t.width, "px")), (t.currentDevicePixelRatio !== n || a.height !== o || a.width !== s) && (t.currentDevicePixelRatio = n, a.height = o, a.width = s, t.ctx.setTransform(n, 0, 0, n, 0, 0), !0);
  }

  var Me = function () {
    var t = !1;

    try {
      var _e5 = {
        get passive() {
          return t = !0, !1;
        }

      };
      window.addEventListener("test", null, _e5), window.removeEventListener("test", null, _e5);
    } catch (t) {}

    return t;
  }();

  function ke(t, e) {
    var i = me(t, e),
        n = i && i.match(/^(\d+)(\.\d+)?px$/);
    return n ? +n[1] : void 0;
  }

  function Se(t, e) {
    return "native" in t ? {
      x: t.x,
      y: t.y
    } : _e(t, e);
  }

  function Pe(t, e, i, n) {
    var o = t.controller,
        s = t.data,
        a = t._sorted,
        r = o._cachedMeta.iScale;

    if (r && e === r.axis && a && s.length) {
      var _t6 = r._reversePixels ? ae : se;

      if (!n) return _t6(s, e, i);

      if (o._sharedOptions) {
        var _n10 = s[0],
            _o6 = "function" == typeof _n10.getRange && _n10.getRange(e);

        if (_o6) {
          var _n11 = _t6(s, e, i - _o6),
              _a6 = _t6(s, e, i + _o6);

          return {
            lo: _n11.lo,
            hi: _a6.hi
          };
        }
      }
    }

    return {
      lo: 0,
      hi: s.length - 1
    };
  }

  function De(t, e, i, n, o) {
    var s = t.getSortedVisibleDatasetMetas(),
        a = i[e];

    for (var _t7 = 0, _i4 = s.length; _t7 < _i4; ++_t7) {
      var _s$_t = s[_t7],
          _i5 = _s$_t.index,
          _r4 = _s$_t.data,
          _Pe = Pe(s[_t7], e, a, o),
          _l4 = _Pe.lo,
          _c3 = _Pe.hi;

      for (var _t8 = _l4; _t8 <= _c3; ++_t8) {
        var _e6 = _r4[_t8];
        _e6.skip || n(_e6, _i5, _t8);
      }
    }
  }

  function Ce(t, e, i, n) {
    var o = [];
    if (!Gt(e, t.chartArea, t._minPadding)) return o;
    return De(t, i, e, function (t, i, s) {
      t.inRange(e.x, e.y, n) && o.push({
        element: t,
        datasetIndex: i,
        index: s
      });
    }, !0), o;
  }

  function Oe(t, e, i, n, o) {
    var s = function (t) {
      var e = -1 !== t.indexOf("x"),
          i = -1 !== t.indexOf("y");
      return function (t, n) {
        var o = e ? Math.abs(t.x - n.x) : 0,
            s = i ? Math.abs(t.y - n.y) : 0;
        return Math.sqrt(Math.pow(o, 2) + Math.pow(s, 2));
      };
    }(i);

    var a = Number.POSITIVE_INFINITY,
        r = [];
    if (!Gt(e, t.chartArea, t._minPadding)) return r;
    return De(t, i, e, function (i, l, c) {
      if (n && !i.inRange(e.x, e.y, o)) return;
      var h = i.getCenterPoint(o);
      if (!Gt(h, t.chartArea, t._minPadding) && !i.inRange(e.x, e.y, o)) return;
      var d = s(e, h);
      d < a ? (r = [{
        element: i,
        datasetIndex: l,
        index: c
      }], a = d) : d === a && r.push({
        element: i,
        datasetIndex: l,
        index: c
      });
    }), r;
  }

  function Te(t, e, i, n) {
    var o = Se(e, t),
        s = [],
        a = i.axis,
        r = "x" === a ? "inXRange" : "inYRange";
    var l = !1;
    return function (t, e) {
      var i = t.getSortedVisibleDatasetMetas();
      var n, o, s;

      for (var _t9 = 0, _a7 = i.length; _t9 < _a7; ++_t9) {
        var _i$_t = i[_t9];
        n = _i$_t.index;
        o = _i$_t.data;

        for (var _t10 = 0, _i6 = o.length; _t10 < _i6; ++_t10) {
          s = o[_t10], s.skip || e(s, n, _t10);
        }
      }
    }(t, function (t, e, i) {
      t[r](o[a], n) && s.push({
        element: t,
        datasetIndex: e,
        index: i
      }), t.inRange(o.x, o.y, n) && (l = !0);
    }), i.intersect && !l ? [] : s;
  }

  var Ae = {
    modes: {
      index: function index(t, e, i, n) {
        var o = Se(e, t),
            s = i.axis || "x",
            a = i.intersect ? Ce(t, o, s, n) : Oe(t, o, s, !1, n),
            r = [];
        return a.length ? (t.getSortedVisibleDatasetMetas().forEach(function (t) {
          var e = a[0].index,
              i = t.data[e];
          i && !i.skip && r.push({
            element: i,
            datasetIndex: t.index,
            index: e
          });
        }), r) : [];
      },
      dataset: function dataset(t, e, i, n) {
        var o = Se(e, t),
            s = i.axis || "xy";
        var a = i.intersect ? Ce(t, o, s, n) : Oe(t, o, s, !1, n);

        if (a.length > 0) {
          var _e7 = a[0].datasetIndex,
              _i7 = t.getDatasetMeta(_e7).data;
          a = [];

          for (var _t11 = 0; _t11 < _i7.length; ++_t11) {
            a.push({
              element: _i7[_t11],
              datasetIndex: _e7,
              index: _t11
            });
          }
        }

        return a;
      },
      point: function point(t, e, i, n) {
        return Ce(t, Se(e, t), i.axis || "xy", n);
      },
      nearest: function nearest(t, e, i, n) {
        return Oe(t, Se(e, t), i.axis || "xy", i.intersect, n);
      },
      x: function x(t, e, i, n) {
        return i.axis = "x", Te(t, e, i, n);
      },
      y: function y(t, e, i, n) {
        return i.axis = "y", Te(t, e, i, n);
      }
    }
  };
  var Le = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
      Re = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);

  function Ee(t, e) {
    var i = ("" + t).match(Le);
    if (!i || "normal" === i[1]) return 1.2 * e;

    switch (t = +i[2], i[3]) {
      case "px":
        return t;

      case "%":
        t /= 100;
    }

    return e * t;
  }

  function Ie(t, e) {
    var i = {},
        n = U(e),
        o = n ? Object.keys(e) : e,
        s = U(t) ? n ? function (i) {
      return K(t[i], t[e[i]]);
    } : function (e) {
      return t[e];
    } : function () {
      return t;
    };
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = o[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _t12 = _step2.value;
        i[_t12] = +s(_t12) || 0;
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

    return i;
  }

  function ze(t) {
    return Ie(t, {
      top: "y",
      right: "x",
      bottom: "y",
      left: "x"
    });
  }

  function Fe(t) {
    return Ie(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
  }

  function Be(t) {
    var e = ze(t);
    return e.width = e.left + e.right, e.height = e.top + e.bottom, e;
  }

  function Ve(t, e) {
    t = t || {}, e = e || xt.font;
    var i = K(t.size, e.size);
    "string" == typeof i && (i = parseInt(i, 10));
    var n = K(t.style, e.style);
    n && !("" + n).match(Re) && (console.warn('Invalid font style specified: "' + n + '"'), n = "");
    var o = {
      family: K(t.family, e.family),
      lineHeight: Ee(K(t.lineHeight, e.lineHeight), i),
      size: i,
      style: n,
      weight: K(t.weight, e.weight),
      string: ""
    };
    return o.string = $t(o), o;
  }

  function We(t, e, i, n) {
    var o,
        s,
        a,
        r = !0;

    for (o = 0, s = t.length; o < s; ++o) {
      if (a = t[o], void 0 !== a && (void 0 !== e && "function" == typeof a && (a = a(e), r = !1), void 0 !== i && Y(a) && (a = a[i % a.length], r = !1), void 0 !== a)) return n && !r && (n.cacheable = !1), a;
    }
  }

  function Ne(t, e) {
    var i = t.min,
        n = t.max;
    return {
      min: i - Math.abs(Z(e, i)),
      max: n + Z(e, n)
    };
  }

  var He = ["left", "top", "right", "bottom"];

  function je(t, e) {
    return t.filter(function (t) {
      return t.pos === e;
    });
  }

  function $e(t, e) {
    return t.filter(function (t) {
      return -1 === He.indexOf(t.pos) && t.box.axis === e;
    });
  }

  function Ye(t, e) {
    return t.sort(function (t, i) {
      var n = e ? i : t,
          o = e ? t : i;
      return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
    });
  }

  function Ue(t, e) {
    var i = function (t) {
      var e = {};
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = t[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _i8 = _step3.value;
          var _t13 = _i8.stack,
              _n12 = _i8.pos,
              _o7 = _i8.stackWeight;
          if (!_t13 || !He.includes(_n12)) continue;

          var _s6 = e[_t13] || (e[_t13] = {
            count: 0,
            placed: 0,
            weight: 0,
            size: 0
          });

          _s6.count++, _s6.weight += _o7;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return e;
    }(t),
        n = e.vBoxMaxWidth,
        o = e.hBoxMaxHeight;

    var s, a, r;

    for (s = 0, a = t.length; s < a; ++s) {
      r = t[s];

      var _a8 = r.box.fullSize,
          _l5 = i[r.stack],
          _c4 = _l5 && r.stackWeight / _l5.weight;

      r.horizontal ? (r.width = _c4 ? _c4 * n : _a8 && e.availableWidth, r.height = o) : (r.width = n, r.height = _c4 ? _c4 * o : _a8 && e.availableHeight);
    }

    return i;
  }

  function Xe(t, e, i, n) {
    return Math.max(t[i], e[i]) + Math.max(t[n], e[n]);
  }

  function qe(t, e) {
    t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right);
  }

  function Ke(t, e, i, n) {
    var o = i.pos,
        s = i.box,
        a = t.maxPadding;

    if (!U(o)) {
      i.size && (t[o] -= i.size);

      var _e8 = n[i.stack] || {
        size: 0,
        count: 1
      };

      _e8.size = Math.max(_e8.size, i.horizontal ? s.height : s.width), i.size = _e8.size / _e8.count, t[o] += i.size;
    }

    s.getPadding && qe(a, s.getPadding());
    var r = Math.max(0, e.outerWidth - Xe(a, t, "left", "right")),
        l = Math.max(0, e.outerHeight - Xe(a, t, "top", "bottom")),
        c = r !== t.w,
        h = l !== t.h;
    return t.w = r, t.h = l, i.horizontal ? {
      same: c,
      other: h
    } : {
      same: h,
      other: c
    };
  }

  function Ge(t, e) {
    var i = e.maxPadding;

    function n(t) {
      var n = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      return t.forEach(function (t) {
        n[t] = Math.max(e[t], i[t]);
      }), n;
    }

    return n(t ? ["left", "right"] : ["top", "bottom"]);
  }

  function Ze(t, e, i, n) {
    var o = [];
    var s, a, r, l, c, h;

    for (s = 0, a = t.length, c = 0; s < a; ++s) {
      r = t[s], l = r.box, l.update(r.width || e.w, r.height || e.h, Ge(r.horizontal, e));

      var _Ke = Ke(e, i, r, n),
          _a9 = _Ke.same,
          _d = _Ke.other;

      c |= _a9 && o.length, h = h || _d, l.fullSize || o.push(r);
    }

    return c && Ze(o, e, i, n) || h;
  }

  function Qe(t, e, i, n, o) {
    t.top = i, t.left = e, t.right = e + n, t.bottom = i + o, t.width = n, t.height = o;
  }

  function Je(t, e, i, n) {
    var o = i.padding;
    var s = e.x,
        a = e.y;
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = t[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _r5 = _step4.value;

        var _t14 = _r5.box,
            _l6 = n[_r5.stack] || {
          count: 1,
          placed: 0,
          weight: 1
        },
            _c5 = _r5.stackWeight / _l6.weight || 1;

        if (_r5.horizontal) {
          var _n13 = e.w * _c5,
              _s7 = _l6.size || _t14.height;

          ht(_l6.start) && (a = _l6.start), _t14.fullSize ? Qe(_t14, o.left, a, i.outerWidth - o.right - o.left, _s7) : Qe(_t14, e.left + _l6.placed, a, _n13, _s7), _l6.start = a, _l6.placed += _n13, a = _t14.bottom;
        } else {
          var _n14 = e.h * _c5,
              _a10 = _l6.size || _t14.width;

          ht(_l6.start) && (s = _l6.start), _t14.fullSize ? Qe(_t14, s, o.top, _a10, i.outerHeight - o.bottom - o.top) : Qe(_t14, s, e.top + _l6.placed, _a10, _n14), _l6.start = s, _l6.placed += _n14, s = _t14.right;
        }
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
          _iterator4["return"]();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    e.x = s, e.y = a;
  }

  xt.set("layout", {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
  var ti = {
    addBox: function addBox(t, e) {
      t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function () {
        return [{
          z: 0,
          draw: function draw(t) {
            e.draw(t);
          }
        }];
      }, t.boxes.push(e);
    },
    removeBox: function removeBox(t, e) {
      var i = t.boxes ? t.boxes.indexOf(e) : -1;
      -1 !== i && t.boxes.splice(i, 1);
    },
    configure: function configure(t, e, i) {
      e.fullSize = i.fullSize, e.position = i.position, e.weight = i.weight;
    },
    update: function update(t, e, i, n) {
      if (!t) return;

      var o = Be(t.options.layout.padding),
          s = Math.max(e - o.width, 0),
          a = Math.max(i - o.height, 0),
          r = function (t) {
        var e = function (t) {
          var e = [];
          var i, n, o, s, a, r;

          for (i = 0, n = (t || []).length; i < n; ++i) {
            var _o8, _o8$options, _o8$options$stackWeig;

            o = t[i], (_o8 = o, s = _o8.position, _o8$options = _o8.options, a = _o8$options.stack, _o8$options$stackWeig = _o8$options.stackWeight, r = _o8$options$stackWeig === void 0 ? 1 : _o8$options$stackWeig, _o8), e.push({
              index: i,
              box: o,
              pos: s,
              horizontal: o.isHorizontal(),
              weight: o.weight,
              stack: a && s + a,
              stackWeight: r
            });
          }

          return e;
        }(t),
            i = Ye(e.filter(function (t) {
          return t.box.fullSize;
        }), !0),
            n = Ye(je(e, "left"), !0),
            o = Ye(je(e, "right")),
            s = Ye(je(e, "top"), !0),
            a = Ye(je(e, "bottom")),
            r = $e(e, "x"),
            l = $e(e, "y");

        return {
          fullSize: i,
          leftAndTop: n.concat(s),
          rightAndBottom: o.concat(l).concat(a).concat(r),
          chartArea: je(e, "chartArea"),
          vertical: n.concat(o).concat(l),
          horizontal: s.concat(a).concat(r)
        };
      }(t.boxes),
          l = r.vertical,
          c = r.horizontal;

      J(t.boxes, function (t) {
        "function" == typeof t.beforeLayout && t.beforeLayout();
      });
      var h = l.reduce(function (t, e) {
        return e.box.options && !1 === e.box.options.display ? t : t + 1;
      }, 0) || 1,
          d = Object.freeze({
        outerWidth: e,
        outerHeight: i,
        padding: o,
        availableWidth: s,
        availableHeight: a,
        vBoxMaxWidth: s / 2 / h,
        hBoxMaxHeight: a / 2
      }),
          u = Object.assign({}, o);
      qe(u, Be(n));
      var f = Object.assign({
        maxPadding: u,
        w: s,
        h: a,
        x: o.left,
        y: o.top
      }, o),
          g = Ue(l.concat(c), d);
      Ze(r.fullSize, f, d, g), Ze(l, f, d, g), Ze(c, f, d, g) && Ze(l, f, d, g), function (t) {
        var e = t.maxPadding;

        function i(i) {
          var n = Math.max(e[i] - t[i], 0);
          return t[i] += n, n;
        }

        t.y += i("top"), t.x += i("left"), i("right"), i("bottom");
      }(f), Je(r.leftAndTop, f, d, g), f.x += f.w, f.y += f.h, Je(r.rightAndBottom, f, d, g), t.chartArea = {
        left: f.left,
        top: f.top,
        right: f.left + f.w,
        bottom: f.top + f.h,
        height: f.h,
        width: f.w
      }, J(r.chartArea, function (e) {
        var i = e.box;
        Object.assign(i, t.chartArea), i.update(f.w, f.h);
      });
    }
  };

  function ei(t) {
    var _s8;

    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [""];
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
    var n = arguments.length > 3 ? arguments[3] : undefined;
    var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {
      return t[0];
    };
    ht(n) || (n = ui("_fallback", t));
    var s = (_s8 = {}, _defineProperty(_s8, Symbol.toStringTag, "Object"), _defineProperty(_s8, "_cacheable", !0), _defineProperty(_s8, "_scopes", t), _defineProperty(_s8, "_rootScopes", i), _defineProperty(_s8, "_fallback", n), _defineProperty(_s8, "_getTarget", o), _defineProperty(_s8, "override", function override(o) {
      return ei([o].concat(_toConsumableArray(t)), e, i, n);
    }), _s8);
    return new Proxy(s, {
      deleteProperty: function deleteProperty(e, i) {
        return delete e[i], delete e._keys, delete t[0][i], !0;
      },
      get: function get(i, n) {
        return ai(i, n, function () {
          return function (t, e, i, n) {
            var o;
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = e[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var _s9 = _step5.value;
                if (o = ui(oi(_s9, t), i), ht(o)) return si(t, o) ? hi(i, n, t, o) : o;
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                  _iterator5["return"]();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }
          }(n, e, t, i);
        });
      },
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, e) {
        return Reflect.getOwnPropertyDescriptor(t._scopes[0], e);
      },
      getPrototypeOf: function getPrototypeOf() {
        return Reflect.getPrototypeOf(t[0]);
      },
      has: function has(t, e) {
        return fi(t).includes(e);
      },
      ownKeys: function ownKeys(t) {
        return fi(t);
      },
      set: function set(t, e, i) {
        return (t._storage || (t._storage = o()))[e] = i, delete t[e], delete t._keys, !0;
      }
    });
  }

  function ii(t, e, i, n) {
    var o = {
      _cacheable: !1,
      _proxy: t,
      _context: e,
      _subProxy: i,
      _stack: new Set(),
      _descriptors: ni(t, n),
      setContext: function setContext(e) {
        return ii(t, e, i, n);
      },
      override: function override(o) {
        return ii(t.override(o), e, i, n);
      }
    };
    return new Proxy(o, {
      deleteProperty: function deleteProperty(e, i) {
        return delete e[i], delete t[i], !0;
      },
      get: function get(t, e, i) {
        return ai(t, e, function () {
          return function (t, e, i) {
            var n = t._proxy,
                o = t._context,
                s = t._subProxy,
                a = t._descriptors;
            var r = n[e];
            dt(r) && a.isScriptable(e) && (r = function (t, e, i, n) {
              var o = i._proxy,
                  s = i._context,
                  a = i._subProxy,
                  r = i._stack;
              if (r.has(t)) throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + t);
              r.add(t), e = e(s, a || n), r["delete"](t), U(e) && (e = hi(o._scopes, o, t, e));
              return e;
            }(e, r, t, i));
            Y(r) && r.length && (r = function (t, e, i, n) {
              var o = i._proxy,
                  s = i._context,
                  a = i._subProxy,
                  r = i._descriptors;
              if (ht(s.index) && n(t)) e = e[s.index % e.length];else if (U(e[0])) {
                var _i9 = e,
                    _n15 = o._scopes.filter(function (t) {
                  return t !== _i9;
                });

                e = [];
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                  for (var _iterator6 = _i9[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var _l7 = _step6.value;

                    var _i10 = hi(_n15, o, t, _l7);

                    e.push(ii(_i10, s, a && a[t], r));
                  }
                } catch (err) {
                  _didIteratorError6 = true;
                  _iteratorError6 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                      _iterator6["return"]();
                    }
                  } finally {
                    if (_didIteratorError6) {
                      throw _iteratorError6;
                    }
                  }
                }
              }
              return e;
            }(e, r, t, a.isIndexable));
            si(e, r) && (r = ii(r, o, s && s[e], a));
            return r;
          }(t, e, i);
        });
      },
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, i) {
        return e._descriptors.allKeys ? Reflect.has(t, i) ? {
          enumerable: !0,
          configurable: !0
        } : void 0 : Reflect.getOwnPropertyDescriptor(t, i);
      },
      getPrototypeOf: function getPrototypeOf() {
        return Reflect.getPrototypeOf(t);
      },
      has: function has(e, i) {
        return Reflect.has(t, i);
      },
      ownKeys: function ownKeys() {
        return Reflect.ownKeys(t);
      },
      set: function set(e, i, n) {
        return t[i] = n, delete e[i], !0;
      }
    });
  }

  function ni(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      scriptable: !0,
      indexable: !0
    };
    var _t$_scriptable = t._scriptable,
        i = _t$_scriptable === void 0 ? e.scriptable : _t$_scriptable,
        _t$_indexable = t._indexable,
        n = _t$_indexable === void 0 ? e.indexable : _t$_indexable,
        _t$_allKeys = t._allKeys,
        o = _t$_allKeys === void 0 ? e.allKeys : _t$_allKeys;
    return {
      allKeys: o,
      scriptable: i,
      indexable: n,
      isScriptable: dt(i) ? i : function () {
        return i;
      },
      isIndexable: dt(n) ? n : function () {
        return n;
      }
    };
  }

  var oi = function oi(t, e) {
    return t ? t + ct(e) : e;
  },
      si = function si(t, e) {
    return U(e) && "adapters" !== t;
  };

  function ai(t, e, i) {
    var n = t[e];
    return ht(n) || (n = i(), ht(n) && (t[e] = n)), n;
  }

  function ri(t, e, i) {
    return dt(t) ? t(e, i) : t;
  }

  var li = function li(t, e) {
    return !0 === t ? e : "string" == typeof t ? lt(e, t) : void 0;
  };

  function ci(t, e, i, n) {
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
      for (var _iterator7 = e[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        var _o9 = _step7.value;

        var _e9 = li(i, _o9);

        if (_e9) {
          t.add(_e9);

          var _o10 = ri(_e9._fallback, i, _e9);

          if (ht(_o10) && _o10 !== i && _o10 !== n) return _o10;
        } else if (!1 === _e9 && ht(n) && i !== n) return null;
      }
    } catch (err) {
      _didIteratorError7 = true;
      _iteratorError7 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
          _iterator7["return"]();
        }
      } finally {
        if (_didIteratorError7) {
          throw _iteratorError7;
        }
      }
    }

    return !1;
  }

  function hi(t, e, i, n) {
    var o = e._rootScopes,
        s = ri(e._fallback, i, n),
        a = [].concat(_toConsumableArray(t), _toConsumableArray(o)),
        r = new Set();
    r.add(n);
    var l = di(r, a, i, s || i);
    return null !== l && (!ht(s) || s === i || (l = di(r, a, s, l), null !== l)) && ei(Array.from(r), [""], o, s, function () {
      return function (t, e, i) {
        var n = t._getTarget();

        e in n || (n[e] = {});
        var o = n[e];
        if (Y(o) && U(i)) return i;
        return o;
      }(e, i, n);
    });
  }

  function di(t, e, i, n) {
    for (; i;) {
      i = ci(t, e, i, n);
    }

    return i;
  }

  function ui(t, e) {
    var _iteratorNormalCompletion8 = true;
    var _didIteratorError8 = false;
    var _iteratorError8 = undefined;

    try {
      for (var _iterator8 = e[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
        var _i11 = _step8.value;
        if (!_i11) continue;
        var _e10 = _i11[t];
        if (ht(_e10)) return _e10;
      }
    } catch (err) {
      _didIteratorError8 = true;
      _iteratorError8 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
          _iterator8["return"]();
        }
      } finally {
        if (_didIteratorError8) {
          throw _iteratorError8;
        }
      }
    }
  }

  function fi(t) {
    var e = t._keys;
    return e || (e = t._keys = function (t) {
      var e = new Set();
      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = t[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var _i12 = _step9.value;
          var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            for (var _iterator10 = Object.keys(_i12).filter(function (t) {
              return !t.startsWith("_");
            })[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              var _t15 = _step10.value;
              e.add(_t15);
            }
          } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
                _iterator10["return"]();
              }
            } finally {
              if (_didIteratorError10) {
                throw _iteratorError10;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
            _iterator9["return"]();
          }
        } finally {
          if (_didIteratorError9) {
            throw _iteratorError9;
          }
        }
      }

      return Array.from(e);
    }(t._scopes)), e;
  }

  var gi = Number.EPSILON || 1e-14,
      pi = function pi(t, e) {
    return e < t.length && !t[e].skip && t[e];
  },
      mi = function mi(t) {
    return "x" === t ? "y" : "x";
  };

  function xi(t, e, i, n) {
    var o = t.skip ? e : t,
        s = e,
        a = i.skip ? e : i,
        r = Bt(s, o),
        l = Bt(a, s);
    var c = r / (r + l),
        h = l / (r + l);
    c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
    var d = n * c,
        u = n * h;
    return {
      previous: {
        x: s.x - d * (a.x - o.x),
        y: s.y - d * (a.y - o.y)
      },
      next: {
        x: s.x + u * (a.x - o.x),
        y: s.y + u * (a.y - o.y)
      }
    };
  }

  function bi(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "x";
    var i = mi(e),
        n = t.length,
        o = Array(n).fill(0),
        s = Array(n);
    var a,
        r,
        l,
        c = pi(t, 0);

    for (a = 0; a < n; ++a) {
      if (r = l, l = c, c = pi(t, a + 1), l) {
        if (c) {
          var _t16 = c[e] - l[e];

          o[a] = 0 !== _t16 ? (c[i] - l[i]) / _t16 : 0;
        }

        s[a] = r ? c ? Dt(o[a - 1]) !== Dt(o[a]) ? 0 : (o[a - 1] + o[a]) / 2 : o[a - 1] : o[a];
      }
    }

    !function (t, e, i) {
      var n = t.length;
      var o,
          s,
          a,
          r,
          l,
          c = pi(t, 0);

      for (var _h2 = 0; _h2 < n - 1; ++_h2) {
        l = c, c = pi(t, _h2 + 1), l && c && (At(e[_h2], 0, gi) ? i[_h2] = i[_h2 + 1] = 0 : (o = i[_h2] / e[_h2], s = i[_h2 + 1] / e[_h2], r = Math.pow(o, 2) + Math.pow(s, 2), r <= 9 || (a = 3 / Math.sqrt(r), i[_h2] = o * a * e[_h2], i[_h2 + 1] = s * a * e[_h2])));
      }
    }(t, o, s), function (t, e) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "x";
      var n = mi(i),
          o = t.length;
      var s,
          a,
          r,
          l = pi(t, 0);

      for (var _c6 = 0; _c6 < o; ++_c6) {
        if (a = r, r = l, l = pi(t, _c6 + 1), !r) continue;
        var _o11 = r[i],
            _h3 = r[n];
        a && (s = (_o11 - a[i]) / 3, r["cp1".concat(i)] = _o11 - s, r["cp1".concat(n)] = _h3 - s * e[_c6]), l && (s = (l[i] - _o11) / 3, r["cp2".concat(i)] = _o11 + s, r["cp2".concat(n)] = _h3 + s * e[_c6]);
      }
    }(t, s, e);
  }

  function _i(t, e, i) {
    return Math.max(Math.min(t, i), e);
  }

  function yi(t, e, i, n, o) {
    var s, a, r, l;
    if (e.spanGaps && (t = t.filter(function (t) {
      return !t.skip;
    })), "monotone" === e.cubicInterpolationMode) bi(t, o);else {
      var _i13 = n ? t[t.length - 1] : t[0];

      for (s = 0, a = t.length; s < a; ++s) {
        r = t[s], l = xi(_i13, r, t[Math.min(s + 1, a - (n ? 0 : 1)) % a], e.tension), r.cp1x = l.previous.x, r.cp1y = l.previous.y, r.cp2x = l.next.x, r.cp2y = l.next.y, _i13 = r;
      }
    }
    e.capBezierPoints && function (t, e) {
      var i,
          n,
          o,
          s,
          a,
          r = Gt(t[0], e);

      for (i = 0, n = t.length; i < n; ++i) {
        a = s, s = r, r = i < n - 1 && Gt(t[i + 1], e), s && (o = t[i], a && (o.cp1x = _i(o.cp1x, e.left, e.right), o.cp1y = _i(o.cp1y, e.top, e.bottom)), r && (o.cp2x = _i(o.cp2x, e.left, e.right), o.cp2y = _i(o.cp2y, e.top, e.bottom)));
      }
    }(t, i);
  }

  var vi = function vi(t) {
    return 0 === t || 1 === t;
  },
      wi = function wi(t, e, i) {
    return -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * _t / i);
  },
      Mi = function Mi(t, e, i) {
    return Math.pow(2, -10 * t) * Math.sin((t - e) * _t / i) + 1;
  },
      ki = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return -t * (t - 2);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return (t -= 1) * t * t + 1;
    },
    easeInOutCubic: function easeInOutCubic(t) {
      return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return -((t -= 1) * t * t * t - 1);
    },
    easeInOutQuart: function easeInOutQuart(t) {
      return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
    },
    easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return (t -= 1) * t * t * t * t + 1;
    },
    easeInOutQuint: function easeInOutQuint(t) {
      return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
    },
    easeInSine: function easeInSine(t) {
      return 1 - Math.cos(t * Mt);
    },
    easeOutSine: function easeOutSine(t) {
      return Math.sin(t * Mt);
    },
    easeInOutSine: function easeInOutSine(t) {
      return -.5 * (Math.cos(bt * t) - 1);
    },
    easeInExpo: function easeInExpo(t) {
      return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
    },
    easeOutExpo: function easeOutExpo(t) {
      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
    },
    easeInOutExpo: function easeInOutExpo(t) {
      return vi(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1)));
    },
    easeInCirc: function easeInCirc(t) {
      return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
    },
    easeOutCirc: function easeOutCirc(t) {
      return Math.sqrt(1 - (t -= 1) * t);
    },
    easeInOutCirc: function easeInOutCirc(t) {
      return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    easeInElastic: function easeInElastic(t) {
      return vi(t) ? t : wi(t, .075, .3);
    },
    easeOutElastic: function easeOutElastic(t) {
      return vi(t) ? t : Mi(t, .075, .3);
    },
    easeInOutElastic: function easeInOutElastic(t) {
      var e = .1125;
      return vi(t) ? t : t < .5 ? .5 * wi(2 * t, e, .45) : .5 + .5 * Mi(2 * t - 1, e, .45);
    },
    easeInBack: function easeInBack(t) {
      var e = 1.70158;
      return t * t * ((e + 1) * t - e);
    },
    easeOutBack: function easeOutBack(t) {
      var e = 1.70158;
      return (t -= 1) * t * ((e + 1) * t + e) + 1;
    },
    easeInOutBack: function easeInOutBack(t) {
      var e = 1.70158;
      return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
    },
    easeInBounce: function easeInBounce(t) {
      return 1 - ki.easeOutBounce(1 - t);
    },
    easeOutBounce: function easeOutBounce(t) {
      var e = 7.5625,
          i = 2.75;
      return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375;
    },
    easeInOutBounce: function easeInOutBounce(t) {
      return t < .5 ? .5 * ki.easeInBounce(2 * t) : .5 * ki.easeOutBounce(2 * t - 1) + .5;
    }
  };

  function Si(t, e, i, n) {
    return {
      x: t.x + i * (e.x - t.x),
      y: t.y + i * (e.y - t.y)
    };
  }

  function Pi(t, e, i, n) {
    return {
      x: t.x + i * (e.x - t.x),
      y: "middle" === n ? i < .5 ? t.y : e.y : "after" === n ? i < 1 ? t.y : e.y : i > 0 ? e.y : t.y
    };
  }

  function Di(t, e, i, n) {
    var o = {
      x: t.cp2x,
      y: t.cp2y
    },
        s = {
      x: e.cp1x,
      y: e.cp1y
    },
        a = Si(t, o, i),
        r = Si(o, s, i),
        l = Si(s, e, i),
        c = Si(a, r, i),
        h = Si(r, l, i);
    return Si(c, h, i);
  }

  var Ci = new Map();

  function Oi(t, e, i) {
    return function (t, e) {
      e = e || {};
      var i = t + JSON.stringify(e);
      var n = Ci.get(i);
      return n || (n = new Intl.NumberFormat(t, e), Ci.set(i, n)), n;
    }(e, i).format(t);
  }

  function Ti(t, e, i) {
    return t ? function (t, e) {
      return {
        x: function x(i) {
          return t + t + e - i;
        },
        setWidth: function setWidth(t) {
          e = t;
        },
        textAlign: function textAlign(t) {
          return "center" === t ? t : "right" === t ? "left" : "right";
        },
        xPlus: function xPlus(t, e) {
          return t - e;
        },
        leftForLtr: function leftForLtr(t, e) {
          return t - e;
        }
      };
    }(e, i) : {
      x: function x(t) {
        return t;
      },
      setWidth: function setWidth(t) {},
      textAlign: function textAlign(t) {
        return t;
      },
      xPlus: function xPlus(t, e) {
        return t + e;
      },
      leftForLtr: function leftForLtr(t, e) {
        return t;
      }
    };
  }

  function Ai(t, e) {
    var i, n;
    "ltr" !== e && "rtl" !== e || (i = t.canvas.style, n = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")], i.setProperty("direction", e, "important"), t.prevTextDirection = n);
  }

  function Li(t, e) {
    void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]));
  }

  function Ri(t) {
    return "angle" === t ? {
      between: Nt,
      compare: Vt,
      normalize: Wt
    } : {
      between: function between(t, e, i) {
        return t >= Math.min(e, i) && t <= Math.max(i, e);
      },
      compare: function compare(t, e) {
        return t - e;
      },
      normalize: function normalize(t) {
        return t;
      }
    };
  }

  function Ei(_ref2) {
    var t = _ref2.start,
        e = _ref2.end,
        i = _ref2.count,
        n = _ref2.loop,
        o = _ref2.style;
    return {
      start: t % i,
      end: e % i,
      loop: n && (e - t + 1) % i == 0,
      style: o
    };
  }

  function Ii(t, e, i) {
    if (!i) return [t];

    var n = i.property,
        o = i.start,
        s = i.end,
        a = e.length,
        _Ri = Ri(n),
        r = _Ri.compare,
        l = _Ri.between,
        c = _Ri.normalize,
        _ref3 = function (t, e, i) {
      var n = i.property,
          o = i.start,
          s = i.end,
          _Ri2 = Ri(n),
          a = _Ri2.between,
          r = _Ri2.normalize,
          l = e.length;

      var c,
          h,
          d = t.start,
          u = t.end,
          f = t.loop;

      if (f) {
        for (d += l, u += l, c = 0, h = l; c < h && a(r(e[d % l][n]), o, s); ++c) {
          d--, u--;
        }

        d %= l, u %= l;
      }

      return u < d && (u += l), {
        start: d,
        end: u,
        loop: f,
        style: t.style
      };
    }(t, e, i),
        h = _ref3.start,
        d = _ref3.end,
        u = _ref3.loop,
        f = _ref3.style,
        g = [];

    var p,
        m,
        x,
        b = !1,
        _ = null;

    var y = function y() {
      return b || l(o, x, p) && 0 !== r(o, x);
    },
        v = function v() {
      return !b || 0 === r(s, p) || l(s, x, p);
    };

    for (var _t17 = h, _i14 = h; _t17 <= d; ++_t17) {
      m = e[_t17 % a], m.skip || (p = c(m[n]), p !== x && (b = l(p, o, s), null === _ && y() && (_ = 0 === r(p, o) ? _t17 : _i14), null !== _ && v() && (g.push(Ei({
        start: _,
        end: _t17,
        loop: u,
        count: a,
        style: f
      })), _ = null), _i14 = _t17, x = p));
    }

    return null !== _ && g.push(Ei({
      start: _,
      end: d,
      loop: u,
      count: a,
      style: f
    })), g;
  }

  function zi(t, e) {
    var i = [],
        n = t.segments;

    for (var _o12 = 0; _o12 < n.length; _o12++) {
      var _s10 = Ii(n[_o12], t.points, e);

      _s10.length && i.push.apply(i, _toConsumableArray(_s10));
    }

    return i;
  }

  function Fi(t, e) {
    var i = t.points,
        n = t.options.spanGaps,
        o = i.length;
    if (!o) return [];

    var s = !!t._loop,
        _ref4 = function (t, e, i, n) {
      var o = 0,
          s = e - 1;
      if (i && !n) for (; o < e && !t[o].skip;) {
        o++;
      }

      for (; o < e && t[o].skip;) {
        o++;
      }

      for (o %= e, i && (s += o); s > o && t[s % e].skip;) {
        s--;
      }

      return s %= e, {
        start: o,
        end: s
      };
    }(i, o, s, n),
        a = _ref4.start,
        r = _ref4.end;

    if (!0 === n) return Bi(t, [{
      start: a,
      end: r,
      loop: s
    }], i, e);
    return Bi(t, function (t, e, i, n) {
      var o = t.length,
          s = [];
      var a,
          r = e,
          l = t[e];

      for (a = e + 1; a <= i; ++a) {
        var _i15 = t[a % o];
        _i15.skip || _i15.stop ? l.skip || (n = !1, s.push({
          start: e % o,
          end: (a - 1) % o,
          loop: n
        }), e = r = _i15.stop ? a : null) : (r = a, l.skip && (e = a)), l = _i15;
      }

      return null !== r && s.push({
        start: e % o,
        end: r % o,
        loop: n
      }), s;
    }(i, a, r < a ? r + o : r, !!t._fullLoop && 0 === a && r === o - 1), i, e);
  }

  function Bi(t, e, i, n) {
    return n && n.setContext && i ? function (t, e, i, n) {
      var o = Vi(t.options),
          s = i.length,
          a = [];
      var r = e[0].start,
          l = r;
      var _iteratorNormalCompletion11 = true;
      var _didIteratorError11 = false;
      var _iteratorError11 = undefined;

      try {
        for (var _iterator11 = e[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
          var _c7 = _step11.value;

          var _e11 = void 0,
              _h4 = o,
              _d2 = i[r % s];

          for (l = r + 1; l <= _c7.end; l++) {
            var _o13 = i[l % s];
            _e11 = Vi(n.setContext({
              type: "segment",
              p0: _d2,
              p1: _o13,
              p0DataIndex: (l - 1) % s,
              p1DataIndex: l % s,
              datasetIndex: t._datasetIndex
            })), Wi(_e11, _h4) && (a.push({
              start: r,
              end: l - 1,
              loop: _c7.loop,
              style: _h4
            }), _h4 = _e11, r = l - 1), _d2 = _o13, _h4 = _e11;
          }

          r < l - 1 && (a.push({
            start: r,
            end: l - 1,
            loop: _c7.loop,
            style: _e11
          }), r = l - 1);
        }
      } catch (err) {
        _didIteratorError11 = true;
        _iteratorError11 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
            _iterator11["return"]();
          }
        } finally {
          if (_didIteratorError11) {
            throw _iteratorError11;
          }
        }
      }

      return a;
    }(t, e, i, n) : e;
  }

  function Vi(t) {
    return {
      backgroundColor: t.backgroundColor,
      borderCapStyle: t.borderCapStyle,
      borderDash: t.borderDash,
      borderDashOffset: t.borderDashOffset,
      borderJoinStyle: t.borderJoinStyle,
      borderWidth: t.borderWidth,
      borderColor: t.borderColor
    };
  }

  function Wi(t, e) {
    return e && JSON.stringify(t) !== JSON.stringify(e);
  }

  var Ni = Object.freeze({
    __proto__: null,
    easingEffects: ki,
    color: W,
    getHoverColor: N,
    noop: H,
    uid: j,
    isNullOrUndef: $,
    isArray: Y,
    isObject: U,
    isFinite: X,
    finiteOrDefault: q,
    valueOrDefault: K,
    toPercentage: G,
    toDimension: Z,
    callback: Q,
    each: J,
    _elementsEqual: tt,
    clone: et,
    _merger: nt,
    merge: ot,
    mergeIf: st,
    _mergerIf: at,
    _deprecated: function _deprecated(t, e, i, n) {
      void 0 !== e && console.warn(t + ': "' + i + '" is deprecated. Please use "' + n + '" instead');
    },
    resolveObjectKey: lt,
    _capitalize: ct,
    defined: ht,
    isFunction: dt,
    setsEqual: ut,
    toFontString: $t,
    _measureText: Yt,
    _longestText: Ut,
    _alignPixel: Xt,
    clearCanvas: qt,
    drawPoint: Kt,
    _isPointInArea: Gt,
    clipArea: Zt,
    unclipArea: Qt,
    _steppedLineTo: Jt,
    _bezierCurveTo: te,
    renderText: ee,
    addRoundedRectPath: ne,
    _lookup: oe,
    _lookupByKey: se,
    _rlookupByKey: ae,
    _filterBetween: re,
    listenArrayEvents: ce,
    unlistenArrayEvents: he,
    _arrayUnique: de,
    _createResolver: ei,
    _attachContext: ii,
    _descriptors: ni,
    splineCurve: xi,
    splineCurveMonotone: bi,
    _updateBezierControlPoints: yi,
    _isDomSupported: ue,
    _getParentNode: fe,
    getStyle: me,
    getRelativePosition: _e,
    getMaximumSize: ve,
    retinaScale: we,
    supportsEventListenerOptions: Me,
    readUsedSize: ke,
    fontString: function fontString(t, e, i) {
      return e + " " + t + "px " + i;
    },
    requestAnimFrame: t,
    throttled: e,
    debounce: i,
    _toLeftRightCenter: n,
    _alignStartEnd: o,
    _textX: s,
    _pointInLine: Si,
    _steppedInterpolation: Pi,
    _bezierInterpolation: Di,
    formatNumber: Oi,
    toLineHeight: Ee,
    _readValueToProps: Ie,
    toTRBL: ze,
    toTRBLCorners: Fe,
    toPadding: Be,
    toFont: Ve,
    resolve: We,
    _addGrace: Ne,
    PI: bt,
    TAU: _t,
    PITAU: yt,
    INFINITY: vt,
    RAD_PER_DEG: wt,
    HALF_PI: Mt,
    QUARTER_PI: kt,
    TWO_THIRDS_PI: St,
    log10: Pt,
    sign: Dt,
    niceNum: Ct,
    _factorize: Ot,
    isNumber: Tt,
    almostEquals: At,
    almostWhole: Lt,
    _setMinAndMaxByKey: Rt,
    toRadians: Et,
    toDegrees: It,
    _decimalPlaces: zt,
    getAngleFromPoint: Ft,
    distanceBetweenPoints: Bt,
    _angleDiff: Vt,
    _normalizeAngle: Wt,
    _angleBetween: Nt,
    _limitValue: Ht,
    _int16Range: jt,
    getRtlAdapter: Ti,
    overrideTextDirection: Ai,
    restoreTextDirection: Li,
    _boundSegment: Ii,
    _boundSegments: zi,
    _computeSegments: Fi
  });

  var Hi =
  /*#__PURE__*/
  function () {
    function Hi() {
      _classCallCheck(this, Hi);
    }

    _createClass(Hi, [{
      key: "acquireContext",
      value: function acquireContext(t, e) {}
    }, {
      key: "releaseContext",
      value: function releaseContext(t) {
        return !1;
      }
    }, {
      key: "addEventListener",
      value: function addEventListener(t, e, i) {}
    }, {
      key: "removeEventListener",
      value: function removeEventListener(t, e, i) {}
    }, {
      key: "getDevicePixelRatio",
      value: function getDevicePixelRatio() {
        return 1;
      }
    }, {
      key: "getMaximumSize",
      value: function getMaximumSize(t, e, i, n) {
        return e = Math.max(0, e || t.width), i = i || t.height, {
          width: e,
          height: Math.max(0, n ? Math.floor(e / n) : i)
        };
      }
    }, {
      key: "isAttached",
      value: function isAttached(t) {
        return !0;
      }
    }]);

    return Hi;
  }();

  var ji =
  /*#__PURE__*/
  function (_Hi) {
    _inherits(ji, _Hi);

    function ji() {
      _classCallCheck(this, ji);

      return _possibleConstructorReturn(this, _getPrototypeOf(ji).apply(this, arguments));
    }

    _createClass(ji, [{
      key: "acquireContext",
      value: function acquireContext(t) {
        return t && t.getContext && t.getContext("2d") || null;
      }
    }]);

    return ji;
  }(Hi);

  var $i = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout"
  },
      Yi = function Yi(t) {
    return null === t || "" === t;
  };

  var Ui = !!Me && {
    passive: !0
  };

  function Xi(t, e, i) {
    t.canvas.removeEventListener(e, i, Ui);
  }

  function qi(t, e, i) {
    var n = t.canvas,
        o = n && fe(n) || n,
        s = new MutationObserver(function (t) {
      var e = fe(o);
      t.forEach(function (t) {
        for (var _n16 = 0; _n16 < t.addedNodes.length; _n16++) {
          var _s11 = t.addedNodes[_n16];
          _s11 !== o && _s11 !== e || i(t.target);
        }
      });
    });
    return s.observe(document, {
      childList: !0,
      subtree: !0
    }), s;
  }

  function Ki(t, e, i) {
    var n = t.canvas,
        o = n && fe(n);
    if (!o) return;
    var s = new MutationObserver(function (t) {
      t.forEach(function (t) {
        for (var _e12 = 0; _e12 < t.removedNodes.length; _e12++) {
          if (t.removedNodes[_e12] === n) {
            i();
            break;
          }
        }
      });
    });
    return s.observe(o, {
      childList: !0
    }), s;
  }

  var Gi = new Map();
  var Zi = 0;

  function Qi() {
    var t = window.devicePixelRatio;
    t !== Zi && (Zi = t, Gi.forEach(function (e, i) {
      i.currentDevicePixelRatio !== t && e();
    }));
  }

  function Ji(t, i, n) {
    var o = t.canvas,
        s = o && fe(o);
    if (!s) return;
    var a = e(function (t, e) {
      var i = s.clientWidth;
      n(t, e), i < s.clientWidth && n();
    }, window),
        r = new ResizeObserver(function (t) {
      var e = t[0],
          i = e.contentRect.width,
          n = e.contentRect.height;
      0 === i && 0 === n || a(i, n);
    });
    return r.observe(s), function (t, e) {
      Gi.size || window.addEventListener("resize", Qi), Gi.set(t, e);
    }(t, a), r;
  }

  function tn(t, e, i) {
    i && i.disconnect(), "resize" === e && function (t) {
      Gi["delete"](t), Gi.size || window.removeEventListener("resize", Qi);
    }(t);
  }

  function en(t, i, n) {
    var o = t.canvas,
        s = e(function (e) {
      null !== t.ctx && n(function (t, e) {
        var i = $i[t.type] || t.type,
            _e13 = _e(t, e),
            n = _e13.x,
            o = _e13.y;

        return {
          type: i,
          chart: e,
          "native": t,
          x: void 0 !== n ? n : null,
          y: void 0 !== o ? o : null
        };
      }(e, t));
    }, t, function (t) {
      var e = t[0];
      return [e, e.offsetX, e.offsetY];
    });
    return function (t, e, i) {
      t.addEventListener(e, i, Ui);
    }(o, i, s), s;
  }

  var nn =
  /*#__PURE__*/
  function (_Hi2) {
    _inherits(nn, _Hi2);

    function nn() {
      _classCallCheck(this, nn);

      return _possibleConstructorReturn(this, _getPrototypeOf(nn).apply(this, arguments));
    }

    _createClass(nn, [{
      key: "acquireContext",
      value: function acquireContext(t, e) {
        var i = t && t.getContext && t.getContext("2d");
        return i && i.canvas === t ? (function (t, e) {
          var i = t.style,
              n = t.getAttribute("height"),
              o = t.getAttribute("width");

          if (t.$chartjs = {
            initial: {
              height: n,
              width: o,
              style: {
                display: i.display,
                height: i.height,
                width: i.width
              }
            }
          }, i.display = i.display || "block", i.boxSizing = i.boxSizing || "border-box", Yi(o)) {
            var _e14 = ke(t, "width");

            void 0 !== _e14 && (t.width = _e14);
          }

          if (Yi(n)) if ("" === t.style.height) t.height = t.width / (e || 2);else {
            var _e15 = ke(t, "height");

            void 0 !== _e15 && (t.height = _e15);
          }
        }(t, e), i) : null;
      }
    }, {
      key: "releaseContext",
      value: function releaseContext(t) {
        var e = t.canvas;
        if (!e.$chartjs) return !1;
        var i = e.$chartjs.initial;
        ["height", "width"].forEach(function (t) {
          var n = i[t];
          $(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
        });
        var n = i.style || {};
        return Object.keys(n).forEach(function (t) {
          e.style[t] = n[t];
        }), e.width = e.width, delete e.$chartjs, !0;
      }
    }, {
      key: "addEventListener",
      value: function addEventListener(t, e, i) {
        this.removeEventListener(t, e);
        var n = t.$proxies || (t.$proxies = {}),
            o = {
          attach: qi,
          detach: Ki,
          resize: Ji
        }[e] || en;
        n[e] = o(t, e, i);
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(t, e) {
        var i = t.$proxies || (t.$proxies = {}),
            n = i[e];
        if (!n) return;
        (({
          attach: tn,
          detach: tn,
          resize: tn
        })[e] || Xi)(t, e, n), i[e] = void 0;
      }
    }, {
      key: "getDevicePixelRatio",
      value: function getDevicePixelRatio() {
        return window.devicePixelRatio;
      }
    }, {
      key: "getMaximumSize",
      value: function getMaximumSize(t, e, i, n) {
        return ve(t, e, i, n);
      }
    }, {
      key: "isAttached",
      value: function isAttached(t) {
        var e = fe(t);
        return !(!e || !e.isConnected);
      }
    }]);

    return nn;
  }(Hi);

  function on(t) {
    return !ue() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? ji : nn;
  }

  var sn = Object.freeze({
    __proto__: null,
    _detectPlatform: on,
    BasePlatform: Hi,
    BasicPlatform: ji,
    DomPlatform: nn
  });
  var an = "transparent",
      rn = {
    "boolean": function boolean(t, e, i) {
      return i > .5 ? e : t;
    },
    color: function color(t, e, i) {
      var n = W(t || an),
          o = n.valid && W(e || an);
      return o && o.valid ? o.mix(n, i).hexString() : e;
    },
    number: function number(t, e, i) {
      return t + (e - t) * i;
    }
  };

  var ln =
  /*#__PURE__*/
  function () {
    function ln(t, e, i, n) {
      _classCallCheck(this, ln);

      var o = e[i];
      n = We([t.to, n, o, t.from]);
      var s = We([t.from, o, n]);
      this._active = !0, this._fn = t.fn || rn[t.type || _typeof(s)], this._easing = ki[t.easing] || ki.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = s, this._to = n, this._promises = void 0;
    }

    _createClass(ln, [{
      key: "active",
      value: function active() {
        return this._active;
      }
    }, {
      key: "update",
      value: function update(t, e, i) {
        var n = this;

        if (n._active) {
          n._notify(!1);

          var _o14 = n._target[n._prop],
              _s12 = i - n._start,
              _a11 = n._duration - _s12;

          n._start = i, n._duration = Math.floor(Math.max(_a11, t.duration)), n._total += _s12, n._loop = !!t.loop, n._to = We([t.to, e, _o14, t.from]), n._from = We([t.from, _o14, e]);
        }
      }
    }, {
      key: "cancel",
      value: function cancel() {
        var t = this;
        t._active && (t.tick(Date.now()), t._active = !1, t._notify(!1));
      }
    }, {
      key: "tick",
      value: function tick(t) {
        var e = this,
            i = t - e._start,
            n = e._duration,
            o = e._prop,
            s = e._from,
            a = e._loop,
            r = e._to;
        var l;
        if (e._active = s !== r && (a || i < n), !e._active) return e._target[o] = r, void e._notify(!0);
        i < 0 ? e._target[o] = s : (l = i / n % 2, l = a && l > 1 ? 2 - l : l, l = e._easing(Math.min(1, Math.max(0, l))), e._target[o] = e._fn(s, r, l));
      }
    }, {
      key: "wait",
      value: function wait() {
        var t = this._promises || (this._promises = []);
        return new Promise(function (e, i) {
          t.push({
            res: e,
            rej: i
          });
        });
      }
    }, {
      key: "_notify",
      value: function _notify(t) {
        var e = t ? "res" : "rej",
            i = this._promises || [];

        for (var _t18 = 0; _t18 < i.length; _t18++) {
          i[_t18][e]();
        }
      }
    }]);

    return ln;
  }();

  xt.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  });
  var cn = Object.keys(xt.animation);
  xt.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: function _scriptable(t) {
      return "onProgress" !== t && "onComplete" !== t && "fn" !== t;
    }
  }), xt.set("animations", {
    colors: {
      type: "color",
      properties: ["color", "borderColor", "backgroundColor"]
    },
    numbers: {
      type: "number",
      properties: ["x", "y", "borderWidth", "radius", "tension"]
    }
  }), xt.describe("animations", {
    _fallback: "animation"
  }), xt.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: function fn(t) {
            return 0 | t;
          }
        }
      }
    }
  });

  var hn =
  /*#__PURE__*/
  function () {
    function hn(t, e) {
      _classCallCheck(this, hn);

      this._chart = t, this._properties = new Map(), this.configure(e);
    }

    _createClass(hn, [{
      key: "configure",
      value: function configure(t) {
        if (!U(t)) return;
        var e = this._properties;
        Object.getOwnPropertyNames(t).forEach(function (i) {
          var n = t[i];
          if (!U(n)) return;
          var o = {};
          var _iteratorNormalCompletion12 = true;
          var _didIteratorError12 = false;
          var _iteratorError12 = undefined;

          try {
            for (var _iterator12 = cn[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
              var _t19 = _step12.value;
              o[_t19] = n[_t19];
            }
          } catch (err) {
            _didIteratorError12 = true;
            _iteratorError12 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
                _iterator12["return"]();
              }
            } finally {
              if (_didIteratorError12) {
                throw _iteratorError12;
              }
            }
          }

          (Y(n.properties) && n.properties || [i]).forEach(function (t) {
            t !== i && e.has(t) || e.set(t, o);
          });
        });
      }
    }, {
      key: "_animateOptions",
      value: function _animateOptions(t, e) {
        var i = e.options,
            n = function (t, e) {
          if (!e) return;
          var i = t.options;
          if (!i) return void (t.options = e);
          i.$shared && (t.options = i = Object.assign({}, i, {
            $shared: !1,
            $animations: {}
          }));
          return i;
        }(t, i);

        if (!n) return [];

        var o = this._createAnimations(n, i);

        return i.$shared && function (t, e) {
          var i = [],
              n = Object.keys(e);

          for (var _e16 = 0; _e16 < n.length; _e16++) {
            var _o15 = t[n[_e16]];
            _o15 && _o15.active() && i.push(_o15.wait());
          }

          return Promise.all(i);
        }(t.options.$animations, i).then(function () {
          t.options = i;
        }, function () {}), o;
      }
    }, {
      key: "_createAnimations",
      value: function _createAnimations(t, e) {
        var i = this._properties,
            n = [],
            o = t.$animations || (t.$animations = {}),
            s = Object.keys(e),
            a = Date.now();
        var r;

        for (r = s.length - 1; r >= 0; --r) {
          var _l8 = s[r];
          if ("$" === _l8.charAt(0)) continue;

          if ("options" === _l8) {
            n.push.apply(n, _toConsumableArray(this._animateOptions(t, e)));
            continue;
          }

          var _c8 = e[_l8];
          var _h5 = o[_l8];

          var _d3 = i.get(_l8);

          if (_h5) {
            if (_d3 && _h5.active()) {
              _h5.update(_d3, _c8, a);

              continue;
            }

            _h5.cancel();
          }

          _d3 && _d3.duration ? (o[_l8] = _h5 = new ln(_d3, t, _l8, _c8), n.push(_h5)) : t[_l8] = _c8;
        }

        return n;
      }
    }, {
      key: "update",
      value: function update(t, e) {
        if (0 === this._properties.size) return void Object.assign(t, e);

        var i = this._createAnimations(t, e);

        return i.length ? (a.add(this._chart, i), !0) : void 0;
      }
    }]);

    return hn;
  }();

  function dn(t, e) {
    var i = t && t.options || {},
        n = i.reverse,
        o = void 0 === i.min ? e : 0,
        s = void 0 === i.max ? e : 0;
    return {
      start: n ? s : o,
      end: n ? o : s
    };
  }

  function un(t, e) {
    var i = [],
        n = t._getSortedDatasetMetas(e);

    var o, s;

    for (o = 0, s = n.length; o < s; ++o) {
      i.push(n[o].index);
    }

    return i;
  }

  function fn(t, e, i, n) {
    var o = t.keys,
        s = "single" === n.mode;
    var a, r, l, c;

    if (null !== e) {
      for (a = 0, r = o.length; a < r; ++a) {
        if (l = +o[a], l === i) {
          if (n.all) continue;
          break;
        }

        c = t.values[l], X(c) && (s || 0 === e || Dt(e) === Dt(c)) && (e += c);
      }

      return e;
    }
  }

  function gn(t, e) {
    var i = t && t.options.stacked;
    return i || void 0 === i && void 0 !== e.stack;
  }

  function pn(t, e, i) {
    var n = t[e] || (t[e] = {});
    return n[i] || (n[i] = {});
  }

  function mn(t, e, i) {
    var _iteratorNormalCompletion13 = true;
    var _didIteratorError13 = false;
    var _iteratorError13 = undefined;

    try {
      for (var _iterator13 = e.getMatchingVisibleMetas("bar").reverse()[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
        var _n17 = _step13.value;
        var _e17 = t[_n17.index];
        if (i && _e17 > 0 || !i && _e17 < 0) return _n17.index;
      }
    } catch (err) {
      _didIteratorError13 = true;
      _iteratorError13 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
          _iterator13["return"]();
        }
      } finally {
        if (_didIteratorError13) {
          throw _iteratorError13;
        }
      }
    }

    return null;
  }

  function xn(t, e) {
    var i = t.chart,
        n = t._cachedMeta,
        o = i._stacks || (i._stacks = {}),
        s = n.iScale,
        a = n.vScale,
        r = n.index,
        l = s.axis,
        c = a.axis,
        h = function (t, e, i) {
      return "".concat(t.id, ".").concat(e.id, ".").concat(i.stack || i.type);
    }(s, a, n),
        d = e.length;

    var u;

    for (var _t20 = 0; _t20 < d; ++_t20) {
      var _i16 = e[_t20],
          _n18 = _i16[l],
          _s13 = _i16[c];
      u = (_i16._stacks || (_i16._stacks = {}))[c] = pn(o, h, _n18), u[r] = _s13, u._top = mn(u, a, !0), u._bottom = mn(u, a, !1);
    }
  }

  function bn(t, e) {
    var i = t.scales;
    return Object.keys(i).filter(function (t) {
      return i[t].axis === e;
    }).shift();
  }

  function _n(t, e) {
    var i = t.controller.index,
        n = t.vScale && t.vScale.axis;

    if (n) {
      e = e || t._parsed;
      var _iteratorNormalCompletion14 = true;
      var _didIteratorError14 = false;
      var _iteratorError14 = undefined;

      try {
        for (var _iterator14 = e[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
          var _t21 = _step14.value;
          var _e18 = _t21._stacks;
          if (!_e18 || void 0 === _e18[n] || void 0 === _e18[n][i]) return;
          delete _e18[n][i];
        }
      } catch (err) {
        _didIteratorError14 = true;
        _iteratorError14 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
            _iterator14["return"]();
          }
        } finally {
          if (_didIteratorError14) {
            throw _iteratorError14;
          }
        }
      }
    }
  }

  var yn = function yn(t) {
    return "reset" === t || "none" === t;
  },
      vn = function vn(t, e) {
    return e ? t : Object.assign({}, t);
  };

  var wn =
  /*#__PURE__*/
  function () {
    function wn(t, e) {
      _classCallCheck(this, wn);

      this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.$context = void 0, this._syncList = [], this.initialize();
    }

    _createClass(wn, [{
      key: "initialize",
      value: function initialize() {
        var t = this,
            e = t._cachedMeta;
        t.configure(), t.linkScales(), e._stacked = gn(e.vScale, e), t.addElements();
      }
    }, {
      key: "updateIndex",
      value: function updateIndex(t) {
        this.index !== t && _n(this._cachedMeta), this.index = t;
      }
    }, {
      key: "linkScales",
      value: function linkScales() {
        var t = this,
            e = t.chart,
            i = t._cachedMeta,
            n = t.getDataset(),
            o = function o(t, e, i, n) {
          return "x" === t ? e : "r" === t ? n : i;
        },
            s = i.xAxisID = K(n.xAxisID, bn(e, "x")),
            a = i.yAxisID = K(n.yAxisID, bn(e, "y")),
            r = i.rAxisID = K(n.rAxisID, bn(e, "r")),
            l = i.indexAxis,
            c = i.iAxisID = o(l, s, a, r),
            h = i.vAxisID = o(l, a, s, r);

        i.xScale = t.getScaleForId(s), i.yScale = t.getScaleForId(a), i.rScale = t.getScaleForId(r), i.iScale = t.getScaleForId(c), i.vScale = t.getScaleForId(h);
      }
    }, {
      key: "getDataset",
      value: function getDataset() {
        return this.chart.data.datasets[this.index];
      }
    }, {
      key: "getMeta",
      value: function getMeta() {
        return this.chart.getDatasetMeta(this.index);
      }
    }, {
      key: "getScaleForId",
      value: function getScaleForId(t) {
        return this.chart.scales[t];
      }
    }, {
      key: "_getOtherScale",
      value: function _getOtherScale(t) {
        var e = this._cachedMeta;
        return t === e.iScale ? e.vScale : e.iScale;
      }
    }, {
      key: "reset",
      value: function reset() {
        this._update("reset");
      }
    }, {
      key: "_destroy",
      value: function _destroy() {
        var t = this._cachedMeta;
        this._data && he(this._data, this), t._stacked && _n(t);
      }
    }, {
      key: "_dataCheck",
      value: function _dataCheck() {
        var t = this,
            e = t.getDataset(),
            i = e.data || (e.data = []),
            n = t._data;
        if (U(i)) t._data = function (t) {
          var e = Object.keys(t),
              i = new Array(e.length);
          var n, o, s;

          for (n = 0, o = e.length; n < o; ++n) {
            s = e[n], i[n] = {
              x: s,
              y: t[s]
            };
          }

          return i;
        }(i);else if (n !== i) {
          if (n) {
            he(n, t);
            var _e19 = t._cachedMeta;
            _n(_e19), _e19._parsed = [];
          }

          i && Object.isExtensible(i) && ce(i, t), t._syncList = [], t._data = i;
        }
      }
    }, {
      key: "addElements",
      value: function addElements() {
        var t = this,
            e = t._cachedMeta;
        t._dataCheck(), t.datasetElementType && (e.dataset = new t.datasetElementType());
      }
    }, {
      key: "buildOrUpdateElements",
      value: function buildOrUpdateElements(t) {
        var e = this,
            i = e._cachedMeta,
            n = e.getDataset();
        var o = !1;

        e._dataCheck();

        var s = i._stacked;
        i._stacked = gn(i.vScale, i), i.stack !== n.stack && (o = !0, _n(i), i.stack = n.stack), e._resyncElements(t), (o || s !== i._stacked) && xn(e, i._parsed);
      }
    }, {
      key: "configure",
      value: function configure() {
        var t = this,
            e = t.chart.config,
            i = e.datasetScopeKeys(t._type),
            n = e.getOptionScopes(t.getDataset(), i, !0);
        t.options = e.createResolver(n, t.getContext()), t._parsing = t.options.parsing;
      }
    }, {
      key: "parse",
      value: function parse(t, e) {
        var i = this,
            n = i._cachedMeta,
            o = i._data,
            s = n.iScale,
            a = n._stacked,
            r = s.axis;
        var l,
            c,
            h,
            d = 0 === t && e === o.length || n._sorted,
            u = t > 0 && n._parsed[t - 1];
        if (!1 === i._parsing) n._parsed = o, n._sorted = !0, h = o;else {
          h = Y(o[t]) ? i.parseArrayData(n, o, t, e) : U(o[t]) ? i.parseObjectData(n, o, t, e) : i.parsePrimitiveData(n, o, t, e);

          var _s14 = function _s14() {
            return null === c[r] || u && c[r] < u[r];
          };

          for (l = 0; l < e; ++l) {
            n._parsed[l + t] = c = h[l], d && (_s14() && (d = !1), u = c);
          }

          n._sorted = d;
        }
        a && xn(i, h);
      }
    }, {
      key: "parsePrimitiveData",
      value: function parsePrimitiveData(t, e, i, n) {
        var o = t.iScale,
            s = t.vScale,
            a = o.axis,
            r = s.axis,
            l = o.getLabels(),
            c = o === s,
            h = new Array(n);
        var d, u, f;

        for (d = 0, u = n; d < u; ++d) {
          var _h$d;

          f = d + i, h[d] = (_h$d = {}, _defineProperty(_h$d, a, c || o.parse(l[f], f)), _defineProperty(_h$d, r, s.parse(e[f], f)), _h$d);
        }

        return h;
      }
    }, {
      key: "parseArrayData",
      value: function parseArrayData(t, e, i, n) {
        var o = t.xScale,
            s = t.yScale,
            a = new Array(n);
        var r, l, c, h;

        for (r = 0, l = n; r < l; ++r) {
          c = r + i, h = e[c], a[r] = {
            x: o.parse(h[0], c),
            y: s.parse(h[1], c)
          };
        }

        return a;
      }
    }, {
      key: "parseObjectData",
      value: function parseObjectData(t, e, i, n) {
        var o = t.xScale,
            s = t.yScale,
            _this$_parsing = this._parsing,
            _this$_parsing$xAxisK = _this$_parsing.xAxisKey,
            a = _this$_parsing$xAxisK === void 0 ? "x" : _this$_parsing$xAxisK,
            _this$_parsing$yAxisK = _this$_parsing.yAxisKey,
            r = _this$_parsing$yAxisK === void 0 ? "y" : _this$_parsing$yAxisK,
            l = new Array(n);
        var c, h, d, u;

        for (c = 0, h = n; c < h; ++c) {
          d = c + i, u = e[d], l[c] = {
            x: o.parse(lt(u, a), d),
            y: s.parse(lt(u, r), d)
          };
        }

        return l;
      }
    }, {
      key: "getParsed",
      value: function getParsed(t) {
        return this._cachedMeta._parsed[t];
      }
    }, {
      key: "getDataElement",
      value: function getDataElement(t) {
        return this._cachedMeta.data[t];
      }
    }, {
      key: "applyStack",
      value: function applyStack(t, e, i) {
        var n = this.chart,
            o = this._cachedMeta,
            s = e[t.axis];
        return fn({
          keys: un(n, !0),
          values: e._stacks[t.axis]
        }, s, o.index, {
          mode: i
        });
      }
    }, {
      key: "updateRangeFromParsed",
      value: function updateRangeFromParsed(t, e, i, n) {
        var o = i[e.axis];
        var s = null === o ? NaN : o;
        var a = n && i._stacks[e.axis];
        n && a && (n.values = a, t.min = Math.min(t.min, s), t.max = Math.max(t.max, s), s = fn(n, o, this._cachedMeta.index, {
          all: !0
        })), t.min = Math.min(t.min, s), t.max = Math.max(t.max, s);
      }
    }, {
      key: "getMinMax",
      value: function getMinMax(t, e) {
        var i = this,
            n = i._cachedMeta,
            o = n._parsed,
            s = n._sorted && t === n.iScale,
            a = o.length,
            r = i._getOtherScale(t),
            l = e && n._stacked && {
          keys: un(i.chart, !0),
          values: null
        },
            c = {
          min: Number.POSITIVE_INFINITY,
          max: Number.NEGATIVE_INFINITY
        },
            _ref5 = function (t) {
          var _t$getUserBounds = t.getUserBounds(),
              e = _t$getUserBounds.min,
              i = _t$getUserBounds.max,
              n = _t$getUserBounds.minDefined,
              o = _t$getUserBounds.maxDefined;

          return {
            min: n ? e : Number.NEGATIVE_INFINITY,
            max: o ? i : Number.POSITIVE_INFINITY
          };
        }(r),
            h = _ref5.min,
            d = _ref5.max;

        var u, f, g, p;

        function m() {
          return g = o[u], f = g[t.axis], p = g[r.axis], !X(f) || h > p || d < p;
        }

        for (u = 0; u < a && (m() || (i.updateRangeFromParsed(c, t, g, l), !s)); ++u) {
          ;
        }

        if (s) for (u = a - 1; u >= 0; --u) {
          if (!m()) {
            i.updateRangeFromParsed(c, t, g, l);
            break;
          }
        }
        return c;
      }
    }, {
      key: "getAllParsedValues",
      value: function getAllParsedValues(t) {
        var e = this._cachedMeta._parsed,
            i = [];
        var n, o, s;

        for (n = 0, o = e.length; n < o; ++n) {
          s = e[n][t.axis], X(s) && i.push(s);
        }

        return i;
      }
    }, {
      key: "getMaxOverflow",
      value: function getMaxOverflow() {
        return !1;
      }
    }, {
      key: "getLabelAndValue",
      value: function getLabelAndValue(t) {
        var e = this._cachedMeta,
            i = e.iScale,
            n = e.vScale,
            o = this.getParsed(t);
        return {
          label: i ? "" + i.getLabelForValue(o[i.axis]) : "",
          value: n ? "" + n.getLabelForValue(o[n.axis]) : ""
        };
      }
    }, {
      key: "_update",
      value: function _update(t) {
        var e = this,
            i = e._cachedMeta;
        e.configure(), e._cachedDataOpts = {}, e.update(t || "default"), i._clip = function (t) {
          var e, i, n, o;
          return U(t) ? (e = t.top, i = t.right, n = t.bottom, o = t.left) : e = i = n = o = t, {
            top: e,
            right: i,
            bottom: n,
            left: o,
            disabled: !1 === t
          };
        }(K(e.options.clip, function (t, e, i) {
          if (!1 === i) return !1;
          var n = dn(t, i),
              o = dn(e, i);
          return {
            top: o.end,
            right: n.end,
            bottom: o.start,
            left: n.start
          };
        }(i.xScale, i.yScale, e.getMaxOverflow())));
      }
    }, {
      key: "update",
      value: function update(t) {}
    }, {
      key: "draw",
      value: function draw() {
        var t = this,
            e = t._ctx,
            i = t.chart,
            n = t._cachedMeta,
            o = n.data || [],
            s = i.chartArea,
            a = [],
            r = t._drawStart || 0,
            l = t._drawCount || o.length - r;
        var c;

        for (n.dataset && n.dataset.draw(e, s, r, l), c = r; c < r + l; ++c) {
          var _t22 = o[c];
          _t22.hidden || (_t22.active ? a.push(_t22) : _t22.draw(e, s));
        }

        for (c = 0; c < a.length; ++c) {
          a[c].draw(e, s);
        }
      }
    }, {
      key: "getStyle",
      value: function getStyle(t, e) {
        var i = e ? "active" : "default";
        return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i);
      }
    }, {
      key: "getContext",
      value: function getContext(t, e, i) {
        var n = this,
            o = n.getDataset();
        var s;

        if (t >= 0 && t < n._cachedMeta.data.length) {
          var _e20 = n._cachedMeta.data[t];
          s = _e20.$context || (_e20.$context = function (t, e, i) {
            return Object.assign(Object.create(t), {
              active: !1,
              dataIndex: e,
              parsed: void 0,
              raw: void 0,
              element: i,
              index: e,
              mode: "default",
              type: "data"
            });
          }(n.getContext(), t, _e20)), s.parsed = n.getParsed(t), s.raw = o.data[t], s.index = s.dataIndex = t;
        } else s = n.$context || (n.$context = function (t, e) {
          return Object.assign(Object.create(t), {
            active: !1,
            dataset: void 0,
            datasetIndex: e,
            index: e,
            mode: "default",
            type: "dataset"
          });
        }(n.chart.getContext(), n.index)), s.dataset = o, s.index = s.datasetIndex = n.index;

        return s.active = !!e, s.mode = i, s;
      }
    }, {
      key: "resolveDatasetElementOptions",
      value: function resolveDatasetElementOptions(t) {
        return this._resolveElementOptions(this.datasetElementType.id, t);
      }
    }, {
      key: "resolveDataElementOptions",
      value: function resolveDataElementOptions(t, e) {
        return this._resolveElementOptions(this.dataElementType.id, e, t);
      }
    }, {
      key: "_resolveElementOptions",
      value: function _resolveElementOptions(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default";
        var i = arguments.length > 2 ? arguments[2] : undefined;
        var n = this,
            o = "active" === e,
            s = n._cachedDataOpts,
            a = t + "-" + e,
            r = s[a],
            l = n.enableOptionSharing && ht(i);
        if (r) return vn(r, l);
        var c = n.chart.config,
            h = c.datasetElementScopeKeys(n._type, t),
            d = o ? ["".concat(t, "Hover"), "hover", t, ""] : [t, ""],
            u = c.getOptionScopes(n.getDataset(), h),
            f = Object.keys(xt.elements[t]),
            g = c.resolveNamedOptions(u, f, function () {
          return n.getContext(i, o);
        }, d);
        return g.$shared && (g.$shared = l, s[a] = Object.freeze(vn(g, l))), g;
      }
    }, {
      key: "_resolveAnimations",
      value: function _resolveAnimations(t, e, i) {
        var n = this,
            o = n.chart,
            s = n._cachedDataOpts,
            a = "animation-".concat(e),
            r = s[a];
        if (r) return r;
        var l;

        if (!1 !== o.options.animation) {
          var _o16 = n.chart.config,
              _s15 = _o16.datasetAnimationScopeKeys(n._type, e),
              _a12 = _o16.getOptionScopes(n.getDataset(), _s15);

          l = _o16.createResolver(_a12, n.getContext(t, i, e));
        }

        var c = new hn(o, l && l.animations);
        return l && l._cacheable && (s[a] = Object.freeze(c)), c;
      }
    }, {
      key: "getSharedOptions",
      value: function getSharedOptions(t) {
        if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
      }
    }, {
      key: "includeOptions",
      value: function includeOptions(t, e) {
        return !e || yn(t) || this.chart._animationsDisabled;
      }
    }, {
      key: "updateElement",
      value: function updateElement(t, e, i, n) {
        yn(n) ? Object.assign(t, i) : this._resolveAnimations(e, n).update(t, i);
      }
    }, {
      key: "updateSharedOptions",
      value: function updateSharedOptions(t, e, i) {
        t && !yn(e) && this._resolveAnimations(void 0, e).update(t, i);
      }
    }, {
      key: "_setStyle",
      value: function _setStyle(t, e, i, n) {
        t.active = n;
        var o = this.getStyle(e, n);

        this._resolveAnimations(e, i, n).update(t, {
          options: !n && this.getSharedOptions(o) || o
        });
      }
    }, {
      key: "removeHoverStyle",
      value: function removeHoverStyle(t, e, i) {
        this._setStyle(t, i, "active", !1);
      }
    }, {
      key: "setHoverStyle",
      value: function setHoverStyle(t, e, i) {
        this._setStyle(t, i, "active", !0);
      }
    }, {
      key: "_removeDatasetHoverStyle",
      value: function _removeDatasetHoverStyle() {
        var t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !1);
      }
    }, {
      key: "_setDatasetHoverStyle",
      value: function _setDatasetHoverStyle() {
        var t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !0);
      }
    }, {
      key: "_resyncElements",
      value: function _resyncElements(t) {
        var e = this,
            i = e._data,
            n = e._cachedMeta.data;
        var _iteratorNormalCompletion15 = true;
        var _didIteratorError15 = false;
        var _iteratorError15 = undefined;

        try {
          for (var _iterator15 = e._syncList[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
            var _step15$value = _slicedToArray(_step15.value, 3),
                _t23 = _step15$value[0],
                _i17 = _step15$value[1],
                _n19 = _step15$value[2];

            e[_t23](_i17, _n19);
          }
        } catch (err) {
          _didIteratorError15 = true;
          _iteratorError15 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
              _iterator15["return"]();
            }
          } finally {
            if (_didIteratorError15) {
              throw _iteratorError15;
            }
          }
        }

        e._syncList = [];
        var o = n.length,
            s = i.length,
            a = Math.min(s, o);
        a && e.parse(0, a), s > o ? e._insertElements(o, s - o, t) : s < o && e._removeElements(s, o - s);
      }
    }, {
      key: "_insertElements",
      value: function _insertElements(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        var n = this,
            o = n._cachedMeta,
            s = o.data,
            a = t + e;
        var r;

        var l = function l(t) {
          for (t.length += e, r = t.length - 1; r >= a; r--) {
            t[r] = t[r - e];
          }
        };

        for (l(s), r = t; r < a; ++r) {
          s[r] = new n.dataElementType();
        }

        n._parsing && l(o._parsed), n.parse(t, e), i && n.updateElements(s, t, e, "reset");
      }
    }, {
      key: "updateElements",
      value: function updateElements(t, e, i, n) {}
    }, {
      key: "_removeElements",
      value: function _removeElements(t, e) {
        var i = this._cachedMeta;

        if (this._parsing) {
          var _n20 = i._parsed.splice(t, e);

          i._stacked && _n(i, _n20);
        }

        i.data.splice(t, e);
      }
    }, {
      key: "_onDataPush",
      value: function _onDataPush() {
        var t = arguments.length;

        this._syncList.push(["_insertElements", this.getDataset().data.length - t, t]);
      }
    }, {
      key: "_onDataPop",
      value: function _onDataPop() {
        this._syncList.push(["_removeElements", this._cachedMeta.data.length - 1, 1]);
      }
    }, {
      key: "_onDataShift",
      value: function _onDataShift() {
        this._syncList.push(["_removeElements", 0, 1]);
      }
    }, {
      key: "_onDataSplice",
      value: function _onDataSplice(t, e) {
        this._syncList.push(["_removeElements", t, e]), this._syncList.push(["_insertElements", t, arguments.length - 2]);
      }
    }, {
      key: "_onDataUnshift",
      value: function _onDataUnshift() {
        this._syncList.push(["_insertElements", 0, arguments.length]);
      }
    }]);

    return wn;
  }();

  wn.defaults = {}, wn.prototype.datasetElementType = null, wn.prototype.dataElementType = null;

  var Mn =
  /*#__PURE__*/
  function () {
    function Mn() {
      _classCallCheck(this, Mn);

      this.x = void 0, this.y = void 0, this.active = !1, this.options = void 0, this.$animations = void 0;
    }

    _createClass(Mn, [{
      key: "tooltipPosition",
      value: function tooltipPosition(t) {
        var _this$getProps = this.getProps(["x", "y"], t),
            e = _this$getProps.x,
            i = _this$getProps.y;

        return {
          x: e,
          y: i
        };
      }
    }, {
      key: "hasValue",
      value: function hasValue() {
        return Tt(this.x) && Tt(this.y);
      }
    }, {
      key: "getProps",
      value: function getProps(t, e) {
        var i = this,
            n = this.$animations;
        if (!e || !n) return i;
        var o = {};
        return t.forEach(function (t) {
          o[t] = n[t] && n[t].active() ? n[t]._to : i[t];
        }), o;
      }
    }]);

    return Mn;
  }();

  Mn.defaults = {}, Mn.defaultRoutes = void 0;
  var kn = {
    values: function values(t) {
      return Y(t) ? t : "" + t;
    },
    numeric: function numeric(t, e, i) {
      if (0 === t) return "0";
      var n = this.chart.options.locale;
      var o,
          s = t;

      if (i.length > 1) {
        var _e21 = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));

        (_e21 < 1e-4 || _e21 > 1e15) && (o = "scientific"), s = function (t, e) {
          var i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
          Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
          return i;
        }(t, i);
      }

      var a = Pt(Math.abs(s)),
          r = Math.max(Math.min(-1 * Math.floor(a), 20), 0),
          l = {
        notation: o,
        minimumFractionDigits: r,
        maximumFractionDigits: r
      };
      return Object.assign(l, this.options.ticks.format), Oi(t, n, l);
    },
    logarithmic: function logarithmic(t, e, i) {
      if (0 === t) return "0";
      var n = t / Math.pow(10, Math.floor(Pt(t)));
      return 1 === n || 2 === n || 5 === n ? kn.numeric.call(this, t, e, i) : "";
    }
  };
  var Sn = {
    formatters: kn
  };

  function Pn(t, e) {
    var i = t.options.ticks,
        n = i.maxTicksLimit || function (t) {
      var e = t.options.offset,
          i = t._tickSize(),
          n = t._length / i + (e ? 0 : 1),
          o = t._maxLength / i;

      return Math.floor(Math.min(n, o));
    }(t),
        o = i.major.enabled ? function (t) {
      var e = [];
      var i, n;

      for (i = 0, n = t.length; i < n; i++) {
        t[i].major && e.push(i);
      }

      return e;
    }(e) : [],
        s = o.length,
        a = o[0],
        r = o[s - 1],
        l = [];

    if (s > n) return function (t, e, i, n) {
      var o,
          s = 0,
          a = i[0];

      for (n = Math.ceil(n), o = 0; o < t.length; o++) {
        o === a && (e.push(t[o]), s++, a = i[s * n]);
      }
    }(e, l, o, s / n), l;

    var c = function (t, e, i) {
      var n = function (t) {
        var e = t.length;
        var i, n;
        if (e < 2) return !1;

        for (n = t[0], i = 1; i < e; ++i) {
          if (t[i] - t[i - 1] !== n) return !1;
        }

        return n;
      }(t),
          o = e.length / i;

      if (!n) return Math.max(o, 1);
      var s = Ot(n);

      for (var _t24 = 0, _e22 = s.length - 1; _t24 < _e22; _t24++) {
        var _e23 = s[_t24];
        if (_e23 > o) return _e23;
      }

      return Math.max(o, 1);
    }(o, e, n);

    if (s > 0) {
      var _t25, _i18;

      var _n21 = s > 1 ? Math.round((r - a) / (s - 1)) : null;

      for (Dn(e, l, c, $(_n21) ? 0 : a - _n21, a), _t25 = 0, _i18 = s - 1; _t25 < _i18; _t25++) {
        Dn(e, l, c, o[_t25], o[_t25 + 1]);
      }

      return Dn(e, l, c, r, $(_n21) ? e.length : r + _n21), l;
    }

    return Dn(e, l, c), l;
  }

  function Dn(t, e, i, n, o) {
    var s = K(n, 0),
        a = Math.min(K(o, t.length), t.length);
    var r,
        l,
        c,
        h = 0;

    for (i = Math.ceil(i), o && (r = o - n, i = r / Math.floor(r / i)), c = s; c < 0;) {
      h++, c = Math.round(s + h * i);
    }

    for (l = Math.max(s, 0); l < a; l++) {
      l === c && (e.push(t[l]), h++, c = Math.round(s + h * i));
    }
  }

  xt.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawBorder: !0,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: function tickWidth(t, e) {
        return e.lineWidth;
      },
      tickColor: function tickColor(t, e) {
        return e.color;
      },
      offset: !1,
      borderDash: [],
      borderDashOffset: 0,
      borderWidth: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Sn.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), xt.route("scale.ticks", "color", "", "color"), xt.route("scale.grid", "color", "", "borderColor"), xt.route("scale.grid", "borderColor", "", "borderColor"), xt.route("scale.title", "color", "", "color"), xt.describe("scale", {
    _fallback: !1,
    _scriptable: function _scriptable(t) {
      return !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t;
    },
    _indexable: function _indexable(t) {
      return "borderDash" !== t && "tickBorderDash" !== t;
    }
  }), xt.describe("scales", {
    _fallback: "scale"
  }), xt.describe("scale.ticks", {
    _scriptable: function _scriptable(t) {
      return "backdropPadding" !== t && "callback" !== t;
    },
    _indexable: function _indexable(t) {
      return "backdropPadding" !== t;
    }
  });

  var Cn = function Cn(t, e, i) {
    return "top" === e || "left" === e ? t[e] + i : t[e] - i;
  };

  function On(t, e) {
    var i = [],
        n = t.length / e,
        o = t.length;
    var s = 0;

    for (; s < o; s += n) {
      i.push(t[Math.floor(s)]);
    }

    return i;
  }

  function Tn(t, e, i) {
    var n = t.ticks.length,
        o = Math.min(e, n - 1),
        s = t._startPixel,
        a = t._endPixel,
        r = 1e-6;
    var l,
        c = t.getPixelForTick(o);
    if (!(i && (l = 1 === n ? Math.max(c - s, a - c) : 0 === e ? (t.getPixelForTick(1) - c) / 2 : (c - t.getPixelForTick(o - 1)) / 2, c += o < e ? l : -l, c < s - r || c > a + r))) return c;
  }

  function An(t) {
    return t.drawTicks ? t.tickLength : 0;
  }

  function Ln(t, e) {
    if (!t.display) return 0;
    var i = Ve(t.font, e),
        n = Be(t.padding);
    return (Y(t.text) ? t.text.length : 1) * i.lineHeight + n.height;
  }

  function Rn(t, e, i) {
    var o = n(t);
    return (i && "right" !== e || !i && "right" === e) && (o = function (t) {
      return "left" === t ? "right" : "right" === t ? "left" : t;
    }(o)), o;
  }

  var En =
  /*#__PURE__*/
  function (_Mn) {
    _inherits(En, _Mn);

    function En(t) {
      var _this;

      _classCallCheck(this, En);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(En).call(this)), _this.id = t.id, _this.type = t.type, _this.options = void 0, _this.ctx = t.ctx, _this.chart = t.chart, _this.top = void 0, _this.bottom = void 0, _this.left = void 0, _this.right = void 0, _this.width = void 0, _this.height = void 0, _this._margins = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, _this.maxWidth = void 0, _this.maxHeight = void 0, _this.paddingTop = void 0, _this.paddingBottom = void 0, _this.paddingLeft = void 0, _this.paddingRight = void 0, _this.axis = void 0, _this.labelRotation = void 0, _this.min = void 0, _this.max = void 0, _this._range = void 0, _this.ticks = [], _this._gridLineItems = null, _this._labelItems = null, _this._labelSizes = null, _this._length = 0, _this._maxLength = 0, _this._longestTextCache = {}, _this._startPixel = void 0, _this._endPixel = void 0, _this._reversePixels = !1, _this._userMax = void 0, _this._userMin = void 0, _this._suggestedMax = void 0, _this._suggestedMin = void 0, _this._ticksLength = 0, _this._borderValue = 0, _this._cache = {}, _this._dataLimitsCached = !1, _this.$context = void 0;
      return _this;
    }

    _createClass(En, [{
      key: "init",
      value: function init(t) {
        var e = this;
        e.options = t.setContext(e.getContext()), e.axis = t.axis, e._userMin = e.parse(t.min), e._userMax = e.parse(t.max), e._suggestedMin = e.parse(t.suggestedMin), e._suggestedMax = e.parse(t.suggestedMax);
      }
    }, {
      key: "parse",
      value: function parse(t, e) {
        return t;
      }
    }, {
      key: "getUserBounds",
      value: function getUserBounds() {
        var t = this._userMin,
            e = this._userMax,
            i = this._suggestedMin,
            n = this._suggestedMax;
        return t = q(t, Number.POSITIVE_INFINITY), e = q(e, Number.NEGATIVE_INFINITY), i = q(i, Number.POSITIVE_INFINITY), n = q(n, Number.NEGATIVE_INFINITY), {
          min: q(t, i),
          max: q(e, n),
          minDefined: X(t),
          maxDefined: X(e)
        };
      }
    }, {
      key: "getMinMax",
      value: function getMinMax(t) {
        var e = this;

        var i,
            _e$getUserBounds = e.getUserBounds(),
            n = _e$getUserBounds.min,
            o = _e$getUserBounds.max,
            s = _e$getUserBounds.minDefined,
            a = _e$getUserBounds.maxDefined;

        if (s && a) return {
          min: n,
          max: o
        };
        var r = e.getMatchingVisibleMetas();

        for (var _l9 = 0, _c9 = r.length; _l9 < _c9; ++_l9) {
          i = r[_l9].controller.getMinMax(e, t), s || (n = Math.min(n, i.min)), a || (o = Math.max(o, i.max));
        }

        return {
          min: q(n, q(o, n)),
          max: q(o, q(n, o))
        };
      }
    }, {
      key: "getPadding",
      value: function getPadding() {
        var t = this;
        return {
          left: t.paddingLeft || 0,
          top: t.paddingTop || 0,
          right: t.paddingRight || 0,
          bottom: t.paddingBottom || 0
        };
      }
    }, {
      key: "getTicks",
      value: function getTicks() {
        return this.ticks;
      }
    }, {
      key: "getLabels",
      value: function getLabels() {
        var t = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
      }
    }, {
      key: "beforeLayout",
      value: function beforeLayout() {
        this._cache = {}, this._dataLimitsCached = !1;
      }
    }, {
      key: "beforeUpdate",
      value: function beforeUpdate() {
        Q(this.options.beforeUpdate, [this]);
      }
    }, {
      key: "update",
      value: function update(t, e, i) {
        var n = this,
            o = n.options.ticks,
            s = o.sampleSize;
        n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n._margins = i = Object.assign({
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }, i), n.ticks = null, n._labelSizes = null, n._gridLineItems = null, n._labelItems = null, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n._maxLength = n.isHorizontal() ? n.width + i.left + i.right : n.height + i.top + i.bottom, n._dataLimitsCached || (n.beforeDataLimits(), n.determineDataLimits(), n.afterDataLimits(), n._range = Ne(n, n.options.grace), n._dataLimitsCached = !0), n.beforeBuildTicks(), n.ticks = n.buildTicks() || [], n.afterBuildTicks();
        var a = s < n.ticks.length;
        n._convertTicksToLabels(a ? On(n.ticks, s) : n.ticks), n.configure(), n.beforeCalculateLabelRotation(), n.calculateLabelRotation(), n.afterCalculateLabelRotation(), o.display && (o.autoSkip || "auto" === o.source) && (n.ticks = Pn(n, n.ticks), n._labelSizes = null), a && n._convertTicksToLabels(n.ticks), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate();
      }
    }, {
      key: "configure",
      value: function configure() {
        var t = this;
        var e,
            i,
            n = t.options.reverse;
        t.isHorizontal() ? (e = t.left, i = t.right) : (e = t.top, i = t.bottom, n = !n), t._startPixel = e, t._endPixel = i, t._reversePixels = n, t._length = i - e, t._alignToPixels = t.options.alignToPixels;
      }
    }, {
      key: "afterUpdate",
      value: function afterUpdate() {
        Q(this.options.afterUpdate, [this]);
      }
    }, {
      key: "beforeSetDimensions",
      value: function beforeSetDimensions() {
        Q(this.options.beforeSetDimensions, [this]);
      }
    }, {
      key: "setDimensions",
      value: function setDimensions() {
        var t = this;
        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
      }
    }, {
      key: "afterSetDimensions",
      value: function afterSetDimensions() {
        Q(this.options.afterSetDimensions, [this]);
      }
    }, {
      key: "_callHooks",
      value: function _callHooks(t) {
        var e = this;
        e.chart.notifyPlugins(t, e.getContext()), Q(e.options[t], [e]);
      }
    }, {
      key: "beforeDataLimits",
      value: function beforeDataLimits() {
        this._callHooks("beforeDataLimits");
      }
    }, {
      key: "determineDataLimits",
      value: function determineDataLimits() {}
    }, {
      key: "afterDataLimits",
      value: function afterDataLimits() {
        this._callHooks("afterDataLimits");
      }
    }, {
      key: "beforeBuildTicks",
      value: function beforeBuildTicks() {
        this._callHooks("beforeBuildTicks");
      }
    }, {
      key: "buildTicks",
      value: function buildTicks() {
        return [];
      }
    }, {
      key: "afterBuildTicks",
      value: function afterBuildTicks() {
        this._callHooks("afterBuildTicks");
      }
    }, {
      key: "beforeTickToLabelConversion",
      value: function beforeTickToLabelConversion() {
        Q(this.options.beforeTickToLabelConversion, [this]);
      }
    }, {
      key: "generateTickLabels",
      value: function generateTickLabels(t) {
        var e = this,
            i = e.options.ticks;
        var n, o, s;

        for (n = 0, o = t.length; n < o; n++) {
          s = t[n], s.label = Q(i.callback, [s.value, n, t], e);
        }
      }
    }, {
      key: "afterTickToLabelConversion",
      value: function afterTickToLabelConversion() {
        Q(this.options.afterTickToLabelConversion, [this]);
      }
    }, {
      key: "beforeCalculateLabelRotation",
      value: function beforeCalculateLabelRotation() {
        Q(this.options.beforeCalculateLabelRotation, [this]);
      }
    }, {
      key: "calculateLabelRotation",
      value: function calculateLabelRotation() {
        var t = this,
            e = t.options,
            i = e.ticks,
            n = t.ticks.length,
            o = i.minRotation || 0,
            s = i.maxRotation;
        var a,
            r,
            l,
            c = o;
        if (!t._isVisible() || !i.display || o >= s || n <= 1 || !t.isHorizontal()) return void (t.labelRotation = o);

        var h = t._getLabelSizes(),
            d = h.widest.width,
            u = h.highest.height,
            f = Ht(t.chart.width - d, 0, t.maxWidth);

        a = e.offset ? t.maxWidth / n : f / (n - 1), d + 6 > a && (a = f / (n - (e.offset ? .5 : 1)), r = t.maxHeight - An(e.grid) - i.padding - Ln(e.title, t.chart.options.font), l = Math.sqrt(d * d + u * u), c = It(Math.min(Math.asin(Ht((h.highest.height + 6) / a, -1, 1)), Math.asin(Ht(r / l, -1, 1)) - Math.asin(Ht(u / l, -1, 1)))), c = Math.max(o, Math.min(s, c))), t.labelRotation = c;
      }
    }, {
      key: "afterCalculateLabelRotation",
      value: function afterCalculateLabelRotation() {
        Q(this.options.afterCalculateLabelRotation, [this]);
      }
    }, {
      key: "beforeFit",
      value: function beforeFit() {
        Q(this.options.beforeFit, [this]);
      }
    }, {
      key: "fit",
      value: function fit() {
        var t = this,
            e = {
          width: 0,
          height: 0
        },
            i = t.chart,
            _t$options = t.options,
            n = _t$options.ticks,
            o = _t$options.title,
            s = _t$options.grid,
            a = t._isVisible(),
            r = t.isHorizontal();

        if (a) {
          var _a13 = Ln(o, i.options.font);

          if (r ? (e.width = t.maxWidth, e.height = An(s) + _a13) : (e.height = t.maxHeight, e.width = An(s) + _a13), n.display && t.ticks.length) {
            var _t$_getLabelSizes = t._getLabelSizes(),
                _i19 = _t$_getLabelSizes.first,
                _o17 = _t$_getLabelSizes.last,
                _s16 = _t$_getLabelSizes.widest,
                _a14 = _t$_getLabelSizes.highest,
                _l10 = 2 * n.padding,
                _c10 = Et(t.labelRotation),
                _h6 = Math.cos(_c10),
                _d4 = Math.sin(_c10);

            if (r) {
              var _i20 = n.mirror ? 0 : _d4 * _s16.width + _h6 * _a14.height;

              e.height = Math.min(t.maxHeight, e.height + _i20 + _l10);
            } else {
              var _i21 = n.mirror ? 0 : _h6 * _s16.width + _d4 * _a14.height;

              e.width = Math.min(t.maxWidth, e.width + _i21 + _l10);
            }

            t._calculatePadding(_i19, _o17, _d4, _h6);
          }
        }

        t._handleMargins(), r ? (t.width = t._length = i.width - t._margins.left - t._margins.right, t.height = e.height) : (t.width = e.width, t.height = t._length = i.height - t._margins.top - t._margins.bottom);
      }
    }, {
      key: "_calculatePadding",
      value: function _calculatePadding(t, e, i, n) {
        var o = this,
            _o$options = o.options,
            _o$options$ticks = _o$options.ticks,
            s = _o$options$ticks.align,
            a = _o$options$ticks.padding,
            r = _o$options.position,
            l = 0 !== o.labelRotation,
            c = "top" !== r && "x" === o.axis;

        if (o.isHorizontal()) {
          var _r6 = o.getPixelForTick(0) - o.left,
              _h7 = o.right - o.getPixelForTick(o.ticks.length - 1);

          var _d5 = 0,
              _u = 0;
          l ? c ? (_d5 = n * t.width, _u = i * e.height) : (_d5 = i * t.height, _u = n * e.width) : "start" === s ? _u = e.width : "end" === s ? _d5 = t.width : (_d5 = t.width / 2, _u = e.width / 2), o.paddingLeft = Math.max((_d5 - _r6 + a) * o.width / (o.width - _r6), 0), o.paddingRight = Math.max((_u - _h7 + a) * o.width / (o.width - _h7), 0);
        } else {
          var _i22 = e.height / 2,
              _n22 = t.height / 2;

          "start" === s ? (_i22 = 0, _n22 = t.height) : "end" === s && (_i22 = e.height, _n22 = 0), o.paddingTop = _i22 + a, o.paddingBottom = _n22 + a;
        }
      }
    }, {
      key: "_handleMargins",
      value: function _handleMargins() {
        var t = this;
        t._margins && (t._margins.left = Math.max(t.paddingLeft, t._margins.left), t._margins.top = Math.max(t.paddingTop, t._margins.top), t._margins.right = Math.max(t.paddingRight, t._margins.right), t._margins.bottom = Math.max(t.paddingBottom, t._margins.bottom));
      }
    }, {
      key: "afterFit",
      value: function afterFit() {
        Q(this.options.afterFit, [this]);
      }
    }, {
      key: "isHorizontal",
      value: function isHorizontal() {
        var _this$options = this.options,
            t = _this$options.axis,
            e = _this$options.position;
        return "top" === e || "bottom" === e || "x" === t;
      }
    }, {
      key: "isFullSize",
      value: function isFullSize() {
        return this.options.fullSize;
      }
    }, {
      key: "_convertTicksToLabels",
      value: function _convertTicksToLabels(t) {
        var e = this;
        var i, n;

        for (e.beforeTickToLabelConversion(), e.generateTickLabels(t), i = 0, n = t.length; i < n; i++) {
          $(t[i].label) && (t.splice(i, 1), n--, i--);
        }

        e.afterTickToLabelConversion();
      }
    }, {
      key: "_getLabelSizes",
      value: function _getLabelSizes() {
        var t = this;
        var e = t._labelSizes;

        if (!e) {
          var _i23 = t.options.ticks.sampleSize;
          var _n23 = t.ticks;
          _i23 < _n23.length && (_n23 = On(_n23, _i23)), t._labelSizes = e = t._computeLabelSizes(_n23, _n23.length);
        }

        return e;
      }
    }, {
      key: "_computeLabelSizes",
      value: function _computeLabelSizes(t, e) {
        var i = this.ctx,
            n = this._longestTextCache,
            o = [],
            s = [];
        var a,
            r,
            l,
            c,
            h,
            d,
            u,
            f,
            g,
            p,
            m,
            x = 0,
            b = 0;

        for (a = 0; a < e; ++a) {
          if (c = t[a].label, h = this._resolveTickFontOptions(a), i.font = d = h.string, u = n[d] = n[d] || {
            data: {},
            gc: []
          }, f = h.lineHeight, g = p = 0, $(c) || Y(c)) {
            if (Y(c)) for (r = 0, l = c.length; r < l; ++r) {
              m = c[r], $(m) || Y(m) || (g = Yt(i, u.data, u.gc, g, m), p += f);
            }
          } else g = Yt(i, u.data, u.gc, g, c), p = f;

          o.push(g), s.push(p), x = Math.max(g, x), b = Math.max(p, b);
        }

        !function (t, e) {
          J(t, function (t) {
            var i = t.gc,
                n = i.length / 2;
            var o;

            if (n > e) {
              for (o = 0; o < n; ++o) {
                delete t.data[i[o]];
              }

              i.splice(0, n);
            }
          });
        }(n, e);

        var _ = o.indexOf(x),
            y = s.indexOf(b),
            v = function v(t) {
          return {
            width: o[t] || 0,
            height: s[t] || 0
          };
        };

        return {
          first: v(0),
          last: v(e - 1),
          widest: v(_),
          highest: v(y),
          widths: o,
          heights: s
        };
      }
    }, {
      key: "getLabelForValue",
      value: function getLabelForValue(t) {
        return t;
      }
    }, {
      key: "getPixelForValue",
      value: function getPixelForValue(t, e) {
        return NaN;
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(t) {}
    }, {
      key: "getPixelForTick",
      value: function getPixelForTick(t) {
        var e = this.ticks;
        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
      }
    }, {
      key: "getPixelForDecimal",
      value: function getPixelForDecimal(t) {
        var e = this;
        e._reversePixels && (t = 1 - t);
        var i = e._startPixel + t * e._length;
        return jt(e._alignToPixels ? Xt(e.chart, i, 0) : i);
      }
    }, {
      key: "getDecimalForPixel",
      value: function getDecimalForPixel(t) {
        var e = (t - this._startPixel) / this._length;
        return this._reversePixels ? 1 - e : e;
      }
    }, {
      key: "getBasePixel",
      value: function getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
      }
    }, {
      key: "getBaseValue",
      value: function getBaseValue() {
        var t = this.min,
            e = this.max;
        return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
      }
    }, {
      key: "getContext",
      value: function getContext(t) {
        var e = this,
            i = e.ticks || [];

        if (t >= 0 && t < i.length) {
          var _n24 = i[t];
          return _n24.$context || (_n24.$context = function (t, e, i) {
            return Object.assign(Object.create(t), {
              tick: i,
              index: e,
              type: "tick"
            });
          }(e.getContext(), t, _n24));
        }

        return e.$context || (e.$context = (n = e.chart.getContext(), o = e, Object.assign(Object.create(n), {
          scale: o,
          type: "scale"
        })));
        var n, o;
      }
    }, {
      key: "_tickSize",
      value: function _tickSize() {
        var t = this,
            e = t.options.ticks,
            i = Et(t.labelRotation),
            n = Math.abs(Math.cos(i)),
            o = Math.abs(Math.sin(i)),
            s = t._getLabelSizes(),
            a = e.autoSkipPadding || 0,
            r = s ? s.widest.width + a : 0,
            l = s ? s.highest.height + a : 0;

        return t.isHorizontal() ? l * n > r * o ? r / n : l / o : l * o < r * n ? l / n : r / o;
      }
    }, {
      key: "_isVisible",
      value: function _isVisible() {
        var t = this.options.display;
        return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
      }
    }, {
      key: "_computeGridLineItems",
      value: function _computeGridLineItems(t) {
        var e = this,
            i = e.axis,
            n = e.chart,
            o = e.options,
            s = o.grid,
            a = o.position,
            r = s.offset,
            l = e.isHorizontal(),
            c = e.ticks.length + (r ? 1 : 0),
            h = An(s),
            d = [],
            u = s.setContext(e.getContext()),
            f = u.drawBorder ? u.borderWidth : 0,
            g = f / 2,
            p = function p(t) {
          return Xt(n, t, f);
        };

        var m, x, b, _, y, v, w, M, k, S, P, D;

        if ("top" === a) m = p(e.bottom), v = e.bottom - h, M = m - g, S = p(t.top) + g, D = t.bottom;else if ("bottom" === a) m = p(e.top), S = t.top, D = p(t.bottom) - g, v = m + g, M = e.top + h;else if ("left" === a) m = p(e.right), y = e.right - h, w = m - g, k = p(t.left) + g, P = t.right;else if ("right" === a) m = p(e.left), k = t.left, P = p(t.right) - g, y = m + g, w = e.left + h;else if ("x" === i) {
          if ("center" === a) m = p((t.top + t.bottom) / 2 + .5);else if (U(a)) {
            var _t26 = Object.keys(a)[0],
                _i24 = a[_t26];
            m = p(e.chart.scales[_t26].getPixelForValue(_i24));
          }
          S = t.top, D = t.bottom, v = m + g, M = v + h;
        } else if ("y" === i) {
          if ("center" === a) m = p((t.left + t.right) / 2);else if (U(a)) {
            var _t27 = Object.keys(a)[0],
                _i25 = a[_t27];
            m = p(e.chart.scales[_t27].getPixelForValue(_i25));
          }
          y = m - g, w = y - h, k = t.left, P = t.right;
        }
        var C = K(o.ticks.maxTicksLimit, c),
            O = Math.max(1, Math.ceil(c / C));

        for (x = 0; x < c; x += O) {
          var _t28 = s.setContext(e.getContext(x)),
              _i26 = _t28.lineWidth,
              _o18 = _t28.color,
              _a15 = s.borderDash || [],
              _c11 = _t28.borderDashOffset,
              _h8 = _t28.tickWidth,
              _u2 = _t28.tickColor,
              _f = _t28.tickBorderDash || [],
              _g = _t28.tickBorderDashOffset;

          b = Tn(e, x, r), void 0 !== b && (_ = Xt(n, b, _i26), l ? y = w = k = P = _ : v = M = S = D = _, d.push({
            tx1: y,
            ty1: v,
            tx2: w,
            ty2: M,
            x1: k,
            y1: S,
            x2: P,
            y2: D,
            width: _i26,
            color: _o18,
            borderDash: _a15,
            borderDashOffset: _c11,
            tickWidth: _h8,
            tickColor: _u2,
            tickBorderDash: _f,
            tickBorderDashOffset: _g
          }));
        }

        return e._ticksLength = c, e._borderValue = m, d;
      }
    }, {
      key: "_computeLabelItems",
      value: function _computeLabelItems(t) {
        var e = this,
            i = e.axis,
            n = e.options,
            o = n.position,
            s = n.ticks,
            a = e.isHorizontal(),
            r = e.ticks,
            l = s.align,
            c = s.crossAlign,
            h = s.padding,
            d = s.mirror,
            u = An(n.grid),
            f = u + h,
            g = d ? -h : f,
            p = -Et(e.labelRotation),
            m = [];

        var x,
            b,
            _,
            y,
            v,
            w,
            M,
            k,
            S,
            P,
            D,
            C,
            O = "middle";

        if ("top" === o) w = e.bottom - g, M = e._getXAxisLabelAlignment();else if ("bottom" === o) w = e.top + g, M = e._getXAxisLabelAlignment();else if ("left" === o) {
          var _t29 = e._getYAxisLabelAlignment(u);

          M = _t29.textAlign, v = _t29.x;
        } else if ("right" === o) {
          var _t30 = e._getYAxisLabelAlignment(u);

          M = _t30.textAlign, v = _t30.x;
        } else if ("x" === i) {
          if ("center" === o) w = (t.top + t.bottom) / 2 + f;else if (U(o)) {
            var _t31 = Object.keys(o)[0],
                _i27 = o[_t31];
            w = e.chart.scales[_t31].getPixelForValue(_i27) + f;
          }
          M = e._getXAxisLabelAlignment();
        } else if ("y" === i) {
          if ("center" === o) v = (t.left + t.right) / 2 - f;else if (U(o)) {
            var _t32 = Object.keys(o)[0],
                _i28 = o[_t32];
            v = e.chart.scales[_t32].getPixelForValue(_i28);
          }
          M = e._getYAxisLabelAlignment(u).textAlign;
        }
        "y" === i && ("start" === l ? O = "top" : "end" === l && (O = "bottom"));

        var T = e._getLabelSizes();

        for (x = 0, b = r.length; x < b; ++x) {
          _ = r[x], y = _.label;

          var _t33 = s.setContext(e.getContext(x));

          k = e.getPixelForTick(x) + s.labelOffset, S = e._resolveTickFontOptions(x), P = S.lineHeight, D = Y(y) ? y.length : 1;

          var _i29 = D / 2,
              _n25 = _t33.color,
              _l11 = _t33.textStrokeColor,
              _h9 = _t33.textStrokeWidth;

          var _u3 = void 0;

          if (a ? (v = k, C = "top" === o ? "near" === c || 0 !== p ? -D * P + P / 2 : "center" === c ? -T.highest.height / 2 - _i29 * P + P : -T.highest.height + P / 2 : "near" === c || 0 !== p ? P / 2 : "center" === c ? T.highest.height / 2 - _i29 * P : T.highest.height - D * P, d && (C *= -1)) : (w = k, C = (1 - D) * P / 2), _t33.showLabelBackdrop) {
            var _e24 = Be(_t33.backdropPadding),
                _i30 = T.heights[x],
                _n26 = T.widths[x];

            var _o19 = w + C - _e24.top,
                _s17 = v - _e24.left;

            switch (O) {
              case "middle":
                _o19 -= _i30 / 2;
                break;

              case "bottom":
                _o19 -= _i30;
            }

            switch (M) {
              case "center":
                _s17 -= _n26 / 2;
                break;

              case "right":
                _s17 -= _n26;
            }

            _u3 = {
              left: _s17,
              top: _o19,
              width: _n26 + _e24.width,
              height: _i30 + _e24.height,
              color: _t33.backdropColor
            };
          }

          m.push({
            rotation: p,
            label: y,
            font: S,
            color: _n25,
            strokeColor: _l11,
            strokeWidth: _h9,
            textOffset: C,
            textAlign: M,
            textBaseline: O,
            translation: [v, w],
            backdrop: _u3
          });
        }

        return m;
      }
    }, {
      key: "_getXAxisLabelAlignment",
      value: function _getXAxisLabelAlignment() {
        var _this$options2 = this.options,
            t = _this$options2.position,
            e = _this$options2.ticks;
        if (-Et(this.labelRotation)) return "top" === t ? "left" : "right";
        var i = "center";
        return "start" === e.align ? i = "left" : "end" === e.align && (i = "right"), i;
      }
    }, {
      key: "_getYAxisLabelAlignment",
      value: function _getYAxisLabelAlignment(t) {
        var e = this,
            _e$options = e.options,
            i = _e$options.position,
            _e$options$ticks = _e$options.ticks,
            n = _e$options$ticks.crossAlign,
            o = _e$options$ticks.mirror,
            s = _e$options$ticks.padding,
            a = t + s,
            r = e._getLabelSizes().widest.width;

        var l, c;
        return "left" === i ? o ? (l = "left", c = e.right + s) : (c = e.right - a, "near" === n ? l = "right" : "center" === n ? (l = "center", c -= r / 2) : (l = "left", c = e.left)) : "right" === i ? o ? (l = "right", c = e.left + s) : (c = e.left + a, "near" === n ? l = "left" : "center" === n ? (l = "center", c += r / 2) : (l = "right", c = e.right)) : l = "right", {
          textAlign: l,
          x: c
        };
      }
    }, {
      key: "_computeLabelArea",
      value: function _computeLabelArea() {
        var t = this;
        if (t.options.ticks.mirror) return;
        var e = t.chart,
            i = t.options.position;
        return "left" === i || "right" === i ? {
          top: 0,
          left: t.left,
          bottom: e.height,
          right: t.right
        } : "top" === i || "bottom" === i ? {
          top: t.top,
          left: 0,
          bottom: t.bottom,
          right: e.width
        } : void 0;
      }
    }, {
      key: "drawBackground",
      value: function drawBackground() {
        var t = this.ctx,
            e = this.options.backgroundColor,
            i = this.left,
            n = this.top,
            o = this.width,
            s = this.height;
        e && (t.save(), t.fillStyle = e, t.fillRect(i, n, o, s), t.restore());
      }
    }, {
      key: "getLineWidthForValue",
      value: function getLineWidthForValue(t) {
        var e = this,
            i = e.options.grid;
        if (!e._isVisible() || !i.display) return 0;
        var n = e.ticks.findIndex(function (e) {
          return e.value === t;
        });

        if (n >= 0) {
          return i.setContext(e.getContext(n)).lineWidth;
        }

        return 0;
      }
    }, {
      key: "drawGrid",
      value: function drawGrid(t) {
        var e = this,
            i = e.options.grid,
            n = e.ctx,
            o = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));

        var s, a;

        var r = function r(t, e, i) {
          i.width && i.color && (n.save(), n.lineWidth = i.width, n.strokeStyle = i.color, n.setLineDash(i.borderDash || []), n.lineDashOffset = i.borderDashOffset, n.beginPath(), n.moveTo(t.x, t.y), n.lineTo(e.x, e.y), n.stroke(), n.restore());
        };

        if (i.display) for (s = 0, a = o.length; s < a; ++s) {
          var _t34 = o[s];
          i.drawOnChartArea && r({
            x: _t34.x1,
            y: _t34.y1
          }, {
            x: _t34.x2,
            y: _t34.y2
          }, _t34), i.drawTicks && r({
            x: _t34.tx1,
            y: _t34.ty1
          }, {
            x: _t34.tx2,
            y: _t34.ty2
          }, {
            color: _t34.tickColor,
            width: _t34.tickWidth,
            borderDash: _t34.tickBorderDash,
            borderDashOffset: _t34.tickBorderDashOffset
          });
        }
      }
    }, {
      key: "drawBorder",
      value: function drawBorder() {
        var t = this,
            e = t.chart,
            i = t.ctx,
            n = t.options.grid,
            o = n.setContext(t.getContext()),
            s = n.drawBorder ? o.borderWidth : 0;
        if (!s) return;
        var a = n.setContext(t.getContext(0)).lineWidth,
            r = t._borderValue;
        var l, c, h, d;
        t.isHorizontal() ? (l = Xt(e, t.left, s) - s / 2, c = Xt(e, t.right, a) + a / 2, h = d = r) : (h = Xt(e, t.top, s) - s / 2, d = Xt(e, t.bottom, a) + a / 2, l = c = r), i.save(), i.lineWidth = o.borderWidth, i.strokeStyle = o.borderColor, i.beginPath(), i.moveTo(l, h), i.lineTo(c, d), i.stroke(), i.restore();
      }
    }, {
      key: "drawLabels",
      value: function drawLabels(t) {
        var e = this;
        if (!e.options.ticks.display) return;

        var i = e.ctx,
            n = e._computeLabelArea();

        n && Zt(i, n);

        var o = e._labelItems || (e._labelItems = e._computeLabelItems(t));

        var s, a;

        for (s = 0, a = o.length; s < a; ++s) {
          var _t35 = o[s],
              _e25 = _t35.font,
              _n27 = _t35.label;
          _t35.backdrop && (i.fillStyle = _t35.backdrop.color, i.fillRect(_t35.backdrop.left, _t35.backdrop.top, _t35.backdrop.width, _t35.backdrop.height)), ee(i, _n27, 0, _t35.textOffset, _e25, _t35);
        }

        n && Qt(i);
      }
    }, {
      key: "drawTitle",
      value: function drawTitle() {
        var t = this.ctx,
            _this$options3 = this.options,
            e = _this$options3.position,
            i = _this$options3.title,
            n = _this$options3.reverse;
        if (!i.display) return;
        var s = Ve(i.font),
            a = Be(i.padding),
            r = i.align;
        var l = s.lineHeight / 2;
        "bottom" === e || "center" === e || U(e) ? (l += a.bottom, Y(i.text) && (l += s.lineHeight * (i.text.length - 1))) : l += a.top;

        var _ref6 = function (t, e, i, n) {
          var s = t.top,
              a = t.left,
              r = t.bottom,
              l = t.right,
              c = t.chart,
              h = c.chartArea,
              d = c.scales;
          var u,
              f,
              g,
              p = 0;
          var m = r - s,
              x = l - a;

          if (t.isHorizontal()) {
            if (f = o(n, a, l), U(i)) {
              var _t36 = Object.keys(i)[0],
                  _n28 = i[_t36];
              g = d[_t36].getPixelForValue(_n28) + m - e;
            } else g = "center" === i ? (h.bottom + h.top) / 2 + m - e : Cn(t, i, e);

            u = l - a;
          } else {
            if (U(i)) {
              var _t37 = Object.keys(i)[0],
                  _n29 = i[_t37];
              f = d[_t37].getPixelForValue(_n29) - x + e;
            } else f = "center" === i ? (h.left + h.right) / 2 - x + e : Cn(t, i, e);

            g = o(n, r, s), p = "left" === i ? -Mt : Mt;
          }

          return {
            titleX: f,
            titleY: g,
            maxWidth: u,
            rotation: p
          };
        }(this, l, e, r),
            c = _ref6.titleX,
            h = _ref6.titleY,
            d = _ref6.maxWidth,
            u = _ref6.rotation;

        ee(t, i.text, 0, 0, s, {
          color: i.color,
          maxWidth: d,
          rotation: u,
          textAlign: Rn(r, e, n),
          textBaseline: "middle",
          translation: [c, h]
        });
      }
    }, {
      key: "draw",
      value: function draw(t) {
        var e = this;
        e._isVisible() && (e.drawBackground(), e.drawGrid(t), e.drawBorder(), e.drawTitle(), e.drawLabels(t));
      }
    }, {
      key: "_layers",
      value: function _layers() {
        var t = this,
            e = t.options,
            i = e.ticks && e.ticks.z || 0,
            n = K(e.grid && e.grid.z, -1);
        return t._isVisible() && t.draw === En.prototype.draw ? [{
          z: n,
          draw: function draw(e) {
            t.drawBackground(), t.drawGrid(e), t.drawTitle();
          }
        }, {
          z: n + 1,
          draw: function draw() {
            t.drawBorder();
          }
        }, {
          z: i,
          draw: function draw(e) {
            t.drawLabels(e);
          }
        }] : [{
          z: i,
          draw: function draw(e) {
            t.draw(e);
          }
        }];
      }
    }, {
      key: "getMatchingVisibleMetas",
      value: function getMatchingVisibleMetas(t) {
        var e = this,
            i = e.chart.getSortedVisibleDatasetMetas(),
            n = e.axis + "AxisID",
            o = [];
        var s, a;

        for (s = 0, a = i.length; s < a; ++s) {
          var _a16 = i[s];
          _a16[n] !== e.id || t && _a16.type !== t || o.push(_a16);
        }

        return o;
      }
    }, {
      key: "_resolveTickFontOptions",
      value: function _resolveTickFontOptions(t) {
        return Ve(this.options.ticks.setContext(this.getContext(t)).font);
      }
    }, {
      key: "_maxDigits",
      value: function _maxDigits() {
        var t = this,
            e = t._resolveTickFontOptions(0).lineHeight;

        return (t.isHorizontal() ? t.width : t.height) / e;
      }
    }]);

    return En;
  }(Mn);

  var In =
  /*#__PURE__*/
  function () {
    function In(t, e, i) {
      _classCallCheck(this, In);

      this.type = t, this.scope = e, this.override = i, this.items = Object.create(null);
    }

    _createClass(In, [{
      key: "isForType",
      value: function isForType(t) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
      }
    }, {
      key: "register",
      value: function register(t) {
        var e = this,
            i = Object.getPrototypeOf(t);
        var n;
        (function (t) {
          return "id" in t && "defaults" in t;
        })(i) && (n = e.register(i));
        var o = e.items,
            s = t.id,
            a = e.scope + "." + s;
        if (!s) throw new Error("class does not have id: " + t);
        return s in o || (o[s] = t, function (t, e, i) {
          var n = ot(Object.create(null), [i ? xt.get(i) : {}, xt.get(e), t.defaults]);
          xt.set(e, n), t.defaultRoutes && function (t, e) {
            Object.keys(e).forEach(function (i) {
              var n = i.split("."),
                  o = n.pop(),
                  s = [t].concat(n).join("."),
                  a = e[i].split("."),
                  r = a.pop(),
                  l = a.join(".");
              xt.route(s, o, l, r);
            });
          }(e, t.defaultRoutes);
          t.descriptors && xt.describe(e, t.descriptors);
        }(t, a, n), e.override && xt.override(t.id, t.overrides)), a;
      }
    }, {
      key: "get",
      value: function get(t) {
        return this.items[t];
      }
    }, {
      key: "unregister",
      value: function unregister(t) {
        var e = this.items,
            i = t.id,
            n = this.scope;
        i in e && delete e[i], n && i in xt[n] && (delete xt[n][i], this.override && delete ft[i]);
      }
    }]);

    return In;
  }();

  var zn = new (
  /*#__PURE__*/
  function () {
    function _class3() {
      _classCallCheck(this, _class3);

      this.controllers = new In(wn, "datasets", !0), this.elements = new In(Mn, "elements"), this.plugins = new In(Object, "plugins"), this.scales = new In(En, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements];
    }

    _createClass(_class3, [{
      key: "add",
      value: function add() {
        for (var _len3 = arguments.length, t = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          t[_key3] = arguments[_key3];
        }

        this._each("register", t);
      }
    }, {
      key: "remove",
      value: function remove() {
        for (var _len4 = arguments.length, t = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          t[_key4] = arguments[_key4];
        }

        this._each("unregister", t);
      }
    }, {
      key: "addControllers",
      value: function addControllers() {
        for (var _len5 = arguments.length, t = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          t[_key5] = arguments[_key5];
        }

        this._each("register", t, this.controllers);
      }
    }, {
      key: "addElements",
      value: function addElements() {
        for (var _len6 = arguments.length, t = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          t[_key6] = arguments[_key6];
        }

        this._each("register", t, this.elements);
      }
    }, {
      key: "addPlugins",
      value: function addPlugins() {
        for (var _len7 = arguments.length, t = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          t[_key7] = arguments[_key7];
        }

        this._each("register", t, this.plugins);
      }
    }, {
      key: "addScales",
      value: function addScales() {
        for (var _len8 = arguments.length, t = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          t[_key8] = arguments[_key8];
        }

        this._each("register", t, this.scales);
      }
    }, {
      key: "getController",
      value: function getController(t) {
        return this._get(t, this.controllers, "controller");
      }
    }, {
      key: "getElement",
      value: function getElement(t) {
        return this._get(t, this.elements, "element");
      }
    }, {
      key: "getPlugin",
      value: function getPlugin(t) {
        return this._get(t, this.plugins, "plugin");
      }
    }, {
      key: "getScale",
      value: function getScale(t) {
        return this._get(t, this.scales, "scale");
      }
    }, {
      key: "removeControllers",
      value: function removeControllers() {
        for (var _len9 = arguments.length, t = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
          t[_key9] = arguments[_key9];
        }

        this._each("unregister", t, this.controllers);
      }
    }, {
      key: "removeElements",
      value: function removeElements() {
        for (var _len10 = arguments.length, t = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
          t[_key10] = arguments[_key10];
        }

        this._each("unregister", t, this.elements);
      }
    }, {
      key: "removePlugins",
      value: function removePlugins() {
        for (var _len11 = arguments.length, t = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
          t[_key11] = arguments[_key11];
        }

        this._each("unregister", t, this.plugins);
      }
    }, {
      key: "removeScales",
      value: function removeScales() {
        for (var _len12 = arguments.length, t = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
          t[_key12] = arguments[_key12];
        }

        this._each("unregister", t, this.scales);
      }
    }, {
      key: "_each",
      value: function _each(t, e, i) {
        var n = this;

        _toConsumableArray(e).forEach(function (e) {
          var o = i || n._getRegistryForType(e);

          i || o.isForType(e) || o === n.plugins && e.id ? n._exec(t, o, e) : J(e, function (e) {
            var o = i || n._getRegistryForType(e);

            n._exec(t, o, e);
          });
        });
      }
    }, {
      key: "_exec",
      value: function _exec(t, e, i) {
        var n = ct(t);
        Q(i["before" + n], [], i), e[t](i), Q(i["after" + n], [], i);
      }
    }, {
      key: "_getRegistryForType",
      value: function _getRegistryForType(t) {
        for (var _e26 = 0; _e26 < this._typedRegistries.length; _e26++) {
          var _i31 = this._typedRegistries[_e26];
          if (_i31.isForType(t)) return _i31;
        }

        return this.plugins;
      }
    }, {
      key: "_get",
      value: function _get(t, e, i) {
        var n = e.get(t);
        if (void 0 === n) throw new Error('"' + t + '" is not a registered ' + i + ".");
        return n;
      }
    }]);

    return _class3;
  }())();

  var Fn =
  /*#__PURE__*/
  function () {
    function Fn() {
      _classCallCheck(this, Fn);

      this._init = [];
    }

    _createClass(Fn, [{
      key: "notify",
      value: function notify(t, e, i, n) {
        var o = this;
        "beforeInit" === e && (o._init = o._createDescriptors(t, !0), o._notify(o._init, t, "install"));

        var s = n ? o._descriptors(t).filter(n) : o._descriptors(t),
            a = o._notify(s, t, e, i);

        return "destroy" === e && (o._notify(s, t, "stop"), o._notify(o._init, t, "uninstall")), a;
      }
    }, {
      key: "_notify",
      value: function _notify(t, e, i, n) {
        n = n || {};
        var _iteratorNormalCompletion16 = true;
        var _didIteratorError16 = false;
        var _iteratorError16 = undefined;

        try {
          for (var _iterator16 = t[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
            var _o20 = _step16.value;
            var _t38 = _o20.plugin;
            if (!1 === Q(_t38[i], [e, n, _o20.options], _t38) && n.cancelable) return !1;
          }
        } catch (err) {
          _didIteratorError16 = true;
          _iteratorError16 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) {
              _iterator16["return"]();
            }
          } finally {
            if (_didIteratorError16) {
              throw _iteratorError16;
            }
          }
        }

        return !0;
      }
    }, {
      key: "invalidate",
      value: function invalidate() {
        $(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
      }
    }, {
      key: "_descriptors",
      value: function _descriptors(t) {
        if (this._cache) return this._cache;

        var e = this._cache = this._createDescriptors(t);

        return this._notifyStateChanges(t), e;
      }
    }, {
      key: "_createDescriptors",
      value: function _createDescriptors(t, e) {
        var i = t && t.config,
            n = K(i.options && i.options.plugins, {}),
            o = function (t) {
          var e = [],
              i = Object.keys(zn.plugins.items);

          for (var _t39 = 0; _t39 < i.length; _t39++) {
            e.push(zn.getPlugin(i[_t39]));
          }

          var n = t.plugins || [];

          for (var _t40 = 0; _t40 < n.length; _t40++) {
            var _i32 = n[_t40];
            -1 === e.indexOf(_i32) && e.push(_i32);
          }

          return e;
        }(i);

        return !1 !== n || e ? function (t, e, i, n) {
          var o = [],
              s = t.getContext();

          for (var _a17 = 0; _a17 < e.length; _a17++) {
            var _r7 = e[_a17],
                _l12 = Bn(i[_r7.id], n);

            null !== _l12 && o.push({
              plugin: _r7,
              options: Vn(t.config, _r7, _l12, s)
            });
          }

          return o;
        }(t, o, n, e) : [];
      }
    }, {
      key: "_notifyStateChanges",
      value: function _notifyStateChanges(t) {
        var e = this._oldCache || [],
            i = this._cache,
            n = function n(t, e) {
          return t.filter(function (t) {
            return !e.some(function (e) {
              return t.plugin.id === e.plugin.id;
            });
          });
        };

        this._notify(n(e, i), t, "stop"), this._notify(n(i, e), t, "start");
      }
    }]);

    return Fn;
  }();

  function Bn(t, e) {
    return e || !1 !== t ? !0 === t ? {} : t : null;
  }

  function Vn(t, e, i, n) {
    var o = t.pluginScopeKeys(e),
        s = t.getOptionScopes(i, o);
    return t.createResolver(s, n, [""], {
      scriptable: !1,
      indexable: !1,
      allKeys: !0
    });
  }

  function Wn(t, e) {
    var i = xt.datasets[t] || {};
    return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x";
  }

  function Nn(t, e) {
    return "x" === t || "y" === t ? t : e.axis || ("top" === (i = e.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || t.charAt(0).toLowerCase();
    var i;
  }

  function Hn(t) {
    var e = t.options || (t.options = {});
    e.plugins = K(e.plugins, {}), e.scales = function (t, e) {
      var i = ft[t.type] || {
        scales: {}
      },
          n = e.scales || {},
          o = Wn(t.type, e),
          s = Object.create(null),
          a = Object.create(null);
      return Object.keys(n).forEach(function (t) {
        var e = n[t],
            r = Nn(t, e),
            l = function (t, e) {
          return t === e ? "_index_" : "_value_";
        }(r, o),
            c = i.scales || {};

        s[r] = s[r] || t, a[t] = st(Object.create(null), [{
          axis: r
        }, e, c[r], c[l]]);
      }), t.data.datasets.forEach(function (i) {
        var o = i.type || t.type,
            r = i.indexAxis || Wn(o, e),
            l = (ft[o] || {}).scales || {};
        Object.keys(l).forEach(function (t) {
          var e = function (t, e) {
            var i = t;
            return "_index_" === t ? i = e : "_value_" === t && (i = "x" === e ? "y" : "x"), i;
          }(t, r),
              o = i[e + "AxisID"] || s[e] || e;

          a[o] = a[o] || Object.create(null), st(a[o], [{
            axis: e
          }, n[o], l[t]]);
        });
      }), Object.keys(a).forEach(function (t) {
        var e = a[t];
        st(e, [xt.scales[e.type], xt.scale]);
      }), a;
    }(t, e);
  }

  function jn(t) {
    return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t;
  }

  var $n = new Map(),
      Yn = new Set();

  function Un(t, e) {
    var i = $n.get(t);
    return i || (i = e(), $n.set(t, i), Yn.add(i)), i;
  }

  var Xn = function Xn(t, e, i) {
    var n = lt(e, i);
    void 0 !== n && t.add(n);
  };

  var qn =
  /*#__PURE__*/
  function () {
    function qn(t) {
      _classCallCheck(this, qn);

      this._config = function (t) {
        return (t = t || {}).data = jn(t.data), Hn(t), t;
      }(t), this._scopeCache = new Map(), this._resolverCache = new Map();
    }

    _createClass(qn, [{
      key: "update",
      value: function update() {
        var t = this._config;
        this.clearCache(), Hn(t);
      }
    }, {
      key: "clearCache",
      value: function clearCache() {
        this._scopeCache.clear(), this._resolverCache.clear();
      }
    }, {
      key: "datasetScopeKeys",
      value: function datasetScopeKeys(t) {
        return Un(t, function () {
          return [["datasets.".concat(t), ""]];
        });
      }
    }, {
      key: "datasetAnimationScopeKeys",
      value: function datasetAnimationScopeKeys(t, e) {
        return Un("".concat(t, ".transition.").concat(e), function () {
          return [["datasets.".concat(t, ".transitions.").concat(e), "transitions.".concat(e)], ["datasets.".concat(t), ""]];
        });
      }
    }, {
      key: "datasetElementScopeKeys",
      value: function datasetElementScopeKeys(t, e) {
        return Un("".concat(t, "-").concat(e), function () {
          return [["datasets.".concat(t, ".elements.").concat(e), "datasets.".concat(t), "elements.".concat(e), ""]];
        });
      }
    }, {
      key: "pluginScopeKeys",
      value: function pluginScopeKeys(t) {
        var e = t.id;
        return Un("".concat(this.type, "-plugin-").concat(e), function () {
          return [["plugins.".concat(e)].concat(_toConsumableArray(t.additionalOptionScopes || []))];
        });
      }
    }, {
      key: "_cachedScopes",
      value: function _cachedScopes(t, e) {
        var i = this._scopeCache;
        var n = i.get(t);
        return n && !e || (n = new Map(), i.set(t, n)), n;
      }
    }, {
      key: "getOptionScopes",
      value: function getOptionScopes(t, e, i) {
        var n = this.options,
            o = this.type,
            s = this._cachedScopes(t, i),
            a = s.get(e);

        if (a) return a;
        var r = new Set();
        e.forEach(function (e) {
          t && (r.add(t), e.forEach(function (e) {
            return Xn(r, t, e);
          })), e.forEach(function (t) {
            return Xn(r, n, t);
          }), e.forEach(function (t) {
            return Xn(r, ft[o] || {}, t);
          }), e.forEach(function (t) {
            return Xn(r, xt, t);
          }), e.forEach(function (t) {
            return Xn(r, gt, t);
          });
        });
        var l = Array.from(r);
        return 0 === l.length && l.push(Object.create(null)), Yn.has(e) && s.set(e, l), l;
      }
    }, {
      key: "chartOptionScopes",
      value: function chartOptionScopes() {
        var t = this.options,
            e = this.type;
        return [t, ft[e] || {}, xt.datasets[e] || {}, {
          type: e
        }, xt, gt];
      }
    }, {
      key: "resolveNamedOptions",
      value: function resolveNamedOptions(t, e, i) {
        var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [""];

        var o = {
          $shared: !0
        },
            _Kn = Kn(this._resolverCache, t, n),
            s = _Kn.resolver,
            a = _Kn.subPrefixes;

        var r = s;

        if (function (t, e) {
          var _ni = ni(t),
              i = _ni.isScriptable,
              n = _ni.isIndexable;

          var _iteratorNormalCompletion17 = true;
          var _didIteratorError17 = false;
          var _iteratorError17 = undefined;

          try {
            for (var _iterator17 = e[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
              var _o21 = _step17.value;
              if (i(_o21) && dt(t[_o21]) || n(_o21) && Y(t[_o21])) return !0;
            }
          } catch (err) {
            _didIteratorError17 = true;
            _iteratorError17 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion17 && _iterator17["return"] != null) {
                _iterator17["return"]();
              }
            } finally {
              if (_didIteratorError17) {
                throw _iteratorError17;
              }
            }
          }

          return !1;
        }(s, e)) {
          o.$shared = !1;
          r = ii(s, i = dt(i) ? i() : i, this.createResolver(t, i, a));
        }

        var _iteratorNormalCompletion18 = true;
        var _didIteratorError18 = false;
        var _iteratorError18 = undefined;

        try {
          for (var _iterator18 = e[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
            var _t41 = _step18.value;
            o[_t41] = r[_t41];
          }
        } catch (err) {
          _didIteratorError18 = true;
          _iteratorError18 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion18 && _iterator18["return"] != null) {
              _iterator18["return"]();
            }
          } finally {
            if (_didIteratorError18) {
              throw _iteratorError18;
            }
          }
        }

        return o;
      }
    }, {
      key: "createResolver",
      value: function createResolver(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [""];
        var n = arguments.length > 3 ? arguments[3] : undefined;

        var _Kn2 = Kn(this._resolverCache, t, i),
            o = _Kn2.resolver;

        return U(e) ? ii(o, e, void 0, n) : o;
      }
    }, {
      key: "platform",
      get: function get() {
        return this._config.platform;
      }
    }, {
      key: "type",
      get: function get() {
        return this._config.type;
      },
      set: function set(t) {
        this._config.type = t;
      }
    }, {
      key: "data",
      get: function get() {
        return this._config.data;
      },
      set: function set(t) {
        this._config.data = jn(t);
      }
    }, {
      key: "options",
      get: function get() {
        return this._config.options;
      },
      set: function set(t) {
        this._config.options = t;
      }
    }, {
      key: "plugins",
      get: function get() {
        return this._config.plugins;
      }
    }]);

    return qn;
  }();

  function Kn(t, e, i) {
    var n = t.get(e);
    n || (n = new Map(), t.set(e, n));
    var o = i.join();
    var s = n.get(o);

    if (!s) {
      s = {
        resolver: ei(e, i),
        subPrefixes: i.filter(function (t) {
          return !t.toLowerCase().includes("hover");
        })
      }, n.set(o, s);
    }

    return s;
  }

  var Gn = ["top", "bottom", "left", "right", "chartArea"];

  function Zn(t, e) {
    return "top" === t || "bottom" === t || -1 === Gn.indexOf(t) && "x" === e;
  }

  function Qn(t, e) {
    return function (i, n) {
      return i[t] === n[t] ? i[e] - n[e] : i[t] - n[t];
    };
  }

  function Jn(t) {
    var e = t.chart,
        i = e.options.animation;
    e.notifyPlugins("afterRender"), Q(i && i.onComplete, [t], e);
  }

  function to(t) {
    var e = t.chart,
        i = e.options.animation;
    Q(i && i.onProgress, [t], e);
  }

  function eo(t) {
    return ue() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t;
  }

  var io = {},
      no = function no(t) {
    var e = eo(t);
    return Object.values(io).filter(function (t) {
      return t.canvas === e;
    }).pop();
  };

  var oo =
  /*#__PURE__*/
  function () {
    function oo(t, e) {
      var _this2 = this;

      _classCallCheck(this, oo);

      var n = this,
          o = this.config = new qn(e),
          s = eo(t),
          r = no(s);
      if (r) throw new Error("Canvas is already in use. Chart with ID '" + r.id + "' must be destroyed before the canvas can be reused.");
      var l = o.createResolver(o.chartOptionScopes(), n.getContext());
      this.platform = new (o.platform || on(s))();
      var c = n.platform.acquireContext(s, l.aspectRatio),
          h = c && c.canvas,
          d = h && h.height,
          u = h && h.width;
      this.id = j(), this.ctx = c, this.canvas = h, this.width = u, this.height = d, this._options = l, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this.scale = void 0, this._plugins = new Fn(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = i(function () {
        return _this2.update("resize");
      }, l.resizeDelay || 0), io[n.id] = n, c && h ? (a.listen(n, "complete", Jn), a.listen(n, "progress", to), n._initialize(), n.attached && n.update()) : console.error("Failed to create chart: can't acquire context from the given item");
    }

    _createClass(oo, [{
      key: "_initialize",
      value: function _initialize() {
        var t = this;
        return t.notifyPlugins("beforeInit"), t.options.responsive ? t.resize() : we(t, t.options.devicePixelRatio), t.bindEvents(), t.notifyPlugins("afterInit"), t;
      }
    }, {
      key: "clear",
      value: function clear() {
        return qt(this.canvas, this.ctx), this;
      }
    }, {
      key: "stop",
      value: function stop() {
        return a.stop(this), this;
      }
    }, {
      key: "resize",
      value: function resize(t, e) {
        a.running(this) ? this._resizeBeforeDraw = {
          width: t,
          height: e
        } : this._resize(t, e);
      }
    }, {
      key: "_resize",
      value: function _resize(t, e) {
        var i = this,
            n = i.options,
            o = i.canvas,
            s = n.maintainAspectRatio && i.aspectRatio,
            a = i.platform.getMaximumSize(o, t, e, s),
            r = n.devicePixelRatio || i.platform.getDevicePixelRatio();
        i.width = a.width, i.height = a.height, i._aspectRatio = i.aspectRatio, we(i, r, !0) && (i.notifyPlugins("resize", {
          size: a
        }), Q(n.onResize, [i, a], i), i.attached && i._doResize() && i.render());
      }
    }, {
      key: "ensureScalesHaveIDs",
      value: function ensureScalesHaveIDs() {
        J(this.options.scales || {}, function (t, e) {
          t.id = e;
        });
      }
    }, {
      key: "buildOrUpdateScales",
      value: function buildOrUpdateScales() {
        var t = this,
            e = t.options,
            i = e.scales,
            n = t.scales,
            o = Object.keys(n).reduce(function (t, e) {
          return t[e] = !1, t;
        }, {});
        var s = [];
        i && (s = s.concat(Object.keys(i).map(function (t) {
          var e = i[t],
              n = Nn(t, e),
              o = "r" === n,
              s = "x" === n;
          return {
            options: e,
            dposition: o ? "chartArea" : s ? "bottom" : "left",
            dtype: o ? "radialLinear" : s ? "category" : "linear"
          };
        }))), J(s, function (i) {
          var s = i.options,
              a = s.id,
              r = Nn(a, s),
              l = K(s.type, i.dtype);
          void 0 !== s.position && Zn(s.position, r) === Zn(i.dposition) || (s.position = i.dposition), o[a] = !0;
          var c = null;
          if (a in n && n[a].type === l) c = n[a];else {
            c = new (zn.getScale(l))({
              id: a,
              type: l,
              ctx: t.ctx,
              chart: t
            }), n[c.id] = c;
          }
          c.init(s, e);
        }), J(o, function (t, e) {
          t || delete n[e];
        }), J(n, function (e) {
          ti.configure(t, e, e.options), ti.addBox(t, e);
        });
      }
    }, {
      key: "_updateMetasets",
      value: function _updateMetasets() {
        var t = this,
            e = t._metasets,
            i = t.data.datasets.length,
            n = e.length;

        if (e.sort(function (t, e) {
          return t.index - e.index;
        }), n > i) {
          for (var _e27 = i; _e27 < n; ++_e27) {
            t._destroyDatasetMeta(_e27);
          }

          e.splice(i, n - i);
        }

        t._sortedMetasets = e.slice(0).sort(Qn("order", "index"));
      }
    }, {
      key: "_removeUnreferencedMetasets",
      value: function _removeUnreferencedMetasets() {
        var t = this,
            e = t._metasets,
            i = t.data.datasets;
        e.length > i.length && delete t._stacks, e.forEach(function (e, n) {
          0 === i.filter(function (t) {
            return t === e._dataset;
          }).length && t._destroyDatasetMeta(n);
        });
      }
    }, {
      key: "buildOrUpdateControllers",
      value: function buildOrUpdateControllers() {
        var t = this,
            e = [],
            i = t.data.datasets;
        var n, o;

        for (t._removeUnreferencedMetasets(), n = 0, o = i.length; n < o; n++) {
          var _o22 = i[n];

          var _s18 = t.getDatasetMeta(n);

          var _a18 = _o22.type || t.config.type;

          if (_s18.type && _s18.type !== _a18 && (t._destroyDatasetMeta(n), _s18 = t.getDatasetMeta(n)), _s18.type = _a18, _s18.indexAxis = _o22.indexAxis || Wn(_a18, t.options), _s18.order = _o22.order || 0, _s18.index = n, _s18.label = "" + _o22.label, _s18.visible = t.isDatasetVisible(n), _s18.controller) _s18.controller.updateIndex(n), _s18.controller.linkScales();else {
            var _i33 = zn.getController(_a18),
                _xt$datasets$_a = xt.datasets[_a18],
                _o23 = _xt$datasets$_a.datasetElementType,
                _r8 = _xt$datasets$_a.dataElementType;

            Object.assign(_i33.prototype, {
              dataElementType: zn.getElement(_r8),
              datasetElementType: _o23 && zn.getElement(_o23)
            }), _s18.controller = new _i33(t, n), e.push(_s18.controller);
          }
        }

        return t._updateMetasets(), e;
      }
    }, {
      key: "_resetElements",
      value: function _resetElements() {
        var t = this;
        J(t.data.datasets, function (e, i) {
          t.getDatasetMeta(i).controller.reset();
        }, t);
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElements(), this.notifyPlugins("reset");
      }
    }, {
      key: "update",
      value: function update(t) {
        var e = this,
            i = e.config;
        i.update(), e._options = i.createResolver(i.chartOptionScopes(), e.getContext()), J(e.scales, function (t) {
          ti.removeBox(e, t);
        });
        var n = e._animationsDisabled = !e.options.animation;
        e.ensureScalesHaveIDs(), e.buildOrUpdateScales();
        var o = new Set(Object.keys(e._listeners)),
            s = new Set(e.options.events);
        if (ut(o, s) && !!this._responsiveListeners === e.options.responsive || (e.unbindEvents(), e.bindEvents()), e._plugins.invalidate(), !1 === e.notifyPlugins("beforeUpdate", {
          mode: t,
          cancelable: !0
        })) return;
        var a = e.buildOrUpdateControllers();
        e.notifyPlugins("beforeElementsUpdate");
        var r = 0;

        for (var _t42 = 0, _i34 = e.data.datasets.length; _t42 < _i34; _t42++) {
          var _e$getDatasetMeta = e.getDatasetMeta(_t42),
              _i35 = _e$getDatasetMeta.controller,
              _o24 = !n && -1 === a.indexOf(_i35);

          _i35.buildOrUpdateElements(_o24), r = Math.max(+_i35.getMaxOverflow(), r);
        }

        e._minPadding = r, e._updateLayout(r), n || J(a, function (t) {
          t.reset();
        }), e._updateDatasets(t), e.notifyPlugins("afterUpdate", {
          mode: t
        }), e._layers.sort(Qn("z", "_idx")), e._lastEvent && e._eventHandler(e._lastEvent, !0), e.render();
      }
    }, {
      key: "_updateLayout",
      value: function _updateLayout(t) {
        var e = this;
        if (!1 === e.notifyPlugins("beforeLayout", {
          cancelable: !0
        })) return;
        ti.update(e, e.width, e.height, t);
        var i = e.chartArea,
            n = i.width <= 0 || i.height <= 0;
        e._layers = [], J(e.boxes, function (t) {
          var _e$_layers;

          n && "chartArea" === t.position || (t.configure && t.configure(), (_e$_layers = e._layers).push.apply(_e$_layers, _toConsumableArray(t._layers())));
        }, e), e._layers.forEach(function (t, e) {
          t._idx = e;
        }), e.notifyPlugins("afterLayout");
      }
    }, {
      key: "_updateDatasets",
      value: function _updateDatasets(t) {
        var e = this,
            i = "function" == typeof t;

        if (!1 !== e.notifyPlugins("beforeDatasetsUpdate", {
          mode: t,
          cancelable: !0
        })) {
          for (var _n30 = 0, _o25 = e.data.datasets.length; _n30 < _o25; ++_n30) {
            e._updateDataset(_n30, i ? t({
              datasetIndex: _n30
            }) : t);
          }

          e.notifyPlugins("afterDatasetsUpdate", {
            mode: t
          });
        }
      }
    }, {
      key: "_updateDataset",
      value: function _updateDataset(t, e) {
        var i = this,
            n = i.getDatasetMeta(t),
            o = {
          meta: n,
          index: t,
          mode: e,
          cancelable: !0
        };
        !1 !== i.notifyPlugins("beforeDatasetUpdate", o) && (n.controller._update(e), o.cancelable = !1, i.notifyPlugins("afterDatasetUpdate", o));
      }
    }, {
      key: "render",
      value: function render() {
        var t = this;
        !1 !== t.notifyPlugins("beforeRender", {
          cancelable: !0
        }) && (a.has(t) ? t.attached && !a.running(t) && a.start(t) : (t.draw(), Jn({
          chart: t
        })));
      }
    }, {
      key: "draw",
      value: function draw() {
        var t = this;
        var e;

        if (t._resizeBeforeDraw) {
          var _t$_resizeBeforeDraw = t._resizeBeforeDraw,
              _e28 = _t$_resizeBeforeDraw.width,
              _i36 = _t$_resizeBeforeDraw.height;
          t._resize(_e28, _i36), t._resizeBeforeDraw = null;
        }

        if (t.clear(), t.width <= 0 || t.height <= 0) return;
        if (!1 === t.notifyPlugins("beforeDraw", {
          cancelable: !0
        })) return;
        var i = t._layers;

        for (e = 0; e < i.length && i[e].z <= 0; ++e) {
          i[e].draw(t.chartArea);
        }

        for (t._drawDatasets(); e < i.length; ++e) {
          i[e].draw(t.chartArea);
        }

        t.notifyPlugins("afterDraw");
      }
    }, {
      key: "_getSortedDatasetMetas",
      value: function _getSortedDatasetMetas(t) {
        var e = this._sortedMetasets,
            i = [];
        var n, o;

        for (n = 0, o = e.length; n < o; ++n) {
          var _o26 = e[n];
          t && !_o26.visible || i.push(_o26);
        }

        return i;
      }
    }, {
      key: "getSortedVisibleDatasetMetas",
      value: function getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0);
      }
    }, {
      key: "_drawDatasets",
      value: function _drawDatasets() {
        var t = this;
        if (!1 === t.notifyPlugins("beforeDatasetsDraw", {
          cancelable: !0
        })) return;
        var e = t.getSortedVisibleDatasetMetas();

        for (var _i37 = e.length - 1; _i37 >= 0; --_i37) {
          t._drawDataset(e[_i37]);
        }

        t.notifyPlugins("afterDatasetsDraw");
      }
    }, {
      key: "_drawDataset",
      value: function _drawDataset(t) {
        var e = this,
            i = e.ctx,
            n = t._clip,
            o = !n.disabled,
            s = e.chartArea,
            a = {
          meta: t,
          index: t.index,
          cancelable: !0
        };
        !1 !== e.notifyPlugins("beforeDatasetDraw", a) && (o && Zt(i, {
          left: !1 === n.left ? 0 : s.left - n.left,
          right: !1 === n.right ? e.width : s.right + n.right,
          top: !1 === n.top ? 0 : s.top - n.top,
          bottom: !1 === n.bottom ? e.height : s.bottom + n.bottom
        }), t.controller.draw(), o && Qt(i), a.cancelable = !1, e.notifyPlugins("afterDatasetDraw", a));
      }
    }, {
      key: "getElementsAtEventForMode",
      value: function getElementsAtEventForMode(t, e, i, n) {
        var o = Ae.modes[e];
        return "function" == typeof o ? o(this, t, i, n) : [];
      }
    }, {
      key: "getDatasetMeta",
      value: function getDatasetMeta(t) {
        var e = this.data.datasets[t],
            i = this._metasets;
        var n = i.filter(function (t) {
          return t && t._dataset === e;
        }).pop();
        return n || (n = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: e && e.order || 0,
          index: t,
          _dataset: e,
          _parsed: [],
          _sorted: !1
        }, i.push(n)), n;
      }
    }, {
      key: "getContext",
      value: function getContext() {
        return this.$context || (this.$context = {
          chart: this,
          type: "chart"
        });
      }
    }, {
      key: "getVisibleDatasetCount",
      value: function getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
      }
    }, {
      key: "isDatasetVisible",
      value: function isDatasetVisible(t) {
        var e = this.data.datasets[t];
        if (!e) return !1;
        var i = this.getDatasetMeta(t);
        return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden;
      }
    }, {
      key: "setDatasetVisibility",
      value: function setDatasetVisibility(t, e) {
        this.getDatasetMeta(t).hidden = !e;
      }
    }, {
      key: "toggleDataVisibility",
      value: function toggleDataVisibility(t) {
        this._hiddenIndices[t] = !this._hiddenIndices[t];
      }
    }, {
      key: "getDataVisibility",
      value: function getDataVisibility(t) {
        return !this._hiddenIndices[t];
      }
    }, {
      key: "_updateVisibility",
      value: function _updateVisibility(t, e, i) {
        var n = this,
            o = i ? "show" : "hide",
            s = n.getDatasetMeta(t),
            a = s.controller._resolveAnimations(void 0, o);

        ht(e) ? (s.data[e].hidden = !i, n.update()) : (n.setDatasetVisibility(t, i), a.update(s, {
          visible: i
        }), n.update(function (e) {
          return e.datasetIndex === t ? o : void 0;
        }));
      }
    }, {
      key: "hide",
      value: function hide(t, e) {
        this._updateVisibility(t, e, !1);
      }
    }, {
      key: "show",
      value: function show(t, e) {
        this._updateVisibility(t, e, !0);
      }
    }, {
      key: "_destroyDatasetMeta",
      value: function _destroyDatasetMeta(t) {
        var e = this,
            i = e._metasets && e._metasets[t];
        i && i.controller && (i.controller._destroy(), delete e._metasets[t]);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var t = this,
            e = t.canvas,
            i = t.ctx;
        var n, o;

        for (t.stop(), a.remove(t), n = 0, o = t.data.datasets.length; n < o; ++n) {
          t._destroyDatasetMeta(n);
        }

        t.config.clearCache(), e && (t.unbindEvents(), qt(e, i), t.platform.releaseContext(i), t.canvas = null, t.ctx = null), t.notifyPlugins("destroy"), delete io[t.id];
      }
    }, {
      key: "toBase64Image",
      value: function toBase64Image() {
        var _this$canvas;

        return (_this$canvas = this.canvas).toDataURL.apply(_this$canvas, arguments);
      }
    }, {
      key: "bindEvents",
      value: function bindEvents() {
        this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
      }
    }, {
      key: "bindUserEvents",
      value: function bindUserEvents() {
        var t = this,
            e = t._listeners,
            i = t.platform,
            n = function n(e, i, _n31) {
          e.offsetX = i, e.offsetY = _n31, t._eventHandler(e);
        };

        J(t.options.events, function (o) {
          return function (n, o) {
            i.addEventListener(t, n, o), e[n] = o;
          }(o, n);
        });
      }
    }, {
      key: "bindResponsiveEvents",
      value: function bindResponsiveEvents() {
        var t = this;
        t._responsiveListeners || (t._responsiveListeners = {});

        var e = t._responsiveListeners,
            i = t.platform,
            n = function n(_n32, o) {
          i.addEventListener(t, _n32, o), e[_n32] = o;
        },
            o = function o(n, _o27) {
          e[n] && (i.removeEventListener(t, n, _o27), delete e[n]);
        },
            s = function s(e, i) {
          t.canvas && t.resize(e, i);
        };

        var a;

        var r = function r() {
          o("attach", r), t.attached = !0, t.resize(), n("resize", s), n("detach", a);
        };

        a = function a() {
          t.attached = !1, o("resize", s), n("attach", r);
        }, i.isAttached(t.canvas) ? r() : a();
      }
    }, {
      key: "unbindEvents",
      value: function unbindEvents() {
        var t = this;
        J(t._listeners, function (e, i) {
          t.platform.removeEventListener(t, i, e);
        }), t._listeners = {}, J(t._responsiveListeners, function (e, i) {
          t.platform.removeEventListener(t, i, e);
        }), t._responsiveListeners = void 0;
      }
    }, {
      key: "updateHoverStyle",
      value: function updateHoverStyle(t, e, i) {
        var n = i ? "set" : "remove";
        var o, s, a, r;

        for ("dataset" === e && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + n + "DatasetHoverStyle"]()), a = 0, r = t.length; a < r; ++a) {
          s = t[a];

          var _e29 = s && this.getDatasetMeta(s.datasetIndex).controller;

          _e29 && _e29[n + "HoverStyle"](s.element, s.datasetIndex, s.index);
        }
      }
    }, {
      key: "getActiveElements",
      value: function getActiveElements() {
        return this._active || [];
      }
    }, {
      key: "setActiveElements",
      value: function setActiveElements(t) {
        var e = this,
            i = e._active || [],
            n = t.map(function (_ref7) {
          var t = _ref7.datasetIndex,
              i = _ref7.index;
          var n = e.getDatasetMeta(t);
          if (!n) throw new Error("No dataset found at index " + t);
          return {
            datasetIndex: t,
            element: n.data[i],
            index: i
          };
        });
        !tt(n, i) && (e._active = n, e._updateHoverStyles(n, i));
      }
    }, {
      key: "notifyPlugins",
      value: function notifyPlugins(t, e, i) {
        return this._plugins.notify(this, t, e, i);
      }
    }, {
      key: "_updateHoverStyles",
      value: function _updateHoverStyles(t, e, i) {
        var n = this,
            o = n.options.hover,
            s = function s(t, e) {
          return t.filter(function (t) {
            return !e.some(function (e) {
              return t.datasetIndex === e.datasetIndex && t.index === e.index;
            });
          });
        },
            a = s(e, t),
            r = i ? t : s(t, e);

        a.length && n.updateHoverStyle(a, o.mode, !1), r.length && o.mode && n.updateHoverStyle(r, o.mode, !0);
      }
    }, {
      key: "_eventHandler",
      value: function _eventHandler(t, e) {
        var _this3 = this;

        var i = this,
            n = {
          event: t,
          replay: e,
          cancelable: !0
        },
            o = function o(e) {
          return (e.options.events || _this3.options.events).includes(t.type);
        };

        if (!1 === i.notifyPlugins("beforeEvent", n, o)) return;

        var s = i._handleEvent(t, e);

        return n.cancelable = !1, i.notifyPlugins("afterEvent", n, o), (s || n.changed) && i.render(), i;
      }
    }, {
      key: "_handleEvent",
      value: function _handleEvent(t, e) {
        var i = this,
            _i$_active = i._active,
            n = _i$_active === void 0 ? [] : _i$_active,
            o = i.options,
            s = o.hover,
            a = e;
        var r = [],
            l = !1,
            c = null;
        return "mouseout" !== t.type && (r = i.getElementsAtEventForMode(t, s.mode, s, a), c = "click" === t.type ? i._lastEvent : t), i._lastEvent = null, Gt(t, i.chartArea, i._minPadding) && (Q(o.onHover, [t, r, i], i), "mouseup" !== t.type && "click" !== t.type && "contextmenu" !== t.type || Q(o.onClick, [t, r, i], i)), l = !tt(r, n), (l || e) && (i._active = r, i._updateHoverStyles(r, n, e)), i._lastEvent = c, l;
      }
    }, {
      key: "aspectRatio",
      get: function get() {
        var _this$options4 = this.options,
            t = _this$options4.aspectRatio,
            e = _this$options4.maintainAspectRatio,
            i = this.width,
            n = this.height,
            o = this._aspectRatio;
        return $(t) ? e && o ? o : n ? i / n : null : t;
      }
    }, {
      key: "data",
      get: function get() {
        return this.config.data;
      },
      set: function set(t) {
        this.config.data = t;
      }
    }, {
      key: "options",
      get: function get() {
        return this._options;
      },
      set: function set(t) {
        this.config.options = t;
      }
    }]);

    return oo;
  }();

  var so = function so() {
    return J(oo.instances, function (t) {
      return t._plugins.invalidate();
    });
  },
      ao = !0;

  function ro() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
  }

  Object.defineProperties(oo, {
    defaults: {
      enumerable: ao,
      value: xt
    },
    instances: {
      enumerable: ao,
      value: io
    },
    overrides: {
      enumerable: ao,
      value: ft
    },
    registry: {
      enumerable: ao,
      value: zn
    },
    version: {
      enumerable: ao,
      value: "3.5.0"
    },
    getChart: {
      enumerable: ao,
      value: no
    },
    register: {
      enumerable: ao,
      value: function value() {
        zn.add.apply(zn, arguments), so();
      }
    },
    unregister: {
      enumerable: ao,
      value: function value() {
        zn.remove.apply(zn, arguments), so();
      }
    }
  });

  var lo =
  /*#__PURE__*/
  function () {
    function lo(t) {
      _classCallCheck(this, lo);

      this.options = t || {};
    }

    _createClass(lo, [{
      key: "formats",
      value: function formats() {
        return ro();
      }
    }, {
      key: "parse",
      value: function parse(t, e) {
        return ro();
      }
    }, {
      key: "format",
      value: function format(t, e) {
        return ro();
      }
    }, {
      key: "add",
      value: function add(t, e, i) {
        return ro();
      }
    }, {
      key: "diff",
      value: function diff(t, e, i) {
        return ro();
      }
    }, {
      key: "startOf",
      value: function startOf(t, e, i) {
        return ro();
      }
    }, {
      key: "endOf",
      value: function endOf(t, e) {
        return ro();
      }
    }]);

    return lo;
  }();

  lo.override = function (t) {
    Object.assign(lo.prototype, t);
  };

  var co = {
    _date: lo
  };

  function ho(t) {
    var e = function (t) {
      if (!t._cache.$bar) {
        var _e30 = t.getMatchingVisibleMetas("bar");

        var _i38 = [];

        for (var _n33 = 0, _o28 = _e30.length; _n33 < _o28; _n33++) {
          _i38 = _i38.concat(_e30[_n33].controller.getAllParsedValues(t));
        }

        t._cache.$bar = de(_i38.sort(function (t, e) {
          return t - e;
        }));
      }

      return t._cache.$bar;
    }(t);

    var i,
        n,
        o,
        s,
        a = t._length;

    var r = function r() {
      32767 !== o && -32768 !== o && (ht(s) && (a = Math.min(a, Math.abs(o - s) || a)), s = o);
    };

    for (i = 0, n = e.length; i < n; ++i) {
      o = t.getPixelForValue(e[i]), r();
    }

    for (s = void 0, i = 0, n = t.ticks.length; i < n; ++i) {
      o = t.getPixelForTick(i), r();
    }

    return a;
  }

  function uo(t, e, i, n) {
    return Y(t) ? function (t, e, i, n) {
      var o = i.parse(t[0], n),
          s = i.parse(t[1], n),
          a = Math.min(o, s),
          r = Math.max(o, s);
      var l = a,
          c = r;
      Math.abs(a) > Math.abs(r) && (l = r, c = a), e[i.axis] = c, e._custom = {
        barStart: l,
        barEnd: c,
        start: o,
        end: s,
        min: a,
        max: r
      };
    }(t, e, i, n) : e[i.axis] = i.parse(t, n), e;
  }

  function fo(t, e, i, n) {
    var o = t.iScale,
        s = t.vScale,
        a = o.getLabels(),
        r = o === s,
        l = [];
    var c, h, d, u;

    for (c = i, h = i + n; c < h; ++c) {
      u = e[c], d = {}, d[o.axis] = r || o.parse(a[c], c), l.push(uo(u, d, s, c));
    }

    return l;
  }

  function go(t) {
    return t && void 0 !== t.barStart && void 0 !== t.barEnd;
  }

  function po(t, e, i, n) {
    var o = e.borderSkipped;
    var s = {};
    if (!o) return void (t.borderSkipped = s);

    var _ref8 = function (t) {
      var e, i, n, o, s;
      return t.horizontal ? (e = t.base > t.x, i = "left", n = "right") : (e = t.base < t.y, i = "bottom", n = "top"), e ? (o = "end", s = "start") : (o = "start", s = "end"), {
        start: i,
        end: n,
        reverse: e,
        top: o,
        bottom: s
      };
    }(t),
        a = _ref8.start,
        r = _ref8.end,
        l = _ref8.reverse,
        c = _ref8.top,
        h = _ref8.bottom;

    "middle" === o && i && (t.enableBorderRadius = !0, (i._top || 0) === n ? o = c : (i._bottom || 0) === n ? o = h : (s[mo(h, a, r, l)] = !0, o = c)), s[mo(o, a, r, l)] = !0, t.borderSkipped = s;
  }

  function mo(t, e, i, n) {
    var o, s, a;
    return n ? (a = i, t = xo(t = (o = t) === (s = e) ? a : o === a ? s : o, i, e)) : t = xo(t, e, i), t;
  }

  function xo(t, e, i) {
    return "start" === t ? e : "end" === t ? i : t;
  }

  var bo =
  /*#__PURE__*/
  function (_wn) {
    _inherits(bo, _wn);

    function bo() {
      _classCallCheck(this, bo);

      return _possibleConstructorReturn(this, _getPrototypeOf(bo).apply(this, arguments));
    }

    _createClass(bo, [{
      key: "parsePrimitiveData",
      value: function parsePrimitiveData(t, e, i, n) {
        return fo(t, e, i, n);
      }
    }, {
      key: "parseArrayData",
      value: function parseArrayData(t, e, i, n) {
        return fo(t, e, i, n);
      }
    }, {
      key: "parseObjectData",
      value: function parseObjectData(t, e, i, n) {
        var o = t.iScale,
            s = t.vScale,
            _this$_parsing2 = this._parsing,
            _this$_parsing2$xAxis = _this$_parsing2.xAxisKey,
            a = _this$_parsing2$xAxis === void 0 ? "x" : _this$_parsing2$xAxis,
            _this$_parsing2$yAxis = _this$_parsing2.yAxisKey,
            r = _this$_parsing2$yAxis === void 0 ? "y" : _this$_parsing2$yAxis,
            l = "x" === o.axis ? a : r,
            c = "x" === s.axis ? a : r,
            h = [];
        var d, u, f, g;

        for (d = i, u = i + n; d < u; ++d) {
          g = e[d], f = {}, f[o.axis] = o.parse(lt(g, l), d), h.push(uo(lt(g, c), f, s, d));
        }

        return h;
      }
    }, {
      key: "updateRangeFromParsed",
      value: function updateRangeFromParsed(t, e, i, n) {
        _get2(_getPrototypeOf(bo.prototype), "updateRangeFromParsed", this).call(this, t, e, i, n);

        var o = i._custom;
        o && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max));
      }
    }, {
      key: "getMaxOverflow",
      value: function getMaxOverflow() {
        return 0;
      }
    }, {
      key: "getLabelAndValue",
      value: function getLabelAndValue(t) {
        var e = this._cachedMeta,
            i = e.iScale,
            n = e.vScale,
            o = this.getParsed(t),
            s = o._custom,
            a = go(s) ? "[" + s.start + ", " + s.end + "]" : "" + n.getLabelForValue(o[n.axis]);
        return {
          label: "" + i.getLabelForValue(o[i.axis]),
          value: a
        };
      }
    }, {
      key: "initialize",
      value: function initialize() {
        var t = this;
        t.enableOptionSharing = !0, _get2(_getPrototypeOf(bo.prototype), "initialize", this).call(this);
        t._cachedMeta.stack = t.getDataset().stack;
      }
    }, {
      key: "update",
      value: function update(t) {
        var e = this._cachedMeta;
        this.updateElements(e.data, 0, e.data.length, t);
      }
    }, {
      key: "updateElements",
      value: function updateElements(t, e, i, n) {
        var o = this,
            s = "reset" === n,
            a = o.index,
            r = o._cachedMeta.vScale,
            l = r.getBasePixel(),
            c = r.isHorizontal(),
            h = o._getRuler(),
            d = o.resolveDataElementOptions(e, n),
            u = o.getSharedOptions(d),
            f = o.includeOptions(n, u);

        o.updateSharedOptions(u, n, d);

        for (var _d6 = e; _d6 < e + i; _d6++) {
          var _e31 = o.getParsed(_d6),
              _i39 = s || $(_e31[r.axis]) ? {
            base: l,
            head: l
          } : o._calculateBarValuePixels(_d6),
              _g2 = o._calculateBarIndexPixels(_d6, h),
              _p = (_e31._stacks || {})[r.axis],
              _m = {
            horizontal: c,
            base: _i39.base,
            enableBorderRadius: !_p || go(_e31._custom) || a === _p._top || a === _p._bottom,
            x: c ? _i39.head : _g2.center,
            y: c ? _g2.center : _i39.head,
            height: c ? _g2.size : Math.abs(_i39.size),
            width: c ? Math.abs(_i39.size) : _g2.size
          };

          f && (_m.options = u || o.resolveDataElementOptions(_d6, t[_d6].active ? "active" : n)), po(_m, _m.options || t[_d6].options, _p, a), o.updateElement(t[_d6], _d6, _m, n);
        }
      }
    }, {
      key: "_getStacks",
      value: function _getStacks(t, e) {
        var i = this._cachedMeta.iScale,
            n = i.getMatchingVisibleMetas(this._type),
            o = i.options.stacked,
            s = n.length,
            a = [];
        var r, l;

        for (r = 0; r < s; ++r) {
          if (l = n[r], l.controller.options.grouped) {
            if (void 0 !== e) {
              var _t43 = l.controller.getParsed(e)[l.controller._cachedMeta.vScale.axis];

              if ($(_t43) || isNaN(_t43)) continue;
            }

            if ((!1 === o || -1 === a.indexOf(l.stack) || void 0 === o && void 0 === l.stack) && a.push(l.stack), l.index === t) break;
          }
        }

        return a.length || a.push(void 0), a;
      }
    }, {
      key: "_getStackCount",
      value: function _getStackCount(t) {
        return this._getStacks(void 0, t).length;
      }
    }, {
      key: "_getStackIndex",
      value: function _getStackIndex(t, e, i) {
        var n = this._getStacks(t, i),
            o = void 0 !== e ? n.indexOf(e) : -1;

        return -1 === o ? n.length - 1 : o;
      }
    }, {
      key: "_getRuler",
      value: function _getRuler() {
        var t = this,
            e = t.options,
            i = t._cachedMeta,
            n = i.iScale,
            o = [];
        var s, a;

        for (s = 0, a = i.data.length; s < a; ++s) {
          o.push(n.getPixelForValue(t.getParsed(s)[n.axis], s));
        }

        var r = e.barThickness;
        return {
          min: r || ho(n),
          pixels: o,
          start: n._startPixel,
          end: n._endPixel,
          stackCount: t._getStackCount(),
          scale: n,
          grouped: e.grouped,
          ratio: r ? 1 : e.categoryPercentage * e.barPercentage
        };
      }
    }, {
      key: "_calculateBarValuePixels",
      value: function _calculateBarValuePixels(t) {
        var e = this,
            _e$_cachedMeta = e._cachedMeta,
            i = _e$_cachedMeta.vScale,
            n = _e$_cachedMeta._stacked,
            _e$options2 = e.options,
            o = _e$options2.base,
            s = _e$options2.minBarLength,
            a = o || 0,
            r = e.getParsed(t),
            l = r._custom,
            c = go(l);
        var h,
            d,
            u = r[i.axis],
            f = 0,
            g = n ? e.applyStack(i, r, n) : u;
        g !== u && (f = g - u, g = u), c && (u = l.barStart, g = l.barEnd - l.barStart, 0 !== u && Dt(u) !== Dt(l.barEnd) && (f = 0), f += u);
        var p = $(o) || c ? f : o;
        var m = i.getPixelForValue(p);

        if (h = e.chart.getDataVisibility(t) ? i.getPixelForValue(f + g) : m, d = h - m, Math.abs(d) < s && (d = function (t, e, i) {
          return 0 !== t ? Dt(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1);
        }(d, i, a) * s, u === a && (m -= d / 2), h = m + d), m === i.getPixelForValue(a)) {
          var _t44 = Dt(d) * i.getLineWidthForValue(a) / 2;

          m += _t44, d -= _t44;
        }

        return {
          size: d,
          base: m,
          head: h,
          center: h + d / 2
        };
      }
    }, {
      key: "_calculateBarIndexPixels",
      value: function _calculateBarIndexPixels(t, e) {
        var i = this,
            n = e.scale,
            o = i.options,
            s = o.skipNull,
            a = K(o.maxBarThickness, 1 / 0);
        var r, l;

        if (e.grouped) {
          var _n34 = s ? i._getStackCount(t) : e.stackCount,
              _c12 = "flex" === o.barThickness ? function (t, e, i, n) {
            var o = e.pixels,
                s = o[t];
            var a = t > 0 ? o[t - 1] : null,
                r = t < o.length - 1 ? o[t + 1] : null;
            var l = i.categoryPercentage;
            null === a && (a = s - (null === r ? e.end - e.start : r - s)), null === r && (r = s + s - a);
            var c = s - (s - Math.min(a, r)) / 2 * l;
            return {
              chunk: Math.abs(r - a) / 2 * l / n,
              ratio: i.barPercentage,
              start: c
            };
          }(t, e, o, _n34) : function (t, e, i, n) {
            var o = i.barThickness;
            var s, a;
            return $(o) ? (s = e.min * i.categoryPercentage, a = i.barPercentage) : (s = o * n, a = 1), {
              chunk: s / n,
              ratio: a,
              start: e.pixels[t] - s / 2
            };
          }(t, e, o, _n34),
              _h10 = i._getStackIndex(i.index, i._cachedMeta.stack, s ? t : void 0);

          r = _c12.start + _c12.chunk * _h10 + _c12.chunk / 2, l = Math.min(a, _c12.chunk * _c12.ratio);
        } else r = n.getPixelForValue(i.getParsed(t)[n.axis], t), l = Math.min(a, e.min * e.ratio);

        return {
          base: r - l / 2,
          head: r + l / 2,
          center: r,
          size: l
        };
      }
    }, {
      key: "draw",
      value: function draw() {
        var t = this,
            e = t._cachedMeta,
            i = e.vScale,
            n = e.data,
            o = n.length;
        var s = 0;

        for (; s < o; ++s) {
          null !== t.getParsed(s)[i.axis] && n[s].draw(t._ctx);
        }
      }
    }]);

    return bo;
  }(wn);

  bo.id = "bar", bo.defaults = {
    datasetElementType: !1,
    dataElementType: "bar",
    categoryPercentage: .8,
    barPercentage: .9,
    grouped: !0,
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "base", "width", "height"]
      }
    }
  }, bo.overrides = {
    interaction: {
      mode: "index"
    },
    scales: {
      _index_: {
        type: "category",
        offset: !0,
        grid: {
          offset: !0
        }
      },
      _value_: {
        type: "linear",
        beginAtZero: !0
      }
    }
  };

  var _o =
  /*#__PURE__*/
  function (_wn2) {
    _inherits(_o, _wn2);

    function _o() {
      _classCallCheck(this, _o);

      return _possibleConstructorReturn(this, _getPrototypeOf(_o).apply(this, arguments));
    }

    _createClass(_o, [{
      key: "initialize",
      value: function initialize() {
        this.enableOptionSharing = !0, _get2(_getPrototypeOf(_o.prototype), "initialize", this).call(this);
      }
    }, {
      key: "parseObjectData",
      value: function parseObjectData(t, e, i, n) {
        var o = t.xScale,
            s = t.yScale,
            _this$_parsing3 = this._parsing,
            _this$_parsing3$xAxis = _this$_parsing3.xAxisKey,
            a = _this$_parsing3$xAxis === void 0 ? "x" : _this$_parsing3$xAxis,
            _this$_parsing3$yAxis = _this$_parsing3.yAxisKey,
            r = _this$_parsing3$yAxis === void 0 ? "y" : _this$_parsing3$yAxis,
            l = [];
        var c, h, d;

        for (c = i, h = i + n; c < h; ++c) {
          d = e[c], l.push({
            x: o.parse(lt(d, a), c),
            y: s.parse(lt(d, r), c),
            _custom: d && d.r && +d.r
          });
        }

        return l;
      }
    }, {
      key: "getMaxOverflow",
      value: function getMaxOverflow() {
        var _this$_cachedMeta = this._cachedMeta,
            t = _this$_cachedMeta.data,
            e = _this$_cachedMeta._parsed;
        var i = 0;

        for (var _n35 = t.length - 1; _n35 >= 0; --_n35) {
          i = Math.max(i, t[_n35].size() / 2, e[_n35]._custom);
        }

        return i > 0 && i;
      }
    }, {
      key: "getLabelAndValue",
      value: function getLabelAndValue(t) {
        var e = this._cachedMeta,
            i = e.xScale,
            n = e.yScale,
            o = this.getParsed(t),
            s = i.getLabelForValue(o.x),
            a = n.getLabelForValue(o.y),
            r = o._custom;
        return {
          label: e.label,
          value: "(" + s + ", " + a + (r ? ", " + r : "") + ")"
        };
      }
    }, {
      key: "update",
      value: function update(t) {
        var e = this._cachedMeta.data;
        this.updateElements(e, 0, e.length, t);
      }
    }, {
      key: "updateElements",
      value: function updateElements(t, e, i, n) {
        var o = this,
            s = "reset" === n,
            _o$_cachedMeta = o._cachedMeta,
            a = _o$_cachedMeta.iScale,
            r = _o$_cachedMeta.vScale,
            l = o.resolveDataElementOptions(e, n),
            c = o.getSharedOptions(l),
            h = o.includeOptions(n, c),
            d = a.axis,
            u = r.axis;

        for (var _l13 = e; _l13 < e + i; _l13++) {
          var _e32 = t[_l13],
              _i40 = !s && o.getParsed(_l13),
              _c13 = {},
              _f2 = _c13[d] = s ? a.getPixelForDecimal(.5) : a.getPixelForValue(_i40[d]),
              _g3 = _c13[u] = s ? r.getBasePixel() : r.getPixelForValue(_i40[u]);

          _c13.skip = isNaN(_f2) || isNaN(_g3), h && (_c13.options = o.resolveDataElementOptions(_l13, _e32.active ? "active" : n), s && (_c13.options.radius = 0)), o.updateElement(_e32, _l13, _c13, n);
        }

        o.updateSharedOptions(c, n, l);
      }
    }, {
      key: "resolveDataElementOptions",
      value: function resolveDataElementOptions(t, e) {
        var i = this.getParsed(t);

        var n = _get2(_getPrototypeOf(_o.prototype), "resolveDataElementOptions", this).call(this, t, e);

        n.$shared && (n = Object.assign({}, n, {
          $shared: !1
        }));
        var o = n.radius;
        return "active" !== e && (n.radius = 0), n.radius += K(i && i._custom, o), n;
      }
    }]);

    return _o;
  }(wn);

  _o.id = "bubble", _o.defaults = {
    datasetElementType: !1,
    dataElementType: "point",
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "borderWidth", "radius"]
      }
    }
  }, _o.overrides = {
    scales: {
      x: {
        type: "linear"
      },
      y: {
        type: "linear"
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: function title() {
            return "";
          }
        }
      }
    }
  };

  var yo =
  /*#__PURE__*/
  function (_wn3) {
    _inherits(yo, _wn3);

    function yo(t, e) {
      var _this4;

      _classCallCheck(this, yo);

      _this4 = _possibleConstructorReturn(this, _getPrototypeOf(yo).call(this, t, e)), _this4.enableOptionSharing = !0, _this4.innerRadius = void 0, _this4.outerRadius = void 0, _this4.offsetX = void 0, _this4.offsetY = void 0;
      return _this4;
    }

    _createClass(yo, [{
      key: "linkScales",
      value: function linkScales() {}
    }, {
      key: "parse",
      value: function parse(t, e) {
        var i = this.getDataset().data,
            n = this._cachedMeta;
        var o, s;

        for (o = t, s = t + e; o < s; ++o) {
          n._parsed[o] = +i[o];
        }
      }
    }, {
      key: "_getRotation",
      value: function _getRotation() {
        return Et(this.options.rotation - 90);
      }
    }, {
      key: "_getCircumference",
      value: function _getCircumference() {
        return Et(this.options.circumference);
      }
    }, {
      key: "_getRotationExtents",
      value: function _getRotationExtents() {
        var t = _t,
            e = -_t;
        var i = this;

        for (var _n36 = 0; _n36 < i.chart.data.datasets.length; ++_n36) {
          if (i.chart.isDatasetVisible(_n36)) {
            var _o29 = i.chart.getDatasetMeta(_n36).controller,
                _s19 = _o29._getRotation(),
                _a19 = _o29._getCircumference();

            t = Math.min(t, _s19), e = Math.max(e, _s19 + _a19);
          }
        }

        return {
          rotation: t,
          circumference: e - t
        };
      }
    }, {
      key: "update",
      value: function update(t) {
        var e = this,
            i = e.chart,
            n = i.chartArea,
            o = e._cachedMeta,
            s = o.data,
            a = e.getMaxBorderWidth() + e.getMaxOffset(s) + e.options.spacing,
            r = Math.max((Math.min(n.width, n.height) - a) / 2, 0),
            l = Math.min(G(e.options.cutout, r), 1),
            c = e._getRingWeight(e.index),
            _e$_getRotationExtent = e._getRotationExtents(),
            h = _e$_getRotationExtent.circumference,
            d = _e$_getRotationExtent.rotation,
            _ref9 = function (t, e, i) {
          var n = 1,
              o = 1,
              s = 0,
              a = 0;

          if (e < _t) {
            var _r9 = t,
                _l14 = _r9 + e,
                _c14 = Math.cos(_r9),
                _h11 = Math.sin(_r9),
                _d7 = Math.cos(_l14),
                _u4 = Math.sin(_l14),
                _f3 = function _f3(t, e, n) {
              return Nt(t, _r9, _l14, !0) ? 1 : Math.max(e, e * i, n, n * i);
            },
                _g4 = function _g4(t, e, n) {
              return Nt(t, _r9, _l14, !0) ? -1 : Math.min(e, e * i, n, n * i);
            },
                _p2 = _f3(0, _c14, _d7),
                _m2 = _f3(Mt, _h11, _u4),
                _x = _g4(bt, _c14, _d7),
                _b = _g4(bt + Mt, _h11, _u4);

            n = (_p2 - _x) / 2, o = (_m2 - _b) / 2, s = -(_p2 + _x) / 2, a = -(_m2 + _b) / 2;
          }

          return {
            ratioX: n,
            ratioY: o,
            offsetX: s,
            offsetY: a
          };
        }(d, h, l),
            u = _ref9.ratioX,
            f = _ref9.ratioY,
            g = _ref9.offsetX,
            p = _ref9.offsetY,
            m = (n.width - a) / u,
            x = (n.height - a) / f,
            b = Math.max(Math.min(m, x) / 2, 0),
            _ = Z(e.options.radius, b),
            y = (_ - Math.max(_ * l, 0)) / e._getVisibleDatasetWeightTotal();

        e.offsetX = g * _, e.offsetY = p * _, o.total = e.calculateTotal(), e.outerRadius = _ - y * e._getRingWeightOffset(e.index), e.innerRadius = Math.max(e.outerRadius - y * c, 0), e.updateElements(s, 0, s.length, t);
      }
    }, {
      key: "_circumference",
      value: function _circumference(t, e) {
        var i = this,
            n = i.options,
            o = i._cachedMeta,
            s = i._getCircumference();

        return e && n.animation.animateRotate || !this.chart.getDataVisibility(t) || null === o._parsed[t] || o.data[t].hidden ? 0 : i.calculateCircumference(o._parsed[t] * s / _t);
      }
    }, {
      key: "updateElements",
      value: function updateElements(t, e, i, n) {
        var o = this,
            s = "reset" === n,
            a = o.chart,
            r = a.chartArea,
            l = a.options.animation,
            c = (r.left + r.right) / 2,
            h = (r.top + r.bottom) / 2,
            d = s && l.animateScale,
            u = d ? 0 : o.innerRadius,
            f = d ? 0 : o.outerRadius,
            g = o.resolveDataElementOptions(e, n),
            p = o.getSharedOptions(g),
            m = o.includeOptions(n, p);

        var x,
            b = o._getRotation();

        for (x = 0; x < e; ++x) {
          b += o._circumference(x, s);
        }

        for (x = e; x < e + i; ++x) {
          var _e33 = o._circumference(x, s),
              _i41 = t[x],
              _a20 = {
            x: c + o.offsetX,
            y: h + o.offsetY,
            startAngle: b,
            endAngle: b + _e33,
            circumference: _e33,
            outerRadius: f,
            innerRadius: u
          };

          m && (_a20.options = p || o.resolveDataElementOptions(x, _i41.active ? "active" : n)), b += _e33, o.updateElement(_i41, x, _a20, n);
        }

        o.updateSharedOptions(p, n, g);
      }
    }, {
      key: "calculateTotal",
      value: function calculateTotal() {
        var t = this._cachedMeta,
            e = t.data;
        var i,
            n = 0;

        for (i = 0; i < e.length; i++) {
          var _o30 = t._parsed[i];
          null === _o30 || isNaN(_o30) || !this.chart.getDataVisibility(i) || e[i].hidden || (n += Math.abs(_o30));
        }

        return n;
      }
    }, {
      key: "calculateCircumference",
      value: function calculateCircumference(t) {
        var e = this._cachedMeta.total;
        return e > 0 && !isNaN(t) ? _t * (Math.abs(t) / e) : 0;
      }
    }, {
      key: "getLabelAndValue",
      value: function getLabelAndValue(t) {
        var e = this._cachedMeta,
            i = this.chart,
            n = i.data.labels || [],
            o = Oi(e._parsed[t], i.options.locale);
        return {
          label: n[t] || "",
          value: o
        };
      }
    }, {
      key: "getMaxBorderWidth",
      value: function getMaxBorderWidth(t) {
        var e = this;
        var i = 0;
        var n = e.chart;
        var o, s, a, r, l;
        if (!t) for (o = 0, s = n.data.datasets.length; o < s; ++o) {
          if (n.isDatasetVisible(o)) {
            a = n.getDatasetMeta(o), t = a.data, r = a.controller, r !== e && r.configure();
            break;
          }
        }
        if (!t) return 0;

        for (o = 0, s = t.length; o < s; ++o) {
          l = r.resolveDataElementOptions(o), "inner" !== l.borderAlign && (i = Math.max(i, l.borderWidth || 0, l.hoverBorderWidth || 0));
        }

        return i;
      }
    }, {
      key: "getMaxOffset",
      value: function getMaxOffset(t) {
        var e = 0;

        for (var _i42 = 0, _n37 = t.length; _i42 < _n37; ++_i42) {
          var _t45 = this.resolveDataElementOptions(_i42);

          e = Math.max(e, _t45.offset || 0, _t45.hoverOffset || 0);
        }

        return e;
      }
    }, {
      key: "_getRingWeightOffset",
      value: function _getRingWeightOffset(t) {
        var e = 0;

        for (var _i43 = 0; _i43 < t; ++_i43) {
          this.chart.isDatasetVisible(_i43) && (e += this._getRingWeight(_i43));
        }

        return e;
      }
    }, {
      key: "_getRingWeight",
      value: function _getRingWeight(t) {
        return Math.max(K(this.chart.data.datasets[t].weight, 1), 0);
      }
    }, {
      key: "_getVisibleDatasetWeightTotal",
      value: function _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
      }
    }]);

    return yo;
  }(wn);

  yo.id = "doughnut", yo.defaults = {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: {
      animateRotate: !0,
      animateScale: !1
    },
    animations: {
      numbers: {
        type: "number",
        properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
      }
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r"
  }, yo.descriptors = {
    _scriptable: function _scriptable(t) {
      return "spacing" !== t;
    },
    _indexable: function _indexable(t) {
      return "spacing" !== t;
    }
  }, yo.overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels: function generateLabels(t) {
            var e = t.data;

            if (e.labels.length && e.datasets.length) {
              var _i44 = t.legend.options.labels.pointStyle;
              return e.labels.map(function (e, n) {
                var o = t.getDatasetMeta(0).controller.getStyle(n);
                return {
                  text: e,
                  fillStyle: o.backgroundColor,
                  strokeStyle: o.borderColor,
                  lineWidth: o.borderWidth,
                  pointStyle: _i44,
                  hidden: !t.getDataVisibility(n),
                  index: n
                };
              });
            }

            return [];
          }
        },
        onClick: function onClick(t, e, i) {
          i.chart.toggleDataVisibility(e.index), i.chart.update();
        }
      },
      tooltip: {
        callbacks: {
          title: function title() {
            return "";
          },
          label: function label(t) {
            var e = t.label;
            var i = ": " + t.formattedValue;
            return Y(e) ? (e = e.slice(), e[0] += i) : e += i, e;
          }
        }
      }
    }
  };

  var vo =
  /*#__PURE__*/
  function (_wn4) {
    _inherits(vo, _wn4);

    function vo() {
      _classCallCheck(this, vo);

      return _possibleConstructorReturn(this, _getPrototypeOf(vo).apply(this, arguments));
    }

    _createClass(vo, [{
      key: "initialize",
      value: function initialize() {
        this.enableOptionSharing = !0, _get2(_getPrototypeOf(vo.prototype), "initialize", this).call(this);
      }
    }, {
      key: "update",
      value: function update(t) {
        var e = this,
            i = e._cachedMeta,
            n = i.dataset,
            _i$data = i.data,
            o = _i$data === void 0 ? [] : _i$data,
            s = i._dataset,
            a = e.chart._animationsDisabled;

        var _ref10 = function (t, e, i) {
          var n = e.length;
          var o = 0,
              s = n;

          if (t._sorted) {
            var _a21 = t.iScale,
                _r10 = t._parsed,
                _l15 = _a21.axis,
                _a21$getUserBounds = _a21.getUserBounds(),
                _c15 = _a21$getUserBounds.min,
                _h12 = _a21$getUserBounds.max,
                _d8 = _a21$getUserBounds.minDefined,
                _u5 = _a21$getUserBounds.maxDefined;

            _d8 && (o = Ht(Math.min(se(_r10, _a21.axis, _c15).lo, i ? n : se(e, _l15, _a21.getPixelForValue(_c15)).lo), 0, n - 1)), s = _u5 ? Ht(Math.max(se(_r10, _a21.axis, _h12).hi + 1, i ? 0 : se(e, _l15, _a21.getPixelForValue(_h12)).hi + 1), o, n) - o : n - o;
          }

          return {
            start: o,
            count: s
          };
        }(i, o, a),
            r = _ref10.start,
            l = _ref10.count;

        e._drawStart = r, e._drawCount = l, function (t) {
          var e = t.xScale,
              i = t.yScale,
              n = t._scaleRanges,
              o = {
            xmin: e.min,
            xmax: e.max,
            ymin: i.min,
            ymax: i.max
          };
          if (!n) return t._scaleRanges = o, !0;
          var s = n.xmin !== e.min || n.xmax !== e.max || n.ymin !== i.min || n.ymax !== i.max;
          return Object.assign(n, o), s;
        }(i) && (r = 0, l = o.length), n._datasetIndex = e.index, n._decimated = !!s._decimated, n.points = o;
        var c = e.resolveDatasetElementOptions(t);
        e.options.showLine || (c.borderWidth = 0), c.segment = e.options.segment, e.updateElement(n, void 0, {
          animated: !a,
          options: c
        }, t), e.updateElements(o, r, l, t);
      }
    }, {
      key: "updateElements",
      value: function updateElements(t, e, i, n) {
        var o = this,
            s = "reset" === n,
            _o$_cachedMeta2 = o._cachedMeta,
            a = _o$_cachedMeta2.iScale,
            r = _o$_cachedMeta2.vScale,
            l = _o$_cachedMeta2._stacked,
            c = o.resolveDataElementOptions(e, n),
            h = o.getSharedOptions(c),
            d = o.includeOptions(n, h),
            u = a.axis,
            f = r.axis,
            g = o.options.spanGaps,
            p = Tt(g) ? g : Number.POSITIVE_INFINITY,
            m = o.chart._animationsDisabled || s || "none" === n;
        var x = e > 0 && o.getParsed(e - 1);

        for (var _c16 = e; _c16 < e + i; ++_c16) {
          var _e34 = t[_c16],
              _i45 = o.getParsed(_c16),
              _g5 = m ? _e34 : {},
              _b2 = $(_i45[f]),
              _2 = _g5[u] = a.getPixelForValue(_i45[u], _c16),
              _y = _g5[f] = s || _b2 ? r.getBasePixel() : r.getPixelForValue(l ? o.applyStack(r, _i45, l) : _i45[f], _c16);

          _g5.skip = isNaN(_2) || isNaN(_y) || _b2, _g5.stop = _c16 > 0 && _i45[u] - x[u] > p, _g5.parsed = _i45, d && (_g5.options = h || o.resolveDataElementOptions(_c16, _e34.active ? "active" : n)), m || o.updateElement(_e34, _c16, _g5, n), x = _i45;
        }

        o.updateSharedOptions(h, n, c);
      }
    }, {
      key: "getMaxOverflow",
      value: function getMaxOverflow() {
        var t = this,
            e = t._cachedMeta,
            i = e.dataset,
            n = i.options && i.options.borderWidth || 0,
            o = e.data || [];
        if (!o.length) return n;
        var s = o[0].size(t.resolveDataElementOptions(0)),
            a = o[o.length - 1].size(t.resolveDataElementOptions(o.length - 1));
        return Math.max(n, s, a) / 2;
      }
    }, {
      key: "draw",
      value: function draw() {
        var t = this._cachedMeta;
        t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), _get2(_getPrototypeOf(vo.prototype), "draw", this).call(this);
      }
    }]);

    return vo;
  }(wn);

  vo.id = "line", vo.defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1
  }, vo.overrides = {
    scales: {
      _index_: {
        type: "category"
      },
      _value_: {
        type: "linear"
      }
    }
  };

  var wo =
  /*#__PURE__*/
  function (_wn5) {
    _inherits(wo, _wn5);

    function wo(t, e) {
      var _this5;

      _classCallCheck(this, wo);

      _this5 = _possibleConstructorReturn(this, _getPrototypeOf(wo).call(this, t, e)), _this5.innerRadius = void 0, _this5.outerRadius = void 0;
      return _this5;
    }

    _createClass(wo, [{
      key: "getLabelAndValue",
      value: function getLabelAndValue(t) {
        var e = this._cachedMeta,
            i = this.chart,
            n = i.data.labels || [],
            o = Oi(e._parsed[t].r, i.options.locale);
        return {
          label: n[t] || "",
          value: o
        };
      }
    }, {
      key: "update",
      value: function update(t) {
        var e = this._cachedMeta.data;
        this._updateRadius(), this.updateElements(e, 0, e.length, t);
      }
    }, {
      key: "_updateRadius",
      value: function _updateRadius() {
        var t = this,
            e = t.chart,
            i = e.chartArea,
            n = e.options,
            o = Math.min(i.right - i.left, i.bottom - i.top),
            s = Math.max(o / 2, 0),
            a = (s - Math.max(n.cutoutPercentage ? s / 100 * n.cutoutPercentage : 1, 0)) / e.getVisibleDatasetCount();
        t.outerRadius = s - a * t.index, t.innerRadius = t.outerRadius - a;
      }
    }, {
      key: "updateElements",
      value: function updateElements(t, e, i, n) {
        var o = this,
            s = "reset" === n,
            a = o.chart,
            r = o.getDataset(),
            l = a.options.animation,
            c = o._cachedMeta.rScale,
            h = c.xCenter,
            d = c.yCenter,
            u = c.getIndexAngle(0) - .5 * bt;
        var f,
            g = u;
        var p = 360 / o.countVisibleElements();

        for (f = 0; f < e; ++f) {
          g += o._computeAngle(f, n, p);
        }

        for (f = e; f < e + i; f++) {
          var _e35 = t[f];

          var _i46 = g,
              _m3 = g + o._computeAngle(f, n, p),
              _x2 = a.getDataVisibility(f) ? c.getDistanceFromCenterForValue(r.data[f]) : 0;

          g = _m3, s && (l.animateScale && (_x2 = 0), l.animateRotate && (_i46 = _m3 = u));
          var _b3 = {
            x: h,
            y: d,
            innerRadius: 0,
            outerRadius: _x2,
            startAngle: _i46,
            endAngle: _m3,
            options: o.resolveDataElementOptions(f, _e35.active ? "active" : n)
          };
          o.updateElement(_e35, f, _b3, n);
        }
      }
    }, {
      key: "countVisibleElements",
      value: function countVisibleElements() {
        var _this6 = this;

        var t = this.getDataset(),
            e = this._cachedMeta;
        var i = 0;
        return e.data.forEach(function (e, n) {
          !isNaN(t.data[n]) && _this6.chart.getDataVisibility(n) && i++;
        }), i;
      }
    }, {
      key: "_computeAngle",
      value: function _computeAngle(t, e, i) {
        return this.chart.getDataVisibility(t) ? Et(this.resolveDataElementOptions(t, e).angle || i) : 0;
      }
    }]);

    return wo;
  }(wn);

  wo.id = "polarArea", wo.defaults = {
    dataElementType: "arc",
    animation: {
      animateRotate: !0,
      animateScale: !0
    },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
      }
    },
    indexAxis: "r",
    startAngle: 0
  }, wo.overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels: function generateLabels(t) {
            var e = t.data;

            if (e.labels.length && e.datasets.length) {
              var _i47 = t.legend.options.labels.pointStyle;
              return e.labels.map(function (e, n) {
                var o = t.getDatasetMeta(0).controller.getStyle(n);
                return {
                  text: e,
                  fillStyle: o.backgroundColor,
                  strokeStyle: o.borderColor,
                  lineWidth: o.borderWidth,
                  pointStyle: _i47,
                  hidden: !t.getDataVisibility(n),
                  index: n
                };
              });
            }

            return [];
          }
        },
        onClick: function onClick(t, e, i) {
          i.chart.toggleDataVisibility(e.index), i.chart.update();
        }
      },
      tooltip: {
        callbacks: {
          title: function title() {
            return "";
          },
          label: function label(t) {
            return t.chart.data.labels[t.dataIndex] + ": " + t.formattedValue;
          }
        }
      }
    },
    scales: {
      r: {
        type: "radialLinear",
        angleLines: {
          display: !1
        },
        beginAtZero: !0,
        grid: {
          circular: !0
        },
        pointLabels: {
          display: !1
        },
        startAngle: 0
      }
    }
  };

  var Mo =
  /*#__PURE__*/
  function (_yo) {
    _inherits(Mo, _yo);

    function Mo() {
      _classCallCheck(this, Mo);

      return _possibleConstructorReturn(this, _getPrototypeOf(Mo).apply(this, arguments));
    }

    return Mo;
  }(yo);

  Mo.id = "pie", Mo.defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%"
  };

  var ko =
  /*#__PURE__*/
  function (_wn6) {
    _inherits(ko, _wn6);

    function ko() {
      _classCallCheck(this, ko);

      return _possibleConstructorReturn(this, _getPrototypeOf(ko).apply(this, arguments));
    }

    _createClass(ko, [{
      key: "getLabelAndValue",
      value: function getLabelAndValue(t) {
        var e = this._cachedMeta.vScale,
            i = this.getParsed(t);
        return {
          label: e.getLabels()[t],
          value: "" + e.getLabelForValue(i[e.axis])
        };
      }
    }, {
      key: "update",
      value: function update(t) {
        var e = this,
            i = e._cachedMeta,
            n = i.dataset,
            o = i.data || [],
            s = i.iScale.getLabels();

        if (n.points = o, "resize" !== t) {
          var _i48 = e.resolveDatasetElementOptions(t);

          e.options.showLine || (_i48.borderWidth = 0);
          var _a22 = {
            _loop: !0,
            _fullLoop: s.length === o.length,
            options: _i48
          };
          e.updateElement(n, void 0, _a22, t);
        }

        e.updateElements(o, 0, o.length, t);
      }
    }, {
      key: "updateElements",
      value: function updateElements(t, e, i, n) {
        var o = this,
            s = o.getDataset(),
            a = o._cachedMeta.rScale,
            r = "reset" === n;

        for (var _l16 = e; _l16 < e + i; _l16++) {
          var _e36 = t[_l16],
              _i49 = o.resolveDataElementOptions(_l16, _e36.active ? "active" : n),
              _c17 = a.getPointPositionForValue(_l16, s.data[_l16]),
              _h13 = r ? a.xCenter : _c17.x,
              _d9 = r ? a.yCenter : _c17.y,
              _u6 = {
            x: _h13,
            y: _d9,
            angle: _c17.angle,
            skip: isNaN(_h13) || isNaN(_d9),
            options: _i49
          };

          o.updateElement(_e36, _l16, _u6, n);
        }
      }
    }]);

    return ko;
  }(wn);

  ko.id = "radar", ko.defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    indexAxis: "r",
    showLine: !0,
    elements: {
      line: {
        fill: "start"
      }
    }
  }, ko.overrides = {
    aspectRatio: 1,
    scales: {
      r: {
        type: "radialLinear"
      }
    }
  };

  var So =
  /*#__PURE__*/
  function (_vo) {
    _inherits(So, _vo);

    function So() {
      _classCallCheck(this, So);

      return _possibleConstructorReturn(this, _getPrototypeOf(So).apply(this, arguments));
    }

    return So;
  }(vo);

  So.id = "scatter", So.defaults = {
    showLine: !1,
    fill: !1
  }, So.overrides = {
    interaction: {
      mode: "point"
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: function title() {
            return "";
          },
          label: function label(t) {
            return "(" + t.label + ", " + t.formattedValue + ")";
          }
        }
      }
    },
    scales: {
      x: {
        type: "linear"
      },
      y: {
        type: "linear"
      }
    }
  };
  var Po = Object.freeze({
    __proto__: null,
    BarController: bo,
    BubbleController: _o,
    DoughnutController: yo,
    LineController: vo,
    PolarAreaController: wo,
    PieController: Mo,
    RadarController: ko,
    ScatterController: So
  });

  function Do(t, e, i) {
    var n = e.startAngle,
        o = e.pixelMargin,
        s = e.x,
        a = e.y,
        r = e.outerRadius,
        l = e.innerRadius;
    var c = o / r;
    t.beginPath(), t.arc(s, a, r, n - c, i + c), l > o ? (c = o / l, t.arc(s, a, l, i + c, n - c, !0)) : t.arc(s, a, o, i + Mt, n - Mt), t.closePath(), t.clip();
  }

  function Co(t, e, i, n) {
    var o = Ie(t.options.borderRadius, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);

    var s = (i - e) / 2,
        a = Math.min(s, n * e / 2),
        r = function r(t) {
      var e = (i - Math.min(s, t)) * n / 2;
      return Ht(t, 0, Math.min(s, e));
    };

    return {
      outerStart: r(o.outerStart),
      outerEnd: r(o.outerEnd),
      innerStart: Ht(o.innerStart, 0, a),
      innerEnd: Ht(o.innerEnd, 0, a)
    };
  }

  function Oo(t, e, i, n) {
    return {
      x: i + t * Math.cos(e),
      y: n + t * Math.sin(e)
    };
  }

  function To(t, e, i, n, o) {
    var s = e.x,
        a = e.y,
        r = e.startAngle,
        l = e.pixelMargin,
        c = e.innerRadius,
        h = Math.max(e.outerRadius + n + i - l, 0),
        d = c > 0 ? c + n + i + l : 0;
    var u = 0;
    var f = o - r;

    if (n) {
      var _t46 = ((c > 0 ? c - n : 0) + (h > 0 ? h - n : 0)) / 2;

      u = (f - (0 !== _t46 ? f * _t46 / (_t46 + n) : f)) / 2;
    }

    var g = (f - Math.max(.001, f * h - i / bt) / h) / 2,
        p = r + g + u,
        m = o - g - u,
        _Co = Co(e, d, h, m - p),
        x = _Co.outerStart,
        b = _Co.outerEnd,
        _ = _Co.innerStart,
        y = _Co.innerEnd,
        v = h - x,
        w = h - b,
        M = p + x / v,
        k = m - b / w,
        S = d + _,
        P = d + y,
        D = p + _ / S,
        C = m - y / P;

    if (t.beginPath(), t.arc(s, a, h, M, k), b > 0) {
      var _e37 = Oo(w, k, s, a);

      t.arc(_e37.x, _e37.y, b, k, m + Mt);
    }

    var O = Oo(P, m, s, a);

    if (t.lineTo(O.x, O.y), y > 0) {
      var _e38 = Oo(P, C, s, a);

      t.arc(_e38.x, _e38.y, y, m + Mt, C + Math.PI);
    }

    if (t.arc(s, a, d, m - y / d, p + _ / d, !0), _ > 0) {
      var _e39 = Oo(S, D, s, a);

      t.arc(_e39.x, _e39.y, _, D + Math.PI, p - Mt);
    }

    var T = Oo(v, p, s, a);

    if (t.lineTo(T.x, T.y), x > 0) {
      var _e40 = Oo(v, M, s, a);

      t.arc(_e40.x, _e40.y, x, p - Mt, M);
    }

    t.closePath();
  }

  function Ao(t, e, i, n, o) {
    var s = e.options,
        a = "inner" === s.borderAlign;
    s.borderWidth && (a ? (t.lineWidth = 2 * s.borderWidth, t.lineJoin = "round") : (t.lineWidth = s.borderWidth, t.lineJoin = "bevel"), e.fullCircles && function (t, e, i) {
      var n = e.x,
          o = e.y,
          s = e.startAngle,
          a = e.pixelMargin,
          r = e.fullCircles,
          l = Math.max(e.outerRadius - a, 0),
          c = e.innerRadius + a;
      var h;

      for (i && Do(t, e, s + _t), t.beginPath(), t.arc(n, o, c, s + _t, s, !0), h = 0; h < r; ++h) {
        t.stroke();
      }

      for (t.beginPath(), t.arc(n, o, l, s, s + _t), h = 0; h < r; ++h) {
        t.stroke();
      }
    }(t, e, a), a && Do(t, e, o), To(t, e, i, n, o), t.stroke());
  }

  var Lo =
  /*#__PURE__*/
  function (_Mn2) {
    _inherits(Lo, _Mn2);

    function Lo(t) {
      var _this7;

      _classCallCheck(this, Lo);

      _this7 = _possibleConstructorReturn(this, _getPrototypeOf(Lo).call(this)), _this7.options = void 0, _this7.circumference = void 0, _this7.startAngle = void 0, _this7.endAngle = void 0, _this7.innerRadius = void 0, _this7.outerRadius = void 0, _this7.pixelMargin = 0, _this7.fullCircles = 0, t && Object.assign(_assertThisInitialized(_this7), t);
      return _this7;
    }

    _createClass(Lo, [{
      key: "inRange",
      value: function inRange(t, e, i) {
        var n = this.getProps(["x", "y"], i),
            _Ft = Ft(n, {
          x: t,
          y: e
        }),
            o = _Ft.angle,
            s = _Ft.distance,
            _this$getProps2 = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], i),
            a = _this$getProps2.startAngle,
            r = _this$getProps2.endAngle,
            l = _this$getProps2.innerRadius,
            c = _this$getProps2.outerRadius,
            h = _this$getProps2.circumference,
            d = this.options.spacing / 2;

        return (h >= _t || Nt(o, a, r)) && s >= l + d && s <= c + d;
      }
    }, {
      key: "getCenterPoint",
      value: function getCenterPoint(t) {
        var _this$getProps3 = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], t),
            e = _this$getProps3.x,
            i = _this$getProps3.y,
            n = _this$getProps3.startAngle,
            o = _this$getProps3.endAngle,
            s = _this$getProps3.innerRadius,
            a = _this$getProps3.outerRadius,
            _this$options5 = this.options,
            r = _this$options5.offset,
            l = _this$options5.spacing,
            c = (n + o) / 2,
            h = (s + a + l + r) / 2;

        return {
          x: e + Math.cos(c) * h,
          y: i + Math.sin(c) * h
        };
      }
    }, {
      key: "tooltipPosition",
      value: function tooltipPosition(t) {
        return this.getCenterPoint(t);
      }
    }, {
      key: "draw",
      value: function draw(t) {
        var e = this,
            i = e.options,
            n = e.circumference,
            o = (i.offset || 0) / 2,
            s = (i.spacing || 0) / 2;
        if (e.pixelMargin = "inner" === i.borderAlign ? .33 : 0, e.fullCircles = n > _t ? Math.floor(n / _t) : 0, 0 === n || e.innerRadius < 0 || e.outerRadius < 0) return;
        t.save();
        var a = 0;

        if (o) {
          a = o / 2;

          var _i50 = (e.startAngle + e.endAngle) / 2;

          t.translate(Math.cos(_i50) * a, Math.sin(_i50) * a), e.circumference >= bt && (a = o);
        }

        t.fillStyle = i.backgroundColor, t.strokeStyle = i.borderColor;

        var r = function (t, e, i, n) {
          var o = e.fullCircles,
              s = e.startAngle,
              a = e.circumference;
          var r = e.endAngle;

          if (o) {
            To(t, e, i, n, s + _t);

            for (var _e41 = 0; _e41 < o; ++_e41) {
              t.fill();
            }

            isNaN(a) || (r = s + a % _t, a % _t == 0 && (r += _t));
          }

          return To(t, e, i, n, r), t.fill(), r;
        }(t, e, a, s);

        Ao(t, e, a, s, r), t.restore();
      }
    }]);

    return Lo;
  }(Mn);

  function Ro(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e;
    t.lineCap = K(i.borderCapStyle, e.borderCapStyle), t.setLineDash(K(i.borderDash, e.borderDash)), t.lineDashOffset = K(i.borderDashOffset, e.borderDashOffset), t.lineJoin = K(i.borderJoinStyle, e.borderJoinStyle), t.lineWidth = K(i.borderWidth, e.borderWidth), t.strokeStyle = K(i.borderColor, e.borderColor);
  }

  function Eo(t, e, i) {
    t.lineTo(i.x, i.y);
  }

  function Io(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var n = t.length,
        _i$start = i.start,
        o = _i$start === void 0 ? 0 : _i$start,
        _i$end = i.end,
        s = _i$end === void 0 ? n - 1 : _i$end,
        a = e.start,
        r = e.end,
        l = Math.max(o, a),
        c = Math.min(s, r),
        h = o < a && s < a || o > r && s > r;
    return {
      count: n,
      start: l,
      loop: e.loop,
      ilen: c < l && !h ? n + c - l : c - l
    };
  }

  function zo(t, e, i, n) {
    var o = e.points,
        s = e.options,
        _Io = Io(o, i, n),
        a = _Io.count,
        r = _Io.start,
        l = _Io.loop,
        c = _Io.ilen,
        h = function (t) {
      return t.stepped ? Jt : t.tension || "monotone" === t.cubicInterpolationMode ? te : Eo;
    }(s);

    var d,
        u,
        f,
        _ref11 = n || {},
        _ref11$move = _ref11.move,
        g = _ref11$move === void 0 ? !0 : _ref11$move,
        p = _ref11.reverse;

    for (d = 0; d <= c; ++d) {
      u = o[(r + (p ? c - d : d)) % a], u.skip || (g ? (t.moveTo(u.x, u.y), g = !1) : h(t, f, u, p, s.stepped), f = u);
    }

    return l && (u = o[(r + (p ? c : 0)) % a], h(t, f, u, p, s.stepped)), !!l;
  }

  function Fo(t, e, i, n) {
    var o = e.points,
        _Io2 = Io(o, i, n),
        s = _Io2.count,
        a = _Io2.start,
        r = _Io2.ilen,
        _ref12 = n || {},
        _ref12$move = _ref12.move,
        l = _ref12$move === void 0 ? !0 : _ref12$move,
        c = _ref12.reverse;

    var h,
        d,
        u,
        f,
        g,
        p,
        m = 0,
        x = 0;

    var b = function b(t) {
      return (a + (c ? r - t : t)) % s;
    },
        _ = function _() {
      f !== g && (t.lineTo(m, g), t.lineTo(m, f), t.lineTo(m, p));
    };

    for (l && (d = o[b(0)], t.moveTo(d.x, d.y)), h = 0; h <= r; ++h) {
      if (d = o[b(h)], d.skip) continue;

      var _e42 = d.x,
          _i51 = d.y,
          _n38 = 0 | _e42;

      _n38 === u ? (_i51 < f ? f = _i51 : _i51 > g && (g = _i51), m = (x * m + _e42) / ++x) : (_(), t.lineTo(_e42, _i51), u = _n38, x = 0, f = g = _i51), p = _i51;
    }

    _();
  }

  function Bo(t) {
    var e = t.options,
        i = e.borderDash && e.borderDash.length;
    return !(t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i) ? Fo : zo;
  }

  Lo.id = "arc", Lo.defaults = {
    borderAlign: "center",
    borderColor: "#fff",
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0
  }, Lo.defaultRoutes = {
    backgroundColor: "backgroundColor"
  };
  var Vo = "function" == typeof Path2D;

  function Wo(t, e, i, n) {
    Vo && 1 === e.segments.length ? function (t, e, i, n) {
      var o = e._path;
      o || (o = e._path = new Path2D(), e.path(o, i, n) && o.closePath()), Ro(t, e.options), t.stroke(o);
    }(t, e, i, n) : function (t, e, i, n) {
      var o = e.segments,
          s = e.options,
          a = Bo(e);
      var _iteratorNormalCompletion19 = true;
      var _didIteratorError19 = false;
      var _iteratorError19 = undefined;

      try {
        for (var _iterator19 = o[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
          var _r11 = _step19.value;
          Ro(t, s, _r11.style), t.beginPath(), a(t, e, _r11, {
            start: i,
            end: i + n - 1
          }) && t.closePath(), t.stroke();
        }
      } catch (err) {
        _didIteratorError19 = true;
        _iteratorError19 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion19 && _iterator19["return"] != null) {
            _iterator19["return"]();
          }
        } finally {
          if (_didIteratorError19) {
            throw _iteratorError19;
          }
        }
      }
    }(t, e, i, n);
  }

  var No =
  /*#__PURE__*/
  function (_Mn3) {
    _inherits(No, _Mn3);

    function No(t) {
      var _this8;

      _classCallCheck(this, No);

      _this8 = _possibleConstructorReturn(this, _getPrototypeOf(No).call(this)), _this8.animated = !0, _this8.options = void 0, _this8._loop = void 0, _this8._fullLoop = void 0, _this8._path = void 0, _this8._points = void 0, _this8._segments = void 0, _this8._decimated = !1, _this8._pointsUpdated = !1, _this8._datasetIndex = void 0, t && Object.assign(_assertThisInitialized(_this8), t);
      return _this8;
    }

    _createClass(No, [{
      key: "updateControlPoints",
      value: function updateControlPoints(t, e) {
        var i = this,
            n = i.options;

        if ((n.tension || "monotone" === n.cubicInterpolationMode) && !n.stepped && !i._pointsUpdated) {
          var _o31 = n.spanGaps ? i._loop : i._fullLoop;

          yi(i._points, n, t, _o31, e), i._pointsUpdated = !0;
        }
      }
    }, {
      key: "first",
      value: function first() {
        var t = this.segments,
            e = this.points;
        return t.length && e[t[0].start];
      }
    }, {
      key: "last",
      value: function last() {
        var t = this.segments,
            e = this.points,
            i = t.length;
        return i && e[t[i - 1].end];
      }
    }, {
      key: "interpolate",
      value: function interpolate(t, e) {
        var i = this,
            n = i.options,
            o = t[e],
            s = i.points,
            a = zi(i, {
          property: e,
          start: o,
          end: o
        });
        if (!a.length) return;

        var r = [],
            l = function (t) {
          return t.stepped ? Pi : t.tension || "monotone" === t.cubicInterpolationMode ? Di : Si;
        }(n);

        var c, h;

        for (c = 0, h = a.length; c < h; ++c) {
          var _a$c = a[c],
              _i52 = _a$c.start,
              _h14 = _a$c.end,
              _d10 = s[_i52],
              _u7 = s[_h14];

          if (_d10 === _u7) {
            r.push(_d10);
            continue;
          }

          var _f4 = l(_d10, _u7, Math.abs((o - _d10[e]) / (_u7[e] - _d10[e])), n.stepped);

          _f4[e] = t[e], r.push(_f4);
        }

        return 1 === r.length ? r[0] : r;
      }
    }, {
      key: "pathSegment",
      value: function pathSegment(t, e, i) {
        return Bo(this)(t, this, e, i);
      }
    }, {
      key: "path",
      value: function path(t, e, i) {
        var n = this,
            o = n.segments,
            s = Bo(n);
        var a = n._loop;
        e = e || 0, i = i || n.points.length - e;
        var _iteratorNormalCompletion20 = true;
        var _didIteratorError20 = false;
        var _iteratorError20 = undefined;

        try {
          for (var _iterator20 = o[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
            var _r12 = _step20.value;
            a &= s(t, n, _r12, {
              start: e,
              end: e + i - 1
            });
          }
        } catch (err) {
          _didIteratorError20 = true;
          _iteratorError20 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion20 && _iterator20["return"] != null) {
              _iterator20["return"]();
            }
          } finally {
            if (_didIteratorError20) {
              throw _iteratorError20;
            }
          }
        }

        return !!a;
      }
    }, {
      key: "draw",
      value: function draw(t, e, i, n) {
        var o = this,
            s = o.options || {};
        (o.points || []).length && s.borderWidth && (t.save(), Wo(t, o, i, n), t.restore(), o.animated && (o._pointsUpdated = !1, o._path = void 0));
      }
    }, {
      key: "points",
      set: function set(t) {
        var e = this;
        e._points = t, delete e._segments, delete e._path, e._pointsUpdated = !1;
      },
      get: function get() {
        return this._points;
      }
    }, {
      key: "segments",
      get: function get() {
        return this._segments || (this._segments = Fi(this, this.options.segment));
      }
    }]);

    return No;
  }(Mn);

  function Ho(t, e, i, n) {
    var o = t.options,
        _t$getProps = t.getProps([i], n),
        s = _t$getProps[i];

    return Math.abs(e - s) < o.radius + o.hitRadius;
  }

  No.id = "line", No.defaults = {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0
  }, No.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  }, No.descriptors = {
    _scriptable: !0,
    _indexable: function _indexable(t) {
      return "borderDash" !== t && "fill" !== t;
    }
  };

  var jo =
  /*#__PURE__*/
  function (_Mn4) {
    _inherits(jo, _Mn4);

    function jo(t) {
      var _this9;

      _classCallCheck(this, jo);

      _this9 = _possibleConstructorReturn(this, _getPrototypeOf(jo).call(this)), _this9.options = void 0, _this9.parsed = void 0, _this9.skip = void 0, _this9.stop = void 0, t && Object.assign(_assertThisInitialized(_this9), t);
      return _this9;
    }

    _createClass(jo, [{
      key: "inRange",
      value: function inRange(t, e, i) {
        var n = this.options,
            _this$getProps4 = this.getProps(["x", "y"], i),
            o = _this$getProps4.x,
            s = _this$getProps4.y;

        return Math.pow(t - o, 2) + Math.pow(e - s, 2) < Math.pow(n.hitRadius + n.radius, 2);
      }
    }, {
      key: "inXRange",
      value: function inXRange(t, e) {
        return Ho(this, t, "x", e);
      }
    }, {
      key: "inYRange",
      value: function inYRange(t, e) {
        return Ho(this, t, "y", e);
      }
    }, {
      key: "getCenterPoint",
      value: function getCenterPoint(t) {
        var _this$getProps5 = this.getProps(["x", "y"], t),
            e = _this$getProps5.x,
            i = _this$getProps5.y;

        return {
          x: e,
          y: i
        };
      }
    }, {
      key: "size",
      value: function size(t) {
        var e = (t = t || this.options || {}).radius || 0;
        e = Math.max(e, e && t.hoverRadius || 0);
        return 2 * (e + (e && t.borderWidth || 0));
      }
    }, {
      key: "draw",
      value: function draw(t, e) {
        var i = this,
            n = i.options;
        i.skip || n.radius < .1 || !Gt(i, e, i.size(n) / 2) || (t.strokeStyle = n.borderColor, t.lineWidth = n.borderWidth, t.fillStyle = n.backgroundColor, Kt(t, n, i.x, i.y));
      }
    }, {
      key: "getRange",
      value: function getRange() {
        var t = this.options || {};
        return t.radius + t.hitRadius;
      }
    }]);

    return jo;
  }(Mn);

  function $o(t, e) {
    var _t$getProps2 = t.getProps(["x", "y", "base", "width", "height"], e),
        i = _t$getProps2.x,
        n = _t$getProps2.y,
        o = _t$getProps2.base,
        s = _t$getProps2.width,
        a = _t$getProps2.height;

    var r, l, c, h, d;
    return t.horizontal ? (d = a / 2, r = Math.min(i, o), l = Math.max(i, o), c = n - d, h = n + d) : (d = s / 2, r = i - d, l = i + d, c = Math.min(n, o), h = Math.max(n, o)), {
      left: r,
      top: c,
      right: l,
      bottom: h
    };
  }

  function Yo(t, e, i, n) {
    return t ? 0 : Ht(e, i, n);
  }

  function Uo(t) {
    var e = $o(t),
        i = e.right - e.left,
        n = e.bottom - e.top,
        o = function (t, e, i) {
      var n = t.options.borderWidth,
          o = t.borderSkipped,
          s = ze(n);
      return {
        t: Yo(o.top, s.top, 0, i),
        r: Yo(o.right, s.right, 0, e),
        b: Yo(o.bottom, s.bottom, 0, i),
        l: Yo(o.left, s.left, 0, e)
      };
    }(t, i / 2, n / 2),
        s = function (t, e, i) {
      var _t$getProps3 = t.getProps(["enableBorderRadius"]),
          n = _t$getProps3.enableBorderRadius,
          o = t.options.borderRadius,
          s = Fe(o),
          a = Math.min(e, i),
          r = t.borderSkipped,
          l = n || U(o);

      return {
        topLeft: Yo(!l || r.top || r.left, s.topLeft, 0, a),
        topRight: Yo(!l || r.top || r.right, s.topRight, 0, a),
        bottomLeft: Yo(!l || r.bottom || r.left, s.bottomLeft, 0, a),
        bottomRight: Yo(!l || r.bottom || r.right, s.bottomRight, 0, a)
      };
    }(t, i / 2, n / 2);

    return {
      outer: {
        x: e.left,
        y: e.top,
        w: i,
        h: n,
        radius: s
      },
      inner: {
        x: e.left + o.l,
        y: e.top + o.t,
        w: i - o.l - o.r,
        h: n - o.t - o.b,
        radius: {
          topLeft: Math.max(0, s.topLeft - Math.max(o.t, o.l)),
          topRight: Math.max(0, s.topRight - Math.max(o.t, o.r)),
          bottomLeft: Math.max(0, s.bottomLeft - Math.max(o.b, o.l)),
          bottomRight: Math.max(0, s.bottomRight - Math.max(o.b, o.r))
        }
      }
    };
  }

  function Xo(t, e, i, n) {
    var o = null === e,
        s = null === i,
        a = t && !(o && s) && $o(t, n);
    return a && (o || e >= a.left && e <= a.right) && (s || i >= a.top && i <= a.bottom);
  }

  function qo(t, e) {
    t.rect(e.x, e.y, e.w, e.h);
  }

  function Ko(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var n = t.x !== i.x ? -e : 0,
        o = t.y !== i.y ? -e : 0,
        s = (t.x + t.w !== i.x + i.w ? e : 0) - n,
        a = (t.y + t.h !== i.y + i.h ? e : 0) - o;
    return {
      x: t.x + n,
      y: t.y + o,
      w: t.w + s,
      h: t.h + a,
      radius: t.radius
    };
  }

  jo.id = "point", jo.defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0
  }, jo.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };

  var Go =
  /*#__PURE__*/
  function (_Mn5) {
    _inherits(Go, _Mn5);

    function Go(t) {
      var _this10;

      _classCallCheck(this, Go);

      _this10 = _possibleConstructorReturn(this, _getPrototypeOf(Go).call(this)), _this10.options = void 0, _this10.horizontal = void 0, _this10.base = void 0, _this10.width = void 0, _this10.height = void 0, t && Object.assign(_assertThisInitialized(_this10), t);
      return _this10;
    }

    _createClass(Go, [{
      key: "draw",
      value: function draw(t) {
        var e = this.options,
            _Uo = Uo(this),
            i = _Uo.inner,
            n = _Uo.outer,
            o = (s = n.radius).topLeft || s.topRight || s.bottomLeft || s.bottomRight ? ne : qo;

        var s;
        var a = .33;
        t.save(), n.w === i.w && n.h === i.h || (t.beginPath(), o(t, Ko(n, a, i)), t.clip(), o(t, Ko(i, -.33, n)), t.fillStyle = e.borderColor, t.fill("evenodd")), t.beginPath(), o(t, Ko(i, a, n)), t.fillStyle = e.backgroundColor, t.fill(), t.restore();
      }
    }, {
      key: "inRange",
      value: function inRange(t, e, i) {
        return Xo(this, t, e, i);
      }
    }, {
      key: "inXRange",
      value: function inXRange(t, e) {
        return Xo(this, t, null, e);
      }
    }, {
      key: "inYRange",
      value: function inYRange(t, e) {
        return Xo(this, null, t, e);
      }
    }, {
      key: "getCenterPoint",
      value: function getCenterPoint(t) {
        var _this$getProps6 = this.getProps(["x", "y", "base", "horizontal"], t),
            e = _this$getProps6.x,
            i = _this$getProps6.y,
            n = _this$getProps6.base,
            o = _this$getProps6.horizontal;

        return {
          x: o ? (e + n) / 2 : e,
          y: o ? i : (i + n) / 2
        };
      }
    }, {
      key: "getRange",
      value: function getRange(t) {
        return "x" === t ? this.width / 2 : this.height / 2;
      }
    }]);

    return Go;
  }(Mn);

  Go.id = "bar", Go.defaults = {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    enableBorderRadius: !0,
    pointStyle: void 0
  }, Go.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  var Zo = Object.freeze({
    __proto__: null,
    ArcElement: Lo,
    LineElement: No,
    PointElement: jo,
    BarElement: Go
  });

  function Qo(t) {
    if (t._decimated) {
      var _e43 = t._data;
      delete t._decimated, delete t._data, Object.defineProperty(t, "data", {
        value: _e43
      });
    }
  }

  function Jo(t) {
    t.data.datasets.forEach(function (t) {
      Qo(t);
    });
  }

  var ts = {
    id: "decimation",
    defaults: {
      algorithm: "min-max",
      enabled: !1
    },
    beforeElementsUpdate: function beforeElementsUpdate(t, e, i) {
      if (!i.enabled) return void Jo(t);
      var n = t.width;
      t.data.datasets.forEach(function (e, o) {
        var s = e._data,
            a = e.indexAxis,
            r = t.getDatasetMeta(o),
            l = s || e.data;
        if ("y" === We([a, t.options.indexAxis])) return;
        if ("line" !== r.type) return;
        var c = t.scales[r.xAxisID];
        if ("linear" !== c.type && "time" !== c.type) return;
        if (t.options.parsing) return;

        var _ref13 = function (t, e) {
          var i = e.length;
          var n,
              o = 0;

          var s = t.iScale,
              _s$getUserBounds = s.getUserBounds(),
              a = _s$getUserBounds.min,
              r = _s$getUserBounds.max,
              l = _s$getUserBounds.minDefined,
              c = _s$getUserBounds.maxDefined;

          return l && (o = Ht(se(e, s.axis, a).lo, 0, i - 1)), n = c ? Ht(se(e, s.axis, r).hi + 1, o, i) - o : i - o, {
            start: o,
            count: n
          };
        }(r, l),
            h = _ref13.start,
            d = _ref13.count;

        if (d <= (i.threshold || 4 * n)) return void Qo(e);
        var u;

        switch ($(s) && (e._data = l, delete e.data, Object.defineProperty(e, "data", {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this._decimated;
          },
          set: function set(t) {
            this._data = t;
          }
        })), i.algorithm) {
          case "lttb":
            u = function (t, e, i, n, o) {
              var s = o.samples || n;
              if (s >= i) return t.slice(e, e + i);
              var a = [],
                  r = (i - 2) / (s - 2);
              var l = 0;
              var c = e + i - 1;
              var h,
                  d,
                  u,
                  f,
                  g,
                  p = e;

              for (a[l++] = t[p], h = 0; h < s - 2; h++) {
                var _n39 = void 0,
                    _o32 = 0,
                    _s20 = 0;

                var _c18 = Math.floor((h + 1) * r) + 1 + e,
                    _m4 = Math.min(Math.floor((h + 2) * r) + 1, i) + e,
                    _x3 = _m4 - _c18;

                for (_n39 = _c18; _n39 < _m4; _n39++) {
                  _o32 += t[_n39].x, _s20 += t[_n39].y;
                }

                _o32 /= _x3, _s20 /= _x3;

                var _b4 = Math.floor(h * r) + 1 + e,
                    _3 = Math.min(Math.floor((h + 1) * r) + 1, i) + e,
                    _t$p = t[p],
                    _y2 = _t$p.x,
                    _v = _t$p.y;

                for (u = f = -1, _n39 = _b4; _n39 < _3; _n39++) {
                  f = .5 * Math.abs((_y2 - _o32) * (t[_n39].y - _v) - (_y2 - t[_n39].x) * (_s20 - _v)), f > u && (u = f, d = t[_n39], g = _n39);
                }

                a[l++] = d, p = g;
              }

              return a[l++] = t[c], a;
            }(l, h, d, n, i);

            break;

          case "min-max":
            u = function (t, e, i, n) {
              var o,
                  s,
                  a,
                  r,
                  l,
                  c,
                  h,
                  d,
                  u,
                  f,
                  g = 0,
                  p = 0;

              var m = [],
                  x = e + i - 1,
                  b = t[e].x,
                  _ = t[x].x - b;

              for (o = e; o < e + i; ++o) {
                s = t[o], a = (s.x - b) / _ * n, r = s.y;

                var _e44 = 0 | a;

                if (_e44 === l) r < u ? (u = r, c = o) : r > f && (f = r, h = o), g = (p * g + s.x) / ++p;else {
                  var _i53 = o - 1;

                  if (!$(c) && !$(h)) {
                    var _e45 = Math.min(c, h),
                        _n40 = Math.max(c, h);

                    _e45 !== d && _e45 !== _i53 && m.push(_objectSpread({}, t[_e45], {
                      x: g
                    })), _n40 !== d && _n40 !== _i53 && m.push(_objectSpread({}, t[_n40], {
                      x: g
                    }));
                  }

                  o > 0 && _i53 !== d && m.push(t[_i53]), m.push(s), l = _e44, p = 0, u = f = r, c = h = d = o;
                }
              }

              return m;
            }(l, h, d, n);

            break;

          default:
            throw new Error("Unsupported decimation algorithm '".concat(i.algorithm, "'"));
        }

        e._decimated = u;
      });
    },
    destroy: function destroy(t) {
      Jo(t);
    }
  };

  function es(t, e, i) {
    var n = function (t) {
      var e = t.options,
          i = e.fill;
      var n = K(i && i.target, i);
      return void 0 === n && (n = !!e.backgroundColor), !1 !== n && null !== n && (!0 === n ? "origin" : n);
    }(t);

    if (U(n)) return !isNaN(n.value) && n;
    var o = parseFloat(n);
    return X(o) && Math.floor(o) === o ? ("-" !== n[0] && "+" !== n[0] || (o = e + o), !(o === e || o < 0 || o >= i) && o) : ["origin", "start", "end", "stack", "shape"].indexOf(n) >= 0 && n;
  }

  var is =
  /*#__PURE__*/
  function () {
    function is(t) {
      _classCallCheck(this, is);

      this.x = t.x, this.y = t.y, this.radius = t.radius;
    }

    _createClass(is, [{
      key: "pathSegment",
      value: function pathSegment(t, e, i) {
        var n = this.x,
            o = this.y,
            s = this.radius;
        return e = e || {
          start: 0,
          end: _t
        }, t.arc(n, o, s, e.end, e.start, !0), !i.bounds;
      }
    }, {
      key: "interpolate",
      value: function interpolate(t) {
        var e = this.x,
            i = this.y,
            n = this.radius,
            o = t.angle;
        return {
          x: e + Math.cos(o) * n,
          y: i + Math.sin(o) * n,
          angle: o
        };
      }
    }]);

    return is;
  }();

  function ns(t) {
    return (t.scale || {}).getPointPositionForValue ? function (t) {
      var e = t.scale,
          i = t.fill,
          n = e.options,
          o = e.getLabels().length,
          s = [],
          a = n.reverse ? e.max : e.min,
          r = n.reverse ? e.min : e.max;
      var l, c, h;
      if (h = "start" === i ? a : "end" === i ? r : U(i) ? i.value : e.getBaseValue(), n.grid.circular) return c = e.getPointPositionForValue(0, a), new is({
        x: c.x,
        y: c.y,
        radius: e.getDistanceFromCenterForValue(h)
      });

      for (l = 0; l < o; ++l) {
        s.push(e.getPointPositionForValue(l, h));
      }

      return s;
    }(t) : function (t) {
      var _t$scale = t.scale,
          e = _t$scale === void 0 ? {} : _t$scale,
          i = t.fill;
      var n,
          o = null;
      return "start" === i ? o = e.bottom : "end" === i ? o = e.top : U(i) ? o = e.getPixelForValue(i.value) : e.getBasePixel && (o = e.getBasePixel()), X(o) ? (n = e.isHorizontal(), {
        x: n ? o : null,
        y: n ? null : o
      }) : null;
    }(t);
  }

  function os(t, e, i) {
    for (; e > t; e--) {
      var _t47 = i[e];
      if (!isNaN(_t47.x) && !isNaN(_t47.y)) break;
    }

    return e;
  }

  function ss(t) {
    var e = t.chart,
        i = t.scale,
        n = t.index,
        o = t.line,
        s = [],
        a = o.segments,
        r = o.points,
        l = function (t, e) {
      var i = [],
          n = t.getSortedVisibleDatasetMetas();

      for (var _t48 = 0; _t48 < n.length; _t48++) {
        var _o33 = n[_t48];
        if (_o33.index === e) break;
        as(_o33) && i.unshift(_o33.dataset);
      }

      return i;
    }(e, n);

    l.push(cs({
      x: null,
      y: i.bottom
    }, o));

    for (var _t49 = 0; _t49 < a.length; _t49++) {
      var _e46 = a[_t49];

      for (var _t50 = _e46.start; _t50 <= _e46.end; _t50++) {
        rs(s, r[_t50], l);
      }
    }

    return new No({
      points: s,
      options: {}
    });
  }

  var as = function as(t) {
    return "line" === t.type && !t.hidden;
  };

  function rs(t, e, i) {
    var n = [];

    for (var _o34 = 0; _o34 < i.length; _o34++) {
      var _s21 = i[_o34],
          _ls = ls(_s21, e, "x"),
          _a23 = _ls.first,
          _r13 = _ls.last,
          _l17 = _ls.point;

      if (!(!_l17 || _a23 && _r13)) if (_a23) n.unshift(_l17);else if (t.push(_l17), !_r13) break;
    }

    t.push.apply(t, n);
  }

  function ls(t, e, i) {
    var n = t.interpolate(e, i);
    if (!n) return {};
    var o = n[i],
        s = t.segments,
        a = t.points;
    var r = !1,
        l = !1;

    for (var _t51 = 0; _t51 < s.length; _t51++) {
      var _e47 = s[_t51],
          _n41 = a[_e47.start][i],
          _c19 = a[_e47.end][i];

      if (o >= _n41 && o <= _c19) {
        r = o === _n41, l = o === _c19;
        break;
      }
    }

    return {
      first: r,
      last: l,
      point: n
    };
  }

  function cs(t, e) {
    var i = [],
        n = !1;
    return Y(t) ? (n = !0, i = t) : i = function (t, e) {
      var _ref14 = t || {},
          _ref14$x = _ref14.x,
          i = _ref14$x === void 0 ? null : _ref14$x,
          _ref14$y = _ref14.y,
          n = _ref14$y === void 0 ? null : _ref14$y,
          o = e.points,
          s = [];

      return e.segments.forEach(function (_ref15) {
        var t = _ref15.start,
            e = _ref15.end;
        e = os(t, e, o);
        var a = o[t],
            r = o[e];
        null !== n ? (s.push({
          x: a.x,
          y: n
        }), s.push({
          x: r.x,
          y: n
        })) : null !== i && (s.push({
          x: i,
          y: a.y
        }), s.push({
          x: i,
          y: r.y
        }));
      }), s;
    }(t, e), i.length ? new No({
      points: i,
      options: {
        tension: 0
      },
      _loop: n,
      _fullLoop: n
    }) : null;
  }

  function hs(t, e, i) {
    var n = t[e].fill;
    var o = [e];
    var s;
    if (!i) return n;

    for (; !1 !== n && -1 === o.indexOf(n);) {
      if (!X(n)) return n;
      if (s = t[n], !s) return !1;
      if (s.visible) return n;
      o.push(n), n = s.fill;
    }

    return !1;
  }

  function ds(t, e, i) {
    t.beginPath(), e.path(t), t.lineTo(e.last().x, i), t.lineTo(e.first().x, i), t.closePath(), t.clip();
  }

  function us(t, e, i, n) {
    if (n) return;
    var o = e[t],
        s = i[t];
    return "angle" === t && (o = Wt(o), s = Wt(s)), {
      property: t,
      start: o,
      end: s
    };
  }

  function fs(t, e, i, n) {
    return t && e ? n(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
  }

  function gs(t, e, i) {
    var _e$chart$chartArea = e.chart.chartArea,
        n = _e$chart$chartArea.top,
        o = _e$chart$chartArea.bottom,
        _ref16 = i || {},
        s = _ref16.property,
        a = _ref16.start,
        r = _ref16.end;

    "x" === s && (t.beginPath(), t.rect(a, n, r - a, o - n), t.clip());
  }

  function ps(t, e, i, n) {
    var o = e.interpolate(i, n);
    o && t.lineTo(o.x, o.y);
  }

  function ms(t, e) {
    var i = e.line,
        n = e.target,
        o = e.property,
        s = e.color,
        a = e.scale,
        r = function (t, e, i) {
      var n = t.segments,
          o = t.points,
          s = e.points,
          a = [];
      var _iteratorNormalCompletion21 = true;
      var _didIteratorError21 = false;
      var _iteratorError21 = undefined;

      try {
        for (var _iterator21 = n[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
          var _t52 = _step21.value;
          var _n42 = _t52.start,
              _r14 = _t52.end;
          _r14 = os(_n42, _r14, o);

          var _l18 = us(i, o[_n42], o[_r14], _t52.loop);

          if (!e.segments) {
            a.push({
              source: _t52,
              target: _l18,
              start: o[_n42],
              end: o[_r14]
            });
            continue;
          }

          var _c20 = zi(e, _l18);

          var _iteratorNormalCompletion22 = true;
          var _didIteratorError22 = false;
          var _iteratorError22 = undefined;

          try {
            for (var _iterator22 = _c20[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
              var _e48 = _step22.value;

              var _n43 = us(i, s[_e48.start], s[_e48.end], _e48.loop),
                  _r15 = Ii(_t52, o, _n43);

              var _iteratorNormalCompletion23 = true;
              var _didIteratorError23 = false;
              var _iteratorError23 = undefined;

              try {
                for (var _iterator23 = _r15[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
                  var _t53 = _step23.value;
                  a.push({
                    source: _t53,
                    target: _e48,
                    start: _defineProperty({}, i, fs(_l18, _n43, "start", Math.max)),
                    end: _defineProperty({}, i, fs(_l18, _n43, "end", Math.min))
                  });
                }
              } catch (err) {
                _didIteratorError23 = true;
                _iteratorError23 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion23 && _iterator23["return"] != null) {
                    _iterator23["return"]();
                  }
                } finally {
                  if (_didIteratorError23) {
                    throw _iteratorError23;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError22 = true;
            _iteratorError22 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion22 && _iterator22["return"] != null) {
                _iterator22["return"]();
              }
            } finally {
              if (_didIteratorError22) {
                throw _iteratorError22;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError21 = true;
        _iteratorError21 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion21 && _iterator21["return"] != null) {
            _iterator21["return"]();
          }
        } finally {
          if (_didIteratorError21) {
            throw _iteratorError21;
          }
        }
      }

      return a;
    }(i, n, o);

    var _iteratorNormalCompletion24 = true;
    var _didIteratorError24 = false;
    var _iteratorError24 = undefined;

    try {
      for (var _iterator24 = r[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
        var _step24$value = _step24.value,
            _e49 = _step24$value.source,
            _l19 = _step24$value.target,
            _c21 = _step24$value.start,
            _h15 = _step24$value.end;
        var _e49$style = _e49.style;
        _e49$style = _e49$style === void 0 ? {} : _e49$style;

        var _e49$style$background = _e49$style.backgroundColor,
            _r16 = _e49$style$background === void 0 ? s : _e49$style$background,
            _d11 = !0 !== n;

        t.save(), t.fillStyle = _r16, gs(t, a, _d11 && us(o, _c21, _h15)), t.beginPath();

        var _u8 = !!i.pathSegment(t, _e49);

        var _f5 = void 0;

        if (_d11) {
          _u8 ? t.closePath() : ps(t, n, _h15, o);

          var _e50 = !!n.pathSegment(t, _l19, {
            move: _u8,
            reverse: !0
          });

          _f5 = _u8 && _e50, _f5 || ps(t, n, _c21, o);
        }

        t.closePath(), t.fill(_f5 ? "evenodd" : "nonzero"), t.restore();
      }
    } catch (err) {
      _didIteratorError24 = true;
      _iteratorError24 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion24 && _iterator24["return"] != null) {
          _iterator24["return"]();
        }
      } finally {
        if (_didIteratorError24) {
          throw _iteratorError24;
        }
      }
    }
  }

  function xs(t, e, i) {
    var n = function (t) {
      var e = t.chart,
          i = t.fill,
          n = t.line;
      if (X(i)) return function (t, e) {
        var i = t.getDatasetMeta(e);
        return i && t.isDatasetVisible(e) ? i.dataset : null;
      }(e, i);
      if ("stack" === i) return ss(t);
      if ("shape" === i) return !0;
      var o = ns(t);
      return o instanceof is ? o : cs(o, n);
    }(e),
        o = e.line,
        s = e.scale,
        a = e.axis,
        r = o.options,
        l = r.fill,
        c = r.backgroundColor,
        _ref17 = l || {},
        _ref17$above = _ref17.above,
        h = _ref17$above === void 0 ? c : _ref17$above,
        _ref17$below = _ref17.below,
        d = _ref17$below === void 0 ? c : _ref17$below;

    n && o.points.length && (Zt(t, i), function (t, e) {
      var i = e.line,
          n = e.target,
          o = e.above,
          s = e.below,
          a = e.area,
          r = e.scale,
          l = i._loop ? "angle" : e.axis;
      t.save(), "x" === l && s !== o && (ds(t, n, a.top), ms(t, {
        line: i,
        target: n,
        color: o,
        scale: r,
        property: l
      }), t.restore(), t.save(), ds(t, n, a.bottom)), ms(t, {
        line: i,
        target: n,
        color: s,
        scale: r,
        property: l
      }), t.restore();
    }(t, {
      line: o,
      target: n,
      above: h,
      below: d,
      area: i,
      scale: s,
      axis: a
    }), Qt(t));
  }

  var bs = {
    id: "filler",
    afterDatasetsUpdate: function afterDatasetsUpdate(t, e, i) {
      var n = (t.data.datasets || []).length,
          o = [];
      var s, a, r, l;

      for (a = 0; a < n; ++a) {
        s = t.getDatasetMeta(a), r = s.dataset, l = null, r && r.options && r instanceof No && (l = {
          visible: t.isDatasetVisible(a),
          index: a,
          fill: es(r, a, n),
          chart: t,
          axis: s.controller.options.indexAxis,
          scale: s.vScale,
          line: r
        }), s.$filler = l, o.push(l);
      }

      for (a = 0; a < n; ++a) {
        l = o[a], l && !1 !== l.fill && (l.fill = hs(o, a, i.propagate));
      }
    },
    beforeDraw: function beforeDraw(t, e, i) {
      var n = "beforeDraw" === i.drawTime,
          o = t.getSortedVisibleDatasetMetas(),
          s = t.chartArea;

      for (var _e51 = o.length - 1; _e51 >= 0; --_e51) {
        var _i54 = o[_e51].$filler;
        _i54 && (_i54.line.updateControlPoints(s, _i54.axis), n && xs(t.ctx, _i54, s));
      }
    },
    beforeDatasetsDraw: function beforeDatasetsDraw(t, e, i) {
      if ("beforeDatasetsDraw" !== i.drawTime) return;
      var n = t.getSortedVisibleDatasetMetas();

      for (var _e52 = n.length - 1; _e52 >= 0; --_e52) {
        var _i55 = n[_e52].$filler;
        _i55 && xs(t.ctx, _i55, t.chartArea);
      }
    },
    beforeDatasetDraw: function beforeDatasetDraw(t, e, i) {
      var n = e.meta.$filler;
      n && !1 !== n.fill && "beforeDatasetDraw" === i.drawTime && xs(t.ctx, n, t.chartArea);
    },
    defaults: {
      propagate: !0,
      drawTime: "beforeDatasetDraw"
    }
  };

  var _s = function _s(t, e) {
    var _t$boxHeight = t.boxHeight,
        i = _t$boxHeight === void 0 ? e : _t$boxHeight,
        _t$boxWidth = t.boxWidth,
        n = _t$boxWidth === void 0 ? e : _t$boxWidth;
    return t.usePointStyle && (i = Math.min(i, e), n = Math.min(n, e)), {
      boxWidth: n,
      boxHeight: i,
      itemHeight: Math.max(e, i)
    };
  };

  var ys =
  /*#__PURE__*/
  function (_Mn6) {
    _inherits(ys, _Mn6);

    function ys(t) {
      var _this11;

      _classCallCheck(this, ys);

      _this11 = _possibleConstructorReturn(this, _getPrototypeOf(ys).call(this)), _this11._added = !1, _this11.legendHitBoxes = [], _this11._hoveredItem = null, _this11.doughnutMode = !1, _this11.chart = t.chart, _this11.options = t.options, _this11.ctx = t.ctx, _this11.legendItems = void 0, _this11.columnSizes = void 0, _this11.lineWidths = void 0, _this11.maxHeight = void 0, _this11.maxWidth = void 0, _this11.top = void 0, _this11.bottom = void 0, _this11.left = void 0, _this11.right = void 0, _this11.height = void 0, _this11.width = void 0, _this11._margins = void 0, _this11.position = void 0, _this11.weight = void 0, _this11.fullSize = void 0;
      return _this11;
    }

    _createClass(ys, [{
      key: "update",
      value: function update(t, e, i) {
        var n = this;
        n.maxWidth = t, n.maxHeight = e, n._margins = i, n.setDimensions(), n.buildLabels(), n.fit();
      }
    }, {
      key: "setDimensions",
      value: function setDimensions() {
        var t = this;
        t.isHorizontal() ? (t.width = t.maxWidth, t.left = t._margins.left, t.right = t.width) : (t.height = t.maxHeight, t.top = t._margins.top, t.bottom = t.height);
      }
    }, {
      key: "buildLabels",
      value: function buildLabels() {
        var t = this,
            e = t.options.labels || {};
        var i = Q(e.generateLabels, [t.chart], t) || [];
        e.filter && (i = i.filter(function (i) {
          return e.filter(i, t.chart.data);
        })), e.sort && (i = i.sort(function (i, n) {
          return e.sort(i, n, t.chart.data);
        })), t.options.reverse && i.reverse(), t.legendItems = i;
      }
    }, {
      key: "fit",
      value: function fit() {
        var t = this,
            e = t.options,
            i = t.ctx;
        if (!e.display) return void (t.width = t.height = 0);

        var n = e.labels,
            o = Ve(n.font),
            s = o.size,
            a = t._computeTitleHeight(),
            _s22 = _s(n, s),
            r = _s22.boxWidth,
            l = _s22.itemHeight;

        var c, h;
        i.font = o.string, t.isHorizontal() ? (c = t.maxWidth, h = t._fitRows(a, s, r, l) + 10) : (h = t.maxHeight, c = t._fitCols(a, s, r, l) + 10), t.width = Math.min(c, e.maxWidth || t.maxWidth), t.height = Math.min(h, e.maxHeight || t.maxHeight);
      }
    }, {
      key: "_fitRows",
      value: function _fitRows(t, e, i, n) {
        var o = this,
            s = o.ctx,
            a = o.maxWidth,
            r = o.options.labels.padding,
            l = o.legendHitBoxes = [],
            c = o.lineWidths = [0],
            h = n + r;
        var d = t;
        s.textAlign = "left", s.textBaseline = "middle";
        var u = -1,
            f = -h;
        return o.legendItems.forEach(function (t, o) {
          var g = i + e / 2 + s.measureText(t.text).width;
          (0 === o || c[c.length - 1] + g + 2 * r > a) && (d += h, c[c.length - (o > 0 ? 0 : 1)] = 0, f += h, u++), l[o] = {
            left: 0,
            top: f,
            row: u,
            width: g,
            height: n
          }, c[c.length - 1] += g + r;
        }), d;
      }
    }, {
      key: "_fitCols",
      value: function _fitCols(t, e, i, n) {
        var o = this,
            s = o.ctx,
            a = o.maxHeight,
            r = o.options.labels.padding,
            l = o.legendHitBoxes = [],
            c = o.columnSizes = [],
            h = a - t;
        var d = r,
            u = 0,
            f = 0,
            g = 0,
            p = 0;
        return o.legendItems.forEach(function (t, o) {
          var a = i + e / 2 + s.measureText(t.text).width;
          o > 0 && f + n + 2 * r > h && (d += u + r, c.push({
            width: u,
            height: f
          }), g += u + r, p++, u = f = 0), l[o] = {
            left: g,
            top: f,
            col: p,
            width: a,
            height: n
          }, u = Math.max(u, a), f += n + r;
        }), d += u, c.push({
          width: u,
          height: f
        }), d;
      }
    }, {
      key: "adjustHitBoxes",
      value: function adjustHitBoxes() {
        var t = this;
        if (!t.options.display) return;

        var e = t._computeTitleHeight(),
            i = t.legendHitBoxes,
            _t$options2 = t.options,
            n = _t$options2.align,
            s = _t$options2.labels.padding,
            a = _t$options2.rtl,
            r = Ti(a, t.left, t.width);

        if (this.isHorizontal()) {
          var _a24 = 0,
              _l20 = o(n, t.left + s, t.right - t.lineWidths[_a24]);

          var _iteratorNormalCompletion25 = true;
          var _didIteratorError25 = false;
          var _iteratorError25 = undefined;

          try {
            for (var _iterator25 = i[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
              var _c22 = _step25.value;
              _a24 !== _c22.row && (_a24 = _c22.row, _l20 = o(n, t.left + s, t.right - t.lineWidths[_a24])), _c22.top += t.top + e + s, _c22.left = r.leftForLtr(r.x(_l20), _c22.width), _l20 += _c22.width + s;
            }
          } catch (err) {
            _didIteratorError25 = true;
            _iteratorError25 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion25 && _iterator25["return"] != null) {
                _iterator25["return"]();
              }
            } finally {
              if (_didIteratorError25) {
                throw _iteratorError25;
              }
            }
          }
        } else {
          var _a25 = 0,
              _l21 = o(n, t.top + e + s, t.bottom - t.columnSizes[_a25].height);

          var _iteratorNormalCompletion26 = true;
          var _didIteratorError26 = false;
          var _iteratorError26 = undefined;

          try {
            for (var _iterator26 = i[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
              var _c23 = _step26.value;
              _c23.col !== _a25 && (_a25 = _c23.col, _l21 = o(n, t.top + e + s, t.bottom - t.columnSizes[_a25].height)), _c23.top = _l21, _c23.left += t.left + s, _c23.left = r.leftForLtr(r.x(_c23.left), _c23.width), _l21 += _c23.height + s;
            }
          } catch (err) {
            _didIteratorError26 = true;
            _iteratorError26 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion26 && _iterator26["return"] != null) {
                _iterator26["return"]();
              }
            } finally {
              if (_didIteratorError26) {
                throw _iteratorError26;
              }
            }
          }
        }
      }
    }, {
      key: "isHorizontal",
      value: function isHorizontal() {
        return "top" === this.options.position || "bottom" === this.options.position;
      }
    }, {
      key: "draw",
      value: function draw() {
        var t = this;

        if (t.options.display) {
          var _e53 = t.ctx;
          Zt(_e53, t), t._draw(), Qt(_e53);
        }
      }
    }, {
      key: "_draw",
      value: function _draw() {
        var t = this,
            e = t.options,
            i = t.columnSizes,
            n = t.lineWidths,
            a = t.ctx,
            r = e.align,
            l = e.labels,
            c = xt.color,
            h = Ti(e.rtl, t.left, t.width),
            d = Ve(l.font),
            u = l.color,
            f = l.padding,
            g = d.size,
            p = g / 2;
        var m;
        t.drawTitle(), a.textAlign = h.textAlign("left"), a.textBaseline = "middle", a.lineWidth = .5, a.font = d.string;

        var _s23 = _s(l, g),
            x = _s23.boxWidth,
            b = _s23.boxHeight,
            _ = _s23.itemHeight,
            y = t.isHorizontal(),
            v = this._computeTitleHeight();

        m = y ? {
          x: o(r, t.left + f, t.right - n[0]),
          y: t.top + f + v,
          line: 0
        } : {
          x: t.left + f,
          y: o(r, t.top + v + f, t.bottom - i[0].height),
          line: 0
        }, Ai(t.ctx, e.textDirection);
        var w = _ + f;
        t.legendItems.forEach(function (M, k) {
          a.strokeStyle = M.fontColor || u, a.fillStyle = M.fontColor || u;
          var S = a.measureText(M.text).width,
              P = h.textAlign(M.textAlign || (M.textAlign = l.textAlign)),
              D = x + p + S;
          var C = m.x,
              O = m.y;
          h.setWidth(t.width), y ? k > 0 && C + D + f > t.right && (O = m.y += w, m.line++, C = m.x = o(r, t.left + f, t.right - n[m.line])) : k > 0 && O + w > t.bottom && (C = m.x = C + i[m.line].width + f, m.line++, O = m.y = o(r, t.top + v + f, t.bottom - i[m.line].height));
          !function (t, e, i) {
            if (isNaN(x) || x <= 0 || isNaN(b) || b < 0) return;
            a.save();
            var n = K(i.lineWidth, 1);

            if (a.fillStyle = K(i.fillStyle, c), a.lineCap = K(i.lineCap, "butt"), a.lineDashOffset = K(i.lineDashOffset, 0), a.lineJoin = K(i.lineJoin, "miter"), a.lineWidth = n, a.strokeStyle = K(i.strokeStyle, c), a.setLineDash(K(i.lineDash, [])), l.usePointStyle) {
              var _o35 = {
                radius: x * Math.SQRT2 / 2,
                pointStyle: i.pointStyle,
                rotation: i.rotation,
                borderWidth: n
              },
                  _s24 = h.xPlus(t, x / 2);

              Kt(a, _o35, _s24, e + p);
            } else {
              var _o36 = e + Math.max((g - b) / 2, 0),
                  _s25 = h.leftForLtr(t, x),
                  _r17 = Fe(i.borderRadius);

              a.beginPath(), Object.values(_r17).some(function (t) {
                return 0 !== t;
              }) ? ne(a, {
                x: _s25,
                y: _o36,
                w: x,
                h: b,
                radius: _r17
              }) : a.rect(_s25, _o36, x, b), a.fill(), 0 !== n && a.stroke();
            }

            a.restore();
          }(h.x(C), O, M), C = s(P, C + x + p, y ? C + D : t.right, e.rtl), function (t, e, i) {
            ee(a, i.text, t, e + _ / 2, d, {
              strikethrough: i.hidden,
              textAlign: h.textAlign(i.textAlign)
            });
          }(h.x(C), O, M), y ? m.x += D + f : m.y += w;
        }), Li(t.ctx, e.textDirection);
      }
    }, {
      key: "drawTitle",
      value: function drawTitle() {
        var t = this,
            e = t.options,
            i = e.title,
            s = Ve(i.font),
            a = Be(i.padding);
        if (!i.display) return;
        var r = Ti(e.rtl, t.left, t.width),
            l = t.ctx,
            c = i.position,
            h = s.size / 2,
            d = a.top + h;
        var u,
            f = t.left,
            g = t.width;
        if (this.isHorizontal()) g = Math.max.apply(Math, _toConsumableArray(t.lineWidths)), u = t.top + d, f = o(e.align, f, t.right - g);else {
          var _i56 = t.columnSizes.reduce(function (t, e) {
            return Math.max(t, e.height);
          }, 0);

          u = d + o(e.align, t.top, t.bottom - _i56 - e.labels.padding - t._computeTitleHeight());
        }
        var p = o(c, f, f + g);
        l.textAlign = r.textAlign(n(c)), l.textBaseline = "middle", l.strokeStyle = i.color, l.fillStyle = i.color, l.font = s.string, ee(l, i.text, p, u, s);
      }
    }, {
      key: "_computeTitleHeight",
      value: function _computeTitleHeight() {
        var t = this.options.title,
            e = Ve(t.font),
            i = Be(t.padding);
        return t.display ? e.lineHeight + i.height : 0;
      }
    }, {
      key: "_getLegendItemAt",
      value: function _getLegendItemAt(t, e) {
        var i = this;
        var n, o, s;
        if (t >= i.left && t <= i.right && e >= i.top && e <= i.bottom) for (s = i.legendHitBoxes, n = 0; n < s.length; ++n) {
          if (o = s[n], t >= o.left && t <= o.left + o.width && e >= o.top && e <= o.top + o.height) return i.legendItems[n];
        }
        return null;
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(t) {
        var e = this,
            i = e.options;
        if (!function (t, e) {
          if ("mousemove" === t && (e.onHover || e.onLeave)) return !0;
          if (e.onClick && ("click" === t || "mouseup" === t)) return !0;
          return !1;
        }(t.type, i)) return;

        var n = e._getLegendItemAt(t.x, t.y);

        if ("mousemove" === t.type) {
          var _a26 = e._hoveredItem,
              _r18 = (s = n, null !== (o = _a26) && null !== s && o.datasetIndex === s.datasetIndex && o.index === s.index);

          _a26 && !_r18 && Q(i.onLeave, [t, _a26, e], e), e._hoveredItem = n, n && !_r18 && Q(i.onHover, [t, n, e], e);
        } else n && Q(i.onClick, [t, n, e], e);

        var o, s;
      }
    }]);

    return ys;
  }(Mn);

  var vs = {
    id: "legend",
    _element: ys,
    start: function start(t, e, i) {
      var n = t.legend = new ys({
        ctx: t.ctx,
        options: i,
        chart: t
      });
      ti.configure(t, n, i), ti.addBox(t, n);
    },
    stop: function stop(t) {
      ti.removeBox(t, t.legend), delete t.legend;
    },
    beforeUpdate: function beforeUpdate(t, e, i) {
      var n = t.legend;
      ti.configure(t, n, i), n.options = i;
    },
    afterUpdate: function afterUpdate(t) {
      var e = t.legend;
      e.buildLabels(), e.adjustHitBoxes();
    },
    afterEvent: function afterEvent(t, e) {
      e.replay || t.legend.handleEvent(e.event);
    },
    defaults: {
      display: !0,
      position: "top",
      align: "center",
      fullSize: !0,
      reverse: !1,
      weight: 1e3,
      onClick: function onClick(t, e, i) {
        var n = e.datasetIndex,
            o = i.chart;
        o.isDatasetVisible(n) ? (o.hide(n), e.hidden = !0) : (o.show(n), e.hidden = !1);
      },
      onHover: null,
      onLeave: null,
      labels: {
        color: function color(t) {
          return t.chart.options.color;
        },
        boxWidth: 40,
        padding: 10,
        generateLabels: function generateLabels(t) {
          var e = t.data.datasets,
              _t$legend$options$lab = t.legend.options.labels,
              i = _t$legend$options$lab.usePointStyle,
              n = _t$legend$options$lab.pointStyle,
              o = _t$legend$options$lab.textAlign,
              s = _t$legend$options$lab.color;
          return t._getSortedDatasetMetas().map(function (t) {
            var a = t.controller.getStyle(i ? 0 : void 0),
                r = Be(a.borderWidth);
            return {
              text: e[t.index].label,
              fillStyle: a.backgroundColor,
              fontColor: s,
              hidden: !t.visible,
              lineCap: a.borderCapStyle,
              lineDash: a.borderDash,
              lineDashOffset: a.borderDashOffset,
              lineJoin: a.borderJoinStyle,
              lineWidth: (r.width + r.height) / 4,
              strokeStyle: a.borderColor,
              pointStyle: n || a.pointStyle,
              rotation: a.rotation,
              textAlign: o || a.textAlign,
              borderRadius: 0,
              datasetIndex: t.index
            };
          }, this);
        }
      },
      title: {
        color: function color(t) {
          return t.chart.options.color;
        },
        display: !1,
        position: "center",
        text: ""
      }
    },
    descriptors: {
      _scriptable: function _scriptable(t) {
        return !t.startsWith("on");
      },
      labels: {
        _scriptable: function _scriptable(t) {
          return !["generateLabels", "filter", "sort"].includes(t);
        }
      }
    }
  };

  var ws =
  /*#__PURE__*/
  function (_Mn7) {
    _inherits(ws, _Mn7);

    function ws(t) {
      var _this12;

      _classCallCheck(this, ws);

      _this12 = _possibleConstructorReturn(this, _getPrototypeOf(ws).call(this)), _this12.chart = t.chart, _this12.options = t.options, _this12.ctx = t.ctx, _this12._padding = void 0, _this12.top = void 0, _this12.bottom = void 0, _this12.left = void 0, _this12.right = void 0, _this12.width = void 0, _this12.height = void 0, _this12.position = void 0, _this12.weight = void 0, _this12.fullSize = void 0;
      return _this12;
    }

    _createClass(ws, [{
      key: "update",
      value: function update(t, e) {
        var i = this,
            n = i.options;
        if (i.left = 0, i.top = 0, !n.display) return void (i.width = i.height = i.right = i.bottom = 0);
        i.width = i.right = t, i.height = i.bottom = e;
        var o = Y(n.text) ? n.text.length : 1;
        i._padding = Be(n.padding);

        var s = o * Ve(n.font).lineHeight + i._padding.height;

        i.isHorizontal() ? i.height = s : i.width = s;
      }
    }, {
      key: "isHorizontal",
      value: function isHorizontal() {
        var t = this.options.position;
        return "top" === t || "bottom" === t;
      }
    }, {
      key: "_drawArgs",
      value: function _drawArgs(t) {
        var e = this.top,
            i = this.left,
            n = this.bottom,
            s = this.right,
            a = this.options,
            r = a.align;
        var l,
            c,
            h,
            d = 0;
        return this.isHorizontal() ? (c = o(r, i, s), h = e + t, l = s - i) : ("left" === a.position ? (c = i + t, h = o(r, n, e), d = -.5 * bt) : (c = s - t, h = o(r, e, n), d = .5 * bt), l = n - e), {
          titleX: c,
          titleY: h,
          maxWidth: l,
          rotation: d
        };
      }
    }, {
      key: "draw",
      value: function draw() {
        var t = this,
            e = t.ctx,
            i = t.options;
        if (!i.display) return;

        var o = Ve(i.font),
            s = o.lineHeight / 2 + t._padding.top,
            _t$_drawArgs = t._drawArgs(s),
            a = _t$_drawArgs.titleX,
            r = _t$_drawArgs.titleY,
            l = _t$_drawArgs.maxWidth,
            c = _t$_drawArgs.rotation;

        ee(e, i.text, 0, 0, o, {
          color: i.color,
          maxWidth: l,
          rotation: c,
          textAlign: n(i.align),
          textBaseline: "middle",
          translation: [a, r]
        });
      }
    }]);

    return ws;
  }(Mn);

  var Ms = {
    id: "title",
    _element: ws,
    start: function start(t, e, i) {
      !function (t, e) {
        var i = new ws({
          ctx: t.ctx,
          options: e,
          chart: t
        });
        ti.configure(t, i, e), ti.addBox(t, i), t.titleBlock = i;
      }(t, i);
    },
    stop: function stop(t) {
      var e = t.titleBlock;
      ti.removeBox(t, e), delete t.titleBlock;
    },
    beforeUpdate: function beforeUpdate(t, e, i) {
      var n = t.titleBlock;
      ti.configure(t, n, i), n.options = i;
    },
    defaults: {
      align: "center",
      display: !1,
      font: {
        weight: "bold"
      },
      fullSize: !0,
      padding: 10,
      position: "top",
      text: "",
      weight: 2e3
    },
    defaultRoutes: {
      color: "color"
    },
    descriptors: {
      _scriptable: !0,
      _indexable: !1
    }
  };
  var ks = new WeakMap();
  var Ss = {
    id: "subtitle",
    start: function start(t, e, i) {
      var n = new ws({
        ctx: t.ctx,
        options: i,
        chart: t
      });
      ti.configure(t, n, i), ti.addBox(t, n), ks.set(t, n);
    },
    stop: function stop(t) {
      ti.removeBox(t, ks.get(t)), ks["delete"](t);
    },
    beforeUpdate: function beforeUpdate(t, e, i) {
      var n = ks.get(t);
      ti.configure(t, n, i), n.options = i;
    },
    defaults: {
      align: "center",
      display: !1,
      font: {
        weight: "normal"
      },
      fullSize: !0,
      padding: 0,
      position: "top",
      text: "",
      weight: 1500
    },
    defaultRoutes: {
      color: "color"
    },
    descriptors: {
      _scriptable: !0,
      _indexable: !1
    }
  };
  var Ps = {
    average: function average(t) {
      if (!t.length) return !1;
      var e,
          i,
          n = 0,
          o = 0,
          s = 0;

      for (e = 0, i = t.length; e < i; ++e) {
        var _i57 = t[e].element;

        if (_i57 && _i57.hasValue()) {
          var _t54 = _i57.tooltipPosition();

          n += _t54.x, o += _t54.y, ++s;
        }
      }

      return {
        x: n / s,
        y: o / s
      };
    },
    nearest: function nearest(t, e) {
      if (!t.length) return !1;
      var i,
          n,
          o,
          s = e.x,
          a = e.y,
          r = Number.POSITIVE_INFINITY;

      for (i = 0, n = t.length; i < n; ++i) {
        var _n44 = t[i].element;

        if (_n44 && _n44.hasValue()) {
          var _t55 = Bt(e, _n44.getCenterPoint());

          _t55 < r && (r = _t55, o = _n44);
        }
      }

      if (o) {
        var _t56 = o.tooltipPosition();

        s = _t56.x, a = _t56.y;
      }

      return {
        x: s,
        y: a
      };
    }
  };

  function Ds(t, e) {
    return e && (Y(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
  }

  function Cs(t) {
    return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t;
  }

  function Os(t, e) {
    var i = e.element,
        n = e.datasetIndex,
        o = e.index,
        s = t.getDatasetMeta(n).controller,
        _s$getLabelAndValue = s.getLabelAndValue(o),
        a = _s$getLabelAndValue.label,
        r = _s$getLabelAndValue.value;

    return {
      chart: t,
      label: a,
      parsed: s.getParsed(o),
      raw: t.data.datasets[n].data[o],
      formattedValue: r,
      dataset: s.getDataset(),
      dataIndex: o,
      datasetIndex: n,
      element: i
    };
  }

  function Ts(t, e) {
    var i = t._chart.ctx,
        n = t.body,
        o = t.footer,
        s = t.title,
        a = e.boxWidth,
        r = e.boxHeight,
        l = Ve(e.bodyFont),
        c = Ve(e.titleFont),
        h = Ve(e.footerFont),
        d = s.length,
        u = o.length,
        f = n.length,
        g = Be(e.padding);
    var p = g.height,
        m = 0,
        x = n.reduce(function (t, e) {
      return t + e.before.length + e.lines.length + e.after.length;
    }, 0);

    if (x += t.beforeBody.length + t.afterBody.length, d && (p += d * c.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom), x) {
      p += f * (e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight) + (x - f) * l.lineHeight + (x - 1) * e.bodySpacing;
    }

    u && (p += e.footerMarginTop + u * h.lineHeight + (u - 1) * e.footerSpacing);
    var b = 0;

    var _ = function _(t) {
      m = Math.max(m, i.measureText(t).width + b);
    };

    return i.save(), i.font = c.string, J(t.title, _), i.font = l.string, J(t.beforeBody.concat(t.afterBody), _), b = e.displayColors ? a + 2 : 0, J(n, function (t) {
      J(t.before, _), J(t.lines, _), J(t.after, _);
    }), b = 0, i.font = h.string, J(t.footer, _), i.restore(), m += g.width, {
      width: m,
      height: p
    };
  }

  function As(t, e, i, n) {
    var o = i.x,
        s = i.width,
        a = t.width,
        _t$chartArea = t.chartArea,
        r = _t$chartArea.left,
        l = _t$chartArea.right;
    var c = "center";
    return "center" === n ? c = o <= (r + l) / 2 ? "left" : "right" : o <= s / 2 ? c = "left" : o >= a - s / 2 && (c = "right"), function (t, e, i, n) {
      var o = n.x,
          s = n.width,
          a = i.caretSize + i.caretPadding;
      return "left" === t && o + s + a > e.width || "right" === t && o - s - a < 0 || void 0;
    }(c, t, e, i) && (c = "center"), c;
  }

  function Ls(t, e, i) {
    var n = e.yAlign || function (t, e) {
      var i = e.y,
          n = e.height;
      return i < n / 2 ? "top" : i > t.height - n / 2 ? "bottom" : "center";
    }(t, i);

    return {
      xAlign: e.xAlign || As(t, e, i, n),
      yAlign: n
    };
  }

  function Rs(t, e, i, n) {
    var o = t.caretSize,
        s = t.caretPadding,
        a = t.cornerRadius,
        r = i.xAlign,
        l = i.yAlign,
        c = o + s,
        h = a + s;

    var d = function (t, e) {
      var i = t.x,
          n = t.width;
      return "right" === e ? i -= n : "center" === e && (i -= n / 2), i;
    }(e, r);

    var u = function (t, e, i) {
      var n = t.y,
          o = t.height;
      return "top" === e ? n += i : n -= "bottom" === e ? o + i : o / 2, n;
    }(e, l, c);

    return "center" === l ? "left" === r ? d += c : "right" === r && (d -= c) : "left" === r ? d -= h : "right" === r && (d += h), {
      x: Ht(d, 0, n.width - e.width),
      y: Ht(u, 0, n.height - e.height)
    };
  }

  function Es(t, e, i) {
    var n = Be(i.padding);
    return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - n.right : t.x + n.left;
  }

  function Is(t) {
    return Ds([], Cs(t));
  }

  function zs(t, e) {
    var i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
    return i ? t.override(i) : t;
  }

  var Fs =
  /*#__PURE__*/
  function (_Mn8) {
    _inherits(Fs, _Mn8);

    function Fs(t) {
      var _this13;

      _classCallCheck(this, Fs);

      _this13 = _possibleConstructorReturn(this, _getPrototypeOf(Fs).call(this)), _this13.opacity = 0, _this13._active = [], _this13._chart = t._chart, _this13._eventPosition = void 0, _this13._size = void 0, _this13._cachedAnimations = void 0, _this13._tooltipItems = [], _this13.$animations = void 0, _this13.$context = void 0, _this13.options = t.options, _this13.dataPoints = void 0, _this13.title = void 0, _this13.beforeBody = void 0, _this13.body = void 0, _this13.afterBody = void 0, _this13.footer = void 0, _this13.xAlign = void 0, _this13.yAlign = void 0, _this13.x = void 0, _this13.y = void 0, _this13.height = void 0, _this13.width = void 0, _this13.caretX = void 0, _this13.caretY = void 0, _this13.labelColors = void 0, _this13.labelPointStyles = void 0, _this13.labelTextColors = void 0;
      return _this13;
    }

    _createClass(Fs, [{
      key: "initialize",
      value: function initialize(t) {
        this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
      }
    }, {
      key: "_resolveAnimations",
      value: function _resolveAnimations() {
        var t = this,
            e = t._cachedAnimations;
        if (e) return e;
        var i = t._chart,
            n = t.options.setContext(t.getContext()),
            o = n.enabled && i.options.animation && n.animations,
            s = new hn(t._chart, o);
        return o._cacheable && (t._cachedAnimations = Object.freeze(s)), s;
      }
    }, {
      key: "getContext",
      value: function getContext() {
        var t = this;
        return t.$context || (t.$context = (e = t._chart.getContext(), i = t, n = t._tooltipItems, Object.assign(Object.create(e), {
          tooltip: i,
          tooltipItems: n,
          type: "tooltip"
        })));
        var e, i, n;
      }
    }, {
      key: "getTitle",
      value: function getTitle(t, e) {
        var i = this,
            n = e.callbacks,
            o = n.beforeTitle.apply(i, [t]),
            s = n.title.apply(i, [t]),
            a = n.afterTitle.apply(i, [t]);
        var r = [];
        return r = Ds(r, Cs(o)), r = Ds(r, Cs(s)), r = Ds(r, Cs(a)), r;
      }
    }, {
      key: "getBeforeBody",
      value: function getBeforeBody(t, e) {
        return Is(e.callbacks.beforeBody.apply(this, [t]));
      }
    }, {
      key: "getBody",
      value: function getBody(t, e) {
        var i = this,
            n = e.callbacks,
            o = [];
        return J(t, function (t) {
          var e = {
            before: [],
            lines: [],
            after: []
          },
              s = zs(n, t);
          Ds(e.before, Cs(s.beforeLabel.call(i, t))), Ds(e.lines, s.label.call(i, t)), Ds(e.after, Cs(s.afterLabel.call(i, t))), o.push(e);
        }), o;
      }
    }, {
      key: "getAfterBody",
      value: function getAfterBody(t, e) {
        return Is(e.callbacks.afterBody.apply(this, [t]));
      }
    }, {
      key: "getFooter",
      value: function getFooter(t, e) {
        var i = this,
            n = e.callbacks,
            o = n.beforeFooter.apply(i, [t]),
            s = n.footer.apply(i, [t]),
            a = n.afterFooter.apply(i, [t]);
        var r = [];
        return r = Ds(r, Cs(o)), r = Ds(r, Cs(s)), r = Ds(r, Cs(a)), r;
      }
    }, {
      key: "_createItems",
      value: function _createItems(t) {
        var e = this,
            i = e._active,
            n = e._chart.data,
            o = [],
            s = [],
            a = [];
        var r,
            l,
            c = [];

        for (r = 0, l = i.length; r < l; ++r) {
          c.push(Os(e._chart, i[r]));
        }

        return t.filter && (c = c.filter(function (e, i, o) {
          return t.filter(e, i, o, n);
        })), t.itemSort && (c = c.sort(function (e, i) {
          return t.itemSort(e, i, n);
        })), J(c, function (i) {
          var n = zs(t.callbacks, i);
          o.push(n.labelColor.call(e, i)), s.push(n.labelPointStyle.call(e, i)), a.push(n.labelTextColor.call(e, i));
        }), e.labelColors = o, e.labelPointStyles = s, e.labelTextColors = a, e.dataPoints = c, c;
      }
    }, {
      key: "update",
      value: function update(t, e) {
        var i = this,
            n = i.options.setContext(i.getContext()),
            o = i._active;
        var s,
            a = [];

        if (o.length) {
          var _t57 = Ps[n.position].call(i, o, i._eventPosition);

          a = i._createItems(n), i.title = i.getTitle(a, n), i.beforeBody = i.getBeforeBody(a, n), i.body = i.getBody(a, n), i.afterBody = i.getAfterBody(a, n), i.footer = i.getFooter(a, n);

          var _e54 = i._size = Ts(i, n),
              _r19 = Object.assign({}, _t57, _e54),
              _l22 = Ls(i._chart, n, _r19),
              _c24 = Rs(n, _r19, _l22, i._chart);

          i.xAlign = _l22.xAlign, i.yAlign = _l22.yAlign, s = {
            opacity: 1,
            x: _c24.x,
            y: _c24.y,
            width: _e54.width,
            height: _e54.height,
            caretX: _t57.x,
            caretY: _t57.y
          };
        } else 0 !== i.opacity && (s = {
          opacity: 0
        });

        i._tooltipItems = a, i.$context = void 0, s && i._resolveAnimations().update(i, s), t && n.external && n.external.call(i, {
          chart: i._chart,
          tooltip: i,
          replay: e
        });
      }
    }, {
      key: "drawCaret",
      value: function drawCaret(t, e, i, n) {
        var o = this.getCaretPosition(t, i, n);
        e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
      }
    }, {
      key: "getCaretPosition",
      value: function getCaretPosition(t, e, i) {
        var n = this.xAlign,
            o = this.yAlign,
            s = i.cornerRadius,
            a = i.caretSize,
            r = t.x,
            l = t.y,
            c = e.width,
            h = e.height;
        var d, u, f, g, p, m;
        return "center" === o ? (p = l + h / 2, "left" === n ? (d = r, u = d - a, g = p + a, m = p - a) : (d = r + c, u = d + a, g = p - a, m = p + a), f = d) : (u = "left" === n ? r + s + a : "right" === n ? r + c - s - a : this.caretX, "top" === o ? (g = l, p = g - a, d = u - a, f = u + a) : (g = l + h, p = g + a, d = u + a, f = u - a), m = g), {
          x1: d,
          x2: u,
          x3: f,
          y1: g,
          y2: p,
          y3: m
        };
      }
    }, {
      key: "drawTitle",
      value: function drawTitle(t, e, i) {
        var n = this,
            o = n.title,
            s = o.length;
        var a, r, l;

        if (s) {
          var _c25 = Ti(i.rtl, n.x, n.width);

          for (t.x = Es(n, i.titleAlign, i), e.textAlign = _c25.textAlign(i.titleAlign), e.textBaseline = "middle", a = Ve(i.titleFont), r = i.titleSpacing, e.fillStyle = i.titleColor, e.font = a.string, l = 0; l < s; ++l) {
            e.fillText(o[l], _c25.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + r, l + 1 === s && (t.y += i.titleMarginBottom - r);
          }
        }
      }
    }, {
      key: "_drawColorBox",
      value: function _drawColorBox(t, e, i, n, o) {
        var s = this,
            a = s.labelColors[i],
            r = s.labelPointStyles[i],
            l = o.boxHeight,
            c = o.boxWidth,
            h = Ve(o.bodyFont),
            d = Es(s, "left", o),
            u = n.x(d),
            f = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0,
            g = e.y + f;

        if (o.usePointStyle) {
          var _e55 = {
            radius: Math.min(c, l) / 2,
            pointStyle: r.pointStyle,
            rotation: r.rotation,
            borderWidth: 1
          },
              _i58 = n.leftForLtr(u, c) + c / 2,
              _s26 = g + l / 2;

          t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Kt(t, _e55, _i58, _s26), t.strokeStyle = a.borderColor, t.fillStyle = a.backgroundColor, Kt(t, _e55, _i58, _s26);
        } else {
          t.lineWidth = a.borderWidth || 1, t.strokeStyle = a.borderColor, t.setLineDash(a.borderDash || []), t.lineDashOffset = a.borderDashOffset || 0;

          var _e56 = n.leftForLtr(u, c),
              _i59 = n.leftForLtr(n.xPlus(u, 1), c - 2),
              _s27 = Fe(a.borderRadius);

          Object.values(_s27).some(function (t) {
            return 0 !== t;
          }) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, ne(t, {
            x: _e56,
            y: g,
            w: c,
            h: l,
            radius: _s27
          }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), ne(t, {
            x: _i59,
            y: g + 1,
            w: c - 2,
            h: l - 2,
            radius: _s27
          }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(_e56, g, c, l), t.strokeRect(_e56, g, c, l), t.fillStyle = a.backgroundColor, t.fillRect(_i59, g + 1, c - 2, l - 2));
        }

        t.fillStyle = s.labelTextColors[i];
      }
    }, {
      key: "drawBody",
      value: function drawBody(t, e, i) {
        var n = this,
            o = n.body,
            s = i.bodySpacing,
            a = i.bodyAlign,
            r = i.displayColors,
            l = i.boxHeight,
            c = i.boxWidth,
            h = Ve(i.bodyFont);
        var d = h.lineHeight,
            u = 0;

        var f = Ti(i.rtl, n.x, n.width),
            g = function g(i) {
          e.fillText(i, f.x(t.x + u), t.y + d / 2), t.y += d + s;
        },
            p = f.textAlign(a);

        var m, x, b, _, y, v, w;

        for (e.textAlign = a, e.textBaseline = "middle", e.font = h.string, t.x = Es(n, p, i), e.fillStyle = i.bodyColor, J(n.beforeBody, g), u = r && "right" !== p ? "center" === a ? c / 2 + 1 : c + 2 : 0, _ = 0, v = o.length; _ < v; ++_) {
          for (m = o[_], x = n.labelTextColors[_], e.fillStyle = x, J(m.before, g), b = m.lines, r && b.length && (n._drawColorBox(e, t, _, f, i), d = Math.max(h.lineHeight, l)), y = 0, w = b.length; y < w; ++y) {
            g(b[y]), d = h.lineHeight;
          }

          J(m.after, g);
        }

        u = 0, d = h.lineHeight, J(n.afterBody, g), t.y -= s;
      }
    }, {
      key: "drawFooter",
      value: function drawFooter(t, e, i) {
        var n = this,
            o = n.footer,
            s = o.length;
        var a, r;

        if (s) {
          var _l23 = Ti(i.rtl, n.x, n.width);

          for (t.x = Es(n, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = _l23.textAlign(i.footerAlign), e.textBaseline = "middle", a = Ve(i.footerFont), e.fillStyle = i.footerColor, e.font = a.string, r = 0; r < s; ++r) {
            e.fillText(o[r], _l23.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + i.footerSpacing;
          }
        }
      }
    }, {
      key: "drawBackground",
      value: function drawBackground(t, e, i, n) {
        var o = this.xAlign,
            s = this.yAlign,
            a = t.x,
            r = t.y,
            l = i.width,
            c = i.height,
            h = n.cornerRadius;
        e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a + h, r), "top" === s && this.drawCaret(t, e, i, n), e.lineTo(a + l - h, r), e.quadraticCurveTo(a + l, r, a + l, r + h), "center" === s && "right" === o && this.drawCaret(t, e, i, n), e.lineTo(a + l, r + c - h), e.quadraticCurveTo(a + l, r + c, a + l - h, r + c), "bottom" === s && this.drawCaret(t, e, i, n), e.lineTo(a + h, r + c), e.quadraticCurveTo(a, r + c, a, r + c - h), "center" === s && "left" === o && this.drawCaret(t, e, i, n), e.lineTo(a, r + h), e.quadraticCurveTo(a, r, a + h, r), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
      }
    }, {
      key: "_updateAnimationTarget",
      value: function _updateAnimationTarget(t) {
        var e = this,
            i = e._chart,
            n = e.$animations,
            o = n && n.x,
            s = n && n.y;

        if (o || s) {
          var _n45 = Ps[t.position].call(e, e._active, e._eventPosition);

          if (!_n45) return;

          var _a27 = e._size = Ts(e, t),
              _r20 = Object.assign({}, _n45, e._size),
              _l24 = Ls(i, t, _r20),
              _c26 = Rs(t, _r20, _l24, i);

          o._to === _c26.x && s._to === _c26.y || (e.xAlign = _l24.xAlign, e.yAlign = _l24.yAlign, e.width = _a27.width, e.height = _a27.height, e.caretX = _n45.x, e.caretY = _n45.y, e._resolveAnimations().update(e, _c26));
        }
      }
    }, {
      key: "draw",
      value: function draw(t) {
        var e = this,
            i = e.options.setContext(e.getContext());
        var n = e.opacity;
        if (!n) return;

        e._updateAnimationTarget(i);

        var o = {
          width: e.width,
          height: e.height
        },
            s = {
          x: e.x,
          y: e.y
        };
        n = Math.abs(n) < .001 ? 0 : n;
        var a = Be(i.padding),
            r = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
        i.enabled && r && (t.save(), t.globalAlpha = n, e.drawBackground(s, t, o, i), Ai(t, i.textDirection), s.y += a.top, e.drawTitle(s, t, i), e.drawBody(s, t, i), e.drawFooter(s, t, i), Li(t, i.textDirection), t.restore());
      }
    }, {
      key: "getActiveElements",
      value: function getActiveElements() {
        return this._active || [];
      }
    }, {
      key: "setActiveElements",
      value: function setActiveElements(t, e) {
        var i = this,
            n = i._active,
            o = t.map(function (_ref18) {
          var t = _ref18.datasetIndex,
              e = _ref18.index;

          var n = i._chart.getDatasetMeta(t);

          if (!n) throw new Error("Cannot find a dataset at index " + t);
          return {
            datasetIndex: t,
            element: n.data[e],
            index: e
          };
        }),
            s = !tt(n, o),
            a = i._positionChanged(o, e);

        (s || a) && (i._active = o, i._eventPosition = e, i.update(!0));
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(t, e) {
        var i = this,
            n = i.options,
            o = i._active || [];
        var s = !1,
            a = [];
        "mouseout" !== t.type && (a = i._chart.getElementsAtEventForMode(t, n.mode, n, e), n.reverse && a.reverse());

        var r = i._positionChanged(a, t);

        return s = e || !tt(a, o) || r, s && (i._active = a, (n.enabled || n.external) && (i._eventPosition = {
          x: t.x,
          y: t.y
        }, i.update(!0, e))), s;
      }
    }, {
      key: "_positionChanged",
      value: function _positionChanged(t, e) {
        var i = this.caretX,
            n = this.caretY,
            o = this.options,
            s = Ps[o.position].call(this, t, e);
        return !1 !== s && (i !== s.x || n !== s.y);
      }
    }]);

    return Fs;
  }(Mn);

  Fs.positioners = Ps;
  var Bs = {
    id: "tooltip",
    _element: Fs,
    positioners: Ps,
    afterInit: function afterInit(t, e, i) {
      i && (t.tooltip = new Fs({
        _chart: t,
        options: i
      }));
    },
    beforeUpdate: function beforeUpdate(t, e, i) {
      t.tooltip && t.tooltip.initialize(i);
    },
    reset: function reset(t, e, i) {
      t.tooltip && t.tooltip.initialize(i);
    },
    afterDraw: function afterDraw(t) {
      var e = t.tooltip,
          i = {
        tooltip: e
      };
      !1 !== t.notifyPlugins("beforeTooltipDraw", i) && (e && e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i));
    },
    afterEvent: function afterEvent(t, e) {
      if (t.tooltip) {
        var _i60 = e.replay;
        t.tooltip.handleEvent(e.event, _i60) && (e.changed = !0);
      }
    },
    defaults: {
      enabled: !0,
      external: null,
      position: "average",
      backgroundColor: "rgba(0,0,0,0.8)",
      titleColor: "#fff",
      titleFont: {
        weight: "bold"
      },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: "left",
      bodyColor: "#fff",
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: "left",
      footerColor: "#fff",
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: {
        weight: "bold"
      },
      footerAlign: "left",
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: function boxHeight(t, e) {
        return e.bodyFont.size;
      },
      boxWidth: function boxWidth(t, e) {
        return e.bodyFont.size;
      },
      multiKeyBackground: "#fff",
      displayColors: !0,
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      animation: {
        duration: 400,
        easing: "easeOutQuart"
      },
      animations: {
        numbers: {
          type: "number",
          properties: ["x", "y", "width", "height", "caretX", "caretY"]
        },
        opacity: {
          easing: "linear",
          duration: 200
        }
      },
      callbacks: {
        beforeTitle: H,
        title: function title(t) {
          if (t.length > 0) {
            var _e57 = t[0],
                _i61 = _e57.chart.data.labels,
                _n46 = _i61 ? _i61.length : 0;

            if (this && this.options && "dataset" === this.options.mode) return _e57.dataset.label || "";
            if (_e57.label) return _e57.label;
            if (_n46 > 0 && _e57.dataIndex < _n46) return _i61[_e57.dataIndex];
          }

          return "";
        },
        afterTitle: H,
        beforeBody: H,
        beforeLabel: H,
        label: function label(t) {
          if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
          var e = t.dataset.label || "";
          e && (e += ": ");
          var i = t.formattedValue;
          return $(i) || (e += i), e;
        },
        labelColor: function labelColor(t) {
          var e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
          return {
            borderColor: e.borderColor,
            backgroundColor: e.backgroundColor,
            borderWidth: e.borderWidth,
            borderDash: e.borderDash,
            borderDashOffset: e.borderDashOffset,
            borderRadius: 0
          };
        },
        labelTextColor: function labelTextColor() {
          return this.options.bodyColor;
        },
        labelPointStyle: function labelPointStyle(t) {
          var e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
          return {
            pointStyle: e.pointStyle,
            rotation: e.rotation
          };
        },
        afterLabel: H,
        afterBody: H,
        beforeFooter: H,
        footer: H,
        afterFooter: H
      }
    },
    defaultRoutes: {
      bodyFont: "font",
      footerFont: "font",
      titleFont: "font"
    },
    descriptors: {
      _scriptable: function _scriptable(t) {
        return "filter" !== t && "itemSort" !== t && "external" !== t;
      },
      _indexable: !1,
      callbacks: {
        _scriptable: !1,
        _indexable: !1
      },
      animation: {
        _fallback: !1
      },
      animations: {
        _fallback: "animation"
      }
    },
    additionalOptionScopes: ["interaction"]
  },
      Vs = Object.freeze({
    __proto__: null,
    Decimation: ts,
    Filler: bs,
    Legend: vs,
    SubTitle: Ss,
    Title: Ms,
    Tooltip: Bs
  });

  function Ws(t, e, i) {
    var n = t.indexOf(e);
    if (-1 === n) return function (t, e, i) {
      return "string" == typeof e ? t.push(e) - 1 : isNaN(e) ? null : i;
    }(t, e, i);
    return n !== t.lastIndexOf(e) ? i : n;
  }

  var Ns =
  /*#__PURE__*/
  function (_En) {
    _inherits(Ns, _En);

    function Ns(t) {
      var _this14;

      _classCallCheck(this, Ns);

      _this14 = _possibleConstructorReturn(this, _getPrototypeOf(Ns).call(this, t)), _this14._startValue = void 0, _this14._valueRange = 0;
      return _this14;
    }

    _createClass(Ns, [{
      key: "parse",
      value: function parse(t, e) {
        if ($(t)) return null;
        var i = this.getLabels();
        return function (t, e) {
          return null === t ? null : Ht(Math.round(t), 0, e);
        }(e = isFinite(e) && i[e] === t ? e : Ws(i, t, K(e, t)), i.length - 1);
      }
    }, {
      key: "determineDataLimits",
      value: function determineDataLimits() {
        var t = this,
            _t$getUserBounds2 = t.getUserBounds(),
            e = _t$getUserBounds2.minDefined,
            i = _t$getUserBounds2.maxDefined;

        var _t$getMinMax = t.getMinMax(!0),
            n = _t$getMinMax.min,
            o = _t$getMinMax.max;

        "ticks" === t.options.bounds && (e || (n = 0), i || (o = t.getLabels().length - 1)), t.min = n, t.max = o;
      }
    }, {
      key: "buildTicks",
      value: function buildTicks() {
        var t = this,
            e = t.min,
            i = t.max,
            n = t.options.offset,
            o = [];
        var s = t.getLabels();
        s = 0 === e && i === s.length - 1 ? s : s.slice(e, i + 1), t._valueRange = Math.max(s.length - (n ? 0 : 1), 1), t._startValue = t.min - (n ? .5 : 0);

        for (var _t58 = e; _t58 <= i; _t58++) {
          o.push({
            value: _t58
          });
        }

        return o;
      }
    }, {
      key: "getLabelForValue",
      value: function getLabelForValue(t) {
        var e = this.getLabels();
        return t >= 0 && t < e.length ? e[t] : t;
      }
    }, {
      key: "configure",
      value: function configure() {
        var t = this;
        _get2(_getPrototypeOf(Ns.prototype), "configure", this).call(this), t.isHorizontal() || (t._reversePixels = !t._reversePixels);
      }
    }, {
      key: "getPixelForValue",
      value: function getPixelForValue(t) {
        var e = this;
        return "number" != typeof t && (t = e.parse(t)), null === t ? NaN : e.getPixelForDecimal((t - e._startValue) / e._valueRange);
      }
    }, {
      key: "getPixelForTick",
      value: function getPixelForTick(t) {
        var e = this.ticks;
        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(t) {
        var e = this;
        return Math.round(e._startValue + e.getDecimalForPixel(t) * e._valueRange);
      }
    }, {
      key: "getBasePixel",
      value: function getBasePixel() {
        return this.bottom;
      }
    }]);

    return Ns;
  }(En);

  function Hs(t, e, _ref19) {
    var i = _ref19.horizontal,
        n = _ref19.minRotation;
    var o = Et(n),
        s = (i ? Math.sin(o) : Math.cos(o)) || .001,
        a = .75 * e * ("" + t).length;
    return Math.min(e / s, a);
  }

  Ns.id = "category", Ns.defaults = {
    ticks: {
      callback: Ns.prototype.getLabelForValue
    }
  };

  var js =
  /*#__PURE__*/
  function (_En2) {
    _inherits(js, _En2);

    function js(t) {
      var _this15;

      _classCallCheck(this, js);

      _this15 = _possibleConstructorReturn(this, _getPrototypeOf(js).call(this, t)), _this15.start = void 0, _this15.end = void 0, _this15._startValue = void 0, _this15._endValue = void 0, _this15._valueRange = 0;
      return _this15;
    }

    _createClass(js, [{
      key: "parse",
      value: function parse(t, e) {
        return $(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t;
      }
    }, {
      key: "handleTickRangeOptions",
      value: function handleTickRangeOptions() {
        var t = this,
            e = t.options.beginAtZero,
            _t$getUserBounds3 = t.getUserBounds(),
            i = _t$getUserBounds3.minDefined,
            n = _t$getUserBounds3.maxDefined;

        var o = t.min,
            s = t.max;

        var a = function a(t) {
          return o = i ? o : t;
        },
            r = function r(t) {
          return s = n ? s : t;
        };

        if (e) {
          var _t59 = Dt(o),
              _e58 = Dt(s);

          _t59 < 0 && _e58 < 0 ? r(0) : _t59 > 0 && _e58 > 0 && a(0);
        }

        if (o === s) {
          var _t60 = 1;
          (s >= Number.MAX_SAFE_INTEGER || o <= Number.MIN_SAFE_INTEGER) && (_t60 = Math.abs(.05 * s)), r(s + _t60), e || a(o - _t60);
        }

        t.min = o, t.max = s;
      }
    }, {
      key: "getTickLimit",
      value: function getTickLimit() {
        var t = this,
            e = t.options.ticks;
        var i,
            n = e.maxTicksLimit,
            o = e.stepSize;
        return o ? i = Math.ceil(t.max / o) - Math.floor(t.min / o) + 1 : (i = t.computeTickLimit(), n = n || 11), n && (i = Math.min(n, i)), i;
      }
    }, {
      key: "computeTickLimit",
      value: function computeTickLimit() {
        return Number.POSITIVE_INFINITY;
      }
    }, {
      key: "buildTicks",
      value: function buildTicks() {
        var t = this,
            e = t.options,
            i = e.ticks;
        var n = t.getTickLimit();
        n = Math.max(2, n);

        var o = function (t, e) {
          var i = [],
              n = t.bounds,
              o = t.step,
              s = t.min,
              a = t.max,
              r = t.precision,
              l = t.count,
              c = t.maxTicks,
              h = t.maxDigits,
              d = t.includeBounds,
              u = o || 1,
              f = c - 1,
              g = e.min,
              p = e.max,
              m = !$(s),
              x = !$(a),
              b = !$(l),
              _ = (p - g) / (h + 1);

          var y,
              v,
              w,
              M,
              k = Ct((p - g) / f / u) * u;
          if (k < 1e-14 && !m && !x) return [{
            value: g
          }, {
            value: p
          }];
          M = Math.ceil(p / k) - Math.floor(g / k), M > f && (k = Ct(M * k / f / u) * u), $(r) || (y = Math.pow(10, r), k = Math.ceil(k * y) / y), "ticks" === n ? (v = Math.floor(g / k) * k, w = Math.ceil(p / k) * k) : (v = g, w = p), m && x && o && Lt((a - s) / o, k / 1e3) ? (M = Math.round(Math.min((a - s) / k, c)), k = (a - s) / M, v = s, w = a) : b ? (v = m ? s : v, w = x ? a : w, M = l - 1, k = (w - v) / M) : (M = (w - v) / k, M = At(M, Math.round(M), k / 1e3) ? Math.round(M) : Math.ceil(M));
          var S = Math.max(zt(k), zt(v));
          y = Math.pow(10, $(r) ? S : r), v = Math.round(v * y) / y, w = Math.round(w * y) / y;
          var P = 0;

          for (m && (d && v !== s ? (i.push({
            value: s
          }), v < s && P++, At(Math.round((v + P * k) * y) / y, s, Hs(s, _, t)) && P++) : v < s && P++); P < M; ++P) {
            i.push({
              value: Math.round((v + P * k) * y) / y
            });
          }

          return x && d && w !== a ? At(i[i.length - 1].value, a, Hs(a, _, t)) ? i[i.length - 1].value = a : i.push({
            value: a
          }) : x && w !== a || i.push({
            value: w
          }), i;
        }({
          maxTicks: n,
          bounds: e.bounds,
          min: e.min,
          max: e.max,
          precision: i.precision,
          step: i.stepSize,
          count: i.count,
          maxDigits: t._maxDigits(),
          horizontal: t.isHorizontal(),
          minRotation: i.minRotation || 0,
          includeBounds: !1 !== i.includeBounds
        }, t._range || t);

        return "ticks" === e.bounds && Rt(o, t, "value"), e.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), o;
      }
    }, {
      key: "configure",
      value: function configure() {
        var t = this,
            e = t.ticks;
        var i = t.min,
            n = t.max;

        if (_get2(_getPrototypeOf(js.prototype), "configure", this).call(this), t.options.offset && e.length) {
          var _t61 = (n - i) / Math.max(e.length - 1, 1) / 2;

          i -= _t61, n += _t61;
        }

        t._startValue = i, t._endValue = n, t._valueRange = n - i;
      }
    }, {
      key: "getLabelForValue",
      value: function getLabelForValue(t) {
        return Oi(t, this.chart.options.locale);
      }
    }]);

    return js;
  }(En);

  var $s =
  /*#__PURE__*/
  function (_js) {
    _inherits($s, _js);

    function $s() {
      _classCallCheck(this, $s);

      return _possibleConstructorReturn(this, _getPrototypeOf($s).apply(this, arguments));
    }

    _createClass($s, [{
      key: "determineDataLimits",
      value: function determineDataLimits() {
        var t = this,
            _t$getMinMax2 = t.getMinMax(!0),
            e = _t$getMinMax2.min,
            i = _t$getMinMax2.max;

        t.min = X(e) ? e : 0, t.max = X(i) ? i : 1, t.handleTickRangeOptions();
      }
    }, {
      key: "computeTickLimit",
      value: function computeTickLimit() {
        var t = this,
            e = t.isHorizontal(),
            i = e ? t.width : t.height,
            n = Et(t.options.ticks.minRotation),
            o = (e ? Math.sin(n) : Math.cos(n)) || .001,
            s = t._resolveTickFontOptions(0);

        return Math.ceil(i / Math.min(40, s.lineHeight / o));
      }
    }, {
      key: "getPixelForValue",
      value: function getPixelForValue(t) {
        return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(t) {
        return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
      }
    }]);

    return $s;
  }(js);

  function Ys(t) {
    return 1 === t / Math.pow(10, Math.floor(Pt(t)));
  }

  $s.id = "linear", $s.defaults = {
    ticks: {
      callback: Sn.formatters.numeric
    }
  };

  var Us =
  /*#__PURE__*/
  function (_En3) {
    _inherits(Us, _En3);

    function Us(t) {
      var _this16;

      _classCallCheck(this, Us);

      _this16 = _possibleConstructorReturn(this, _getPrototypeOf(Us).call(this, t)), _this16.start = void 0, _this16.end = void 0, _this16._startValue = void 0, _this16._valueRange = 0;
      return _this16;
    }

    _createClass(Us, [{
      key: "parse",
      value: function parse(t, e) {
        var i = js.prototype.parse.apply(this, [t, e]);
        if (0 !== i) return X(i) && i > 0 ? i : null;
        this._zero = !0;
      }
    }, {
      key: "determineDataLimits",
      value: function determineDataLimits() {
        var t = this,
            _t$getMinMax3 = t.getMinMax(!0),
            e = _t$getMinMax3.min,
            i = _t$getMinMax3.max;

        t.min = X(e) ? Math.max(0, e) : null, t.max = X(i) ? Math.max(0, i) : null, t.options.beginAtZero && (t._zero = !0), t.handleTickRangeOptions();
      }
    }, {
      key: "handleTickRangeOptions",
      value: function handleTickRangeOptions() {
        var t = this,
            _t$getUserBounds4 = t.getUserBounds(),
            e = _t$getUserBounds4.minDefined,
            i = _t$getUserBounds4.maxDefined;

        var n = t.min,
            o = t.max;

        var s = function s(t) {
          return n = e ? n : t;
        },
            a = function a(t) {
          return o = i ? o : t;
        },
            r = function r(t, e) {
          return Math.pow(10, Math.floor(Pt(t)) + e);
        };

        n === o && (n <= 0 ? (s(1), a(10)) : (s(r(n, -1)), a(r(o, 1)))), n <= 0 && s(r(o, -1)), o <= 0 && a(r(n, 1)), t._zero && t.min !== t._suggestedMin && n === r(t.min, 0) && s(r(n, -1)), t.min = n, t.max = o;
      }
    }, {
      key: "buildTicks",
      value: function buildTicks() {
        var t = this,
            e = t.options,
            i = function (t, e) {
          var i = Math.floor(Pt(e.max)),
              n = Math.ceil(e.max / Math.pow(10, i)),
              o = [];
          var s = q(t.min, Math.pow(10, Math.floor(Pt(e.min)))),
              a = Math.floor(Pt(s)),
              r = Math.floor(s / Math.pow(10, a)),
              l = a < 0 ? Math.pow(10, Math.abs(a)) : 1;

          do {
            o.push({
              value: s,
              major: Ys(s)
            }), ++r, 10 === r && (r = 1, ++a, l = a >= 0 ? 1 : l), s = Math.round(r * Math.pow(10, a) * l) / l;
          } while (a < i || a === i && r < n);

          var c = q(t.max, s);
          return o.push({
            value: c,
            major: Ys(s)
          }), o;
        }({
          min: t._userMin,
          max: t._userMax
        }, t);

        return "ticks" === e.bounds && Rt(i, t, "value"), e.reverse ? (i.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i;
      }
    }, {
      key: "getLabelForValue",
      value: function getLabelForValue(t) {
        return void 0 === t ? "0" : Oi(t, this.chart.options.locale);
      }
    }, {
      key: "configure",
      value: function configure() {
        var t = this,
            e = t.min;
        _get2(_getPrototypeOf(Us.prototype), "configure", this).call(this), t._startValue = Pt(e), t._valueRange = Pt(t.max) - Pt(e);
      }
    }, {
      key: "getPixelForValue",
      value: function getPixelForValue(t) {
        var e = this;
        return void 0 !== t && 0 !== t || (t = e.min), null === t || isNaN(t) ? NaN : e.getPixelForDecimal(t === e.min ? 0 : (Pt(t) - e._startValue) / e._valueRange);
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(t) {
        var e = this,
            i = e.getDecimalForPixel(t);
        return Math.pow(10, e._startValue + i * e._valueRange);
      }
    }]);

    return Us;
  }(En);

  function Xs(t) {
    var e = t.ticks;

    if (e.display && t.display) {
      var _t62 = Be(e.backdropPadding);

      return K(e.font && e.font.size, xt.font.size) + _t62.height;
    }

    return 0;
  }

  function qs(t, e, i, n, o) {
    return t === n || t === o ? {
      start: e - i / 2,
      end: e + i / 2
    } : t < n || t > o ? {
      start: e - i,
      end: e
    } : {
      start: e,
      end: e + i
    };
  }

  function Ks(t) {
    var e = {
      l: 0,
      r: t.width,
      t: 0,
      b: t.height - t.paddingTop
    },
        i = {},
        n = [],
        o = [],
        s = t.getLabels().length;

    for (var _c27 = 0; _c27 < s; _c27++) {
      var _s28 = t.options.pointLabels.setContext(t.getPointLabelContext(_c27));

      o[_c27] = _s28.padding;

      var _h16 = t.getPointPosition(_c27, t.drawingArea + o[_c27]),
          _d12 = Ve(_s28.font),
          _u9 = (a = t.ctx, r = _d12, l = Y(l = t._pointLabels[_c27]) ? l : [l], {
        w: Ut(a, r.string, l),
        h: l.length * r.lineHeight
      });

      n[_c27] = _u9;

      var _f6 = t.getIndexAngle(_c27),
          _g6 = It(_f6),
          _p3 = qs(_g6, _h16.x, _u9.w, 0, 180),
          _m5 = qs(_g6, _h16.y, _u9.h, 90, 270);

      _p3.start < e.l && (e.l = _p3.start, i.l = _f6), _p3.end > e.r && (e.r = _p3.end, i.r = _f6), _m5.start < e.t && (e.t = _m5.start, i.t = _f6), _m5.end > e.b && (e.b = _m5.end, i.b = _f6);
    }

    var a, r, l;
    t._setReductions(t.drawingArea, e, i), t._pointLabelItems = function (t, e, i) {
      var n = [],
          o = t.getLabels().length,
          s = t.options,
          a = Xs(s),
          r = t.getDistanceFromCenterForValue(s.ticks.reverse ? t.min : t.max);

      for (var _s29 = 0; _s29 < o; _s29++) {
        var _o37 = 0 === _s29 ? a / 2 : 0,
            _l25 = t.getPointPosition(_s29, r + _o37 + i[_s29]),
            _c28 = It(t.getIndexAngle(_s29)),
            _h17 = e[_s29],
            _d13 = Qs(_l25.y, _h17.h, _c28),
            _u10 = Gs(_c28),
            _f7 = Zs(_l25.x, _h17.w, _u10);

        n.push({
          x: _l25.x,
          y: _d13,
          textAlign: _u10,
          left: _f7,
          top: _d13,
          right: _f7 + _h17.w,
          bottom: _d13 + _h17.h
        });
      }

      return n;
    }(t, n, o);
  }

  function Gs(t) {
    return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
  }

  function Zs(t, e, i) {
    return "right" === i ? t -= e : "center" === i && (t -= e / 2), t;
  }

  function Qs(t, e, i) {
    return 90 === i || 270 === i ? t -= e / 2 : (i > 270 || i < 90) && (t -= e), t;
  }

  function Js(t, e, i, n) {
    var o = t.ctx;
    if (i) o.arc(t.xCenter, t.yCenter, e, 0, _t);else {
      var _i62 = t.getPointPosition(0, e);

      o.moveTo(_i62.x, _i62.y);

      for (var _s30 = 1; _s30 < n; _s30++) {
        _i62 = t.getPointPosition(_s30, e), o.lineTo(_i62.x, _i62.y);
      }
    }
  }

  function ta(t) {
    return Tt(t) ? t : 0;
  }

  Us.id = "logarithmic", Us.defaults = {
    ticks: {
      callback: Sn.formatters.logarithmic,
      major: {
        enabled: !0
      }
    }
  };

  var ea =
  /*#__PURE__*/
  function (_js2) {
    _inherits(ea, _js2);

    function ea(t) {
      var _this17;

      _classCallCheck(this, ea);

      _this17 = _possibleConstructorReturn(this, _getPrototypeOf(ea).call(this, t)), _this17.xCenter = void 0, _this17.yCenter = void 0, _this17.drawingArea = void 0, _this17._pointLabels = [], _this17._pointLabelItems = [];
      return _this17;
    }

    _createClass(ea, [{
      key: "setDimensions",
      value: function setDimensions() {
        var t = this;
        t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = Xs(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2;
      }
    }, {
      key: "determineDataLimits",
      value: function determineDataLimits() {
        var t = this,
            _t$getMinMax4 = t.getMinMax(!1),
            e = _t$getMinMax4.min,
            i = _t$getMinMax4.max;

        t.min = X(e) && !isNaN(e) ? e : 0, t.max = X(i) && !isNaN(i) ? i : 0, t.handleTickRangeOptions();
      }
    }, {
      key: "computeTickLimit",
      value: function computeTickLimit() {
        return Math.ceil(this.drawingArea / Xs(this.options));
      }
    }, {
      key: "generateTickLabels",
      value: function generateTickLabels(t) {
        var e = this;
        js.prototype.generateTickLabels.call(e, t), e._pointLabels = e.getLabels().map(function (t, i) {
          var n = Q(e.options.pointLabels.callback, [t, i], e);
          return n || 0 === n ? n : "";
        });
      }
    }, {
      key: "fit",
      value: function fit() {
        var t = this,
            e = t.options;
        e.display && e.pointLabels.display ? Ks(t) : t.setCenterPoint(0, 0, 0, 0);
      }
    }, {
      key: "_setReductions",
      value: function _setReductions(t, e, i) {
        var n = this;
        var o = e.l / Math.sin(i.l),
            s = Math.max(e.r - n.width, 0) / Math.sin(i.r),
            a = -e.t / Math.cos(i.t),
            r = -Math.max(e.b - (n.height - n.paddingTop), 0) / Math.cos(i.b);
        o = ta(o), s = ta(s), a = ta(a), r = ta(r), n.drawingArea = Math.max(t / 2, Math.min(Math.floor(t - (o + s) / 2), Math.floor(t - (a + r) / 2))), n.setCenterPoint(o, s, a, r);
      }
    }, {
      key: "setCenterPoint",
      value: function setCenterPoint(t, e, i, n) {
        var o = this,
            s = o.width - e - o.drawingArea,
            a = t + o.drawingArea,
            r = i + o.drawingArea,
            l = o.height - o.paddingTop - n - o.drawingArea;
        o.xCenter = Math.floor((a + s) / 2 + o.left), o.yCenter = Math.floor((r + l) / 2 + o.top + o.paddingTop);
      }
    }, {
      key: "getIndexAngle",
      value: function getIndexAngle(t) {
        return Wt(t * (_t / this.getLabels().length) + Et(this.options.startAngle || 0));
      }
    }, {
      key: "getDistanceFromCenterForValue",
      value: function getDistanceFromCenterForValue(t) {
        var e = this;
        if ($(t)) return NaN;
        var i = e.drawingArea / (e.max - e.min);
        return e.options.reverse ? (e.max - t) * i : (t - e.min) * i;
      }
    }, {
      key: "getValueForDistanceFromCenter",
      value: function getValueForDistanceFromCenter(t) {
        if ($(t)) return NaN;
        var e = this,
            i = t / (e.drawingArea / (e.max - e.min));
        return e.options.reverse ? e.max - i : e.min + i;
      }
    }, {
      key: "getPointLabelContext",
      value: function getPointLabelContext(t) {
        var e = this,
            i = e._pointLabels || [];

        if (t >= 0 && t < i.length) {
          var _n47 = i[t];
          return function (t, e, i) {
            return Object.assign(Object.create(t), {
              label: i,
              index: e,
              type: "pointLabel"
            });
          }(e.getContext(), t, _n47);
        }
      }
    }, {
      key: "getPointPosition",
      value: function getPointPosition(t, e) {
        var i = this,
            n = i.getIndexAngle(t) - Mt;
        return {
          x: Math.cos(n) * e + i.xCenter,
          y: Math.sin(n) * e + i.yCenter,
          angle: n
        };
      }
    }, {
      key: "getPointPositionForValue",
      value: function getPointPositionForValue(t, e) {
        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
      }
    }, {
      key: "getBasePosition",
      value: function getBasePosition(t) {
        return this.getPointPositionForValue(t || 0, this.getBaseValue());
      }
    }, {
      key: "getPointLabelPosition",
      value: function getPointLabelPosition(t) {
        var _this$_pointLabelItem = this._pointLabelItems[t],
            e = _this$_pointLabelItem.left,
            i = _this$_pointLabelItem.top,
            n = _this$_pointLabelItem.right,
            o = _this$_pointLabelItem.bottom;
        return {
          left: e,
          top: i,
          right: n,
          bottom: o
        };
      }
    }, {
      key: "drawBackground",
      value: function drawBackground() {
        var t = this,
            _t$options3 = t.options,
            e = _t$options3.backgroundColor,
            i = _t$options3.grid.circular;

        if (e) {
          var _n48 = t.ctx;
          _n48.save(), _n48.beginPath(), Js(t, t.getDistanceFromCenterForValue(t._endValue), i, t.getLabels().length), _n48.closePath(), _n48.fillStyle = e, _n48.fill(), _n48.restore();
        }
      }
    }, {
      key: "drawGrid",
      value: function drawGrid() {
        var t = this,
            e = t.ctx,
            i = t.options,
            n = i.angleLines,
            o = i.grid,
            s = t.getLabels().length;
        var a, r, l;

        if (i.pointLabels.display && function (t, e) {
          var i = t.ctx,
              n = t.options.pointLabels;

          for (var _o38 = e - 1; _o38 >= 0; _o38--) {
            var _e59 = n.setContext(t.getPointLabelContext(_o38)),
                _s31 = Ve(_e59.font),
                _t$_pointLabelItems$_ = t._pointLabelItems[_o38],
                _a28 = _t$_pointLabelItems$_.x,
                _r21 = _t$_pointLabelItems$_.y,
                _l26 = _t$_pointLabelItems$_.textAlign,
                _c29 = _t$_pointLabelItems$_.left,
                _h18 = _t$_pointLabelItems$_.top,
                _d14 = _t$_pointLabelItems$_.right,
                _u11 = _t$_pointLabelItems$_.bottom,
                _f8 = _e59.backdropColor;

            if (!$(_f8)) {
              var _t63 = Be(_e59.backdropPadding);

              i.fillStyle = _f8, i.fillRect(_c29 - _t63.left, _h18 - _t63.top, _d14 - _c29 + _t63.width, _u11 - _h18 + _t63.height);
            }

            ee(i, t._pointLabels[_o38], _a28, _r21 + _s31.lineHeight / 2, _s31, {
              color: _e59.color,
              textAlign: _l26,
              textBaseline: "middle"
            });
          }
        }(t, s), o.display && t.ticks.forEach(function (e, i) {
          if (0 !== i) {
            r = t.getDistanceFromCenterForValue(e.value);

            var _n49 = o.setContext(t.getContext(i - 1));

            !function (t, e, i, n) {
              var o = t.ctx,
                  s = e.circular,
                  a = e.color,
                  r = e.lineWidth;
              !s && !n || !a || !r || i < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = r, o.setLineDash(e.borderDash), o.lineDashOffset = e.borderDashOffset, o.beginPath(), Js(t, i, s, n), o.closePath(), o.stroke(), o.restore());
            }(t, _n49, r, s);
          }
        }), n.display) {
          for (e.save(), a = t.getLabels().length - 1; a >= 0; a--) {
            var _o39 = n.setContext(t.getPointLabelContext(a)),
                _s32 = _o39.color,
                _c30 = _o39.lineWidth;

            _c30 && _s32 && (e.lineWidth = _c30, e.strokeStyle = _s32, e.setLineDash(_o39.borderDash), e.lineDashOffset = _o39.borderDashOffset, r = t.getDistanceFromCenterForValue(i.ticks.reverse ? t.min : t.max), l = t.getPointPosition(a, r), e.beginPath(), e.moveTo(t.xCenter, t.yCenter), e.lineTo(l.x, l.y), e.stroke());
          }

          e.restore();
        }
      }
    }, {
      key: "drawBorder",
      value: function drawBorder() {}
    }, {
      key: "drawLabels",
      value: function drawLabels() {
        var t = this,
            e = t.ctx,
            i = t.options,
            n = i.ticks;
        if (!n.display) return;
        var o = t.getIndexAngle(0);
        var s, a;
        e.save(), e.translate(t.xCenter, t.yCenter), e.rotate(o), e.textAlign = "center", e.textBaseline = "middle", t.ticks.forEach(function (o, r) {
          if (0 === r && !i.reverse) return;
          var l = n.setContext(t.getContext(r)),
              c = Ve(l.font);

          if (s = t.getDistanceFromCenterForValue(t.ticks[r].value), l.showLabelBackdrop) {
            e.font = c.string, a = e.measureText(o.label).width, e.fillStyle = l.backdropColor;

            var _t64 = Be(l.backdropPadding);

            e.fillRect(-a / 2 - _t64.left, -s - c.size / 2 - _t64.top, a + _t64.width, c.size + _t64.height);
          }

          ee(e, o.label, 0, -s, c, {
            color: l.color
          });
        }), e.restore();
      }
    }, {
      key: "drawTitle",
      value: function drawTitle() {}
    }]);

    return ea;
  }(js);

  ea.id = "radialLinear", ea.defaults = {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0
    },
    grid: {
      circular: !1
    },
    startAngle: 0,
    ticks: {
      showLabelBackdrop: !0,
      callback: Sn.formatters.numeric
    },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: {
        size: 10
      },
      callback: function callback(t) {
        return t;
      },
      padding: 5
    }
  }, ea.defaultRoutes = {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color"
  }, ea.descriptors = {
    angleLines: {
      _fallback: "grid"
    }
  };
  var ia = {
    millisecond: {
      common: !0,
      size: 1,
      steps: 1e3
    },
    second: {
      common: !0,
      size: 1e3,
      steps: 60
    },
    minute: {
      common: !0,
      size: 6e4,
      steps: 60
    },
    hour: {
      common: !0,
      size: 36e5,
      steps: 24
    },
    day: {
      common: !0,
      size: 864e5,
      steps: 30
    },
    week: {
      common: !1,
      size: 6048e5,
      steps: 4
    },
    month: {
      common: !0,
      size: 2628e6,
      steps: 12
    },
    quarter: {
      common: !1,
      size: 7884e6,
      steps: 4
    },
    year: {
      common: !0,
      size: 3154e7
    }
  },
      na = Object.keys(ia);

  function oa(t, e) {
    return t - e;
  }

  function sa(t, e) {
    if ($(e)) return null;
    var i = t._adapter,
        _t$_parseOpts = t._parseOpts,
        n = _t$_parseOpts.parser,
        o = _t$_parseOpts.round,
        s = _t$_parseOpts.isoWeekday;
    var a = e;
    return "function" == typeof n && (a = n(a)), X(a) || (a = "string" == typeof n ? i.parse(a, n) : i.parse(a)), null === a ? null : (o && (a = "week" !== o || !Tt(s) && !0 !== s ? i.startOf(a, o) : i.startOf(a, "isoWeek", s)), +a);
  }

  function aa(t, e, i, n) {
    var o = na.length;

    for (var _s33 = na.indexOf(t); _s33 < o - 1; ++_s33) {
      var _t65 = ia[na[_s33]],
          _o40 = _t65.steps ? _t65.steps : Number.MAX_SAFE_INTEGER;

      if (_t65.common && Math.ceil((i - e) / (_o40 * _t65.size)) <= n) return na[_s33];
    }

    return na[o - 1];
  }

  function ra(t, e, i) {
    if (i) {
      if (i.length) {
        var _oe = oe(i, e),
            _n50 = _oe.lo,
            _o41 = _oe.hi;

        t[i[_n50] >= e ? i[_n50] : i[_o41]] = !0;
      }
    } else t[e] = !0;
  }

  function la(t, e, i) {
    var n = [],
        o = {},
        s = e.length;
    var a, r;

    for (a = 0; a < s; ++a) {
      r = e[a], o[r] = a, n.push({
        value: r,
        major: !1
      });
    }

    return 0 !== s && i ? function (t, e, i, n) {
      var o = t._adapter,
          s = +o.startOf(e[0].value, n),
          a = e[e.length - 1].value;
      var r, l;

      for (r = s; r <= a; r = +o.add(r, 1, n)) {
        l = i[r], l >= 0 && (e[l].major = !0);
      }

      return e;
    }(t, n, o, i) : n;
  }

  var ca =
  /*#__PURE__*/
  function (_En4) {
    _inherits(ca, _En4);

    function ca(t) {
      var _this18;

      _classCallCheck(this, ca);

      _this18 = _possibleConstructorReturn(this, _getPrototypeOf(ca).call(this, t)), _this18._cache = {
        data: [],
        labels: [],
        all: []
      }, _this18._unit = "day", _this18._majorUnit = void 0, _this18._offsets = {}, _this18._normalized = !1, _this18._parseOpts = void 0;
      return _this18;
    }

    _createClass(ca, [{
      key: "init",
      value: function init(t, e) {
        var i = t.time || (t.time = {}),
            n = this._adapter = new co._date(t.adapters.date);
        st(i.displayFormats, n.formats()), this._parseOpts = {
          parser: i.parser,
          round: i.round,
          isoWeekday: i.isoWeekday
        }, _get2(_getPrototypeOf(ca.prototype), "init", this).call(this, t), this._normalized = e.normalized;
      }
    }, {
      key: "parse",
      value: function parse(t, e) {
        return void 0 === t ? null : sa(this, t);
      }
    }, {
      key: "beforeLayout",
      value: function beforeLayout() {
        _get2(_getPrototypeOf(ca.prototype), "beforeLayout", this).call(this), this._cache = {
          data: [],
          labels: [],
          all: []
        };
      }
    }, {
      key: "determineDataLimits",
      value: function determineDataLimits() {
        var t = this,
            e = t.options,
            i = t._adapter,
            n = e.time.unit || "day";

        var _t$getUserBounds5 = t.getUserBounds(),
            o = _t$getUserBounds5.min,
            s = _t$getUserBounds5.max,
            a = _t$getUserBounds5.minDefined,
            r = _t$getUserBounds5.maxDefined;

        function l(t) {
          a || isNaN(t.min) || (o = Math.min(o, t.min)), r || isNaN(t.max) || (s = Math.max(s, t.max));
        }

        a && r || (l(t._getLabelBounds()), "ticks" === e.bounds && "labels" === e.ticks.source || l(t.getMinMax(!1))), o = X(o) && !isNaN(o) ? o : +i.startOf(Date.now(), n), s = X(s) && !isNaN(s) ? s : +i.endOf(Date.now(), n) + 1, t.min = Math.min(o, s - 1), t.max = Math.max(o + 1, s);
      }
    }, {
      key: "_getLabelBounds",
      value: function _getLabelBounds() {
        var t = this.getLabelTimestamps();
        var e = Number.POSITIVE_INFINITY,
            i = Number.NEGATIVE_INFINITY;
        return t.length && (e = t[0], i = t[t.length - 1]), {
          min: e,
          max: i
        };
      }
    }, {
      key: "buildTicks",
      value: function buildTicks() {
        var t = this,
            e = t.options,
            i = e.time,
            n = e.ticks,
            o = "labels" === n.source ? t.getLabelTimestamps() : t._generate();
        "ticks" === e.bounds && o.length && (t.min = t._userMin || o[0], t.max = t._userMax || o[o.length - 1]);
        var s = t.min,
            a = re(o, s, t.max);
        return t._unit = i.unit || (n.autoSkip ? aa(i.minUnit, t.min, t.max, t._getLabelCapacity(s)) : function (t, e, i, n, o) {
          for (var _s34 = na.length - 1; _s34 >= na.indexOf(i); _s34--) {
            var _i63 = na[_s34];
            if (ia[_i63].common && t._adapter.diff(o, n, _i63) >= e - 1) return _i63;
          }

          return na[i ? na.indexOf(i) : 0];
        }(t, a.length, i.minUnit, t.min, t.max)), t._majorUnit = n.major.enabled && "year" !== t._unit ? function (t) {
          for (var _e60 = na.indexOf(t) + 1, _i64 = na.length; _e60 < _i64; ++_e60) {
            if (ia[na[_e60]].common) return na[_e60];
          }
        }(t._unit) : void 0, t.initOffsets(o), e.reverse && a.reverse(), la(t, a, t._majorUnit);
      }
    }, {
      key: "initOffsets",
      value: function initOffsets(t) {
        var e = this;
        var i,
            n,
            o = 0,
            s = 0;
        e.options.offset && t.length && (i = e.getDecimalForValue(t[0]), o = 1 === t.length ? 1 - i : (e.getDecimalForValue(t[1]) - i) / 2, n = e.getDecimalForValue(t[t.length - 1]), s = 1 === t.length ? n : (n - e.getDecimalForValue(t[t.length - 2])) / 2);
        var a = t.length < 3 ? .5 : .25;
        o = Ht(o, 0, a), s = Ht(s, 0, a), e._offsets = {
          start: o,
          end: s,
          factor: 1 / (o + 1 + s)
        };
      }
    }, {
      key: "_generate",
      value: function _generate() {
        var t = this,
            e = t._adapter,
            i = t.min,
            n = t.max,
            o = t.options,
            s = o.time,
            a = s.unit || aa(s.minUnit, i, n, t._getLabelCapacity(i)),
            r = K(s.stepSize, 1),
            l = "week" === a && s.isoWeekday,
            c = Tt(l) || !0 === l,
            h = {};
        var d,
            u,
            f = i;
        if (c && (f = +e.startOf(f, "isoWeek", l)), f = +e.startOf(f, c ? "day" : a), e.diff(n, i, a) > 1e5 * r) throw new Error(i + " and " + n + " are too far apart with stepSize of " + r + " " + a);
        var g = "data" === o.ticks.source && t.getDataTimestamps();

        for (d = f, u = 0; d < n; d = +e.add(d, r, a), u++) {
          ra(h, d, g);
        }

        return d !== n && "ticks" !== o.bounds && 1 !== u || ra(h, d, g), Object.keys(h).sort(function (t, e) {
          return t - e;
        }).map(function (t) {
          return +t;
        });
      }
    }, {
      key: "getLabelForValue",
      value: function getLabelForValue(t) {
        var e = this._adapter,
            i = this.options.time;
        return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime);
      }
    }, {
      key: "_tickFormatFunction",
      value: function _tickFormatFunction(t, e, i, n) {
        var o = this,
            s = o.options,
            a = s.time.displayFormats,
            r = o._unit,
            l = o._majorUnit,
            c = r && a[r],
            h = l && a[l],
            d = i[e],
            u = l && h && d && d.major,
            f = o._adapter.format(t, n || (u ? h : c)),
            g = s.ticks.callback;

        return g ? Q(g, [f, e, i], o) : f;
      }
    }, {
      key: "generateTickLabels",
      value: function generateTickLabels(t) {
        var e, i, n;

        for (e = 0, i = t.length; e < i; ++e) {
          n = t[e], n.label = this._tickFormatFunction(n.value, e, t);
        }
      }
    }, {
      key: "getDecimalForValue",
      value: function getDecimalForValue(t) {
        var e = this;
        return null === t ? NaN : (t - e.min) / (e.max - e.min);
      }
    }, {
      key: "getPixelForValue",
      value: function getPixelForValue(t) {
        var e = this,
            i = e._offsets,
            n = e.getDecimalForValue(t);
        return e.getPixelForDecimal((i.start + n) * i.factor);
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(t) {
        var e = this,
            i = e._offsets,
            n = e.getDecimalForPixel(t) / i.factor - i.end;
        return e.min + n * (e.max - e.min);
      }
    }, {
      key: "_getLabelSize",
      value: function _getLabelSize(t) {
        var e = this,
            i = e.options.ticks,
            n = e.ctx.measureText(t).width,
            o = Et(e.isHorizontal() ? i.maxRotation : i.minRotation),
            s = Math.cos(o),
            a = Math.sin(o),
            r = e._resolveTickFontOptions(0).size;

        return {
          w: n * s + r * a,
          h: n * a + r * s
        };
      }
    }, {
      key: "_getLabelCapacity",
      value: function _getLabelCapacity(t) {
        var e = this,
            i = e.options.time,
            n = i.displayFormats,
            o = n[i.unit] || n.millisecond,
            s = e._tickFormatFunction(t, 0, la(e, [t], e._majorUnit), o),
            a = e._getLabelSize(s),
            r = Math.floor(e.isHorizontal() ? e.width / a.w : e.height / a.h) - 1;

        return r > 0 ? r : 1;
      }
    }, {
      key: "getDataTimestamps",
      value: function getDataTimestamps() {
        var t = this;
        var e,
            i,
            n = t._cache.data || [];
        if (n.length) return n;
        var o = t.getMatchingVisibleMetas();
        if (t._normalized && o.length) return t._cache.data = o[0].controller.getAllParsedValues(t);

        for (e = 0, i = o.length; e < i; ++e) {
          n = n.concat(o[e].controller.getAllParsedValues(t));
        }

        return t._cache.data = t.normalize(n);
      }
    }, {
      key: "getLabelTimestamps",
      value: function getLabelTimestamps() {
        var t = this,
            e = t._cache.labels || [];
        var i, n;
        if (e.length) return e;
        var o = t.getLabels();

        for (i = 0, n = o.length; i < n; ++i) {
          e.push(sa(t, o[i]));
        }

        return t._cache.labels = t._normalized ? e : t.normalize(e);
      }
    }, {
      key: "normalize",
      value: function normalize(t) {
        return de(t.sort(oa));
      }
    }]);

    return ca;
  }(En);

  function ha(t, e, i) {
    var _se, _t$r, _t$l, _se2, _t$r2, _t$l2;

    var n,
        o,
        s,
        a,
        r = 0,
        l = t.length - 1;
    i ? (e >= t[r].pos && e <= t[l].pos && (_se = se(t, "pos", e), r = _se.lo, l = _se.hi, _se), (_t$r = t[r], n = _t$r.pos, s = _t$r.time, _t$r), (_t$l = t[l], o = _t$l.pos, a = _t$l.time, _t$l)) : (e >= t[r].time && e <= t[l].time && (_se2 = se(t, "time", e), r = _se2.lo, l = _se2.hi, _se2), (_t$r2 = t[r], n = _t$r2.time, s = _t$r2.pos, _t$r2), (_t$l2 = t[l], o = _t$l2.time, a = _t$l2.pos, _t$l2));
    var c = o - n;
    return c ? s + (a - s) * (e - n) / c : s;
  }

  ca.id = "time", ca.defaults = {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {}
    },
    ticks: {
      source: "auto",
      major: {
        enabled: !1
      }
    }
  };

  var da =
  /*#__PURE__*/
  function (_ca) {
    _inherits(da, _ca);

    function da(t) {
      var _this19;

      _classCallCheck(this, da);

      _this19 = _possibleConstructorReturn(this, _getPrototypeOf(da).call(this, t)), _this19._table = [], _this19._minPos = void 0, _this19._tableRange = void 0;
      return _this19;
    }

    _createClass(da, [{
      key: "initOffsets",
      value: function initOffsets() {
        var t = this,
            e = t._getTimestampsForTable(),
            i = t._table = t.buildLookupTable(e);

        t._minPos = ha(i, t.min), t._tableRange = ha(i, t.max) - t._minPos, _get2(_getPrototypeOf(da.prototype), "initOffsets", this).call(this, e);
      }
    }, {
      key: "buildLookupTable",
      value: function buildLookupTable(t) {
        var e = this.min,
            i = this.max,
            n = [],
            o = [];
        var s, a, r, l, c;

        for (s = 0, a = t.length; s < a; ++s) {
          l = t[s], l >= e && l <= i && n.push(l);
        }

        if (n.length < 2) return [{
          time: e,
          pos: 0
        }, {
          time: i,
          pos: 1
        }];

        for (s = 0, a = n.length; s < a; ++s) {
          c = n[s + 1], r = n[s - 1], l = n[s], Math.round((c + r) / 2) !== l && o.push({
            time: l,
            pos: s / (a - 1)
          });
        }

        return o;
      }
    }, {
      key: "_getTimestampsForTable",
      value: function _getTimestampsForTable() {
        var t = this;
        var e = t._cache.all || [];
        if (e.length) return e;
        var i = t.getDataTimestamps(),
            n = t.getLabelTimestamps();
        return e = i.length && n.length ? t.normalize(i.concat(n)) : i.length ? i : n, e = t._cache.all = e, e;
      }
    }, {
      key: "getDecimalForValue",
      value: function getDecimalForValue(t) {
        return (ha(this._table, t) - this._minPos) / this._tableRange;
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(t) {
        var e = this,
            i = e._offsets,
            n = e.getDecimalForPixel(t) / i.factor - i.end;
        return ha(e._table, n * e._tableRange + e._minPos, !0);
      }
    }]);

    return da;
  }(ca);

  da.id = "timeseries", da.defaults = ca.defaults;
  var ua = Object.freeze({
    __proto__: null,
    CategoryScale: Ns,
    LinearScale: $s,
    LogarithmicScale: Us,
    RadialLinearScale: ea,
    TimeScale: ca,
    TimeSeriesScale: da
  });
  return oo.register(Po, ua, Zo, Vs), oo.helpers = _objectSpread({}, Ni), oo._adapters = co, oo.Animation = ln, oo.Animations = hn, oo.animator = a, oo.controllers = zn.controllers.items, oo.DatasetController = wn, oo.Element = Mn, oo.elements = Zo, oo.Interaction = Ae, oo.layouts = ti, oo.platforms = sn, oo.Scale = En, oo.Ticks = Sn, Object.assign(oo, Po, ua, Zo, Vs, sn), oo.Chart = oo, "undefined" != typeof window && (window.Chart = oo), oo;
});
1;