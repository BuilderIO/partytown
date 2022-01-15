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

    /***/ 636: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
      var _W$lib =
          wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/isMouseDown'),
        isMouseDown = _W$lib.isMouseDown,
        TouchEvents = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.syncRequire(
          'vulcanV2Player/TouchEvents.js'
        ),
        _W$lib2 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('player/lib/elem'),
        elemBind = _W$lib2.elemBind,
        elemOffset = _W$lib2.elemOffset,
        elemUnbind = _W$lib2.elemUnbind,
        _W$lib3 =
          wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('player/translations'),
        getTranslation = _W$lib3.getTranslation,
        defineTranslations = _W$lib3.defineTranslations,
        _W$lib4 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/detect'),
        cachedDetect = _W$lib4.cachedDetect,
        detect = cachedDetect();
      defineTranslations('en-US', { VOLUME_TITLE_VOLUME_SLIDER: 'Volume Slider' });
      var STANDARD_WIDTH = 40,
        VolumeSlider = /*#__PURE__*/ (function (_Component) {
          function VolumeSlider(props) {
            var _this;
            return (
              _classCallCheck(this, VolumeSlider),
              (_this = _super.call(this, props)),
              _defineProperty(_assertThisInitialized(_this), 'onClick', function (e) {
                e.wistiaPlayerHandled = !0;
              }),
              _defineProperty(_assertThisInitialized(_this), 'onFocus', function (e) {
                isMouseDown() || _this.setState({ isKeyboardFocused: !0 }),
                  _this.handleWithProp('onFocus', e);
              }),
              _defineProperty(_assertThisInitialized(_this), 'onBlur', function (e) {
                _this.setState({ isKeyboardFocused: !1 }), _this.handleWithProp('onBlur', e);
              }),
              _defineProperty(_assertThisInitialized(_this), 'onMouseEnterGrabber', function () {
                _this.isDragging || _this.setState({ isOverGrabber: !0 });
              }),
              _defineProperty(_assertThisInitialized(_this), 'onMouseLeaveGrabber', function () {
                _this.isDragging || _this.setState({ isOverGrabber: !1 });
              }),
              _defineProperty(_assertThisInitialized(_this), 'onMouseDown', function (e) {
                if (!e.ctrlKey) {
                  // So we can ctrl-click to inspect.
                  e.preventDefault(),
                    (e.wistiaPlayerHandled = !0),
                    _this.cachePositionDetails(),
                    (_this.isDragging = !0);
                  var percent = _this.getPercentFromMouseEvent(e);
                  _this.setState({ isDragging: !0, dragPercent: percent }),
                    _this.handleWithProp('onDragStart', e, percent),
                    elemBind(document, 'mousemove', _this.onMouseMove),
                    elemBind(document, 'mouseup', _this.onMouseUp);
                }
              }),
              _defineProperty(_assertThisInitialized(_this), 'onMouseMove', function (e) {
                (e.wistiaPlayerHandled = !0), e.preventDefault(); // don't select text
                var percent = _this.getPercentFromMouseEvent(e);
                _this.setState({ isDragging: !0, dragPercent: percent }),
                  _this.handleWithProp('onDrag', e, percent);
              }),
              _defineProperty(_assertThisInitialized(_this), 'onMouseUp', function (e) {
                (e.wistiaPlayerHandled = !0), (_this.isDragging = !1);
                var percent = _this.getPercentFromMouseEvent(e);
                _this.setState({ isDragging: !1, dragPercent: percent }),
                  _this.handleWithProp('onDragEnd', e, percent),
                  elemUnbind(document, 'mousemove', _this.onMouseMove),
                  elemUnbind(document, 'mouseup', _this.onMouseUp);
              }),
              _defineProperty(_assertThisInitialized(_this), 'onTouchStart', function (e) {
                e.preventDefault(),
                  (e.wistiaPlayerHandled = !0),
                  _this.cachePositionDetails(),
                  (_this.isDragging = !0);
                var percent = _this.getPercentFromMouseEvent(e);
                _this.setState({ isDragging: !0, dragPercent: percent }),
                  _this.handleWithProp('onDragStart', e, percent),
                  _this.touchEvents.on('touchmove', _this.onTouchMove),
                  _this.touchEvents.on('touchend', _this.onTouchEnd);
              }),
              _defineProperty(_assertThisInitialized(_this), 'onTouchMove', function (e) {
                e.preventDefault(), (e.wistiaPlayerHandled = !0);
                var percent = _this.getPercentFromMouseEvent(e);
                _this.setState({ isDragging: !0, dragPercent: percent }),
                  _this.handleWithProp('onDrag', e, percent);
              }),
              _defineProperty(_assertThisInitialized(_this), 'onTouchEnd', function (e) {
                e.preventDefault(), (e.wistiaPlayerHandled = !0), (_this.isDragging = !1);
                var percent = _this.getPercentFromMouseEvent(e);
                _this.setState({ isDragging: !1, dragPercent: percent }),
                  _this.handleWithProp('onDragEnd', e, percent),
                  _this.touchEvents.off('touchmove', _this.onTouchMove),
                  _this.touchEvents.off('touchend', _this.onTouchEnd);
              }),
              (_this.state = {
                dragPercent: props.volume,
                isDragging: !1,
                isKeyboardFocused: !1,
                isOverGrabber: !1,
              }),
              _this
            );
          }
          _inherits(VolumeSlider, _Component);
          var _super = _createSuper(VolumeSlider);
          return (
            _createClass(VolumeSlider, [
              {
                key: 'translation',
                value: function translation(key) {
                  return getTranslation(
                    this.props.playerLanguage.code,
                    'VOLUME_TITLE_'.concat(key)
                  );
                },
              },
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  (this.touchEvents = new TouchEvents(this.wrapperElem)),
                    this.touchEvents.on('touchstart', this.onTouchStart);
                },
              },
              {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                  this.touchEvents.destroy();
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function shouldComponentUpdate() {
                  return !0;
                },
              },
              {
                key: 'getVisibleVolume',
                value: function getVisibleVolume() {
                  return this.state.isDragging ? this.state.dragPercent : this.props.volume;
                },
              },
              {
                key: 'render',
                value: function render() {
                  var _this2 = this,
                    volume = this.getVisibleVolume(),
                    title = this.translation('VOLUME_SLIDER');
                  return (0, preact__WEBPACK_IMPORTED_MODULE_1__.h)(
                    'div',
                    {
                      class: 'w-css-reset w-css-reset-tree',
                      onMouseEnter: this.props.onMouseEnter,
                      onMouseLeave: this.props.onMouseLeave,
                      style: { position: 'relative' },
                    },
                    (0, preact__WEBPACK_IMPORTED_MODULE_1__.h)(
                      'div',
                      {
                        'class': 'w-slider-wrapper w-css-reset w-css-reset-tree',
                        'tabindex': 0,
                        'aria-label': title,
                        'title': title,
                        'role': 'slider',
                        'aria-orientation': 'vertical',
                        'aria-valuemin': 0,
                        'aria-valuemax': 100,
                        'aria-valuenow': 100 * volume,
                        'style': this.wrapperStyle(),
                        'ref': function ref(e) {
                          return (_this2.wrapperElem = e);
                        },
                        'onMouseDown': this.onMouseDown,
                        'onClick': this.onClick,
                        'onFocus': this.onFocus,
                        'onBlur': this.onBlur,
                      },
                      (0, preact__WEBPACK_IMPORTED_MODULE_1__.h)('div', {
                        class: 'w-volume-track',
                        style: this.trackStyle(),
                        ref: function ref(e) {
                          return (_this2.trackElem = e);
                        },
                      }),
                      (0, preact__WEBPACK_IMPORTED_MODULE_1__.h)(
                        'div',
                        {
                          class: 'w-volume-grabber',
                          style: this.grabberStyle(),
                          onMouseEnter: this.onMouseEnterGrabber,
                          onMouseLeave: this.onMouseLeaveGrabber,
                        },
                        (0, preact__WEBPACK_IMPORTED_MODULE_1__.h)('div', {
                          style: this.grabberInnerStyle(),
                        })
                      )
                    )
                  );
                },
              },
              {
                key: 'wrapperStyle',
                value: function wrapperStyle() {
                  var _this$props = this.props,
                    isVisible = _this$props.isVisible,
                    scale = _this$props.scale,
                    isKeyboardFocused = this.state.isKeyboardFocused;
                  return {
                    background: 'rgba(0, 0, 0, 0.7)',
                    bottom: 0,
                    boxShadow: isKeyboardFocused ? '0 0 0 2px #fff inset' : 'none',
                    boxSizing: 'content-box',
                    cursor: 'pointer',
                    height: ''.concat(110 * (scale || 1), 'px'),
                    opacity: isKeyboardFocused || isVisible ? 1 : 0,
                    outline: 'none',
                    right: isKeyboardFocused || isVisible ? 0 : 99999,
                    position: 'absolute',
                    width: ''.concat(STANDARD_WIDTH * (scale || 1), 'px'),
                    transition: detect.trident ? 'none' : 'opacity 170ms',
                  };
                },
              },
              {
                key: 'trackStyle',
                value: function trackStyle() {
                  var scale = this.props.scale,
                    width = Math.round(2 * scale);
                  return {
                    background: '#fff',
                    borderRadius: ''.concat(0.5 * width, 'px'),
                    height: '72.73%',
                    left: '50%',
                    position: 'absolute',
                    top: '13.635%',
                    transform: 'translate(-50%)',
                    width: ''.concat(width, 'px'),
                  };
                },
              },
              {
                key: 'grabberStyle',
                value: function grabberStyle() {
                  var scale = this.props.scale,
                    _this$state = this.state,
                    isDragging = _this$state.isDragging,
                    isOverGrabber = _this$state.isOverGrabber,
                    hoverScale = isDragging || isOverGrabber ? 1.25 : 0.85,
                    size = Math.round(20 * scale),
                    totalHeight = 72.73,
                    topPadding = 13.635,
                    positionPercent = topPadding + totalHeight * (1 - this.getVisibleVolume());
                  return {
                    background: 'transparent',
                    borderRadius: '50%',
                    height: ''.concat(size, 'px'),
                    left: '50%',
                    position: 'absolute',
                    top: ''.concat(positionPercent, '%'),
                    transform: 'translate(-51%, -50%) scale('.concat(hoverScale, ')'),
                    transition: 'transform 100ms',
                    width: ''.concat(size, 'px'),
                  };
                },
              },
              {
                key: 'grabberInnerStyle',
                value: function grabberInnerStyle() {
                  var scale = this.props.scale;
                  return {
                    background: 'rgba(0,0,0,.8)',
                    border: ''.concat(2 * scale, 'px solid #fff'),
                    borderRadius: '50%',
                    height: '40%',
                    left: '50%',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '40%',
                  };
                },
              },
              {
                key: 'handleWithProp',
                value: function handleWithProp(propName, e) {
                  var fn = this.props[propName];
                  if (fn) {
                    for (
                      var _len = arguments.length, extra = Array(2 < _len ? _len - 2 : 0), _key = 2;
                      _key < _len;
                      _key++
                    )
                      extra[_key - 2] = arguments[_key];
                    fn.apply(void 0, [e].concat(extra));
                  }
                },
              },
              {
                key: 'getPercentFromMouseEvent',
                value: function getPercentFromMouseEvent(e) {
                  var unclampedRatio = (e.pageY - this.offset.top) / this.offset.height,
                    ratioFromTop = Math.min(1, Math.max(0, unclampedRatio)),
                    ratioFromBottom = 1 - ratioFromTop;
                  return ratioFromBottom;
                }, // Calculating offset and dimensions is expensive, so let's just do it once
                // when the drag starts. The positioning and dimensions are unlikely to
                // change while isDragging, and if they do, weird behavior is expected.
              },
              {
                key: 'cachePositionDetails',
                value: function cachePositionDetails() {
                  this.offset = elemOffset(this.trackElem);
                },
              },
            ]),
            VolumeSlider
          );
        })(preact__WEBPACK_IMPORTED_MODULE_1__.Component);
      wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.define(
        'vulcanV2Player/video/controls/VolumeSlider/VolumeSlider.js',
        VolumeSlider
      );
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = VolumeSlider;

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

    /***/ 89: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ deleteViewerPreferences: () => /* binding */ deleteViewerPreferences,
        /* harmony export */ getViewerPreferences: () => /* binding */ getViewerPreferences,
        /* harmony export */ setViewerPreference: () => /* binding */ setViewerPreference,
        /* harmony export */
      });
      /* harmony import */ var utilities_namespacedLocalStorage__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(43);
      var deleteViewerPreferences = function deleteViewerPreferences() {
        (0, utilities_namespacedLocalStorage__WEBPACK_IMPORTED_MODULE_0__.removeLocalStorage)(
          getLocalStorageKey()
        );
      };
      var getLocalStorageKey = function getLocalStorageKey() {
        return 'wistia-viewer-preferences';
      };
      var getViewerPreferences = function getViewerPreferences() {
        return (0, utilities_namespacedLocalStorage__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)(
          getLocalStorageKey()
        );
      };
      var setViewerPreference = function setViewerPreference(preference, value) {
        (0, utilities_namespacedLocalStorage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(
          getLocalStorageKey(),
          function (obj) {
            obj[preference] = value;
          }
        );
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

    /***/ 43: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ getLocalStorage: () => /* binding */ getLocalStorage,
        /* harmony export */ removeLocalStorage: () => /* binding */ removeLocalStorage,
        /* harmony export */ setLocalStorage: () => /* binding */ setLocalStorage,
        /* harmony export */ updateLocalStorage: () => /* binding */ updateLocalStorage,
        /* harmony export */
      });
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1);
      /*
       * This module is designed as a simpler version of our old localStorage
       * utility.  To reduce potential bundle size, it doesn't make use of Obj
       * utilities or wlog, and doesn't return early based on browser detection.
       *
       * To avoid multiple tab bugs, it does not try to do any kind of commit
       * debouncing. Every call to `set` involves JSON.serialize() and every call to
       * `get` involves JSON.parse(). Therefore, if you are performing many
       * operations, you should cache an intermediate value. The
       * updateLocalStorage function is also provided for doing many updates
       * with a single parse and serialize call.
       *
       * If you are working with localStorage on something that requires lots of
       * updates, you should use a separate namespace. That way there is less to
       * deserialize and serialize on each read and write.
       */ var throwAsync = function throwAsync(e) {
          setTimeout(function () {
            throw e;
          }, 0);
        },
        OBJ_PROP = '_namespacedLocalStorage',
        localStorageWorks = function localStorageWorks(ns) {
          if (null != wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default._localStorageWorks)
            return wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default._localStorageWorks;
          try {
            // no-ops that test get, set, and remove. These may throw an exception
            // in Private Browsing mode on iOS and Safari.
            var currentVal = localStorage.getItem(ns);
            localStorage.removeItem(ns),
              localStorage.setItem(ns, currentVal),
              (wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default._localStorageWorks = !0);
          } catch (e) {
            wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default._localStorageWorks = !1;
          }
          return wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default._localStorageWorks;
        },
        getMemory = function getMemory() {
          return (
            null == wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default[OBJ_PROP] &&
              (wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default[OBJ_PROP] = {}),
            wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default[OBJ_PROP]
          );
        };
      var getLocalStorage = function getLocalStorage(ns) {
        if (!localStorageWorks()) return getMemory()[ns] || {};
        if (localStorage[ns])
          try {
            return 'null' === localStorage[ns] ? {} : JSON.parse(localStorage[ns]);
          } catch (e) {
            throwAsync(e);
          }
        return {};
      };
      var removeLocalStorage = function removeLocalStorage(ns) {
        if (!localStorageWorks()) return void (getMemory()[ns] = {});
        try {
          localStorage.removeItem(ns);
        } catch (e) {
          throwAsync(e);
        }
      };
      var setLocalStorage = function setLocalStorage(ns, obj) {
        if (!localStorageWorks())
          return null != obj && 'object' == typeof obj && (getMemory()[ns] = obj), obj;
        try {
          // We set W._localStorage for compatibility with the old localStorage util,
          // which would otherwise overwrite any changes we make. :0
          (getMemory()[ns] = obj), (localStorage[ns] = JSON.stringify(obj));
        } catch (e) {
          throwAsync(e);
        }
        return obj;
      };
      var updateLocalStorage = function updateLocalStorage(ns, fn) {
        var obj = getLocalStorage(ns); // fn() may throw an exception. we catch and report because we don't want
        // an exception after modifying in-place localStorage to get our local store
        // out of sync.
        try {
          fn(obj);
        } catch (e) {
          throwAsync(e);
        }
        return setLocalStorage(ns, obj);
      };

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
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var _shared_controls_Control_js__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(140);
    /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(1);
    /* harmony import */ var _VolumeSlider_jsx__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(636);
    /* harmony import */ var player_lib_viewerPreferences__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(89);
    /* harmony import */ var player_lib_control_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(59);
    /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
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
    var _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__.default.lib('utilities/detect'),
      cachedDetect = _W$lib.cachedDetect,
      detect = cachedDetect(),
      VolumeSliderControl = /*#__PURE__*/ (function (_Control) {
        function VolumeSliderControl(_video) {
          var _this;
          return (
            _classCallCheck(this, VolumeSliderControl),
            (_this = _super.call(this, _video)),
            _defineProperty(_assertThisInitialized(_this), 'onBlurSlider', function () {
              _this.video.exitInputContext('volume-slider-focus');
            }),
            _defineProperty(_assertThisInitialized(_this), 'onDragSlider', function (e, percent) {
              var video = _this.video;
              video.volume(percent),
                (0, player_lib_viewerPreferences__WEBPACK_IMPORTED_MODULE_3__.setViewerPreference)(
                  'volume',
                  video.volume()
                ),
                video.isMuted() ||
                  0 !== percent ||
                  (video.mute(),
                  (0,
                  player_lib_viewerPreferences__WEBPACK_IMPORTED_MODULE_3__.setViewerPreference)(
                    'muted',
                    !0
                  )),
                video.isMuted() &&
                  0 < percent &&
                  (video.unmute(),
                  (0,
                  player_lib_viewerPreferences__WEBPACK_IMPORTED_MODULE_3__.setViewerPreference)(
                    'muted',
                    void 0
                  ));
            }),
            _defineProperty(
              _assertThisInitialized(_this),
              'onDragSliderStart',
              function (e, percent) {
                (_this.isDragging = !0),
                  _this.renderSlider(),
                  _this.video.requestControls('volume-slider'),
                  _this.onDragSlider(e, percent);
              }
            ),
            _defineProperty(
              _assertThisInitialized(_this),
              'onDragSliderEnd',
              function (e, percent) {
                (_this.isDragging = !1),
                  _this.renderSlider(),
                  _this.onDragSlider(e, percent),
                  _this.video.releaseControls('volume-slider');
              }
            ),
            _defineProperty(_assertThisInitialized(_this), 'onFocusSlider', function () {
              _this.video.enterInputContext('volume-slider-focus');
            }),
            _defineProperty(_assertThisInitialized(_this), 'onMouseEnter', function () {
              (_this.isHovering = !0), _this.renderSlider();
            }),
            _defineProperty(_assertThisInitialized(_this), 'onMouseLeave', function () {
              (_this.isHovering = !1), _this.renderSlider();
            }),
            (_this.video = _video),
            _this.unbinds.push(
              _video.on('volumechange', function () {
                _this.rootElem && _this.renderSlider();
              })
            ),
            _this
          );
        }
        _inherits(VolumeSliderControl, _Control);
        var _super = _createSuper(VolumeSliderControl);
        return (
          _createClass(VolumeSliderControl, [
            {
              key: 'destroy',
              value: function destroy() {
                (0, player_lib_control_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__.destroyControl)(
                  this
                );
              },
            },
            {
              key: 'mount',
              value: function mount(rootElem) {
                (this.rootElem = rootElem), this.renderSlider();
              },
            },
            {
              key: 'hide',
              value: function hide() {
                (this.isHovering = !1), this.renderSlider();
              },
            },
            {
              key: 'onControlPropsUpdated',
              value: function onControlPropsUpdated(prevProps) {
                prevProps.playerLanguage &&
                  this.props.playerLanguage.code !== prevProps.playerLanguage.code &&
                  this.renderSlider();
              },
            },
            {
              key: 'show',
              value: function show() {
                (this.isHovering = !0), this.renderSlider();
              },
            },
            {
              key: 'renderSlider',
              value: function renderSlider() {
                // it is possible for us to trigger a render before mounting
                // often it is because the mouse enter/leave is firing prior
                // to mounting have been completed
                if (this.rootElem) {
                  var _this$props = this.props,
                    playerLanguage = _this$props.playerLanguage,
                    scale = _this$props.scale;
                  (0, preact__WEBPACK_IMPORTED_MODULE_5__.render)(
                    (0, preact__WEBPACK_IMPORTED_MODULE_5__.h)(
                      _VolumeSlider_jsx__WEBPACK_IMPORTED_MODULE_2__.default,
                      {
                        isVisible: this.isDragging || this.isHovering,
                        onBlur: this.onBlurSlider,
                        onDrag: this.onDragSlider,
                        onDragEnd: this.onDragSliderEnd,
                        onDragStart: this.onDragSliderStart,
                        onFocus: this.onFocusSlider,
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        playerLanguage: playerLanguage,
                        scale: scale,
                        volume: this.video.isMuted() ? 0 : this.video.volume(),
                      }
                    ),
                    this.rootElem
                  );
                }
              },
            },
          ]),
          VolumeSliderControl
        );
      })(_shared_controls_Control_js__WEBPACK_IMPORTED_MODULE_0__.default);
    (VolumeSliderControl.shouldMount = function (video) {
      var volumeOpt = video._opts.volumeControl;
      return (
        (!0 === volumeOpt || null == volumeOpt) && !detect.iphone && !detect.ipad && !detect.android
      );
    }),
      (VolumeSliderControl.handle = 'volumeSlider'),
      (VolumeSliderControl.type = 'control-bar-right'),
      (VolumeSliderControl.sortValue = 101),
      (VolumeSliderControl.width = 0),
      wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__.default.define(
        'vulcanV2Player/video/controls/VolumeSliderControl/VolumeSliderControl.js'
      ),
      wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__.default.defineControl(VolumeSliderControl);
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = VolumeSliderControl;
  })();

  /******/
})();
