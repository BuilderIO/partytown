/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ 324: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1);
      null == wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.engines &&
        (wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.engines = {});
      var defineEngine = function defineEngine(name, klass) {
        wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.engines[name] = klass;
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = defineEngine;

      /***/
    },

    /***/ 363: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ autoAsset: () => /* binding */ autoAsset,
        /* harmony export */ bestAsset: () => /* binding */ bestAsset,
        /* harmony export */ selectable: () => /* binding */ selectable,
        /* harmony export */ selectableWithoutAuto: () => /* binding */ selectableWithoutAuto,
        /* harmony export */ uncache: () => /* binding */ uncache,
        /* harmony export */
      });
      /* harmony import */ var _selectable_assets__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(361);
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(1);
      var _W$lib =
          wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__.default.lib('utilities/cacheable'),
        makeCacheable = _W$lib.makeCacheable,
        uncacheNamespace = _W$lib.uncacheNamespace,
        Obj = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__.default.lib('utilities/obj'),
        Assets = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__.default.lib('player/lib/assets'),
        _W$lib2 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__.default.lib('utilities/wlog'),
        wlog = _W$lib2.wlog,
        _W$lib3 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__.default.lib('utilities/detect'),
        cachedDetect = _W$lib3.cachedDetect,
        logger = wlog.getPrefixedFunctions('asset_selection'),
        cacheable = makeCacheable('asset_selection'),
        selectable = function selectable(simpleVideo) {
          return [autoAsset()].concat(selectableWithoutAuto(simpleVideo));
        },
        selectableWithoutAuto = function selectableWithoutAuto(simpleVideo) {
          return (0, _selectable_assets__WEBPACK_IMPORTED_MODULE_0__.selectableAssets)(
            webPlayable(simpleVideo)
          );
        },
        autoAsset = function autoAsset() {
          return {
            bitrate: 'variable',
            ext: 'variable',
            height: 'variable',
            public: !0,
            size: 'variable',
            type: 'variable',
            url: '',
            width: 'variable',
            slug: 'auto',
            display_name: 'Auto',
          };
        },
        bestAsset = function bestAsset(simpleVideo) {
          var attrs = simpleVideo.attributes;
          if ((logger.info('bestAsset'), isScreencast(simpleVideo)))
            return bestScreencastAsset(simpleVideo);
          if ('sd-only' === attrs.videoQuality)
            return logger.info('videoQuality=sd-only'), mdOrSdAsset(simpleVideo);
          if ('hd-only' === attrs.videoQuality)
            return logger.info('videoQuality=hd-only'), bestHdOnlyAsset(simpleVideo);
          if ('md' === attrs.videoQuality)
            return logger.info('videoQuality=md'), bestMdAsset(simpleVideo);
          if (isTargetingExactWidth(attrs.videoQuality)) {
            var targetAsset = closestAssetToTargetWidth(simpleVideo);
            if (targetAsset) return logger.info('targetAsset', attrs.videoQuality), targetAsset;
          }
          return simpleVideo.isInFullscreen()
            ? (logger.info('infullscreen'), bestFullscreenAsset(simpleVideo))
            : (logger.info('default'),
              bandwidthBasedAsset(simpleVideo) || mdOrSdAsset(simpleVideo));
        },
        bestScreencastAsset = function bestScreencastAsset(simpleVideo) {
          var attrs = simpleVideo.attributes;
          if ('low-fps' === attrs.videoQuality)
            return logger.info('videoQuality=low-fps'), bestLowFpsAsset(simpleVideo); // the screencast asset is probably still the best quality they'll get, but
          // it would be confusing if we didn't respect this.
          if (isTargetingExactWidth(attrs.videoQuality)) {
            var targetAsset = closestAssetToTargetWidth(simpleVideo);
            if (targetAsset) return logger.info('targetAsset', attrs.videoQuality), targetAsset;
          }
          return screencastAsset(simpleVideo);
        },
        bestFullscreenAsset = function bestFullscreenAsset(simpleVideo) {
          return simpleVideo.attributes.supportsHd
            ? (logger.info('supportsHd=true'), bestFullscreenHdAsset(simpleVideo))
            : (logger.info('supportsHd=false'), bestFullscreenNonHdAsset(simpleVideo));
        },
        bestFullscreenHdAsset = function bestFullscreenHdAsset(simpleVideo) {
          return (
            hdAsset(simpleVideo) ||
            bandwidthBasedAsset(simpleVideo) ||
            mdAsset(simpleVideo) ||
            sdAsset(simpleVideo)
          );
        },
        bestFullscreenNonHdAsset = function bestFullscreenNonHdAsset(simpleVideo) {
          return bandwidthBasedAsset(simpleVideo) || mdOrSdAsset(simpleVideo);
        },
        isTargetingExactWidth = function isTargetingExactWidth(videoQuality) {
          return /width:/.test(videoQuality);
        },
        bestHdOnlyAsset = function bestHdOnlyAsset(simpleVideo) {
          return hdAsset(simpleVideo) || mdAsset(simpleVideo) || sdAsset(simpleVideo);
        },
        bestMdAsset = function bestMdAsset(simpleVideo) {
          return mdAsset(simpleVideo) || sdAsset(simpleVideo);
        },
        bestLowFpsAsset = function bestLowFpsAsset(simpleVideo) {
          return lowFpsAsset(simpleVideo) || sdAsset(simpleVideo);
        },
        mdOrSdAsset = function mdOrSdAsset(simpleVideo) {
          return cacheable(simpleVideo, 'md_or_sd', function () {
            var attrs = simpleVideo.attributes;
            return 'sd-only' === attrs.videoQuality
              ? sdAsset(simpleVideo)
              : 'md' === attrs.videoQuality || 720 <= simpleVideo.attributes.width
              ? mdAsset(simpleVideo) || sdAsset(simpleVideo)
              : sdAsset(simpleVideo);
          });
        },
        screencastAsset = function screencastAsset(simpleVideo) {
          return cacheable(simpleVideo, 'screencast', function () {
            return Assets.playable(webPlayable(simpleVideo), {
              bitrate: [0, 1300],
              sortBy: 'width desc, bitrate asc',
              width: [0, originalAsset(simpleVideo).width],
            });
          });
        },
        qualityOptions = function qualityOptions(simpleVideo) {
          var attrs = simpleVideo.attributes;
          return { qualityMin: attrs.qualityMin, qualityMax: attrs.qualityMax };
        },
        playableAsset = function playableAsset(simpleVideo, options) {
          return Assets.playable(webPlayable(simpleVideo), options);
        },
        iphoneAsset = function iphoneAsset(simpleVideo, options) {
          return Assets.iphone(webPlayable(simpleVideo), options);
        },
        iphoneAssetInRange = function iphoneAssetInRange(simpleVideo) {
          return Assets.iphone(webPlayable(simpleVideo), qualityOptions(simpleVideo));
        },
        mp4AssetInRange = function mp4AssetInRange(simpleVideo) {
          return Assets.mp4(webPlayable(simpleVideo), qualityOptions(simpleVideo));
        },
        playableAssetInRange = function playableAssetInRange(simpleVideo, options) {
          return playableAsset(simpleVideo, Obj.assign(qualityOptions(simpleVideo), options));
        },
        sdAsset = function sdAsset(simpleVideo) {
          // Prefer a 640 mp4, but fall back to the smallest mp4 we have if that
          // doesn't exist.
          return cacheable(simpleVideo, 'sd_asset', function () {
            return (
              iphoneAssetInRange(simpleVideo) ||
              mp4AssetInRange(simpleVideo) ||
              iphoneAsset(simpleVideo) ||
              playableAsset(simpleVideo)
            );
          });
        },
        mdAsset = function mdAsset(simpleVideo) {
          return cacheable(simpleVideo, 'md_asset', function () {
            return playableAssetInRange(simpleVideo, {
              width: [720, 980],
              sortBy: 'width desc, bitrate desc',
            });
          });
        },
        hdAsset = function hdAsset(simpleVideo) {
          return cacheable(simpleVideo, 'hd_asset', function () {
            return playableAssetInRange(simpleVideo, {
              width: [980, simpleVideo.attributes.maxHdWidth || 2e3],
              sortBy: 'width desc, bitrate desc',
            });
          });
        },
        originalAsset = function originalAsset(simpleVideo) {
          return cacheable(simpleVideo, 'original', function () {
            return Assets.original(simpleVideo.allAssets);
          });
        },
        bandwidthBasedAsset = function bandwidthBasedAsset(simpleVideo) {
          var attrs = simpleVideo.attributes;
          return null == attrs.savedBandwidth
            ? null
            : playableAssetInRange(simpleVideo, {
                bitrate: [0, attrs.savedBandwidth],
                width: [0, attrs.maxHdWidth || 2e3],
                sortBy: 'width desc, bitrate desc',
              }) || mdOrSdAsset(simpleVideo);
        },
        targetAssetArgs = function targetAssetArgs(videoQuality) {
          if (!isTargetingExactWidth(videoQuality)) return {};
          var matches = videoQuality.match(/width:([a-z]*)(\d+)/i),
            op = matches[1],
            val = matches[2];
          return /^\d+$/.test(val)
            ? ((val = parseInt(val, 10)), '' === op && (op = 'lte'), { op: op, val: val })
            : {};
        },
        closestAssetToTargetWidth = function closestAssetToTargetWidth(simpleVideo) {
          var _targetAssetArgs = targetAssetArgs(simpleVideo.attributes.videoQuality),
            op = _targetAssetArgs.op,
            val = _targetAssetArgs.val;
          return 'lte' === op
            ? playableAsset(simpleVideo, { width: [0, val], sortBy: 'width desc' }) ||
                playableAsset(simpleVideo, { width: [val, 1e4], sortBy: 'width asc' })
            : 'gte' === op
            ? playableAsset(simpleVideo, { width: [val, 1e4], sortBy: 'width asc' }) ||
              playableAsset(simpleVideo, { width: [0, val], sortBy: 'width desc' })
            : null;
        },
        lowFpsAsset = function lowFpsAsset(simpleVideo) {
          // Low FPS asset is private
          return cacheable(simpleVideo, 'low_fps_asset', function () {
            return Assets.mp4(webPlayable(simpleVideo), { public: !1 });
          });
        },
        isScreencast = function isScreencast(simpleVideo) {
          return cacheable(simpleVideo, 'is_screencast', function () {
            return Assets.isScreencast(webPlayable(simpleVideo)) && !!screencastAsset(simpleVideo);
          });
        },
        webPlayable = function webPlayable(simpleVideo) {
          var assets = simpleVideo.allAssets,
            detect = simpleVideo.attributes.detect || cachedDetect();
          return detect.browser.msie ? Assets.filter(assets, { height: [0, 1080] }) : assets;
        },
        uncache = function uncache(simpleVideo) {
          uncacheNamespace('asset_selection', simpleVideo);
        };

      /***/
    },

    /***/ 362: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var _defineEngine_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(324);
      /* harmony import */ var _asset_selection__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(363);
      /* harmony import */ var _simple_video__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(325);
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(1);
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
      var Obj = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_3__.default.lib('utilities/obj'),
        Assets = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_3__.default.lib('player/lib/assets'),
        _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_3__.default.lib('utilities/seqid'),
        seqId = _W$lib.seqId,
        _W$lib2 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_3__.default.lib('utilities/detect'),
        cachedDetect = _W$lib2.cachedDetect,
        detect = cachedDetect(),
        delegatePublicMethods =
          _simple_video__WEBPACK_IMPORTED_MODULE_2__.default.delegatePublicMethods,
        mediaDataWithAssets =
          _simple_video__WEBPACK_IMPORTED_MODULE_2__.default.mediaDataWithAssets,
        ManualQualityVideo = /*#__PURE__*/ (function () {
          function ManualQualityVideo(root, mediaData) {
            var attributes = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
              otherEngine = 3 < arguments.length ? arguments[3] : void 0;
            _classCallCheck(this, ManualQualityVideo),
              (this.uuid = seqId('wistia_manual_quality_video_')),
              (this.root = root),
              (this.state = { selectedQuality: 'auto' }),
              (this.mediaData = mediaData),
              (this.allAssets = mediaData.assets),
              (this.attributes = attributes);
            var attrsForSimpleVideo = Obj.clone(this.attributes); // XXX: Chrome is buggy with preload=metadata for mp4s as of 9/1/2016. Let's
            // turn it off for now.
            'metadata' === attributes.preload &&
              detect.chrome &&
              (attrsForSimpleVideo.preload = 'none'),
              (this.simpleVideo = new _simple_video__WEBPACK_IMPORTED_MODULE_2__.default(
                this.root,
                this.mediaDataForSimpleVideo(),
                attrsForSimpleVideo,
                otherEngine
              ));
          }
          return (
            _createClass(ManualQualityVideo, [
              {
                key: 'mediaDataForSimpleVideo',
                value: function mediaDataForSimpleVideo() {
                  return mediaDataWithAssets(this.mediaData, this.assetsForSimpleVideo());
                },
              },
              {
                key: 'defaultAsset',
                value: function defaultAsset() {
                  return _asset_selection__WEBPACK_IMPORTED_MODULE_1__.bestAsset(this);
                },
              },
              {
                key: 'selectableAssets',
                value: function selectableAssets() {
                  return _asset_selection__WEBPACK_IMPORTED_MODULE_1__.selectable(this);
                },
              },
              {
                key: 'selectedQuality',
                value: function selectedQuality() {
                  return 'auto' === this.state.selectedQuality
                    ? 'auto'
                    : this.simpleVideo.selectedQuality();
                },
              },
              {
                key: 'onEnterFullscreen',
                value: function onEnterFullscreen() {
                  var result = this.simpleVideo.onEnterFullscreen();
                  return (
                    'auto' === this.state.selectedQuality && this.changeQuality('auto'), result
                  );
                },
              },
              {
                key: 'onLeaveFullscreen',
                value: function onLeaveFullscreen() {
                  var result = this.simpleVideo.onLeaveFullscreen();
                  return (
                    'auto' === this.state.selectedQuality && this.changeQuality('auto'), result
                  );
                },
              },
              {
                key: 'assetsForSimpleVideo',
                value: function assetsForSimpleVideo() {
                  // SimpleVideo always defaults to the first asset, but selectableAssets()
                  // returns them in selection order.
                  var assets = this.selectableAssets();
                  return (assets = Assets.moveToFront(assets, this.defaultAsset())), assets;
                },
              },
              {
                key: 'setAttributes',
                value: function setAttributes(attrs) {
                  Obj.assign(this.attributes, attrs), this.simpleVideo.setAttributes(attrs);
                },
              },
              {
                key: 'changeQuality',
                value: function changeQuality(quality, autoPlay, reload) {
                  this.state.selectedQuality = quality;
                  var assets =
                      _asset_selection__WEBPACK_IMPORTED_MODULE_1__.selectableWithoutAuto(this),
                    asset =
                      'auto' === quality
                        ? this.defaultAsset()
                        : Assets.findClosestAssetByQuality(assets, quality);
                  return 'beforeplay' === this.getPlaybackMode()
                    ? (this.changeStreamWithoutLoad(asset), Promise.resolve())
                    : this.changeStream(asset, autoPlay, reload);
                },
              },
            ]),
            ManualQualityVideo
          );
        })();
      delegatePublicMethods(ManualQualityVideo.prototype, function () {
        return this.simpleVideo;
      }),
        (0, _defineEngine_js__WEBPACK_IMPORTED_MODULE_0__.default)(
          'ManualQualityVideo',
          ManualQualityVideo
        ),
        wistia_namespace_js__WEBPACK_IMPORTED_MODULE_3__.default.define(
          'player/engines/manual_quality_video/index.js',
          ManualQualityVideo
        );
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ManualQualityVideo;

      /***/
    },

    /***/ 361: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ selectableAssets: () => /* binding */ selectableAssets,
        /* harmony export */
      });
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1);
      var _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/detect'),
        cachedDetect = _W$lib.cachedDetect,
        Obj = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/obj'),
        Assets = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('player/lib/assets'),
        detect = cachedDetect(),
        selectableAssets = function selectableAssets(allAssets) {
          var result = Assets.filter(allAssets, {
            container: detect.video.webm ? /webm|mp4/ : 'mp4',
            sortBy: 'width asc, bitrate desc',
            public: !0,
            status: Assets.READY,
          }); // Filter the assets so there's only one of each size.
          // Prefer webm assets to mp4 assets since they'll be smaller than their
          // counterparts.
          return (
            (result = Obj.filter(result, function (asset) {
              if ('webm' === asset.container)
                // Always prefer webm assets (i.e. never filter them out)
                return !0; // If there isn't a webm with the same width as this asset, then keep it.
              // Otherwise, it's a duplicate, so filter it out.
              var webmDuplicates = Obj.filter(allAssets, function (a) {
                return 'webm' === a.container && a.width === asset.width;
              });
              return 0 === webmDuplicates.length;
            })),
            result
          );
        };

      /***/
    },

    /***/ 342: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ PUBLIC_METHODS: () => /* binding */ PUBLIC_METHODS,
        /* harmony export */ delegateMethods: () => /* binding */ delegateMethods,
        /* harmony export */ delegatePublicMethods: () => /* binding */ delegatePublicMethods,
        /* harmony export */
      });
      var PUBLIC_METHODS = [
        'activeBufferRange',
        'anyBuffered',
        'bind',
        'bindNamed',
        'bufferInfo',
        'canDownloadMedia',
        'cancelFullscreen',
        'captureCurrentFrame',
        'changeQuality',
        'changeStream',
        'changeStreamWithoutLoad',
        'changeVideo',
        'currentAsset',
        'defaultAsset',
        'destroy',
        'diagnosticData',
        'eventContext',
        'fit',
        'getAudioTracks',
        'getCurrentQuality',
        'getCurrentTime',
        'getCuts',
        'getDuration',
        'getDurationBeforeCuts',
        'getMediaElement',
        'getMediaType',
        'getPlaybackMode',
        'getPlaybackRate',
        'getPreload',
        'getState',
        'getTimeAfterCuts',
        'getTimeBeforeCuts',
        'getTrim',
        'getVolume',
        'hasIssuedPlay',
        'isChangingVideo',
        'isInitializingFromUnmuted',
        'isInFullscreen',
        'isMuted',
        'isSeeking',
        'isSourceOfBrowserEvent',
        'lastBufferedTime',
        'mute',
        'onEnterFullscreen',
        'onHeightChange',
        'onLeaveFullscreen',
        'onMediaDataChanged',
        'onPlayed',
        'onReady',
        'onWidthChange',
        'pause',
        'play',
        'playType',
        'requestFullscreen',
        'reset',
        'seek',
        'seekOnPlay',
        'selectedAsset',
        'selectableAssets',
        'selectableQualities',
        'selectedQuality',
        'sequentialBufferedRange',
        'setAttributes',
        'setCurrentTime',
        'setPlaybackRate',
        'setCuts',
        'setTrim',
        'setVolume',
        'showFirstFrame',
        'stopStreaming',
        'timeBeforeEndOfBuffer',
        'totalBuffered',
        'totalPlayed',
        'trigger',
        'unbind',
        'unbindNamed',
        'unbindAllInNamespace',
        'unmute',
        'updateStartPosition',
      ];
      var delegateMethods = function delegateMethods(methods, objectPrototype, objectFn) {
        for (var methodName, i = 0; i < methods.length; i++)
          (methodName = methods[i]),
            objectPrototype[methodName] ||
              (function (methodName) {
                objectPrototype[methodName] = function () {
                  var theObject = objectFn.call(this);
                  return theObject ? theObject[methodName].apply(theObject, arguments) : null;
                };
              })(methodName);
      };
      var delegatePublicMethods = function delegatePublicMethods(objectPrototype, objectFn) {
        delegateMethods(PUBLIC_METHODS, objectPrototype, objectFn);
      };

      /***/
    },

    /***/ 327: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ anyBuffered: () => /* binding */ anyBuffered,
        /* harmony export */ activeBufferRange: () => /* binding */ activeBufferRange,
        /* harmony export */ totalBuffered: () => /* binding */ totalBuffered,
        /* harmony export */ sequentialBufferedRange: () => /* binding */ sequentialBufferedRange,
        /* harmony export */ bufferInfo: () => /* binding */ bufferInfo,
        /* harmony export */ lastBufferedTime: () => /* binding */ lastBufferedTime,
        /* harmony export */ timeBeforeEndOfBuffer: () => /* binding */ timeBeforeEndOfBuffer,
        /* harmony export */
      });
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1);
      /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(326);
      var _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/wlog'),
        wlog = _W$lib.wlog,
        logger = wlog.getPrefixedFunctions('buffering');
      var anyBuffered = function anyBuffered(simpleVideo) {
          var video = simpleVideo.video;
          return 0 < video.buffered.length && 0 < video.buffered.end(0);
        },
        activeBufferRange = function activeBufferRange(simpleVideo) {
          for (
            var video = simpleVideo.video, currentTime = video.currentTime, i = 0;
            i < video.buffered.length;
            i++
          ) {
            var start = video.buffered.start(i),
              end = video.buffered.end(i);
            if (start <= currentTime && currentTime < end) return [start, end];
          }
          return null;
        },
        totalBuffered = function totalBuffered(simpleVideo) {
          return _helpers__WEBPACK_IMPORTED_MODULE_1__.sumTimeRanges(simpleVideo.video.buffered);
        },
        sequentialBufferedRange = function sequentialBufferedRange(simpleVideo) {
          var video = simpleVideo.video,
            buffered = video.buffered,
            startIndex = null;
          try {
            for (var i = 0; i < buffered.length; i++) {
              var start = buffered.start(i) - 0.5,
                end = buffered.end(i) + 0.5;
              if (start <= video.currentTime && video.currentTime < end) {
                startIndex = i;
                break;
              }
            }
            if (null != startIndex) {
              for (
                var lastSequentialIndex = startIndex, _i = startIndex;
                _i < buffered.length;
                _i++
              ) {
                var thisBufferStart = buffered.start(_i) - 0.5,
                  lastBufferEnd = buffered.end(lastSequentialIndex) + 0.5;
                if (thisBufferStart <= lastBufferEnd) lastSequentialIndex = _i;
                else break;
              }
              var _start = buffered.start(startIndex),
                _end = buffered.end(lastSequentialIndex);
              return [_start, _end];
            }
            return null;
          } catch (e) {
            return logger.error(e), null;
          }
        },
        bufferInfo = function bufferInfo(simpleVideo, pos, maxHoleDuration) {
          var video = simpleVideo.video;
          if (video) {
            var i,
              vbuffered = video.buffered,
              buffered = [];
            for (i = 0; i < vbuffered.length; i++)
              buffered.push({ start: vbuffered.start(i), end: vbuffered.end(i) });
            return _helpers__WEBPACK_IMPORTED_MODULE_1__.bufferedInfo(
              buffered,
              pos,
              maxHoleDuration
            );
          }
          return { len: 0, start: 0, end: 0, nextStart: void 0 };
        },
        lastBufferedTime = function lastBufferedTime(simpleVideo, maxBufferHole) {
          return bufferInfo(simpleVideo, simpleVideo.getCurrentTime(), maxBufferHole).end;
        },
        timeBeforeEndOfBuffer = function timeBeforeEndOfBuffer(simpleVideo, maxBufferHole) {
          return lastBufferedTime(simpleVideo, maxBufferHole) - simpleVideo.getCurrentTime();
        };

      /***/
    },

    /***/ 336: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ setup: () => /* binding */ setup,
        /* harmony export */ teardown: () => /* binding */ teardown,
        /* harmony export */
      });
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1);
      var Obj = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/obj'),
        _W$lib =
          wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/event_loop'),
        globalEventLoop = _W$lib.globalEventLoop,
        DEFAULT_EVENT_LOOP_DURATION = 300,
        getEventLoopDuration = function getEventLoopDuration(simpleVideo) {
          var attrs = simpleVideo.attributes,
            baseEventLoopDuration =
              null == attrs.eventLoopDuration
                ? DEFAULT_EVENT_LOOP_DURATION
                : attrs.eventLoopDuration;
          return baseEventLoopDuration / simpleVideo.getPlaybackRate();
        },
        setup = function setup(simpleVideo) {
          null == simpleVideo.state && (simpleVideo.state = {}),
            'playing' === simpleVideo.getPlaybackMode() && (simpleVideo.state.hasPlayed = !0),
            simpleVideo.bind('playing', function () {
              simpleVideo.state.hasPlayed = !0;
            }),
            simpleVideo.bind('waiting', function () {
              simpleVideo.state.gotWaiting = !0;
            }),
            simpleVideo.bind('loadedmetadata', function () {
              simpleVideo.state.loadedMetadata = !0;
            }),
            Obj.assign(simpleVideo.state, {
              lastPlaybackMode: simpleVideo.getPlaybackMode(),
              lastTimePosition: simpleVideo.getCurrentTime(),
              lastEventLoopDuration: getEventLoopDuration(simpleVideo),
            });
          var eventLoopKey = ''.concat(simpleVideo.uuid, '.custom_state_and_events');
          globalEventLoop.add(eventLoopKey, getEventLoopDuration(simpleVideo), function () {
            // the interval can change if playback rate changes.
            Obj.assign(simpleVideo.state, {
              lastTimePosition: simpleVideo.getCurrentTime(),
              lastPlaybackMode: simpleVideo.getPlaybackMode(),
              lastEventLoopDuration: getEventLoopDuration(simpleVideo),
            }),
              globalEventLoop.interval(eventLoopKey, getEventLoopDuration(simpleVideo));
          });
        },
        teardown = function teardown(simpleVideo) {
          var eventLoopKey = ''.concat(simpleVideo.uuid, '.custom_state_and_events');
          globalEventLoop.remove(eventLoopKey);
        };

      /***/
    },

    /***/ 331: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ getCurrentTimeAfterCuts: () =>
          /* reexport safe */ _cutsCalc__WEBPACK_IMPORTED_MODULE_0__.getCurrentTimeAfterCuts,
        /* harmony export */ getCuts: () =>
          /* reexport safe */ _cutsCalc__WEBPACK_IMPORTED_MODULE_0__.getCuts,
        /* harmony export */ getDurationAfterCuts: () =>
          /* reexport safe */ _cutsCalc__WEBPACK_IMPORTED_MODULE_0__.getDurationAfterCuts,
        /* harmony export */ getTimeAfterCuts: () =>
          /* reexport safe */ _cutsCalc__WEBPACK_IMPORTED_MODULE_0__.getTimeAfterCuts,
        /* harmony export */ getTimeBeforeCuts: () =>
          /* reexport safe */ _cutsCalc__WEBPACK_IMPORTED_MODULE_0__.getTimeBeforeCuts,
        /* harmony export */ trimStartFromCuts: () => /* binding */ trimStartFromCuts,
        /* harmony export */ trimEndFromCuts: () => /* binding */ trimEndFromCuts,
        /* harmony export */ getTrim: () => /* binding */ getTrim,
        /* harmony export */ setCuts: () => /* binding */ setCuts,
        /* harmony export */ enforceCuts: () => /* binding */ enforceCuts,
        /* harmony export */ teardownCuts: () => /* binding */ teardownCuts,
        /* harmony export */ enforceCutsNow: () => /* binding */ enforceCutsNow,
        /* harmony export */ setTrim: () => /* binding */ setTrim,
        /* harmony export */ getEffectiveEnd: () => /* binding */ getEffectiveEnd,
        /* harmony export */
      });
      /* harmony import */ var _cutsCalc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(332);
      /* harmony import */ var _seeking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(328);
      var trimStartFromCuts = function trimStartFromCuts(simpleVideo) {
        var cuts = (0, _cutsCalc__WEBPACK_IMPORTED_MODULE_0__.getCuts)(simpleVideo);
        return 1 > cuts.length || 0 < cuts[0].start ? 0 : cuts[0].end;
      };
      var trimEndFromCuts = function trimEndFromCuts(simpleVideo) {
        var cuts = (0, _cutsCalc__WEBPACK_IMPORTED_MODULE_0__.getCuts)(simpleVideo),
          uncutDuration = (0, _cutsCalc__WEBPACK_IMPORTED_MODULE_0__.getDurationBeforeCuts)(
            simpleVideo
          );
        return 1 > cuts.length || cuts[cuts.length - 1].end < uncutDuration
          ? -1
          : cuts[cuts.length - 1].start;
      };
      var getTrim = function getTrim(simpleVideo) {
        return { start: trimStartFromCuts(simpleVideo), end: trimEndFromCuts(simpleVideo) };
      };
      var setCuts = function setCuts(simpleVideo, cuts) {
        (simpleVideo.attributes.cuts = cuts),
          cuts !== simpleVideo._rawCuts &&
            ((simpleVideo._cuts = void 0), (simpleVideo._rawCuts = void 0)),
          enforceCuts(simpleVideo);
      };
      var rafLoop = function rafLoop(fn, rafRef) {
        return (
          rafRef || (rafRef = { current: null }),
          (rafRef.current = requestAnimationFrame(function () {
            var result = fn();
            !1 !== result && rafLoop(fn, rafRef);
          })),
          function () {
            cancelAnimationFrame(rafRef.current);
          }
        );
      };
      var enforceCuts = function enforceCuts(simpleVideo) {
        if (!simpleVideo._stopEnforcingCuts) {
          var cuts = (0, _cutsCalc__WEBPACK_IMPORTED_MODULE_0__.getCuts)(simpleVideo);
          if (0 !== cuts.length) {
            // nothing to enforce
            var startRafLoop = function startRafLoop() {
                stopRafLoop(),
                  (simpleVideo._stopEnforcingCutsViaRafLoop = rafLoop(function () {
                    if (
                      !(simpleVideo.state.seeking || simpleVideo.video.seeking) &&
                      (enforceCutsNow(simpleVideo), !simpleVideo._stopEnforcingCutsViaRafLoop)
                    )
                      return !1;
                  }));
              },
              stopRafLoop = function stopRafLoop() {
                simpleVideo._stopEnforcingCutsViaRafLoop &&
                  (simpleVideo._stopEnforcingCutsViaRafLoop(),
                  (simpleVideo._stopEnforcingCutsViaRafLoop = void 0));
              },
              unbinds = [
                simpleVideo.on('playing', startRafLoop),
                simpleVideo.on('pause', stopRafLoop),
                simpleVideo.on('ended', stopRafLoop),
                simpleVideo.on('beforeplay', stopRafLoop),
                simpleVideo.on('timeupdate', function () {
                  enforceCutsNow(simpleVideo);
                }),
              ];
            simpleVideo._stopEnforcingCuts = function () {
              stopRafLoop(),
                unbinds.forEach(function (u) {
                  return u();
                }),
                (simpleVideo._stopEnforcingCuts = void 0);
            };
          }
        }
      };
      var teardownCuts = function teardownCuts(simpleVideo) {
        simpleVideo._stopEnforcingCuts &&
          (simpleVideo._stopEnforcingCuts(), (simpleVideo._stopEnforcingCuts = void 0));
      };
      var enforceCutsNow = function enforceCutsNow(simpleVideo) {
        if ('beforeplay' !== simpleVideo.getPlaybackMode()) {
          var currentTime = simpleVideo.video.currentTime,
            cuts = (0, _cutsCalc__WEBPACK_IMPORTED_MODULE_0__.getCuts)(simpleVideo),
            currentCutIndex = -1,
            currentCut = cuts.filter(function (cut, index) {
              if (cut.start <= currentTime && currentTime < cut.end)
                return 0 > currentCutIndex && (currentCutIndex = index), cut;
            })[0],
            uncutDuration = (0, _cutsCalc__WEBPACK_IMPORTED_MODULE_0__.getDurationBeforeCuts)(
              simpleVideo
            );
          if (
            (simpleVideo.state.fakeEnded &&
              (0, _cutsCalc__WEBPACK_IMPORTED_MODULE_0__.getTimeAfterCuts)(
                simpleVideo,
                currentTime
              ) <
                (0, _cutsCalc__WEBPACK_IMPORTED_MODULE_0__.getDurationAfterCuts)(simpleVideo) -
                  0.1 &&
              (simpleVideo.state.fakeEnded = !1),
            currentCut)
          ) {
            var effectiveEnd = getEffectiveEnd(cuts, currentCutIndex);
            effectiveEnd < uncutDuration - 0.1
              ? (0, _seeking__WEBPACK_IMPORTED_MODULE_1__.seekWithoutCuts)(
                  simpleVideo,
                  effectiveEnd + 1e-6
                )
              : !simpleVideo.state.fakeEnded &&
                ((simpleVideo.state.fakeEnded = !0),
                simpleVideo.attributes.loop
                  ? (simpleVideo.trigger('ended'),
                    simpleVideo.seek(0).then(function () {
                      return simpleVideo.play();
                    }))
                  : (simpleVideo.pause(), simpleVideo.trigger('ended')));
          }
        }
      };
      var setTrim = function setTrim(simpleVideo, settings) {
        var start = settings.start,
          end = settings.end;
        null != start &&
          (0 <= start
            ? (simpleVideo.attributes.trimStart = settings.start)
            : delete simpleVideo.attributes.trimStart),
          null != end &&
            (0 <= end
              ? (simpleVideo.attributes.trimEnd = settings.end)
              : delete simpleVideo.attributes.trimEnd),
          (simpleVideo._cuts = void 0),
          enforceCutsNow(simpleVideo),
          enforceCuts(simpleVideo);
      };
      var getEffectiveEnd = function getEffectiveEnd(cuts, index) {
        if (index >= cuts.length) return -1;
        for (
          var c, lastEnd = cuts[index].end, i = index;
          i < cuts.length && ((c = cuts[i]), !(c.start > lastEnd));
          i += 1
        )
          c.start === lastEnd && (lastEnd = c.end);
        return lastEnd;
      };

      /***/
    },

    /***/ 332: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ getDurationBeforeCuts: () => /* binding */ getDurationBeforeCuts,
        /* harmony export */ getDurationAfterCuts: () => /* binding */ getDurationAfterCuts,
        /* harmony export */ getTimeBeforeCuts: () => /* binding */ getTimeBeforeCuts,
        /* harmony export */ getTimeAfterCuts: () => /* binding */ getTimeAfterCuts,
        /* harmony export */ getCurrentTimeAfterCuts: () => /* binding */ getCurrentTimeAfterCuts,
        /* harmony export */ getCuts: () => /* binding */ getCuts,
        /* harmony export */
      });
      function _toConsumableArray(arr) {
        return (
          _arrayWithoutHoles(arr) ||
          _iterableToArray(arr) ||
          _unsupportedIterableToArray(arr) ||
          _nonIterableSpread()
        );
      }
      function _nonIterableSpread() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          );
        }
      }
      function _iterableToArray(iter) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(iter))
          return Array.from(iter);
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var getDurationBeforeCuts = function getDurationBeforeCuts(simpleVideo) {
        var attrs = simpleVideo.attributes;
        if (null != attrs.duration) return attrs.duration;
        return 2 <= simpleVideo.video.readyState ? simpleVideo.video.duration : void null;
      };
      var getDurationAfterCuts = function getDurationAfterCuts(simpleVideo) {
        var cuts = getCuts(simpleVideo),
          uncutDuration = getDurationBeforeCuts(simpleVideo);
        if (1 > cuts.length) return uncutDuration;
        var duration = uncutDuration;
        return (
          cuts.forEach(function (cut) {
            duration -= cut.end - cut.start;
          }),
          duration
        );
      };
      var getTimeBeforeCuts = function getTimeBeforeCuts(simpleVideo, t) {
        var uncutDuration = getDurationBeforeCuts(simpleVideo),
          cuts = getCuts(simpleVideo),
          timeThatWasCutOut = 0,
          lastCutEnd = 0,
          expandedTime = 0;
        return (
          cuts.forEach(function (cut) {
            var lastClipLength = cut.start - lastCutEnd;
            if (((expandedTime += lastClipLength), expandedTime <= t + timeThatWasCutOut)) {
              var cutLength = cut.end - cut.start;
              (timeThatWasCutOut += cutLength), (expandedTime += cutLength);
            }
            lastCutEnd = cut.end;
          }),
          Math.min(uncutDuration, t + timeThatWasCutOut)
        );
      };
      var getTimeAfterCuts = function getTimeAfterCuts(simpleVideo, uncutCurrentTime) {
        var cuts = getCuts(simpleVideo);
        if (1 > cuts.length) return uncutCurrentTime;
        var currentTime = uncutCurrentTime;
        return (
          cuts.forEach(function (cut) {
            cut.start <= uncutCurrentTime &&
              (currentTime -= Math.min(uncutCurrentTime, cut.end) - cut.start);
          }),
          Math.max(0, currentTime)
        );
      };
      var getCurrentTimeAfterCuts = function getCurrentTimeAfterCuts(simpleVideo) {
        return getTimeAfterCuts(simpleVideo, simpleVideo.video.currentTime);
      };
      var EMPTY_ARR = Object.freeze([]);
      var getCuts = function getCuts(simpleVideo) {
        var _simpleVideo$attribut = simpleVideo.attributes,
          rawCuts = _simpleVideo$attribut.cuts,
          trimStart = _simpleVideo$attribut.trimStart,
          trimEnd = _simpleVideo$attribut.trimEnd;
        if (simpleVideo._cuts && rawCuts === simpleVideo._rawCuts) return simpleVideo._cuts;
        if (!rawCuts && null == trimStart && null == trimEnd) return EMPTY_ARR;
        (simpleVideo._rawCuts = rawCuts), (simpleVideo._cuts = normalizeCuts(simpleVideo));
        var trimSettings = {
          start: simpleVideo.attributes.trimStart,
          end: simpleVideo.attributes.trimEnd,
        };
        return (
          (simpleVideo._cuts = applyTrimToCuts(simpleVideo, trimSettings, simpleVideo._cuts)),
          Object.freeze(simpleVideo._cuts),
          simpleVideo._cuts
        );
      }; // Fill in unspecified values, make sure end > start, sort by start, and ensure
      // no overlapping cuts. These guarantees simplify our other functions.
      var normalizeCuts = function normalizeCuts(simpleVideo) {
          var uncutDuration = getDurationBeforeCuts(simpleVideo),
            _simpleVideo$attribut2 = simpleVideo.attributes,
            rawCuts = _simpleVideo$attribut2.cuts,
            trimStart = _simpleVideo$attribut2.trimStart,
            trimEnd = _simpleVideo$attribut2.trimEnd;
          if (!rawCuts) return [];
          var cuts = rawCuts
            .map(function (c) {
              var start = null == c.start ? 0 : clampCutTime(simpleVideo, c.start),
                end =
                  null != c.end && -1 !== c.end ? clampCutTime(simpleVideo, c.end) : uncutDuration;
              return end > start ? { start: start, end: end } : null;
            })
            .filter(Boolean); // support legacy trim attributes with cuts instead
          null != trimStart && cuts.push({ start: 0, end: trimStart }),
            null != trimEnd && cuts.push({ start: trimEnd, end: uncutDuration }),
            (cuts = cuts.sort(function (a, b) {
              return a.start - b.start;
            }));
          var lastCut = { start: 0, end: 0 };
          return (
            (cuts = cuts
              .map(function (cut) {
                // Since this is sorted, if the last cut both starts and ends before this
                // one ends, then it is a duplicate; it can be discarded.
                return cut.end < lastCut.end
                  ? null
                  : (cut.start < lastCut.end && (cut.start = lastCut.end), (lastCut = cut), cut); // If this cut starts before the previous one ends, adjust the start so
                // they don't overlap.
              })
              .filter(Boolean)),
            cuts
          );
        },
        applyTrimToCuts = function applyTrimToCuts(simpleVideo, settings, origCuts) {
          var cuts = _toConsumableArray(origCuts),
            uncutDuration = getDurationBeforeCuts(simpleVideo),
            start = settings.start,
            end = settings.end,
            firstCut = cuts[0],
            lastCut = cuts[cuts.length - 1],
            existingStartCut =
              firstCut && (0 === firstCut.start || 0 > firstCut.start) ? firstCut : void 0,
            existingEndCut =
              lastCut && (lastCut.end >= uncutDuration || 0 > lastCut.end) ? lastCut : void 0;
          if (null != start)
            if (0 <= start) {
              var newCut = { start: 0, end: start };
              existingStartCut ? cuts.splice(0, 1, newCut) : cuts.unshift(newCut);
            } else
              existingStartCut && // start: -1 means "no trimStart", so delete it if there is one
                cuts.shift();
          if (null != end)
            if (0 <= end) {
              var _newCut = { start: end, end: uncutDuration };
              existingEndCut ? cuts.splice(cuts.length - 1, 1, _newCut) : cuts.push(_newCut);
            } else
              existingEndCut && // end: -1 means "no trimEnd", so delete it if there is one
                cuts.pop();
          return cuts;
        },
        clampCutTime = function clampCutTime(simpleVideo, t) {
          var uncutDuration = getDurationBeforeCuts(simpleVideo);
          return Math.min(uncutDuration, Math.max(0, t));
        };

      /***/
    },

    /***/ 341: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ getDiagnosticData: () => /* binding */ getDiagnosticData,
        /* harmony export */
      });
      var safe = function safe(fn) {
        try {
          return fn();
        } catch (e) {
          return 'ERROR: '.concat(e.message);
        }
      };
      var getDiagnosticData = function getDiagnosticData(simpleVideo) {
        var result = {};
        return (
          (result.state = simpleVideo.state),
          (result.attributes = simpleVideo.attributes),
          (result.currentAsset = simpleVideo.currentAsset()),
          result.currentAsset &&
            result.currentAsset.url &&
            100 < result.currentAsset.url.length &&
            (result.currentAsset.url = ''.concat(result.currentAsset.url.substring(0, 97), '...')),
          (result.selectedAsset = simpleVideo.selectedAsset()),
          result.selectedAsset &&
            result.selectedAsset.url &&
            100 < result.selectedAsset.url.length &&
            (result.selectedAsset.url = ''.concat(
              result.selectedAsset.url.substring(0, 97),
              '...'
            )),
          (result.getState = safe(function () {
            return simpleVideo.getState();
          })),
          (result.getDuration = safe(function () {
            return simpleVideo.getDuration();
          })),
          (result.getPlaybackRate = safe(function () {
            return simpleVideo.getPlaybackRate();
          })),
          (result.getPlaybackMode = safe(function () {
            return simpleVideo.getPlaybackMode();
          })),
          (result.isSeeking = safe(function () {
            return simpleVideo.isSeeking();
          })),
          (result.getCurrentTime = safe(function () {
            return simpleVideo.getCurrentTime();
          })),
          (result.activeBufferRange = safe(function () {
            return simpleVideo.activeBufferRange();
          })),
          (result.sequentialBufferedRange = safe(function () {
            return simpleVideo.sequentialBufferedRange();
          })),
          (result.getVolume = safe(function () {
            return simpleVideo.getVolume();
          })),
          (result.timeBeforeEndOfBuffer = safe(function () {
            return simpleVideo.timeBeforeEndOfBuffer();
          })),
          (result.lastBufferedTime = safe(function () {
            return simpleVideo.lastBufferedTime();
          })),
          (result.totalBuffered = safe(function () {
            return simpleVideo.totalBuffered();
          })),
          (result.anyBuffered = safe(function () {
            return simpleVideo.anyBuffered();
          })),
          (result.getPreload = safe(function () {
            return simpleVideo.getPreload();
          })),
          (result.rawVideoProps = safe(function () {
            return rawVideoProps(simpleVideo);
          })),
          result
        );
      };
      var SERIALIZABLE_VIDEO_PROPS = [
          'autoplay',
          'controls',
          'crossOrigin',
          'currentSrc',
          'currentTime',
          'defaultMuted',
          'defaultPlaybackRate',
          'duration',
          'ended',
          'error',
          'loop',
          'muted',
          'networkState',
          'paused',
          'playbackRate',
          'preload',
          'readyState',
          'seeking',
          'src',
          'startDate',
          'volume',
        ],
        rawVideoProps = function rawVideoProps(simpleVideo) {
          for (
            var video = simpleVideo.video, result = {}, i = 0;
            i < SERIALIZABLE_VIDEO_PROPS.length;
            i++
          ) {
            var propName = SERIALIZABLE_VIDEO_PROPS[i],
              propValue = video[propName];
            result[propName] = propValue;
          }
          return result;
        };

      /***/
    },

    /***/ 339: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ fixWebkitControlsBug: () => /* binding */ fixWebkitControlsBug,
        /* harmony export */
      });
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1);
      var _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/detect'),
        cachedDetect = _W$lib.cachedDetect,
        _W$lib2 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/wlog'),
        wlog = _W$lib2.wlog,
        detect = cachedDetect(),
        logger = wlog.getPrefixedFunctions('SimpleVideo');
      var fixWebkitControlsBug = function fixWebkitControlsBug(simpleVideo) {
        var video = simpleVideo.video;
        if (detect.browser.webkit) {
          logger.info('fixWebkitControlsBug');
          var prevValue = video.getAttribute('controls');
          video.setAttribute('controls', 'controls'),
            video.removeAttribute('controls'),
            null != prevValue && video.setAttribute('controls', prevValue);
        }
      };

      /***/
    },

    /***/ 326: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ createElement: () => /* binding */ createElement,
        /* harmony export */ setupVideoElemAttributes: () => /* binding */ setupVideoElemAttributes,
        /* harmony export */ inferTypeAttribute: () => /* binding */ inferTypeAttribute,
        /* harmony export */ srcProtocolAndHost: () => /* binding */ srcProtocolAndHost,
        /* harmony export */ tinyMp4Url: () => /* binding */ tinyMp4Url,
        /* harmony export */ sumTimeRanges: () => /* binding */ sumTimeRanges,
        /* harmony export */ bufferedInfo: () => /* binding */ bufferedInfo,
        /* harmony export */ properAssetUrl: () => /* binding */ properAssetUrl,
        /* harmony export */
      });
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1);
      var _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/detect'),
        cachedDetect = _W$lib.cachedDetect,
        _W$lib2 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('player/lib/elem'),
        elemFromObject = _W$lib2.elemFromObject,
        _W$lib3 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/url'),
        Url = _W$lib3.Url,
        _W$lib4 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('player/lib/assets'),
        isBakeryUrl = _W$lib4.isBakeryUrl,
        _W$lib5 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('player/lib/hosts'),
        eV1Protocol = _W$lib5.eV1Protocol,
        eV1Host = _W$lib5.eV1Host,
        deliveryHost = _W$lib5.deliveryHost,
        detect = cachedDetect(),
        BLANK_IMAGE = ''.concat(eV1Protocol(), '//').concat(eV1Host(), '/assets/images/blank.gif');
      var createElement = function createElement(id, asset, attributes) {
        var videoObject = {
          tagName: 'video',
          id: id,
          crossorigin: 'anonymous',
          style: {
            background: 'transparent',
            display: 'block',
            height: '100%',
            maxHeight: 'none',
            maxWidth: 'none',
            position: 'static',
            visibility: 'visible',
            width: '100%',
          },
        }; // IE fails to decode the stream if the <video> element is too small.
        (detect.browser.msie || detect.trident) &&
          ((videoObject.style.minWidth = '10px'), (videoObject.style.minHeight = '10px'));
        var sourceElem = {
          tagName: 'source',
          src: properAssetUrl(asset.url),
          type: inferTypeAttribute(asset, attributes),
        };
        return (
          attributes.excludeSourceElem || (videoObject.childNodes = [sourceElem]),
          setupVideoElemAttributes(elemFromObject(videoObject), asset, attributes)
        );
      };
      var setupAttribute = function setupAttribute(videoElem, name, val) {
        null != val && !1 !== val
          ? !0 === val
            ? ((videoElem[name] = !0), videoElem.setAttribute(name, ''))
            : ((videoElem[name] = val), videoElem.setAttribute(name, val))
          : ((videoElem[name] = !1), videoElem.removeAttribute(name));
      };
      var setupVideoElemAttributes = function setupVideoElemAttributes(
        videoElem,
        asset,
        attributes
      ) {
        return (
          attributes.poster
            ? ((videoElem.poster = attributes.poster),
              videoElem.setAttribute('poster', attributes.poster))
            : ((videoElem.poster = BLANK_IMAGE), videoElem.setAttribute('poster', BLANK_IMAGE)),
          setupAttribute(videoElem, 'aria-label', 'Video'),
          setupAttribute(videoElem, 'src', properAssetUrl(asset.url)),
          setupAttribute(videoElem, 'controlslist', attributes.controlslist || 'nodownload'),
          setupAttribute(videoElem, 'playsinline', attributes.playsinline),
          setupAttribute(videoElem, 'muted', attributes.muted),
          setupAttribute(videoElem, 'loop', attributes.loop),
          setupAttribute(videoElem, 'controls', null != attributes.controls && attributes.controls),
          setupAttribute(videoElem, 'preload', attributes.preload || 'none'),
          setupAttribute(videoElem, 'type', inferTypeAttribute(asset, attributes)),
          setupAttribute(
            videoElem,
            'x-webkit-airplay',
            null == attributes.webkitAirplay ? 'allow' : attributes.webkitAirplay
          ),
          null != attributes.volume && (videoElem.volume = attributes.volume),
          attributes.disablePictureInPicture &&
            setupAttribute(
              videoElem,
              'disablePictureInPicture',
              attributes.disablePictureInPicture
            ),
          videoElem
        );
      };
      var inferTypeAttribute = function inferTypeAttribute(asset, attributes) {
        if (null != attributes.contentType) return attributes.contentType;
        var result = 'video/'.concat(asset.ext);
        return attributes.spherical && (result += ';dimension=360;'), result;
      };
      var srcProtocolAndHost = function srcProtocolAndHost(src) {
        if (isBakeryUrl(src)) {
          var srcUrl = new Url(src);
          if (srcUrl.protocol) return ''.concat(srcUrl.protocol, '//').concat(srcUrl.host);
        }
        return ''.concat(eV1Protocol(), '//').concat(deliveryHost(eV1Protocol()));
      };
      var tinyMp4Url = function tinyMp4Url(src) {
        return ''.concat(srcProtocolAndHost(src), '/tiny.mp4');
      };
      var sumTimeRanges = function sumTimeRanges(timeRanges) {
        if (null == timeRanges) return null;
        for (var sum = 0, i = 0; i < timeRanges.length; i++)
          sum += timeRanges.end(i) - timeRanges.start(i);
        return sum;
      };
      var bufferedInfo = function bufferedInfo(buffered, pos, maxHoleDuration) {
        var // bufferStart and bufferEnd are buffer boundaries around current video position
          bufferLen,
          bufferStart,
          bufferEnd,
          bufferStartNext,
          i,
          buffered2 = []; // sort on buffer.start/smaller end (IE does not always return sorted buffered range)
        // there might be some small holes between buffer time range
        // consider that holes smaller than maxHoleDuration are irrelevant and build another
        // buffer time range representations that discards those holes
        for (
          buffered.sort(function (a, b) {
            var diff = a.start - b.start;
            return diff ? diff : b.end - a.end;
          }),
            i = 0;
          i < buffered.length;
          i++
        ) {
          var buf2len = buffered2.length;
          if (buf2len) {
            var buf2end = buffered2[buf2len - 1].end; // if small hole (value between 0 or maxHoleDuration ) or overlapping (negative)
            buffered[i].start - buf2end < maxHoleDuration
              ? buffered[i].end > buf2end && (buffered2[buf2len - 1].end = buffered[i].end)
              : buffered2.push(buffered[i]);
          } // first value
          else buffered2.push(buffered[i]);
        }
        for (i = 0, bufferLen = 0, bufferStart = bufferEnd = pos; i < buffered2.length; i++) {
          var start = buffered2[i].start,
            end = buffered2[i].end; //logger.log('buf start/end:' + buffered.start(i) + '/' + buffered.end(i));
          if (pos + maxHoleDuration >= start && pos < end)
            // play position is inside this buffer TimeRange, retrieve end of buffer position and buffer length
            (bufferStart = start), (bufferEnd = end), (bufferLen = bufferEnd - pos);
          else if (pos + maxHoleDuration < start) {
            bufferStartNext = start;
            break;
          }
        }
        return { len: bufferLen, start: bufferStart, end: bufferEnd, nextStart: bufferStartNext };
      };
      var properAssetUrl = function properAssetUrl(src) {
        var ext = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 'mp4';
        return isBakeryUrl(src)
          ? /\.bin$/.test(src)
            ? src.replace(/\.bin$/, '') + '/file.'.concat(ext)
            : src
          : src;
      };

      /***/
    },

    /***/ 325: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1);
      /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(326);
      /* harmony import */ var _buffering__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(327);
      /* harmony import */ var _seeking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(328);
      /* harmony import */ var _on_ready__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(333);
      /* harmony import */ var _streams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(334);
      /* harmony import */ var _simple_methods__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(330);
      /* harmony import */ var _hacks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(339);
      /* harmony import */ var _playback_modes__WEBPACK_IMPORTED_MODULE_8__ =
        __webpack_require__(329);
      /* harmony import */ var _object_fit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(340);
      /* harmony import */ var _diagnostics__WEBPACK_IMPORTED_MODULE_10__ =
        __webpack_require__(341);
      /* harmony import */ var _initialization__WEBPACK_IMPORTED_MODULE_11__ =
        __webpack_require__(335);
      /* harmony import */ var _public_methods__WEBPACK_IMPORTED_MODULE_12__ =
        __webpack_require__(342);
      /* harmony import */ var _cuts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(331);
      /* harmony import */ var _defineEngine_js__WEBPACK_IMPORTED_MODULE_14__ =
        __webpack_require__(324);
      /* harmony import */ var _cutsCalc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(332);
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
      var _W$lib =
          wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/bindify'),
        bindify = _W$lib.bindify,
        Obj = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/obj'),
        Assets = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('player/lib/assets'),
        _W$lib2 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/seqid'),
        seqId = _W$lib2.seqId,
        Promise = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('promiscuous'),
        SimpleVideo = /*#__PURE__*/ (function () {
          function SimpleVideo(root, mediaData) {
            var attributes = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
              otherEngine = 3 < arguments.length ? arguments[3] : void 0;
            _classCallCheck(this, SimpleVideo),
              (this.uuid = seqId('wistia_simple_video_')),
              (this.root = root),
              (this.state = {}),
              _initialization__WEBPACK_IMPORTED_MODULE_11__.setupProperties(
                this,
                mediaData,
                attributes
              ),
              otherEngine
                ? _initialization__WEBPACK_IMPORTED_MODULE_11__.fromOtherEngine(this, otherEngine)
                : _initialization__WEBPACK_IMPORTED_MODULE_11__.injectVideo(this),
              _hacks__WEBPACK_IMPORTED_MODULE_7__.fixWebkitControlsBug(this),
              _initialization__WEBPACK_IMPORTED_MODULE_11__.setupBindingsAndLoops(this),
              _object_fit__WEBPACK_IMPORTED_MODULE_9__.fit(this);
          } // Returns the buffer time range which includes the playhead as an array in
          // the format `[startTime, endTime]`.
          return (
            _createClass(SimpleVideo, [
              {
                key: 'activeBufferRange',
                value: function activeBufferRange() {
                  return _buffering__WEBPACK_IMPORTED_MODULE_2__.activeBufferRange(this);
                }, // Returns true if any playback data has been successfully downloaded. Used for
                // metrics / experiments.
              },
              {
                key: 'anyBuffered',
                value: function anyBuffered() {
                  return _buffering__WEBPACK_IMPORTED_MODULE_2__.anyBuffered(this);
                }, // Takes the engine element out of fullscreen. Not necessary to use if
                // fullscreen behavior is being implemented outside the engine.
              },
              {
                key: 'cancelFullscreen',
                value: function cancelFullscreen() {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.cancelFullscreen(this);
                }, // Returns the current frame of the video in data URI format
              },
              {
                key: 'captureCurrentFrame',
                value: function captureCurrentFrame() {
                  for (
                    var _len = arguments.length, args = Array(_len), _key = 0;
                    _key < _len;
                    _key++
                  )
                    args[_key] = arguments[_key];
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.captureCurrentFrame.apply(
                    _simple_methods__WEBPACK_IMPORTED_MODULE_6__,
                    [this].concat(args)
                  );
                }, // Changes the stream quality by giving it a slug or quality level.
              },
              {
                key: 'changeQuality',
                value: function changeQuality(slug) {
                  return _streams__WEBPACK_IMPORTED_MODULE_5__.changeQuality(this, slug);
                }, // Changes the stream while maintaining the current time and playback mode.
                // Returns a promise that is resolved when the stream change is complete and
                // the previous time/playback mode is restored.
                //
                // "asset" should be an asset hash, like one in mediaData.assets.
              },
              {
                key: 'changeStream',
                value: function changeStream(asset) {
                  return _streams__WEBPACK_IMPORTED_MODULE_5__.changeStream(this, asset);
                }, // Changes the current stream without actually showing/playing it. On the
                // next play, the new stream will be used. This is used when changing video
                // qualities when the video is not playing.
              },
              {
                key: 'changeStreamWithoutLoad',
                value: function changeStreamWithoutLoad(asset) {
                  return _streams__WEBPACK_IMPORTED_MODULE_5__.changeStreamWithoutLoad(this, asset);
                }, // Changes all mediaData and attributes for the current video, while
                // maintaining the current engine instance.
                //
                // XXX: It would be better to instantiate a totally new engine every time,
                // and allow initializing from the state of another engineer. This makes
                // more sense since there's no guarantee that the new engine can properly
                // handle the mediaData/attributes being sent to it.
              },
              {
                key: 'changeVideo',
                value: function changeVideo(mediaData, attributes) {
                  return _streams__WEBPACK_IMPORTED_MODULE_5__.changeVideo(
                    this,
                    mediaData,
                    attributes
                  );
                }, // Returns the current asset being used for display; not necessarily the
                // selected asset. For example, the "Auto" asset might be selected, but this
                // could return the "540p" asset if that's what Auto has chosen.
              },
              {
                key: 'currentAsset',
                value: function currentAsset() {
                  return this._currentAsset;
                }, // XXX: This does not need to be a public method.
              },
              {
                key: 'defaultAsset',
                value: function defaultAsset() {
                  return this.selectableAssets()[0];
                }, // Clean up any asynchronous loops/timeouts, bindings, and other allocations,
                // assuming this object will be unlinked and garbage collected later.
              },
              {
                key: 'destroy',
                value: function destroy() {
                  var oldState = this.state || {};
                  (this.state = {
                    eventContext: oldState.eventContext,
                    destroyed: !0,
                    issuedPlay: oldState.issuedPlay,
                  }),
                    _initialization__WEBPACK_IMPORTED_MODULE_11__.killBindingsAndStopLoops(this),
                    (this._bindings = {});
                }, // Returns a hash of diagnostic data for debugging. Used in Problem Reports.
              },
              {
                key: 'diagnosticData',
                value: function diagnosticData() {
                  return _diagnostics__WEBPACK_IMPORTED_MODULE_10__.getDiagnosticData(this);
                },
              },
              {
                key: 'eventContext',
                value: function eventContext() {
                  return this.state.eventContext;
                }, // Resize the engine so it fits into its root DOM element. This is called on
                // demand, and usually onWidthChange/onHeightChange, to avoid expensive
                // polling.
              },
              {
                key: 'fit',
                value: function fit() {
                  return _object_fit__WEBPACK_IMPORTED_MODULE_9__.fit(this);
                },
              },
              {
                key: 'hasIssuedPlay',
                value: function hasIssuedPlay() {
                  return !!this.state.issuedPlay;
                },
              },
              {
                key: 'getAudioTracks',
                value: function getAudioTracks() {
                  return [];
                }, // Try to return the actual quality of the current stream. If no current
                // stream is set, use the selected stream. If neither is set, then what the
                // heck is going on?
              },
              {
                key: 'getCurrentQuality',
                value: function getCurrentQuality() {
                  var currentAsset = this.currentAsset();
                  if (currentAsset)
                    return Assets.numericSizeSnapped(currentAsset.width, currentAsset.height);
                  var selectedAsset = this.selectedAsset();
                  return selectedAsset
                    ? Assets.numericSizeSnapped(selectedAsset.width, selectedAsset.height)
                    : '?';
                }, // Float, returns the current playhead position of the video.
              },
              {
                key: 'getCurrentTime',
                value: function getCurrentTime() {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.getCurrentTime(this);
                },
              },
              {
                key: 'getCuts',
                value: function getCuts() {
                  return (0, _cutsCalc__WEBPACK_IMPORTED_MODULE_15__.getCuts)(this);
                }, // Float, returns the duration of the video.
              },
              {
                key: 'getDuration',
                value: function getDuration() {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.getDuration(this);
                }, // Returns a `<video>` tag, or null if not applicable. This is because sometimes
                // tools we don't have control over require an actual `<video>` element that lives
                // in the DOM. Mux uses this.
                //
                // In the short term, until all our players are powered by engines, this is also
                // helpful for compatibility. (For example, HLSVideo is initialized on a `<video>`
                // element.)
              },
              {
                key: 'getMediaElement',
                value: function getMediaElement() {
                  return this.video;
                },
              },
              {
                key: 'getMediaType',
                value: function getMediaType() {
                  return this.mediaData.mediaType;
                }, // Maps to our player API `state()` method, but I think this naming is more
                // explicit. Returns a string that may drive UI cues. Possible values:
                // beforeplay, ended, paused, playing, unknown.
              },
              {
                key: 'getPlaybackMode',
                value: function getPlaybackMode() {
                  return _playback_modes__WEBPACK_IMPORTED_MODULE_8__.getPlaybackMode(this);
                }, // Float, returns the video's playback rate multiplier. Default is 1.
              },
              {
                key: 'getPlaybackRate',
                value: function getPlaybackRate() {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.getPlaybackRate(this);
                }, // The player can pass in its preload preference, but the engine does not need to
                // respect it. This should return the real preload value, for metrics and UI
                // reporting.
              },
              {
                key: 'getPreload',
                value: function getPreload() {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.getPreload(this);
                }, // Returns the representative state of the video. This does not need to
                // contain absolutely all internal data, but should return anything that
                // could impact UI/UX decisions outside of the engine.
              },
              {
                key: 'getState',
                value: function getState() {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.getState(this);
                },
              },
              {
                key: 'getDurationBeforeCuts',
                value: function getDurationBeforeCuts() {
                  return (0, _cutsCalc__WEBPACK_IMPORTED_MODULE_15__.getDurationBeforeCuts)(this);
                },
              },
              {
                key: 'getTimeAfterCuts',
                value: function getTimeAfterCuts(t) {
                  return (0, _cutsCalc__WEBPACK_IMPORTED_MODULE_15__.getTimeAfterCuts)(this, t);
                },
              },
              {
                key: 'getTimeBeforeCuts',
                value: function getTimeBeforeCuts(t) {
                  return (0, _cutsCalc__WEBPACK_IMPORTED_MODULE_15__.getTimeBeforeCuts)(this, t);
                },
              },
              {
                key: 'getTrim',
                value: function getTrim() {
                  return (0, _cuts__WEBPACK_IMPORTED_MODULE_13__.getTrim)(this);
                }, // Float, returns the current volume.
              },
              {
                key: 'getVolume',
                value: function getVolume() {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.getVolume(this);
                }, // XXX: This returns true while the video is being changed. It is used to
                // guard against things like hls error correction while switching streams.
                // It would be better to just disable things like that temporarily while
                // switching.
              },
              {
                key: 'isChangingVideo',
                value: function isChangingVideo() {
                  return _streams__WEBPACK_IMPORTED_MODULE_5__.isChangingVideo(this);
                }, // Returns true if onEnterFullscreen() has been called.
              },
              {
                key: 'isInFullscreen',
                value: function isInFullscreen() {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.isInFullscreen(this);
                },
              },
              {
                key: 'isInitializingFromUnmuted',
                value: function isInitializingFromUnmuted() {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.isInitializingFromUnmuted(
                    this
                  );
                },
              },
              {
                key: 'isMuted',
                value: function isMuted() {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.isMuted(this);
                }, // Returns true if the video is currently seeking. This is meant as a UI clue
                // since we might also set volume to 0 during some kinds of seeks, but we
                // probably don't want to display that in the UI.
              },
              {
                key: 'isSeeking',
                value: function isSeeking() {
                  return _seeking__WEBPACK_IMPORTED_MODULE_3__.isSeeking(this);
                }, // Returns true if an element inside the engine is the source of a browser
                // event. This is usually used when you want to know if the <video> element
                // is what was clicked on to toggle play/pause, but that check breaks down
                // when you have multiple <video> elements, or a canvas, or whatever.
              },
              {
                key: 'isSourceOfBrowserEvent',
                value: function isSourceOfBrowserEvent(event) {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.isSourceOfBrowserEvent(
                    this,
                    event
                  );
                }, // XXX: Returns the last buffered time. This _should_ be the last time from
                // sequentialBufferedRange(), but it is not currently. Used for reporting.
              },
              {
                key: 'lastBufferedTime',
                value: function lastBufferedTime(maxBufferHole) {
                  return _buffering__WEBPACK_IMPORTED_MODULE_2__.lastBufferedTime(
                    this,
                    maxBufferHole
                  );
                },
              },
              {
                key: 'mute',
                value: function mute() {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.mute(this);
                }, // Notifies the engine that it has entered fullscreen mode, in case its
                // behavior should change.
              },
              {
                key: 'onEnterFullscreen',
                value: function onEnterFullscreen() {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.onEnterFullscreen(this);
                }, // Notifies the engine of a height change.
              },
              {
                key: 'onHeightChange',
                value: function onHeightChange(height) {
                  return _object_fit__WEBPACK_IMPORTED_MODULE_9__.onHeightChange(this, height);
                }, // Notifies the engine that it has left fullscreen mode.
              },
              {
                key: 'onLeaveFullscreen',
                value: function onLeaveFullscreen() {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.onLeaveFullscreen(this);
                }, // Returns a promise that resolves when the video is ready to receive
                // commands like play/pause.
                //
                // TODO: Rename this--or the other on* methods--since they are not
                // consistent. This one returns a promise and the others notify of changes.
              },
              {
                key: 'onReady',
                value: function onReady() {
                  return _on_ready__WEBPACK_IMPORTED_MODULE_4__.onReady(this);
                }, // Notifies the engine of a width change.
              },
              {
                key: 'onWidthChange',
                value: function onWidthChange(width) {
                  return _object_fit__WEBPACK_IMPORTED_MODULE_9__.onWidthChange(this, width);
                }, // Pause the video.
              },
              {
                key: 'pause',
                value: function pause() {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.pause(this);
                }, // Plays the video.
              },
              {
                key: 'play',
                value: function play(options) {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.play(this, options);
                },
              },
              {
                key: 'playType',
                value: function playType() {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.playType(this);
                }, // Puts the engine into fullscreen mode.
                // Useful when the player can't just put the engine root element into
                // fullscreen mode.
              },
              {
                key: 'requestFullscreen',
                value: function requestFullscreen() {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.requestFullscreen(this);
                }, // This is used to reset the engine state, so the "ended" state can look like
                // a "beforeplay" state. XXX: This is a weird hack. There's probably a better
                // way.
              },
              {
                key: 'reset',
                value: function reset() {
                  this.state = {};
                }, // Seeks the video to time t. Returns a promise that resolves when the seek
                // is done. This type of seek will try to deal with seek-before-play
                // scenarios too.
              },
              {
                key: 'seek',
                value: function seek(t, options) {
                  return _seeking__WEBPACK_IMPORTED_MODULE_3__.seek(this, t, options);
                }, // Seeks the video to t after it is played. Used for "lazy" seeking, like on
                // mobile or with popovers.
              },
              {
                key: 'seekOnPlay',
                value: function seekOnPlay(t) {
                  return _seeking__WEBPACK_IMPORTED_MODULE_3__.seekOnPlay(this, t);
                }, // Returns the currently selected asset. This could be something like "Auto",
                // while currentAsset would return the displayed asset, like "540p".
              },
              {
                key: 'selectedAsset',
                value: function selectedAsset() {
                  return this._currentAsset;
                }, // Returns a list of all assets that can be selected, in their preferred
                // order.
              },
              {
                key: 'selectableAssets',
                value: function selectableAssets() {
                  return this.allAssets;
                },
              },
              {
                key: 'selectableQualities',
                value: function selectableQualities() {
                  return this.selectableAssets()
                    .map(function (asset) {
                      return 'variable' === asset.width
                        ? asset.slug
                        : Assets.numericSizeSnapped(asset.width, asset.height);
                    })
                    .sort(function (a, b) {
                      return ('auto' === a ? -1 : a) - ('auto' === b ? -1 : b);
                    });
                },
              },
              {
                key: 'selectedQuality',
                value: function selectedQuality() {
                  var asset = this.selectedAsset();
                  return asset ? Assets.numericSizeSnapped(asset.width, asset.height) : '?';
                }, // Returns the buffer range which includes the current playhead, while merging
                // very close ranges into one that looks contiguous. Similar to
                // `activeBufferRange()`, but more useful for UI. This is what we used to display
                // the buffered region in the playbar. Result looks like `[startTime, endTime]`.
              },
              {
                key: 'sequentialBufferedRange',
                value: function sequentialBufferedRange() {
                  return _buffering__WEBPACK_IMPORTED_MODULE_2__.sequentialBufferedRange(this);
                }, // Assigns the given attributes to the attrs hash. It's not required, but
                // acceptable for parent engines to also call this on their child engines,
                // with the same arguments, or a subset of them. This allows certain
                // changes--for example, bandwidth samples taken outside of the engine--to
                // propagate where they need to go.
              },
              {
                key: 'setAttributes',
                value: function setAttributes(attrs) {
                  Obj.assign(this.attributes, attrs);
                }, // this will get overridden in engines that need to apply
                // additional engine-specific media data transforms
              },
              { key: 'onMediaDataChanged', value: function onMediaDataChanged() {} },
              {
                key: 'onPlayed',
                value: function onPlayed() {
                  var _this = this,
                    state = this.state;
                  return state && state.hasPlayed
                    ? Promise.resolve()
                    : new Promise(function (resolve) {
                        var onPlay = function onPlay() {
                          _this.unbind('playing', onPlay), resolve();
                        };
                        _this.bind('playing', onPlay);
                      });
                }, // Seeks the video to `t` with no guarantees. This has no return value, and
                // exists as an optimization for fast scrubbing.
              },
              {
                key: 'setCurrentTime',
                value: function setCurrentTime(t) {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.setCurrentTime(this, t);
                },
              },
              {
                key: 'setCuts',
                value: function setCuts(cuts) {
                  return (0, _cuts__WEBPACK_IMPORTED_MODULE_13__.setCuts)(this, cuts);
                }, // Sets the playback rate multiplier. No return value.
              },
              {
                key: 'setPlaybackRate',
                value: function setPlaybackRate(r) {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.setPlaybackRate(this, r);
                },
              },
              {
                key: 'setTrim',
                value: function setTrim(t) {
                  return (0, _cuts__WEBPACK_IMPORTED_MODULE_13__.setTrim)(this, t);
                }, // Sets the volume to `v`. No return value.
              },
              {
                key: 'setVolume',
                value: function setVolume(v) {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.setVolume(this, v);
                },
              },
              {
                key: 'showFirstFrame',
                value: function showFirstFrame() {
                  return _seeking__WEBPACK_IMPORTED_MODULE_3__.seek(this, 0.01);
                },
              },
              {
                key: 'canDownloadMedia',
                value: function canDownloadMedia() {
                  return !0;
                }, // Pauses the video (time does not need to be preserved) and stops
                // downloading the video stream, if applicable. We use this when removing or
                // rebuilding the player. For example, this is called when a popover is
                // closed so that the stream does not continue downloading, wasting
                // bandwidth.
              },
              {
                key: 'stopStreaming',
                value: function stopStreaming() {
                  return _streams__WEBPACK_IMPORTED_MODULE_5__.stopStreaming(this);
                }, // Returns how much time is left before the end of the buffer. For example,
                // if the playhead is at second 6 and the last buffered time is 9 seconds,
                // this would return 3. Used by our "cautiously optimistic streaming" HLS
                // algorithm.
              },
              {
                key: 'timeBeforeEndOfBuffer',
                value: function timeBeforeEndOfBuffer(maxBufferHole) {
                  return _buffering__WEBPACK_IMPORTED_MODULE_2__.timeBeforeEndOfBuffer(
                    this,
                    maxBufferHole
                  );
                }, // Returns the total seconds buffered, ignoring any buffer gaps. So if
                // seconds 0-5 and 8-12 are buffered, this would return 9.
              },
              {
                key: 'totalBuffered',
                value: function totalBuffered() {
                  return _buffering__WEBPACK_IMPORTED_MODULE_2__.totalBuffered(this);
                }, // Returns the total seconds played.
              },
              {
                key: 'totalPlayed',
                value: function totalPlayed() {
                  return _helpers__WEBPACK_IMPORTED_MODULE_1__.sumTimeRanges(this.video.played);
                },
              },
              {
                key: 'unmute',
                value: function unmute() {
                  return _simple_methods__WEBPACK_IMPORTED_MODULE_6__.unmute(this);
                }, // should be overridden in engines that need to change the startPosition time
                // for the video
              },
              { key: 'updateStartPosition', value: function updateStartPosition() {} },
            ]),
            SimpleVideo
          );
        })();
      bindify(SimpleVideo.prototype),
        (SimpleVideo.delegatePublicMethods =
          _public_methods__WEBPACK_IMPORTED_MODULE_12__.delegatePublicMethods),
        (SimpleVideo.PUBLIC_METHODS = _public_methods__WEBPACK_IMPORTED_MODULE_12__.PUBLIC_METHODS),
        (SimpleVideo.mediaDataWithAssets = function (mediaData, assets) {
          var result = Obj.clone(mediaData);
          return (result.assets = Obj.clone(assets)), result;
        }),
        (0, _defineEngine_js__WEBPACK_IMPORTED_MODULE_14__.default)('SimpleVideo', SimpleVideo),
        wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.define(
          'player/engines/simple_video/index.js',
          SimpleVideo
        );
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = SimpleVideo;

      /***/
    },

    /***/ 335: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ setupProperties: () => /* binding */ setupProperties,
        /* harmony export */ injectVideo: () => /* binding */ injectVideo,
        /* harmony export */ fromOtherEngine: () => /* binding */ fromOtherEngine,
        /* harmony export */ setupBindingsAndLoops: () => /* binding */ setupBindingsAndLoops,
        /* harmony export */ killBindingsAndStopLoops: () => /* binding */ killBindingsAndStopLoops,
        /* harmony export */
      });
      /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
      /* harmony import */ var _custom_state_tracking__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(336);
      /* harmony import */ var _waiting_events__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(337);
      /* harmony import */ var _relay_events__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(338);
      /* harmony import */ var _cuts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(331);
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(1);
      var _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_5__.default.lib('player/lib/elem'),
        elemAppend = _W$lib.elemAppend;
      var setupProperties = function setupProperties(simpleVideo, mediaData, attributes) {
        var allAssets = mediaData.assets;
        0 === allAssets.length && (allAssets = [{}]),
          (simpleVideo.mediaData = mediaData),
          (simpleVideo.allAssets = allAssets),
          (simpleVideo.attributes = attributes);
      };
      var injectVideo = function injectVideo(simpleVideo) {
        // Chrome fires the loadstart callback synchronously when appended to the
        // DOM, so we'll miss it unless we seed it here.
        (simpleVideo._currentAsset = simpleVideo.defaultAsset()),
          (simpleVideo.video = _helpers__WEBPACK_IMPORTED_MODULE_0__.createElement(
            simpleVideo.uuid,
            simpleVideo._currentAsset,
            simpleVideo.attributes
          )),
          simpleVideo.onReady(),
          elemAppend(simpleVideo.root, simpleVideo.video);
      };
      var fromOtherEngine = function fromOtherEngine(simpleVideo, otherEngine) {
        var wasMuted = otherEngine.isMuted(),
          issuedPlay = otherEngine.hasIssuedPlay();
        'Audio' === otherEngine.mediaData.mediaType
          ? injectVideo(simpleVideo)
          : (simpleVideo.video = otherEngine.getMediaElement()),
          simpleVideo.onReady(),
          simpleVideo.bind('loadstart', function () {
            return (
              setTimeout(function () {
                simpleVideo.state.isInitializingFromOtherEngine = !1;
              }, 0),
              simpleVideo.unbind
            );
          }),
          _helpers__WEBPACK_IMPORTED_MODULE_0__.setupVideoElemAttributes(
            simpleVideo.video,
            simpleVideo.defaultAsset(),
            simpleVideo.attributes
          ),
          (simpleVideo.state.eventContext = otherEngine.eventContext()),
          simpleVideo.root.appendChild(simpleVideo.video),
          (simpleVideo._currentAsset = simpleVideo.defaultAsset()),
          simpleVideo.changeStreamWithoutLoad(simpleVideo.defaultAsset()),
          (simpleVideo.state.isInitializingFromOtherEngine = !0),
          (simpleVideo.state.otherEngineWasMuted = wasMuted),
          (simpleVideo.state.otherEnginePlayed = issuedPlay),
          simpleVideo.video.load();
      };
      var setupBindingsAndLoops = function setupBindingsAndLoops(simpleVideo) {
        // it's important for this to go last because it sets values like
        // `lastTimePosition` based on the current values in the global event loop.
        // Other functions that depend on those values from the previous run (like
        // WaitingEvents) should run before it.
        _waiting_events__WEBPACK_IMPORTED_MODULE_2__.setup(simpleVideo),
          (0, _cuts__WEBPACK_IMPORTED_MODULE_4__.enforceCuts)(simpleVideo),
          _relay_events__WEBPACK_IMPORTED_MODULE_3__.setup(simpleVideo),
          _custom_state_tracking__WEBPACK_IMPORTED_MODULE_1__.setup(simpleVideo);
      };
      var killBindingsAndStopLoops = function killBindingsAndStopLoops(simpleVideo) {
        _relay_events__WEBPACK_IMPORTED_MODULE_3__.teardown(simpleVideo),
          (0, _cuts__WEBPACK_IMPORTED_MODULE_4__.teardownCuts)(simpleVideo),
          _custom_state_tracking__WEBPACK_IMPORTED_MODULE_1__.teardown(simpleVideo),
          _waiting_events__WEBPACK_IMPORTED_MODULE_2__.teardown(simpleVideo);
      };

      /***/
    },

    /***/ 340: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ onWidthChange: () => /* binding */ onWidthChange,
        /* harmony export */ onHeightChange: () => /* binding */ onHeightChange,
        /* harmony export */ fit: () => /* binding */ fit,
        /* harmony export */
      });
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1);
      var _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('player/lib/elem'),
        elemStyle = _W$lib.elemStyle,
        elemWidth = _W$lib.elemWidth,
        elemHeight = _W$lib.elemHeight,
        Assets = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('player/lib/assets'),
        _W$lib2 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/detect'),
        cachedDetect = _W$lib2.cachedDetect,
        detect = cachedDetect(),
        onWidthChange = function onWidthChange(simpleVideo, width) {
          return simpleVideo.setAttributes({ width: width }), fit(simpleVideo);
        },
        onHeightChange = function onHeightChange(simpleVideo, height) {
          return simpleVideo.setAttributes({ height: height }), fit(simpleVideo);
        },
        CONTAIN = 'contain',
        COVER = 'cover',
        FILL = 'fill',
        fit = function fit(simpleVideo) {
          var fitStrategy = simpleVideo.attributes.fitStrategy || getDefaultStrategy(simpleVideo);
          return fitStrategy === CONTAIN
            ? contain(simpleVideo)
            : fitStrategy === COVER
            ? cover(simpleVideo)
            : fitStrategy === FILL
            ? fill(simpleVideo)
            : contain(simpleVideo);
        },
        getDefaultStrategy = function getDefaultStrategy(simpleVideo) {
          var actualHeight = simpleVideo.attributes.height,
            actualWidth = simpleVideo.attributes.width,
            originalAspect = Assets.originalAspect(simpleVideo.allAssets),
            expectedWidth = actualHeight * originalAspect,
            expectedHeight = 2 * Math.floor(actualWidth / originalAspect / 2),
            heightDiff = Math.abs(expectedHeight - actualHeight),
            widthDiff = Math.abs(expectedWidth - actualWidth),
            firefox36Plus =
              detect.firefox && detect.browser.mozilla && 36 <= detect.browser.version;
          return detect.browser.webkit || firefox36Plus
            ? 0 < heightDiff && 10 >= heightDiff && 0 < widthDiff && 10 >= widthDiff
              ? FILL
              : CONTAIN
            : CONTAIN;
        },
        cover = function cover(simpleVideo) {
          var video = simpleVideo.video,
            mediaAspect = Assets.videoAspect(simpleVideo.allAssets),
            rootWidth = elemWidth(simpleVideo.root),
            rootHeight = elemHeight(simpleVideo.root),
            browserAspect = rootWidth / rootHeight;
          detect.trident || detect.edge || detect.browser.msie
            ? browserAspect <= mediaAspect
              ? elemStyle(video, {
                  height: '100%',
                  left: '50%',
                  objectFit: 'contain',
                  position: 'relative',
                  top: '50%',
                  transform: 'translate(-50%,-50%)',
                  width: '1920px',
                })
              : elemStyle(video, {
                  height: '1088px',
                  left: '50%',
                  objectFit: 'contain',
                  position: 'relative',
                  top: '50%',
                  transform: 'translate(-50%,-50%)',
                  width: '100%',
                })
            : elemStyle(video, { objectFit: 'cover' });
        },
        contain = function contain(simpleVideo) {
          var video = simpleVideo.video;
          elemStyle(video, { objectFit: 'contain', height: '100%', width: '100%' });
        },
        fill = function fill(simpleVideo) {
          var video = simpleVideo.video;
          elemStyle(video, { objectFit: 'fill', height: '100%', width: '100%' });
        };

      /***/
    },

    /***/ 333: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ onReady: () => /* binding */ onReady,
        /* harmony export */
      });
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1);
      var Promise = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('promiscuous'),
        _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/wlog'),
        wlog = _W$lib.wlog,
        logger = wlog.getPrefixedFunctions('SimpleVideo'),
        onReady = function onReady(simpleVideo) {
          var video = simpleVideo.video;
          null == simpleVideo.state && (simpleVideo.state = {});
          var state = simpleVideo.state;
          return state.onReadyPromise
            ? state.onReadyPromise
            : ((state.onReadyPromise = new Promise(function (resolve) {
                if (state.hasBeenReady) resolve();
                else if (2 <= video.readyState)
                  logger.info('ready readyState', video.src, video.readyState),
                    (state.hasBeenReady = !0),
                    resolve();
                else {
                  // The video will respond to @play() immediately after loadstart fires.
                  // Otherwise it'll be ignored or error out.
                  var onLoadStart = function onLoadStart() {
                    logger.info('ready loadstart'), (state.hasBeenReady = !0), resolve();
                  };
                  simpleVideo.bind('loadstart', onLoadStart);
                }
              })),
              state.onReadyPromise);
        };

      /***/
    },

    /***/ 329: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ BEFORE_PLAY: () => /* binding */ BEFORE_PLAY,
        /* harmony export */ ENDED: () => /* binding */ ENDED,
        /* harmony export */ PAUSED: () => /* binding */ PAUSED,
        /* harmony export */ PLAYING: () => /* binding */ PLAYING,
        /* harmony export */ UNKNOWN: () => /* binding */ UNKNOWN,
        /* harmony export */ getPlaybackMode: () => /* binding */ getPlaybackMode,
        /* harmony export */
      });
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1);
      var _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/wlog'),
        wlog = _W$lib.wlog,
        logger = wlog.getPrefixedFunctions('SimpleVideo');
      var BEFORE_PLAY = 'beforeplay';
      var ENDED = 'ended';
      var PAUSED = 'paused';
      var PLAYING = 'playing';
      var UNKNOWN = 'unknown';
      var getPlaybackMode = function getPlaybackMode(simpleVideo) {
        var video = simpleVideo.video;
        try {
          return simpleVideo.state.hasPlayed
            ? simpleVideo.state.fakeEnded || video.ended
              ? ENDED
              : video.paused
              ? PAUSED
              : PLAYING
            : BEFORE_PLAY;
        } catch (e) {
          return logger.warn(e), UNKNOWN;
        }
      };

      /***/
    },

    /***/ 338: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ setup: () => /* binding */ setup,
        /* harmony export */ teardown: () => /* binding */ teardown,
        /* harmony export */
      });
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1);
      var _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('player/lib/elem'),
        elemBind = _W$lib.elemBind,
        elemUnbind = _W$lib.elemUnbind,
        VIDEO_DOM_EVENTS = [
          'beforeplay',
          'ended',
          'error',
          'loadeddata',
          'loadedmetadata',
          'loadstart',
          'pause',
          'playing',
          'progress',
          'ratechange',
          'seeked',
          'volumechange',
          'timeupdate',
          'waiting',
          'webkitbeginfullscreen',
          'webkitendfullscreen',
          'webkitplaybacktargetavailabilitychanged',
        ],
        setup = function setup(simpleVideo) {
          for (var eventType, i = 0; i < VIDEO_DOM_EVENTS.length; i++)
            (eventType = VIDEO_DOM_EVENTS[i]),
              (function (video, eventType) {
                var fnKey = '_marshalEvent_'.concat(eventType);
                (simpleVideo[fnKey] =
                  simpleVideo[fnKey] ||
                  function (event) {
                    null == simpleVideo.state && (simpleVideo.state = {}),
                      ('playing' === eventType && ('playing' !== eventType || video.paused)) ||
                        ((simpleVideo.state.eventContext = event),
                        simpleVideo.trigger(eventType, event),
                        (simpleVideo.state.eventContext = null));
                  }),
                  elemBind(video, eventType, simpleVideo[fnKey]);
              })(simpleVideo.video, eventType);
        },
        teardown = function teardown(simpleVideo) {
          for (var i = 0; i < VIDEO_DOM_EVENTS.length; i++) {
            var eventType = VIDEO_DOM_EVENTS[i],
              fnKey = '_marshalEvent_'.concat(eventType);
            elemUnbind(simpleVideo.video, eventType, simpleVideo[fnKey]);
          }
        };

      /***/
    },

    /***/ 328: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ seek: () => /* binding */ seek,
        /* harmony export */ seekWithoutCuts: () => /* binding */ seekWithoutCuts,
        /* harmony export */ seekOnPlay: () => /* binding */ seekOnPlay,
        /* harmony export */ isSeeking: () => /* binding */ isSeeking,
        /* harmony export */
      });
      /* harmony import */ var _playback_modes__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(329);
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(1);
      /* harmony import */ var _simple_methods_js__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(330);
      /* harmony import */ var _cutsCalc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(332);
      var Promise = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__.default.lib('promiscuous'),
        _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__.default.lib('utilities/obj'),
        assign = _W$lib.assign,
        _W$lib2 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__.default.lib('player/lib/elem'),
        elemBind = _W$lib2.elemBind,
        elemUnbind = _W$lib2.elemUnbind,
        _W$lib3 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__.default.lib('utilities/wlog'),
        wlog = _W$lib3.wlog,
        logger = wlog.getPrefixedFunctions('SimpleVideo');
      var seek = function seek(simpleVideo, t, options) {
        var uncutTime = (0, _cutsCalc__WEBPACK_IMPORTED_MODULE_3__.getTimeBeforeCuts)(
          simpleVideo,
          t
        );
        return seekWithoutCuts(simpleVideo, uncutTime, options);
      };
      var seekWithoutCuts = function seekWithoutCuts(simpleVideo, t, options) {
        return (
          logger.info('seek', t),
          simpleVideo.getPlaybackMode() === _playback_modes__WEBPACK_IMPORTED_MODULE_0__.BEFORE_PLAY
            ? seekBeforePlay(simpleVideo, t, options)
            : seekNow(simpleVideo, t, options)
        );
      };
      var seekBeforePlay = function seekBeforePlay(simpleVideo, t) {
          var options = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
            video = simpleVideo.video;
          return (
            logger.info('seekBeforePlay', t),
            new Promise(function (resolve, reject) {
              logger.info('time '.concat(t, ': seek beforeplay'));
              var playingBeforeSeek = 'playing' === simpleVideo.getPlaybackMode(),
                onPlaying = function onPlaying(playType) {
                  logger.info('time '.concat(t, ': jump to time after playing')),
                    (video.currentTime = t);
                  var afterSeekActions = new Promise(function (resolveAfterSeek) {
                    playingBeforeSeek || !1 === options.pause
                      ? (logger.info('time: '.concat(t, ': play after seek')), resolveAfterSeek())
                      : (logger.info('time: '.concat(t, ': pause after seek')),
                        (0, _simple_methods_js__WEBPACK_IMPORTED_MODULE_2__.pause)(
                          simpleVideo
                        ).then(resolveAfterSeek));
                  });
                  whenDoneSeeking(simpleVideo).then(function () {
                    afterSeekActions.then(function () {
                      (video.style.visibility = 'inherit'),
                        assign(simpleVideo.state, { seeking: !1 }),
                        resolve(playType);
                    });
                  });
                };
              (video.style.visibility = 'hidden'),
                assign(simpleVideo.state, { seeking: !0 }),
                logger.info('time '.concat(t, ': start stream by calling play')),
                (0, _simple_methods_js__WEBPACK_IMPORTED_MODULE_2__.playWithoutCuts)(simpleVideo)
                  .then(onPlaying)
                  .catch(function (e) {
                    (video.style.visibility = 'inherit'),
                      assign(simpleVideo.state, { seeking: !1 }),
                      reject(e);
                  });
            })
          );
        },
        seekNow = function seekNow(simpleVideo, t) {
          return (
            logger.info('seekNow', t),
            new Promise(function (resolve) {
              logger.info('seekNow: start', t),
                (simpleVideo.video.currentTime = t),
                assign(simpleVideo.state, { seeking: !0 }),
                whenDoneSeeking(simpleVideo).then(function () {
                  assign(simpleVideo.state, { seeking: !1 }),
                    logger.info('seekNow: resolve', t),
                    resolve();
                });
            })
          );
        };
      var seekOnPlay = function seekOnPlay(simpleVideo, t) {
        return new Promise(function (resolve) {
          'playing' === simpleVideo.getPlaybackMode()
            ? seekNow(simpleVideo, t).then(resolve)
            : simpleVideo.bind('playing', function () {
                return seekNow(simpleVideo, t).then(resolve), simpleVideo.unbind;
              });
        });
      };
      var whenDoneSeeking = function whenDoneSeeking(simpleVideo) {
        var video = simpleVideo.video;
        return new Promise(function (resolve) {
          video.seeking
            ? (logger.info('waiting for seek'),
              elemBind(video, 'seeked', function () {
                return logger.info('seeked'), resolve(), elemUnbind;
              }))
            : (logger.info('no wait for seek'), resolve());
        });
      };
      var isSeeking = function isSeeking(simpleVideo) {
        var state = simpleVideo.state,
          video = simpleVideo.video;
        return !!(state.seeking || video.seeking);
      };

      /***/
    },

    /***/ 330: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ play: () => /* binding */ play,
        /* harmony export */ playWithoutCuts: () => /* binding */ playWithoutCuts,
        /* harmony export */ playType: () => /* binding */ playType,
        /* harmony export */ pause: () => /* binding */ pause,
        /* harmony export */ setCurrentTime: () => /* binding */ setCurrentTime,
        /* harmony export */ setCurrentTimeWithoutCuts: () =>
          /* binding */ setCurrentTimeWithoutCuts,
        /* harmony export */ getCurrentTime: () => /* binding */ getCurrentTime,
        /* harmony export */ getState: () => /* binding */ getState,
        /* harmony export */ setVolume: () => /* binding */ setVolume,
        /* harmony export */ getVolume: () => /* binding */ getVolume,
        /* harmony export */ supportsPlaybackRate: () => /* binding */ supportsPlaybackRate,
        /* harmony export */ setPlaybackRate: () => /* binding */ setPlaybackRate,
        /* harmony export */ getPlaybackRate: () => /* binding */ getPlaybackRate,
        /* harmony export */ getDuration: () => /* binding */ getDuration,
        /* harmony export */ isSourceOfBrowserEvent: () => /* binding */ isSourceOfBrowserEvent,
        /* harmony export */ isMuted: () => /* binding */ isMuted,
        /* harmony export */ getPreload: () => /* binding */ getPreload,
        /* harmony export */ mute: () => /* binding */ mute,
        /* harmony export */ unmute: () => /* binding */ unmute,
        /* harmony export */ onEnterFullscreen: () => /* binding */ onEnterFullscreen,
        /* harmony export */ onLeaveFullscreen: () => /* binding */ onLeaveFullscreen,
        /* harmony export */ isInitializingFromUnmuted: () =>
          /* binding */ isInitializingFromUnmuted,
        /* harmony export */ isInFullscreen: () => /* binding */ isInFullscreen,
        /* harmony export */ onWidthChange: () => /* binding */ onWidthChange,
        /* harmony export */ onHeightChange: () => /* binding */ onHeightChange,
        /* harmony export */ requestFullscreen: () => /* binding */ requestFullscreen,
        /* harmony export */ cancelFullscreen: () => /* binding */ cancelFullscreen,
        /* harmony export */ captureCurrentFrame: () => /* binding */ captureCurrentFrame,
        /* harmony export */
      });
      /* harmony import */ var _cuts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(331);
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(1);
      /* harmony import */ var _cutsCalc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(332);
      var Promise = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__.default.lib('promiscuous'),
        _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__.default.lib('player/lib/elem'),
        elemUnbind = _W$lib.elemUnbind,
        safeRequestAnimationFrame = _W$lib.safeRequestAnimationFrame,
        elemRequestFullscreen = _W$lib.elemRequestFullscreen,
        elemCancelFullscreen = _W$lib.elemCancelFullscreen,
        inUserEventContext = _W$lib.inUserEventContext,
        _W$lib2 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__.default.lib('utilities/wlog'),
        wlog = _W$lib2.wlog,
        _W$lib3 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__.default.lib('utilities/detect'),
        cachedDetect = _W$lib3.cachedDetect,
        _W$lib4 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__.default.lib('utilities/obj'),
        merge = _W$lib4.merge,
        logger = wlog.getPrefixedFunctions('SimpleVideo'),
        detect = cachedDetect(),
        PLAY = 'play',
        PLAY_SILENTLY = 'play-silently',
        CANNOT_PLAY = 'cannot-play',
        providesFeedbackOnPlayFailure = function providesFeedbackOnPlayFailure() {
          return detect.chrome || detect.firefox || detect.edge || detect.trident
            ? 'probably'
            : !!(detect.safari || (detect.ios.version && 12 <= detect.ios.version)) && 'maybe';
        };
      var play = function play(simpleVideo, options) {
        var trimStart = (0, _cuts__WEBPACK_IMPORTED_MODULE_0__.trimStartFromCuts)(simpleVideo);
        return simpleVideo.state.fakeEnded || simpleVideo.video.currentTime < trimStart
          ? new Promise(function (resolve, reject) {
              simpleVideo
                .seek(0, { pause: !1 })
                .then(function (playType) {
                  playWithoutCuts(simpleVideo, merge({}, options, { playType: PLAY }))
                    .then(function () {
                      resolve(playType);
                    })
                    .catch(reject);
                })
                .catch(reject);
            })
          : playWithoutCuts(simpleVideo, options);
      };
      var playWithoutCuts = function playWithoutCuts(simpleVideo) {
        var options = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          video = simpleVideo.video,
          myPlayType = options.playType || playType(simpleVideo, options);
        return (
          null == simpleVideo.state.issuedPlay &&
            myPlayType !== CANNOT_PLAY &&
            (simpleVideo.state.issuedPlay = !0),
          new Promise(function (resolve, reject) {
            simpleVideo.state.lastPlayRejected = !1;
            var playbackMode = simpleVideo.getPlaybackMode();
            if ((logger.info('play: start', myPlayType), 'playing' === playbackMode))
              logger.info('play: already playing, resolve'), resolve(PLAY);
            else if (myPlayType === CANNOT_PLAY) reject(new Error('Cannot issue play.'));
            else {
              myPlayType === PLAY_SILENTLY && simpleVideo.mute(),
                simpleVideo.trigger('beforeplay'),
                'ended' === playbackMode && 0 < detect.ios.version && video.load();
              var playPromise = video.play();
              if (playPromise && playPromise.then && playPromise.catch)
                playPromise
                  .then(function () {
                    logger.info('play: got', myPlayType, 'resolve'), resolve(myPlayType);
                  })
                  .catch(function (e) {
                    logger.notice(e), (simpleVideo.state.lastPlayRejected = !0); // Okay, the play rejected and we didn't expect that. But if we're
                    // fine with silent autoplay, let's try that.
                    var silentAutoPlayOption =
                      null == options.silentAutoPlay
                        ? simpleVideo.attributes.silentAutoPlay
                        : options.silentAutoPlay;
                    myPlayType !== PLAY ||
                    simpleVideo.isMuted() ||
                    ('allow' !== silentAutoPlayOption && null != silentAutoPlayOption)
                      ? (logger.notice('play: rejected'), reject(e))
                      : (simpleVideo.mute(),
                        video
                          .play()
                          .then(function () {
                            logger.info('play: got silent fallback, resolve'),
                              resolve(PLAY_SILENTLY);
                          })
                          .catch(function (e) {
                            simpleVideo.unmute(), reject(e);
                          }));
                  });
              else {
                setTimeout(function () {
                  detect.ios.version &&
                    10.1 > detect.ios.version &&
                    video.paused &&
                    reject(new Error('Video still paused after play issued.'));
                }, 10); // Browsers that don't return a Promise from play() go down this route.
                var onPlaying = function onPlaying() {
                  return logger.info('play: got playing, resolve'), resolve(myPlayType), elemUnbind;
                };
                simpleVideo.bind('playing', onPlaying);
              }
            }
          })
        );
      };
      var playType = function playType(simpleVideo) {
        var options = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}; // The logic tree could be flattened a little, but is instead split by
        // depth to try and communicate different types of decisions. The levels
        // are like:
        //
        // CONTEXT
        //   PREFERENCE
        //     CAPABILITY
        //
        // So first we decide what context we're in. Many of the contexts simplify
        // the decision tree a lot--that's why it's at the root level. Then we
        // look at the preference (for example, even if the device can autoplay
        // with sound, we might want to exclude that possibility). And last, based
        // on the viewer's situation and the customer's preference, we determine
        // what will actually happen based on the browser capabilities.
        //
        if ('playing' === simpleVideo.getPlaybackMode())
          // The video is already playing, so calling play() again is fine.
          return PLAY;
        if (simpleVideo.isInitializingFromUnmuted())
          // If we're changing videos and the old video was unmuted, then this one
          // can be too.
          return PLAY;
        if (inUserEventContext())
          // the user has clicked somewhere to make this happen; we're pretty
          // much guaranteed to be able to play, whether or not it's muted.
          return PLAY; // this is playing without a user event, i.e. autoplay
        var attrs = simpleVideo.attributes,
          silentAutoPlay =
            null == options.silentAutoPlay ? attrs.silentAutoPlay : options.silentAutoPlay;
        return !0 === silentAutoPlay
          ? simpleVideo.isMuted()
            ? PLAY
            : PLAY_SILENTLY
          : !1 === silentAutoPlay
          ? PLAY
          : 'allow' === silentAutoPlay || null == silentAutoPlay
          ? providesFeedbackOnPlayFailure() || simpleVideo.isMuted()
            ? PLAY
            : PLAY_SILENTLY
          : PLAY;
      };
      var pause = function pause(simpleVideo) {
        var video = simpleVideo.video;
        return (
          logger.info('pause'),
          new Promise(function (resolve) {
            logger.info('pause: start'),
              video.pause(),
              safeRequestAnimationFrame(function () {
                logger.info('pause: resolve'), resolve();
              });
          })
        );
      };
      var setCurrentTime = function setCurrentTime(simpleVideo, t) {
        var uncutTime = (0, _cutsCalc__WEBPACK_IMPORTED_MODULE_2__.getTimeBeforeCuts)(
          simpleVideo,
          t
        );
        return setCurrentTimeWithoutCuts(simpleVideo, uncutTime);
      };
      var setCurrentTimeWithoutCuts = function setCurrentTimeWithoutCuts(simpleVideo, t) {
        logger.info('setCurrentTime', t), (simpleVideo.video.currentTime = t);
      };
      var getCurrentTime = function getCurrentTime(simpleVideo) {
        return (0, _cuts__WEBPACK_IMPORTED_MODULE_0__.getCurrentTimeAfterCuts)(simpleVideo);
      };
      var getState = function getState(simpleVideo) {
        return {
          playbackMode: simpleVideo.getPlaybackMode(),
          currentTime: simpleVideo.getCurrentTime(),
          volume: simpleVideo.getVolume(),
          playbackRate: simpleVideo.getPlaybackRate(),
        };
      };
      var setVolume = function setVolume(simpleVideo, v) {
        logger.info('setVolume', v), (simpleVideo.video.volume = v);
      };
      var getVolume = function getVolume(simpleVideo) {
        return simpleVideo.video.volume;
      };
      var supportsPlaybackRate = function supportsPlaybackRate(simpleVideo) {
        return null != simpleVideo.video.playbackRate;
      };
      var setPlaybackRate = function setPlaybackRate(simpleVideo, r) {
        logger.info('setPlaybackRate', r),
          supportsPlaybackRate(simpleVideo)
            ? (simpleVideo.video.playbackRate = r)
            : logger.info('playbackRate is not supported on', simpleVideo.video);
      };
      var getPlaybackRate = function getPlaybackRate(simpleVideo) {
        return supportsPlaybackRate(simpleVideo) ? simpleVideo.video.playbackRate : 1;
      };
      var getDuration = function getDuration(simpleVideo) {
        return (0, _cuts__WEBPACK_IMPORTED_MODULE_0__.getDurationAfterCuts)(simpleVideo);
      };
      var isSourceOfBrowserEvent = function isSourceOfBrowserEvent(simpleVideo, event) {
        return event.target == simpleVideo.video;
      };
      var isMuted = function isMuted(simpleVideo) {
        var video = simpleVideo.video;
        return !!(
          video.muted ||
          (simpleVideo.state.loadedMetadata && 0 === video.volume) || // A video might not have metadata downloaded until it has played, which
          // will cause it to report 0 audioTracks, which makes this check unreliable
          // before play. However, it's still useful to report that the video is
          // muted for some checks after play (e.g. rotate to fullscreen).
          (simpleVideo.state.hasPlayed && video.audioTracks && 0 === video.audioTracks.length)
        );
      };
      var getPreload = function getPreload(simpleVideo) {
        return simpleVideo.video.getAttribute('preload');
      };
      var mute = function mute(simpleVideo) {
        (simpleVideo.video.muted = !0), simpleVideo.video.setAttribute('muted', 'muted');
      };
      var unmute = function unmute(simpleVideo) {
        (simpleVideo.video.muted = !1), simpleVideo.video.removeAttribute('muted');
      };
      var onEnterFullscreen = function onEnterFullscreen(simpleVideo) {
        simpleVideo.state.isInFullscreen = !0;
        var backgroundColor = simpleVideo.attributes.backgroundColor || '#000';
        simpleVideo.video.style.backgroundColor = backgroundColor;
      };
      var onLeaveFullscreen = function onLeaveFullscreen(simpleVideo) {
        (simpleVideo.state.isInFullscreen = !1),
          (simpleVideo.video.style.backgroundColor = 'transparent');
      };
      var isInitializingFromUnmuted = function isInitializingFromUnmuted(simpleVideo) {
        var state = simpleVideo.state;
        return (
          state.isInitializingFromOtherEngine &&
          state.otherEnginePlayed &&
          !state.otherEngineWasMuted
        );
      };
      var isInFullscreen = function isInFullscreen(simpleVideo) {
        return !!simpleVideo.state.isInFullscreen;
      };
      var onWidthChange = function onWidthChange(_simpleVideo) {
        // do nothing
      };
      var onHeightChange = function onHeightChange(_simpleVideo) {
        // do nothing
      };
      var requestFullscreen = function requestFullscreen(simpleVideo) {
        simpleVideo.setAttributes({ fitStrategy: 'contain' }),
          simpleVideo.fit(),
          elemRequestFullscreen(simpleVideo.video);
      };
      var cancelFullscreen = function cancelFullscreen(simpleVideo) {
        simpleVideo.setAttributes({ fitStrategy: 'auto' }),
          simpleVideo.fit(),
          elemCancelFullscreen(simpleVideo.video);
      };
      var captureCurrentFrame = function captureCurrentFrame(simpleVideo) {
        var video = simpleVideo.video,
          canvas = document.createElement('canvas');
        (canvas.width = video.videoWidth),
          (canvas.height = video.videoHeight),
          canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        for (
          var _len = arguments.length, args = Array(1 < _len ? _len - 1 : 0), _key = 1;
          _key < _len;
          _key++
        )
          args[_key - 1] = arguments[_key];
        return canvas.toDataURL.apply(canvas, args);
      };

      /***/
    },

    /***/ 334: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ stopStreaming: () => /* binding */ stopStreaming,
        /* harmony export */ changeQuality: () => /* binding */ changeQuality,
        /* harmony export */ changeStreamWithoutLoad: () => /* binding */ changeStreamWithoutLoad,
        /* harmony export */ changeStream: () => /* binding */ changeStream,
        /* harmony export */ changeVideo: () => /* binding */ changeVideo,
        /* harmony export */ initAfterChangeVideo: () => /* binding */ initAfterChangeVideo,
        /* harmony export */ isChangingVideo: () => /* binding */ isChangingVideo,
        /* harmony export */ teardownBeforeChangeVideo: () =>
          /* binding */ teardownBeforeChangeVideo,
        /* harmony export */
      });
      /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
      /* harmony import */ var _initialization__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(335);
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(1);
      var Promise = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_2__.default.lib('promiscuous'),
        _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_2__.default.lib('utilities/wlog'),
        wlog = _W$lib.wlog,
        _W$lib2 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_2__.default.lib('player/lib/elem'),
        elemInDom = _W$lib2.elemInDom,
        elemBind = _W$lib2.elemBind,
        elemUnbind = _W$lib2.elemUnbind,
        Assets = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_2__.default.lib('player/lib/assets'),
        logger = wlog.getPrefixedFunctions('SimpleVideo'),
        getSources = function getSources(simpleVideo) {
          for (
            var node, video = simpleVideo.video, result = [], i = 0;
            i < video.childNodes.length;
            i++
          )
            (node = video.childNodes[i]),
              1 === node.nodeType && 'source' === node.tagName.toLowerCase() && result.push(node);
          return result;
        },
        stopStreaming = function stopStreaming(simpleVideo) {
          try {
            if (simpleVideo.state.destroyed) return;
            logger.info('stopStreaming');
            var video = simpleVideo.video;
            (video.src = ''.concat(
              _helpers__WEBPACK_IMPORTED_MODULE_0__.srcProtocolAndHost(video.getAttribute('src')),
              '/tiny.mp4'
            )),
              video.load();
          } catch (e) {
            logger.notice(e);
          }
        },
        changeQuality = function changeQuality(simpleVideo, quality, autoPlay, reload) {
          var assets = simpleVideo.selectableAssets(),
            asset = Assets.findClosestAssetByQuality(assets, quality);
          return 'beforeplay' === simpleVideo.getPlaybackMode()
            ? (changeStreamWithoutLoad(simpleVideo, asset), Promise.resolve())
            : changeStream(simpleVideo, asset, autoPlay, reload);
        },
        changeStreamWithoutLoad = function changeStreamWithoutLoad(simpleVideo, asset) {
          logger.info('changeStreamWithoutLoad', asset && asset.slug, asset);
          var video = simpleVideo.video;
          if (elemInDom(video)) {
            var src = _helpers__WEBPACK_IMPORTED_MODULE_0__.properAssetUrl(
              asset.url,
              asset.container
            );
            (simpleVideo.state = { eventContext: simpleVideo.state.eventContext }),
              (simpleVideo._currentAsset = asset),
              (video.src = src);
            var sources = getSources(simpleVideo);
            0 < sources.length && (sources[0].src = src),
              simpleVideo.trigger('stream-changed', simpleVideo._currentAsset);
          }
        },
        changeStream = function changeStream(simpleVideo, asset) {
          var autoPlay = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
            reload = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3];
          logger.info('changeStream', autoPlay, reload, asset && asset.slug, asset);
          var video = simpleVideo.video;
          return (
            (simpleVideo.asset = asset),
            new Promise(function (resolve) {
              var src = _helpers__WEBPACK_IMPORTED_MODULE_0__.properAssetUrl(
                asset.url,
                asset.container
              );
              if (!reload && src === video.getAttribute('src')) return void resolve();
              var stateBeforeSwitch = simpleVideo.getState();
              (simpleVideo.state.seeking = !0),
                elemBind(video, 'loadstart', function () {
                  return (
                    reload
                      ? ((video.style.visibility = 'visible'),
                        (simpleVideo.state.seeking = !1),
                        resolve())
                      : 2 < stateBeforeSwitch.currentTime
                      ? simpleVideo.seek(stateBeforeSwitch.currentTime).then(function () {
                          'playing' === stateBeforeSwitch.playbackMode
                            ? simpleVideo.play().then(function () {
                                (simpleVideo.state.seeking = !1),
                                  (video.style.visibility = 'visible'),
                                  resolve();
                              })
                            : simpleVideo.pause().then(function () {
                                (video.style.visibility = 'visible'),
                                  (simpleVideo.state.seeking = !1),
                                  resolve();
                              });
                        })
                      : ('playing' === stateBeforeSwitch.playbackMode && simpleVideo.play(),
                        (video.style.visibility = 'visible'),
                        (simpleVideo.state.seeking = !1),
                        resolve()),
                    simpleVideo.setPlaybackRate(stateBeforeSwitch.playbackRate),
                    elemUnbind
                  );
                }),
                (video.style.visibility = 'hidden'),
                changeStreamWithoutLoad(simpleVideo, asset, reload),
                'beforeplay' === stateBeforeSwitch.playbackMode || autoPlay || simpleVideo.play();
            })
          );
        },
        isChangingVideo = function isChangingVideo(simpleVideo) {
          return !!simpleVideo.state.isChangingVideo;
        },
        changeVideo = function changeVideo(simpleVideo, mediaData, attributes) {
          return (
            teardownBeforeChangeVideo(simpleVideo),
            (simpleVideo.state.isChangingVideo = !0),
            initAfterChangeVideo(simpleVideo, mediaData, attributes),
            new Promise(function (resolve) {
              changeStream(simpleVideo, simpleVideo.defaultAsset()).then(function () {
                (simpleVideo.state.isChangingVideo = !1), resolve();
              });
            })
          );
        },
        teardownBeforeChangeVideo = function teardownBeforeChangeVideo(simpleVideo) {
          var eventContext = simpleVideo.state.eventContext; // we preserve the event context because this is relevant to both the old
          // video and the new video. If we want to play() or something immediately
          // after replace, this needs to be accurate.
          simpleVideo.destroy(), (simpleVideo.state.eventContext = eventContext);
        },
        initAfterChangeVideo = function initAfterChangeVideo(simpleVideo, mediaData, attributes) {
          _initialization__WEBPACK_IMPORTED_MODULE_1__.setupProperties(
            simpleVideo,
            mediaData,
            attributes
          ),
            _initialization__WEBPACK_IMPORTED_MODULE_1__.setupBindingsAndLoops(
              simpleVideo,
              simpleVideo.allAssets,
              attributes
            );
        };

      /***/
    },

    /***/ 337: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ maybeTriggerWaiting: () => /* binding */ maybeTriggerWaiting,
        /* harmony export */ setup: () => /* binding */ setup,
        /* harmony export */ teardown: () => /* binding */ teardown,
        /* harmony export */
      });
      /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1);
      var Obj = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/obj'),
        _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('player/lib/elem'),
        elemBind = _W$lib.elemBind,
        elemUnbind = _W$lib.elemUnbind,
        _W$lib2 =
          wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/event_loop'),
        globalEventLoop = _W$lib2.globalEventLoop,
        DEFAULT_EVENT_LOOP_DURATION = 300,
        getEventLoopDuration = function getEventLoopDuration(simpleVideo) {
          var attrs = simpleVideo.attributes,
            baseEventLoopDuration =
              null == attrs.eventLoopDuration
                ? DEFAULT_EVENT_LOOP_DURATION
                : attrs.eventLoopDuration;
          return baseEventLoopDuration / simpleVideo.getPlaybackRate();
        },
        setup = function setup(simpleVideo) {
          null == simpleVideo.state && (simpleVideo.state = {}), (simpleVideo.state.waiting = -1);
          var eventLoopKey = ''.concat(simpleVideo.uuid, '.waiting_events');
          globalEventLoop.add(eventLoopKey, getEventLoopDuration(simpleVideo), function () {
            maybeTriggerWaiting(simpleVideo),
              globalEventLoop.interval(eventLoopKey, getEventLoopDuration(simpleVideo));
          });
        },
        teardown = function teardown(simpleVideo) {
          var eventLoopKey = ''.concat(simpleVideo.uuid, '.waiting_events');
          globalEventLoop.remove(eventLoopKey);
        },
        maybeTriggerWaiting = function maybeTriggerWaiting(simpleVideo) {
          var video = simpleVideo.video,
            state = simpleVideo.state,
            lastPlaybackMode = state.lastPlaybackMode,
            isTryingToPlay =
              (state.gotWaiting && 'beforeplay' === simpleVideo.getPlaybackMode()) ||
              'playing' === simpleVideo.getPlaybackMode(),
            eligibleToTriggerWaiting =
              'playing' === lastPlaybackMode ||
              ('beforeplay' === lastPlaybackMode && !state.lastPlayRejected),
            loopDuration = state.lastEventLoopDuration || getEventLoopDuration(simpleVideo);
          if (!(isTryingToPlay && eligibleToTriggerWaiting)) finishWaitingLoop(simpleVideo);
          // the video wants to be playing
          else if (simpleVideo.getCurrentTime() === state.lastTimePosition) {
            // but the playhead isn't moving
            var startedWaitingAt = state.startedWaitingAt;
            startedWaitingAt
              ? ((state.waiting = (new Date().getTime() - startedWaitingAt) / 1e3),
                simpleVideo.trigger('custom-waiting', state.waiting))
              : (Obj.assign(state, {
                  startedWaitingAt: new Date().getTime() - loopDuration,
                  waiting: loopDuration / 1e3,
                }),
                simpleVideo.trigger('custom-waiting', loopDuration / 1e3),
                elemBind(video, 'timeupdate', function () {
                  return finishWaitingLoop(simpleVideo), elemUnbind;
                }));
          } else finishWaitingLoop(simpleVideo);
        },
        finishWaitingLoop = function finishWaitingLoop(simpleVideo) {
          var prevWaiting = simpleVideo.state.waiting;
          Obj.assign(simpleVideo.state, { waiting: -1, startedWaitingAt: null }),
            null != prevWaiting &&
              0 <= prevWaiting &&
              simpleVideo.trigger('custom-done-waiting', prevWaiting);
        };

      /***/
    },

    /***/ 2: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(1);
    /* harmony import */ var player_engines_manual_quality_video_index_js__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(362);
    wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.define(
      'engines/manual_quality_video.js',
      player_engines_manual_quality_video_index_js__WEBPACK_IMPORTED_MODULE_1__.default
    );
  })();

  /******/
})();
