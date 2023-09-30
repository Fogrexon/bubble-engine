(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.BubbleEngine = {}));
})(this, (function (exports) { 'use strict';

  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw new Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var ComponentBase = /*#__PURE__*/function () {
    function ComponentBase() {
      _classCallCheck(this, ComponentBase);
      _defineProperty(this, "_entry", null);
      _defineProperty(this, "_initialized", false);
      _defineProperty(this, "_started", false);
      _defineProperty(this, "_enabled", true);
      _defineProperty(this, "_destroyed", false);
    }
    _createClass(ComponentBase, [{
      key: "entry",
      get: function get() {
        if (!this._entry) throw new Error('ComponentBase: This component is not attached to entry.');
        return this._entry;
      }
    }, {
      key: "enabled",
      get: function get() {
        return this._enabled;
      },
      set: function set(value) {
        var _this$_entry, _this$_entry2, _this$_entry3;
        if (!((_this$_entry = this._entry) !== null && _this$_entry !== void 0 && _this$_entry.enabled)) {
          this._enabled = value;
          return;
        }
        if (!this._enabled && value && (_this$_entry2 = this._entry) !== null && _this$_entry2 !== void 0 && _this$_entry2.enabled) {
          this._enabled = value;
          this.innerEnable();
        } else if (this._enabled && !value && (_this$_entry3 = this._entry) !== null && _this$_entry3 !== void 0 && _this$_entry3.enabled) {
          this.innerDisable();
          this._enabled = value;
        }
      }
    }, {
      key: "destroyed",
      get: function get() {
        return this._destroyed;
      }
      // region LifeCycle Hooks
    }, {
      key: "innerAdded",
      value: function innerAdded(entry) {
        this._entry = entry;
        this._destroyed = false;
        this._initialized = false;
        this._started = false;
      }
    }, {
      key: "innerUpdate",
      value: function innerUpdate() {
        if (this._enabled) {
          if (!this._initialized) {
            this.onInitialize();
            this._initialized = true;
          }
          if (!this._started) {
            this.onStart();
            this._started = true;
          }
          this.onUpdate();
        }
      }
    }, {
      key: "innerEnable",
      value: function innerEnable() {
        var _this$_entry4;
        if (this._enabled && (_this$_entry4 = this._entry) !== null && _this$_entry4 !== void 0 && _this$_entry4.enabled) {
          this._started = false;
          this.onEnable();
        }
      }
    }, {
      key: "innerDisable",
      value: function innerDisable() {
        var _this$_entry5;
        if (this._enabled && (_this$_entry5 = this._entry) !== null && _this$_entry5 !== void 0 && _this$_entry5.enabled) {
          this.onDisable();
        }
      }
    }, {
      key: "innerDestroy",
      value: function innerDestroy() {
        if (this._initialized) this.onDestroy();
        this._destroyed = true;
      }
    }]);
    return ComponentBase;
  }();

  var wait = function wait(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  };
  var waitFrame = function waitFrame() {
    return new Promise(function (resolve) {
      requestAnimationFrame(resolve);
    });
  };

  var Rect = /*#__PURE__*/function () {
    function Rect() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      _classCallCheck(this, Rect);
      _defineProperty(this, "x", void 0);
      _defineProperty(this, "y", void 0);
      _defineProperty(this, "width", void 0);
      _defineProperty(this, "height", void 0);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
    _createClass(Rect, [{
      key: "set",
      value: function set(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
      }
    }, {
      key: "copy",
      value: function copy(rect) {
        this.x = rect.x;
        this.y = rect.y;
        this.width = rect.width;
        this.height = rect.height;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Rect(this.x, this.y, this.width, this.height);
      }
    }, {
      key: "contains",
      value: function contains(x, y) {
        return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
      }
    }, {
      key: "containsRect",
      value: function containsRect(rect) {
        return this.contains(rect.x, rect.y) && this.contains(rect.x + rect.width, rect.y + rect.height);
      }
    }, {
      key: "intersects",
      value: function intersects(rect) {
        return this.x < rect.x + rect.width && this.x + this.width > rect.x && this.y < rect.y + rect.height && this.y + this.height > rect.y;
      }
    }, {
      key: "merge",
      value: function merge(rect) {
        var left = Math.min(this.x, rect.x);
        var top = Math.min(this.y, rect.y);
        var right = Math.max(this.x + this.width, rect.x + rect.width);
        var bottom = Math.max(this.y + this.height, rect.y + rect.height);
        return new Rect(left, top, right - left, bottom - top);
      }
    }]);
    return Rect;
  }();

  /**
   * 与えられた文字列のリストのうち重複のない二つをキーとするテーブル
   */
  var UndirectedTable = /*#__PURE__*/function () {
    function UndirectedTable(keys, defaultValue) {
      var _this = this;
      _classCallCheck(this, UndirectedTable);
      _defineProperty(this, "_keys", void 0);
      _defineProperty(this, "_table", {});
      this._keys = keys;
      keys.forEach(function (key) {
        _this._table[key] = {};
        keys.forEach(function (column) {
          _this._table[key][column] = defaultValue;
        });
      });
    }
    /**
     * 2つの文字列をキーとする値の取り出し
     * @param key1
     * @param key2
     */
    _createClass(UndirectedTable, [{
      key: "get",
      value: function get(key1, key2) {
        return this._table[key1][key2];
      }
      /**
       * 2つの文字列をキーとする値の設定
       * @param row
       * @param column
       * @param value
       */
    }, {
      key: "set",
      value: function set(row, column, value) {
        this._table[row][column] = value;
        this._table[column][row] = value;
      }
      /**
       * テーブルの要素を重複無しで取り出す
       * @param callback
       */
    }, {
      key: "forEach",
      value: function forEach(callback) {
        var _this2 = this;
        this._keys.forEach(function (key, index) {
          for (var i = 0; i < index + 1; i += 1) {
            callback(key, _this2._keys[i], _this2.get(key, _this2._keys[i]));
          }
        });
      }
    }]);
    return UndirectedTable;
  }();

  var EventEmitter = /*#__PURE__*/function () {
    function EventEmitter() {
      _classCallCheck(this, EventEmitter);
      _defineProperty(this, "listeners", void 0);
      this.listeners = {};
    }
    _createClass(EventEmitter, [{
      key: "on",
      value: function on(event, listener) {
        if (!this.listeners[event]) {
          this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
      }
    }, {
      key: "emit",
      value: function emit(event, value) {
        var listeners = this.listeners[event];
        if (listeners) {
          listeners.forEach(function (listener) {
            listener(value);
          });
        }
      }
    }, {
      key: "off",
      value: function off(event, listener) {
        var listeners = this.listeners[event];
        if (listeners) {
          var index = listeners.indexOf(listener);
          if (index >= 0) {
            listeners.splice(index, 1);
          }
        }
      }
    }]);
    return EventEmitter;
  }();

  /**
   * 描画系をつかさどるコンポーネント
   */
  var GraphicComponent = /*#__PURE__*/function (_ComponentBase) {
    _inherits(GraphicComponent, _ComponentBase);
    var _super = _createSuper(GraphicComponent);
    function GraphicComponent(layer, parts) {
      var _this;
      _classCallCheck(this, GraphicComponent);
      _this = _super.call(this);
      /**
       * グラフィックコンポーネントの回転
       */
      _defineProperty(_assertThisInitialized(_this), "rotation", 0);
      /**
       * グラフィックコンポーネントのバウンディングボックス
       */
      _defineProperty(_assertThisInitialized(_this), "boundingRect", new Rect(0, 0, 0, 0));
      _defineProperty(_assertThisInitialized(_this), "parts", void 0);
      _defineProperty(_assertThisInitialized(_this), "layer", void 0);
      _this.layer = layer;
      _this.parts = parts;
      return _this;
    }
    _createClass(GraphicComponent, [{
      key: "onDestroy",
      value: function onDestroy() {}
    }, {
      key: "onDisable",
      value: function onDisable() {}
    }, {
      key: "onEnable",
      value: function onEnable() {}
    }, {
      key: "onInitialize",
      value: function onInitialize() {}
    }, {
      key: "onStart",
      value: function onStart() {}
    }, {
      key: "onUpdate",
      value: function onUpdate() {}
    }]);
    return GraphicComponent;
  }(ComponentBase);

  /**
   * コライダーを格納するコンポーネント
   */
  var ColliderComponent = /*#__PURE__*/function (_ComponentBase) {
    _inherits(ColliderComponent, _ComponentBase);
    var _super = _createSuper(ColliderComponent);
    function ColliderComponent(layer) {
      var _this;
      _classCallCheck(this, ColliderComponent);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "layer", void 0);
      _defineProperty(_assertThisInitialized(_this), "collisions", []);
      _defineProperty(_assertThisInitialized(_this), "hitColliders", new Set());
      _defineProperty(_assertThisInitialized(_this), "tempColliders", new Set());
      _defineProperty(_assertThisInitialized(_this), "eventEmitter", new EventEmitter());
      _this.layer = layer;
      return _this;
    }
    /**
     * 衝突情報をリセット
     */
    _createClass(ColliderComponent, [{
      key: "resetCollision",
      value: function resetCollision() {
        this.collisions.length = 0;
      }
      /**
       * 衝突情報を登録
       * CollisionPreprocessManagerによって登録される
       * @param collisionInfo
       */
    }, {
      key: "registerCollision",
      value: function registerCollision(collisionInfo) {
        this.collisions.push(collisionInfo);
      }
      /**
       * 登録された衝突情報を整理して衝突イベントを発行する
       */
    }, {
      key: "processCollision",
      value: function processCollision() {
        var _this2 = this;
        this.tempColliders.clear();
        this.collisions.forEach(function (collisionInfo) {
          _this2.tempColliders.add(collisionInfo.collider);
          if (_this2.hitColliders.has(collisionInfo.collider)) {
            _this2.emit('collisionStay', collisionInfo);
          } else {
            _this2.hitColliders.add(collisionInfo.collider);
            _this2.emit('collisionStart', collisionInfo);
          }
        });
        // 衝突終了処理
        this.hitColliders.forEach(function (collider) {
          if (!_this2.tempColliders.has(collider)) {
            _this2.hitColliders["delete"](collider);
            _this2.emit('collisionEnd', collider);
          }
        });
      }
    }, {
      key: "onDestroy",
      value: function onDestroy() {}
    }, {
      key: "onDisable",
      value: function onDisable() {}
    }, {
      key: "onEnable",
      value: function onEnable() {}
    }, {
      key: "onInitialize",
      value: function onInitialize() {}
    }, {
      key: "onStart",
      value: function onStart() {}
    }, {
      key: "onUpdate",
      value: function onUpdate() {}
      // region Event Emitter implements
    }, {
      key: "emit",
      value: function emit(event, value) {
        this.eventEmitter.emit(event, value);
      }
    }, {
      key: "off",
      value: function off(event, listener) {
        this.eventEmitter.off(event, listener);
      }
    }, {
      key: "on",
      value: function on(event, listener) {
        this.eventEmitter.on(event, listener);
      }
    }]);
    return ColliderComponent;
  }(ComponentBase);

  /**
   * ゲーム全体のライフタイムを管理
   */
  var GameManager = /*#__PURE__*/function () {
    function GameManager(gamePipeline, levelSelector) {
      _classCallCheck(this, GameManager);
      _defineProperty(this, "_requestAnimationFrameId", -1);
      _defineProperty(this, "_gamePipeline", void 0);
      _defineProperty(this, "_levelSelector", void 0);
      this._gamePipeline = gamePipeline;
      this._levelSelector = levelSelector;
    }
    /**
     * ゲームの開始
     */
    _createClass(GameManager, [{
      key: "start",
      value: function start() {
        this._requestAnimationFrameId = requestAnimationFrame(this.gameLoop.bind(this));
      }
      /**
       * ゲームのメインループ
       */
    }, {
      key: "gameLoop",
      value: function gameLoop() {
        this._requestAnimationFrameId = requestAnimationFrame(this.gameLoop.bind(this));
        var currentLevelManager = this._levelSelector.currentLevel();
        this._gamePipeline.process(currentLevelManager);
      }
    }]);
    return GameManager;
  }();

  var ManagerBase = /*#__PURE__*/_createClass(function ManagerBase() {
    _classCallCheck(this, ManagerBase);
  });

  var GamePipeline = /*#__PURE__*/function () {
    function GamePipeline(time, inputManager, graphicManager, collisionManager) {
      _classCallCheck(this, GamePipeline);
      _defineProperty(this, "_time", void 0);
      _defineProperty(this, "_inputManager", void 0);
      _defineProperty(this, "_graphicManager", void 0);
      _defineProperty(this, "_collisionManager", void 0);
      this._time = time;
      this._inputManager = inputManager;
      this._graphicManager = graphicManager;
      this._collisionManager = collisionManager;
    }
    _createClass(GamePipeline, [{
      key: "process",
      value: function process(levelManager) {
        var root = levelManager.rootEntry;
        this._time.calcDeltaTime();
        this._inputManager.updateKeyBinds();
        // preprocess
        root.transform.process();
        this._collisionManager.beforeProcess();
        root.collision.process();
        this._collisionManager.afterProcess();
        this._graphicManager.beforeProcess();
        root.graphic.process();
        this._graphicManager.afterProcess();
        // normal components
        root.update();
      }
    }]);
    return GamePipeline;
  }();

  var Time = /*#__PURE__*/function () {
    function Time() {
      _classCallCheck(this, Time);
      _defineProperty(this, "timeScale", 1);
      _defineProperty(this, "_gameTime", 0);
      _defineProperty(this, "_deltaTime", 0);
      _defineProperty(this, "_prevSystemTime", 0);
    }
    _createClass(Time, [{
      key: "gameTime",
      get: function get() {
        return this._gameTime;
      }
    }, {
      key: "deltaTime",
      get: function get() {
        return this._deltaTime;
      }
    }, {
      key: "unscaledDeltaTime",
      get: function get() {
        return this._deltaTime / this.timeScale;
      }
    }, {
      key: "calcDeltaTime",
      value: function calcDeltaTime() {
        var systemTime = performance.now();
        this._deltaTime = systemTime - this._prevSystemTime;
        this._deltaTime *= 0.001;
        this._deltaTime *= this.timeScale;
        this._prevSystemTime = systemTime;
        this._gameTime += this._deltaTime;
      }
    }]);
    return Time;
  }();

  /**
   * 基本的なコンポーネント更新前に実行される事前処理用のコンポーネント
   */
  var PreprocessBase = /*#__PURE__*/_createClass(function PreprocessBase(entry) {
    _classCallCheck(this, PreprocessBase);
    _defineProperty(this, "entry", void 0);
    this.entry = entry;
  });

  /**
   * 描画系をつかさどるコンポーネント
   */
  var GraphicPreprocess = /*#__PURE__*/function (_PreprocessBase) {
    _inherits(GraphicPreprocess, _PreprocessBase);
    var _super = _createSuper(GraphicPreprocess);
    function GraphicPreprocess() {
      var _this;
      _classCallCheck(this, GraphicPreprocess);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      /**
       * 描画順
       */
      _defineProperty(_assertThisInitialized(_this), "index", 0);
      return _this;
    }
    _createClass(GraphicPreprocess, [{
      key: "process",
      value: function process() {
        if (!this.entry.enabled) return;
        var comp = this.entry.getComponent(GraphicComponent);
        if (comp && comp.enabled) {
          this.draw(comp);
        }
        var childrenGraphic = this.entry.transform.children.map(function (childTransform) {
          return childTransform.entry.graphic;
        });
        childrenGraphic.sort(function (a, b) {
          return a.index - b.index;
        });
        childrenGraphic.forEach(function (child) {
          child.process();
        });
      }
    }, {
      key: "draw",
      value: function draw(comp) {
        var worldMatrix = this.entry.transform.worldMatrix;
        var ctx = comp.layer.context;
        ctx.save();
        ctx.transform(worldMatrix.m00, worldMatrix.m01, worldMatrix.m10, worldMatrix.m11, worldMatrix.m02, worldMatrix.m12);
        ctx.rotate(comp.rotation);
        comp.parts.forEach(function (part, index) {
          var boundingBox = part.render(comp.layer);
          if (index === 0) comp.boundingRect.copy(boundingBox);else comp.boundingRect.merge(boundingBox);
        });
        ctx.restore();
      }
    }]);
    return GraphicPreprocess;
  }(PreprocessBase);

  var Matrix2 = /*#__PURE__*/function () {
    function Matrix2() {
      var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var m01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var m10 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var m11 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      _classCallCheck(this, Matrix2);
      _defineProperty(this, "m00", void 0);
      _defineProperty(this, "m01", void 0);
      _defineProperty(this, "m10", void 0);
      _defineProperty(this, "m11", void 0);
      this.m00 = m00;
      this.m01 = m01;
      this.m10 = m10;
      this.m11 = m11;
    }
    _createClass(Matrix2, [{
      key: "set",
      value: function set(m00, m01, m10, m11) {
        this.m00 = m00;
        this.m01 = m01;
        this.m10 = m10;
        this.m11 = m11;
        return this;
      }
    }, {
      key: "identity",
      value: function identity() {
        this.set(1, 0, 0, 1);
        return this;
      }
    }, {
      key: "transpose",
      value: function transpose() {
        var m01 = this.m01;
        this.m01 = this.m10;
        this.m10 = m01;
        return this;
      }
    }, {
      key: "invert",
      value: function invert() {
        var m00 = this.m00,
          m01 = this.m01,
          m10 = this.m10,
          m11 = this.m11;
        var det = this.determinant();
        if (det === 0) {
          return this.identity();
        }
        var detInv = 1 / det;
        this.set(m11 * detInv, -m01 * detInv, -m10 * detInv, m00 * detInv);
        return this;
      }
    }, {
      key: "determinant",
      value: function determinant() {
        return this.m00 * this.m11 - this.m01 * this.m10;
      }
    }, {
      key: "add",
      value: function add(m) {
        this.m00 += m.m00;
        this.m01 += m.m01;
        this.m10 += m.m10;
        this.m11 += m.m11;
        return this;
      }
    }, {
      key: "addScalar",
      value: function addScalar(s) {
        this.m00 += s;
        this.m01 += s;
        this.m10 += s;
        this.m11 += s;
        return this;
      }
    }, {
      key: "sub",
      value: function sub(m) {
        this.m00 -= m.m00;
        this.m01 -= m.m01;
        this.m10 -= m.m10;
        this.m11 -= m.m11;
        return this;
      }
    }, {
      key: "subScalar",
      value: function subScalar(s) {
        this.m00 -= s;
        this.m01 -= s;
        this.m10 -= s;
        this.m11 -= s;
        return this;
      }
    }, {
      key: "multiply",
      value: function multiply(m) {
        var m00 = this.m00,
          m01 = this.m01,
          m10 = this.m10,
          m11 = this.m11;
        this.m00 = m00 * m.m00 + m01 * m.m10;
        this.m01 = m00 * m.m01 + m01 * m.m11;
        this.m10 = m10 * m.m00 + m11 * m.m10;
        this.m11 = m10 * m.m01 + m11 * m.m11;
        return this;
      }
    }, {
      key: "scale",
      value: function scale(m) {
        this.m00 *= m.m00;
        this.m01 *= m.m01;
        this.m10 *= m.m10;
        this.m11 *= m.m11;
        return this;
      }
    }, {
      key: "scaleScalar",
      value: function scaleScalar(v) {
        this.m00 *= v;
        this.m01 *= v;
        this.m10 *= v;
        this.m11 *= v;
        return this;
      }
    }, {
      key: "rotate",
      value: function rotate(rad) {
        var m00 = this.m00,
          m01 = this.m01,
          m10 = this.m10,
          m11 = this.m11;
        var c = Math.cos(rad);
        var s = Math.sin(rad);
        this.m00 = m00 * c + m01 * s;
        this.m01 = m00 * -s + m01 * c;
        this.m10 = m10 * c + m11 * s;
        this.m11 = m10 * -s + m11 * c;
        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Matrix2().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(m) {
        this.m00 = m.m00;
        this.m01 = m.m01;
        this.m10 = m.m10;
        this.m11 = m.m11;
        return this;
      }
    }, {
      key: "equals",
      value: function equals(m) {
        return this.m00 === m.m00 && this.m01 === m.m01 && this.m10 === m.m10 && this.m11 === m.m11;
      }
    }]);
    return Matrix2;
  }();

  var Matrix3 = /*#__PURE__*/function () {
    function Matrix3() {
      var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var m01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var m02 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var m10 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var m11 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var m12 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var m20 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var m21 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var m22 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;
      _classCallCheck(this, Matrix3);
      _defineProperty(this, "m00", void 0);
      _defineProperty(this, "m01", void 0);
      _defineProperty(this, "m02", void 0);
      _defineProperty(this, "m10", void 0);
      _defineProperty(this, "m11", void 0);
      _defineProperty(this, "m12", void 0);
      _defineProperty(this, "m20", void 0);
      _defineProperty(this, "m21", void 0);
      _defineProperty(this, "m22", void 0);
      this.m00 = m00;
      this.m01 = m01;
      this.m02 = m02;
      this.m10 = m10;
      this.m11 = m11;
      this.m12 = m12;
      this.m20 = m20;
      this.m21 = m21;
      this.m22 = m22;
    }
    _createClass(Matrix3, [{
      key: "set",
      value: function set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        this.m00 = m00;
        this.m01 = m01;
        this.m02 = m02;
        this.m10 = m10;
        this.m11 = m11;
        this.m12 = m12;
        this.m20 = m20;
        this.m21 = m21;
        this.m22 = m22;
        return this;
      }
    }, {
      key: "identity",
      value: function identity() {
        this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
        return this;
      }
    }, {
      key: "transpose",
      value: function transpose() {
        var m01 = this.m01,
          m02 = this.m02,
          m10 = this.m10,
          m12 = this.m12,
          m20 = this.m20,
          m21 = this.m21;
        this.m01 = m10;
        this.m02 = m20;
        this.m10 = m01;
        this.m12 = m21;
        this.m20 = m02;
        this.m21 = m12;
        return this;
      }
    }, {
      key: "invert",
      value: function invert() {
        var m00 = this.m00,
          m01 = this.m01,
          m02 = this.m02,
          m10 = this.m10,
          m11 = this.m11,
          m12 = this.m12,
          m20 = this.m20,
          m21 = this.m21,
          m22 = this.m22;
        var det = this.determinant();
        if (det === 0) {
          return this.identity();
        }
        var detInv = 1 / det;
        this.set((m11 * m22 - m12 * m21) * detInv, -(m01 * m22 - m02 * m21) * detInv, (m01 * m12 - m02 * m11) * detInv, -(m10 * m22 - m12 * m20) * detInv, (m00 * m22 - m02 * m20) * detInv, -(m00 * m12 - m02 * m10) * detInv, (m10 * m21 - m11 * m20) * detInv, -(m00 * m21 - m01 * m20) * detInv, (m00 * m11 - m01 * m10) * detInv);
        return this;
      }
    }, {
      key: "determinant",
      value: function determinant() {
        var m00 = this.m00,
          m01 = this.m01,
          m02 = this.m02,
          m10 = this.m10,
          m11 = this.m11,
          m12 = this.m12,
          m20 = this.m20,
          m21 = this.m21,
          m22 = this.m22;
        return m00 * (m11 * m22 - m12 * m21) - m01 * (m10 * m22 - m12 * m20) + m02 * (m10 * m21 - m11 * m20);
      }
    }, {
      key: "add",
      value: function add(m) {
        this.m00 += m.m00;
        this.m01 += m.m01;
        this.m02 += m.m02;
        this.m10 += m.m10;
        this.m11 += m.m11;
        this.m12 += m.m12;
        this.m20 += m.m20;
        this.m21 += m.m21;
        this.m22 += m.m22;
        return this;
      }
    }, {
      key: "addScalar",
      value: function addScalar(s) {
        this.m00 += s;
        this.m01 += s;
        this.m02 += s;
        this.m10 += s;
        this.m11 += s;
        this.m12 += s;
        this.m20 += s;
        this.m21 += s;
        this.m22 += s;
        return this;
      }
    }, {
      key: "sub",
      value: function sub(m) {
        this.m00 -= m.m00;
        this.m01 -= m.m01;
        this.m02 -= m.m02;
        this.m10 -= m.m10;
        this.m11 -= m.m11;
        this.m12 -= m.m12;
        this.m20 -= m.m20;
        this.m21 -= m.m21;
        this.m22 -= m.m22;
        return this;
      }
    }, {
      key: "subScalar",
      value: function subScalar(s) {
        this.m00 -= s;
        this.m01 -= s;
        this.m02 -= s;
        this.m10 -= s;
        this.m11 -= s;
        this.m12 -= s;
        this.m20 -= s;
        this.m21 -= s;
        this.m22 -= s;
        return this;
      }
    }, {
      key: "multiply",
      value: function multiply(m) {
        var m00 = this.m00,
          m01 = this.m01,
          m02 = this.m02,
          m10 = this.m10,
          m11 = this.m11,
          m12 = this.m12,
          m20 = this.m20,
          m21 = this.m21,
          m22 = this.m22;
        this.set(m00 * m.m00 + m01 * m.m10 + m02 * m.m20, m00 * m.m01 + m01 * m.m11 + m02 * m.m21, m00 * m.m02 + m01 * m.m12 + m02 * m.m22, m10 * m.m00 + m11 * m.m10 + m12 * m.m20, m10 * m.m01 + m11 * m.m11 + m12 * m.m21, m10 * m.m02 + m11 * m.m12 + m12 * m.m22, m20 * m.m00 + m21 * m.m10 + m22 * m.m20, m20 * m.m01 + m21 * m.m11 + m22 * m.m21, m20 * m.m02 + m21 * m.m12 + m22 * m.m22);
        return this;
      }
    }, {
      key: "scale",
      value: function scale(m) {
        this.m00 *= m.m00;
        this.m01 *= m.m01;
        this.m02 *= m.m02;
        this.m10 *= m.m10;
        this.m11 *= m.m11;
        this.m12 *= m.m12;
        this.m20 *= m.m20;
        this.m21 *= m.m21;
        this.m22 *= m.m22;
        return this;
      }
    }, {
      key: "scaleScalar",
      value: function scaleScalar(v) {
        this.m00 *= v;
        this.m01 *= v;
        this.m02 *= v;
        this.m10 *= v;
        this.m11 *= v;
        this.m12 *= v;
        this.m20 *= v;
        this.m21 *= v;
        this.m22 *= v;
        return this;
      }
    }, {
      key: "rotateMat2D",
      value: function rotateMat2D(radian) {
        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        var m00 = this.m00,
          m01 = this.m01,
          m02 = this.m02,
          m10 = this.m10,
          m11 = this.m11,
          m12 = this.m12,
          m20 = this.m20,
          m21 = this.m21,
          m22 = this.m22;
        this.set(m00 * cos + m01 * sin, m00 * -sin + m01 * cos, m02, m10 * cos + m11 * sin, m10 * -sin + m11 * cos, m12, m20 * cos + m21 * sin, m20 * -sin + m21 * cos, m22);
        return this;
      }
    }, {
      key: "translateMat2D",
      value: function translateMat2D(x, y) {
        var m00 = this.m00,
          m01 = this.m01,
          m02 = this.m02,
          m10 = this.m10,
          m11 = this.m11,
          m12 = this.m12,
          m20 = this.m20,
          m21 = this.m21,
          m22 = this.m22;
        this.set(m00, m01, m02 + x, m10, m11, m12 + y, m20, m21, m22);
        return this;
      }
    }, {
      key: "scaleMat2D",
      value: function scaleMat2D(x, y) {
        var m00 = this.m00,
          m01 = this.m01,
          m02 = this.m02,
          m10 = this.m10,
          m11 = this.m11,
          m12 = this.m12,
          m20 = this.m20,
          m21 = this.m21,
          m22 = this.m22;
        this.set(m00 * x, m01 * y, m02, m10 * x, m11 * y, m12, m20 * x, m21 * y, m22);
        return this;
      }
    }, {
      key: "compose",
      value: function compose(position, rotation, scale) {
        var cos = Math.cos(rotation);
        var sin = Math.sin(rotation);
        var sx = scale.x,
          sy = scale.y;
        this.set(cos * sx, -sin * sy, position.x, sin * sx, cos * sy, position.y, 0, 0, 1);
        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Matrix3().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(m) {
        this.m00 = m.m00;
        this.m01 = m.m01;
        this.m02 = m.m02;
        this.m10 = m.m10;
        this.m11 = m.m11;
        this.m12 = m.m12;
        this.m20 = m.m20;
        this.m21 = m.m21;
        this.m22 = m.m22;
        return this;
      }
    }, {
      key: "equals",
      value: function equals(m) {
        return this.m00 === m.m00 && this.m01 === m.m01 && this.m02 === m.m02 && this.m10 === m.m10 && this.m11 === m.m11 && this.m12 === m.m12 && this.m20 === m.m20 && this.m21 === m.m21 && this.m22 === m.m22;
      }
    }]);
    return Matrix3;
  }();

  var Vector2 = /*#__PURE__*/function () {
    function Vector2() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      _classCallCheck(this, Vector2);
      _defineProperty(this, "x", void 0);
      _defineProperty(this, "y", void 0);
      this.x = x;
      this.y = y;
    }
    _createClass(Vector2, [{
      key: "set",
      value: function set(x, y) {
        this.x = x;
        this.y = y;
        return this;
      }
    }, {
      key: "setFromPolar",
      value: function setFromPolar(r, theta) {
        this.x = r * Math.cos(theta);
        this.y = r * Math.sin(theta);
        return this;
      }
    }, {
      key: "add",
      value: function add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
      }
    }, {
      key: "addScalar",
      value: function addScalar(s) {
        this.x += s;
        this.y += s;
        return this;
      }
    }, {
      key: "sub",
      value: function sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
      }
    }, {
      key: "subScalar",
      value: function subScalar(s) {
        this.x -= s;
        this.y -= s;
        return this;
      }
    }, {
      key: "multiply",
      value: function multiply(v) {
        this.x *= v.x;
        this.y *= v.y;
        return this;
      }
    }, {
      key: "multiplyMat2",
      value: function multiplyMat2(m) {
        var x = this.x,
          y = this.y;
        this.x = m.m00 * x + m.m01 * y;
        this.y = m.m10 * x + m.m11 * y;
        return this;
      }
    }, {
      key: "multiplyMat3",
      value: function multiplyMat3(m) {
        var x = this.x,
          y = this.y;
        this.x = m.m00 * x + m.m01 * y + m.m02;
        this.y = m.m10 * x + m.m11 * y + m.m12;
        return this;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(s) {
        this.x *= s;
        this.y *= s;
        return this;
      }
    }, {
      key: "divide",
      value: function divide(v) {
        this.x /= v.x;
        this.y /= v.y;
        return this;
      }
    }, {
      key: "divideScalar",
      value: function divideScalar(s) {
        this.x /= s;
        this.y /= s;
        return this;
      }
    }, {
      key: "lerp",
      value: function lerp(v, t) {
        this.x += (v.x - this.x) * t;
        this.y += (v.y - this.y) * t;
        return this;
      }
    }, {
      key: "dot",
      value: function dot(v) {
        return this.x * v.x + this.y * v.y;
      }
    }, {
      key: "length",
      value: function length() {
        return Math.sqrt(this.lengthSquared());
      }
    }, {
      key: "lengthSquared",
      value: function lengthSquared() {
        return this.x * this.x + this.y * this.y;
      }
    }, {
      key: "normalize",
      value: function normalize() {
        return this.divideScalar(this.length());
      }
    }, {
      key: "distanceTo",
      value: function distanceTo(v) {
        return Math.sqrt(this.distanceToSquared(v));
      }
    }, {
      key: "distanceToSquared",
      value: function distanceToSquared(v) {
        var dx = this.x - v.x;
        var dy = this.y - v.y;
        return dx * dx + dy * dy;
      }
    }, {
      key: "angleTo",
      value: function angleTo(v) {
        var theta = this.dot(v) / (this.length() * v.length());
        return Math.acos(theta);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Vector2().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(v) {
        this.x = v.x;
        this.y = v.y;
        return this;
      }
    }, {
      key: "equals",
      value: function equals(v) {
        return this.x === v.x && this.y === v.y;
      }
    }]);
    return Vector2;
  }();

  var Vector3 = /*#__PURE__*/function () {
    function Vector3() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      _classCallCheck(this, Vector3);
      _defineProperty(this, "x", void 0);
      _defineProperty(this, "y", void 0);
      _defineProperty(this, "z", void 0);
      this.x = x;
      this.y = y;
      this.z = z;
    }
    _createClass(Vector3, [{
      key: "set",
      value: function set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
      }
    }, {
      key: "setFromSpherical",
      value: function setFromSpherical(r, theta, phi) {
        var sinPhiRadius = Math.sin(phi) * r;
        this.x = sinPhiRadius * Math.sin(theta);
        this.y = Math.cos(phi) * r;
        this.z = sinPhiRadius * Math.cos(theta);
        return this;
      }
    }, {
      key: "add",
      value: function add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
      }
    }, {
      key: "addScalar",
      value: function addScalar(s) {
        this.x += s;
        this.y += s;
        this.z += s;
        return this;
      }
    }, {
      key: "sub",
      value: function sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
      }
    }, {
      key: "subScalar",
      value: function subScalar(s) {
        this.x -= s;
        this.y -= s;
        this.z -= s;
        return this;
      }
    }, {
      key: "multiply",
      value: function multiply(v) {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;
        return this;
      }
    }, {
      key: "multiplyMat3",
      value: function multiplyMat3(m) {
        var x = this.x,
          y = this.y,
          z = this.z;
        this.x = m.m00 * x + m.m01 * y + m.m02 * z;
        this.y = m.m10 * x + m.m11 * y + m.m12 * z;
        this.z = m.m20 * x + m.m21 * y + m.m22 * z;
        return this;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(s) {
        this.x *= s;
        this.y *= s;
        this.z *= s;
        return this;
      }
    }, {
      key: "divide",
      value: function divide(v) {
        this.x /= v.x;
        this.y /= v.y;
        this.z /= v.z;
        return this;
      }
    }, {
      key: "divideScalar",
      value: function divideScalar(s) {
        this.x /= s;
        this.y /= s;
        this.z /= s;
        return this;
      }
    }, {
      key: "lerp",
      value: function lerp(v, t) {
        this.x += (v.x - this.x) * t;
        this.y += (v.y - this.y) * t;
        this.z += (v.z - this.z) * t;
        return this;
      }
    }, {
      key: "dot",
      value: function dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
      }
    }, {
      key: "cross",
      value: function cross(v) {
        var x = this.x,
          y = this.y,
          z = this.z;
        this.x = y * v.z - z * v.y;
        this.y = z * v.x - x * v.z;
        this.z = x * v.y - y * v.x;
        return this;
      }
    }, {
      key: "lengthSquared",
      value: function lengthSquared() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
      }
    }, {
      key: "length",
      value: function length() {
        return Math.sqrt(this.lengthSquared());
      }
    }, {
      key: "normalize",
      value: function normalize() {
        this.divideScalar(this.length());
        return this;
      }
    }, {
      key: "distanceTo",
      value: function distanceTo(v) {
        return Math.sqrt(this.distanceToSquared(v));
      }
    }, {
      key: "distanceToSquared",
      value: function distanceToSquared(v) {
        var dx = this.x - v.x;
        var dy = this.y - v.y;
        var dz = this.z - v.z;
        return dx * dx + dy * dy + dz * dz;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Vector3(this.x, this.y, this.z);
      }
    }, {
      key: "copy",
      value: function copy(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        return this;
      }
    }, {
      key: "equals",
      value: function equals(v) {
        return this.x === v.x && this.y === v.y && this.z === v.z;
      }
    }]);
    return Vector3;
  }();

  var Color = /*#__PURE__*/function () {
    function Color() {
      var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      _classCallCheck(this, Color);
      _defineProperty(this, "r", void 0);
      _defineProperty(this, "g", void 0);
      _defineProperty(this, "b", void 0);
      _defineProperty(this, "a", void 0);
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
    }
    _createClass(Color, [{
      key: "set",
      value: function set(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a || this.a;
        return this;
      }
    }, {
      key: "setFromHex",
      value: function setFromHex(hex) {
        this.r = (hex >> 16 & 255) / 255;
        this.g = (hex >> 8 & 255) / 255;
        this.b = (hex & 255) / 255;
        return this;
      }
    }, {
      key: "setFromHSL",
      value: function setFromHSL(h, s, l) {
        // hslToRgb
        if (s === 0) {
          this.r = this.g = this.b = l;
        } else {
          var hue2rgb = function hue2rgb(p, q, _t) {
            var t = _t;
            if (t < 0) {
              t += 1;
            }
            if (t > 1) {
              t -= 1;
            }
            if (t < 1 / 6) {
              return p + (q - p) * 6 * t;
            }
            if (t < 1 / 2) {
              return q;
            }
            if (t < 2 / 3) {
              return p + (q - p) * (2 / 3 - t) * 6;
            }
            return p;
          };
          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var p = 2 * l - q;
          this.r = hue2rgb(p, q, h + 1 / 3);
          this.g = hue2rgb(p, q, h);
          this.b = hue2rgb(p, q, h - 1 / 3);
        }
        return this;
      }
    }, {
      key: "toHSL",
      value: function toHSL() {
        // rgbToHsl
        var r = this.r,
          g = this.g,
          b = this.b;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var h;
        var s;
        var l = (max + min) / 2;
        if (max === min) {
          h = s = 0;
        } else {
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch (max) {
            case r:
              h = (g - b) / d + (g < b ? 6 : 0);
              break;
            case g:
              h = (b - r) / d + 2;
              break;
            case b:
            default:
              h = (r - g) / d + 4;
              break;
          }
          h /= 6;
        }
        return {
          h: h,
          s: s,
          l: l
        };
      }
    }, {
      key: "add",
      value: function add(color) {
        this.r += color.r;
        this.g += color.g;
        this.b += color.b;
        this.a += color.a;
        return this;
      }
    }, {
      key: "addScalar",
      value: function addScalar(s) {
        this.r += s;
        this.g += s;
        this.b += s;
        this.a += s;
        return this;
      }
    }, {
      key: "sub",
      value: function sub(color) {
        this.r -= color.r;
        this.g -= color.g;
        this.b -= color.b;
        this.a -= color.a;
        return this;
      }
    }, {
      key: "subScalar",
      value: function subScalar(s) {
        this.r -= s;
        this.g -= s;
        this.b -= s;
        this.a -= s;
        return this;
      }
    }, {
      key: "multiply",
      value: function multiply(color) {
        this.r *= color.r;
        this.g *= color.g;
        this.b *= color.b;
        this.a *= color.a;
        return this;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(s) {
        this.r *= s;
        this.g *= s;
        this.b *= s;
        this.a *= s;
        return this;
      }
    }, {
      key: "lerp",
      value: function lerp(color, t) {
        this.r += (color.r - this.r) * t;
        this.g += (color.g - this.g) * t;
        this.b += (color.b - this.b) * t;
        this.a += (color.a - this.a) * t;
        return this;
      }
    }, {
      key: "lerpHSL",
      value: function lerpHSL(color, t) {
        var hslA = this.toHSL();
        var hslB = color.toHSL();
        var h = hslA.h + (hslB.h - hslA.h) * t;
        var s = hslA.s + (hslB.s - hslA.s) * t;
        var l = hslA.l + (hslB.l - hslA.l) * t;
        this.setFromHSL(h, s, l);
        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Color(this.r, this.g, this.b, this.a);
      }
    }, {
      key: "copy",
      value: function copy(color) {
        this.r = color.r;
        this.g = color.g;
        this.b = color.b;
        this.a = color.a;
        return this;
      }
    }, {
      key: "equals",
      value: function equals(color) {
        return this.r === color.r && this.g === color.g && this.b === color.b && this.a === color.a;
      }
    }, {
      key: "toStyleText",
      value: function toStyleText() {
        return "rgba(".concat(Math.floor(this.r * 256), ", ").concat(Math.floor(this.g * 256), ", ").concat(Math.floor(this.b * 256), ", ").concat(this.a, ")");
      }
    }]);
    return Color;
  }();

  /**
   * GameEntryの場所を管理するコンポーネント
   */
  var TransformPreprocess = /*#__PURE__*/function (_PreprocessBase) {
    _inherits(TransformPreprocess, _PreprocessBase);
    var _super = _createSuper(TransformPreprocess);
    function TransformPreprocess() {
      var _this;
      _classCallCheck(this, TransformPreprocess);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      /**
       * ローカル座標
       */
      _defineProperty(_assertThisInitialized(_this), "position", new Vector2());
      /**
       * ローカル回転角度
       * 回転を考慮し始めると当たり判定などで判定が面倒になるので、0固定
       */
      _defineProperty(_assertThisInitialized(_this), "rotation", 0);
      /**
       * ローカルスケール
       */
      _defineProperty(_assertThisInitialized(_this), "scale", new Vector2(1, 1));
      /**
       * ローカル座標系での変換行列
       * update後に再計算される
       */
      _defineProperty(_assertThisInitialized(_this), "matrix", new Matrix3());
      /**
       * グローバル座標系での変換行列
       * update後に再計算される
       */
      _defineProperty(_assertThisInitialized(_this), "worldMatrix", new Matrix3());
      _defineProperty(_assertThisInitialized(_this), "_worldPosition", new Vector2());
      _defineProperty(_assertThisInitialized(_this), "_worldScale", new Vector2());
      _defineProperty(_assertThisInitialized(_this), "parent", null);
      _defineProperty(_assertThisInitialized(_this), "children", []);
      return _this;
    }
    _createClass(TransformPreprocess, [{
      key: "worldPosition",
      get:
      /**
       * グローバル座標を取得する
       */
      function get() {
        var worldMatrix = this.worldMatrix;
        return this._worldPosition.set(worldMatrix.m02, worldMatrix.m12);
      }
      /**
       * グローバル座標系での回転角度を取得する
       * 注意: 計算簡略化のため回転は考慮されていない
       */
    }, {
      key: "worldRotation",
      get: function get() {
        if (this.parent) {
          return this.parent.worldRotation + this.rotation;
        }
        return this.rotation;
      }
      /**
       * グローバル座標系でのスケールを取得する
       */
    }, {
      key: "worldScale",
      get: function get() {
        var worldMatrix = this.worldMatrix;
        return this._worldScale.set(worldMatrix.m00, worldMatrix.m11);
      }
      /**
       * 子供を追加する
       * @param child
       */
    }, {
      key: "addChild",
      value: function addChild(child) {
        child.parent = this;
        this.children.push(child);
      }
      /**
       * 子供を削除する
       * @param child
       */
    }, {
      key: "removeChild",
      value: function removeChild(child) {
        var index = this.children.indexOf(child);
        if (index >= 0) {
          this.children.splice(index, 1);
        }
      }
    }, {
      key: "process",
      value: function process() {
        if (!this.entry.enabled) return;
        // 行列の更新
        this.matrix.compose(this.position, this.rotation, this.scale);
        if (this.parent) {
          this.worldMatrix.copy(this.parent.worldMatrix);
          this.worldMatrix.multiply(this.matrix);
        } else {
          this.worldMatrix.copy(this.matrix);
        }
        // 子供の更新
        this.children.forEach(function (child) {
          child.process();
        });
      }
    }]);
    return TransformPreprocess;
  }(PreprocessBase);

  var CollisionPreprocess = /*#__PURE__*/function (_PreprocessBase) {
    _inherits(CollisionPreprocess, _PreprocessBase);
    var _super = _createSuper(CollisionPreprocess);
    function CollisionPreprocess() {
      _classCallCheck(this, CollisionPreprocess);
      return _super.apply(this, arguments);
    }
    _createClass(CollisionPreprocess, [{
      key: "process",
      value: function process() {
        if (!this.entry.enabled) return;
        var collider = this.entry.getComponent(ColliderComponent);
        if (collider && collider.enabled) {
          collider.layer.registerCollider(collider);
          collider.resetCollision();
        }
        var childrenCollision = this.entry.transform.children.map(function (childTransform) {
          return childTransform.entry.collision;
        });
        childrenCollision.forEach(function (child) {
          child.process();
        });
      }
    }]);
    return CollisionPreprocess;
  }(PreprocessBase);

  var GameEntry = /*#__PURE__*/function () {
    function GameEntry() {
      _classCallCheck(this, GameEntry);
      // プリプロセス系
      _defineProperty(this, "transform", void 0);
      _defineProperty(this, "graphic", void 0);
      _defineProperty(this, "collision", void 0);
      _defineProperty(this, "_components", []);
      _defineProperty(this, "_destroyed", false);
      _defineProperty(this, "_enabled", true);
      this.transform = new TransformPreprocess(this);
      this.graphic = new GraphicPreprocess(this);
      this.collision = new CollisionPreprocess(this);
    }
    // region LifeCycle
    _createClass(GameEntry, [{
      key: "destroyed",
      get: function get() {
        return this._destroyed;
      }
    }, {
      key: "enabled",
      get: function get() {
        return this._enabled;
      },
      set: function set(value) {
        if (this._enabled && !value) {
          this._components.forEach(function (component) {
            component.innerDisable();
          });
          this._enabled = value;
        } else if (!this._enabled && value) {
          this._enabled = value;
          this._components.forEach(function (component) {
            component.innerEnable();
          });
        }
      }
    }, {
      key: "update",
      value: function update() {
        this._components = this._components.filter(function (component) {
          return !component.destroyed;
        });
        this._components.forEach(function (component) {
          component.innerUpdate();
        });
        var childrenEntry = this.transform.children.map(function (childTransform) {
          return childTransform.entry;
        });
        childrenEntry.forEach(function (child) {
          child.update();
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this._components.forEach(function (component) {
          component.innerDestroy();
        });
      }
      // endregion
      // region Process Components
      /**
       * コンポーネントを追加する
       * @param component
       */
    }, {
      key: "addComponent",
      value: function addComponent(component) {
        this._components.push(component);
        component.innerAdded(this);
        return component;
      }
      /**
       * 自分のコンポーネントで最初に合致するものを取得する
       * @param componentType
       */
    }, {
      key: "getComponent",
      value: function getComponent(componentType) {
        var foundComponent = this._components.find(function (component) {
          return component instanceof componentType;
        });
        if (foundComponent) {
          return foundComponent;
        }
        return null;
      }
      /**
       * 自分のコンポーネントで合致するものをすべて取得する
       * @param componentType
       */
    }, {
      key: "getComponents",
      value: function getComponents(componentType) {
        var foundComponents = this._components.filter(function (component) {
          return component instanceof componentType;
        });
        if (foundComponents) {
          return foundComponents;
        }
        return [];
      }
      /**
       * 自分を含む子孫のコンポーネントを探索して最初に合致するコンポーネントを取得
       * @param componentType
       */
    }, {
      key: "getComponentInChildren",
      value: function getComponentInChildren(componentType) {
        var foundComponent = this._components.find(function (component) {
          return component instanceof componentType;
        });
        if (foundComponent) {
          return foundComponent;
        }
        for (var i = 0; i < this.transform.children.length; i += 1) {
          var child = this.transform.children[i].entry;
          var foundChildrenComponent = child.getComponentInChildren(componentType);
          if (foundChildrenComponent) {
            return foundChildrenComponent;
          }
        }
        return null;
      }
      /**
       * 自分を含む子孫のコンポーネントを探索してすべて取得する
       * @param componentType
       */
    }, {
      key: "getComponentsInChildren",
      value: function getComponentsInChildren(componentType) {
        var allComponents = [];
        var foundComponents = this.getComponents(componentType);
        allComponents.concat(foundComponents);
        for (var i = 0; i < this.transform.children.length; i += 1) {
          var child = this.transform.children[i].entry;
          var foundChildrenComponents = child.getComponentsInChildren(componentType);
          allComponents.concat(foundChildrenComponents);
        }
        return allComponents;
      }
      /**
       * 指定したコンポーネントを削除する
       * @param component
       */
    }, {
      key: "removeComponent",
      value: function removeComponent(component) {
        var foundIndex = this._components.findIndex(function (entry) {
          return entry === component;
        });
        if (foundIndex >= 0) {
          var entry = this._components[foundIndex];
          entry.innerDestroy();
        }
      }
      /**
       * 属するコンポーネントをすべて削除する
       */
    }, {
      key: "removeAllComponents",
      value: function removeAllComponents() {
        this._components.forEach(function (component) {
          component.innerDestroy();
        });
        this._components = [];
      }
    }]);
    return GameEntry;
  }();

  // eslint-disable-next-line no-shadow
  exports.RespawnTarget = void 0;
  (function (RespawnTarget) {
    RespawnTarget[RespawnTarget["Player"] = 0] = "Player";
    RespawnTarget[RespawnTarget["Enemy"] = 1] = "Enemy";
  })(exports.RespawnTarget || (exports.RespawnTarget = {}));
  var RespawnPoint = /*#__PURE__*/function (_GameEntry) {
    _inherits(RespawnPoint, _GameEntry);
    var _super = _createSuper(RespawnPoint);
    function RespawnPoint(respawnTarget) {
      var _this;
      _classCallCheck(this, RespawnPoint);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "target", exports.RespawnTarget.Player);
      _this.target = respawnTarget;
      return _this;
    }
    _createClass(RespawnPoint, [{
      key: "start",
      value: function start() {
        // do nothing
      }
    }, {
      key: "update",
      value: function update() {
        // do nothing
      }
    }, {
      key: "exit",
      value: function exit() {
        // do nothing
      }
    }]);
    return RespawnPoint;
  }(GameEntry);

  var createGameEvent = function createGameEvent() {
    var event = {
      listeners: [],
      listen: function listen(listener) {
        this.listeners.push(listener);
      },
      unlisten: function unlisten(listener) {
        this.listeners = this.listeners.filter(function (l) {
          return l !== listener;
        });
      },
      call: function call(data) {
        this.listeners.forEach(function (l) {
          return l(data);
        });
      }
    };
    return event;
  };

  // eslint-disable-next-line no-shadow
  exports.LevelEventType = void 0;
  (function (LevelEventType) {
    LevelEventType[LevelEventType["LevelStart"] = 0] = "LevelStart";
    LevelEventType[LevelEventType["Pause"] = 1] = "Pause";
    LevelEventType[LevelEventType["Resume"] = 2] = "Resume";
    LevelEventType[LevelEventType["PlayerDeath"] = 3] = "PlayerDeath";
    LevelEventType[LevelEventType["GameOver"] = 4] = "GameOver";
    LevelEventType[LevelEventType["GameClear"] = 5] = "GameClear";
  })(exports.LevelEventType || (exports.LevelEventType = {}));
  var LevelEvent = createGameEvent();

  var GraphicBase = /*#__PURE__*/_createClass(function GraphicBase() {
    _classCallCheck(this, GraphicBase);
    _defineProperty(this, "_boundingBox", new Rect());
  });

  var SpriteGraphic = /*#__PURE__*/function (_GraphicBase) {
    _inherits(SpriteGraphic, _GraphicBase);
    var _super = _createSuper(SpriteGraphic);
    function SpriteGraphic(sprite) {
      var _this;
      _classCallCheck(this, SpriteGraphic);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "position", new Vector2());
      _defineProperty(_assertThisInitialized(_this), "anchor", new Vector2(0.5, 0.5));
      _defineProperty(_assertThisInitialized(_this), "size", new Vector2());
      _defineProperty(_assertThisInitialized(_this), "alpha", 1);
      _defineProperty(_assertThisInitialized(_this), "sprite", void 0);
      _this.sprite = sprite;
      _this.size.set(sprite.width, sprite.height);
      return _this;
    }
    _createClass(SpriteGraphic, [{
      key: "render",
      value: function render(layer) {
        var left = this.position.x - this.anchor.x * this.size.x;
        var top = this.position.y - this.anchor.y * this.size.y;
        if (this.sprite.data) {
          layer.context.globalAlpha = this.alpha;
          layer.context.drawImage(this.sprite.data, left, top, this.size.x, this.size.y);
          layer.context.globalAlpha = 1;
        }
        this._boundingBox.set(this.position.x, this.position.y, this.size.x, this.size.y);
        return this._boundingBox;
      }
    }]);
    return SpriteGraphic;
  }(GraphicBase);

  var SpriteSheetGraphic = /*#__PURE__*/function (_GraphicBase) {
    _inherits(SpriteSheetGraphic, _GraphicBase);
    var _super = _createSuper(SpriteSheetGraphic);
    function SpriteSheetGraphic(sprite) {
      var _this;
      _classCallCheck(this, SpriteSheetGraphic);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "position", new Vector2());
      _defineProperty(_assertThisInitialized(_this), "size", new Vector2());
      _defineProperty(_assertThisInitialized(_this), "sprite", void 0);
      _defineProperty(_assertThisInitialized(_this), "spriteIndex", void 0);
      _this.sprite = sprite;
      _this.size.set(sprite.segmentWidth, sprite.segmentHeight);
      _this.spriteIndex = 0;
      return _this;
    }
    _createClass(SpriteSheetGraphic, [{
      key: "render",
      value: function render(layer) {
        if (this.sprite.data) {
          layer.context.drawImage(this.sprite.data, this.spriteIndex % this.sprite.columns * this.sprite.segmentWidth, Math.floor(this.spriteIndex / this.sprite.columns) * this.sprite.segmentHeight, this.sprite.segmentWidth, this.sprite.segmentHeight, this.position.x, this.position.y, this.size.x, this.size.y);
        }
        this._boundingBox.set(this.position.x, this.position.y, this.size.x, this.size.y);
        return this._boundingBox;
      }
    }]);
    return SpriteSheetGraphic;
  }(GraphicBase);

  var setLineStyle = function setLineStyle(context, style) {
    if (style.lineWidth) {
      context.lineWidth = style.lineWidth;
    }
    if (style.lineCap) {
      context.lineCap = style.lineCap;
    }
    if (style.lineJoin) {
      context.lineJoin = style.lineJoin;
    }
    if (style.miterLimit) {
      context.miterLimit = style.miterLimit;
    }
    if (style.lineDash) {
      context.setLineDash(style.lineDash);
    }
    if (style.lineDashOffset) {
      context.lineDashOffset = style.lineDashOffset;
    }
  };
  var setTextStyle = function setTextStyle(context, style) {
    if (style.font) {
      context.font = style.font;
    }
    if (style.textAlign) {
      context.textAlign = style.textAlign;
    }
    if (style.textBaseline) {
      context.textBaseline = style.textBaseline;
    }
    if (style.direction) {
      context.direction = style.direction;
    }
    if (style.letterSpacing) {
      // @ts-ignore
      context.letterSpacing = style.letterSpacing;
    }
    if (style.fontKerning) {
      context.fontKerning = style.fontKerning;
    }
    if (style.fontStretch) {
      // @ts-ignore
      context.fontStretch = style.fontStretch;
    }
    if (style.fontVariantCaps) {
      // @ts-ignore
      context.fontVariantCaps = style.fontVariantCaps;
    }
    if (style.textRendering) {
      // @ts-ignore
      context.textRendering = style.textRendering;
    }
    if (style.wordSpacing) {
      // @ts-ignore
      context.wordSpacing = style.wordSpacing;
    }
  };
  var setGraphicStyle = function setGraphicStyle(context, style) {
    if (style.fill) {
      context.fillStyle = style.fill;
    }
    if (style.stroke) {
      context.strokeStyle = style.stroke;
    }
    if (style.alpha) {
      context.globalAlpha = style.alpha;
    }
  };

  var TextGraphic = /*#__PURE__*/function (_GraphicBase) {
    _inherits(TextGraphic, _GraphicBase);
    var _super = _createSuper(TextGraphic);
    function TextGraphic(text, font, style) {
      var _this;
      _classCallCheck(this, TextGraphic);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "position", new Vector2());
      _defineProperty(_assertThisInitialized(_this), "text", void 0);
      _defineProperty(_assertThisInitialized(_this), "font", void 0);
      _defineProperty(_assertThisInitialized(_this), "style", void 0);
      _this.text = text;
      _this.font = font;
      _this.style = style;
      return _this;
    }
    _createClass(TextGraphic, [{
      key: "render",
      value: function render(layer) {
        var context = layer.context;
        context.font = this.font;
        setLineStyle(context, this.style);
        setTextStyle(context, this.style);
        setGraphicStyle(context, this.style);
        if (this.style.fill) {
          context.fillText(this.text, this.position.x, this.position.y);
        }
        if (this.style.stroke) {
          context.strokeText(this.text, this.position.x, this.position.y);
        }
        var metrics = context.measureText(this.text);
        this._boundingBox.set(metrics.actualBoundingBoxLeft, metrics.actualBoundingBoxAscent, metrics.actualBoundingBoxRight - metrics.actualBoundingBoxLeft, metrics.actualBoundingBoxDescent + metrics.actualBoundingBoxAscent);
        return this._boundingBox;
      }
    }]);
    return TextGraphic;
  }(GraphicBase);

  var PathGraphic = /*#__PURE__*/function (_GraphicBase) {
    _inherits(PathGraphic, _GraphicBase);
    var _super = _createSuper(PathGraphic);
    function PathGraphic(path, style) {
      var _this;
      _classCallCheck(this, PathGraphic);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "path", void 0);
      _defineProperty(_assertThisInitialized(_this), "style", void 0);
      _defineProperty(_assertThisInitialized(_this), "_tempVector", new Vector2());
      _this.path = path;
      _this.style = style;
      return _this;
    }
    _createClass(PathGraphic, [{
      key: "render",
      value: function render(layer) {
        var _this2 = this;
        this._tempVector.set(0, 0);
        this.path.forEach(function (path, index) {
          var boundingBox = path.render(layer, _this2._tempVector);
          if (index === 0) _this2._boundingBox.copy(boundingBox);else _this2._boundingBox.merge(boundingBox);
        });
        return this._boundingBox;
      }
    }]);
    return PathGraphic;
  }(GraphicBase);

  var PathBase = /*#__PURE__*/_createClass(function PathBase() {
    _classCallCheck(this, PathBase);
    _defineProperty(this, "_boundingBox", new Rect());
  });

  var BeginPath = /*#__PURE__*/function (_PathBase) {
    _inherits(BeginPath, _PathBase);
    var _super = _createSuper(BeginPath);
    function BeginPath(x, y) {
      var _this;
      _classCallCheck(this, BeginPath);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "position", new Vector2());
      _this.position.set(x, y);
      return _this;
    }
    _createClass(BeginPath, [{
      key: "render",
      value: function render(layer, prevPos) {
        layer.context.beginPath();
        layer.context.moveTo(this.position.x, this.position.y);
        prevPos.set(this.position.x, this.position.y);
        this._boundingBox.set(this.position.x, this.position.y, 0, 0);
        return this._boundingBox;
      }
    }]);
    return BeginPath;
  }(PathBase);

  var LinePath = /*#__PURE__*/function (_PathBase) {
    _inherits(LinePath, _PathBase);
    var _super = _createSuper(LinePath);
    function LinePath(x, y) {
      var _this;
      _classCallCheck(this, LinePath);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "position", new Vector2());
      _this.position.set(x, y);
      return _this;
    }
    _createClass(LinePath, [{
      key: "render",
      value: function render(layer, prevPos) {
        layer.context.lineTo(this.position.x, this.position.y);
        prevPos.set(this.position.x, this.position.y);
        this._boundingBox.set(this.position.x, this.position.y, 0, 0);
        return this._boundingBox;
      }
    }]);
    return LinePath;
  }(PathBase);

  var ClosePath = /*#__PURE__*/function (_PathBase) {
    _inherits(ClosePath, _PathBase);
    var _super = _createSuper(ClosePath);
    function ClosePath() {
      _classCallCheck(this, ClosePath);
      return _super.apply(this, arguments);
    }
    _createClass(ClosePath, [{
      key: "render",
      value: function render(layer, prevPos) {
        layer.context.closePath();
        this._boundingBox.set(prevPos.x, prevPos.y, 0, 0);
        return this._boundingBox;
      }
    }]);
    return ClosePath;
  }(PathBase);

  var inputableKeyList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', 'Enter', 'Shift', 'Control', 'Alt', 'Tab', 'Escape', 'Backspace', 'CapsLock', 'Delete', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'MouseLeft', 'MouseRight', 'MouseMiddle', 'MouseX', 'MouseY', 'MouseWheel', 'GamepadA', 'GamepadB', 'GamepadX', 'GamepadY', 'GamepadL1', 'GamepadL2', 'GamepadL3', 'GamepadR1', 'GamepadR2', 'GamepadR3', 'GamepadStart', 'GamepadSelect', 'GamepadUp', 'GamepadDown', 'GamepadLeft', 'GamepadRight', 'GamepadAxisLeftX', 'GamepadAxisLeftY', 'GamepadAxisRightX', 'GamepadAxisRightY', 'GamepadAxisL2', 'GamepadAxisR2', 'GamepadAxisL3', 'GamepadAxisR3'];

  var Vector2Provider = /*#__PURE__*/function () {
    function Vector2Provider() {
      _classCallCheck(this, Vector2Provider);
      _defineProperty(this, "xValue", 0);
      _defineProperty(this, "yValue", 0);
      _defineProperty(this, "prevXValue", 0);
      _defineProperty(this, "prevYValue", 0);
    }
    _createClass(Vector2Provider, [{
      key: "length",
      get: function get() {
        return Math.sqrt(this.xValue * this.xValue + this.yValue * this.yValue);
      }
    }, {
      key: "length2",
      get: function get() {
        return this.xValue * this.xValue + this.yValue * this.yValue;
      }
    }, {
      key: "startPressed",
      get: function get() {
        return Math.pow(this.prevXValue, 2) + Math.pow(this.prevYValue, 2) === 0 && this.length2 > 0;
      }
    }, {
      key: "endPressed",
      get: function get() {
        return Math.pow(this.prevXValue, 2) + Math.pow(this.prevYValue, 2) > 0 && this.length2 === 0;
      }
    }, {
      key: "pressed",
      get: function get() {
        return this.length2 > 0;
      }
    }, {
      key: "value",
      get: function get() {
        return new Vector2(this.xValue, this.yValue);
      }
    }, {
      key: "update",
      value: function update(x, y) {
        this.prevXValue = this.xValue;
        this.prevYValue = this.yValue;
        this.xValue = x;
        this.yValue = y;
      }
    }]);
    return Vector2Provider;
  }();

  var ScalarProvider = /*#__PURE__*/function () {
    function ScalarProvider() {
      _classCallCheck(this, ScalarProvider);
      _defineProperty(this, "rawValue", 0);
      _defineProperty(this, "prevValue", 0);
    }
    _createClass(ScalarProvider, [{
      key: "startPressed",
      get: function get() {
        return this.prevValue === 0 && this.rawValue !== 0;
      }
    }, {
      key: "endPressed",
      get: function get() {
        return this.prevValue !== 0 && this.rawValue === 0;
      }
    }, {
      key: "pressed",
      get: function get() {
        return this.rawValue !== 0;
      }
    }, {
      key: "value",
      get: function get() {
        return this.rawValue;
      }
    }, {
      key: "update",
      value: function update(value) {
        this.prevValue = this.rawValue;
        this.rawValue = value;
      }
    }]);
    return ScalarProvider;
  }();

  var KeyBinder = /*#__PURE__*/function () {
    function KeyBinder(keybind) {
      _classCallCheck(this, KeyBinder);
      _defineProperty(this, "keybind", void 0);
      _defineProperty(this, "keyContainer", void 0);
      this.keybind = keybind;
      // create key containers
      var keyContainer = {};
      Object.keys(keybind).forEach(function (key) {
        if (!keybind[key]) throw new Error("KeyBinder: Invalid keybind(".concat(key, ")"));
        var value = keybind[key][0];
        switch (value.type) {
          case 'scalarkey1':
          case 'scalarkey2':
            keyContainer[key] = new ScalarProvider();
            break;
          case 'vector2key2':
          case 'vector2key4':
            keyContainer[key] = new Vector2Provider();
            break;
          default:
            throw new Error("KeyBinder: Invalid type of keybind(".concat(value, ")"));
        }
      });
      this.keyContainer = keyContainer;
    }
    _createClass(KeyBinder, [{
      key: "getValue",
      value: function getValue(id) {
        return this.keyContainer[id].value;
      }
    }, {
      key: "getStartPressed",
      value: function getStartPressed(id) {
        return this.keyContainer[id].startPressed;
      }
    }, {
      key: "getEndPressed",
      value: function getEndPressed(id) {
        return this.keyContainer[id].endPressed;
      }
    }, {
      key: "getPressed",
      value: function getPressed(id) {
        return this.keyContainer[id].pressed;
      }
    }, {
      key: "update",
      value: function update(keyValues) {
        var _this = this;
        Object.keys(this.keybind).forEach(function (key) {
          var keyBinds = _this.keybind[key];
          keyBinds.forEach(function (keyBind) {
            switch (keyBind.type) {
              case 'scalarkey1':
                {
                  _this.keyContainer[key].update(keyValues[keyBind.value]);
                  break;
                }
              case 'scalarkey2':
                {
                  var positiveValue = keyValues[keyBind.positiveValue];
                  var negativeValue = keyValues[keyBind.negativeValue];
                  _this.keyContainer[key].update(positiveValue - negativeValue);
                  break;
                }
              case 'vector2key2':
                {
                  var xValue = keyValues[keyBind.xValue];
                  var yValue = keyValues[keyBind.yValue];
                  _this.keyContainer[key].update(xValue, yValue);
                  break;
                }
              case 'vector2key4':
                {
                  var xPositiveValue = keyValues[keyBind.xPositiveValue];
                  var xNegativeValue = keyValues[keyBind.xNegativeValue];
                  var yPositiveValue = keyValues[keyBind.yPositiveValue];
                  var yNegativeValue = keyValues[keyBind.yNegativeValue];
                  _this.keyContainer[key].update(xPositiveValue - xNegativeValue, yPositiveValue - yNegativeValue);
                  break;
                }
              default:
                {
                  throw new Error("KeyBinder: Invalid type of keybind(".concat(keyBinds, ")"));
                }
            }
          });
        });
      }
    }]);
    return KeyBinder;
  }();

  var InputManager = /*#__PURE__*/function () {
    function InputManager(window, keybinds) {
      var _this = this;
      _classCallCheck(this, InputManager);
      _defineProperty(this, "keybinds", void 0);
      _defineProperty(this, "keybinders", void 0);
      _defineProperty(this, "rawKeyValues", void 0);
      this.keybinds = keybinds;
      this.keybinders = Object.keys(keybinds).reduce(function (acc, key) {
        acc[key] = new KeyBinder(keybinds[key]);
        return acc;
      }, {});
      this.rawKeyValues = inputableKeyList.reduce(function (acc, key) {
        acc[key] = 0;
        return acc;
      }, {});
      window.addEventListener('keydown', function (e) {
        _this.rawKeyValues[e.key] = 1;
      });
      window.addEventListener('keyup', function (e) {
        _this.rawKeyValues[e.key] = 0;
      });
    }
    _createClass(InputManager, [{
      key: "getKeybinder",
      value: function getKeybinder(key) {
        return this.keybinders[key];
      }
    }, {
      key: "updateKeyBinds",
      value: function updateKeyBinds() {
        var _this2 = this;
        Object.keys(this.keybinds).forEach(function (key) {
          _this2.keybinders[key].update(_this2.rawKeyValues);
        });
      }
    }]);
    return InputManager;
  }();

  // このLevelStateが二重定義されているというエラーが出るが、どこで定義されているのかわからないので暫定的に無視
  // eslint-disable-next-line no-shadow
  exports.LevelState = void 0;
  (function (LevelState) {
    LevelState[LevelState["Playing"] = 0] = "Playing";
    LevelState[LevelState["Paused"] = 1] = "Paused";
    LevelState[LevelState["GameOver"] = 2] = "GameOver";
    LevelState[LevelState["GameClear"] = 3] = "GameClear";
  })(exports.LevelState || (exports.LevelState = {}));
  /**
   * レベルに関する処理を管轄するクラス
   */
  var LevelManager = /*#__PURE__*/function () {
    function LevelManager(levelManagerSettings) {
      _classCallCheck(this, LevelManager);
      /**
       * レベルにあるEntryのルート
       */
      _defineProperty(this, "rootEntry", void 0);
      /**
       * レベルの状態を表す
       * @protected
       */
      _defineProperty(this, "state", void 0);
      this.rootEntry = levelManagerSettings.rootEntry;
      this.state = exports.LevelState.Playing;
    }
    _createClass(LevelManager, [{
      key: "levelEventListener",
      value: function levelEventListener(levelEventType) {
        switch (levelEventType) {
          case exports.LevelEventType.LevelStart:
            // do nothing
            break;
          case exports.LevelEventType.Pause:
            this.state = exports.LevelState.Paused;
            this.pause();
            break;
          case exports.LevelEventType.Resume:
            this.state = exports.LevelState.Playing;
            this.resume();
            break;
          case exports.LevelEventType.PlayerDeath:
            this.playerDeath();
            break;
          case exports.LevelEventType.GameClear:
            this.state = exports.LevelState.GameClear;
            this.gameClear();
            break;
          case exports.LevelEventType.GameOver:
            this.state = exports.LevelState.GameOver;
            this.gameOver();
            break;
          default:
            throw new Error("LevelManager: Invalid LevelEventType (".concat(levelEventType, ")"));
        }
      }
    }, {
      key: "start",
      value: function start() {
        this.state = exports.LevelState.Playing;
        LevelEvent.listen(this.levelEventListener.bind(this));
      }
    }, {
      key: "exit",
      value: function exit() {
        this.rootEntry.destroy();
        LevelEvent.unlisten(this.levelEventListener.bind(this));
      }
    }, {
      key: "gameOver",
      value: function gameOver() {
        // no impl
      }
    }, {
      key: "gameClear",
      value: function gameClear() {
        // no impl
      }
    }, {
      key: "pause",
      value: function pause() {
        // no impl
      }
    }, {
      key: "resume",
      value: function resume() {
        // no impl
      }
    }, {
      key: "playerDeath",
      value: function playerDeath() {
        // no impl
      }
    }]);
    return LevelManager;
  }();

  var ActionLevelManager = /*#__PURE__*/function (_LevelManager) {
    _inherits(ActionLevelManager, _LevelManager);
    var _super = _createSuper(ActionLevelManager);
    function ActionLevelManager(actionLevelManagerSettings) {
      var _this;
      _classCallCheck(this, ActionLevelManager);
      _this = _super.call(this, actionLevelManagerSettings);
      _defineProperty(_assertThisInitialized(_this), "playerLife", -1);
      _defineProperty(_assertThisInitialized(_this), "playerRespawnPoint", void 0);
      _defineProperty(_assertThisInitialized(_this), "playerRespawnDelay", 0);
      _this.playerRespawnPoint = actionLevelManagerSettings.respawnPoint;
      _this.playerLife = actionLevelManagerSettings.life;
      _this.playerRespawnDelay = actionLevelManagerSettings.respawnDelay;
      return _this;
    }
    _createClass(ActionLevelManager, [{
      key: "playerDeath",
      value: function playerDeath() {
        _get(_getPrototypeOf(ActionLevelManager.prototype), "playerDeath", this).call(this);
        if (this.playerLife === -1) {
          this.respawnPlayer();
        }
        this.playerLife -= 1;
        if (this.playerLife === 0) {
          LevelEvent.call(exports.LevelEventType.GameOver);
        } else {
          this.respawnPlayer();
        }
      }
    }, {
      key: "respawnPlayer",
      value: function () {
        var _respawnPlayer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(this.playerRespawnDelay > 0)) {
                  _context.next = 3;
                  break;
                }
                _context.next = 3;
                return wait(this.playerRespawnDelay * 1000);
              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function respawnPlayer() {
          return _respawnPlayer.apply(this, arguments);
        }
        return respawnPlayer;
      }()
    }, {
      key: "setRespawnPoint",
      value: function setRespawnPoint(respawnPoint) {
        this.playerRespawnPoint = respawnPoint;
      }
    }]);
    return ActionLevelManager;
  }(LevelManager);

  var LevelSelector = /*#__PURE__*/function () {
    function LevelSelector(levels, initialLevelKey) {
      _classCallCheck(this, LevelSelector);
      _defineProperty(this, "_levelRecord", void 0);
      _defineProperty(this, "_currentLevelKey", void 0);
      this._levelRecord = levels;
      this._currentLevelKey = initialLevelKey;
    }
    /**
     * レベルを移動
     * @param levelName
     */
    _createClass(LevelSelector, [{
      key: "moveLevel",
      value: function moveLevel(levelName) {
        this._levelRecord[this._currentLevelKey].exit();
        this._currentLevelKey = levelName;
        this._levelRecord[this._currentLevelKey].start();
      }
      /**
       * 現在のレベルのLevelManagerを取得
       */
    }, {
      key: "currentLevel",
      value: function currentLevel() {
        return this._levelRecord[this._currentLevelKey];
      }
    }]);
    return LevelSelector;
  }();

  var imageFileLoader = function imageFileLoader(path, progress) {
    var target = new Image();
    target.src = path;
    progress === null || progress === void 0 || progress.bind(target)(0);
    return new Promise(function (resolve, reject) {
      target.addEventListener('load', function () {
        progress === null || progress === void 0 || progress.bind(target)(1);
        resolve(target);
      });
      target.addEventListener('error', function () {
        reject();
      });
    });
  };
  var audioFileLoader = function audioFileLoader(path, progress) {
    var target = new Audio();
    target.src = path;
    progress === null || progress === void 0 || progress.bind(target)(0);
    return new Promise(function (resolve, reject) {
      target.addEventListener('load', function () {
        progress === null || progress === void 0 || progress.bind(target)(1);
        resolve(target);
      });
      target.addEventListener('error', function () {
        reject();
      });
    });
  };
  var fileLoaderTable = {
    image: imageFileLoader,
    audio: audioFileLoader
  };

  /**
   * ゲームに必要なファイルを読み取るクラス
   * 型安全にするために、ファイルのリストをコンストラクタで渡す
   */
  var StaticFileLoader = /*#__PURE__*/function () {
    function StaticFileLoader(fileList) {
      _classCallCheck(this, StaticFileLoader);
      _defineProperty(this, "_fileList", void 0);
      this._fileList = fileList;
    }
    /**
     * ファイルをすべて読み込む
     * @param progress
     */
    _createClass(StaticFileLoader, [{
      key: "loadAll",
      value: function () {
        var _loadAll = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(progress) {
          var _this = this;
          var loadedCount, loadFilePromises;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                loadedCount = 0;
                loadFilePromises = Object.entries(this._fileList).map(function (_ref) {
                  var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    asset = _ref2[1];
                  var loader = fileLoaderTable[asset.fileType];
                  return loader(asset.path, null).then(function (data) {
                    loadedCount += 1;
                    progress(loadedCount / Object.keys(_this._fileList).length);
                    asset.data = data;
                    return [key, data];
                  });
                });
                _context.next = 4;
                return Promise.all(loadFilePromises);
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function loadAll(_x) {
          return _loadAll.apply(this, arguments);
        }
        return loadAll;
      }()
    }, {
      key: "get",
      value: function get(id) {
        return this._fileList[id];
      }
    }]);
    return StaticFileLoader;
  }();

  /**
   * ゲーム開始後動的にファイルを読むためのクラス
   */
  var DynamicFileLoader = /*#__PURE__*/function () {
    function DynamicFileLoader() {
      _classCallCheck(this, DynamicFileLoader);
      _defineProperty(this, "_registeredAssetTable", {});
    }
    _createClass(DynamicFileLoader, [{
      key: "load",
      value: function () {
        var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(key, asset, progress) {
          var loader;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(this._registeredAssetTable[key] !== undefined)) {
                  _context.next = 2;
                  break;
                }
                throw new Error("DynamicFileLoader: Asset(".concat(String(key), ") is already registered"));
              case 2:
                loader = fileLoaderTable[asset.fileType];
                this._registeredAssetTable[key] = asset;
                _context.next = 6;
                return loader(asset.path, progress);
              case 6:
                this._registeredAssetTable[key].data = _context.sent;
              case 7:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function load(_x, _x2, _x3) {
          return _load.apply(this, arguments);
        }
        return load;
      }()
    }, {
      key: "get",
      value: function get(id) {
        if (!this._registeredAssetTable[id]) throw new Error("DynamicFileLoader: Asset(".concat(String(id), ") is not registered"));
        return this._registeredAssetTable[id];
      }
    }, {
      key: "dispose",
      value: function dispose(id) {
        if (!this._registeredAssetTable[id]) throw new Error("DynamicFileLoader: Asset(".concat(String(id), ") is not registered"));
        delete this._registeredAssetTable[id];
      }
    }]);
    return DynamicFileLoader;
  }();

  var AssetBase = /*#__PURE__*/function () {
    function AssetBase(path, fileType) {
      _classCallCheck(this, AssetBase);
      _defineProperty(this, "_path", void 0);
      _defineProperty(this, "_fileType", void 0);
      _defineProperty(this, "_data", void 0);
      _defineProperty(this, "_isLoaded", void 0);
      this._path = path;
      this._fileType = fileType;
      this._isLoaded = false;
    }
    _createClass(AssetBase, [{
      key: "path",
      get:
      /**
       * ファイルのあるパス
       */
      function get() {
        return this._path;
      }
    }, {
      key: "fileType",
      get: function get() {
        return this._fileType;
      }
    }, {
      key: "data",
      get:
      /**
       * ファイルのデータ本体
       */
      function get() {
        return this._data;
      },
      set: function set(data) {
        this._data = data;
        this._isLoaded = true;
      }
    }, {
      key: "isLoaded",
      get:
      /**
       * ファイルがロード済みかどうか
       */
      function get() {
        return this._isLoaded;
      }
    }]);
    return AssetBase;
  }();

  var AudioAsset = /*#__PURE__*/function (_AssetBase) {
    _inherits(AudioAsset, _AssetBase);
    var _super = _createSuper(AudioAsset);
    function AudioAsset(path, audioType) {
      var _this;
      _classCallCheck(this, AudioAsset);
      _this = _super.call(this, path, 'audio');
      /**
       * 音声アセットのタイプ
       */
      _defineProperty(_assertThisInitialized(_this), "audioType", void 0);
      /**
       * ループ開始時間
       * bgm以外では効果なし
       */
      _defineProperty(_assertThisInitialized(_this), "loopStartTime", 0);
      /**
       * ループ終了時間
       * bgm以外では効果なし
       */
      _defineProperty(_assertThisInitialized(_this), "loopEndTime", 0);
      _this.audioType = audioType;
      return _this;
    }
    _createClass(AudioAsset, [{
      key: "length",
      get:
      /**
       * 音声の長さ
       */
      function get() {
        var _this$data;
        return ((_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data.duration) || 0;
      }
    }]);
    return AudioAsset;
  }(AssetBase);

  /**
   * 画像を表すクラス
   */
  var SpriteAsset = /*#__PURE__*/function (_AssetBase) {
    _inherits(SpriteAsset, _AssetBase);
    var _super = _createSuper(SpriteAsset);
    function SpriteAsset(path) {
      _classCallCheck(this, SpriteAsset);
      return _super.call(this, path, 'image');
    }
    _createClass(SpriteAsset, [{
      key: "width",
      get: function get() {
        var _this$data;
        return ((_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data.width) || 0;
      }
    }, {
      key: "height",
      get: function get() {
        var _this$data2;
        return ((_this$data2 = this.data) === null || _this$data2 === void 0 ? void 0 : _this$data2.height) || 0;
      }
    }]);
    return SpriteAsset;
  }(AssetBase);

  /**
   * スプライトシートの画像を表すクラス
   */
  var SpriteSheetAsset = /*#__PURE__*/function (_AssetBase) {
    _inherits(SpriteSheetAsset, _AssetBase);
    var _super = _createSuper(SpriteSheetAsset);
    function SpriteSheetAsset(path, columns, rows) {
      var _this;
      _classCallCheck(this, SpriteSheetAsset);
      _this = _super.call(this, path, 'image');
      _defineProperty(_assertThisInitialized(_this), "columns", void 0);
      _defineProperty(_assertThisInitialized(_this), "rows", void 0);
      _this.columns = columns;
      _this.rows = rows;
      return _this;
    }
    _createClass(SpriteSheetAsset, [{
      key: "width",
      get: function get() {
        var _this$data;
        return ((_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data.width) || 0;
      }
    }, {
      key: "height",
      get: function get() {
        var _this$data2;
        return ((_this$data2 = this.data) === null || _this$data2 === void 0 ? void 0 : _this$data2.height) || 0;
      }
      /**
       * スプライトシートの各画像の幅
       */
    }, {
      key: "segmentWidth",
      get: function get() {
        return this.width / this.columns;
      }
      /**
       * スプライトシートの各画像の高さ
       */
    }, {
      key: "segmentHeight",
      get: function get() {
        return this.height / this.rows;
      }
    }]);
    return SpriteSheetAsset;
  }(AssetBase);

  /**
   * 画像の一部を切り出した画像を表すクラス
   */
  var SubSpriteAsset = /*#__PURE__*/function (_AssetBase) {
    _inherits(SubSpriteAsset, _AssetBase);
    var _super = _createSuper(SubSpriteAsset);
    function SubSpriteAsset(path, left, top, right, bottom) {
      var _this;
      _classCallCheck(this, SubSpriteAsset);
      _this = _super.call(this, path, 'image');
      _defineProperty(_assertThisInitialized(_this), "left", void 0);
      _defineProperty(_assertThisInitialized(_this), "top", void 0);
      _defineProperty(_assertThisInitialized(_this), "right", void 0);
      _defineProperty(_assertThisInitialized(_this), "bottom", void 0);
      _this.left = left;
      _this.top = top;
      _this.right = right;
      _this.bottom = bottom;
      return _this;
    }
    return _createClass(SubSpriteAsset);
  }(AssetBase);

  exports.ActionLevelManager = ActionLevelManager;
  exports.AssetBase = AssetBase;
  exports.AudioAsset = AudioAsset;
  exports.BeginPath = BeginPath;
  exports.ClosePath = ClosePath;
  exports.ColliderComponent = ColliderComponent;
  exports.Color = Color;
  exports.ComponentBase = ComponentBase;
  exports.DynamicFileLoader = DynamicFileLoader;
  exports.EventEmitter = EventEmitter;
  exports.GameEntry = GameEntry;
  exports.GameManager = GameManager;
  exports.GamePipeline = GamePipeline;
  exports.GraphicBase = GraphicBase;
  exports.GraphicComponent = GraphicComponent;
  exports.InputManager = InputManager;
  exports.KeyBinder = KeyBinder;
  exports.LevelEvent = LevelEvent;
  exports.LevelManager = LevelManager;
  exports.LevelSelector = LevelSelector;
  exports.LinePath = LinePath;
  exports.ManagerBase = ManagerBase;
  exports.Matrix2 = Matrix2;
  exports.Matrix3 = Matrix3;
  exports.PathBase = PathBase;
  exports.PathGraphic = PathGraphic;
  exports.Rect = Rect;
  exports.RespawnPoint = RespawnPoint;
  exports.ScalarProvider = ScalarProvider;
  exports.SpriteAsset = SpriteAsset;
  exports.SpriteGraphic = SpriteGraphic;
  exports.SpriteSheetAsset = SpriteSheetAsset;
  exports.SpriteSheetGraphic = SpriteSheetGraphic;
  exports.StaticFileLoader = StaticFileLoader;
  exports.SubSpriteAsset = SubSpriteAsset;
  exports.TextGraphic = TextGraphic;
  exports.Time = Time;
  exports.UndirectedTable = UndirectedTable;
  exports.Vector2 = Vector2;
  exports.Vector2Provider = Vector2Provider;
  exports.Vector3 = Vector3;
  exports.createGameEvent = createGameEvent;
  exports.fileLoaderTable = fileLoaderTable;
  exports.inputableKeyList = inputableKeyList;
  exports.setGraphicStyle = setGraphicStyle;
  exports.setLineStyle = setLineStyle;
  exports.setTextStyle = setTextStyle;
  exports.wait = wait;
  exports.waitFrame = waitFrame;

}));
//# sourceMappingURL=bubble-engine.js.map
