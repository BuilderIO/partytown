/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ 140: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw new TypeError('Cannot call a class as a function');
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          (descriptor = props[i]),
            (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _createClass(Constructor, protoProps, staticProps) {
        return (
          protoProps && _defineProperties(Constructor.prototype, protoProps),
          staticProps && _defineProperties(Constructor, staticProps),
          Constructor
        );
      }
      var Control = /*#__PURE__*/ (function () {
        function Control(video) {
          _classCallCheck(this, Control),
            (this.video = video),
            (this.unbinds = []),
            (this.reactMounts = {});
        }
        return (
          _createClass(Control, [
            {
              key: 'mount',
              value: function mount(rootElem) {
                this.rootElem = rootElem;
              },
            },
          ]),
          Control
        );
      })();
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Control;

      /***/
    },

    /***/ 440: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1);
      /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw new TypeError('Cannot call a class as a function');
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          (descriptor = props[i]),
            (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _createClass(Constructor, protoProps, staticProps) {
        return (
          protoProps && _defineProperties(Constructor.prototype, protoProps),
          staticProps && _defineProperties(Constructor, staticProps),
          Constructor
        );
      }
      function _inherits(subClass, superClass) {
        if ('function' != typeof superClass && null !== superClass)
          throw new TypeError('Super expression must either be null or a function');
        (subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: { value: subClass, writable: !0, configurable: !0 },
        })),
          superClass && _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o, p) {
        return (
          (_setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              return (o.__proto__ = p), o;
            }),
          _setPrototypeOf(o, p)
        );
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var result,
            Super = _getPrototypeOf(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return _possibleConstructorReturn(this, result);
        };
      }
      function _possibleConstructorReturn(self, call) {
        return call && ('object' == typeof call || 'function' == typeof call)
          ? call
          : _assertThisInitialized(self);
      }
      function _assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
      }
      function _isNativeReflectConstruct() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }
      function _getPrototypeOf(o) {
        return (
          (_getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              }),
          _getPrototypeOf(o)
        );
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      var _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/detect'),
        cachedDetect = _W$lib.cachedDetect,
        _W$lib2 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/obj'),
        clone = _W$lib2.clone,
        _W$lib3 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/seqid'),
        seqId = _W$lib3.seqId,
        detect = cachedDetect(),
        FADE_UP_TIME = 600,
        CircleOverlayButton = /*#__PURE__*/ (function (_Component) {
          function CircleOverlayButton() {
            var _this;
            _classCallCheck(this, CircleOverlayButton);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++)
              args[_key] = arguments[_key];
            return (
              (_this = _super.call.apply(_super, [this].concat(args))),
              _defineProperty(_assertThisInitialized(_this), 'state', {
                buttons: [{ key: seqId(), isFadingUp: !1, isFirstRender: !1 }],
                isDisplayNone: !0,
                isMouseDown: !1,
                isOpaque: !1,
              }),
              _defineProperty(_assertThisInitialized(_this), 'onClick', function (e) {
                var fadeUpOnClick = _this.props.fadeUpOnClick; // Modify the buttons array so that the one that was just active now has
                // isFadingUp: true. Then we add another one at the end of the array to be
                // the new "active" button.
                if (fadeUpOnClick) {
                  var buttons = _this.state.buttons,
                    newButtons = clone(buttons),
                    fadingButton = newButtons[newButtons.length - 1];
                  fadingButton.isFadingUp = !0;
                  var fadingKey = fadingButton.key;
                  newButtons.push({ key: seqId(), isFadingUp: !1, isFirstRender: !0 }),
                    _this.setState({ buttons: newButtons }),
                    setTimeout(function () {
                      _this.setState({
                        buttons: _this.state.buttons.filter(function (b) {
                          return b.key !== fadingKey;
                        }),
                      });
                    }, 700);
                }
                var onClick = _this.props.onClick;
                onClick && onClick(e);
              }),
              _defineProperty(_assertThisInitialized(_this), 'onMouseDown', function () {
                _this.setState({ isMouseDown: !0 });
              }),
              _defineProperty(_assertThisInitialized(_this), 'onMouseUp', function () {
                _this.setState({ isMouseDown: !1 });
              }),
              _defineProperty(_assertThisInitialized(_this), 'onTouchEnd', function () {
                _this.setState({ isMouseDown: !1 });
              }),
              _defineProperty(_assertThisInitialized(_this), 'onTouchStart', function () {
                _this.setState({ isMouseDown: !0 });
              }),
              _this
            );
          }
          _inherits(CircleOverlayButton, _Component);
          var _super = _createSuper(CircleOverlayButton);
          return (
            _createClass(CircleOverlayButton, [
              {
                key: 'buttonStyle',
                value: function buttonStyle(button) {
                  var _this$props = this.props,
                    bottom = _this$props.bottom,
                    left = _this$props.left,
                    right = _this$props.right,
                    scale = _this$props.scale,
                    top = _this$props.top,
                    isFadingUp = button.isFadingUp,
                    isFirstRender = button.isFirstRender,
                    _this$state = this.state,
                    isDisplayNone = _this$state.isDisplayNone,
                    isMouseDown = _this$state.isMouseDown,
                    isOpaque = _this$state.isOpaque,
                    circleHeight = 140 * scale,
                    circleWidth = 140 * scale,
                    rootTranslateY = -50,
                    rootScale = 0.8;
                  return (
                    isFadingUp ? (rootTranslateY = -120) : isFirstRender && (rootTranslateY = 20),
                    isFadingUp
                      ? (rootScale = 1)
                      : isFirstRender
                      ? (rootScale = 0.4)
                      : isMouseDown && (rootScale = 0.9),
                    {
                      background: 'rgba(0,0,0,.6)',
                      border: 0,
                      borderRadius: '50%',
                      bottom: bottom,
                      cursor: 'pointer',
                      display: isDisplayNone ? 'none' : 'block',
                      height: ''.concat(circleHeight, 'px'),
                      left: left,
                      margin: 0,
                      padding: 0,
                      pointerEvents: 'auto',
                      position: 'absolute',
                      opacity: !isOpaque || isFadingUp || isFirstRender ? 0 : 1,
                      outline: 'none',
                      right: right,
                      top: top,
                      transform: 'translate(-50%, '
                        .concat(rootTranslateY, '%) scale(')
                        .concat(rootScale, ')'),
                      transition: 'opacity '
                        .concat(isFadingUp ? FADE_UP_TIME : 200, 'ms, transform ')
                        .concat(isMouseDown ? 200 : FADE_UP_TIME, 'ms'),
                      webkitTapHighlightColor: 'rgba(0,0,0,0)',
                      width: ''.concat(circleWidth, 'px'),
                    }
                  );
                },
              },
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  this.handleVisibilityChange(this.props, this.state);
                },
              },
              {
                key: 'componentDidUpdate',
                value: function componentDidUpdate() {
                  var _this2 = this,
                    isVisible = this.props.isVisible,
                    buttons = this.state.buttons;
                  if (isVisible && buttons[buttons.length - 1].isFirstRender) {
                    var newButtons = clone(buttons);
                    (newButtons[newButtons.length - 1].isFirstRender = !1),
                      setTimeout(function () {
                        _this2.setState({ buttons: newButtons });
                      }, 10);
                  }
                },
              },
              {
                key: 'componentWillReceiveProps',
                value: function componentWillReceiveProps(nextProps) {
                  var isVisible = nextProps.isVisible,
                    wasVisible = this.props.isVisible;
                  isVisible !== wasVisible && this.handleVisibilityChange(nextProps, this.state);
                },
              },
              {
                key: 'handleVisibilityChange',
                value: function handleVisibilityChange(props, state) {
                  var _this3 = this,
                    isVisible = props.isVisible,
                    isDisplayNone = state.isDisplayNone,
                    isOpaque = state.isOpaque;
                  isVisible && isDisplayNone
                    ? (this.setState({ isDisplayNone: !1 }),
                      setTimeout(function () {
                        _this3.setState({ isOpaque: !0 });
                      }, 10))
                    : !isVisible &&
                      isOpaque &&
                      (this.setState({ isOpaque: !1 }),
                      setTimeout(function () {
                        _this3.setState({ isDisplayNone: !0 });
                      }, 100));
                },
              },
              {
                key: 'rootStyle',
                value: function rootStyle() {
                  return {
                    height: '100%',
                    left: 0,
                    pointerEvents: 'none',
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                  };
                },
              },
              {
                key: 'render',
                value: function render() {
                  var _this4 = this,
                    _this$props2 = this.props,
                    ariaLabel = _this$props2.ariaLabel,
                    children = _this$props2.children,
                    buttons = this.state.buttons;
                  return (0, preact__WEBPACK_IMPORTED_MODULE_1__.h)(
                    'div',
                    { class: 'w-css-reset w-css-reset-tree', style: this.rootStyle() },
                    buttons.map(function (button, index) {
                      return (0,
                      preact__WEBPACK_IMPORTED_MODULE_1__.h)('button', { 'aria-label': ariaLabel, 'class': 'w-vulcan-v2-button', 'key': button.key, 'onClick': index === buttons.length - 1 && _this4.onClick, 'onMouseDown': !detect.touchScreen && _this4.onMouseDown, 'onMouseUp': !detect.touchScreen && _this4.onMouseUp, 'onTouchEnd': detect.touchScreen && _this4.onTouchEnd, 'onTouchStart': detect.touchScreen && _this4.onTouchStart, 'style': _this4.buttonStyle(button) }, children);
                    })
                  );
                },
              },
            ]),
            CircleOverlayButton
          );
        })(preact__WEBPACK_IMPORTED_MODULE_1__.Component);
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = CircleOverlayButton;

      /***/
    },

    /***/ 271: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1);
      /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var source, i = 1; i < arguments.length; i++)
                for (var key in ((source = arguments[i]), source))
                  Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw new TypeError('Cannot call a class as a function');
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          (descriptor = props[i]),
            (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _createClass(Constructor, protoProps, staticProps) {
        return (
          protoProps && _defineProperties(Constructor.prototype, protoProps),
          staticProps && _defineProperties(Constructor, staticProps),
          Constructor
        );
      }
      function _inherits(subClass, superClass) {
        if ('function' != typeof superClass && null !== superClass)
          throw new TypeError('Super expression must either be null or a function');
        (subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: { value: subClass, writable: !0, configurable: !0 },
        })),
          superClass && _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o, p) {
        return (
          (_setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              return (o.__proto__ = p), o;
            }),
          _setPrototypeOf(o, p)
        );
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var result,
            Super = _getPrototypeOf(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return _possibleConstructorReturn(this, result);
        };
      }
      function _possibleConstructorReturn(self, call) {
        return call && ('object' == typeof call || 'function' == typeof call)
          ? call
          : _assertThisInitialized(self);
      }
      function _assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
      }
      function _isNativeReflectConstruct() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }
      function _getPrototypeOf(o) {
        return (
          (_getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              }),
          _getPrototypeOf(o)
        );
      }
      var _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/obj'),
        merge = _W$lib.merge,
        _W$lib2 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib(
          'utilities/svg_boilerplate'
        ),
        standardSvgAttrs = _W$lib2.standardSvgAttrs,
        SmallPlayButton = /*#__PURE__*/ (function (_Component) {
          function SmallPlayButton() {
            return _classCallCheck(this, SmallPlayButton), _super.apply(this, arguments);
          }
          _inherits(SmallPlayButton, _Component);
          var _super = _createSuper(SmallPlayButton);
          return (
            _createClass(SmallPlayButton, [
              {
                key: 'shouldComponentUpdate',
                value: function shouldComponentUpdate(nextProps) {
                  return this.props.isPlaying !== nextProps.isPlaying;
                },
              },
              {
                key: 'render',
                value: function render() {
                  return (0, preact__WEBPACK_IMPORTED_MODULE_1__.h)(
                    'div',
                    { style: this.rootStyle() },
                    (0, preact__WEBPACK_IMPORTED_MODULE_1__.h)(
                      'div',
                      {
                        style: {
                          display: this.props.isPlaying ? 'block' : 'none',
                          height: '100%',
                          width: '100%',
                        },
                      },
                      this.renderPauseIcon()
                    ),
                    (0, preact__WEBPACK_IMPORTED_MODULE_1__.h)(
                      'div',
                      {
                        style: {
                          display: this.props.isPlaying ? 'none' : 'block',
                          height: '100%',
                          width: '100%',
                        },
                      },
                      this.renderPlayIcon()
                    )
                  );
                },
              },
              {
                key: 'renderPlayIcon',
                value: function renderPlayIcon() {
                  var noPadding = this.props.noPadding,
                    xPad = noPadding ? 0 : 20,
                    yPad = noPadding ? 0 : 9,
                    width = 11.556,
                    height = 15,
                    points = ''
                      .concat(xPad + width, ',')
                      .concat(yPad + 15 / 2, ' ')
                      .concat(xPad, ',')
                      .concat(yPad + 15, ' ')
                      .concat(xPad, ',')
                      .concat(yPad);
                  return (0, preact__WEBPACK_IMPORTED_MODULE_1__.h)(
                    'svg',
                    _extends({}, this.svgAttrs(width + 2 * xPad, 15 + 2 * yPad), {
                      class: 'w-css-reset w-css-reset-tree',
                    }),
                    (0, preact__WEBPACK_IMPORTED_MODULE_1__.h)('polygon', { points: points })
                  );
                },
              },
              {
                key: 'renderPauseIcon',
                value: function renderPauseIcon() {
                  var noPadding = this.props.noPadding,
                    xPad = noPadding ? 0 : 20,
                    yPad = noPadding ? 0 : 11.3,
                    width = 10,
                    height = 12;
                  return (0, preact__WEBPACK_IMPORTED_MODULE_1__.h)(
                    'svg',
                    _extends({}, this.svgAttrs(10 + 2 * xPad, 12 + 2 * yPad), {
                      class: 'w-css-reset w-css-reset-tree',
                    }),
                    (0, preact__WEBPACK_IMPORTED_MODULE_1__.h)(
                      'g',
                      null,
                      (0, preact__WEBPACK_IMPORTED_MODULE_1__.h)('rect', {
                        x: xPad,
                        y: yPad,
                        width: '3.5',
                        height: 12,
                      }),
                      (0, preact__WEBPACK_IMPORTED_MODULE_1__.h)('rect', {
                        x: xPad + 6.5,
                        y: yPad,
                        width: '3.5',
                        height: 12,
                      })
                    )
                  );
                },
              },
              {
                key: 'rootStyle',
                value: function rootStyle() {
                  return { height: '100%', width: '100%' };
                },
              },
              {
                key: 'svgAttrs',
                value: function svgAttrs() {
                  var noPadding = this.props.noPadding,
                    isPlaying = this.props.isPlaying,
                    xPad = noPadding ? 0 : 20,
                    yPad = noPadding ? 0 : isPlaying ? 11.3 : 9,
                    height = isPlaying ? 12 : 16,
                    width = isPlaying ? 10 : 11.556,
                    result = standardSvgAttrs(width + 2 * xPad, height + 2 * yPad);
                  return merge(result.style, this.props.svgStyle), result;
                },
              },
            ]),
            SmallPlayButton
          );
        })(preact__WEBPACK_IMPORTED_MODULE_1__.Component);
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = SmallPlayButton;

      /***/
    },

    /***/ 441: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1);
      /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var source, i = 1; i < arguments.length; i++)
                for (var key in ((source = arguments[i]), source))
                  Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw new TypeError('Cannot call a class as a function');
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          (descriptor = props[i]),
            (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _createClass(Constructor, protoProps, staticProps) {
        return (
          protoProps && _defineProperties(Constructor.prototype, protoProps),
          staticProps && _defineProperties(Constructor, staticProps),
          Constructor
        );
      }
      function _inherits(subClass, superClass) {
        if ('function' != typeof superClass && null !== superClass)
          throw new TypeError('Super expression must either be null or a function');
        (subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: { value: subClass, writable: !0, configurable: !0 },
        })),
          superClass && _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o, p) {
        return (
          (_setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              return (o.__proto__ = p), o;
            }),
          _setPrototypeOf(o, p)
        );
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var result,
            Super = _getPrototypeOf(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return _possibleConstructorReturn(this, result);
        };
      }
      function _possibleConstructorReturn(self, call) {
        return call && ('object' == typeof call || 'function' == typeof call)
          ? call
          : _assertThisInitialized(self);
      }
      function _assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
      }
      function _isNativeReflectConstruct() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }
      function _getPrototypeOf(o) {
        return (
          (_getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              }),
          _getPrototypeOf(o)
        );
      }
      var _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('player/lib/elem'),
        addInlineCss = _W$lib.addInlineCss,
        _W$lib2 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/seqid'),
        seqId = _W$lib2.seqId,
        _W$lib3 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib(
          'utilities/svg_boilerplate'
        ),
        standardSvgAttrs = _W$lib3.standardSvgAttrs,
        LoadingSwoop = /*#__PURE__*/ (function (_Component) {
          function LoadingSwoop(props) {
            var _this;
            return (
              _classCallCheck(this, LoadingSwoop),
              (_this = _super.call(this, props)),
              (_this.svgId = seqId('w-loading-swoop-')),
              (_this.gradientId = seqId('w-loading-swoop-grad-')),
              (_this.animName = seqId('w-loading-swoop-')),
              _this
            );
          }
          _inherits(LoadingSwoop, _Component);
          var _super = _createSuper(LoadingSwoop);
          return (
            _createClass(LoadingSwoop, [
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  addInlineCss(
                    this.svgEl,
                    '\n@keyframes '
                      .concat(
                        this.animName,
                        ' {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n#'
                      )
                      .concat(this.svgId, ' path {\n  animation: ')
                      .concat(
                        this.animName,
                        ' 1s cubic-bezier(0.495, 0.155, 0.580, 0.845) infinite;\n  transform-origin: center;\n}\n    '
                      )
                  );
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function shouldComponentUpdate() {
                  return !1;
                },
              },
              {
                key: 'render',
                value: function render() {
                  var _this2 = this;
                  return (0, preact__WEBPACK_IMPORTED_MODULE_1__.h)(
                    'svg',
                    _extends({}, standardSvgAttrs(120, 120, { position: 'absolute' }), {
                      id: this.svgId,
                    }),
                    (0, preact__WEBPACK_IMPORTED_MODULE_1__.h)(
                      'linearGradient',
                      {
                        gradientUnits: 'userSpaceOnUse',
                        id: this.gradientId,
                        ref: function ref(el) {
                          _this2.svgEl = el;
                        },
                        x1: '31.5',
                        x2: '31.5',
                        y1: '0',
                        y2: '120',
                      },
                      (0, preact__WEBPACK_IMPORTED_MODULE_1__.h)('stop', {
                        offset: '0',
                        style: { stopColor: '#FFFFFF' },
                      }),
                      (0, preact__WEBPACK_IMPORTED_MODULE_1__.h)('stop', {
                        offset: '0.7279',
                        style: { stopColor: '#FFFFFF', stopOpacity: 0 },
                      })
                    ),
                    (0, preact__WEBPACK_IMPORTED_MODULE_1__.h)('path', {
                      d: 'M60,0C26.9,0,0,26.9,0,60s26.9,60,60,60v-6C30.2,114,6,89.8,6,60S30.2,6,60,6c1.7,0,3-1.3,3-3S61.7,0,60,0z',
                      style: { fill: 'url(#'.concat(this.gradientId, ')'), opacity: 0.8 },
                    })
                  );
                },
              },
            ]),
            LoadingSwoop
          );
        })(preact__WEBPACK_IMPORTED_MODULE_1__.Component);
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = LoadingSwoop;

      /***/
    },

    /***/ 439: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1);
      /* harmony import */ var _shared_controls_Control_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(140);
      /* harmony import */ var _shared_ui_components_CircleOverlayButton_jsx__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(440);
      /* harmony import */ var _LoadingSwoop_jsx__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(441);
      /* harmony import */ var _shared_ui_components_SmallPlayButton_jsx__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(271);
      /* harmony import */ var player_lib_control_lifecycle_js__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(59);
      /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw new TypeError('Cannot call a class as a function');
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          (descriptor = props[i]),
            (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _createClass(Constructor, protoProps, staticProps) {
        return (
          protoProps && _defineProperties(Constructor.prototype, protoProps),
          staticProps && _defineProperties(Constructor, staticProps),
          Constructor
        );
      }
      function _inherits(subClass, superClass) {
        if ('function' != typeof superClass && null !== superClass)
          throw new TypeError('Super expression must either be null or a function');
        (subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: { value: subClass, writable: !0, configurable: !0 },
        })),
          superClass && _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o, p) {
        return (
          (_setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              return (o.__proto__ = p), o;
            }),
          _setPrototypeOf(o, p)
        );
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var result,
            Super = _getPrototypeOf(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return _possibleConstructorReturn(this, result);
        };
      }
      function _possibleConstructorReturn(self, call) {
        return call && ('object' == typeof call || 'function' == typeof call)
          ? call
          : _assertThisInitialized(self);
      }
      function _assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
      }
      function _isNativeReflectConstruct() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }
      function _getPrototypeOf(o) {
        return (
          (_getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              }),
          _getPrototypeOf(o)
        );
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      var _W$lib =
          wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('player/lib/fit-control'),
        controlMultiplierBasedOnVideo = _W$lib.controlMultiplierBasedOnVideo,
        _W$lib2 =
          wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('player/translations'),
        getTranslation = _W$lib2.getTranslation,
        _W$lib3 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/detect'),
        cachedDetect = _W$lib3.cachedDetect,
        detect = cachedDetect(),
        PlayPauseLoadingCircleControl = /*#__PURE__*/ (function (_Control) {
          function PlayPauseLoadingCircleControl(video) {
            var _this;
            return (
              _classCallCheck(this, PlayPauseLoadingCircleControl),
              (_this = _super.call(this, video)),
              _defineProperty(_assertThisInitialized(_this), 'onClick', function () {
                'playing' === _this.video.state() ? _this.video.pause() : _this.video.play();
              }),
              _defineProperty(_assertThisInitialized(_this), 'renderButton', function () {
                var isPlaying = 'playing' === _this.video.state(),
                  scale = _this.scale(),
                  iconMult = 1.05,
                  spbWrapperStyle = {
                    boxSizing: 'border-box',
                    height: '100%',
                    paddingBottom: ''.concat(45 * scale * iconMult, 'px'),
                    paddingLeft: ''.concat((isPlaying ? 51 : 55) * scale * iconMult, 'px'),
                    paddingRight: ''.concat((isPlaying ? 51 : 45) * scale * iconMult, 'px'),
                    paddingTop: ''.concat(45 * scale * iconMult, 'px'),
                  };
                _this.isLoading && _this.video.setAriaLiveText('The video is loading...'),
                  (0, preact__WEBPACK_IMPORTED_MODULE_6__.render)(
                    (0, preact__WEBPACK_IMPORTED_MODULE_6__.h)(
                      _shared_ui_components_CircleOverlayButton_jsx__WEBPACK_IMPORTED_MODULE_2__.default,
                      {
                        ariaLabel: isPlaying
                          ? _this.translate('TITLE_WHEN_PLAYING')
                          : _this.translate('TITLE_WHEN_NOT_PLAYING'),
                        isVisible: _this.isVisible(),
                        left: '50%',
                        onClick: _this.onClick,
                        scale: scale,
                        top: '50%',
                      },
                      _this.isLoading &&
                        (0, preact__WEBPACK_IMPORTED_MODULE_6__.h)(
                          _LoadingSwoop_jsx__WEBPACK_IMPORTED_MODULE_3__.default,
                          null
                        ),
                      (0, preact__WEBPACK_IMPORTED_MODULE_6__.h)(
                        'div',
                        { style: spbWrapperStyle },
                        (0, preact__WEBPACK_IMPORTED_MODULE_6__.h)(
                          _shared_ui_components_SmallPlayButton_jsx__WEBPACK_IMPORTED_MODULE_4__.default,
                          { isPlaying: isPlaying, noPadding: !0 }
                        )
                      )
                    ),
                    _this.rootElem
                  ),
                  (_this.reactMounts = [_this.rootElem]);
              }),
              (_this.isLoading = !1),
              (_this.hasMounted = !1),
              _this
            );
          }
          _inherits(PlayPauseLoadingCircleControl, _Control);
          var _super = _createSuper(PlayPauseLoadingCircleControl);
          return (
            _createClass(PlayPauseLoadingCircleControl, [
              {
                key: 'destroy',
                value: function destroy() {
                  (0, player_lib_control_lifecycle_js__WEBPACK_IMPORTED_MODULE_5__.destroyControl)(
                    this
                  );
                },
              },
              {
                key: 'isVisible',
                value: function isVisible() {
                  var controlsAreVisible = this.props.controlsAreVisible,
                    video = this.video,
                    vidState = video.state(),
                    isVideoBeforePlay = 'beforeplay' === vidState,
                    isVideoResetToThumbnail =
                      'ended' === vidState && 'reset' === video.embedOptions().endVideoBehavior,
                    anyDialogOpen = video._impl.ui.anyDialogOpen();
                  return (
                    this.isLoading ||
                    (detect.touchScreen &&
                      controlsAreVisible &&
                      !anyDialogOpen &&
                      !isVideoBeforePlay &&
                      !isVideoResetToThumbnail)
                  );
                },
              },
              {
                key: 'mount',
                value: function mount(rootElem) {
                  (this.rootElem = rootElem),
                    this.setupBindings(),
                    (this.hasMounted = !0),
                    this.renderButton();
                },
              },
              {
                key: 'onControlPropsUpdated',
                value: function onControlPropsUpdated(prevProps) {
                  var _this2 = this,
                    changeProps = ['anyDialogOpen', 'controlsAreVisible', 'videoWidth'],
                    anyChanges = changeProps.some(function (n) {
                      return _this2.props[n] !== prevProps[n];
                    });
                  anyChanges && this.renderButton();
                },
              },
              {
                key: 'setupBindings',
                value: function setupBindings() {
                  var _this3 = this,
                    prevDuration = -1;
                  this.hasMounted ||
                    this.unbinds.push(
                      this.video.on('play', this.renderButton),
                      this.video.on('pause', this.renderButton),
                      this.video.on('end', this.renderButton),
                      this.video.on('waiting', function (duration) {
                        !_this3.isLoading &&
                          2 > prevDuration &&
                          2 <= duration &&
                          ((_this3.isLoading = !0), _this3.renderButton()),
                          (prevDuration = duration);
                      }),
                      this.video.on('done-waiting', function () {
                        (_this3.isLoading = !1), _this3.renderButton(), (prevDuration = -1);
                      }), // failsafe, in case we somehow miss the done-waiting event, let's remove
                      // the indicator on timechange.
                      this.video.on('timechange', function () {
                        (_this3.isLoading = !1), _this3.renderButton(), (prevDuration = -1);
                      })
                    );
                },
              },
              {
                key: 'scale',
                value: function scale() {
                  return Math.min(
                    1.3,
                    Math.max(0.3, controlMultiplierBasedOnVideo(this.video, [640, 960]))
                  );
                },
              },
              {
                key: 'translate',
                value: function translate(key) {
                  return getTranslation(this.props.playerLanguage.code, 'PLAY_BUTTON_'.concat(key));
                },
              },
            ]),
            PlayPauseLoadingCircleControl
          );
        })(_shared_controls_Control_js__WEBPACK_IMPORTED_MODULE_1__.default);
      (PlayPauseLoadingCircleControl.shouldMount = function () {
        return !0;
      }),
        (PlayPauseLoadingCircleControl.handle = 'playPauseLoading'),
        (PlayPauseLoadingCircleControl.type = 'above-control-bar'),
        wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.defineControl(
          PlayPauseLoadingCircleControl
        );
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = PlayPauseLoadingCircleControl;

      /***/
    },

    /***/ 60: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ defineControl: () => /* binding */ defineControl,
        /* harmony export */ getControlDefinitions: () => /* binding */ getControlDefinitions,
        /* harmony export */
      });
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1);
      null == wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default._controlDefinitions &&
        (wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default._controlDefinitions = {});
      var defineControl = function defineControl(klass) {
        if (null == klass.handle)
          return void console.error('Please specify a handle property for control', klass);
        var existingClass =
          wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default._controlDefinitions[
            klass.handle
          ];
        null != existingClass ||
          ((wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default._controlDefinitions[
            klass.handle
          ] = klass),
          wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.trigger &&
            wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.trigger(
              'controldefined',
              klass
            ));
      };
      var getControlDefinitions = function getControlDefinitions() {
        return wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default._controlDefinitions || {};
      };
      wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.defineControl = defineControl;

      /***/
    },

    /***/ 59: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ callUnbinds: () => /* binding */ callUnbinds,
        /* harmony export */ destroyControl: () => /* binding */ destroyControl,
        /* harmony export */ maybeDestroyControls: () => /* binding */ maybeDestroyControls,
        /* harmony export */ maybeInitializeControls: () => /* binding */ maybeInitializeControls,
        /* harmony export */ mountControls: () => /* binding */ mountControls,
        /* harmony export */ setControlProps: () => /* binding */ setControlProps,
        /* harmony export */ removeRootElem: () => /* binding */ removeRootElem,
        /* harmony export */ runOnControlPropsUpdated: () => /* binding */ runOnControlPropsUpdated,
        /* harmony export */ getSortedControlsByType: () => /* binding */ getSortedControlsByType,
        /* harmony export */ pickControlDefinitionsWithTypes: () =>
          /* binding */ pickControlDefinitionsWithTypes,
        /* harmony export */ unmountReactMounts: () => /* binding */ unmountReactMounts,
        /* harmony export */ unsetObjectProperties: () => /* binding */ unsetObjectProperties,
        /* harmony export */
      });
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1);
      /* harmony import */ var promiscuous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
      /* harmony import */ var promiscuous__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(promiscuous__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */ var utilities_assign_js__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(18);
      /* harmony import */ var player_control_definitions_js__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(60);
      /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
      var _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/detect'),
        cachedDetect = _W$lib.cachedDetect,
        _W$lib2 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib(
          'player/lib/timeout-utils'
        ),
        doTimeout = _W$lib2.doTimeout,
        clearTimeouts = _W$lib2.clearTimeouts,
        _W$lib3 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('player/lib/elem'),
        elemBind = _W$lib3.elemBind,
        elemRemove = _W$lib3.elemRemove,
        elemUnbind = _W$lib3.elemUnbind;
      var _W$lib4 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/seqid'),
        seqId = _W$lib4.seqId,
        detect = cachedDetect(); // Call functions that we've pushed into control.unbinds.
      var callUnbinds = function callUnbinds(control) {
        control.unbinds instanceof Array &&
          (control.unbinds.map(function (unbind) {
            try {
              'function' == typeof unbind && unbind();
            } catch (e) {
              setTimeout(function () {
                throw e;
              }, 1);
            }
          }),
          (control.unbinds = null));
      };
      var destroyControl = function destroyControl(control) {
        (control._destroyed = !0),
          callUnbinds(control),
          removeRootElem(control),
          unmountReactMounts(control),
          unsetObjectProperties(control);
      };
      var maybeDestroyControls = function maybeDestroyControls(_ref) {
        var controls = _ref.controls,
          isControlDisabled = _ref.isControlDisabled,
          shouldMount = _ref.shouldMount,
          destroyedControls = [];
        for (var handle in controls) {
          var control = controls[handle];
          if (isControlDisabled(handle) || !shouldMount(control.constructor)) {
            if (control.destroy)
              try {
                control.destroy();
              } catch (e) {
                setTimeout(function () {
                  throw e;
                }, 1);
              }
            (control.__destroyed = !0),
              delete controls[control.constructor.handle],
              destroyedControls.push(control);
          }
        }
        return destroyedControls;
      };
      var maybeInitializeControls = function maybeInitializeControls(_ref2) {
        var controlDefinitions = _ref2.controlDefinitions,
          controls = _ref2.controls,
          isControlDisabled = _ref2.isControlDisabled,
          initControl = _ref2.initControl,
          onMount = _ref2.onMount,
          shouldMount = _ref2.shouldMount,
          reevaluateShouldMount = _ref2.reevaluateShouldMount,
          newControls = [],
          existingControls = [],
          _loop = function _loop(handle) {
            var ControlClass = controlDefinitions[handle],
              hasBeenInitialized = null != controls[handle],
              shouldDoMount = !isControlDisabled(handle) && shouldMount(ControlClass);
            if ((reevaluateShouldMount(ControlClass), shouldDoMount && hasBeenInitialized))
              return existingControls.push(controls[handle]), 'continue';
            if (!hasBeenInitialized && shouldDoMount)
              try {
                var control = (controls[handle] = initControl(ControlClass));
                (control.mounted = new (promiscuous__WEBPACK_IMPORTED_MODULE_1___default())(
                  function (resolve) {
                    control.__didMount = function () {
                      (control.mounted.isResolved = !0), onMount(handle), resolve();
                    };
                  }
                )),
                  newControls.push(control);
              } catch (e) {
                setTimeout(function () {
                  throw e;
                }, 1);
              }
          };
        for (var handle in controlDefinitions) {
          var _ret = _loop(handle);
          'continue' === _ret;
        }
        return [newControls, existingControls];
      };
      var mountControl = function mountControl(control, mountFn) {
          try {
            var handle = control.constructor.handle,
              mountResult = mountFn();
            return (
              mountResult && mountResult.then && mountResult.catch
                ? ((mountResult.handle = handle),
                  mountResult.then(function () {
                    control.__didMount();
                  }))
                : control.__didMount(),
              promiscuous__WEBPACK_IMPORTED_MODULE_1___default().resolve(mountResult)
            );
          } catch (e) {
            return (
              setTimeout(function () {
                throw e;
              }, 0),
              promiscuous__WEBPACK_IMPORTED_MODULE_1___default().resolve()
            );
          }
        },
        renderHourglassLoader = function renderHourglassLoader(control, promise, options) {
          return new (promiscuous__WEBPACK_IMPORTED_MODULE_1___default())(function (resolve) {
            // we wanna wait 300ms before showing the loading indication
            var timeoutKey = ''.concat(control.video.uuid, '.loading_indicator.').concat(seqId());
            doTimeout(
              timeoutKey,
              function () {
                control.video.controls.loadingHourglass.show(options),
                  detect.touchScreen
                    ? elemBind(document, 'touchstart', function () {
                        try {
                          control.video.controls.loadingHourglass.hide();
                        } catch (e) {
                          setTimeout(function () {
                            throw e;
                          }, 0);
                        }
                        return resolve(), elemUnbind;
                      })
                    : elemBind(document, 'mousedown', function () {
                        try {
                          control.video.controls.loadingHourglass.hide();
                        } catch (e) {
                          setTimeout(function () {
                            throw e;
                          }, 0);
                        }
                        return resolve(), elemUnbind;
                      });
              },
              300
            ),
              promise.then(function () {
                clearTimeouts(timeoutKey),
                  control.video.controls.loadingHourglass.hide(),
                  resolve();
              });
          });
        };
      var mountControls = function mountControls(controls, mountRefs) {
        return promiscuous__WEBPACK_IMPORTED_MODULE_1___default().all(
          controls.map(function (control) {
            var handle = control.constructor.handle;
            control.loading ||
              (control.loading = function (promise) {
                var options = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
                return renderHourglassLoader(control, promise, options);
              });
            var mountPoint = mountRefs[handle];
            return mountControl(control, function () {
              return control.mount(mountPoint);
            });
          })
        );
      };
      var setControlProps = function setControlProps(controls, propsByType) {
        for (var handle in controls) {
          var control = controls[handle];
          (control.__prevProps = control.props || {}),
            (control.props = (0, utilities_assign_js__WEBPACK_IMPORTED_MODULE_2__.default)(
              {},
              propsByType[control.constructor.type]
            ));
        }
      };
      var removeRootElem = function removeRootElem(control) {
        control.rootElem && elemRemove(Array.prototype.slice.call(control.rootElem.childNodes));
      };
      var renderNothingForReactMount = function renderNothingForReactMount(reactMount) {
        var containerElem = reactMount[0],
          renderedElem = reactMount[1];
        containerElem &&
          renderedElem &&
          (0, preact__WEBPACK_IMPORTED_MODULE_4__.render)(
            (0, preact__WEBPACK_IMPORTED_MODULE_4__.h)('nothing', null),
            containerElem
          );
      };
      var runOnControlPropsUpdated = function runOnControlPropsUpdated(controls) {
        controls.forEach(function (control) {
          if ('function' == typeof control.onControlPropsUpdated)
            try {
              control.onControlPropsUpdated(control.__prevProps || {});
            } catch (e) {
              setTimeout(function () {
                throw e;
              }, 0);
            }
          control.__prevProps = null;
        });
      };
      var startsWithDoubleUnderscore = function startsWithDoubleUnderscore(str) {
        return '_' === str[0] && '_' === str[1];
      };
      var getSortedControlsByType = function getSortedControlsByType(controls) {
        var result = {}; // bucket
        for (var handle in controls) {
          var control = controls[handle],
            type = control.constructor.type;
          null == result[type] && (result[type] = []), result[type].push(control);
        } // sort each bucket
        for (var _type in result)
          result[_type].sort(function (control1, control2) {
            return (control1.constructor.sortValue || 0) - (control2.constructor.sortValue || 0);
          });
        return result;
      };
      var pickControlDefinitionsWithTypes = function pickControlDefinitionsWithTypes(types) {
        var globalControlDefinitions = (0,
          player_control_definitions_js__WEBPACK_IMPORTED_MODULE_3__.getControlDefinitions)(),
          result = {};
        for (var k in globalControlDefinitions) {
          var controlDef = globalControlDefinitions[k];
          0 <= types.indexOf(controlDef.type) && (result[k] = controlDef);
        }
        return result;
      };
      var unmountReactMounts = function unmountReactMounts(control) {
        // Controls that render to react can save the relevant mount points like:
        //
        // control.reactMounts = [control.rootElem, control.thumbnailElem]
        //
        // or in the case where there are multiple mounts (like button and dialog)
        //
        // control.reactMounts.button = [control.buttonRoot, control.buttonElem]
        // control.reactMounts.dialog = [control.dialogRoot, control.dialogElem]
        //
        // And control code will automatically unmount on destroy to clean up any
        // dangling react DOM nodes.
        var reactMounts = control.reactMounts;
        if (reactMounts)
          if (reactMounts instanceof Array) renderNothingForReactMount(reactMounts);
          else
            for (var mountName in reactMounts)
              reactMounts.hasOwnProperty(mountName) &&
                reactMounts[mountName] &&
                renderNothingForReactMount(reactMounts[mountName]);
      };
      var unsetObjectProperties = function unsetObjectProperties(control) {
        // Null out any object properties that may cause a reference.
        for (var k in control)
          control.hasOwnProperty(k) &&
            !startsWithDoubleUnderscore(k) &&
            'mounted' !== k &&
            (control[k] = null); // Set control again because we would've just unset it above.
        (control.__prevProps = null), (control._destroyed = !0);
      };

      /***/
    },

    /***/ 18: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      // You wouldn't believe it, but IE11 does not support Object.assign(), so this
      // is our non-polyfill replacement.
      var assign = function assign(obj1) {
          for (
            var _len = arguments.length, objs = Array(1 < _len ? _len - 1 : 0), _key = 1;
            _key < _len;
            _key++
          )
            objs[_key - 1] = arguments[_key];
          if (Object.assign) return Object.assign.apply(Object, [obj1].concat(objs));
          for (var i = 0; i < objs.length; i++) assignOne(obj1, objs[i]);
          return obj1;
        },
        assignOne = function assignOne(obj1, obj2) {
          for (var k in obj2) obj2.hasOwnProperty(k) && (obj1[k] = obj2[k]);
          return obj1;
        };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = assign;

      /***/
    },

    /***/ 2: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* global globalThis */ var root;
      try {
        (root = self),
          root.self !== root &&
            typeof root.self !== void 0 &&
            'undefined' != typeof window &&
            (root = window);
      } catch (err) {
        root = 'undefined' == typeof globalThis ? window : globalThis;
      }
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = root;

      /***/
    },

    /***/ 1: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var utilities_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
      null == utilities_root__WEBPACK_IMPORTED_MODULE_0__.default.Wistia &&
        (utilities_root__WEBPACK_IMPORTED_MODULE_0__.default.Wistia = {});
      var W = utilities_root__WEBPACK_IMPORTED_MODULE_0__.default.Wistia;
      null == W._initializers && (W._initializers = {}),
        null == W._destructors && (W._destructors = {}),
        null == W.mixin &&
          (W.mixin = function (klass, obj) {
            for (var k in obj) obj.hasOwnProperty(k) && (klass[k] = obj[k]);
          });
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        utilities_root__WEBPACK_IMPORTED_MODULE_0__.default.Wistia;

      /***/
    },

    /***/ 5: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ render: () => /* binding */ S,
        /* harmony export */ hydrate: () => /* binding */ q,
        /* harmony export */ createElement: () => /* binding */ v,
        /* harmony export */ h: () => /* binding */ v,
        /* harmony export */ Fragment: () => /* binding */ d,
        /* harmony export */ createRef: () => /* binding */ p,
        /* harmony export */ isValidElement: () => /* binding */ i,
        /* harmony export */ Component: () => /* binding */ _,
        /* harmony export */ cloneElement: () => /* binding */ B,
        /* harmony export */ createContext: () => /* binding */ D,
        /* harmony export */ toChildArray: () => /* binding */ A,
        /* harmony export */ options: () => /* binding */ l,
        /* harmony export */
      });
      /*** IMPORTS FROM imports-loader ***/ var n,
        l,
        u,
        i,
        t,
        r,
        o,
        f,
        define = void 0,
        e = {},
        c = [],
        s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      function a(n, l) {
        for (var u in l) n[u] = l[u];
        return n;
      }
      function h(n) {
        var l = n.parentNode;
        l && l.removeChild(n);
      }
      function v(l, u, i) {
        var t,
          r,
          o,
          f = {};
        for (o in u) 'key' == o ? (t = u[o]) : 'ref' == o ? (r = u[o]) : (f[o] = u[o]);
        if (
          (2 < arguments.length && (f.children = 3 < arguments.length ? n.call(arguments, 2) : i),
          'function' == typeof l && null != l.defaultProps)
        )
          for (o in l.defaultProps) void 0 === f[o] && (f[o] = l.defaultProps[o]);
        return y(l, f, t, r, null);
      }
      function y(n, i, t, r, o) {
        var f = {
          type: n,
          props: i,
          key: t,
          ref: r,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          __h: null,
          constructor: void 0,
          __v: null == o ? ++u : o,
        };
        return null == o && null != l.vnode && l.vnode(f), f;
      }
      function p() {
        return { current: null };
      }
      function d(n) {
        return n.children;
      }
      function _(n, l) {
        (this.props = n), (this.context = l);
      }
      function k(n, l) {
        if (null == l) return n.__ ? k(n.__, n.__.__k.indexOf(n) + 1) : null;
        for (var u; l < n.__k.length; l++)
          if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
        return 'function' == typeof n.type ? k(n) : null;
      }
      function b(n) {
        var l, u;
        if (null != (n = n.__) && null != n.__c) {
          for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
            if (null != (u = n.__k[l]) && null != u.__e) {
              n.__e = n.__c.base = u.__e;
              break;
            }
          return b(n);
        }
      }
      function m(n) {
        ((!n.__d && (n.__d = !0) && t.push(n) && !g.__r++) || o !== l.debounceRendering) &&
          ((o = l.debounceRendering) || r)(g);
      }
      function g() {
        for (var n; (g.__r = t.length); )
          (n = t.sort(function (n, l) {
            return n.__v.__b - l.__v.__b;
          })),
            (t = []),
            n.some(function (n) {
              var l, u, i, t, r, o;
              n.__d &&
                ((r = (t = (l = n).__v).__e),
                (o = l.__P) &&
                  ((u = []),
                  ((i = a({}, t)).__v = t.__v + 1),
                  j(
                    o,
                    t,
                    i,
                    l.__n,
                    void 0 !== o.ownerSVGElement,
                    null == t.__h ? null : [r],
                    u,
                    null == r ? k(t) : r,
                    t.__h
                  ),
                  z(u, t),
                  t.__e != r && b(t)));
            });
      }
      function w(n, l, u, i, t, r, o, f, s, a) {
        var h,
          v,
          p,
          _,
          b,
          m,
          g,
          w = (i && i.__k) || c,
          A = w.length;
        for (u.__k = [], h = 0; h < l.length; h++)
          if (
            null !=
            (_ = u.__k[h] =
              null == (_ = l[h]) || 'boolean' == typeof _
                ? null
                : 'string' == typeof _ || 'number' == typeof _ || 'bigint' == typeof _
                ? y(null, _, null, null, _)
                : Array.isArray(_)
                ? y(d, { children: _ }, null, null, null)
                : 0 < _.__b
                ? y(_.type, _.props, _.key, null, _.__v)
                : _)
          ) {
            if (
              ((_.__ = u),
              (_.__b = u.__b + 1),
              null === (p = w[h]) || (p && _.key == p.key && _.type === p.type))
            )
              w[h] = void 0;
            else
              for (v = 0; v < A; v++) {
                if ((p = w[v]) && _.key == p.key && _.type === p.type) {
                  w[v] = void 0;
                  break;
                }
                p = null;
              }
            j(n, _, (p = p || e), t, r, o, f, s, a),
              (b = _.__e),
              (v = _.ref) &&
                p.ref != v &&
                (g || (g = []), p.ref && g.push(p.ref, null, _), g.push(v, _.__c || b, _)),
              null == b
                ? s && p.__e == s && s.parentNode != n && (s = k(p))
                : (null == m && (m = b),
                  'function' == typeof _.type && _.__k === p.__k
                    ? (_.__d = s = x(_, s, n))
                    : (s = P(n, _, p, w, b, s)),
                  'function' == typeof u.type && (u.__d = s));
          }
        for (u.__e = m, h = A; h--; )
          null != w[h] &&
            ('function' == typeof u.type &&
              null != w[h].__e &&
              w[h].__e == u.__d &&
              (u.__d = k(i, h + 1)),
            N(w[h], w[h]));
        if (g) for (h = 0; h < g.length; h++) M(g[h], g[++h], g[++h]);
      }
      function x(n, l, u) {
        for (var i, t = n.__k, r = 0; t && r < t.length; r++)
          (i = t[r]) &&
            ((i.__ = n), (l = 'function' == typeof i.type ? x(i, l, u) : P(u, i, i, t, i.__e, l)));
        return l;
      }
      function A(n, l) {
        return (
          (l = l || []),
          null == n ||
            'boolean' == typeof n ||
            (Array.isArray(n)
              ? n.some(function (n) {
                  A(n, l);
                })
              : l.push(n)),
          l
        );
      }
      function P(n, l, u, i, t, r) {
        var o, f, e;
        if (void 0 !== l.__d) (o = l.__d), (l.__d = void 0);
        else if (null == u || t != r || null == t.parentNode)
          n: if (null == r || r.parentNode !== n) n.appendChild(t), (o = null);
          else {
            for (f = r, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;
            n.insertBefore(t, r), (o = r);
          }
        return void 0 === o ? t.nextSibling : o;
      }
      function C(n, l, u, i, t) {
        var r;
        for (r in u) 'children' === r || 'key' === r || r in l || H(n, r, null, u[r], i);
        for (r in l)
          (t && 'function' != typeof l[r]) ||
            'children' === r ||
            'key' === r ||
            'value' === r ||
            'checked' === r ||
            u[r] === l[r] ||
            H(n, r, l[r], u[r], i);
      }
      function $(n, l, u) {
        '-' === l[0]
          ? n.setProperty(l, u)
          : (n[l] = null == u ? '' : 'number' != typeof u || s.test(l) ? u : u + 'px');
      }
      function H(n, l, u, i, t) {
        var r;
        n: if ('style' === l) {
          if ('string' == typeof u) n.style.cssText = u;
          else {
            if (('string' == typeof i && (n.style.cssText = i = ''), i))
              for (l in i) (u && l in u) || $(n.style, l, '');
            if (u) for (l in u) (i && u[l] === i[l]) || $(n.style, l, u[l]);
          }
        } else if ('o' === l[0] && 'n' === l[1])
          (r = l !== (l = l.replace(/Capture$/, ''))),
            (l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2)),
            n.l || (n.l = {}),
            (n.l[l + r] = u),
            u ? i || n.addEventListener(l, r ? T : I, r) : n.removeEventListener(l, r ? T : I, r);
        else if ('dangerouslySetInnerHTML' !== l) {
          if (t) l = l.replace(/xlink[H:h]/, 'h').replace(/sName$/, 's');
          else if (
            'href' !== l &&
            'list' !== l &&
            'form' !== l &&
            'tabIndex' !== l &&
            'download' !== l &&
            l in n
          )
            try {
              n[l] = null == u ? '' : u;
              break n;
            } catch (n) {}
          'function' == typeof u ||
            (null != u && (!1 !== u || ('a' === l[0] && 'r' === l[1]))
              ? n.setAttribute(l, u)
              : n.removeAttribute(l));
        }
      }
      function I(n) {
        this.l[n.type + !1](l.event ? l.event(n) : n);
      }
      function T(n) {
        this.l[n.type + !0](l.event ? l.event(n) : n);
      }
      function j(n, u, i, t, r, o, f, e, c) {
        var s,
          h,
          v,
          y,
          p,
          k,
          b,
          m,
          g,
          x,
          A,
          P = u.type;
        if (void 0 !== u.constructor) return null;
        null != i.__h && ((c = i.__h), (e = u.__e = i.__e), (u.__h = null), (o = [e])),
          (s = l.__b) && s(u);
        try {
          n: if ('function' == typeof P) {
            if (
              ((m = u.props),
              (g = (s = P.contextType) && t[s.__c]),
              (x = s ? (g ? g.props.value : s.__) : t),
              i.__c
                ? (b = (h = u.__c = i.__c).__ = h.__E)
                : ('prototype' in P && P.prototype.render
                    ? (u.__c = h = new P(m, x))
                    : ((u.__c = h = new _(m, x)), (h.constructor = P), (h.render = O)),
                  g && g.sub(h),
                  (h.props = m),
                  h.state || (h.state = {}),
                  (h.context = x),
                  (h.__n = t),
                  (v = h.__d = !0),
                  (h.__h = [])),
              null == h.__s && (h.__s = h.state),
              null != P.getDerivedStateFromProps &&
                (h.__s == h.state && (h.__s = a({}, h.__s)),
                a(h.__s, P.getDerivedStateFromProps(m, h.__s))),
              (y = h.props),
              (p = h.state),
              v)
            )
              null == P.getDerivedStateFromProps &&
                null != h.componentWillMount &&
                h.componentWillMount(),
                null != h.componentDidMount && h.__h.push(h.componentDidMount);
            else {
              if (
                (null == P.getDerivedStateFromProps &&
                  m !== y &&
                  null != h.componentWillReceiveProps &&
                  h.componentWillReceiveProps(m, x),
                (!h.__e &&
                  null != h.shouldComponentUpdate &&
                  !1 === h.shouldComponentUpdate(m, h.__s, x)) ||
                  u.__v === i.__v)
              ) {
                (h.props = m),
                  (h.state = h.__s),
                  u.__v !== i.__v && (h.__d = !1),
                  (h.__v = u),
                  (u.__e = i.__e),
                  (u.__k = i.__k),
                  u.__k.forEach(function (n) {
                    n && (n.__ = u);
                  }),
                  h.__h.length && f.push(h);
                break n;
              }
              null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, x),
                null != h.componentDidUpdate &&
                  h.__h.push(function () {
                    h.componentDidUpdate(y, p, k);
                  });
            }
            (h.context = x),
              (h.props = m),
              (h.state = h.__s),
              (s = l.__r) && s(u),
              (h.__d = !1),
              (h.__v = u),
              (h.__P = n),
              (s = h.render(h.props, h.state, h.context)),
              (h.state = h.__s),
              null != h.getChildContext && (t = a(a({}, t), h.getChildContext())),
              v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, p)),
              (A = null != s && s.type === d && null == s.key ? s.props.children : s),
              w(n, Array.isArray(A) ? A : [A], u, i, t, r, o, f, e, c),
              (h.base = u.__e),
              (u.__h = null),
              h.__h.length && f.push(h),
              b && (h.__E = h.__ = null),
              (h.__e = !1);
          } else
            null == o && u.__v === i.__v
              ? ((u.__k = i.__k), (u.__e = i.__e))
              : (u.__e = L(i.__e, u, i, t, r, o, f, c));
          (s = l.diffed) && s(u);
        } catch (n) {
          (u.__v = null),
            (c || null != o) && ((u.__e = e), (u.__h = !!c), (o[o.indexOf(e)] = null)),
            l.__e(n, u, i);
        }
      }
      function z(n, u) {
        l.__c && l.__c(u, n),
          n.some(function (u) {
            try {
              (n = u.__h),
                (u.__h = []),
                n.some(function (n) {
                  n.call(u);
                });
            } catch (n) {
              l.__e(n, u.__v);
            }
          });
      }
      function L(l, u, i, t, r, o, f, c) {
        var s,
          a,
          v,
          y = i.props,
          p = u.props,
          d = u.type,
          _ = 0;
        if (('svg' === d && (r = !0), null != o))
          for (; _ < o.length; _++)
            if ((s = o[_]) && (s === l || (d ? s.localName == d : 3 == s.nodeType))) {
              (l = s), (o[_] = null);
              break;
            }
        if (null == l) {
          if (null === d) return document.createTextNode(p);
          (l = r
            ? document.createElementNS('http://www.w3.org/2000/svg', d)
            : document.createElement(d, p.is && p)),
            (o = null),
            (c = !1);
        }
        if (null === d) y === p || (c && l.data === p) || (l.data = p);
        else {
          if (
            ((o = o && n.call(l.childNodes)),
            (a = (y = i.props || e).dangerouslySetInnerHTML),
            (v = p.dangerouslySetInnerHTML),
            !c)
          ) {
            if (null != o)
              for (y = {}, _ = 0; _ < l.attributes.length; _++)
                y[l.attributes[_].name] = l.attributes[_].value;
            (v || a) &&
              ((v && ((a && v.__html == a.__html) || v.__html === l.innerHTML)) ||
                (l.innerHTML = (v && v.__html) || ''));
          }
          if ((C(l, p, y, r, c), v)) u.__k = [];
          else if (
            ((_ = u.props.children),
            w(
              l,
              Array.isArray(_) ? _ : [_],
              u,
              i,
              t,
              r && 'foreignObject' !== d,
              o,
              f,
              o ? o[0] : i.__k && k(i, 0),
              c
            ),
            null != o)
          )
            for (_ = o.length; _--; ) null != o[_] && h(o[_]);
          c ||
            ('value' in p &&
              void 0 !== (_ = p.value) &&
              (_ !== l.value || ('progress' === d && !_)) &&
              H(l, 'value', _, y.value, !1),
            'checked' in p &&
              void 0 !== (_ = p.checked) &&
              _ !== l.checked &&
              H(l, 'checked', _, y.checked, !1));
        }
        return l;
      }
      function M(n, u, i) {
        try {
          'function' == typeof n ? n(u) : (n.current = u);
        } catch (n) {
          l.__e(n, i);
        }
      }
      function N(n, u, i) {
        var t, r;
        if (
          (l.unmount && l.unmount(n),
          (t = n.ref) && ((t.current && t.current !== n.__e) || M(t, null, u)),
          null != (t = n.__c))
        ) {
          if (t.componentWillUnmount)
            try {
              t.componentWillUnmount();
            } catch (n) {
              l.__e(n, u);
            }
          t.base = t.__P = null;
        }
        if ((t = n.__k))
          for (r = 0; r < t.length; r++) t[r] && N(t[r], u, 'function' != typeof n.type);
        i || null == n.__e || h(n.__e), (n.__e = n.__d = void 0);
      }
      function O(n, l, u) {
        return this.constructor(n, u);
      }
      function S(u, i, t) {
        var r, o, f;
        l.__ && l.__(u, i),
          (o = (r = 'function' == typeof t) ? null : (t && t.__k) || i.__k),
          (f = []),
          j(
            i,
            (u = ((!r && t) || i).__k = v(d, null, [u])),
            o || e,
            e,
            void 0 !== i.ownerSVGElement,
            !r && t ? [t] : o ? null : i.firstChild ? n.call(i.childNodes) : null,
            f,
            !r && t ? t : o ? o.__e : i.firstChild,
            r
          ),
          z(f, u);
      }
      function q(n, l) {
        S(n, l, q);
      }
      function B(l, u, i) {
        var t,
          r,
          o,
          f = a({}, l.props);
        for (o in u) 'key' == o ? (t = u[o]) : 'ref' == o ? (r = u[o]) : (f[o] = u[o]);
        return (
          2 < arguments.length && (f.children = 3 < arguments.length ? n.call(arguments, 2) : i),
          y(l.type, f, t || l.key, r || l.ref, null)
        );
      }
      function D(n, l) {
        var u = {
          __c: (l = '__cC' + f++),
          __: n,
          Consumer: function Consumer(n, l) {
            return n.children(l);
          },
          Provider: function Provider(n) {
            var u, i;
            return (
              this.getChildContext ||
                ((u = []),
                ((i = {})[l] = this),
                (this.getChildContext = function () {
                  return i;
                }),
                (this.shouldComponentUpdate = function (n) {
                  this.props.value !== n.value && u.some(m);
                }),
                (this.sub = function (n) {
                  u.push(n);
                  var l = n.componentWillUnmount;
                  n.componentWillUnmount = function () {
                    u.splice(u.indexOf(n), 1), l && l.call(n);
                  };
                })),
              n.children
            );
          },
        };
        return (u.Provider.__ = u.Consumer.contextType = u);
      }
      (n = c.slice),
        (l = {
          __e: function __e(n, l) {
            for (var u, i, t; (l = l.__); )
              if ((u = l.__c) && !u.__)
                try {
                  if (
                    ((i = u.constructor) &&
                      null != i.getDerivedStateFromError &&
                      (u.setState(i.getDerivedStateFromError(n)), (t = u.__d)),
                    null != u.componentDidCatch && (u.componentDidCatch(n), (t = u.__d)),
                    t)
                  )
                    return (u.__E = u);
                } catch (l) {
                  n = l;
                }
            throw n;
          },
        }),
        (u = 0),
        (i = function i(n) {
          return null != n && void 0 === n.constructor;
        }),
        (_.prototype.setState = function (n, l) {
          var u;
          (u =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = a({}, this.state))),
            'function' == typeof n && (n = n(a({}, u), this.props)),
            n && a(u, n),
            null != n && this.__v && (l && this.__h.push(l), m(this));
        }),
        (_.prototype.forceUpdate = function (n) {
          this.__v && ((this.__e = !0), n && this.__h.push(n), m(this));
        }),
        (_.prototype.render = d),
        (t = []),
        (r =
          'function' == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (g.__r = 0),
        (f = 0);

      /***/
    },

    /***/ 26: /***/ (module) => {
      /**@license MIT-promiscuous-©Ruben Verborgh*/ (function (func, obj) {
        // Type checking utility function
        function is(type, item) {
          return (typeof item)[0] == type;
        } // Creates a promise, calling callback(resolve, reject), ignoring other parameters.
        function Promise(callback, handler) {
          return (
            (handler = function pendingHandler(resolved, rejected, value, queue, then, i) {
              // Case 1) handle a .then(resolved, rejected) call
              if (((queue = pendingHandler.q), resolved != is))
                return Promise(function (resolve, reject) {
                  queue.push({ p: this, r: resolve, j: reject, 1: resolved, 0: rejected });
                }); // Case 2) handle a resolve or reject call
              // (`resolved` === `is` acts as a sentinel)
              // The actual function signature is
              // .re[ject|solve](<is>, success, value)
              // Check if the value is a promise and try to obtain its `then` method
              if (value && is(func, value) | is(obj, value))
                try {
                  then = value.then;
                } catch (reason) {
                  (rejected = 0), (value = reason);
                } // If the value is a promise, take over its state
              if (is(func, then)) {
                var valueHandler = function valueHandler(resolved) {
                  return function (value) {
                    then && ((then = 0), pendingHandler(is, resolved, value));
                  };
                };
                try {
                  then.call(value, valueHandler(1), (rejected = valueHandler(0)));
                } catch (reason) {
                  rejected(reason);
                }
              } // The value is not a promise; handle resolve/reject
              else
                for (
                  handler = function handler(Resolved, Rejected) {
                    // If the Resolved or Rejected parameter is not a function,
                    // return the original promise (now stored in the `callback` variable)
                    return is(func, (Resolved = rejected ? Resolved : Rejected))
                      ? Promise(function (resolve, reject) {
                          finalize(this, resolve, reject, value, Resolved);
                        })
                      : callback; // Otherwise, return a finalized promise, transforming the value with the function
                  },
                    i = 0;
                  i < queue.length;

                )
                  (then = queue[i++]),
                    is(func, (resolved = then[rejected])) // Otherwise, resolve/reject the promise with the result of the callback
                      ? finalize(then.p, then.r, then.j, value, resolved)
                      : (rejected ? then.r : then.j)(value);
            }),
            (handler.q = []),
            callback.call(
              (callback = {
                then: function then(resolved, rejected) {
                  return handler(resolved, rejected);
                },
                catch: function _catch(rejected) {
                  return handler(0, rejected);
                },
              }),
              function (value) {
                handler(is, 1, value);
              },
              function (reason) {
                handler(is, 0, reason);
              }
            ),
            callback
          );
        } // Finalizes the promise by resolving/rejecting it with the transformed value
        function finalize(promise, resolve, reject, value, transform) {
          var fn = function fn() {
            try {
              // Transform the value through and check whether it's a promise
              (value = transform(value)),
                (transform = value && is(obj, value) | is(func, value) && value.then),
                is(func, transform)
                  ? value == promise
                    ? reject(TypeError()) // Take over the promise's state
                    : transform.call(value, resolve, reject)
                  : resolve(value);
            } catch (error) {
              reject(error);
            }
          }; // Don't polyfill setImmediate, but use it if it's available.
          window.setImmediate ? window.setImmediate(fn) : setTimeout(fn, 0);
        } // Export the main module
        function ResolvedPromise(value) {
          return Promise(function (resolve) {
            resolve(value);
          });
        } // Creates a rejected promise
        // If Promise is defined globally when this runs, just use that.
        return window.Promise
          ? void (module.exports = window.Promise)
          : void (
              // Creates a resolved promise
              // Transforms an array of promises into a promise for an array
              // Returns a promise that resolves or rejects as soon as one promise in the array does
              ((module.exports = Promise),
              (Promise.resolve = ResolvedPromise),
              (Promise.reject = function (reason) {
                return Promise(function (resolve, reject) {
                  reject(reason);
                });
              }),
              (Promise.all = function (promises) {
                return Promise(function (resolve, reject, count, values) {
                  // Array of collected values
                  // Resolve immediately if there are no promises
                  // Transform all elements (`map` is shorter than `forEach`)
                  (values = []),
                    (count = promises.length || resolve(values)),
                    promises.map(function (promise, index) {
                      ResolvedPromise(promise).then(
                        // Store the value and resolve if it was the last
                        function (value) {
                          (values[index] = value), --count || resolve(values);
                        }, // Reject if one element fails
                        reject
                      );
                    });
                });
              }),
              (Promise.race = function (promises) {
                return Promise(function (resolve, reject) {
                  // Register to all promises in the array
                  promises.map(function (promise) {
                    ResolvedPromise(promise).then(resolve, reject);
                  });
                });
              }))
            );
      })('f', 'o');

      /***/
    },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule ? /******/ () => module['default'] : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(1);
    /* harmony import */ var external_vulcanV2Player_video_controls_PlayPauseLoadingCircleControl_PlayPauseLoadingCircleControl_js__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(439);
    wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.define('playPauseLoadingControl.js', {
      PlayPauseLoadingCircleControl:
        external_vulcanV2Player_video_controls_PlayPauseLoadingCircleControl_PlayPauseLoadingCircleControl_js__WEBPACK_IMPORTED_MODULE_1__.default,
    });
  })();

  /******/
})();
