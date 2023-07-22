(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.BubbleEngine = {}));
})(this, (function (exports) { 'use strict';

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return exports;
    };
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function (method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      },
      stop: function () {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function (record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      catch: function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
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

  /**
   * ゲーム全体のライフタイムを管理
   */
  var GameManager = /*#__PURE__*/function () {
    function GameManager() {
      _classCallCheck(this, GameManager);
      _defineProperty(this, "requestAnimationFrameId", -1);
      GameManager.privateInstance = this;
    }
    _createClass(GameManager, [{
      key: "start",
      value: function start() {
        this.requestAniamationFrameId = requestAnimationFrame(this.update.bind(this));
      }
    }, {
      key: "update",
      value: function update() {
        this.requestAnimationFrameId = requestAnimationFrame(this.update.bind(this));
      }
    }], [{
      key: "instance",
      get: function get() {
        return GameManager.privateInstance;
      }
    }]);
    return GameManager;
  }();
  // eslint-disable-next-line no-use-before-define
  _defineProperty(GameManager, "privateInstance", void 0);

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
  var LevelEventType;
  (function (LevelEventType) {
    LevelEventType[LevelEventType["LevelStart"] = 0] = "LevelStart";
    LevelEventType[LevelEventType["Pause"] = 1] = "Pause";
    LevelEventType[LevelEventType["Resume"] = 2] = "Resume";
    LevelEventType[LevelEventType["PlayerDeath"] = 3] = "PlayerDeath";
    LevelEventType[LevelEventType["GameOver"] = 4] = "GameOver";
    LevelEventType[LevelEventType["GameClear"] = 5] = "GameClear";
  })(LevelEventType || (LevelEventType = {}));
  var LevelEvent = createGameEvent();

  // このLevelStateが二重定義されているというエラーが出るが、どこで定義されているのかわからないので暫定的に無視
  // eslint-disable-next-line no-shadow
  exports.LevelState = void 0;
  (function (LevelState) {
    LevelState[LevelState["Playing"] = 0] = "Playing";
    LevelState[LevelState["Paused"] = 1] = "Paused";
    LevelState[LevelState["GameOver"] = 2] = "GameOver";
    LevelState[LevelState["GameClear"] = 3] = "GameClear";
  })(exports.LevelState || (exports.LevelState = {}));
  var LevelManager = /*#__PURE__*/function () {
    function LevelManager(levelManagerSettings) {
      _classCallCheck(this, LevelManager);
      _defineProperty(this, "dependedEntries", void 0);
      _defineProperty(this, "state", void 0);
      this.dependedEntries = levelManagerSettings.dependedEntries;
      this.state = exports.LevelState.Playing;
    }
    _createClass(LevelManager, [{
      key: "levelEventListener",
      value: function levelEventListener(levelEventType) {
        switch (levelEventType) {
          case LevelEventType.LevelStart:
            // do nothing
            break;
          case LevelEventType.Pause:
            this.state = exports.LevelState.Paused;
            this.pause();
            break;
          case LevelEventType.Resume:
            this.state = exports.LevelState.Playing;
            this.resume();
            break;
          case LevelEventType.PlayerDeath:
            this.playerDeath();
            break;
          case LevelEventType.GameClear:
            this.state = exports.LevelState.GameClear;
            this.gameClear();
            break;
          case LevelEventType.GameOver:
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
        this.dependedEntries.forEach(function (entry) {
          entry.start();
        });
      }
    }, {
      key: "update",
      value: function update() {
        this.dependedEntries.forEach(function (entry) {
          entry.update();
        });
      }
    }, {
      key: "exit",
      value: function exit() {
        this.dependedEntries.forEach(function (entry) {
          entry.exit();
        });
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

  var ImageLoader = function ImageLoader(path, progress) {
    var target = new Image();
    target.src = path;
    progress === null || progress === void 0 ? void 0 : progress.bind(target)(0);
    return new Promise(function (resolve, reject) {
      target.addEventListener('load', function () {
        progress === null || progress === void 0 ? void 0 : progress.bind(target)(1);
        resolve(target);
      });
      target.addEventListener('error', function () {
        reject();
      });
    });
  };
  var AudioLoader = function AudioLoader(path, progress) {
    var target = new Audio();
    target.src = path;
    progress === null || progress === void 0 ? void 0 : progress.bind(target)(0);
    return new Promise(function (resolve, reject) {
      target.addEventListener('load', function () {
        progress === null || progress === void 0 ? void 0 : progress.bind(target)(1);
        resolve(target);
      });
      target.addEventListener('error', function () {
        reject();
      });
    });
  };

  var defaultLoaderList = {
    image: ImageLoader,
    audio: AudioLoader
  };

  var StaticFileLoader = /*#__PURE__*/function () {
    function StaticFileLoader(loaderList, fileList) {
      _classCallCheck(this, StaticFileLoader);
      _defineProperty(this, "loaderList", void 0);
      _defineProperty(this, "fileList", void 0);
      _defineProperty(this, "loadedFiles", {});
      this.loaderList = loaderList;
      this.fileList = fileList;
    }
    _createClass(StaticFileLoader, [{
      key: "loadAll",
      value: function () {
        var _loadAll = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(progress) {
          var _this = this;
          var loadedCount, loadFilePromises, loadedFile;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                loadedCount = 0;
                loadFilePromises = Object.entries(this.fileList).map(function (_ref) {
                  var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    fileEntry = _ref2[1];
                  var loader = _this.loaderList[fileEntry.type];
                  return loader(fileEntry.path, null).then(function (data) {
                    loadedCount += 1;
                    progress(loadedCount / Object.keys(_this.fileList).length);
                    return [key, data];
                  });
                });
                _context.next = 4;
                return Promise.all(loadFilePromises);
              case 4:
                loadedFile = _context.sent;
                this.loadedFiles = Object.fromEntries(loadedFile);
              case 6:
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
        if (!this.loadedFiles[id]) throw new Error("StaticFileLoader: File(".concat(String(id), ") is not loaded"));
        return this.loadedFiles[id];
      }
    }]);
    return StaticFileLoader;
  }();

  var DynamicFileLoader = /*#__PURE__*/function () {
    function DynamicFileLoader(fileLoaderList) {
      _classCallCheck(this, DynamicFileLoader);
      _defineProperty(this, "fileLoaderList", void 0);
      _defineProperty(this, "loadedFiles", {});
      this.fileLoaderList = fileLoaderList;
    }
    _createClass(DynamicFileLoader, [{
      key: "load",
      value: function () {
        var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(key, file, progress) {
          var loader;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(this.loadedFiles[key] !== undefined)) {
                  _context.next = 2;
                  break;
                }
                throw new Error("DynamicFileLoader: File(".concat(String(key), ") is already loaded"));
              case 2:
                loader = this.fileLoaderList[file.type];
                this.loadedFiles[key] = null;
                _context.next = 6;
                return loader(file.path, progress);
              case 6:
                this.loadedFiles[key] = _context.sent;
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
        if (!this.loadedFiles[id]) throw new Error("DynamicFileLoader: File(".concat(String(id), ") is not loaded"));
        return this.loadedFiles[id];
      }
    }, {
      key: "isLoaded",
      value: function isLoaded(id) {
        return this.loadedFiles[id] !== undefined;
      }
    }, {
      key: "dispose",
      value: function dispose(id) {
        if (!this.loadedFiles[id]) throw new Error("DynamicFileLoader: File(".concat(String(id), ") is not loaded"));
        delete this.loadedFiles[id];
      }
    }]);
    return DynamicFileLoader;
  }();

  exports.AudioLoader = AudioLoader;
  exports.DynamicFileLoader = DynamicFileLoader;
  exports.GameManager = GameManager;
  exports.ImageLoader = ImageLoader;
  exports.LevelManager = LevelManager;
  exports.StaticFileLoader = StaticFileLoader;
  exports.defaultLoaderList = defaultLoaderList;

}));
//# sourceMappingURL=bubble-engine.js.map
