/*! For license information please see native_hls_video.js.LICENSE.txt */
(() => {
  var __webpack_modules__ = {
      34: (t) => {
        t.exports = function () {
          var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'app';
          return ''.concat(t, '.').concat('wistia.com');
        };
      },
      320: (t, e, n) => {
        'use strict';
        n.d(e, { default: () => i });
        var r = n(1);
        null == r.default.engines && (r.default.engines = {});
        const i = function (t, e) {
          r.default.engines[t] = e;
        };
      },
      347: (t, e, n) => {
        'use strict';
        n.d(e, {
          adaptiveAssetUrl: () => u,
          adaptiveAsset: () => s,
          allHlsAudioAssets: () => l,
          allMp4VideoAssets: () => c,
          anyViableAsset: () => f,
          bestAssetForCurrentSize: () => d,
          filterByQualityAndMaxWidth: () => v,
          masterM3u8DataUri: () => m,
          filterAssetsForScreencast: () => b,
          mediumQualityStartingAsset: () => w,
          rejectAudioAsset: () => _,
        });
        var r = n(346),
          i = n(48),
          a = n(11),
          o = n(38),
          u =
            (n(33),
            function (t) {
              if (t.attributes.liveMedia) return t.mediaData.liveStreamEventDetails.manifestUrl;
              var e = c(t.mediaData.assets),
                n = (0, r.filteredHlsAssets)(t, e),
                i = l(t.allAssets);
              return m({ video: n, audio: i }, t.attributes);
            }),
          s = function (t) {
            var e = u(t),
              n = h(e);
            return (n.display_name = 'Auto'), (n.slug = 'Auto'), n;
          },
          l = function (t) {
            return (0, i.filter)(t, { type: 'mp4_alternate_audio', status: i.READY });
          },
          c = function (t) {
            return (0, i.filter)(t, {
              container: 'mp4',
              status: i.READY,
              public: !0,
              metadata: function (t) {
                return Object(t).max_bitrate;
              },
              type: /\b(?!captioned_video)\S+/,
            }).sort(function (t, e) {
              return (t.metadata.max_bitrate || 0) - (e.metadata.max_bitrate || 0);
            });
          },
          f = function (t, e) {
            return (0, i.one)(e, { sortBy: 'width asc' });
          },
          d = function (t, e) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
              r = v(t, e, n);
            return r[r.length - 1];
          },
          h = function (t) {
            return {
              bitrate: 'variable',
              ext: 'm3u8',
              height: 'variable',
              public: !0,
              size: 'variable',
              type: 'hls_video',
              url: t,
              width: 'variable',
              slug: 'hls_master_m3u8_seg3s',
            };
          },
          v = function (t, e) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
              r = t.attributes,
              a = r.qualityMin,
              o = r.qualityMax,
              u = (0, i.withinQualityRange)(e, a, o);
            0 === u.length && (u = (0, i.nearestOutsideRange)(e, a, o));
            var s = Math.min(n.maxWidth || 8192, y(r.width, r.devicePixelRatio)),
              l = (0, i.filter)(u, { width: [0, s] });
            return 0 === l.length ? [u[0]] : l;
          },
          g = function (t) {
            return t.map(function (t) {
              return '#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="audio",NAME="'
                .concat(
                  t.details.languageMetadata.name,
                  '",AUTOSELECT=NO, DEFAULT=NO, CHARACTERISTICS="public.accessibility.describes-video", URI="'
                )
                .concat(t.url, '"');
            });
          },
          p = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
              n = t.video,
              r = t.audio,
              i = [];
            e.startPosition &&
              i.push('#EXT-X-START:TIME-OFFSET='.concat(e.startPosition, ',PRECISE=YES')),
              i.push(
                '#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="audio",NAME="Original",AUTOSELECT=YES, DEFAULT=YES'
              ),
              (i = i.concat(g(l(r))));
            for (var a = 0; a < n.length; a++) {
              var o = n[a],
                u = 8 * o.metadata.max_bitrate;
              i.push(
                '#EXT-X-STREAM-INF:PROGRAM-ID=1,CLOSED-CAPTIONS=NONE,AUDIO="audio",BANDWIDTH='
                  .concat(u, ',NAME=')
                  .concat(o.display_name, '\n') + o.url
              );
            }
            return '#EXTM3U\n' + i.join('\n');
          },
          m = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
              n = p(t, e);
            return 'data:application/x-mpegURL;base64,'.concat((0, o.base64Encode)(n));
          },
          y = function (t) {
            var e =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : window.devicePixelRatio || 1,
              n = 1.2 * Math.max(1.25, e),
              r = t * n;
            return r;
          },
          b = function (t, e) {
            var n = (0, a.filter)(e, function (t) {
              return 640 < t.width;
            });
            return 0 < n.length ? n : e;
          },
          w = function (t, e) {
            return d(t, e, { maxWidth: 1279 });
          },
          _ = function (t, e) {
            return (0, a.filter)(e, function (t) {
              return 'Audio' != t.display_name;
            });
          };
      },
      346: (t, e, n) => {
        'use strict';
        n.d(e, { filteredHlsAssets: () => o });
        var r = n(347),
          i = n(48),
          a = (n(11), n(98), n(344)),
          o =
            ((0, a.makeNamespace)('asset_to_level'),
            (0, a.makeNamespace)('level_to_asset'),
            function (t, e) {
              var n = e;
              (0, i.isScreencast)(t.allAssets) && (n = r.filterAssetsForScreencast(t, n)),
                0 < t.attributes.qualityMin && (n = r.rejectAudioAsset(t, n));
              var a = t.attributes,
                o = a.qualityMin,
                u = a.qualityMax,
                s = (0, i.withinQualityRange)(n, o, u);
              return (n = 0 < s.length ? s : (0, i.nearestOutsideRange)(n, o, u));
            });
      },
      358: (t, e, n) => {
        'use strict';
        n.d(e, { selectableAssets: () => u });
        var r = n(19),
          i = n(11),
          a = n(48),
          o = (0, r.cachedDetect)(),
          u = function (t) {
            var e = (0, a.filter)(t, {
              container: o.video.webm ? /webm|mp4/ : 'mp4',
              sortBy: 'width asc, bitrate desc',
              public: !0,
              status: a.READY,
            });
            return (e = (0, i.filter)(e, function (e) {
              return (
                'webm' === e.container ||
                0 ===
                  (0, i.filter)(t, function (t) {
                    return 'webm' === t.container && t.width === e.width;
                  }).length
              );
            }));
          };
      },
      357: (t, e, n) => {
        'use strict';
        n.d(e, { selectable: () => a });
        var r = n(358),
          i = n(347),
          a = function (t) {
            var e = (0, r.selectableAssets)(t.allAssets);
            return e.unshift((0, i.adaptiveAsset)(t)), e;
          };
      },
      356: (t, e, n) => {
        'use strict';
        n.d(e, { default: () => P });
        var r = n(320),
          i = n(357),
          a = n(347),
          o = n(321),
          u = n(37),
          s = n(13),
          l = n.n(s),
          c = n(98),
          f = n(19),
          d = n(1),
          h = n(15),
          v = n(9),
          g = n(48),
          p = n(11),
          m = n(41);
        function y(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function b(t) {
          for (var e, n = 1; n < arguments.length; n++)
            (e = null == arguments[n] ? {} : arguments[n]),
              n % 2
                ? y(Object(e), !0).forEach(function (n) {
                    w(t, n, e[n]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                : y(Object(e)).forEach(function (n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
                  });
          return t;
        }
        function w(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function _(t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
        }
        function k(t, e) {
          for (var n, r = 0; r < e.length; r++)
            ((n = e[r]).enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
        }
        var A = o.default.delegatePublicMethods,
          T = o.default.mediaDataWithAssets,
          S = (0, f.cachedDetect)(),
          E = (function () {
            function t(e, n) {
              var r = this,
                i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                u = 3 < arguments.length ? arguments[3] : void 0;
              if (
                (_(this, t),
                (this.uuid = (0, v.seqId)('wistia_native_hls_video_')),
                (this.root = e),
                (this.mediaData = this.prepareMp4sForHlsRepackaging(n)),
                (this.allAssets = this.mediaData.assets),
                (this.audioAssets = a.allHlsAudioAssets(this.allAssets)),
                (this.attributes = i),
                (this.unbinds = []),
                (this._currentAudioTrackId = 0),
                (this.attributes.excludeSourceElem = !0),
                (this.simpleVideo = new o.default(
                  this.root,
                  this.mediaDataForSimpleVideo(),
                  this.attributes,
                  u
                )),
                this.unbinds.push(
                  (0, h.elemBind)(this.getMediaElement(), 'loadeddata', function () {
                    r.unbinds.push(
                      (0, h.elemBind)(r.getMediaElement().audioTracks, 'change', function () {
                        r.trigger('audiostreamchange');
                      })
                    );
                  })
                ),
                !S.iphone &&
                  this.attributes.videoQuality &&
                  (0, c.parseLegacyVideoQualityWidth)(this.attributes.videoQuality, this.allAssets))
              ) {
                var s = (0, c.parseLegacyVideoQualityWidth)(
                  this.attributes.videoQuality,
                  this.allAssets
                );
                this.changeToSingleHlsStream(s);
              } else this.getMediaElement().src = a.adaptiveAssetUrl(this);
              this.attributes.liveMedia && this.pollForActiveLiveStream();
            }
            return (
              (e = t),
              (n = [
                {
                  key: 'changeAudioTrack',
                  value: function (t) {
                    var e = this,
                      n = this.getMediaElement(),
                      r = +t;
                    return new (l())(function (t) {
                      if (n.audioTracks && n.audioTracks[r] && e._currentAudioTrackId !== r) {
                        var i = e.bind('audiostreamchange', function () {
                          i(), t();
                        });
                        e.updateEnabledStateForAudioTracks(r), (e._currentAudioTrackId = r);
                      } else {
                        if (0 !== r && 'beforeplay' === e.getPlaybackMode())
                          var a = e.simpleVideo.bind('playing', function () {
                            setTimeout(function () {
                              e.updateEnabledStateForAudioTracks(e._currentAudioTrackId), a();
                            }, 100);
                          });
                        (e._currentAudioTrackId = r), e.trigger('audiostreamchange'), t();
                      }
                    });
                  },
                },
                {
                  key: 'changeQuality',
                  value: function (t) {
                    return 'auto' === t
                      ? 'beforeplay' === this.getPlaybackMode()
                        ? (this.changeStreamWithoutLoad(a.adaptiveAsset(this)), l().resolve())
                        : this.changeStream(a.adaptiveAsset(this))
                      : this.changeToSingleHlsStream(t);
                  },
                },
                {
                  key: 'changeToSingleHlsStream',
                  value: function (t) {
                    var e = a.allMp4VideoAssets(this.allAssets),
                      n = a.allHlsAudioAssets(this.allAssets),
                      r = [(0, g.findClosestAssetByQuality)(e, t)],
                      i = a.masterM3u8DataUri({ video: r, audio: n }),
                      o = b(b({}, r[0]), {}, { url: i });
                    return this.changeStream(o);
                  },
                },
                {
                  key: 'destroy',
                  value: function () {
                    return (
                      this.unbinds.map(function (t) {
                        'function' == typeof t && t();
                      }),
                      this.simpleVideo.destroy()
                    );
                  },
                },
                {
                  key: 'endOfLiveBufferTime',
                  value: function () {
                    var t = this.getMediaElement(),
                      e = t.buffered;
                    return t.buffered.end(e.length - 1);
                  },
                },
                {
                  key: 'getAudioTracks',
                  value: function () {
                    var t = this,
                      e = [];
                    if (0 === this.getMediaElement().audioTracks.length) {
                      var n = 0 === this._currentAudioTrackId,
                        r = {
                          enabled: n,
                          id: 0,
                          isSelected: n,
                          kind: 'main',
                          label: 'Off',
                          language: '',
                        };
                      e.push(r),
                        this.audioAssets.forEach(function (n, r) {
                          var i = r + 1,
                            a = i === t._currentAudioTrackId,
                            o = {
                              enabled: a,
                              id: i,
                              isSelected: a,
                              kind: 'alternative',
                              label: n.details.languageMetadata.nativeName,
                              language: n.details.languageMetadata.name || '',
                            };
                          e.push(o);
                        });
                    } else {
                      const mediaElement = this.getMediaElement();
                      const audioTracks = mediaElement.audioTracks;
                      const audioTracksLength = audioTracks.length;
                      for (var i, a = 0; a < audioTracksLength; a++) {
                        i = audioTracks[a];
                        i.isSelected = i.id == this._currentAudioTrackId;
                        e.push(i);
                      }
                      return e;
                    }
                  },
                },
                {
                  key: 'getCurrentAudioTrack',
                  value: function () {
                    for (var t = this.getAudioTracks(), e = t[0], n = 0; n < t.length; n++)
                      if (t[n].enabled) {
                        e = t[n];
                        break;
                      }
                    return e;
                  },
                },
                {
                  key: 'getCurrentAudioTrackId',
                  value: function () {
                    return +this._currentAudioTrackId;
                  },
                },
                {
                  key: 'getCurrentQuality',
                  value: function () {
                    return this.selectedQuality();
                  },
                },
                {
                  key: 'mediaDataForSimpleVideo',
                  value: function () {
                    return T(this.mediaData, this.selectableAssets());
                  },
                },
                {
                  key: 'onMediaDataChanged',
                  value: function (t) {
                    this.mediaData = this.prepareMp4sForHlsRepackaging(t);
                  },
                },
                {
                  key: 'onReady',
                  value: function () {
                    var t = this;
                    return this.attributes.liveMedia
                      ? (this.readyPromise ||
                          (this.readyPromise = this.simpleVideo.onReady().then(function () {
                            return t.activeLiveStreamPromise;
                          })),
                        this.readyPromise)
                      : this.simpleVideo.onReady();
                  },
                },
                {
                  key: 'play',
                  value: function (t) {
                    var e = this;
                    return this.simpleVideo.play(t).then(function (t) {
                      return e.attributes.liveMedia && e.setCurrentTimeToLiveEdge(), t;
                    });
                  },
                },
                {
                  key: 'pollForActiveLiveStream',
                  value: function () {
                    var t = this;
                    this.activeLiveStreamPromise ||
                      (this.activeLiveStreamPromise = new (l())(function (e, n) {
                        var r = function () {
                            setTimeout(function () {
                              i();
                            }, 1e3);
                          },
                          i = function () {
                            (0, u.xhrGet)(t.mediaData.liveStreamEventDetails.manifestUrl)
                              .then(e)
                              .catch(function (t) {
                                404 === t.status ? r() : n(t);
                              });
                          };
                        i();
                      }));
                  },
                },
                {
                  key: 'prepareMp4sForHlsRepackaging',
                  value: function (t) {
                    var e = (0, p.clone)(t);
                    return (0, m.convertMp4sToM3u8s)(e);
                  },
                },
                {
                  key: 'qualityForAsset',
                  value: function (t) {
                    return 'Auto' === t.slug
                      ? 'auto'
                      : (0, g.numericSizeSnapped)(t.width, t.height);
                  },
                },
                {
                  key: 'selectableAssets',
                  value: function () {
                    return i.selectable(this);
                  },
                },
                {
                  key: 'selectableQualities',
                  value: function () {
                    var t = this;
                    return this.selectableAssets().map(function (e) {
                      return t.qualityForAsset(e);
                    });
                  },
                },
                {
                  key: 'selectedQuality',
                  value: function () {
                    return this.qualityForAsset(this.selectedAsset());
                  },
                },
                {
                  key: 'setCurrentTimeToLiveEdge',
                  value: function () {
                    var t = this.endOfLiveBufferTime();
                    this.getMediaElement().currentTime = t;
                  },
                },
                {
                  key: 'updateEnabledStateForAudioTracks',
                  value: function (t) {
                    for (var e = this.getMediaElement(), n = 0; n < e.audioTracks.length; n++)
                      e.audioTracks[n].enabled = n === t;
                  },
                },
              ]) && k(e.prototype, n),
              r && k(e, r),
              t
            );
            var e, n, r;
          })();
        A(E.prototype, function () {
          return this.simpleVideo;
        }),
          (0, r.default)('NativeHlsVideo', E),
          d.default.define('player/engines/native_hls_video/index.js', E);
        const P = E;
      },
      338: (t, e, n) => {
        'use strict';
        n.d(e, { PUBLIC_METHODS: () => r, delegatePublicMethods: () => i });
        var r = [
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
          ],
          i = function (t, e) {
            !(function (t, e, n) {
              for (var r, i = 0; i < t.length; i++)
                (r = t[i]),
                  e[r] ||
                    (function (t) {
                      e[t] = function () {
                        var e = n.call(this);
                        return e ? e[t].apply(e, arguments) : null;
                      };
                    })(r);
            })(r, t, e);
          };
      },
      323: (t, e, n) => {
        'use strict';
        n.d(e, {
          anyBuffered: () => o,
          activeBufferRange: () => u,
          totalBuffered: () => s,
          sequentialBufferedRange: () => l,
          lastBufferedTime: () => c,
          timeBeforeEndOfBuffer: () => f,
        });
        var r = n(20),
          i = n(322),
          a = r.wlog.getPrefixedFunctions('buffering'),
          o = function (t) {
            var e = t.video;
            return 0 < e.buffered.length && 0 < e.buffered.end(0);
          },
          u = function (t) {
            for (var e = t.video, n = e.currentTime, r = 0; r < e.buffered.length; r++) {
              var i = e.buffered.start(r),
                a = e.buffered.end(r);
              if (i <= n && n < a) return [i, a];
            }
            return null;
          },
          s = function (t) {
            return i.sumTimeRanges(t.video.buffered);
          },
          l = function (t) {
            var e = t.video,
              n = e.buffered,
              r = null;
            try {
              for (var i = 0; i < n.length; i++) {
                var o = n.start(i) - 0.5,
                  u = n.end(i) + 0.5;
                if (o <= e.currentTime && e.currentTime < u) {
                  r = i;
                  break;
                }
              }
              if (null != r) {
                for (var s = r, l = r; l < n.length; l++) {
                  if (!(n.start(l) - 0.5 <= n.end(s) + 0.5)) break;
                  s = l;
                }
                return [n.start(r), n.end(s)];
              }
              return null;
            } catch (t) {
              return a.error(t), null;
            }
          },
          c = function (t, e) {
            return (function (t, e, n) {
              var r = t.video;
              if (r) {
                var a,
                  o = r.buffered,
                  u = [];
                for (a = 0; a < o.length; a++) u.push({ start: o.start(a), end: o.end(a) });
                return i.bufferedInfo(u, e, n);
              }
              return { len: 0, start: 0, end: 0, nextStart: void 0 };
            })(t, t.getCurrentTime(), e).end;
          },
          f = function (t, e) {
            return c(t, e) - t.getCurrentTime();
          };
      },
      332: (t, e, n) => {
        'use strict';
        n.d(e, { setup: () => o, teardown: () => u });
        var r = n(11),
          i = n(50),
          a = function (t) {
            var e = t.attributes;
            return (null == e.eventLoopDuration ? 300 : e.eventLoopDuration) / t.getPlaybackRate();
          },
          o = function (t) {
            null == t.state && (t.state = {}),
              'playing' === t.getPlaybackMode() && (t.state.hasPlayed = !0),
              t.bind('playing', function () {
                t.state.hasPlayed = !0;
              }),
              t.bind('waiting', function () {
                t.state.gotWaiting = !0;
              }),
              t.bind('loadedmetadata', function () {
                t.state.loadedMetadata = !0;
              }),
              (0, r.assign)(t.state, {
                lastPlaybackMode: t.getPlaybackMode(),
                lastTimePosition: t.getCurrentTime(),
                lastEventLoopDuration: a(t),
              });
            var e = ''.concat(t.uuid, '.custom_state_and_events');
            i.globalEventLoop.add(e, a(t), function () {
              (0, r.assign)(t.state, {
                lastTimePosition: t.getCurrentTime(),
                lastPlaybackMode: t.getPlaybackMode(),
                lastEventLoopDuration: a(t),
              }),
                i.globalEventLoop.interval(e, a(t));
            });
          },
          u = function (t) {
            var e = ''.concat(t.uuid, '.custom_state_and_events');
            i.globalEventLoop.remove(e);
          };
      },
      327: (t, e, n) => {
        'use strict';
        n.d(e, {
          getCurrentTimeAfterCuts: () => r.getCurrentTimeAfterCuts,
          getDurationAfterCuts: () => r.getDurationAfterCuts,
          trimStartFromCuts: () => a,
          getTrim: () => u,
          setCuts: () => s,
          enforceCuts: () => c,
          teardownCuts: () => f,
          setTrim: () => h,
        });
        var r = n(328),
          i = n(324),
          a = function (t) {
            var e = (0, r.getCuts)(t);
            return 1 > e.length || 0 < e[0].start ? 0 : e[0].end;
          },
          o = function (t) {
            var e = (0, r.getCuts)(t),
              n = (0, r.getDurationBeforeCuts)(t);
            return 1 > e.length || e[e.length - 1].end < n ? -1 : e[e.length - 1].start;
          },
          u = function (t) {
            return { start: a(t), end: o(t) };
          },
          s = function (t, e) {
            (t.attributes.cuts = e),
              e !== t._rawCuts && ((t._cuts = void 0), (t._rawCuts = void 0)),
              c(t);
          },
          l = function t(e, n) {
            return (
              n || (n = { current: null }),
              (n.current = requestAnimationFrame(function () {
                !1 !== e() && t(e, n);
              })),
              function () {
                cancelAnimationFrame(n.current);
              }
            );
          },
          c = function (t) {
            if (!t._stopEnforcingCuts && 0 !== (0, r.getCuts)(t).length) {
              var e = function () {
                  t._stopEnforcingCutsViaRafLoop &&
                    (t._stopEnforcingCutsViaRafLoop(), (t._stopEnforcingCutsViaRafLoop = void 0));
                },
                n = [
                  t.on('playing', function () {
                    e(),
                      (t._stopEnforcingCutsViaRafLoop = l(function () {
                        if (
                          !t.state.seeking &&
                          !t.video.seeking &&
                          (d(t), !t._stopEnforcingCutsViaRafLoop)
                        )
                          return !1;
                      }));
                  }),
                  t.on('pause', e),
                  t.on('ended', e),
                  t.on('beforeplay', e),
                  t.on('timeupdate', function () {
                    d(t);
                  }),
                ];
              t._stopEnforcingCuts = function () {
                e(),
                  n.forEach(function (t) {
                    return t();
                  }),
                  (t._stopEnforcingCuts = void 0);
              };
            }
          },
          f = function (t) {
            t._stopEnforcingCuts && (t._stopEnforcingCuts(), (t._stopEnforcingCuts = void 0));
          },
          d = function (t) {
            if ('beforeplay' !== t.getPlaybackMode()) {
              var e = t.video.currentTime,
                n = (0, r.getCuts)(t),
                a = -1,
                o = n.filter(function (t, n) {
                  if (t.start <= e && e < t.end) return 0 > a && (a = n), t;
                })[0],
                u = (0, r.getDurationBeforeCuts)(t);
              if (
                (t.state.fakeEnded &&
                  (0, r.getTimeAfterCuts)(t, e) < (0, r.getDurationAfterCuts)(t) - 0.1 &&
                  (t.state.fakeEnded = !1),
                o)
              ) {
                var s = v(n, a);
                s < u - 0.1
                  ? (0, i.seekWithoutCuts)(t, s + 1e-6)
                  : !t.state.fakeEnded &&
                    ((t.state.fakeEnded = !0),
                    t.attributes.loop
                      ? (t.trigger('ended'),
                        t.seek(0).then(function () {
                          return t.play();
                        }))
                      : (t.pause(), t.trigger('ended')));
              }
            }
          },
          h = function (t, e) {
            var n = e.start,
              r = e.end;
            null != n &&
              (0 <= n ? (t.attributes.trimStart = e.start) : delete t.attributes.trimStart),
              null != r && (0 <= r ? (t.attributes.trimEnd = e.end) : delete t.attributes.trimEnd),
              (t._cuts = void 0),
              d(t),
              c(t);
          },
          v = function (t, e) {
            if (e >= t.length) return -1;
            for (var n, r = t[e].end, i = e; i < t.length && !((n = t[i]).start > r); i += 1)
              n.start === r && (r = n.end);
            return r;
          };
      },
      328: (t, e, n) => {
        'use strict';
        function r(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return i(t);
            })(t) ||
            (function (t) {
              if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t);
            })(t) ||
            (function (t, e) {
              if (t) {
                if ('string' == typeof t) return i(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  'Object' === n && t.constructor && (n = t.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(t)
                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? i(t, e)
                    : void 0
                );
              }
            })(t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        }
        function i(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        n.d(e, {
          getDurationBeforeCuts: () => a,
          getDurationAfterCuts: () => o,
          getTimeBeforeCuts: () => u,
          getTimeAfterCuts: () => s,
          getCurrentTimeAfterCuts: () => l,
          getCuts: () => f,
        });
        var a = function (t) {
            var e = t.attributes;
            return null != e.duration
              ? e.duration
              : 2 <= t.video.readyState
              ? t.video.duration
              : void 0;
          },
          o = function (t) {
            var e = f(t),
              n = a(t);
            if (1 > e.length) return n;
            var r = n;
            return (
              e.forEach(function (t) {
                r -= t.end - t.start;
              }),
              r
            );
          },
          u = function (t, e) {
            var n = a(t),
              r = f(t),
              i = 0,
              o = 0,
              u = 0;
            return (
              r.forEach(function (t) {
                var n = t.start - o;
                if ((u += n) <= e + i) {
                  var r = t.end - t.start;
                  (i += r), (u += r);
                }
                o = t.end;
              }),
              Math.min(n, e + i)
            );
          },
          s = function (t, e) {
            var n = f(t);
            if (1 > n.length) return e;
            var r = e;
            return (
              n.forEach(function (t) {
                t.start <= e && (r -= Math.min(e, t.end) - t.start);
              }),
              Math.max(0, r)
            );
          },
          l = function (t) {
            return s(t, t.video.currentTime);
          },
          c = Object.freeze([]),
          f = function (t) {
            var e = t.attributes,
              n = e.cuts,
              r = e.trimStart,
              i = e.trimEnd;
            if (t._cuts && n === t._rawCuts) return t._cuts;
            if (!n && null == r && null == i) return c;
            (t._rawCuts = n), (t._cuts = d(t));
            var a = { start: t.attributes.trimStart, end: t.attributes.trimEnd };
            return (t._cuts = h(t, a, t._cuts)), Object.freeze(t._cuts), t._cuts;
          },
          d = function (t) {
            var e = a(t),
              n = t.attributes,
              r = n.cuts,
              i = n.trimStart,
              o = n.trimEnd;
            if (!r) return [];
            var u = r
              .map(function (n) {
                var r = null == n.start ? 0 : v(t, n.start),
                  i = null != n.end && -1 !== n.end ? v(t, n.end) : e;
                return i > r ? { start: r, end: i } : null;
              })
              .filter(Boolean);
            null != i && u.push({ start: 0, end: i }),
              null != o && u.push({ start: o, end: e }),
              (u = u.sort(function (t, e) {
                return t.start - e.start;
              }));
            var s = { start: 0, end: 0 };
            return (u = u
              .map(function (t) {
                return t.end < s.end ? null : (t.start < s.end && (t.start = s.end), (s = t), t);
              })
              .filter(Boolean));
          },
          h = function (t, e, n) {
            var i = r(n),
              o = a(t),
              u = e.start,
              s = e.end,
              l = i[0],
              c = i[i.length - 1],
              f = l && (0 === l.start || 0 > l.start) ? l : void 0,
              d = c && (c.end >= o || 0 > c.end) ? c : void 0;
            if (null != u)
              if (0 <= u) {
                var h = { start: 0, end: u };
                f ? i.splice(0, 1, h) : i.unshift(h);
              } else f && i.shift();
            if (null != s)
              if (0 <= s) {
                var v = { start: s, end: o };
                d ? i.splice(i.length - 1, 1, v) : i.push(v);
              } else d && i.pop();
            return i;
          },
          v = function (t, e) {
            var n = a(t);
            return Math.min(n, Math.max(0, e));
          };
      },
      337: (t, e, n) => {
        'use strict';
        n.d(e, { getDiagnosticData: () => i });
        var r = function (t) {
            try {
              return t();
            } catch (t) {
              return 'ERROR: '.concat(t.message);
            }
          },
          i = function (t) {
            var e = {};
            return (
              (e.state = t.state),
              (e.attributes = t.attributes),
              (e.currentAsset = t.currentAsset()),
              e.currentAsset &&
                e.currentAsset.url &&
                100 < e.currentAsset.url.length &&
                (e.currentAsset.url = ''.concat(e.currentAsset.url.substring(0, 97), '...')),
              (e.selectedAsset = t.selectedAsset()),
              e.selectedAsset &&
                e.selectedAsset.url &&
                100 < e.selectedAsset.url.length &&
                (e.selectedAsset.url = ''.concat(e.selectedAsset.url.substring(0, 97), '...')),
              (e.getState = r(function () {
                return t.getState();
              })),
              (e.getDuration = r(function () {
                return t.getDuration();
              })),
              (e.getPlaybackRate = r(function () {
                return t.getPlaybackRate();
              })),
              (e.getPlaybackMode = r(function () {
                return t.getPlaybackMode();
              })),
              (e.isSeeking = r(function () {
                return t.isSeeking();
              })),
              (e.getCurrentTime = r(function () {
                return t.getCurrentTime();
              })),
              (e.activeBufferRange = r(function () {
                return t.activeBufferRange();
              })),
              (e.sequentialBufferedRange = r(function () {
                return t.sequentialBufferedRange();
              })),
              (e.getVolume = r(function () {
                return t.getVolume();
              })),
              (e.timeBeforeEndOfBuffer = r(function () {
                return t.timeBeforeEndOfBuffer();
              })),
              (e.lastBufferedTime = r(function () {
                return t.lastBufferedTime();
              })),
              (e.totalBuffered = r(function () {
                return t.totalBuffered();
              })),
              (e.anyBuffered = r(function () {
                return t.anyBuffered();
              })),
              (e.getPreload = r(function () {
                return t.getPreload();
              })),
              (e.rawVideoProps = r(function () {
                return o(t);
              })),
              e
            );
          },
          a = [
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
          o = function (t) {
            for (var e = t.video, n = {}, r = 0; r < a.length; r++) {
              var i = a[r],
                o = e[i];
              n[i] = o;
            }
            return n;
          };
      },
      335: (t, e, n) => {
        'use strict';
        n.d(e, { fixWebkitControlsBug: () => u });
        var r = n(19),
          i = n(20),
          a = (0, r.cachedDetect)(),
          o = i.wlog.getPrefixedFunctions('SimpleVideo'),
          u = function (t) {
            var e = t.video;
            if (a.browser.webkit) {
              o.info('fixWebkitControlsBug');
              var n = e.getAttribute('controls');
              e.setAttribute('controls', 'controls'),
                e.removeAttribute('controls'),
                null != n && e.setAttribute('controls', n);
            }
          };
      },
      322: (t, e, n) => {
        'use strict';
        n.d(e, {
          createElement: () => c,
          setupVideoElemAttributes: () => d,
          srcProtocolAndHost: () => v,
          sumTimeRanges: () => g,
          bufferedInfo: () => p,
          properAssetUrl: () => m,
        });
        var r = n(19),
          i = n(15),
          a = n(35),
          o = n(48),
          u = n(33),
          s = (0, r.cachedDetect)(),
          l = ''
            .concat((0, u.eV1Protocol)(), '//')
            .concat((0, u.eV1Host)(), '/assets/images/blank.gif'),
          c = function (t, e, n) {
            var r = {
              tagName: 'video',
              id: t,
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
            };
            (s.browser.msie || s.trident) &&
              ((r.style.minWidth = '10px'), (r.style.minHeight = '10px'));
            var a = { tagName: 'source', src: m(e.url), type: h(e, n) };
            return n.excludeSourceElem || (r.childNodes = [a]), d((0, i.elemFromObject)(r), e, n);
          },
          f = function (t, e, n) {
            null != n && !1 !== n
              ? !0 === n
                ? ((t[e] = !0), t.setAttribute(e, ''))
                : ((t[e] = n), t.setAttribute(e, n))
              : ((t[e] = !1), t.removeAttribute(e));
          },
          d = function (t, e, n) {
            return (
              n.poster
                ? ((t.poster = n.poster), t.setAttribute('poster', n.poster))
                : ((t.poster = l), t.setAttribute('poster', l)),
              f(t, 'aria-label', 'Video'),
              f(t, 'src', m(e.url)),
              f(t, 'controlslist', n.controlslist || 'nodownload'),
              f(t, 'playsinline', n.playsinline),
              f(t, 'muted', n.muted),
              f(t, 'loop', n.loop),
              f(t, 'controls', null != n.controls && n.controls),
              f(t, 'preload', n.preload || 'none'),
              f(t, 'type', h(e, n)),
              f(t, 'x-webkit-airplay', null == n.webkitAirplay ? 'allow' : n.webkitAirplay),
              null != n.volume && (t.volume = n.volume),
              n.disablePictureInPicture &&
                f(t, 'disablePictureInPicture', n.disablePictureInPicture),
              t
            );
          },
          h = function (t, e) {
            if (null != e.contentType) return e.contentType;
            var n = 'video/'.concat(t.ext);
            return e.spherical && (n += ';dimension=360;'), n;
          },
          v = function (t) {
            if ((0, o.isBakeryUrl)(t)) {
              var e = new a.Url(t);
              if (e.protocol) return ''.concat(e.protocol, '//').concat(e.host);
            }
            return ''
              .concat((0, u.eV1Protocol)(), '//')
              .concat((0, u.deliveryHost)((0, u.eV1Protocol)()));
          },
          g = function (t) {
            if (null == t) return null;
            for (var e = 0, n = 0; n < t.length; n++) e += t.end(n) - t.start(n);
            return e;
          },
          p = function (t, e, n) {
            var r,
              i,
              a,
              o,
              u,
              s = [];
            for (
              t.sort(function (t, e) {
                var n = t.start - e.start;
                return n || e.end - t.end;
              }),
                u = 0;
              u < t.length;
              u++
            ) {
              var l = s.length;
              if (l) {
                var c = s[l - 1].end;
                t[u].start - c < n ? t[u].end > c && (s[l - 1].end = t[u].end) : s.push(t[u]);
              } else s.push(t[u]);
            }
            for (u = 0, r = 0, i = a = e; u < s.length; u++) {
              var f = s[u].start,
                d = s[u].end;
              if (e + n >= f && e < d) (i = f), (r = (a = d) - e);
              else if (e + n < f) {
                o = f;
                break;
              }
            }
            return { len: r, start: i, end: a, nextStart: o };
          },
          m = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'mp4';
            return (0, o.isBakeryUrl)(t) && /\.bin$/.test(t)
              ? t.replace(/\.bin$/, '') + '/file.'.concat(e)
              : t;
          };
      },
      321: (t, e, n) => {
        'use strict';
        n.d(e, { default: () => C });
        var r = n(1),
          i = n(322),
          a = n(323),
          o = n(324),
          u = n(329),
          s = n(330),
          l = n(326),
          c = n(335),
          f = n(325),
          d = n(336),
          h = n(337),
          v = n(331),
          g = n(338),
          p = n(327),
          m = n(320),
          y = n(328),
          b = n(23),
          w = n(11),
          _ = n(48),
          k = n(9),
          A = n(13),
          T = n.n(A);
        function S(t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
        }
        function E(t, e) {
          for (var n, r = 0; r < e.length; r++)
            ((n = e[r]).enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
        }
        var P = (function () {
          function t(e, n) {
            var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
              i = 3 < arguments.length ? arguments[3] : void 0;
            S(this, t),
              (this.uuid = (0, k.seqId)('wistia_simple_video_')),
              (this.root = e),
              (this.state = {}),
              v.setupProperties(this, n, r),
              i ? v.fromOtherEngine(this, i) : v.injectVideo(this),
              c.fixWebkitControlsBug(this),
              v.setupBindingsAndLoops(this),
              d.fit(this);
          }
          return (
            (e = t),
            (n = [
              {
                key: 'activeBufferRange',
                value: function () {
                  return a.activeBufferRange(this);
                },
              },
              {
                key: 'anyBuffered',
                value: function () {
                  return a.anyBuffered(this);
                },
              },
              {
                key: 'cancelFullscreen',
                value: function () {
                  return l.cancelFullscreen(this);
                },
              },
              {
                key: 'captureCurrentFrame',
                value: function () {
                  for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                  return l.captureCurrentFrame.apply(l, [this].concat(e));
                },
              },
              {
                key: 'changeQuality',
                value: function (t) {
                  return s.changeQuality(this, t);
                },
              },
              {
                key: 'changeStream',
                value: function (t) {
                  return s.changeStream(this, t);
                },
              },
              {
                key: 'changeStreamWithoutLoad',
                value: function (t) {
                  return s.changeStreamWithoutLoad(this, t);
                },
              },
              {
                key: 'changeVideo',
                value: function (t, e) {
                  return s.changeVideo(this, t, e);
                },
              },
              {
                key: 'currentAsset',
                value: function () {
                  return this._currentAsset;
                },
              },
              {
                key: 'defaultAsset',
                value: function () {
                  return this.selectableAssets()[0];
                },
              },
              {
                key: 'destroy',
                value: function () {
                  var t = this.state || {};
                  (this.state = {
                    eventContext: t.eventContext,
                    destroyed: !0,
                    issuedPlay: t.issuedPlay,
                  }),
                    v.killBindingsAndStopLoops(this),
                    (this._bindings = {});
                },
              },
              {
                key: 'diagnosticData',
                value: function () {
                  return h.getDiagnosticData(this);
                },
              },
              {
                key: 'eventContext',
                value: function () {
                  return this.state.eventContext;
                },
              },
              {
                key: 'fit',
                value: function () {
                  return d.fit(this);
                },
              },
              {
                key: 'hasIssuedPlay',
                value: function () {
                  return !!this.state.issuedPlay;
                },
              },
              {
                key: 'getAudioTracks',
                value: function () {
                  return [];
                },
              },
              {
                key: 'getCurrentQuality',
                value: function () {
                  var t = this.currentAsset();
                  if (t) return (0, _.numericSizeSnapped)(t.width, t.height);
                  var e = this.selectedAsset();
                  return e ? (0, _.numericSizeSnapped)(e.width, e.height) : '?';
                },
              },
              {
                key: 'getCurrentTime',
                value: function () {
                  return l.getCurrentTime(this);
                },
              },
              {
                key: 'getCuts',
                value: function () {
                  return (0, y.getCuts)(this);
                },
              },
              {
                key: 'getDuration',
                value: function () {
                  return l.getDuration(this);
                },
              },
              {
                key: 'getMediaElement',
                value: function () {
                  return this.video;
                },
              },
              {
                key: 'getMediaType',
                value: function () {
                  return this.mediaData.mediaType;
                },
              },
              {
                key: 'getPlaybackMode',
                value: function () {
                  return f.getPlaybackMode(this);
                },
              },
              {
                key: 'getPlaybackRate',
                value: function () {
                  return l.getPlaybackRate(this);
                },
              },
              {
                key: 'getPreload',
                value: function () {
                  return l.getPreload(this);
                },
              },
              {
                key: 'getState',
                value: function () {
                  return l.getState(this);
                },
              },
              {
                key: 'getDurationBeforeCuts',
                value: function () {
                  return (0, y.getDurationBeforeCuts)(this);
                },
              },
              {
                key: 'getTimeAfterCuts',
                value: function (t) {
                  return (0, y.getTimeAfterCuts)(this, t);
                },
              },
              {
                key: 'getTimeBeforeCuts',
                value: function (t) {
                  return (0, y.getTimeBeforeCuts)(this, t);
                },
              },
              {
                key: 'getTrim',
                value: function () {
                  return (0, p.getTrim)(this);
                },
              },
              {
                key: 'getVolume',
                value: function () {
                  return l.getVolume(this);
                },
              },
              {
                key: 'isChangingVideo',
                value: function () {
                  return s.isChangingVideo(this);
                },
              },
              {
                key: 'isInFullscreen',
                value: function () {
                  return l.isInFullscreen(this);
                },
              },
              {
                key: 'isInitializingFromUnmuted',
                value: function () {
                  return l.isInitializingFromUnmuted(this);
                },
              },
              {
                key: 'isMuted',
                value: function () {
                  return l.isMuted(this);
                },
              },
              {
                key: 'isSeeking',
                value: function () {
                  return o.isSeeking(this);
                },
              },
              {
                key: 'isSourceOfBrowserEvent',
                value: function (t) {
                  return l.isSourceOfBrowserEvent(this, t);
                },
              },
              {
                key: 'lastBufferedTime',
                value: function (t) {
                  return a.lastBufferedTime(this, t);
                },
              },
              {
                key: 'mute',
                value: function () {
                  return l.mute(this);
                },
              },
              {
                key: 'onEnterFullscreen',
                value: function () {
                  return l.onEnterFullscreen(this);
                },
              },
              {
                key: 'onHeightChange',
                value: function (t) {
                  return d.onHeightChange(this, t);
                },
              },
              {
                key: 'onLeaveFullscreen',
                value: function () {
                  return l.onLeaveFullscreen(this);
                },
              },
              {
                key: 'onReady',
                value: function () {
                  return u.onReady(this);
                },
              },
              {
                key: 'onWidthChange',
                value: function (t) {
                  return d.onWidthChange(this, t);
                },
              },
              {
                key: 'pause',
                value: function () {
                  return l.pause(this);
                },
              },
              {
                key: 'play',
                value: function (t) {
                  return l.play(this, t);
                },
              },
              {
                key: 'playType',
                value: function () {
                  return l.playType(this);
                },
              },
              {
                key: 'requestFullscreen',
                value: function () {
                  return l.requestFullscreen(this);
                },
              },
              {
                key: 'reset',
                value: function () {
                  this.state = {};
                },
              },
              {
                key: 'seek',
                value: function (t, e) {
                  return o.seek(this, t, e);
                },
              },
              {
                key: 'seekOnPlay',
                value: function (t) {
                  return o.seekOnPlay(this, t);
                },
              },
              {
                key: 'selectedAsset',
                value: function () {
                  return this._currentAsset;
                },
              },
              {
                key: 'selectableAssets',
                value: function () {
                  return this.allAssets;
                },
              },
              {
                key: 'selectableQualities',
                value: function () {
                  return this.selectableAssets()
                    .map(function (t) {
                      return 'variable' === t.width
                        ? t.slug
                        : (0, _.numericSizeSnapped)(t.width, t.height);
                    })
                    .sort(function (t, e) {
                      return ('auto' === t ? -1 : t) - ('auto' === e ? -1 : e);
                    });
                },
              },
              {
                key: 'selectedQuality',
                value: function () {
                  var t = this.selectedAsset();
                  return t ? (0, _.numericSizeSnapped)(t.width, t.height) : '?';
                },
              },
              {
                key: 'sequentialBufferedRange',
                value: function () {
                  return a.sequentialBufferedRange(this);
                },
              },
              {
                key: 'setAttributes',
                value: function (t) {
                  (0, w.assign)(this.attributes, t);
                },
              },
              { key: 'onMediaDataChanged', value: function () {} },
              {
                key: 'onPlayed',
                value: function () {
                  var t = this,
                    e = this.state;
                  return e && e.hasPlayed
                    ? T().resolve()
                    : new (T())(function (e) {
                        t.bind('playing', function n() {
                          t.unbind('playing', n), e();
                        });
                      });
                },
              },
              {
                key: 'setCurrentTime',
                value: function (t) {
                  return l.setCurrentTime(this, t);
                },
              },
              {
                key: 'setCuts',
                value: function (t) {
                  return (0, p.setCuts)(this, t);
                },
              },
              {
                key: 'setPlaybackRate',
                value: function (t) {
                  return l.setPlaybackRate(this, t);
                },
              },
              {
                key: 'setTrim',
                value: function (t) {
                  return (0, p.setTrim)(this, t);
                },
              },
              {
                key: 'setVolume',
                value: function (t) {
                  return l.setVolume(this, t);
                },
              },
              {
                key: 'showFirstFrame',
                value: function () {
                  return o.seek(this, 0.01);
                },
              },
              {
                key: 'canDownloadMedia',
                value: function () {
                  return !0;
                },
              },
              {
                key: 'stopStreaming',
                value: function () {
                  return s.stopStreaming(this);
                },
              },
              {
                key: 'timeBeforeEndOfBuffer',
                value: function (t) {
                  return a.timeBeforeEndOfBuffer(this, t);
                },
              },
              {
                key: 'totalBuffered',
                value: function () {
                  return a.totalBuffered(this);
                },
              },
              {
                key: 'totalPlayed',
                value: function () {
                  return i.sumTimeRanges(this.video.played);
                },
              },
              {
                key: 'unmute',
                value: function () {
                  return l.unmute(this);
                },
              },
              { key: 'updateStartPosition', value: function () {} },
            ]) && E(e.prototype, n),
            r && E(e, r),
            t
          );
          var e, n, r;
        })();
        (0, b.bindify)(P.prototype),
          (P.delegatePublicMethods = g.delegatePublicMethods),
          (P.PUBLIC_METHODS = g.PUBLIC_METHODS),
          (P.mediaDataWithAssets = function (t, e) {
            var n = (0, w.clone)(t);
            return (n.assets = (0, w.clone)(e)), n;
          }),
          (0, m.default)('SimpleVideo', P),
          r.default.define('player/engines/simple_video/index.js', P);
        const C = P;
      },
      331: (t, e, n) => {
        'use strict';
        n.d(e, {
          setupProperties: () => l,
          injectVideo: () => c,
          fromOtherEngine: () => f,
          setupBindingsAndLoops: () => d,
          killBindingsAndStopLoops: () => h,
        });
        var r = n(322),
          i = n(332),
          a = n(333),
          o = n(334),
          u = n(327),
          s = n(15),
          l = function (t, e, n) {
            var r = e.assets;
            0 === r.length && (r = [{}]), (t.mediaData = e), (t.allAssets = r), (t.attributes = n);
          },
          c = function (t) {
            (t._currentAsset = t.defaultAsset()),
              (t.video = r.createElement(t.uuid, t._currentAsset, t.attributes)),
              t.onReady(),
              (0, s.elemAppend)(t.root, t.video);
          },
          f = function (t, e) {
            var n = e.isMuted(),
              i = e.hasIssuedPlay();
            'Audio' === e.mediaData.mediaType ? c(t) : (t.video = e.getMediaElement()),
              t.onReady(),
              t.bind('loadstart', function () {
                return (
                  setTimeout(function () {
                    t.state.isInitializingFromOtherEngine = !1;
                  }, 0),
                  t.unbind
                );
              }),
              r.setupVideoElemAttributes(t.video, t.defaultAsset(), t.attributes),
              (t.state.eventContext = e.eventContext()),
              t.root.appendChild(t.video),
              (t._currentAsset = t.defaultAsset()),
              t.changeStreamWithoutLoad(t.defaultAsset()),
              (t.state.isInitializingFromOtherEngine = !0),
              (t.state.otherEngineWasMuted = n),
              (t.state.otherEnginePlayed = i),
              t.video.load();
          },
          d = function (t) {
            a.setup(t), (0, u.enforceCuts)(t), o.setup(t), i.setup(t);
          },
          h = function (t) {
            o.teardown(t), (0, u.teardownCuts)(t), i.teardown(t), a.teardown(t);
          };
      },
      336: (t, e, n) => {
        'use strict';
        n.d(e, { onWidthChange: () => o, onHeightChange: () => u, fit: () => c });
        var r = n(15),
          i = n(48),
          a = (0, n(19).cachedDetect)(),
          o = function (t, e) {
            return t.setAttributes({ width: e }), c(t);
          },
          u = function (t, e) {
            return t.setAttributes({ height: e }), c(t);
          },
          s = 'contain',
          l = 'fill',
          c = function (t) {
            var e = t.attributes.fitStrategy || f(t);
            return e === s ? h(t) : 'cover' === e ? d(t) : e === l ? v(t) : h(t);
          },
          f = function (t) {
            var e = t.attributes.height,
              n = t.attributes.width,
              r = (0, i.originalAspect)(t.allAssets),
              o = e * r,
              u = 2 * Math.floor(n / r / 2),
              c = Math.abs(u - e),
              f = Math.abs(o - n),
              d = a.firefox && a.browser.mozilla && 36 <= a.browser.version;
            return (a.browser.webkit || d) && 0 < c && 10 >= c && 0 < f && 10 >= f ? l : s;
          },
          d = function (t) {
            var e = t.video,
              n = (0, i.videoAspect)(t.allAssets),
              o = (0, r.elemWidth)(t.root) / (0, r.elemHeight)(t.root);
            a.trident || a.edge || a.browser.msie
              ? o <= n
                ? (0, r.elemStyle)(e, {
                    height: '100%',
                    left: '50%',
                    objectFit: 'contain',
                    position: 'relative',
                    top: '50%',
                    transform: 'translate(-50%,-50%)',
                    width: '1920px',
                  })
                : (0, r.elemStyle)(e, {
                    height: '1088px',
                    left: '50%',
                    objectFit: 'contain',
                    position: 'relative',
                    top: '50%',
                    transform: 'translate(-50%,-50%)',
                    width: '100%',
                  })
              : (0, r.elemStyle)(e, { objectFit: 'cover' });
          },
          h = function (t) {
            var e = t.video;
            (0, r.elemStyle)(e, { objectFit: 'contain', height: '100%', width: '100%' });
          },
          v = function (t) {
            var e = t.video;
            (0, r.elemStyle)(e, { objectFit: 'fill', height: '100%', width: '100%' });
          };
      },
      329: (t, e, n) => {
        'use strict';
        n.d(e, { onReady: () => o });
        var r = n(13),
          i = n.n(r),
          a = n(20).wlog.getPrefixedFunctions('SimpleVideo'),
          o = function (t) {
            var e = t.video;
            null == t.state && (t.state = {});
            var n = t.state;
            return (
              n.onReadyPromise ||
                (n.onReadyPromise = new (i())(function (r) {
                  if (n.hasBeenReady) r();
                  else if (2 <= e.readyState)
                    a.info('ready readyState', e.src, e.readyState), (n.hasBeenReady = !0), r();
                  else {
                    t.bind('loadstart', function () {
                      a.info('ready loadstart'), (n.hasBeenReady = !0), r();
                    });
                  }
                })),
              n.onReadyPromise
            );
          };
      },
      325: (t, e, n) => {
        'use strict';
        n.d(e, { BEFORE_PLAY: () => i, getPlaybackMode: () => a });
        var r = n(20).wlog.getPrefixedFunctions('SimpleVideo'),
          i = 'beforeplay',
          a = function (t) {
            var e = t.video;
            try {
              return t.state.hasPlayed
                ? t.state.fakeEnded || e.ended
                  ? 'ended'
                  : e.paused
                  ? 'paused'
                  : 'playing'
                : i;
            } catch (t) {
              return r.warn(t), 'unknown';
            }
          };
      },
      334: (t, e, n) => {
        'use strict';
        n.d(e, { setup: () => a, teardown: () => o });
        var r = n(15),
          i = [
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
          a = function (t) {
            for (var e, n = 0; n < i.length; n++)
              (e = i[n]),
                (function (e, n) {
                  var i = '_marshalEvent_'.concat(n);
                  (t[i] =
                    t[i] ||
                    function (r) {
                      null == t.state && (t.state = {}),
                        ('playing' === n && ('playing' !== n || e.paused)) ||
                          ((t.state.eventContext = r),
                          t.trigger(n, r),
                          (t.state.eventContext = null));
                    }),
                    (0, r.elemBind)(e, n, t[i]);
                })(t.video, e);
          },
          o = function (t) {
            for (var e = 0; e < i.length; e++) {
              var n = i[e],
                a = '_marshalEvent_'.concat(n);
              (0, r.elemUnbind)(t.video, n, t[a]);
            }
          };
      },
      324: (t, e, n) => {
        'use strict';
        n.d(e, {
          seek: () => f,
          seekWithoutCuts: () => d,
          seekOnPlay: () => g,
          isSeeking: () => m,
        });
        var r = n(325),
          i = n(326),
          a = n(328),
          o = n(13),
          u = n.n(o),
          s = n(11),
          l = n(15),
          c = n(20).wlog.getPrefixedFunctions('SimpleVideo'),
          f = function (t, e, n) {
            var r = (0, a.getTimeBeforeCuts)(t, e);
            return d(t, r, n);
          },
          d = function (t, e, n) {
            return (
              c.info('seek', e), t.getPlaybackMode() === r.BEFORE_PLAY ? h(t, e, n) : v(t, e, n)
            );
          },
          h = function (t, e) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
              r = t.video;
            return (
              c.info('seekBeforePlay', e),
              new (u())(function (a, o) {
                c.info('time '.concat(e, ': seek beforeplay'));
                var l = 'playing' === t.getPlaybackMode();
                (r.style.visibility = 'hidden'),
                  (0, s.assign)(t.state, { seeking: !0 }),
                  c.info('time '.concat(e, ': start stream by calling play')),
                  (0, i.playWithoutCuts)(t)
                    .then(function (o) {
                      c.info('time '.concat(e, ': jump to time after playing')),
                        (r.currentTime = e);
                      var f = new (u())(function (r) {
                        l || !1 === n.pause
                          ? (c.info('time: '.concat(e, ': play after seek')), r())
                          : (c.info('time: '.concat(e, ': pause after seek')),
                            (0, i.pause)(t).then(r));
                      });
                      p(t).then(function () {
                        f.then(function () {
                          (r.style.visibility = 'inherit'),
                            (0, s.assign)(t.state, { seeking: !1 }),
                            a(o);
                        });
                      });
                    })
                    .catch(function (e) {
                      (r.style.visibility = 'inherit'),
                        (0, s.assign)(t.state, { seeking: !1 }),
                        o(e);
                    });
              })
            );
          },
          v = function (t, e) {
            return (
              c.info('seekNow', e),
              new (u())(function (n) {
                c.info('seekNow: start', e),
                  (t.video.currentTime = e),
                  (0, s.assign)(t.state, { seeking: !0 }),
                  p(t).then(function () {
                    (0, s.assign)(t.state, { seeking: !1 }), c.info('seekNow: resolve', e), n();
                  });
              })
            );
          },
          g = function (t, e) {
            return new (u())(function (n) {
              'playing' === t.getPlaybackMode()
                ? v(t, e).then(n)
                : t.bind('playing', function () {
                    return v(t, e).then(n), t.unbind;
                  });
            });
          },
          p = function (t) {
            var e = t.video;
            return new (u())(function (t) {
              e.seeking
                ? (c.info('waiting for seek'),
                  (0, l.elemBind)(e, 'seeked', function () {
                    return c.info('seeked'), t(), l.elemUnbind;
                  }))
                : (c.info('no wait for seek'), t());
            });
          },
          m = function (t) {
            var e = t.state,
              n = t.video;
            return !(!e.seeking && !n.seeking);
          };
      },
      326: (t, e, n) => {
        'use strict';
        n.r(e),
          n.d(e, {
            play: () => m,
            playWithoutCuts: () => y,
            playType: () => b,
            pause: () => w,
            setCurrentTime: () => _,
            setCurrentTimeWithoutCuts: () => k,
            getCurrentTime: () => A,
            getState: () => T,
            setVolume: () => S,
            getVolume: () => E,
            supportsPlaybackRate: () => P,
            setPlaybackRate: () => C,
            getPlaybackRate: () => x,
            getDuration: () => O,
            isSourceOfBrowserEvent: () => M,
            isMuted: () => R,
            getPreload: () => L,
            mute: () => F,
            unmute: () => I,
            onEnterFullscreen: () => B,
            onLeaveFullscreen: () => D,
            isInitializingFromUnmuted: () => j,
            isInFullscreen: () => q,
            onWidthChange: () => W,
            onHeightChange: () => V,
            requestFullscreen: () => N,
            cancelFullscreen: () => U,
            captureCurrentFrame: () => H,
          });
        var r = n(327),
          i = n(328),
          a = n(13),
          o = n.n(a),
          u = n(15),
          s = n(20),
          l = n(19),
          c = n(11),
          f = s.wlog.getPrefixedFunctions('SimpleVideo'),
          d = (0, l.cachedDetect)(),
          h = 'play',
          v = 'play-silently',
          g = 'cannot-play',
          p = function () {
            return d.chrome || d.firefox || d.edge || d.trident
              ? 'probably'
              : !!(d.safari || (d.ios.version && 12 <= d.ios.version)) && 'maybe';
          },
          m = function (t, e) {
            var n = (0, r.trimStartFromCuts)(t);
            return t.state.fakeEnded || t.video.currentTime < n
              ? new (o())(function (n, r) {
                  t.seek(0, { pause: !1 })
                    .then(function (i) {
                      y(t, (0, c.merge)({}, e, { playType: h }))
                        .then(function () {
                          n(i);
                        })
                        .catch(r);
                    })
                    .catch(r);
                })
              : y(t, e);
          },
          y = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
              n = t.video,
              r = e.playType || b(t, e);
            return (
              null == t.state.issuedPlay && r !== g && (t.state.issuedPlay = !0),
              new (o())(function (i, a) {
                t.state.lastPlayRejected = !1;
                var o = t.getPlaybackMode();
                if ((f.info('play: start', r), 'playing' === o))
                  f.info('play: already playing, resolve'), i(h);
                else if (r === g) a(new Error('Cannot issue play.'));
                else {
                  r === v && t.mute(),
                    t.trigger('beforeplay'),
                    'ended' === o && 0 < d.ios.version && n.load();
                  var s = n.play();
                  if (s && s.then && s.catch)
                    s.then(function () {
                      f.info('play: got', r, 'resolve'), i(r);
                    }).catch(function (o) {
                      f.notice(o), (t.state.lastPlayRejected = !0);
                      var u =
                        null == e.silentAutoPlay ? t.attributes.silentAutoPlay : e.silentAutoPlay;
                      r !== h || t.isMuted() || ('allow' !== u && null != u)
                        ? (f.notice('play: rejected'), a(o))
                        : (t.mute(),
                          n
                            .play()
                            .then(function () {
                              f.info('play: got silent fallback, resolve'), i(v);
                            })
                            .catch(function (e) {
                              t.unmute(), a(e);
                            }));
                    });
                  else {
                    setTimeout(function () {
                      d.ios.version &&
                        10.1 > d.ios.version &&
                        n.paused &&
                        a(new Error('Video still paused after play issued.'));
                    }, 10);
                    t.bind('playing', function () {
                      return f.info('play: got playing, resolve'), i(r), u.elemUnbind;
                    });
                  }
                }
              })
            );
          },
          b = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            if ('playing' === t.getPlaybackMode()) return h;
            if (t.isInitializingFromUnmuted()) return h;
            if ((0, u.inUserEventContext)()) return h;
            var n = t.attributes,
              r = null == e.silentAutoPlay ? n.silentAutoPlay : e.silentAutoPlay;
            return !0 === r
              ? t.isMuted()
                ? h
                : v
              : !1 === r
              ? h
              : 'allow' === r || null == r
              ? p() || t.isMuted()
                ? h
                : v
              : h;
          },
          w = function (t) {
            var e = t.video;
            return (
              f.info('pause'),
              new (o())(function (t) {
                f.info('pause: start'),
                  e.pause(),
                  (0, u.safeRequestAnimationFrame)(function () {
                    f.info('pause: resolve'), t();
                  });
              })
            );
          },
          _ = function (t, e) {
            var n = (0, i.getTimeBeforeCuts)(t, e);
            return k(t, n);
          },
          k = function (t, e) {
            f.info('setCurrentTime', e), (t.video.currentTime = e);
          },
          A = function (t) {
            return (0, r.getCurrentTimeAfterCuts)(t);
          },
          T = function (t) {
            return {
              playbackMode: t.getPlaybackMode(),
              currentTime: t.getCurrentTime(),
              volume: t.getVolume(),
              playbackRate: t.getPlaybackRate(),
            };
          },
          S = function (t, e) {
            f.info('setVolume', e), (t.video.volume = e);
          },
          E = function (t) {
            return t.video.volume;
          },
          P = function (t) {
            return null != t.video.playbackRate;
          },
          C = function (t, e) {
            f.info('setPlaybackRate', e),
              P(t)
                ? (t.video.playbackRate = e)
                : f.info('playbackRate is not supported on', t.video);
          },
          x = function (t) {
            return P(t) ? t.video.playbackRate : 1;
          },
          O = function (t) {
            return (0, r.getDurationAfterCuts)(t);
          },
          M = function (t, e) {
            return e.target == t.video;
          },
          R = function (t) {
            var e = t.video;
            return !!(
              e.muted ||
              (t.state.loadedMetadata && 0 === e.volume) ||
              (t.state.hasPlayed && e.audioTracks && 0 === e.audioTracks.length)
            );
          },
          L = function (t) {
            return t.video.getAttribute('preload');
          },
          F = function (t) {
            (t.video.muted = !0), t.video.setAttribute('muted', 'muted');
          },
          I = function (t) {
            (t.video.muted = !1), t.video.removeAttribute('muted');
          },
          B = function (t) {
            t.state.isInFullscreen = !0;
            var e = t.attributes.backgroundColor || '#000';
            t.video.style.backgroundColor = e;
          },
          D = function (t) {
            (t.state.isInFullscreen = !1), (t.video.style.backgroundColor = 'transparent');
          },
          j = function (t) {
            var e = t.state;
            return e.isInitializingFromOtherEngine && e.otherEnginePlayed && !e.otherEngineWasMuted;
          },
          q = function (t) {
            return !!t.state.isInFullscreen;
          },
          W = function (t) {},
          V = function (t) {},
          N = function (t) {
            t.setAttributes({ fitStrategy: 'contain' }),
              t.fit(),
              (0, u.elemRequestFullscreen)(t.video);
          },
          U = function (t) {
            t.setAttributes({ fitStrategy: 'auto' }), t.fit(), (0, u.elemCancelFullscreen)(t.video);
          },
          H = function (t) {
            var e = t.video,
              n = document.createElement('canvas');
            (n.width = e.videoWidth),
              (n.height = e.videoHeight),
              n.getContext('2d').drawImage(e, 0, 0, n.width, n.height);
            for (var r = arguments.length, i = Array(1 < r ? r - 1 : 0), a = 1; a < r; a++)
              i[a - 1] = arguments[a];
            return n.toDataURL.apply(n, i);
          };
      },
      330: (t, e, n) => {
        'use strict';
        n.d(e, {
          stopStreaming: () => f,
          changeQuality: () => d,
          changeStreamWithoutLoad: () => h,
          changeStream: () => v,
          changeVideo: () => p,
          isChangingVideo: () => g,
        });
        var r = n(322),
          i = n(331),
          a = n(13),
          o = n.n(a),
          u = n(20),
          s = n(15),
          l = n(48),
          c = u.wlog.getPrefixedFunctions('SimpleVideo'),
          f = function (t) {
            try {
              if (t.state.destroyed) return;
              c.info('stopStreaming');
              var e = t.video;
              (e.src = ''.concat(r.srcProtocolAndHost(e.getAttribute('src')), '/tiny.mp4')),
                e.load();
            } catch (t) {
              c.notice(t);
            }
          },
          d = function (t, e, n, r) {
            var i = t.selectableAssets(),
              a = (0, l.findClosestAssetByQuality)(i, e);
            return 'beforeplay' === t.getPlaybackMode() ? (h(t, a), o().resolve()) : v(t, a, n, r);
          },
          h = function (t, e) {
            c.info('changeStreamWithoutLoad', e && e.slug, e);
            var n = t.video;
            if ((0, s.elemInDom)(n)) {
              var i = r.properAssetUrl(e.url, e.container);
              (t.state = { eventContext: t.state.eventContext }),
                (t._currentAsset = e),
                (n.src = i);
              var a = (function (t) {
                for (var e, n = t.video, r = [], i = 0; i < n.childNodes.length; i++)
                  1 === (e = n.childNodes[i]).nodeType &&
                    'source' === e.tagName.toLowerCase() &&
                    r.push(e);
                return r;
              })(t);
              0 < a.length && (a[0].src = i), t.trigger('stream-changed', t._currentAsset);
            }
          },
          v = function (t, e) {
            var n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
              i = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3];
            c.info('changeStream', n, i, e && e.slug, e);
            var a = t.video;
            return (
              (t.asset = e),
              new (o())(function (o) {
                var u = r.properAssetUrl(e.url, e.container);
                if (i || u !== a.getAttribute('src')) {
                  var l = t.getState();
                  (t.state.seeking = !0),
                    (0, s.elemBind)(a, 'loadstart', function () {
                      return (
                        i
                          ? ((a.style.visibility = 'visible'), (t.state.seeking = !1), o())
                          : 2 < l.currentTime
                          ? t.seek(l.currentTime).then(function () {
                              'playing' === l.playbackMode
                                ? t.play().then(function () {
                                    (t.state.seeking = !1), (a.style.visibility = 'visible'), o();
                                  })
                                : t.pause().then(function () {
                                    (a.style.visibility = 'visible'), (t.state.seeking = !1), o();
                                  });
                            })
                          : ('playing' === l.playbackMode && t.play(),
                            (a.style.visibility = 'visible'),
                            (t.state.seeking = !1),
                            o()),
                        t.setPlaybackRate(l.playbackRate),
                        s.elemUnbind
                      );
                    }),
                    (a.style.visibility = 'hidden'),
                    h(t, e, i),
                    'beforeplay' === l.playbackMode || n || t.play();
                } else o();
              })
            );
          },
          g = function (t) {
            return !!t.state.isChangingVideo;
          },
          p = function (t, e, n) {
            return (
              m(t),
              (t.state.isChangingVideo = !0),
              y(t, e, n),
              new (o())(function (e) {
                v(t, t.defaultAsset()).then(function () {
                  (t.state.isChangingVideo = !1), e();
                });
              })
            );
          },
          m = function (t) {
            var e = t.state.eventContext;
            t.destroy(), (t.state.eventContext = e);
          },
          y = function (t, e, n) {
            i.setupProperties(t, e, n), i.setupBindingsAndLoops(t, t.allAssets, n);
          };
      },
      333: (t, e, n) => {
        'use strict';
        n.d(e, { setup: () => u, teardown: () => s });
        var r = n(11),
          i = n(15),
          a = n(50),
          o = function (t) {
            var e = t.attributes;
            return (null == e.eventLoopDuration ? 300 : e.eventLoopDuration) / t.getPlaybackRate();
          },
          u = function (t) {
            null == t.state && (t.state = {}), (t.state.waiting = -1);
            var e = ''.concat(t.uuid, '.waiting_events');
            a.globalEventLoop.add(e, o(t), function () {
              l(t), a.globalEventLoop.interval(e, o(t));
            });
          },
          s = function (t) {
            var e = ''.concat(t.uuid, '.waiting_events');
            a.globalEventLoop.remove(e);
          },
          l = function (t) {
            var e = t.video,
              n = t.state,
              a = n.lastPlaybackMode,
              u =
                (n.gotWaiting && 'beforeplay' === t.getPlaybackMode()) ||
                'playing' === t.getPlaybackMode(),
              s = 'playing' === a || ('beforeplay' === a && !n.lastPlayRejected),
              l = n.lastEventLoopDuration || o(t);
            if (u && s)
              if (t.getCurrentTime() === n.lastTimePosition) {
                var f = n.startedWaitingAt;
                f
                  ? ((n.waiting = (new Date().getTime() - f) / 1e3),
                    t.trigger('custom-waiting', n.waiting))
                  : ((0, r.assign)(n, {
                      startedWaitingAt: new Date().getTime() - l,
                      waiting: l / 1e3,
                    }),
                    t.trigger('custom-waiting', l / 1e3),
                    (0, i.elemBind)(e, 'timeupdate', function () {
                      return c(t), i.elemUnbind;
                    }));
              } else c(t);
            else c(t);
          },
          c = function (t) {
            var e = t.state.waiting;
            (0, r.assign)(t.state, { waiting: -1, startedWaitingAt: null }),
              null != e && 0 <= e && t.trigger('custom-done-waiting', e);
          };
      },
      48: (t, e, n) => {
        'use strict';
        n.d(e, {
          READY: () => f,
          filter: () => h,
          one: () => v,
          readyPublicOver400: () => p,
          withinQualityRange: () => m,
          numericSizeSnapped: () => y,
          findClosestAssetByQuality: () => b,
          isBakeryUrl: () => _,
          isScreencast: () => E,
          videoAspect: () => P,
          originalAspect: () => C,
          nearestOutsideRange: () => x,
        });
        var r = n(11),
          i = n(34),
          a = n.n(i),
          o = n(35),
          u = (n(19), n(33), n(20));
        function s(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) {
                var n = [],
                  r = !0,
                  i = !1,
                  a = void 0;
                try {
                  for (
                    var o, u = t[Symbol.iterator]();
                    !(r = (o = u.next()).done) && (n.push(o.value), !e || n.length !== e);
                    r = !0
                  );
                } catch (t) {
                  (i = !0), (a = t);
                } finally {
                  try {
                    r || null == u.return || u.return();
                  } finally {
                    if (i) throw a;
                  }
                }
                return n;
              }
            })(t, e) ||
            (function (t, e) {
              if (t) {
                if ('string' == typeof t) return l(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  'Object' === n && t.constructor && (n = t.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(t)
                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? l(t, e)
                    : void 0
                );
              }
            })(t, e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        }
        function l(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        var c = Array.prototype.slice,
          f = 2,
          d = ['select', 'sortFn', 'sortBy', 'unique'],
          h = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            if (!t) return [];
            t.assets && (t = t.assets),
              (null != e.qualityMin || null != e.qualityMax) &&
                ((t = m(t, e.qualityMin, e.qualityMax)),
                (e = (0, r.except)(e, ['qualityMin', 'qualityMax'])));
            var n = (0, r.only)(e, d),
              i = n.select || (0, r.except)(e, d);
            i && (n.select = i);
            var a = n.select ? (0, r.select)(t, n.select) : (0, r.clone)(t);
            if (((n.sortFn || n.sortBy) && (a = (0, r.sort)(a, n.sortFn || n.sortBy)), n.unique)) {
              for (var o = {}, u = 0; u < a.length; u++) {
                var s = a[u],
                  l = s['' + n.unique] || '__undefined__';
                o[l] || (o[l] = s);
              }
              for (var c in ((a = []), o)) a.push(o[c]);
            }
            return a;
          },
          v = function (t, e) {
            return h(t, e)[0] || null;
          },
          g = function (t) {
            for (var e = [], n = 0; n < t.length; n++) {
              var r = t[n],
                i = null != r.opt_vbitrate && 500 <= r.opt_vbitrate && 1e5 >= r.opt_vbitrate,
                a = null != r.width && 400 < r.width;
              (i || a) && e.push(r);
            }
            return e;
          },
          p = function (t) {
            return g(h(t, { container: /mp4|flv/, public: !0, status: f }));
          },
          m = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 100,
              n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1e4;
            return h(t, {
              select: function (t) {
                var r = y(t.width, t.height);
                return e <= r && r <= n;
              },
            });
          },
          y = function (t, e) {
            if (e > t) {
              var n = t;
              (t = e), (e = n);
            }
            var r = t / e,
              i = t * e + 1;
            return i >= (3840 / r) * 3840
              ? 2160
              : i >= (2560 / r) * 2560
              ? 1440
              : i >= (1920 / r) * 1920
              ? 1080
              : i >= (1280 / r) * 1280
              ? 720
              : i >= (960 / r) * 960
              ? 540
              : i >= (640 / r) * 640
              ? 360
              : e;
          },
          b = function (t, e) {
            var n;
            n = '4k' === e ? 2160 : parseInt(e, 10);
            var r = m(t, n, n)[0];
            if (r) return r;
            var i = x(t, n, n);
            if (1 === i.length) return i[0];
            var a = P(t),
              o = Math.round(a * n),
              u = s(i, 2),
              l = u[0],
              c = u[1];
            return Math.abs(l.width - o) < Math.abs(c.width - o) ? l : c;
          },
          w =
            (a()('fast'),
            [
              'embed.wistia.com',
              'embed-ssl.wistia.com',
              a()('embed'),
              a()('prime'),
              a()('mixergy-cdn'),
              'embed-a.wistia.com',
              a()('embed-fastly'),
              'embedwistia-a.akamaihd.net',
              'embed.wistia.com',
              'embed-ssl.wistia.com',
              'embed-a.wistia.com',
              'embedwistia-a.akamaihd.net',
              'embed-fastly.wistia.com',
            ]),
          _ = function (t) {
            if (null == t) return !1;
            var e = new o.Url(t);
            return !!e.host && 0 <= w.join(',').indexOf(e.host);
          },
          k = function (t, e, n) {
            return (n = (0, r.merge)({ container: e, public: !0, status: f }, n)), v(t, n);
          },
          A = function (t, e) {
            return k(t, 'mp4', e);
          },
          T = function (t, e) {
            return k(t, 'webm', e);
          },
          S = function (t) {
            return v(t, { type: 'original' });
          },
          E = function (t) {
            var e = S(t);
            return e && 640 < e.width && 1200 > e.bitrate;
          },
          P = function (t) {
            var e =
              A(t) ||
              (function (t, e) {
                return k(t, 'flv', e);
              })(t) ||
              (function (t, e) {
                return k(t, 'm3u8', e);
              })(t) ||
              T(t) ||
              S(t);
            return e && e.height ? e.width / e.height : 640 / 360;
          },
          C = function (t) {
            var e = P(t),
              n = S(t);
            if (n && n.width && n.height) {
              var r = n.width / n.height;
              return (1 < r && 1 > e) || (1 > r && 1 < e) ? 1 / r : r;
            }
            return e;
          },
          x = function (t, e, n) {
            if (0 === t.length) return [];
            for (
              var r,
                i,
                a = c.call(t).sort(function (t, e) {
                  return y(t.width, t.height) - y(e.width, e.height);
                }),
                o = 0;
              o < a.length;
              o++
            ) {
              var s = a[o],
                l = y(s.width, s.height);
              if ((l < e && (r = s), l >= n)) {
                i = s;
                break;
              }
            }
            var f = [];
            return (
              r && f.push(r),
              i && f.push(i),
              0 === f.length &&
                (u.wlog.error(
                  'nearestOutsideRange: no nearby assets found, using first in list',
                  a[0]
                ),
                f.push(a[0])),
              f
            );
          };
      },
      15: (t, e, n) => {
        'use strict';
        n.d(e, {
          pageLoaded: () => a.default,
          elemFromObject: () => f,
          elemAppend: () => d,
          elemStyle: () => h,
          elemWidth: () => y,
          elemHeight: () => b,
          elemInDom: () => w,
          elemBind: () => _,
          elemUnbind: () => k,
          elemRequestFullscreen: () => T,
          elemCancelFullscreen: () => S,
          safeRequestAnimationFrame: () => C,
          inUserEventContext: () => x,
        });
        var r,
          i = n(11),
          a = (n(16), n(18)),
          o = n(19),
          u = n(20),
          s = (n(24), n(25), n(9)),
          l = n(1).default,
          c = (0, o.cachedDetect)(),
          f = function t(e) {
            if ((0, i.isArray)(e)) {
              for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r]));
              return n;
            }
            var a = e.tagName || 'div',
              o = e.childNodes || [];
            (0, i.isArray)(o) || (o = [o]);
            var u = document.createElement(a);
            for (var s in e)
              if (e.hasOwnProperty(s)) {
                var l = e[s];
                if ('childNodes' === s || 'tagName' === s || 'ref' === s) continue;
                var c = s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                if ('style' === s)
                  if ((0, i.isObject)(l)) for (var f in l) u.style[f] = l[f];
                  else
                    for (var h = l.split(';'), v = 0; v < h.length; v++) {
                      var g = h[v].split(/\s*:\s*/),
                        p = g[0],
                        m = g[1];
                      p && m && (u.style[p] = m);
                    }
                else if ('events' === s)
                  for (var y in l) {
                    var b = l[y];
                    _(u, y, b);
                  }
                else
                  'className' === s || 'class' === s
                    ? (u.className = l)
                    : 'innerHTML' === s
                    ? (u.innerHTML = l)
                    : 'innerText' === s
                    ? (u.innerText = l)
                    : null != l &&
                      'function' == typeof l.toString &&
                      u.setAttribute(c, l.toString());
              }
            for (var w, k = 0; k < o.length; k++)
              if (((w = o[k]), (0, i.isObject)(w))) {
                var A = t(w);
                d(u, A);
              } else {
                var T = document.createTextNode(w.toString());
                d(u, T);
              }
            return 'function' == typeof e.ref && e.ref(u), u;
          },
          d = function t(e, n) {
            if ((0, i.isArray)(n)) for (var r = 0; r < n.length; r++) t(e, n[r]);
            else e.appendChild(n, { wistiaGridCaller: !0 });
          },
          h = function t(e) {
            for (var n = arguments.length, r = Array(1 < n ? n - 1 : 0), a = 1; a < n; a++)
              r[a - 1] = arguments[a];
            if ((0, i.isArray)(e) || (window.NodeList && e instanceof NodeList)) {
              for (var o, s = [], l = 0; l < e.length; l++)
                1 === (o = e[l]).nodeType && s.push(t.apply(void 0, [o].concat(r)));
              return s;
            }
            if (2 === r.length) {
              var c = r[0],
                f = r[1];
              e.style[c] = f;
            } else if (1 !== r.length) u.wlog.apply(void 0, ['Unexpected args', e].concat(r));
            else if ('string' == typeof r[0]) {
              var d = r[0];
              try {
                return e.currentStyle
                  ? e.currentStyle[d]
                  : window.getComputedStyle
                  ? window.getComputedStyle(e, null).getPropertyValue(d)
                  : null;
              } catch (t) {
                u.wlog.notice(t);
              }
            } else {
              var h = p(r[0]);
              for (var v in h) {
                var g = h[v];
                e.style[v] = g;
              }
            }
          },
          v = {
            borderImage: !0,
            mixBlendMode: !0,
            transform: !0,
            transition: !0,
            transitionDuration: !0,
          },
          g = ['webkit', 'moz', 'o', 'ms'],
          p = function (t) {
            if (c.chrome) return t;
            var e = {};
            for (var n in t) {
              var r = t[n];
              if (((e[n] = r), v[n]))
                for (var i = g, a = 0; a < i.length; a++) {
                  var o = i[a] + n.charAt(0).toUpperCase() + n.slice(1);
                  n[o] || (e[o] = r);
                }
            }
            return e;
          },
          m = function (t, e) {
            if (!window.getComputedStyle) return null;
            var n = window.getComputedStyle(t, null);
            return null == n ? null : null == e ? n : n[e];
          },
          y = function (t) {
            if (t === window)
              return window.innerWidth
                ? window.innerWidth
                : document.documentElement
                ? document.documentElement.offsetWidth
                : document.body.offsetWidth;
            if (t === document) {
              var e = document.body,
                n = document.documentElement;
              return Math.max(
                e.scrollWidth,
                e.offsetWidth,
                n.clientWidth,
                n.scrollWidth,
                n.offsetWidth
              );
            }
            var r;
            return c.browser.quirks
              ? parseInt(t.offsetWidth, 10)
              : (r = m(t, 'width')) && null != r
              ? parseFloat(r)
              : t.currentStyle
              ? t.offsetWidth
              : -1;
          },
          b = function (t) {
            if (t === window)
              return window.innerHeight
                ? window.innerHeight
                : document.documentElement
                ? document.documentElement.offsetHeight
                : document.body.offsetHeight;
            if (t === document) {
              var e = document.body,
                n = document.documentElement;
              return Math.max(
                e.scrollHeight,
                e.offsetHeight,
                n.clientHeight,
                n.scrollHeight,
                n.offsetHeight
              );
            }
            var r;
            return c.browser.quirks
              ? parseInt(t.offsetHeight, 10)
              : (r = m(t, 'height')) && null != r
              ? parseFloat(r)
              : t.currentStyle
              ? t.offsetHeight
              : -1;
          },
          w = function (t) {
            for (; (t = t.parentNode); ) if (t === document) return !0;
            return !1;
          },
          _ = function (t, e, n) {
            var r = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3],
              i = function (r) {
                !(r = r || window.event).pageX &&
                  !r.pageY &&
                  (r.clientX || r.clientY) &&
                  ((r.pageX = r.clientX + P()), (r.pageY = r.clientY + E())),
                  r.preventDefault ||
                    (r.preventDefault = function () {
                      r.returnValue = !1;
                    }),
                  r.stopPropagation ||
                    (r.stopPropagation = function () {
                      r.cancelBubble = !0;
                    }),
                  null == r.which && (r.which = null == r.charCode ? r.keyCode : r.charCode),
                  null == r.which &&
                    null != r.button &&
                    (1 & r.button
                      ? (r.which = 1)
                      : 2 & r.button
                      ? (r.which = 3)
                      : 4 & r.button
                      ? (r.which = 2)
                      : c.browser.msie && 0 === r.button
                      ? (r.which = 1)
                      : (r.which = 0)),
                  r.target || (r.srcElement && (r.target = r.srcElement)),
                  r.target && 3 === r.target.nodeType && (r.target = r.target.parentNode);
                for (var i = arguments.length, a = Array(1 < i ? i - 1 : 0), o = 1; o < i; o++)
                  a[o - 1] = arguments[o];
                var u = n.apply(r.target, [r].concat(a));
                return u === k && k(t, e, n), u;
              };
            l._elemBind = l._elemBind || {};
            var a = A(t, e, n);
            return (
              (l._elemBind[a] = i),
              (i.elem = t),
              (i.event = e),
              c.browser.msie && 9 > c.browser.version
                ? t.attachEvent('on'.concat(e), i)
                : t.addEventListener(e, i, r),
              function () {
                k(t, e, n, r);
              }
            );
          },
          k = function (t, e, n) {
            var r = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3];
            if (null != t && null != t._wistiaElemId && null != n && n._wistiaBindId) {
              var i = A(t, e, n),
                a = l._elemBind[i];
              return (
                a &&
                  (c.browser.msie && 9 > c.browser.version
                    ? t.detachEvent('on'.concat(e), a)
                    : t.removeEventListener(e, a, r),
                  (a.elem = null),
                  (a.event = null)),
                delete l._elemBind[i]
              );
            }
          },
          A = function (t, e, n) {
            return (
              (t._wistiaElemId = t._wistiaElemId || (0, s.seqId)('wistia_elem_')),
              (n._wistiaBindId = n._wistiaBindId || (0, s.seqId)('wistia_bind_')),
              ''.concat(t._wistiaElemId, '.').concat(e, '.').concat(n._wistiaBindId)
            );
          },
          T = function (t) {
            return t.requestFullscreen
              ? t.requestFullscreen()
              : t.mozRequestFullScreen
              ? t.mozRequestFullScreen()
              : t.webkitRequestFullscreen
              ? t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
              : t.msRequestFullscreen
              ? t.msRequestFullscreen()
              : t.webkitEnterFullscreen
              ? t.webkitEnterFullscreen()
              : (u.wlog.notice('no requestFullscreen functionality detected'), null);
          },
          S = function (t) {
            return document.cancelFullscreen
              ? document.cancelFullscreen()
              : document.mozCancelFullScreen
              ? document.mozCancelFullScreen()
              : document.webkitCancelFullScreen
              ? document.webkitCancelFullScreen()
              : document.msExitFullscreen
              ? document.msExitFullscreen()
              : t && t.webkitExitFullscreen
              ? t.webkitExitFullscreen()
              : (u.wlog.notice('no cancelFullscreen functionality detected'), null);
          },
          E = function (t) {
            var e = document.body,
              n = document.documentElement;
            return null == t
              ? (n && n.scrollTop) || (e && e.scrollTop) || 0
              : (e && (e.scrollTop = t), void (n && (n.scrollTop = t)));
          },
          P = function (t) {
            var e = document.body,
              n = document.documentElement;
            return null == t
              ? (n && n.scrollLeft) || (e && e.scrollLeft) || 0
              : (e && (e.scrollLeft = t), void (n && (n.scrollLeft = t)));
          },
          C = function (t) {
            return (
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              function (t) {
                return setTimeout(t, 1e3 / 60);
              }
            )(t);
          },
          x = function () {
            return !!r;
          };
        [
          'auxclick',
          'click',
          'contextmenu',
          'dblclick',
          'focus',
          'keydown',
          'keypress',
          'keyup',
          'mousedown',
          'mouseup',
          'reset',
          'submit',
          'touchend',
          'touchstart',
        ].forEach(function (t) {
          _(
            document,
            t,
            function (t) {
              (r = t),
                Date.now(),
                setTimeout(function () {
                  r === t && (r = void 0);
                }, 0);
            },
            !c.passiveSupported || { capture: !0, passive: !0 }
          );
        });
      },
      24: (t, e, n) => {
        'use strict';
        var r;
        n.d(e, { elemOffset: () => a });
        var i = function () {
            if (null != r) return r;
            var t = document.createElement('div');
            return (
              (t.style.paddingLeft = t.style.width = '1px'),
              document.body.appendChild(t),
              (r = 2 === t.offsetWidth),
              document.body.removeChild(t),
              r
            );
          },
          a = function (t) {
            var e,
              n,
              r = document.body,
              a = document.defaultView,
              u = document.documentElement,
              s = t.getBoundingClientRect(),
              l = u.clientTop || r.clientTop || 0,
              c = u.clientLeft || r.clientLeft || 0;
            (e =
              a && null != a.pageYOffset
                ? a.pageYOffset
                : i() && u && null != u.scrollTop
                ? u.scrollTop
                : r.scrollTop),
              (n =
                a && null != a.pageXOffset
                  ? a.pageXOffset
                  : i() && u && null != u.scrollLeft
                  ? u.scrollLeft
                  : r.scrollLeft);
            var f = o(t);
            return {
              height: s.height * f,
              top: s.top * f + e - l,
              left: s.left * f + n - c,
              width: s.width * f,
              zoom: f,
            };
          },
          o = function t(e) {
            return e && e !== document.documentElement
              ? t(e.parentElement) * (getComputedStyle(e).zoom || 1)
              : 1;
          };
      },
      33: (t, e, n) => {
        'use strict';
        n.d(e, {
          deliveryHost: () => w,
          akamaiHost: () => _,
          fastlyHost: () => A,
          eV1Host: () => S,
          eV1Protocol: () => E,
          metricsHost: () => P,
        });
        var r = n(34),
          i = n.n(r),
          a = n(2),
          o = n(35),
          u = (i()('app'), i()('fast')),
          s = 'fast.wistia.net',
          l = 'fast.wistia.com',
          c = 'embed.wistia.com',
          f = 'embed-ssl.wistia.com',
          d = 'embed-a.wistia.com',
          h = 'embed-a.wistia.com',
          v = 'embedwistia-a.akamaihd.net',
          g = 'embedwistia-a.akamaihd.net',
          p = 'embed-fastly.wistia.com',
          m = 'embed-fastly.wistia.com',
          y =
            'undefined' != typeof window && a.default === window && a.default.location
              ? a.default.location.protocol
              : 'https:',
          b = function (t, e, n) {
            return 'https:' === t ? e : n;
          },
          w = function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : y;
            return b(t, f, c);
          },
          _ = function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : y,
              e = 1 < arguments.length ? arguments[1] : void 0;
            return e === l || e === s ? k(t) : b(t, v, d);
          },
          k = function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : y;
            return b(t, g, h);
          },
          A = function () {
            var t = 1 < arguments.length ? arguments[1] : void 0;
            return t === l || t === s ? m : p;
          },
          T = (function () {
            for (var t, e = document.getElementsByTagName('script'), n = 0; n < e.length; n++)
              if ((t = e[n]).src) {
                var r = new o.Url(t.src),
                  i = /\/assets\/external\/E-v1(-with-vulcan-v2)?\.js$/.test(r.rawPath),
                  a = r.host === u || 'fast.wistia.net' === r.host,
                  s = 'https:' === location.protocol && 'https:' === r.protocol,
                  l = '' === r.protocol || null == r.protocol,
                  c = s || l || 'http:' === location.protocol,
                  f = !t.readyState || /loaded|complete/.test(t.readyState);
                if (i && a && c && f) return r;
              }
            return new o.Url(''.concat((0, o.proto)(), '//').concat('fast.wistia.net', '/E-v1.js'));
          })(),
          S = function () {
            return T.host;
          },
          E = function () {
            return T.protocol;
          },
          P = function () {
            return 'pipedream.wistia.com';
          };
        new RegExp(
          '(' +
            ['wistia.net', 'wistia.com', 'wistia.st']
              .map(function (t) {
                return '\\.' + t.replace('.', '\\.');
              })
              .join('|') +
            ')$'
        );
      },
      41: (t, e, n) => {
        'use strict';
        n.d(e, { convertMp4sToM3u8s: () => s });
        var r = n(1),
          i = n(11),
          a = n(35),
          o = n(19),
          u = n(42);
        n(33), n(47), n(48);
        (0, o.cachedDetect)();
        null == r.default.RANDOM_PERCENT_FOR_VIEW &&
          (r.default.RANDOM_PERCENT_FOR_VIEW = 100 * Math.random());
        var s = function (t) {
            var e = (0, i.assign)(t, {});
            return (
              e.assets &&
                ((e.assets = e.assets.map(function (e) {
                  if (('mp4' === e.container || 'mp4_alternate_audio' === e.type) && e.url) {
                    var n = new a.Url(e.url);
                    n.ext('m3u8');
                    var r = n.absolute();
                    if (
                      (t.keyframeAlign && (r = ''.concat(n.absolute(), '/v2')),
                      !0 === e.clipForPoster)
                    ) {
                      var i = e.endTime,
                        o = e.startTime;
                      r = ''
                        .concat(n.absolute(), '/clipTo/')
                        .concat(i, '/clipFrom/')
                        .concat(o, '/index.m3u8');
                    }
                    e.url = r;
                  }
                  return e;
                })),
                t.keyframeAlign &&
                  (0, u.count)('player/keyframe-align-repackager', 1, {
                    hashedId: t.hashedId,
                    accountKey: t.accountKey,
                    href: location.href,
                  })),
              (e = l(e))
            );
          },
          l = function (t) {
            if (t.assets) {
              var e = {};
              t.assets.forEach(function (t) {
                'm3u8' === t.container && (e[t.display_name] = t);
              }),
                (t.assets = t.assets.map(function (n) {
                  return (
                    !(n.metadata && n.metadata.max_bitrate) &&
                      'mp4' === n.container &&
                      e[n.display_name] &&
                      ((0, u.count)('player/originV2/copying-metadata-for-asset', 1, {
                        hashedId: t.hashedId,
                        asset: n,
                      }),
                      (n.metadata = e[n.display_name].metadata)),
                    n
                  );
                }));
            }
            return t;
          };
      },
      25: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          getScriptTags: () => getScriptTags,
          execScriptTags: () => execScriptTags,
          removeScriptTags: () => removeScriptTags,
        });
        var player_lib_script_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26),
          getScriptTags = function (t) {
            return (
              t.match(/<script.*?src[^>]*>\s*<\/script>|<script.*?>[\s\S]+?<\/script>/gi) || []
            );
          },
          scriptTagsToRunScriptsInput = function scriptTagsToRunScriptsInput(scriptTags) {
            if (!scriptTags) return [];
            scriptTags instanceof Array || (scriptTags = getScriptTags(scriptTags));
            for (var hashes = [], i = 0; i < scriptTags.length; i++) {
              var scriptTag = scriptTags[i],
                hash = {},
                matches = scriptTag.match(/<script.*?>/i);
              matches &&
                ((matches = matches[0].match(/src="([^"]+)"/i)),
                matches &&
                  ((hash.src = matches[1]),
                  (hash.async = /async/i.test(scriptTag.replace(hash.src, ''))))),
                matches ||
                  ((matches = scriptTag.match(/<script>([\s\S]+?)<\/script>/i)),
                  matches &&
                    (function () {
                      var src = matches[1];
                      hash.fn = function () {
                        return eval(src);
                      };
                    })()),
                hashes.push(hash);
            }
            return hashes;
          },
          execScriptTags = function (t, e) {
            if (!t) return null;
            var n = scriptTagsToRunScriptsInput(t);
            return (0, player_lib_script_utils__WEBPACK_IMPORTED_MODULE_0__.runScripts)(n).then(e);
          },
          removeScriptTags = function (t) {
            return t.replace(/<script.*?src[^>]*>\s*<\/script>|<script>[\s\S]+?<\/script>/g, '');
          };
      },
      26: (t, e, n) => {
        'use strict';
        n.d(e, { runScripts: () => h });
        var r = n(20),
          i = n(11),
          a = n(13),
          o = n.n(a),
          u = n(27);
        function s(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function l(t) {
          for (var e, n = 1; n < arguments.length; n++)
            (e = null == arguments[n] ? {} : arguments[n]),
              n % 2
                ? s(Object(e), !0).forEach(function (n) {
                    c(t, n, e[n]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                : s(Object(e)).forEach(function (n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
                  });
          return t;
        }
        function c(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var f = function (t) {
            for (
              var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                n = document.getElementsByTagName('script'),
                r = 0;
              r < n.length;
              r++
            ) {
              var i = n[r],
                a = i.getAttribute('src') || '';
              if (e.ignoreQueryParams) {
                var o = a.split('?'),
                  u = o[0];
                a = u;
              }
              if (
                (!e.scriptRegex &&
                  e.ignoreProtocol &&
                  ((a = a.replace(/^https?:/, '')), (t = t.replace(/^https?:/, ''))),
                e.scriptRegex && e.scriptRegex.test(a))
              )
                return i;
              if (e.testStartsWith && 0 === a.indexOf(t)) return i;
              if (a === t) return i;
            }
            return null;
          },
          d = function (t) {
            var e,
              n,
              r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 8e3,
              i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            return (
              null == r && (r = 8e3),
              null == i && (i = {}),
              new (o())(function (a) {
                return (
                  !0 === i.once && (e = f(t)) && (n = !0),
                  i.once && n
                    ? void (
                        (!e.readyState || /loaded|complete/.test(e.readyState)) &&
                        setTimeout(function () {
                          a();
                        }, 1)
                      )
                    : (0, u.default)(t, r)
                        .then(a)
                        .catch(function (t) {
                          a(t),
                            setTimeout(function () {
                              console.error(t);
                            }, 1);
                        })
                );
              })
            );
          },
          h = function () {
            for (var t, e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
            (t = n[0] instanceof Array ? n[0] : n), (t = v(t));
            var a = [],
              u = [],
              s = [];
            return (
              t.forEach(function (t) {
                var e = l({}, t),
                  n = new (o())(function (t) {
                    e.resolve = t;
                  });
                (e.promise = n), s.push(e.promise), t.async ? a.push(e) : u.push(e);
              }),
              u.reduce(function (t, e) {
                if (e.fn)
                  try {
                    e.fn();
                  } catch (t) {
                    r.wlog.error(t);
                  } finally {
                    e.resolve();
                  }
                else e.src && d(e.src, null, e).then(e.resolve);
                return t.then(e.promise);
              }, o().resolve()),
              setTimeout(function () {
                a.forEach(function (t) {
                  if (t.fn)
                    try {
                      t.fn();
                    } catch (t) {
                      r.wlog.error(t);
                    } finally {
                      t.resolve();
                    }
                  else t.src && d(t.src, null, t).then(t.resolve);
                });
              }, 1),
              o().all(s)
            );
          },
          v = function (t) {
            for (var e, n = [], r = 0; r < t.length; r++)
              'string' == typeof (e = t[r])
                ? n.push({ src: e, async: !1 })
                : (0, i.isObject)(e)
                ? n.push(e)
                : n.push({ fn: e, async: !1 });
            return n;
          };
      },
      43: (t, e, n) => {
        'use strict';
        n.d(e, { doTimeout: () => o });
        var r = n(1),
          i = n(11),
          a = r.default;
        null == a._timeouts && (a._timeouts = {});
        var o = function (t, e) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1;
            (0, i.isArray)(t) && (t = t.join('.'));
            var r = l(t);
            if ((u(t, r), e)) {
              var o = a._timeouts[r];
              null == o && (o = a._timeouts[r] = {});
              var s = setTimeout(function () {
                delete o[t], e();
              }, n);
              return (o[t] = s), s;
            }
            return a._timeouts[r][t];
          },
          u = function (t) {
            var e,
              n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            if (
              ((0, i.isArray)(t) && (t = t.join('.')),
              '__global__' === (n = n || l(t)) && (e = a._timeouts[t]))
            )
              for (var r in e) {
                var o = e[r];
                clearTimeout(o), delete e[r];
              }
            if ((e = a._timeouts[n]))
              for (var u in e) {
                var c = e[u];
                u.indexOf &&
                  0 === u.indexOf(t) &&
                  (u.length === t.length || '.' === u.charAt(t.length)) &&
                  (clearTimeout(c), delete e[u]);
              }
            a.blockSweepTimeouts ||
              ((a.blockSweepTimeouts = !0),
              setTimeout(s, 0),
              setTimeout(function () {
                a.blockSweepTimeouts = !1;
              }, 5e3));
          },
          s = function () {
            for (var t in a._timeouts) {
              var e = a._timeouts[t];
              (0, i.isEmpty)(e) && delete a._timeouts[t];
            }
          },
          l = function (t) {
            var e = t.indexOf('.');
            return 0 < e ? t.substring(0, e) : '__global__';
          };
      },
      12: (t, e, n) => {
        'use strict';
        n.d(e, { default: () => i });
        var r = function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          return t;
        };
        const i = function (t) {
          for (var e = arguments.length, n = Array(1 < e ? e - 1 : 0), i = 1; i < e; i++)
            n[i - 1] = arguments[i];
          if (Object.assign) return Object.assign.apply(Object, [t].concat(n));
          for (var a = 0; a < n.length; a++) r(t, n[a]);
          return t;
        };
      },
      23: (t, e, n) => {
        'use strict';
        n.d(e, {
          bind: () => u,
          unbind: () => s,
          trigger: () => c,
          bindNamed: () => h,
          unbindNamed: () => v,
          unbindAllInNamespace: () => g,
          bindify: () => m,
        });
        var r = n(1);
        function i(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return a(t);
            })(t) ||
            (function (t) {
              if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t);
            })(t) ||
            (function (t, e) {
              if (t) {
                if ('string' == typeof t) return a(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  'Object' === n && t.constructor && (n = t.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(t)
                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? a(t, e)
                    : void 0
                );
              }
            })(t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        }
        function a(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        var o = Array.prototype.slice,
          u = function (t, e) {
            var n = this;
            return (
              n._bindings || (n._bindings = {}),
              n._bindings[t] || (n._bindings[t] = []),
              n._bindings[t].push(e),
              function () {
                n.unbind(t, e);
              }
            );
          },
          s = function (t, e) {
            if (!this._bindings) return this;
            if (!this._bindings[t]) return this;
            for (var n, r = [], i = 0; i < this._bindings[t].length; i++)
              (n = this._bindings[t][i]) !== e && r.push(n);
            this._bindings[t] = r;
          },
          l = function (t, e) {
            return this.unbind(t, e), this.bind(t, e), { event: t, fn: e };
          },
          c = function (t) {
            for (var e = arguments.length, n = Array(1 < e ? e - 1 : 0), r = 1; r < e; r++)
              n[r - 1] = arguments[r];
            return (
              this._bindings && null != this._bindings.all && f.apply(this, ['all', t].concat(n)),
              f.apply(this, [t].concat(n))
            );
          },
          f = function (t) {
            if (!this._bindings) return this;
            if (!this._bindings[t]) return this;
            for (
              var e, n, a = o.call(arguments, 1), u = i(this._bindings[t]), s = 0;
              s < u.length;
              s++
            ) {
              n = u[s];
              try {
                var l = n.apply(this, a);
                l === this.unbind && (null == e && (e = []), e.push({ event: t, fn: n }));
              } catch (t) {
                if (this._throwTriggerErrors) throw t;
                r.default.error && r.default.error(t);
              }
            }
            if (e) for (var c, f = 0; f < e.length; f++) (c = e[f]), this.unbind(c.event, c.fn);
            return this;
          },
          d = function (t, e) {
            null == t._namedBindings && (t._namedBindings = {}),
              null == t._namedBindings[e] && (t._namedBindings[e] = {});
          },
          h = function (t, e, n, r) {
            return (
              this.unbindNamed(t, e),
              (function (t, e, n, r, i) {
                d(t, e), (t._namedBindings[e][n] = { event: r, fn: i });
              })(this, t, e, n, r),
              this.bind(n, r),
              function () {
                this.unbindNamed(t, e);
              }
            );
          },
          v = function (t, e) {
            d(this, t);
            var n = (function (t, e, n) {
              return d(t, e), t._namedBindings[e][n];
            })(this, t, e);
            if (n) {
              var r = n.event,
                i = n.fn;
              this.unbind(r, i);
            }
            var a = this._namedBindings;
            return delete a[t][e], p(a[t]) && delete a[t], this;
          },
          g = function (t) {
            var e = this._namedBindings && this._namedBindings[t];
            if (null == e) return this;
            for (var n in e) e.hasOwnProperty(n) && this.unbindNamed(t, n);
          },
          p = function (t) {
            for (var e in t) if (t.hasOwnProperty(e)) return !1;
            return !0;
          },
          m = function (t) {
            return (
              (t.bind = u),
              (t.unbind = s),
              (t.on = u),
              (t.off = s),
              (t.rebind = l),
              (t.trigger = c),
              (t.bindNamed = h),
              (t.unbindNamed = v),
              (t.unbindAllInNamespace = g),
              t
            );
          };
        m(function () {}.prototype);
      },
      344: (t, e, n) => {
        'use strict';
        n.d(e, { uncacheNamespace: () => i, makeNamespace: () => r });
        var r = function (t) {
            return function (e) {
              return null == e[t] && (e[t] = {}), e[t];
            };
          },
          i = function (t, e) {
            e[t] = {};
          };
      },
      38: (t, e, n) => {
        'use strict';
        n.d(e, { base64Encode: () => r });
        n(1), n(17), n(39), n(40);
        var r = function (t) {
          return btoa(
            encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function (t, e) {
              return String.fromCharCode('0x' + e);
            })
          );
        };
      },
      19: (t, e, n) => {
        'use strict';
        n.d(e, { cachedDetect: () => Q });
        var r,
          i = n(1),
          a = n(2),
          o = navigator.userAgent,
          u = /(webkit)[ /]([^\s]+)/i,
          s = /OPR\/([^\s]+)/i,
          l = /(msie) ([^\s;]+)/i,
          c = /(trident)\/\s*([^;]+)/i,
          f = /(edge)\/(\d+(?:\.\d+)?)/i,
          d = /(mozilla)(?:.*? rv:([^\s)]+))?/i,
          h = /(android) ([^;]+)/i,
          v = /(iphone)/i,
          g = /(ipad)/i,
          p = /(Windows Phone OS (\d+(?:\.\d+)?))/,
          m = /OS (\d+)_(\d+)/i,
          y = /(playstation 3)/i,
          b = /BlackBerry|BB10/i,
          w = /(firefox)/i,
          _ = /Mobile VR/i,
          k = /Version\/([^\s]+)/i,
          A = function () {
            return (S()[1] || 'webkit').toLowerCase();
          },
          T = function () {
            return S()[2];
          },
          S = function () {
            var t;
            return (
              (t = o.match(f)) ||
              (t = o.match(u)) ||
              (t = o.match(s)) ||
              ((t = o.match(l))
                ? (null != document.documentMode && (t[2] = document.documentMode), t)
                : (t = o.match(d)) || [])
            );
          },
          E = function () {
            var t = o.match(h);
            return null != t && { version: t[2] };
          },
          P = function () {
            return v.test(o);
          },
          C = function () {
            return 0 < B() || E();
          },
          x = function () {
            try {
              var t = matchMedia('(hover:hover)');
              if ('not all' !== t.media) return t.matches;
            } catch (t) {}
            return !C();
          },
          O = function () {
            return b.test(o);
          },
          M = function () {
            return (
              !!(
                'MacIntel' === navigator.platform &&
                0 <= navigator.userAgent.indexOf('Mac') &&
                1 < navigator.maxTouchPoints
              ) || g.test(o)
            );
          },
          R = function () {
            return u.test(o) && !/chrome/i.test(o) && !M() && !P();
          },
          L = function () {
            return !(!/Chrome/.test(o) || !/Google Inc/.test(navigator.vendor)) && { version: F() };
          },
          F = function () {
            var t = o.match(/\bChrome\/([^\s]+)/);
            return t && t[1];
          },
          I = function () {
            return s.test(o);
          },
          B = function () {
            var t = o.match(m),
              e = o.match(k);
            return null == t
              ? null != e && e[1] && M()
                ? parseFloat(e[1])
                : 0
              : parseFloat(''.concat(t[1], '.').concat(t[2]));
          },
          D = function () {
            return c.test(o);
          },
          j = function () {
            return f.test(o);
          },
          q = function () {
            return w.test(o);
          },
          W = function () {
            try {
              try {
                var t = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
                try {
                  t.AllowScriptAccess = 'always';
                } catch (t) {
                  return [6, 0, 0];
                }
              } catch (t) {}
              return new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
                .GetVariable('$version')
                .replace(/\D+/g, ',')
                .match(/^,?(.+),?$/)[1]
                .split(',');
            } catch (t) {
              try {
                if (navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin)
                  return (
                    navigator.plugins['Shockwave Flash 2.0'] || navigator.plugins['Shockwave Flash']
                  ).description
                    .replace(/\D+/g, ',')
                    .match(/^,?(.+),?$/)[1]
                    .split(',');
              } catch (t) {}
            }
            return [0, 0, 0];
          },
          V = function () {
            var t = document.createElement('video'),
              e = !1;
            try {
              if (t.canPlayType) {
                ((e = {}).h264 =
                  !!t.canPlayType('video/mp4; codecs="avc1.42E01E"') ||
                  !!t.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')),
                  (e.webm = !!t.canPlayType('video/webm; codecs="vp9, vorbis"')),
                  (e.nativeHls = !!t.canPlayType('application/vnd.apple.mpegURL'));
              }
            } catch (t) {
              e = { ogg: !1, h264: !1, webm: !1, nativeHls: !1 };
            }
            return e;
          },
          N = function () {
            try {
              return 'localStorage' in a.default && null != a.default.localStorage;
            } catch (t) {
              return !1;
            }
          },
          U = ['WebKit', 'Moz', 'O', 'Ms', ''],
          H = function () {
            for (var t = 0; t < U.length; t++) {
              var e = U[t] + 'MutationObserver';
              if (a.default[e]) return e;
            }
            return null;
          },
          z = function () {
            if (null != r) return r;
            try {
              var t = Object.defineProperty({}, 'passive', {
                get: function () {
                  r = !0;
                },
              });
              window.addEventListener('test', null, t);
            } catch (t) {
              r = !1;
            }
            return r;
          },
          Q = function () {
            return i.default._detectCache || (i.default._detectCache = $()), i.default._detectCache;
          },
          $ = function () {
            var t,
              e,
              n,
              r,
              i,
              u,
              s,
              l,
              c,
              f,
              d,
              h,
              v,
              g,
              m = {
                browser: {
                  version: T(),
                  quirks: 'msie' === A() && 'BackCompat' === document.compatMode,
                  old: 'msie' === A() && ('BackCompat' === document.compatMode || 7 > T()),
                  ltie8: 'msie' === A() && ('BackCompat' === document.compatMode || 8 > T()),
                },
                trident: D(),
                edge: j(),
                firefox: q(),
                gearvr: _.test(o),
                android: E(),
                oldandroid: E() && 4.1 > parseFloat(E().version) && !D(),
                iphone: P(),
                ipad: M(),
                blackberry: O(),
                safari: R(),
                chrome: L(),
                opera: I(),
                winphone: { version: p.test(o)[2] },
                ios: { version: B() },
                windows: /win/i.test(navigator.platform),
                mac: /mac/i.test(navigator.platform),
                linux: /linux/i.test(navigator.platform),
                retina: null != a.default.devicePixelRatio && 1 < a.default.devicePixelRatio,
                hoverIsNatural: x(),
                touchScreen: C(),
                ps3: y.test(o),
                flash:
                  ((g = W()),
                  {
                    version: parseFloat(g[0] + '.' + g[1]),
                    major: parseInt(g[0]),
                    minor: parseInt(g[1]),
                    rev: parseInt(g[2]),
                  }),
                video: V(),
                mediaSource:
                  a.default.MediaSource &&
                  a.default.MediaSource.isTypeSupported(
                    'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                  ),
                nativeHls: (P() || M() || R()) && !D() && V().nativeHls,
                localstorage: N(),
                json: !(!a.default.JSON || 'function' != typeof JSON.parse),
                backgroundSize:
                  ((v = document.createElement('div')),
                  '' === v.style.backgroundSize ||
                    '' === v.style.webkitBackgroundSize ||
                    '' === v.style.mozBackgroundSize ||
                    '' === v.style.oBackgroundSize),
                fullscreenEnabled:
                  document.fullscreenEnabled ||
                  document.mozFullScreenEnabled ||
                  document.webkitFullscreenEnabled ||
                  document.msFullscreenEnabled,
                vulcanSupport:
                  ((d = /webkit|mozilla|edge/.test(A())),
                  (h = 'msie' === A() && 11 <= T()),
                  !(
                    P() ||
                    M() ||
                    E() ||
                    O() ||
                    (!d && !h) ||
                    !V().h264 ||
                    !Object.defineProperties
                  )),
                mutationObserver: H(),
                callingPlayRequiresEventContext: 0 < B() || E() || R(),
                passiveSupported: z(),
                webp:
                  ((t = L()),
                  (e = q()),
                  (n = j()),
                  (r = I()),
                  (i = t && 32 <= T()),
                  (u = t && 75 <= T() && E()),
                  (s = e && 65 <= T()),
                  (l = e && 67 <= T() && E()),
                  (c = n && 18 <= T()),
                  (f = r && 19 <= T()),
                  i || u || s || l || c || f),
              };
            return (m.browser[A()] = !0), m;
          };
      },
      16: (t, e, n) => {
        'use strict';
        n(17);
      },
      50: (t, e, n) => {
        'use strict';
        n.d(e, { globalEventLoop: () => s });
        var r = n(20),
          i = n(1),
          a = r.wlog.getPrefixedFunctions('event_loop'),
          o = function () {
            var t = this,
              e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            (this._timeoutId = null),
              (this._latency = null == e.latency ? 100 : e.latency),
              (this._blurLatency = null == e.blurLatency ? 2e3 : e.blurLatency),
              (this._functions = {}),
              (this._paused = {}),
              window.addEventListener(
                'blur',
                function () {
                  return t.blur();
                },
                !1
              ),
              window.addEventListener(
                'focus',
                function () {
                  return t.focus();
                },
                !1
              ),
              this.start();
          },
          u = o.prototype;
        (u.start = function () {
          var t = this;
          clearTimeout(this._timeoutId),
            (this._loopFn =
              this._loopFn ||
              function () {
                t.runFunctions(), (t._timeoutId = setTimeout(t._loopFn, t._latency));
              }),
            this._loopFn();
        }),
          (u.resync = function () {
            this.start();
          }),
          (u.resyncNextTick = function () {
            var t = this;
            setTimeout(function () {
              t.resync();
            }, 0);
          }),
          (u.stop = function () {
            clearTimeout(this._timeoutId);
          }),
          (u.clear = function () {
            this._functions = {};
          }),
          (u.runFunctions = function () {
            this._pausedDirty && this.updatePaused();
            var t = [];
            for (var e in this._functions) {
              var n = this._functions[e],
                r = new Date().getTime(),
                i = r - n.lastRanAt;
              if (!n.paused && i >= n.interval) {
                n.lastRanAt = r;
                try {
                  n.fn() === this.remove && t.push(e);
                } catch (t) {
                  a.error(t);
                }
              }
            }
            for (var o = 0; o < t.length; o++) this.remove(t[o]);
          }),
          (u.add = function (t, e, n) {
            var r = new Date().getTime();
            this._functions[t] = { addedAt: r, lastRanAt: -1, interval: e, fn: n };
            var i = n();
            this._functions[t] && (this._functions[t].lastRanAt = new Date().getTime()),
              this._functions[t] && i === this.remove
                ? delete this._functions[t]
                : (this._pausedDirty = !0);
          }),
          (u.remove = function (t) {
            var e = this;
            this.forEachMatchingKey(t, function (t) {
              delete e._functions[t];
            });
          }),
          (u.forEachMatchingKey = function (t, e) {
            for (var n in this._functions) {
              var r = this._functions[n];
              this.key1IncludesKey2(t, n) && e(n, r);
            }
          }),
          (u.latency = function (t) {
            return null == t ? this._latency : void (this._latency = t);
          }),
          (u.interval = function (t, e) {
            return null == e
              ? this._functions[t].interval
              : void (null == this._functions[t]
                  ? a.notice(
                      'setting interval of ',
                      t,
                      'to',
                      e,
                      'failed because',
                      t,
                      'is not defined'
                    )
                  : (this._functions[t].interval = e));
          }),
          (u.pause = function (t) {
            (this._paused[t] = !0), (this._pausedDirty = !0);
          }),
          (u.unpause = function (t) {
            (this._paused[t] = !1), (this._pausedDirty = !0);
          }),
          (u.isPaused = function (t) {
            for (var e in this.paused) {
              if (this._paused[e] && this.key1IncludesKey2(e, t)) return !0;
            }
            return !1;
          }),
          (u.updatePaused = function () {
            for (var t in this._functions) {
              this._functions[t].paused = this.isPaused(t);
            }
            this._pausedDirty = !1;
          }),
          (u.key1IncludesKey2 = function (t, e) {
            return (
              'function' == typeof e.indexOf &&
              0 === e.indexOf(t) &&
              (e.length === t.length || '.' === e.charAt(t.length))
            );
          }),
          (u.blur = function () {
            this._blurred ||
              ((this._blurred = !0),
              (this._savedLatency = this._latency),
              (this._latency = this._blurLatency));
          }),
          (u.focus = function () {
            this._blurred &&
              ((this._blurred = !1), (this._latency = this._savedLatency), this.resync());
          }),
          null == i.default.eventLoop &&
            (i.default.eventLoop = new o({ latency: 100, blurLatency: 100 }));
        var s = i.default.eventLoop;
      },
      21: (t, e, n) => {
        'use strict';
        n.d(e, { globalTrigger: () => i });
        var r = n(1);
        (0, n(22).makeWbindable)(r.default);
        r.default.bind.bind(r.default),
          r.default.on.bind(r.default),
          r.default.off.bind(r.default),
          r.default.rebind.bind(r.default);
        var i = r.default.trigger.bind(r.default);
        r.default.unbind.bind(r.default);
      },
      47: (t, e, n) => {
        'use strict';
        n.d(e, { hashCodeForString: () => r });
        var r = function (t) {
          var e,
            n = 0;
          if (0 === t.length) return n;
          for (e = 0; e < t.length; e++) (n = (n << 5) - n + t.charCodeAt(e)), (n |= 0);
          return n;
        };
      },
      98: (t, e, n) => {
        'use strict';
        n.d(e, { parseLegacyVideoQualityWidth: () => o });
        var r = n(48);
        function i(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) {
                var n = [],
                  r = !0,
                  i = !1,
                  a = void 0;
                try {
                  for (
                    var o, u = t[Symbol.iterator]();
                    !(r = (o = u.next()).done) && (n.push(o.value), !e || n.length !== e);
                    r = !0
                  );
                } catch (t) {
                  (i = !0), (a = t);
                } finally {
                  try {
                    r || null == u.return || u.return();
                  } finally {
                    if (i) throw a;
                  }
                }
                return n;
              }
            })(t, e) ||
            (function (t, e) {
              if (t) {
                if ('string' == typeof t) return a(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  'Object' === n && t.constructor && (n = t.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(t)
                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? a(t, e)
                    : void 0
                );
              }
            })(t, e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        }
        function a(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        var o = function (t, e) {
          var n = (0, r.filter)(e, { container: /mp4|flv/, status: r.READY, public: !0 })[0];
          if (/width:/.test(t) && n) {
            var a = i(t.match(/width:(\d+)/i), 2),
              o = (a[0], a[1]),
              u = parseInt(o, 10),
              s = n.width / n.height;
            return Math.round(u / s);
          }
        };
      },
      42: (t, e, n) => {
        'use strict';
        n.d(e, { count: () => m });
        var r = n(1),
          i = n(43),
          a = n(20),
          o = n(11),
          u = n(15),
          s = n(35),
          l = n(33),
          c = n(37),
          f = n(44),
          d = void 0,
          h = r.default;
        null == h._metricsCache && (h._metricsCache = {});
        var v = h._metricsCache,
          g = function (t, e, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
            try {
              null == v.toMput && (v.toMput = []), null == v.requestId && (v.requestId = 0);
              var s = (0, o.merge)(
                  { type: t, key: e, value: null == n ? null : n, request_id: v.requestId },
                  r
                ),
                l = JSON.stringify(s);
              a.wlog.debug('send metrics', l),
                v.toMput.push(l),
                (0, i.doTimeout)(
                  'metrics.debounce',
                  function () {
                    (0, u.pageLoaded)(function () {
                      p.apply(d, v.toMput), (v.toMput = []), (v.requestId += 1);
                    });
                  },
                  500
                );
            } catch (t) {
              a.wlog.error(t);
            }
          },
          p = function () {
            if ((0, f.isVisitorTrackingEnabled)()) {
              for (
                var t = ''
                    .concat((0, s.proto)(), '//')
                    .concat((0, l.metricsHost)(), '/mput?topic=metrics'),
                  e = arguments.length,
                  n = Array(e),
                  r = 0;
                r < e;
                r++
              )
                n[r] = arguments[r];
              return (0, c.xhrPost)(t, n.join('\n'));
            }
          },
          m = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
              n = 2 < arguments.length ? arguments[2] : void 0;
            return g('count', t, e, n);
          };
      },
      46: (t, e, n) => {
        'use strict';
        n.d(e, {
          getLocalStorage: () => s,
          removeLocalStorage: () => l,
          setLocalStorage: () => c,
          updateLocalStorage: () => f,
        });
        var r = n(1),
          i = function (t) {
            setTimeout(function () {
              throw t;
            }, 0);
          },
          a = '_namespacedLocalStorage',
          o = function (t) {
            if (null != r.default._localStorageWorks) return r.default._localStorageWorks;
            try {
              var e = localStorage.getItem(t);
              localStorage.removeItem(t),
                localStorage.setItem(t, e),
                (r.default._localStorageWorks = !0);
            } catch (t) {
              r.default._localStorageWorks = !1;
            }
            return r.default._localStorageWorks;
          },
          u = function () {
            return null == r.default[a] && (r.default[a] = {}), r.default[a];
          },
          s = function (t) {
            if (!o()) return u()[t] || {};
            if (localStorage[t])
              try {
                return 'null' === localStorage[t] ? {} : JSON.parse(localStorage[t]);
              } catch (t) {
                i(t);
              }
            return {};
          },
          l = function (t) {
            if (o())
              try {
                localStorage.removeItem(t);
              } catch (t) {
                i(t);
              }
            else u()[t] = {};
          },
          c = function (t, e) {
            if (!o()) return null != e && 'object' == typeof e && (u()[t] = e), e;
            try {
              (u()[t] = e), (localStorage[t] = JSON.stringify(e));
            } catch (t) {
              i(t);
            }
            return e;
          },
          f = function (t, e) {
            var n = s(t);
            try {
              e(n);
            } catch (t) {
              i(t);
            }
            return c(t, n);
          };
      },
      11: (t, e, n) => {
        'use strict';
        n.d(e, {
          merge: () => a,
          clone: () => l,
          getDeep: () => c,
          setAndPreserveUndefined: () => f,
          assign: () => r.default,
          cast: () => h,
          only: () => p,
          except: () => m,
          select: () => y,
          filter: () => _,
          sort: () => w,
          isArray: () => A,
          isObject: () => S,
          isEmpty: () => x,
          eachLeaf: () => M,
        });
        var r = n(12),
          i = Array.prototype.slice,
          a = function (t) {
            if (0 == (1 >= arguments.length ? 0 : arguments.length - 1)) return t;
            for (var e = 0; e < (1 >= arguments.length ? 0 : arguments.length - 1); e++)
              o(t, 1 > e + 1 || arguments.length <= e + 1 ? void 0 : arguments[e + 1]);
            return t;
          },
          o = function t(e, n) {
            var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : u,
              i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : s;
            if (A(n)) {
              A(e) || (e = []);
              for (var a, o = 0; o < n.length; o++) {
                (a = n[o]), null == e[o] && null != a && (A(a) ? (e[o] = []) : S(a) && (e[o] = {}));
                var l = t(e[o], a, r);
                i(n, o, l) ? delete e[o] : (e[o] = l);
              }
              return r(e);
            }
            if (S(n)) {
              for (var c in n)
                if (n.hasOwnProperty(c) && (e.hasOwnProperty(c) || null == e[c])) {
                  var f = n[c];
                  A(f)
                    ? (!A(e[c]) && (e[c] = []), t(e[c], f, r), (e[c] = r(e[c])))
                    : S(f)
                    ? (!S(e[c]) && (e[c] = {}), t(e[c], f, r), (e[c] = r(e[c])))
                    : null == e
                    ? ((e = {}), !i(n, c, f) && (e[c] = r(f)))
                    : i(n, c, f)
                    ? delete e[c]
                    : (e[c] = r(f));
                }
              return r(e);
            }
            return r(n);
          },
          u = function (t) {
            return t;
          },
          s = function (t, e, n) {
            return null == n;
          },
          l = function (t, e) {
            return A(t) ? o([], t, e) : o({}, t, e);
          },
          c = function (t, e, n) {
            e = 'string' == typeof e ? e.split('.') : i.call(e);
            for (var r, a = t; null != t && e.length; ) {
              var o = e.shift();
              (void 0 !== t[o] && (S(t[o]) || A(t[o]))) ||
                !n ||
                (0 === o ? ((t = a[r] = [])[o] = {}) : (t[o] = {})),
                (a = t),
                (r = o),
                (t = t.hasOwnProperty(o) ? t[o] : void 0);
            }
            return t;
          },
          f = function (t, e, n) {
            return d(t, e, n, !1);
          },
          d = function (t, e, n) {
            var r = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
              a = (e = 'string' == typeof e ? e.split('.') : i.call(e)).pop();
            null != (t = c(t, e, !0)) &&
              (S(t) || A(t)) &&
              null != a &&
              (r && null == n ? delete t[a] : (t[a] = n));
          },
          h = function (t) {
            return null == t ? t : S(t) || A(t) ? g(t) : v('' + t, t);
          },
          v = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t;
            return /^-?[1-9]\d*?$/.test(t)
              ? parseInt(t, 10)
              : '0' === t || '-0' === t
              ? 0
              : /^-?\d*\.\d+$/.test(t)
              ? parseFloat(t)
              : !!/^true$/i.test(t) || (!/^false$/i.test(t) && e);
          },
          g = function (t) {
            return o(
              t,
              t,
              function (t) {
                return 'string' == typeof t ? v(t) : t;
              },
              function () {
                return !1;
              }
            );
          },
          p = function (t, e) {
            for (var n = {}, r = {}, i = 0; i < e.length; i++) r[e[i]] = !0;
            for (var a in t) r[a] && (n[a] = t[a]);
            return n;
          },
          m = function (t, e) {
            for (var n = {}, r = {}, i = 0; i < e.length; i++) r[e[i]] = !0;
            for (var a in t) r[a] || (n[a] = t[a]);
            return n;
          },
          y = function (t, e) {
            for (
              var n, r = [], i = 'function' == typeof e, a = i ? e : null, o = 0;
              o < t.length;
              o++
            )
              if (((n = t[o]), i)) a(n) && r.push(n);
              else {
                var u = !0;
                for (var s in e) {
                  var l = e[s];
                  if (l instanceof Array) {
                    if (!n[s] || n[s] < l[0] || n[s] > l[1]) {
                      u = !1;
                      break;
                    }
                  } else if (l instanceof RegExp) {
                    if (!l.test(n[s])) {
                      u = !1;
                      break;
                    }
                  } else if (l instanceof b) {
                    for (var c, f = !1, d = 0; d < l.values.length; d++)
                      if (((c = l.values[d]), n[s] === c)) {
                        f = !0;
                        break;
                      }
                    if (!f) {
                      u = !1;
                      break;
                    }
                  } else if ('function' == typeof l) {
                    if (null == n[s] || !l(n[s])) {
                      u = !1;
                      break;
                    }
                  } else if (n[s] !== l) {
                    u = !1;
                    break;
                  }
                }
                u && r.push(n);
              }
            return r;
          },
          b = function (t) {
            var e = this;
            return (e.values = t), e;
          },
          w = function (t, e) {
            var n = 'function' == typeof e,
              r = n ? e : null,
              a = i.call(t);
            return (
              n
                ? a.sort(r)
                : a.sort(function (t, n) {
                    var r;
                    r = e instanceof Array ? l(e) : e.split(/\s*,\s*/);
                    for (var i = 0; 0 === i && 0 < r.length; ) {
                      var a = r.shift().split(/\s+/),
                        o = a[0],
                        u = a[1];
                      if (((u = 'desc' === u ? -1 : 1), t[o] < n[o])) {
                        i = -1 * u;
                        break;
                      }
                      if (t[o] !== n[o]) {
                        i = 1 * u;
                        break;
                      }
                      i = 0;
                    }
                    return i;
                  }),
              a
            );
          },
          _ = function (t, e, n) {
            for (var r = void 0 === n ? undefined : n, i = [], a = 0; a < t.length; a++)
              e.call(r, t[a], a, t) && i.push(t[a]);
            return i;
          },
          k = /^\s*function Array()/,
          A = function (t) {
            return null != t && t.push && k.test(t.constructor);
          },
          T = /^\s*function Object()/,
          S = function (t) {
            return null != t && 'object' == typeof t && T.test(t.constructor);
          },
          E = /^\s*function RegExp()/,
          P = /^string|number|boolean|function$/i,
          C = function (t) {
            return (
              null != t &&
              (P.test(typeof t) ||
                (function (t) {
                  return null != t && E.test(t.constructor);
                })(t))
            );
          },
          x = function (t) {
            if (null == t) return !0;
            if (A(t) && !t.length) return !0;
            if (S(t)) {
              for (var e in t) return !1;
              return !0;
            }
            return !1;
          },
          O = function t(e, n, r, a, o) {
            if ((null == r && (r = []), C(e))) n(e, r, a, o);
            else if (S(e) || A(e)) {
              for (var u in (n(e, r, a, o), e))
                if (e.hasOwnProperty(u)) {
                  var s = i.call(r);
                  s.push(u), t(e[u], n, s, e, u);
                }
            } else n(e, r, a, o);
          },
          M = function (t, e) {
            O(t, function (t, n, r, i) {
              A(t) || S(t) || e(t, n, r, i);
            });
          };
      },
      18: (t, e, n) => {
        'use strict';
        n.d(e, { default: () => r });
        const r = function (t) {
          var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 4e3,
            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : document,
            r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : window;
          if (/loaded|complete/.test(n.readyState)) setTimeout(t, 0);
          else {
            var i = function () {
                r.removeEventListener('load', a, !1);
              },
              a = function () {
                clearTimeout(o), i(), t();
              };
            r.addEventListener('load', a, !1);
            var o = setTimeout(function () {
              i(), t();
            }, e);
          }
        };
      },
      17: (t, e, n) => {
        'use strict';
        n.d(e, { default: () => r });
        const r = function (t, e) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 50,
            r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 5e3,
            i = 4 < arguments.length ? arguments[4] : void 0,
            a = null,
            o = new Date().getTime(),
            u = function u() {
              return new Date().getTime() - o > r
                ? void ('function' == typeof i && i())
                : void (t() ? e() : (clearTimeout(a), (a = setTimeout(u, n))));
            };
          a = setTimeout(u, 1);
        };
      },
      2: (t, e, n) => {
        'use strict';
        var r;
        n.d(e, { default: () => i });
        try {
          (r = self).self !== r &&
            void 0 !== typeof r.self &&
            'undefined' != typeof window &&
            (r = window);
        } catch (t) {
          r = 'undefined' == typeof globalThis ? window : globalThis;
        }
        const i = r;
      },
      27: (t, e, n) => {
        'use strict';
        n.d(e, { default: () => a });
        var r = n(13),
          i = n.n(r);
        const a = function (t, e) {
          return new (i())(function (n, r) {
            var i;
            null == e && (e = 8e3),
              ((i = document.createElement('script')).src = t),
              (i.async = !0),
              (i.type = 'text/javascript');
            var a = null,
              o = !1,
              u = function () {
                (i.onerror = i.onreadystatechange = i.onload = null),
                  clearTimeout(a),
                  clearTimeout(l),
                  (a = setTimeout(function () {
                    i && i.parentNode && i.parentNode.removeChild(i);
                  }, 500));
              },
              s = function () {
                var t = i.readyState;
                o ||
                  (t && !/loaded|complete/.test(t)) ||
                  ((o = !0),
                  setTimeout(function () {
                    n(), u();
                  }, 1));
              },
              l = setTimeout(function () {
                (o = !0), u(), r('timeout');
              }, e);
            (i.onerror = function () {
              (o = !0), u(), r('error');
            }),
              (i.onreadystatechange = s),
              (i.onload = s),
              (document.body || document.head).appendChild(i);
          });
        };
      },
      9: (t, e, n) => {
        'use strict';
        n.d(e, { seqId: () => i });
        var r = n(1),
          i = function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'wistia_',
              e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : '',
              n = r.default._sequenceVal || 1,
              i = '' + t + n + e;
            return (r.default._sequenceVal = n + 1), i;
          };
      },
      39: () => {
        'use strict';
      },
      44: (t, e, n) => {
        'use strict';
        n.d(e, { isVisitorTrackingEnabled: () => c });
        var r = n(1),
          i = n(21),
          a = n(45);
        function o(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return u(t);
            })(t) ||
            (function (t) {
              if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t);
            })(t) ||
            (function (t, e) {
              if (t) {
                if ('string' == typeof t) return u(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  'Object' === n && t.constructor && (n = t.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(t)
                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? u(t, e)
                    : void 0
                );
              }
            })(t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        }
        function u(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        var s;
        r.default._visitorTrackingDomain ||
          (r.default._visitorTrackingDomain = location.hostname || ''),
          r.default._visitorTracking ||
            (null != (s = (0, a.getWistiaLocalStorage)().visitorTrackingEnabled) &&
              ((0, a.updateWistiaLocalStorage)(function (t) {
                return delete t.visitorTrackingEnabled;
              }),
              (r.default._visitorTracking = {}),
              (r.default._visitorTracking[r.default._visitorTrackingDomain] = {
                isEnabled: s,
                updatedAt: Date.now(),
              }),
              (0, a.updateWistiaLocalStorage)(function (t) {
                return (t.visitorTracking = r.default._visitorTracking);
              })),
            (r.default._visitorTracking = (0, a.getWistiaLocalStorage)().visitorTracking || {}));
        r.default.consent = function (t) {
          return null == t ? c() : l(t);
        };
        var l = function (t) {
            var e =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : r.default._visitorTrackingDomain;
            'default' === t
              ? delete r.default._visitorTracking[e]
              : (r.default._visitorTracking[e] = {
                  isEnabled: 'true' === ''.concat(t),
                  updatedAt: Date.now(),
                }),
              (0, a.updateWistiaLocalStorage)(function (t) {
                return (t.visitorTracking = r.default._visitorTracking);
              }),
              (0, i.globalTrigger)('visitortrackingchange', t);
          },
          c = function () {
            if ('boolean' == typeof r.default._visitorTracking) return r.default._visitorTracking;
            if (r.default._visitorTracking) {
              var t = (function () {
                if (r.default._visitorTrackingDomain)
                  for (var t = r.default._visitorTrackingDomain.split('.'); 0 < t.length; ) {
                    var e = r.default._visitorTracking[t.join('.')],
                      n = e && e.isEnabled;
                    if (null != n) return n;
                    t.shift();
                  }
              })();
              if (null != t) return !!t;
            }
            var e = [];
            if (r.default.api && r.default.api.all)
              try {
                e.push.apply(e, o(r.default.api.all()));
              } catch (t) {}
            if (r.default.channel && r.default.channel.all)
              try {
                e.push.apply(e, o(r.default.channel.all()));
              } catch (t) {}
            return !e.some(function (t) {
              return !0 === (t._mediaData || t._galleryData || {}).privacyMode;
            });
          };
      },
      40: (t, e, n) => {
        'use strict';
      },
      35: (t, e, n) => {
        'use strict';
        n.d(e, { proto: () => a, Url: () => c });
        var r = n(11),
          i = n(20),
          a = function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : location.href;
            return /^http:\/\//.test(t) ? 'http:' : 'https:';
          },
          o = function (t) {
            if (null == t) return t;
            var e;
            try {
              e = decodeURIComponent(t);
            } catch (n) {
              setTimeout(function () {
                i.wlog.notice(n);
              }, 50),
                (e = t);
            }
            return e;
          },
          u = function (t) {
            for (var e = t[0], n = 1; n < t.length; n++) e += '[' + t[n] + ']';
            return e;
          },
          s = function (t) {
            return t.match(/([\w\-_]+)/g);
          },
          l = ['protocol', 'host', 'port', 'params', 'path'],
          c = function (t) {
            var e = this;
            return (
              (e.params = {}),
              (e.path = []),
              (e.host = ''),
              'object' == typeof t ? e.fromOptions(t) : t && e.fromRaw(t),
              e
            );
          },
          f = c.prototype;
        (f.fromOptions = function (t) {
          for (var e, n = 0; n < l.length; n++) null != t[(e = l[n])] && (this[e] = t[e]);
          return this;
        }),
          (f.fromRaw = function (t) {
            var e;
            return (
              (this.rawUrl = t),
              (e = t.match(/^((?:https?:)|(?:file:)|(?:ftp:))?\/\//)) &&
                (this.protocol = e[1] || void 0),
              (e = t.match(/\/\/([^:?#/]*)/)) && (this.host = e[1] || void 0),
              (e = t.match(/\/\/.*?(\/[^?#$]+)/) || t.match(/(^\/[^/][^?#$]+)/)) &&
                this.setPath(e[1]),
              (e = t.match(/:(\d+)/)) && (this.port = parseInt(e[1], 10)),
              (e = t.match(/\?([^#]+)/)) &&
                ((this.rawParams = e[1]),
                (this.params = (function (t) {
                  var e = {};
                  if (!t) return e;
                  for (var n = t.split('&'), a = 0; a < n.length; a++) {
                    var u = n[a].split('='),
                      l = u[0],
                      c = u[1];
                    try {
                      l = s(decodeURIComponent(l)) || '';
                    } catch (t) {
                      setTimeout(function () {
                        i.wlog.notice(t);
                      }, 50),
                        (l = '');
                    }
                    (0, r.cast)(l);
                    var f = (0, r.getDeep)(e, l);
                    if (null == f) (0, r.setAndPreserveUndefined)(e, l, o(c));
                    else if ((0, r.isArray)(f)) f.push(o(c));
                    else {
                      var d = [f];
                      d.push(o(c)), (0, r.setAndPreserveUndefined)(e, l, d);
                    }
                  }
                  return e;
                })(this.rawParams))),
              (e = t.match(/#(.*)$/)) && (this.anchor = e[1]),
              this
            );
          }),
          (f.clone = function () {
            return new c({
              protocol: this.protocol,
              host: this.host,
              port: this.port,
              path: (0, r.clone)(this.path),
              params: (0, r.clone)(this.params),
              anchor: this.anchor,
            });
          }),
          (f.ext = function (t) {
            if (null != t) {
              var e = this.ext(),
                n = this.path.length - 1,
                r = new RegExp('\\.'.concat(e), 'g');
              return (
                e && (this.path[n] = ''.concat(this.path[n].replace(r, ''))),
                (this.path[n] = ''.concat(this.path[n], '.').concat(t))
              );
            }
            var i = this.path[this.path.length - 1].match(/\.(.*)$/);
            return (null != i && i[1]) || null;
          }),
          (f.isRelative = function () {
            var t =
                0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window.location,
              e = this.protocol,
              n = this.host;
            return !((null != e && '' !== e && e !== t.protocol) || (n && n !== t.hostname));
          }),
          (f.toString = function () {
            return this.isRelative() ? this.relative() : this.absolute();
          }),
          (f.absolute = function () {
            var t = '';
            null != this.protocol && (t = this.protocol);
            var e = '';
            return (
              null != this.port && (e = ':' + this.port),
              ''
                .concat(t, '//')
                .concat(this.host || location.host)
                .concat(e)
                .concat(this.relative())
            );
          }),
          (f.relative = function () {
            var t,
              e = '';
            0 < this.path.length &&
              ('string' == typeof (t = this.path) && (t = t.split('/')),
              (e = null == t ? '' : '/' + t.join('/')),
              this._hasTrailingSlash && (e += '/'));
            var n,
              i,
              a =
                '?' +
                ((n = this.params),
                (i = []),
                (0, r.eachLeaf)(n, function (t, e) {
                  null == t
                    ? i.push(encodeURIComponent(u(e)))
                    : i.push(encodeURIComponent(u(e)) + '=' + encodeURIComponent(t));
                }),
                i.join('&'));
            return 1 === a.length && (a = ''), ''.concat(e).concat(a).concat(this.relativeAnchor());
          }),
          (f.authority = function () {
            var t = null == this.port ? '' : ':'.concat(this.port);
            return ''.concat(this.host).concat(t);
          }),
          (f.relativeProtocol = function () {
            var t = '';
            return (
              null != this.port && (t = ':' + this.port),
              '//'.concat(this.host).concat(t).concat(this.relative())
            );
          }),
          (f.relativeAnchor = function () {
            var t = '';
            return null != this.anchor && (t = '#'.concat(this.anchor)), '' + t;
          }),
          (f.setPath = function (t) {
            (this.rawPath = t),
              (this._hasTrailingSlash = /\/$/.test(this.rawPath)),
              (this.path = (function (t) {
                var e = [];
                if (null == t) return e;
                for (var n, r = t.split(/\/+/), i = 0; i < r.length; i++)
                  null != (n = r[i]) && '' !== n && e.push(n);
                return e;
              })(this.rawPath));
          }),
          (c.create = function (t) {
            return new c(t);
          });
        c.create;
        c.parse = function (t) {
          return new c(t);
        };
        c.parse;
      },
      22: (t, e, n) => {
        'use strict';
        n.d(e, { makeWbindable: () => a });
        var r = n(1),
          i = n(23);
        r.default.bindable ||
          (r.default.bindable = {
            bind: function (t, e) {
              return this.specialBind && !0 === this.specialBind.apply(this, arguments)
                ? this
                : e
                ? (i.bind.call(this, t, e), this)
                : void (
                    r.default.warn &&
                    r.default.warn(
                      this.constructor.name,
                      'bind',
                      'falsey value passed in as callback:',
                      e
                    )
                  );
            },
            unbind: function (t, e) {
              return (
                (this.specialUnbind && !0 === this.specialUnbind.apply(this, arguments)) ||
                  (e ? i.unbind.call(this, t, e) : this._bindings && (this._bindings[t] = []),
                  this._bindings &&
                    this._bindings[t] &&
                    !this._bindings[t].length &&
                    ((this._bindings[t] = null), delete this._bindings[t])),
                this
              );
            },
            on: function (t, e) {
              var n = this.specialBind && this.specialBind.apply(this, arguments);
              return 'function' == typeof n ? n : i.bind.call(this, t, e);
            },
            off: function (t, e) {
              var n = this.specialUnbind && this.specialUnbind.apply(this, arguments);
              return 'function' == typeof n ? n : i.unbind.call(this, t, e);
            },
            rebind: function (t, e) {
              return this.unbind(t, e), this.bind(t, e), this;
            },
            trigger: function (t) {
              for (var e, n = arguments.length, r = Array(1 < n ? n - 1 : 0), a = 1; a < n; a++)
                r[a - 1] = arguments[a];
              return (e = i.trigger).call.apply(e, [this, t].concat(r)), this;
            },
            bindNamed: function () {
              return i.bindNamed.apply(this, arguments);
            },
            unbindNamed: function () {
              return i.unbindNamed.apply(this, arguments);
            },
            unbindAllInNamespace: function () {
              return i.unbindAllInNamespace.apply(this, arguments);
            },
          });
        var a = function (t) {
          for (var e in r.default.bindable) {
            var n = r.default.bindable[e];
            t[e] || (t[e] = n);
          }
        };
        r.default.bindable;
      },
      45: (t, e, n) => {
        'use strict';
        n.d(e, { getWistiaLocalStorage: () => o, updateWistiaLocalStorage: () => u });
        var r = n(1),
          i = n(46),
          a = 'wistia',
          o = function () {
            return (0, i.getLocalStorage)(a);
          },
          u = function (t) {
            return (
              (r.default._localStorage = (0, i.updateLocalStorage)(a, t)), r.default._localStorage
            );
          };
      },
      20: (t, e, n) => {
        'use strict';
        n.d(e, { wlog: () => y });
        var r = n(1),
          i = n(19),
          a = n(21);
        function o(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return u(t);
            })(t) ||
            (function (t) {
              if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t);
            })(t) ||
            (function (t, e) {
              if (t) {
                if ('string' == typeof t) return u(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  'Object' === n && t.constructor && (n = t.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(t)
                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? u(t, e)
                    : void 0
                );
              }
            })(t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        }
        function u(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        var s = (0, i.cachedDetect)(),
          l = {
            ERROR: 0,
            WARNING: 1,
            NOTICE: 2,
            INFO: 3,
            DEBUG: 4,
            error: 0,
            warning: 1,
            notice: 2,
            info: 3,
            debug: 4,
          },
          c = function () {},
          f = function (t) {
            var e = this;
            null == t && (t = {});
            return (
              (e.error = function () {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return e.log(0, n);
              }),
              (e.warn = function () {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return e.log(1, n);
              }),
              (e.notice = function () {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return e.log(1, n);
              }),
              (e.info = function () {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return e.log(3, n);
              }),
              (e.debug = function () {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return e.log(4, n);
              }),
              (e.ctx = t),
              e.ctx.initializedAt || e.reset(),
              e
            );
          },
          d = f.prototype;
        (d.reset = function () {
          (this.ctx.level = 0),
            (this.ctx.grep = null),
            (this.ctx.grepv = null),
            (this.ctx.first1000LogLines = []),
            (this.ctx.last1000LogLines = []),
            (this.ctx.initializedAt = new Date().getTime());
        }),
          (d.setLevel = function (t) {
            var e = this.logFunc(3);
            null == l[t]
              ? e('Unknown log level "'.concat(t, '"'))
              : ((this.ctx.level = l[t]),
                e('Log level set to "'.concat(t, '" (').concat(l[t], ')')));
          }),
          (d.setGrep = function (t) {
            this.ctx.grep = t;
          }),
          (d.setGrepv = function (t) {
            this.ctx.grepv = t;
          }),
          (d.first1000LogLines = function () {
            return this.ctx.first1000LogLines;
          }),
          (d.last1000LogLines = function () {
            return this.ctx.last1000LogLines;
          }),
          (d.matchedGrep = function (t) {
            var e = !1;
            if (this.ctx.grep || this.ctx.grepv) {
              for (var n = [], r = 0; r < t.length; r++)
                try {
                  var i = t[r];
                  n.push(i.toString && i.toString());
                } catch (t) {
                  n.push('');
                }
              var a = n.join(' '),
                o = !this.ctx.grep || a.match(this.ctx.grep),
                u = !this.ctx.grepv || !a.match(this.ctx.grepv);
              e = o && u;
            } else e = !0;
            return e;
          }),
          (d.now = function () {
            return 'undefined' != typeof performance && 'function' == typeof performance.now
              ? performance.now().toFixed(3)
              : Date.now
              ? Date.now() - this.ctx.initializedAt
              : new Date().getTime() - this.ctx.initializedAt;
          }),
          (d.messagesToLogLine = function (t, e, n) {
            var r,
              i = [t, e];
            i = i.concat(n);
            try {
              200 < (r = i.join(' ') || '').length && (r = r.slice(0, 200));
            } catch (t) {
              r = 'could not serialize';
            }
            return r;
          }),
          (d.persistLine = function (t) {
            1e3 > this.ctx.first1000LogLines.length
              ? this.ctx.first1000LogLines.push(t)
              : (1e3 <= this.ctx.last1000LogLines.length && this.ctx.last1000LogLines.shift(),
                this.ctx.last1000LogLines.push(t));
          }),
          (d.log = function (t, e) {
            var n,
              r = t <= this.ctx.level,
              i = t < 4,
              u = (r || i) && this.matchedGrep(e);
            if (
              (0 === t &&
                (0, a.globalTrigger)('problem', { type: 'error-logged', data: { messages: e } }),
              u && (r || i) && (n = this.now()),
              i && u)
            ) {
              var l = this.messagesToLogLine(t, n, e);
              this.persistLine(l);
            }
            if (r && u) {
              var c,
                f = this.logFunc(t);
              1 === e.length && (c = e[0]) instanceof Error
                ? (f(c.message), c.stack && f(c.stack))
                : s.browser.msie && (9 > s.browser.version || s.browser.quirks)
                ? f(e.join(' '))
                : f.apply(void 0, o(e));
            }
          });
        var h = function () {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            console.error.apply(console, e);
          },
          v = function () {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            console.warn.apply(console, e);
          },
          g = function () {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            console.info.apply(console, e);
          },
          p = function () {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            console.debug.apply(console, e);
          },
          m = function (t) {
            console.log.apply(console, t);
          };
        (d.logFunc = function (t) {
          return (
            null == t && (t = this.level),
            console
              ? (0 === t ? (e = h) : 1 === t ? (e = v) : 3 === t ? (e = g) : 4 === t && (e = p),
                e || (e = m),
                'function' != typeof e && ((this.noConsoleLog = !0), (e = c)),
                e)
              : c
          );
          var e;
        }),
          (d.maybePrefix = function (t, e) {
            if (t) {
              if ('function' == typeof t)
                try {
                  t = t();
                } catch (e) {
                  t = 'prefix err "'.concat(e.message, '"');
                }
              return t instanceof Array ? t.concat(e) : [t].concat(e);
            }
            return e;
          }),
          (d.getPrefixedFunctions = function (t) {
            var e = this;
            return {
              log: function () {
                for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return e.log(0, e.maybePrefix(t, r));
              },
              error: function () {
                for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return e.log(0, e.maybePrefix(t, r));
              },
              warn: function () {
                for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return e.log(1, e.maybePrefix(t, r));
              },
              notice: function () {
                for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return e.log(1, e.maybePrefix(t, r));
              },
              info: function () {
                for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return e.log(3, e.maybePrefix(t, r));
              },
              debug: function () {
                for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return e.log(4, e.maybePrefix(t, r));
              },
            };
          }),
          r.default && null == r.default.wlogCtx && (r.default.wlogCtx = {});
        var y = new f(r.default.wlogCtx);
      },
      37: (t, e, n) => {
        'use strict';
        n.d(e, { xhrGet: () => o, xhrPost: () => u });
        n(12);
        var r = n(13),
          i = n.n(r),
          a = function (t, e, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
              a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {};
            return new (i())(function (i, o) {
              var u = new (a.XMLHttpRequest || XMLHttpRequest)();
              a.afterConstructor && a.afterConstructor(u);
              try {
                u.addEventListener(
                  'readystatechange',
                  function () {
                    if (!(u.readyState < 4))
                      if (
                        null != u.status &&
                        ((200 <= u.status && 300 > u.status) || 304 == u.status)
                      )
                        if (u.response && 'string' != typeof u.response)
                          i({
                            data: u.response,
                            status: u.status,
                            statusText: u.statusText,
                            xhr: u,
                          });
                        else if ('json' === a.dataType)
                          try {
                            var n = JSON.parse(u.responseText);
                            i({ data: n, status: u.status, statusText: u.statusText, xhr: u });
                          } catch (n) {
                            var r = new Error(
                              ''
                                .concat(t, ' ')
                                .concat(e, ' - Error parsing response text: ')
                                .concat(u.responseText, '.')
                            );
                            console.error(r.message), o(r);
                          }
                        else
                          i({
                            data: u.responseText,
                            status: u.status,
                            statusText: u.statusText,
                            xhr: u,
                          });
                      else {
                        var s = new Error(
                          ''
                            .concat(t, ' ')
                            .concat(e, ' - Got an unsuccessful status code: ')
                            .concat(u.status, '. ')
                            .concat(u.statusText)
                        );
                        (s.status = u.status), console.error(s.message), o(s);
                      }
                  },
                  !1
                );
              } catch (t) {
                console.error(t.message), console.error(t.stack);
              }
              u.addEventListener(
                'error',
                function () {
                  var t = new Error('XHR error');
                  (t.status = u.status), (t.xhr = u), o(t);
                },
                !1
              );
              if (
                (u.addEventListener(
                  'timeout',
                  function (t) {
                    var e = new Error('XHR timeout');
                    (e.status = u.status), (e.message = t && t.message), (e.xhr = u), o(t);
                  },
                  !1
                ),
                u.open(t, e, !0),
                a.withCredentials && (u.withCredentials = !0),
                a.timeout && (u.timeout = a.timeout),
                null != a.dataType && (u.responseType = a.dataType),
                'POST' !== t ||
                  r['content-type'] ||
                  u.setRequestHeader('content-type', 'application/x-www-form-urlencoded'),
                r)
              )
                for (var s in r) r.hasOwnProperty(s) && u.setRequestHeader(s.toLowerCase(), r[s]);
              u.send(n), a.afterSend && a.afterSend(u);
            });
          },
          o = function (t, e, n) {
            return a('GET', t, null, e, n);
          },
          u = function (t, e, n, r) {
            return a('POST', t, e, n, r);
          };
      },
      1: (t, e, n) => {
        'use strict';
        n.d(e, { default: () => a });
        var r = n(2);
        null == r.default.Wistia && (r.default.Wistia = {});
        var i = r.default.Wistia;
        null == i._initializers && (i._initializers = {}),
          null == i._destructors && (i._destructors = {}),
          null == i.mixin &&
            (i.mixin = function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            });
        const a = r.default.Wistia;
      },
      13: (t) => {
        !(function (e, n) {
          function r(t, e) {
            return (typeof e)[0] == t;
          }
          function i(t, n) {
            return (
              ((n = function o(u, s, l, c, f, d) {
                if (((c = o.q), u != r))
                  return i(function (t, e) {
                    c.push({ p: this, r: t, j: e, 1: u, 0: s });
                  });
                if (l && r(e, l) | r('o', l))
                  try {
                    f = l.then;
                  } catch (t) {
                    (s = 0), (l = t);
                  }
                if (r(e, f)) {
                  var h = function (t) {
                    return function (e) {
                      f && ((f = 0), o(r, t, e));
                    };
                  };
                  try {
                    f.call(l, h(1), (s = h(0)));
                  } catch (t) {
                    s(t);
                  }
                } else
                  for (
                    n = function (n, o) {
                      return r(e, (n = s ? n : o))
                        ? i(function (t, e) {
                            a(this, t, e, l, n);
                          })
                        : t;
                    },
                      d = 0;
                    d < c.length;

                  )
                    (f = c[d++]), r(e, (u = f[s])) ? a(f.p, f.r, f.j, l, u) : (s ? f.r : f.j)(l);
              }).q = []),
              t.call(
                (t = {
                  then: function (t, e) {
                    return n(t, e);
                  },
                  catch: function (t) {
                    return n(0, t);
                  },
                }),
                function (t) {
                  n(r, 1, t);
                },
                function (t) {
                  n(r, 0, t);
                }
              ),
              t
            );
          }
          function a(t, n, i, a, o) {
            var u = function () {
              try {
                (a = o(a)),
                  (o = a && r('o', a) | r(e, a) && a.then),
                  r(e, o) ? (a == t ? i(TypeError()) : o.call(a, n, i)) : n(a);
              } catch (t) {
                i(t);
              }
            };
            window.setImmediate ? window.setImmediate(u) : setTimeout(u, 0);
          }
          function o(t) {
            return i(function (e) {
              e(t);
            });
          }
          window.Promise
            ? (t.exports = window.Promise)
            : ((t.exports = i),
              (i.resolve = o),
              (i.reject = function (t) {
                return i(function (e, n) {
                  n(t);
                });
              }),
              (i.all = function (t) {
                return i(function (e, n, r, i) {
                  (i = []),
                    (r = t.length || e(i)),
                    t.map(function (t, a) {
                      o(t).then(function (t) {
                        (i[a] = t), --r || e(i);
                      }, n);
                    });
                });
              }),
              (i.race = function (t) {
                return i(function (e, n) {
                  t.map(function (t) {
                    o(t).then(e, n);
                  });
                });
              }));
        })('f');
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(t) {
    var e = __webpack_module_cache__[t];
    if (void 0 !== e) return e.exports;
    var n = (__webpack_module_cache__[t] = { exports: {} });
    return __webpack_modules__[t](n, n.exports, __webpack_require__), n.exports;
  }
  (__webpack_require__.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return __webpack_require__.d(e, { a: e }), e;
  }),
    (__webpack_require__.d = (t, e) => {
      for (var n in e)
        __webpack_require__.o(e, n) &&
          !__webpack_require__.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (__webpack_require__.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (__webpack_require__.r = (t) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    });
  var __webpack_exports__ = {};
  (() => {
    'use strict';
    var t = __webpack_require__(1),
      e = __webpack_require__(356);
    t.default.define('engines/native_hls_video.js', e.default);
  })();
})();
