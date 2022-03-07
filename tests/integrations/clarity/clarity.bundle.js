(function() {
  'use strict';
  var upload$1 = Object.freeze({
    __proto__: null,
    get track () {
      return track$1;
    },
    get start () {
      return start$c;
    },
    get queue () {
      return queue;
    },
    get stop () {
      return stop$b;
    },
  });
  var limit = Object.freeze({
    __proto__: null,
    get data () {
      return data$4;
    },
    get start () {
      return start$b;
    },
    get check () {
      return check$2;
    },
    get trigger () {
      return trigger;
    },
    get compute () {
      return compute$3;
    },
    get stop () {
      return stop$a;
    },
  });
  var dimension = Object.freeze({
    __proto__: null,
    get data () {
      return data$3;
    },
    get updates () {
      return updates;
    },
    get start () {
      return start$a;
    },
    get stop () {
      return stop$9;
    },
    get log () {
      return log;
    },
    get compute () {
      return compute$2;
    },
    get reset () {
      return reset$3;
    },
  });
  var metadata$1 = Object.freeze({
    __proto__: null,
    get data () {
      return data$2;
    },
    get callback () {
      return callback;
    },
    get start () {
      return start$9;
    },
    get userAgentData () {
      return userAgentData;
    },
    get stop () {
      return stop$8;
    },
    get metadata () {
      return metadata;
    },
    get id () {
      return id;
    },
    get consent () {
      return consent;
    },
    get clear () {
      return clear;
    },
    get save () {
      return save;
    },
  });
  var envelope$1 = Object.freeze({
    __proto__: null,
    get data () {
      return data$1;
    },
    get start () {
      return start$8;
    },
    get stop () {
      return stop$7;
    },
    get envelope () {
      return envelope;
    },
  });
  var config$1 = {
    projectId: null,
    delay: 1 * 1e3,
    lean: false,
    track: true,
    content: true,
    mask: [],
    unmask: [],
    regions: [],
    metrics: [],
    dimensions: [],
    cookies: [],
    report: null,
    upload: null,
    fallback: null,
    upgrade: null,
  };

  function api (method) {
    return window['Zone'] && '__symbol__' in window['Zone']
      ? window['Zone']['__symbol__'](method)
      : method;
  }

  var startTime = 0;

  function start$E () {
    startTime = performance.now();
  }

  function time (ts) {
    if (ts === void 0) {
      ts = null;
    }
    ts = ts ? ts : performance.now();
    return Math.max(Math.round(ts - startTime), 0);
  }

  function stop$B () {
    startTime = 0;
  }

  var version = '0.6.32';

  function hash (input) {
    var hash = 0;
    var hashOne = 5381;
    var hashTwo = hashOne;
    for (var i = 0; i < input.length; i += 2) {
      var charOne = input.charCodeAt(i);
      hashOne = ((hashOne << 5) + hashOne) ^ charOne;
      if (i + 1 < input.length) {
        var charTwo = input.charCodeAt(i + 1);
        hashTwo = ((hashTwo << 5) + hashTwo) ^ charTwo;
      }
    }
    hash = Math.abs(hashOne + hashTwo * 11579);
    return hash.toString(36);
  }

  var state$9 = null;
  var buffer = null;
  var update$1 = false;

  function start$D () {
    update$1 = false;
    reset$o();
  }

  function reset$o () {
    if (update$1) {
      state$9 = {
        time: time(),
        event: 4,
        data: {
          visible: buffer.visible,
          docWidth: buffer.docWidth,
          docHeight: buffer.docHeight,
          screenWidth: buffer.screenWidth,
          screenHeight: buffer.screenHeight,
          scrollX: buffer.scrollX,
          scrollY: buffer.scrollY,
          pointerX: buffer.pointerX,
          pointerY: buffer.pointerY,
          activityTime: buffer.activityTime,
        },
      };
    }
    buffer = buffer
      ? buffer
      : {
        visible: 1,
        docWidth: 0,
        docHeight: 0,
        screenWidth: 0,
        screenHeight: 0,
        scrollX: 0,
        scrollY: 0,
        pointerX: 0,
        pointerY: 0,
        activityTime: 0,
      };
  }

  function track$7 (event, x, y) {
    switch (event) {
      case 8:
        buffer.docWidth = x;
        buffer.docHeight = y;
        break;
      case 11:
        buffer.screenWidth = x;
        buffer.screenHeight = y;
        break;
      case 10:
        buffer.scrollX = x;
        buffer.scrollY = y;
        break;
      default:
        buffer.pointerX = x;
        buffer.pointerY = y;
        break;
    }
    update$1 = true;
  }

  function activity (t) {
    buffer.activityTime = t;
  }

  function visibility (t, visible) {
    buffer.visible = visible === 'visible' ? 1 : 0;
    if (!buffer.visible) {
      activity(t);
    }
    update$1 = true;
  }

  function compute$c () {
    if (update$1) {
      encode$1(4);
    }
  }

  function stop$A () {
    reset$o();
  }

  var baseline = Object.freeze({
    __proto__: null,
    get state () {
      return state$9;
    },
    start: start$D,
    reset: reset$o,
    track: track$7,
    activity: activity,
    visibility: visibility,
    compute: compute$c,
    stop: stop$A,
  });
  var data$i = null;

  function event (key, value) {
    if (
      active() &&
      key &&
      value &&
      typeof key === 'string' &&
      typeof value === 'string' &&
      key.length < 255 &&
      value.length < 255
    ) {
      data$i = { key: key, value: value };
      encode$1(24);
    }
  }

  var data$h = null;
  var updates$3 = null;

  function start$C () {
    data$h = {};
    updates$3 = {};
    count$1(5);
  }

  function stop$z () {
    data$h = {};
    updates$3 = {};
  }

  function count$1 (metric, increment) {
    if (increment === void 0) {
      increment = 1;
    }
    if (!(metric in data$h)) {
      data$h[metric] = 0;
    }
    if (!(metric in updates$3)) {
      updates$3[metric] = 0;
    }
    data$h[metric] += increment;
    updates$3[metric] += increment;
  }

  function sum (metric, value) {
    if (value !== null) {
      if (!(metric in data$h)) {
        data$h[metric] = 0;
      }
      if (!(metric in updates$3)) {
        updates$3[metric] = 0;
      }
      data$h[metric] += value;
      updates$3[metric] += value;
    }
  }

  function max (metric, value) {
    if (value !== null && isNaN(value) === false) {
      if (!(metric in data$h)) {
        data$h[metric] = 0;
      }
      if (value > data$h[metric] || data$h[metric] === 0) {
        updates$3[metric] = value;
        data$h[metric] = value;
      }
    }
  }

  function compute$b () {
    encode$1(0);
  }

  function reset$n () {
    updates$3 = {};
  }

  function setTimeout (handler, timeout, event) {
    return window.setTimeout(measure(handler), timeout, event);
  }

  function clearTimeout (handle) {
    return window.clearTimeout(handle);
  }

  var data$g;
  var last = 0;
  var interval = 0;
  var timeout$6 = null;

  function start$B () {
    interval = 6e4;
    last = 0;
  }

  function reset$m () {
    if (timeout$6) {
      clearTimeout(timeout$6);
    }
    timeout$6 = setTimeout(ping, interval);
    last = time();
  }

  function ping () {
    var now = time();
    data$g = { gap: now - last };
    encode$1(25);
    if (data$g.gap < 3e5) {
      timeout$6 = setTimeout(ping, interval);
    } else {
      suspend();
    }
  }

  function stop$y () {
    clearTimeout(timeout$6);
    last = 0;
    interval = 0;
  }

  var ping$1 = Object.freeze({
    __proto__: null,
    get data () {
      return data$g;
    },
    start: start$B,
    reset: reset$m,
    stop: stop$y,
  });
  var data$f = null;

  function start$A () {
    data$f = {};
  }

  function stop$x () {
    data$f = {};
  }

  function track$6 (event, time) {
    if (!(event in data$f)) {
      data$f[event] = [[time, 0]];
    } else {
      var e = data$f[event];
      var last = e[e.length - 1];
      if (time - last[0] > 100) {
        data$f[event].push([time, 0]);
      } else {
        last[1] = time - last[0];
      }
    }
  }

  function compute$a () {
    encode$1(36);
  }

  function reset$l () {
    data$f = {};
  }

  var summary = Object.freeze({
    __proto__: null,
    get data () {
      return data$f;
    },
    start: start$A,
    stop: stop$x,
    track: track$6,
    compute: compute$a,
    reset: reset$l,
  });
  var data$e = null;

  function start$z () {
    if (!config$1.lean && config$1.upgrade) {
      config$1.upgrade('Config');
    }
    data$e = null;
  }

  function upgrade (key) {
    if (active() && config$1.lean) {
      config$1.lean = false;
      data$e = { key: key };
      save();
      if (config$1.upgrade) {
        config$1.upgrade(key);
      }
      encode$1(3);
    }
  }

  function stop$w () {
    data$e = null;
  }

  var upgrade$1 = Object.freeze({
    __proto__: null,
    get data () {
      return data$e;
    },
    start: start$z,
    upgrade: upgrade,
    stop: stop$w,
  });
  var data$d = null;

  function start$y () {
    reset$k();
  }

  function set (variable, value) {
    var values = typeof value === 'string' ? [value] : value;
    log$2(variable, values);
  }

  function identify (userId, sessionId, pageId) {
    if (sessionId === void 0) {
      sessionId = null;
    }
    if (pageId === void 0) {
      pageId = null;
    }
    log$2('userId', [userId]);
    log$2('sessionId', [sessionId]);
    log$2('pageId', [pageId]);
  }

  function log$2 (variable, value) {
    if (
      active() &&
      variable &&
      value &&
      typeof variable === 'string' &&
      variable.length < 255
    ) {
      var validValues = variable in data$d ? data$d[variable] : [];
      for (var i = 0; i < value.length; i++) {
        if (typeof value[i] === 'string' && value[i].length < 255) {
          validValues.push(value[i]);
        }
      }
      data$d[variable] = validValues;
    }
  }

  function compute$9 () {
    encode$1(34);
  }

  function reset$k () {
    data$d = {};
  }

  function stop$v () {
    reset$k();
  }

  var variable = Object.freeze({
    __proto__: null,
    get data () {
      return data$d;
    },
    start: start$y,
    set: set,
    identify: identify,
    compute: compute$9,
    reset: reset$k,
    stop: stop$v,
  });

  function __awaiter (thisArg, _arguments, P, generator) {
    function adopt (value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
          resolve(value);
        });
    }

    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled (value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }

      function rejected (value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }

      function step (result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }

      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }

  function __generator (thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
      (g[Symbol.iterator] = function() {
        return this;
      }),
        g
    );

    function verb (n) {
      return function(v) {
        return step([n, v]);
      };
    }

    function step (op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
            (t =
              op[0] & 2
                ? y['return']
                : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
            !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }

  var supported$1 = 'CompressionStream' in window;

  function compress (input) {
    return __awaiter(this, void 0, void 0, function() {
      var stream, _a;
      return __generator(this, function(_c) {
        switch (_c.label) {
          case 0:
            _c.trys.push([0, 3, , 4]);
            if (!supported$1) return [3, 2];
            stream = new ReadableStream({
              start: function(controller) {
                return __awaiter(this, void 0, void 0, function() {
                  return __generator(this, function(_a) {
                    controller.enqueue(input);
                    controller.close();
                    return [2];
                  });
                });
              },
            }).pipeThrough(new TextEncoderStream()).
              pipeThrough(new window['CompressionStream']('gzip'));
            _a = Uint8Array.bind;
            return [4, read(stream)];
          case 1:
            return [2, new (_a.apply(Uint8Array, [void 0, _c.sent()]))()];
          case 2:
            return [3, 4];
          case 3:
            _c.sent();
            return [3, 4];
          case 4:
            return [2, null];
        }
      });
    });
  }

  function read (stream) {
    return __awaiter(this, void 0, void 0, function() {
      var reader, chunks, done, value;
      var _a;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            reader = stream.getReader();
            chunks = [];
            done = false;
            value = [];
            _b.label = 1;
          case 1:
            if (!!done) return [3, 3];
            return [4, reader.read()];
          case 2:
            (_a = _b.sent()), (done = _a.done), (value = _a.value);
            if (done) {
              return [2, chunks];
            }
            chunks.push.apply(chunks, value);
            return [3, 1];
          case 3:
            return [2, chunks];
        }
      });
    });
  }

  var modules$1 = [
    baseline,
    dimension,
    variable,
    limit,
    summary,
    metadata$1,
    envelope$1,
    upload$1,
    ping$1,
    upgrade$1,
  ];

  function start$x () {
    start$C();
    modules$1.forEach(function(x) {
      return measure(x.start)();
    });
  }

  function stop$u () {
    modules$1.slice().reverse().forEach(function(x) {
      return measure(x.stop)();
    });
    stop$z();
  }

  function compute$8 () {
    compute$9();
    compute$c();
    compute$2();
    compute$b();
    compute$a();
    compute$3();
  }

  function scrub (value, hint, privacy, mangle) {
    if (mangle === void 0) {
      mangle = false;
    }
    if (value) {
      switch (privacy) {
        case 0:
          return value;
        case 1:
          switch (hint) {
            case '*T':
            case 'value':
            case 'placeholder':
              return redact(value);
            case 'input':
              return mangleToken(value);
          }
          return value;
        case 2:
        case 3:
          switch (hint) {
            case '*T':
              return mangle ? mangleText(value) : mask(value);
            case 'src':
            case 'srcset':
            case 'title':
            case 'alt':
              return privacy === 3 ? '' : value;
            case 'value':
            case 'click':
            case 'input':
              return mangleToken(value);
            case 'placeholder':
              return mask(value);
          }
          break;
      }
    }
    return value;
  }

  function mangleText (value) {
    var trimmed = value.trim();
    if (trimmed.length > 0) {
      var first = trimmed[0];
      var index = value.indexOf(first);
      var prefix = value.substr(0, index);
      var suffix = value.substr(index + trimmed.length);
      return ''.concat(prefix).
        concat(trimmed.length.toString(36)).
        concat(suffix);
    }
    return value;
  }

  function mask (value) {
    return value.replace(/\S/gi, '•');
  }

  function mangleToken (value) {
    var length = (Math.floor(value.length / 5) + 1) * 5;
    var output = '';
    for (var i = 0; i < length; i++) {
      output += i > 0 && i % 5 === 0 ? ' ' : '•';
    }
    return output;
  }

  function redact (value) {
    var spaceIndex = -1;
    var hasDigit = false;
    var hasEmail = false;
    var hasWhitespace = false;
    var array = null;
    for (var i = 0; i < value.length; i++) {
      var c = value.charCodeAt(i);
      hasDigit = hasDigit || (c >= 48 && c <= 57);
      hasEmail = hasEmail || c === 64;
      hasWhitespace = c === 9 || c === 10 || c === 13 || c === 32;
      if (i === 0 || i === value.length - 1 || hasWhitespace) {
        if (hasDigit || hasEmail) {
          if (array === null) {
            array = value.split('');
          }
          mutate(array, spaceIndex, hasWhitespace ? i : i + 1);
        }
        if (hasWhitespace) {
          hasDigit = false;
          hasEmail = false;
          spaceIndex = i;
        }
      }
    }
    return array ? array.join('') : value;
  }

  function mutate (array, start, end) {
    for (var i = start + 1; i < end; i++) {
      array[i] = '•';
    }
  }

  var idleTimeout = 5e3;
  var tracker = {};
  var queuedTasks = [];
  var activeTask = null;
  var pauseTask = null;
  var resumeResolve = null;

  function pause$1 () {
    if (pauseTask === null) {
      pauseTask = new Promise(function(resolve) {
        resumeResolve = resolve;
      });
    }
  }

  function resume$1 () {
    if (pauseTask) {
      resumeResolve();
      pauseTask = null;
      if (activeTask === null) {
        run();
      }
    }
  }

  function reset$j () {
    tracker = {};
    queuedTasks = [];
    activeTask = null;
    pauseTask = null;
  }

  function schedule$1 (task, priority) {
    if (priority === void 0) {
      priority = 0;
    }
    return __awaiter(this, void 0, void 0, function() {
      var _i, queuedTasks_1, q, promise;
      return __generator(this, function(_a) {
        for (
          _i = 0, queuedTasks_1 = queuedTasks;
          _i < queuedTasks_1.length;
          _i++
        ) {
          q = queuedTasks_1[_i];
          if (q.task === task) {
            return [2];
          }
        }
        promise = new Promise(function(resolve) {
          var insert = priority === 1 ? 'unshift' : 'push';
          queuedTasks[insert]({ task: task, resolve: resolve, id: id() });
        });
        if (activeTask === null && pauseTask === null) {
          run();
        }
        return [2, promise];
      });
    });
  }

  function run () {
    var entry = queuedTasks.shift();
    if (entry) {
      activeTask = entry;
      entry.task().then(function() {
        if (entry.id !== id()) {
          return;
        }
        entry.resolve();
        activeTask = null;
        run();
      }).catch(function(error) {
        if (entry.id !== id()) {
          return;
        }
        if (error) {
          log$1(0, 1, error.name, error.message, error.stack);
        }
        activeTask = null;
        run();
      });
    }
  }

  function state$8 (timer) {
    var id = key(timer);
    if (id in tracker) {
      var elapsed = performance.now() - tracker[id].start;
      return elapsed > tracker[id].yield ? 0 : 1;
    }
    return 2;
  }

  function start$w (timer) {
    tracker[key(timer)] = { start: performance.now(), calls: 0, yield: 30 };
  }

  function restart$1 (timer) {
    var id = key(timer);
    if (tracker && tracker[id]) {
      var c = tracker[id].calls;
      var y = tracker[id].yield;
      start$w(timer);
      tracker[id].calls = c + 1;
      tracker[id].yield = y;
    }
  }

  function stop$t (timer) {
    var end = performance.now();
    var id = key(timer);
    var duration = end - tracker[id].start;
    sum(timer.cost, duration);
    count$1(5);
    if (tracker[id].calls > 0) {
      sum(4, duration);
    }
  }

  function suspend$1 (timer) {
    return __awaiter(this, void 0, void 0, function() {
      var id, _a;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            id = key(timer);
            if (!(id in tracker)) return [3, 2];
            stop$t(timer);
            _a = tracker[id];
            return [4, wait()];
          case 1:
            _a.yield = _b.sent().timeRemaining();
            restart$1(timer);
            _b.label = 2;
          case 2:
            return [2, id in tracker ? 1 : 2];
        }
      });
    });
  }

  function key (timer) {
    return ''.concat(timer.id, '.').concat(timer.cost);
  }

  function wait () {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!pauseTask) return [3, 2];
            return [4, pauseTask];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            return [
              2,
              new Promise(function(resolve) {
                requestIdleCallback(resolve, { timeout: idleTimeout });
              }),
            ];
        }
      });
    });
  }

  function requestIdleCallbackPolyfill (callback, options) {
    var startTime = performance.now();
    var channel = new MessageChannel();
    var incoming = channel.port1;
    var outgoing = channel.port2;
    incoming.onmessage = function(event) {
      var currentTime = performance.now();
      var elapsed = currentTime - startTime;
      var duration = currentTime - event.data;
      if (duration > 30 && elapsed < options.timeout) {
        requestAnimationFrame(function() {
          outgoing.postMessage(currentTime);
        });
      } else {
        var didTimeout_1 = elapsed > options.timeout;
        callback({
          didTimeout: didTimeout_1,
          timeRemaining: function() {
            return didTimeout_1 ? 30 : Math.max(0, 30 - duration);
          },
        });
      }
    };
    requestAnimationFrame(function() {
      outgoing.postMessage(performance.now());
    });
  }

  var requestIdleCallback =
    window['requestIdleCallback'] || requestIdleCallbackPolyfill;

  function tokenize (tokens) {
    var output = [];
    var lookup = {};
    var pointer = 0;
    var reference = null;
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] === 'string') {
        var token = tokens[i];
        var index = lookup[token] || -1;
        if (index >= 0) {
          if (reference) {
            reference.push(index);
          } else {
            reference = [index];
            output.push(reference);
            pointer++;
          }
        } else {
          reference = null;
          output.push(token);
          lookup[token] = pointer++;
        }
      } else {
        reference = null;
        output.push(tokens[i]);
        pointer++;
      }
    }
    return output;
  }

  var data$c;

  function reset$i () {
    data$c = null;
  }

  function start$v () {
    reset$i();
    compute$7();
  }

  function compute$7 () {
    var body = document.body;
    var d = document.documentElement;
    var bodyClientWidth = body ? body.clientWidth : null;
    var bodyScrollWidth = body ? body.scrollWidth : null;
    var bodyOffsetWidth = body ? body.offsetWidth : null;
    var documentClientWidth = d ? d.clientWidth : null;
    var documentScrollWidth = d ? d.scrollWidth : null;
    var documentOffsetWidth = d ? d.offsetWidth : null;
    var width = Math.max(
      bodyClientWidth,
      bodyScrollWidth,
      bodyOffsetWidth,
      documentClientWidth,
      documentScrollWidth,
      documentOffsetWidth,
    );
    var bodyClientHeight = body ? body.clientHeight : null;
    var bodyScrollHeight = body ? body.scrollHeight : null;
    var bodyOffsetHeight = body ? body.offsetHeight : null;
    var documentClientHeight = d ? d.clientHeight : null;
    var documentScrollHeight = d ? d.scrollHeight : null;
    var documentOffsetHeight = d ? d.offsetHeight : null;
    var height = Math.max(
      bodyClientHeight,
      bodyScrollHeight,
      bodyOffsetHeight,
      documentClientHeight,
      documentScrollHeight,
      documentOffsetHeight,
    );
    if (
      (data$c === null || width !== data$c.width || height !== data$c.height) &&
      width !== null &&
      height !== null
    ) {
      data$c = { width: width, height: height };
      encode$4(8);
    }
  }

  function end () {
    reset$i();
  }

  function encode$4 (type, timer, ts) {
    if (timer === void 0) {
      timer = null;
    }
    if (ts === void 0) {
      ts = null;
    }
    return __awaiter(this, void 0, void 0, function() {
      var eventTime,
        tokens,
        _a,
        d,
        _i,
        _b,
        r,
        b,
        _c,
        b_1,
        entry,
        values,
        _d,
        values_1,
        value,
        state,
        data,
        active,
        suspend,
        privacy,
        mangle,
        keys,
        _e,
        keys_1,
        key,
        size,
        factor,
        attr;
      return __generator(this, function(_f) {
        switch (_f.label) {
          case 0:
            eventTime = ts || time();
            tokens = [eventTime, type];
            _a = type;
            switch (_a) {
              case 8:
                return [3, 1];
              case 7:
                return [3, 2];
              case 37:
                return [3, 3];
              case 5:
                return [3, 4];
              case 6:
                return [3, 4];
            }
            return [3, 11];
          case 1:
            d = data$c;
            tokens.push(d.width);
            tokens.push(d.height);
            track$7(type, d.width, d.height);
            queue(tokens);
            return [3, 11];
          case 2:
            for (_i = 0, _b = state$7; _i < _b.length; _i++) {
              r = _b[_i];
              tokens = [r.time, 7];
              tokens.push(r.data.id);
              tokens.push(r.data.interaction);
              tokens.push(r.data.visibility);
              tokens.push(r.data.name);
              queue(tokens);
            }
            reset$f();
            return [3, 11];
          case 3:
            b = data$b;
            for (_c = 0, b_1 = b; _c < b_1.length; _c++) {
              entry = b_1[_c];
              tokens.push(entry.id);
              tokens.push(entry.width);
              tokens.push(entry.height);
            }
            reset$h();
            queue(tokens);
            return [3, 11];
          case 4:
            if (state$8(timer) === 2) {
              return [3, 11];
            }
            values = updates$2();
            if (!(values.length > 0)) return [3, 10];
            (_d = 0), (values_1 = values);
            _f.label = 5;
          case 5:
            if (!(_d < values_1.length)) return [3, 9];
            value = values_1[_d];
            state = state$8(timer);
            if (!(state === 0)) return [3, 7];
            return [4, suspend$1(timer)];
          case 6:
            state = _f.sent();
            _f.label = 7;
          case 7:
            if (state === 2) {
              return [3, 9];
            }
            data = value.data;
            active = value.metadata.active;
            suspend = value.metadata.suspend;
            privacy = value.metadata.privacy;
            mangle = shouldMangle(value);
            keys = active ? ['tag', 'attributes', 'value'] : ['tag'];
            compute$6(value.id);
            for (_e = 0, keys_1 = keys; _e < keys_1.length; _e++) {
              key = keys_1[_e];
              if (data[key]) {
                switch (key) {
                  case 'tag':
                    size = value.metadata.size;
                    factor = mangle ? -1 : 1;
                    tokens.push(value.id * factor);
                    if (value.parent && active) {
                      tokens.push(value.parent);
                    }
                    if (value.previous && active) {
                      tokens.push(value.previous);
                    }
                    tokens.push(suspend ? '*M' : data[key]);
                    if (size && size.length === 2) {
                      tokens.push(
                        ''.concat('#').
                          concat(str$1(size[0]), '.').
                          concat(str$1(size[1])),
                      );
                    }
                    break;
                  case 'attributes':
                    for (attr in data[key]) {
                      if (data[key][attr] !== undefined) {
                        tokens.push(attribute(attr, data[key][attr], privacy));
                      }
                    }
                    break;
                  case 'value':
                    tokens.push(scrub(data[key], data.tag, privacy, mangle));
                    break;
                }
              }
            }
            _f.label = 8;
          case 8:
            _d++;
            return [3, 5];
          case 9:
            if (type === 6) {
              activity(eventTime);
            }
            queue(tokenize(tokens), !config$1.lean);
            _f.label = 10;
          case 10:
            return [3, 11];
          case 11:
            return [2];
        }
      });
    });
  }

  function shouldMangle (value) {
    var privacy = value.metadata.privacy;
    return value.data.tag === '*T' && !(privacy === 0 || privacy === 1);
  }

  function str$1 (input) {
    return input.toString(36);
  }

  function attribute (key, value, privacy) {
    return ''.concat(key, '=').concat(scrub(value, key, privacy));
  }

  var data$b = [];
  var enabled = false;
  var observer$2 = null;

  function start$u () {
    reset$h();
    observer$2 = null;
    enabled = window['ResizeObserver'] ? true : false;
  }

  function compute$6 (id) {
    if (enabled === false) {
      return;
    }
    observer$2 =
      observer$2 === null ? new ResizeObserver(handler$4) : observer$2;
    if (observer$2) {
      var value = getValue(id);
      if (
        value &&
        value.metadata.size !== null &&
        value.metadata.size.length === 0
      ) {
        var node = getNode(id);
        if (node && node.nodeType === Node.ELEMENT_NODE) {
          var e = node;
          var r = e.getBoundingClientRect();
          value.metadata.size = [
            Math.floor(r.width * 100),
            Math.floor(r.height * 100),
          ];
          observer$2.observe(e);
        }
      }
    }
  }

  function handler$4 (entries) {
    window.requestAnimationFrame(function() {
      for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var entry = entries_1[_i];
        var target = entry.target;
        var id = target ? getId(target) : null;
        if (id) {
          var v = getValue(id);
          var s = v.metadata.size;
          var b = entry.borderBoxSize;
          var w = null;
          var h = null;
          if (b && b.length > 0) {
            w = Math.floor(b[0].inlineSize * 100);
            h = Math.floor(b[0].blockSize * 100);
          } else {
            var r = target.getBoundingClientRect();
            w = Math.floor(r.width * 100);
            h = Math.floor(r.height * 100);
          }
          if (w !== s[0] && h !== s[1]) {
            s = [w, h];
            data$b.push({ id: id, width: w, height: h });
          }
        }
      }
      if (data$b.length > 0) {
        encode$4(37);
      }
    });
  }

  function reset$h () {
    data$b = [];
  }

  function stop$s () {
    reset$h();
    if (observer$2) {
      observer$2.disconnect();
      observer$2 = null;
    }
    enabled = false;
  }

  var history$4 = {};
  var data$a;

  function start$t () {
    bind(window, 'error', handler$3);
    history$4 = {};
  }

  function handler$3 (error) {
    var e = error['error'] || error;
    if (!(e.message in history$4)) {
      history$4[e.message] = 0;
    }
    if (history$4[e.message]++ >= 5) {
      return true;
    }
    if (e && e.message) {
      data$a = {
        message: e.message,
        line: error['lineno'],
        column: error['colno'],
        stack: e.stack,
        source: error['filename'],
      };
      if (e.message.indexOf('ResizeObserver') >= 0) {
        stop$s();
        return false;
      }
      encode$3(31);
    }
    return true;
  }

  function encode$3 (type) {
    return __awaiter(this, void 0, void 0, function() {
      var tokens;
      return __generator(this, function(_a) {
        tokens = [time(), type];
        switch (type) {
          case 31:
            tokens.push(data$a.message);
            tokens.push(data$a.line);
            tokens.push(data$a.column);
            tokens.push(data$a.stack);
            tokens.push(data$a.source);
            queue(tokens);
            break;
          case 33:
            if (data$9) {
              tokens.push(data$9.code);
              tokens.push(data$9.name);
              tokens.push(data$9.message);
              tokens.push(data$9.stack);
              tokens.push(data$9.severity);
              queue(tokens, false);
            }
            break;
        }
        return [2];
      });
    });
  }

  var history$3 = {};
  var data$9;

  function start$s () {
    history$3 = {};
  }

  function log$1 (code, severity, name, message, stack) {
    if (name === void 0) {
      name = null;
    }
    if (message === void 0) {
      message = null;
    }
    if (stack === void 0) {
      stack = null;
    }
    var key = name ? ''.concat(name, '|').concat(message) : '';
    if (code in history$3 && history$3[code].indexOf(key) >= 0) {
      return;
    }
    data$9 = {
      code: code,
      name: name,
      message: message,
      stack: stack,
      severity: severity,
    };
    if (code in history$3) {
      history$3[code].push(key);
    } else {
      history$3[code] = [key];
    }
    encode$3(33);
  }

  function stop$r () {
    history$3 = {};
  }

  var formatRegex = /1/g;
  var digitsRegex$1 = /[^0-9\.]/g;
  var digitsWithCommaRegex = /[^0-9\.,]/g;
  var regexCache = {};

  function regions$1 (root, value) {
    var _loop_1 = function(v) {
      var regionId = v[0],
        selector = v[1],
        filter = v[2],
        match = v[3];
      var valid = true;
      switch (filter) {
        case 0:
          valid = match && !!top.location.href.match(regex(match));
          break;
        case 1:
          valid = match && !!evaluate(match);
          break;
      }
      if (valid) {
        root.querySelectorAll(selector).forEach(function(e) {
          return observe$b(e, regionId.toString());
        });
      }
    };
    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
      var v = value_1[_i];
      _loop_1(v);
    }
  }

  function metrics (root, value) {
    var _loop_2 = function(v) {
      var metricId = v[0],
        source = v[1],
        match = v[2],
        scale = v[3];
      if (match) {
        switch (source) {
          case 0:
            root.querySelectorAll(match).forEach(function(e) {
              max(metricId, num$2(e.innerText, scale));
            });
            break;
          case 2:
            root.querySelectorAll('['.concat(match, ']')).forEach(function(e) {
              max(metricId, num$2(e.getAttribute(match), scale, false));
            });
            break;
          case 1:
            max(metricId, evaluate(match, 'number'));
            break;
        }
      }
    };
    for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
      var v = value_2[_i];
      _loop_2(v);
    }
  }

  function dimensions (root, value) {
    var _loop_3 = function(v) {
      var dimensionId = v[0],
        source = v[1],
        match = v[2];
      if (match) {
        switch (source) {
          case 0:
            root.querySelectorAll(match).forEach(function(e) {
              log(dimensionId, str(e.innerText));
            });
            break;
          case 2:
            root.querySelectorAll('['.concat(match, ']')).forEach(function(e) {
              log(dimensionId, str(e.getAttribute(match)));
            });
            break;
          case 1:
            log(dimensionId, str(evaluate(match, 'string')));
            break;
        }
      }
    };
    for (var _i = 0, value_3 = value; _i < value_3.length; _i++) {
      var v = value_3[_i];
      _loop_3(v);
    }
  }

  function regex (match) {
    regexCache[match] =
      match in regexCache ? regexCache[match] : new RegExp(match);
    return regexCache[match];
  }

  function evaluate (variable, type, base) {
    if (type === void 0) {
      type = null;
    }
    if (base === void 0) {
      base = window;
    }
    var parts = variable.split('.');
    var first = parts.shift();
    if (base && base[first]) {
      if (parts.length > 0) {
        return evaluate(parts.join('.'), type, base[first]);
      }
      var output =
        type === null || type === typeof base[first] ? base[first] : null;
      return output;
    }
    return null;
  }

  function str (input) {
    return input ? input.substr(0, 256) : input;
  }

  function num$2 (text, scale, localize) {
    if (localize === void 0) {
      localize = true;
    }
    try {
      scale = scale || 1;
      var lang = document.documentElement.lang;
      if (Intl && Intl.NumberFormat && lang && localize) {
        text = text.replace(digitsWithCommaRegex, '');
        var group = Intl.NumberFormat(lang).
          format(11111).
          replace(formatRegex, '');
        var decimal = Intl.NumberFormat(lang).
          format(1.1).
          replace(formatRegex, '');
        return Math.round(
          parseFloat(
            text.replace(new RegExp('\\' + group, 'g'), '').
              replace(new RegExp('\\' + decimal), '.'),
          ) * scale,
        );
      }
      return Math.round(parseFloat(text.replace(digitsRegex$1, '')) * scale);
    } catch (_a) {
      return null;
    }
  }

  var TAGS = ['DIV', 'TR', 'P', 'LI', 'UL', 'A', 'BUTTON'];

  function selector (input, beta) {
    if (beta === void 0) {
      beta = false;
    }
    var a = input.attributes;
    var prefix = input.prefix ? input.prefix[beta ? 1 : 0] : null;
    var suffix =
      beta || (a && !('class' in a)) || TAGS.indexOf(input.tag) >= 0
        ? ':nth-of-type('.concat(input.position, ')')
        : '';
    switch (input.tag) {
      case 'STYLE':
      case 'TITLE':
      case 'LINK':
      case 'META':
      case '*T':
      case '*D':
        return '';
      case 'HTML':
        return 'HTML';
      default:
        if (prefix === null) {
          return '';
        }
        prefix = ''.concat(prefix, '>');
        input.tag =
          input.tag.indexOf('svg:') === 0
            ? input.tag.substr('svg:'.length)
            : input.tag;
        var selector = ''.concat(prefix).concat(input.tag).concat(suffix);
        var classes =
          'class' in a && a['class'].length > 0
            ? a['class'].trim().split(/\s+/)
            : null;
        if (beta) {
          var id = 'id' in a && a['id'].length > 0 ? a['id'] : null;
          classes =
            input.tag !== 'BODY' && classes
              ? classes.filter(function(c) {
                return !hasDigits(c);
              })
              : [];
          selector =
            classes.length > 0
              ? ''.concat(prefix).
                concat(input.tag, '.').
                concat(classes.join('.')).
                concat(suffix)
              : selector;
          selector =
            id && hasDigits(id) === false
              ? ''.concat(getDomPrefix(prefix), '#').concat(id)
              : selector;
        } else {
          selector = classes
            ? ''.concat(prefix).
              concat(input.tag, '.').
              concat(classes.join('.')).
              concat(suffix)
            : selector;
        }
        return selector;
    }
  }

  function getDomPrefix (prefix) {
    var shadowDomStart = prefix.lastIndexOf('*S');
    var iframeDomStart = prefix.lastIndexOf(
      ''.concat('iframe:').concat('HTML'),
    );
    var domStart = Math.max(shadowDomStart, iframeDomStart);
    if (domStart < 0) {
      return '';
    }
    var domEnd = prefix.indexOf('>', domStart) + 1;
    return prefix.substr(0, domEnd);
  }

  function hasDigits (value) {
    for (var i = 0; i < value.length; i++) {
      var c = value.charCodeAt(i);
      if (c >= 48 && c <= 57) {
        return true;
      }
    }
    return false;
  }

  var index = 1;
  var DISALLOWED_TYPES = ['password', 'hidden', 'email', 'tel'];
  var DISALLOWED_NAMES = [
    'addr',
    'cell',
    'code',
    'dob',
    'email',
    'mob',
    'name',
    'phone',
    'secret',
    'social',
    'ssn',
    'tel',
    'zip',
    'pass',
    'card',
    'account',
    'cvv',
    'ccv',
  ];
  var DISALLOWED_MATCH = ['address', 'password', 'contact'];
  var nodes = [];
  var values = [];
  var updateMap = [];
  var hashMap = {};
  var override = [];
  var unmask = [];
  var idMap = null;
  var iframeMap = null;
  var privacyMap = null;

  function start$r () {
    reset$g();
    parse(document, true);
  }

  function stop$q () {
    reset$g();
  }

  function reset$g () {
    index = 1;
    nodes = [];
    values = [];
    updateMap = [];
    hashMap = {};
    override = [];
    unmask = [];
    idMap = new WeakMap();
    iframeMap = new WeakMap();
    privacyMap = new WeakMap();
  }

  function parse (root, init) {
    if (init === void 0) {
      init = false;
    }
    try {
      if (init) {
        config$1.unmask.forEach(function(x) {
          return x.indexOf('!') < 0
            ? unmask.push(x)
            : override.push(x.substr(1));
        });
      }
      if ('querySelectorAll' in root) {
        regions$1(root, config$1.regions);
        metrics(root, config$1.metrics);
        dimensions(root, config$1.dimensions);
        config$1.mask.forEach(function(x) {
          return root.querySelectorAll(x).forEach(function(e) {
            return privacyMap.set(e, 3);
          });
        });
        unmask.forEach(function(x) {
          return root.querySelectorAll(x).forEach(function(e) {
            return privacyMap.set(e, 0);
          });
        });
      }
    } catch (e) {
      log$1(5, 1, e ? e.name : null);
    }
  }

  function getId (node, autogen) {
    if (autogen === void 0) {
      autogen = false;
    }
    if (node === null) {
      return null;
    }
    var id = idMap.get(node);
    if (!id && autogen) {
      id = index++;
      idMap.set(node, id);
    }
    return id ? id : null;
  }

  function add (node, parent, data, source) {
    var id = getId(node, true);
    var parentId = parent ? getId(parent) : null;
    var previousId = getPreviousId(node);
    var privacy = config$1.content ? 1 : 2;
    var parentValue = null;
    var regionId = exists(node) ? id : null;
    if (parentId >= 0 && values[parentId]) {
      parentValue = values[parentId];
      parentValue.children.push(id);
      regionId = regionId === null ? parentValue.region : regionId;
      privacy = parentValue.metadata.privacy;
    }
    privacy = getPrivacy(node, data, parentValue, privacy);
    if (data.attributes && 'data-clarity-region' in data.attributes) {
      observe$b(node, data.attributes['data-clarity-region']);
      regionId = id;
    }
    nodes[id] = node;
    values[id] = {
      id: id,
      parent: parentId,
      previous: previousId,
      children: [],
      data: data,
      selector: null,
      hash: null,
      region: regionId,
      metadata: {
        active: true,
        suspend: false,
        privacy: privacy,
        position: null,
        size: null,
      },
    };
    updateSelector(values[id]);
    size(values[id], parentValue);
    track$5(id, source);
  }

  function update (node, parent, data, source) {
    var id = getId(node);
    var parentId = parent ? getId(parent) : null;
    var previousId = getPreviousId(node);
    var changed = false;
    var parentChanged = false;
    if (id in values) {
      var value = values[id];
      value.metadata.active = true;
      if (value.previous !== previousId) {
        changed = true;
        value.previous = previousId;
      }
      if (value.parent !== parentId) {
        changed = true;
        var oldParentId = value.parent;
        value.parent = parentId;
        if (parentId !== null && parentId >= 0) {
          var childIndex =
            previousId === null
              ? 0
              : values[parentId].children.indexOf(previousId) + 1;
          values[parentId].children.splice(childIndex, 0, id);
          value.region = exists(node) ? id : values[parentId].region;
        } else {
          remove(id, source);
        }
        if (oldParentId !== null && oldParentId >= 0) {
          var nodeIndex = values[oldParentId].children.indexOf(id);
          if (nodeIndex >= 0) {
            values[oldParentId].children.splice(nodeIndex, 1);
          }
        }
        parentChanged = true;
      }
      for (var key in data) {
        if (diff(value['data'], data, key)) {
          changed = true;
          value['data'][key] = data[key];
        }
      }
      updateSelector(value);
      track$5(id, source, changed, parentChanged);
    }
  }

  function sameorigin (node) {
    var output = false;
    if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'IFRAME') {
      var frame = node;
      try {
        var doc = frame.contentDocument;
        if (doc) {
          iframeMap.set(frame.contentDocument, frame);
          output = true;
        }
      } catch (_a) {}
    }
    return output;
  }

  function iframe (node) {
    var doc = node.nodeType === Node.DOCUMENT_NODE ? node : null;
    return doc && iframeMap.has(doc) ? iframeMap.get(doc) : null;
  }

  function getPrivacy (node, data, parent, privacy) {
    var attributes = data.attributes;
    var tag = data.tag.toUpperCase();
    if (privacyMap.has(node)) {
      return privacyMap.get(node);
    }
    if (tag === '*T' && parent && parent.data) {
      var path = parent.selector ? parent.selector[0] : '';
      privacy =
        parent.data.tag === 'STYLE' || parent.data.tag === 'TITLE'
          ? 0
          : privacy;
      for (var _i = 0, override_1 = override; _i < override_1.length; _i++) {
        var entry = override_1[_i];
        if (path.indexOf(entry) >= 0) {
          privacy = 0;
          break;
        }
      }
    }
    if (attributes === null || attributes === undefined) {
      return privacy;
    }
    if ('class' in attributes && privacy === 1) {
      for (
        var _a = 0, DISALLOWED_MATCH_1 = DISALLOWED_MATCH;
        _a < DISALLOWED_MATCH_1.length;
        _a++
      ) {
        var match = DISALLOWED_MATCH_1[_a];
        if (attributes['class'].indexOf(match) >= 0) {
          privacy = 2;
          break;
        }
      }
    }
    if (tag === 'INPUT') {
      if (privacy === 0) {
        var field = '';
        for (var _b = 0, _c = Object.keys(attributes); _b < _c.length; _b++) {
          var attribute = _c[_b];
          field += attributes[attribute].toLowerCase();
        }
        for (
          var _d = 0, DISALLOWED_NAMES_1 = DISALLOWED_NAMES;
          _d < DISALLOWED_NAMES_1.length;
          _d++
        ) {
          var name_1 = DISALLOWED_NAMES_1[_d];
          if (field.indexOf(name_1) >= 0) {
            privacy = 2;
            break;
          }
        }
      } else if (privacy === 1) {
        privacy = attributes && attributes['type'] === 'submit' ? 0 : 2;
      }
    }
    if (
      'type' in attributes &&
      DISALLOWED_TYPES.indexOf(attributes['type']) >= 0
    ) {
      privacy = 2;
    }
    if ('data-clarity-mask' in attributes) {
      privacy = 3;
    }
    if ('data-clarity-unmask' in attributes) {
      privacy = 0;
    }
    return privacy;
  }

  function diff (a, b, field) {
    if (typeof a[field] === 'object' && typeof b[field] === 'object') {
      for (var key in a[field]) {
        if (a[field][key] !== b[field][key]) {
          return true;
        }
      }
      for (var key in b[field]) {
        if (b[field][key] !== a[field][key]) {
          return true;
        }
      }
      return false;
    }
    return a[field] !== b[field];
  }

  function position (parent, child) {
    child.metadata.position = 1;
    var idx = parent ? parent.children.indexOf(child.id) : -1;
    while (idx-- > 0) {
      var sibling = values[parent.children[idx]];
      if (child.data.tag === sibling.data.tag) {
        child.metadata.position = sibling.metadata.position + 1;
        break;
      }
    }
    return child.metadata.position;
  }

  function updateSelector (value) {
    var parent =
      value.parent && value.parent in values ? values[value.parent] : null;
    var prefix = parent ? parent.selector : null;
    var d = value.data;
    var p = position(parent, value);
    var s = {
      tag: d.tag,
      prefix: prefix,
      position: p,
      attributes: d.attributes,
    };
    value.selector = [selector(s), selector(s, true)];
    value.hash = value.selector.map(function(x) {
      return x ? hash(x) : null;
    });
    value.hash.forEach(function(h) {
      return (hashMap[h] = value.id);
    });
  }

  function getNode (id) {
    if (id in nodes) {
      return nodes[id];
    }
    return null;
  }

  function getValue (id) {
    if (id in values) {
      return values[id];
    }
    return null;
  }

  function get (node) {
    var id = getId(node);
    return id in values ? values[id] : null;
  }

  function lookup (hash) {
    return hash in hashMap ? hashMap[hash] : null;
  }

  function has (node) {
    return getId(node) in nodes;
  }

  function updates$2 () {
    var output = [];
    for (var _i = 0, updateMap_1 = updateMap; _i < updateMap_1.length; _i++) {
      var id = updateMap_1[_i];
      if (id in values) {
        output.push(values[id]);
      }
    }
    updateMap = [];
    return output;
  }

  function remove (id, source) {
    if (id in values) {
      var value = values[id];
      value.metadata.active = false;
      value.parent = null;
      track$5(id, source);
    }
  }

  function size (value, parent) {
    var data = value.data;
    var tag = data.tag;
    var isLongText = tag === '*T' && data.value && data.value.length > 15;
    var isMasked = value.metadata.privacy === 2 || value.metadata.privacy === 3;
    if (isLongText && isMasked && parent && parent.metadata.size === null) {
      parent.metadata.size = [];
    }
    if (data.tag === 'IMG' && value.metadata.privacy === 3) {
      value.metadata.size = [];
    }
  }

  function getPreviousId (node) {
    var id = null;
    while (id === null && node.previousSibling) {
      id = getId(node.previousSibling);
      node = node.previousSibling;
    }
    return id;
  }

  function track$5 (id, source, changed, parentChanged) {
    if (changed === void 0) {
      changed = true;
    }
    if (parentChanged === void 0) {
      parentChanged = false;
    }
    var uIndex = updateMap.indexOf(id);
    if (uIndex >= 0 && source === 1 && parentChanged) {
      updateMap.splice(uIndex, 1);
      updateMap.push(id);
    } else if (uIndex === -1 && changed) {
      updateMap.push(id);
    }
  }

  var dom = Object.freeze({
    __proto__: null,
    start: start$r,
    stop: stop$q,
    parse: parse,
    getId: getId,
    add: add,
    update: update,
    sameorigin: sameorigin,
    iframe: iframe,
    getNode: getNode,
    getValue: getValue,
    get: get,
    lookup: lookup,
    has: has,
    updates: updates$2,
  });
  var state$7 = [];
  var regionMap = null;
  var regions = {};
  var queue$2 = [];
  var watch = false;
  var observer$1 = null;

  function start$q () {
    reset$f();
    observer$1 = null;
    regionMap = new WeakMap();
    regions = {};
    queue$2 = [];
    watch = window['IntersectionObserver'] ? true : false;
  }

  function observe$b (node, name) {
    if (regionMap.has(node) === false) {
      regionMap.set(node, name);
      observer$1 =
        observer$1 === null && watch
          ? new IntersectionObserver(handler$2, {
            threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
          })
          : observer$1;
      if (observer$1 && node && node.nodeType === Node.ELEMENT_NODE) {
        observer$1.observe(node);
      }
    }
  }

  function exists (node) {
    return regionMap && regionMap.has(node);
  }

  function track$4 (id, event) {
    var node = getNode(id);
    var data =
      id in regions
        ? regions[id]
        : { id: id, visibility: 0, interaction: 16, name: regionMap.get(node) };
    var interaction = 16;
    switch (event) {
      case 9:
        interaction = 20;
        break;
      case 27:
        interaction = 30;
        break;
    }
    process$6(node, data, interaction, data.visibility);
  }

  function compute$5 () {
    var q = [];
    for (var _i = 0, queue_1 = queue$2; _i < queue_1.length; _i++) {
      var r = queue_1[_i];
      var id = getId(r.node);
      if (!(id in regions)) {
        if (id) {
          r.data.id = id;
          regions[id] = r.data;
          state$7.push(clone(r.data));
        } else {
          q.push(r);
        }
      }
    }
    queue$2 = q;
    if (state$7.length > 0) {
      encode$4(7);
    }
  }

  function handler$2 (entries) {
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
      var entry = entries_1[_i];
      var target = entry.target;
      var rect = entry.boundingClientRect;
      var overlap = entry.intersectionRect;
      var viewport = entry.rootBounds;
      if (
        regionMap.has(target) &&
        rect.width + rect.height > 0 &&
        viewport.width > 0 &&
        viewport.height > 0
      ) {
        var id = target ? getId(target) : null;
        var data =
          id in regions
            ? regions[id]
            : {
              id: id,
              name: regionMap.get(target),
              interaction: 16,
              visibility: 0,
            };
        var viewportRatio = overlap
          ? (overlap.width * overlap.height * 1) /
          (viewport.width * viewport.height)
          : 0;
        var visible = viewportRatio > 0.05 || entry.intersectionRatio > 0.8;
        var scrolledToEnd =
          (visible || data.visibility == 10) &&
          Math.abs(rect.top) + viewport.height > rect.height;
        process$6(
          target,
          data,
          data.interaction,
          scrolledToEnd ? 13 : visible ? 10 : 0,
        );
        if (data.visibility >= 13 && observer$1) {
          observer$1.unobserve(target);
        }
      }
    }
    if (state$7.length > 0) {
      encode$4(7);
    }
  }

  function process$6 (n, d, s, v) {
    var updated = s > d.interaction || v > d.visibility;
    d.interaction = s > d.interaction ? s : d.interaction;
    d.visibility = v > d.visibility ? v : d.visibility;
    if (d.id) {
      if ((d.id in regions && updated) || !(d.id in regions)) {
        regions[d.id] = d;
        state$7.push(clone(d));
      }
    } else {
      queue$2.push({ node: n, data: d });
    }
  }

  function clone (r) {
    return {
      time: time(),
      data: {
        id: r.id,
        interaction: r.interaction,
        visibility: r.visibility,
        name: r.name,
      },
    };
  }

  function reset$f () {
    state$7 = [];
  }

  function stop$p () {
    reset$f();
    regionMap = null;
    regions = {};
    queue$2 = [];
    if (observer$1) {
      observer$1.disconnect();
      observer$1 = null;
    }
    watch = false;
  }

  function offset (element) {
    var output = { x: 0, y: 0 };
    if (element && element.offsetParent) {
      do {
        var parent_1 = element.offsetParent;
        var frame = parent_1 === null ? iframe(element.ownerDocument) : null;
        output.x += element.offsetLeft;
        output.y += element.offsetTop;
        element = frame ? frame : parent_1;
      } while (element);
    }
    return output;
  }

  var UserInputTags = ['input', 'textarea', 'radio', 'button', 'canvas'];
  var state$6 = [];

  function start$p () {
    reset$e();
  }

  function observe$a (root) {
    bind(root, 'click', handler$1.bind(this, 9, root), true);
  }

  function handler$1 (event, root, evt) {
    var frame = iframe(root);
    var d = frame
      ? frame.contentDocument.documentElement
      : document.documentElement;
    var x =
      'pageX' in evt
        ? Math.round(evt.pageX)
        : 'clientX' in evt
          ? Math.round(evt['clientX'] + d.scrollLeft)
          : null;
    var y =
      'pageY' in evt
        ? Math.round(evt.pageY)
        : 'clientY' in evt
          ? Math.round(evt['clientY'] + d.scrollTop)
          : null;
    if (frame) {
      var distance = offset(frame);
      x = x ? x + Math.round(distance.x) : x;
      y = y ? y + Math.round(distance.y) : y;
    }
    var t = target(evt);
    var a = link(t);
    var l = layout$1(t);
    if (evt.detail === 0 && l) {
      x = Math.round(l.x + l.w / 2);
      y = Math.round(l.y + l.h / 2);
    }
    var eX = l ? Math.max(Math.floor(((x - l.x) / l.w) * 32767), 0) : 0;
    var eY = l ? Math.max(Math.floor(((y - l.y) / l.h) * 32767), 0) : 0;
    if (x !== null && y !== null) {
      state$6.push({
        time: time(),
        event: event,
        data: {
          target: t,
          x: x,
          y: y,
          eX: eX,
          eY: eY,
          button: evt.button,
          reaction: reaction(t),
          context: context(a),
          text: text(t),
          link: a ? a.href : null,
          hash: null,
        },
      });
      schedule$1(encode$2.bind(this, event));
    }
  }

  function text (element) {
    var output = null;
    if (element) {
      var t = element.textContent || element.value || element.alt;
      if (t) {
        output = t.trim().replace(/\s+/g, ' ').substr(0, 25);
      }
    }
    return output;
  }

  function reaction (element) {
    if (element.nodeType === Node.ELEMENT_NODE) {
      var tag = element.tagName.toLowerCase();
      if (UserInputTags.indexOf(tag) >= 0) {
        return 0;
      }
    }
    return 1;
  }

  function layout$1 (element) {
    var box = null;
    var de = document.documentElement;
    if (typeof element.getBoundingClientRect === 'function') {
      var rect = element.getBoundingClientRect();
      if (rect && rect.width > 0 && rect.height > 0) {
        box = {
          x: Math.floor(
            rect.left +
            ('pageXOffset' in window ? window.pageXOffset : de.scrollLeft),
          ),
          y: Math.floor(
            rect.top +
            ('pageYOffset' in window ? window.pageYOffset : de.scrollTop),
          ),
          w: Math.floor(rect.width),
          h: Math.floor(rect.height),
        };
      }
    }
    return box;
  }

  function context (a) {
    if (a && a.hasAttribute('target')) {
      switch (a.getAttribute('target')) {
        case '_blank':
          return 1;
        case '_parent':
          return 2;
        case '_top':
          return 3;
      }
    }
    return 0;
  }

  function reset$e () {
    state$6 = [];
  }

  function stop$o () {
    reset$e();
  }

  var state$5 = [];

  function start$o () {
    reset$d();
  }

  function observe$9 (root) {
    bind(root, 'cut', recompute$7.bind(this, 0), true);
    bind(root, 'copy', recompute$7.bind(this, 1), true);
    bind(root, 'paste', recompute$7.bind(this, 2), true);
  }

  function recompute$7 (action, evt) {
    state$5.push({
      time: time(),
      event: 38,
      data: { target: target(evt), action: action },
    });
    schedule$1(encode$2.bind(this, 38));
  }

  function reset$d () {
    state$5 = [];
  }

  function stop$n () {
    reset$d();
  }

  var timeout$5 = null;
  var state$4 = [];

  function start$n () {
    reset$c();
  }

  function observe$8 (root) {
    bind(root, 'input', recompute$6, true);
  }

  function recompute$6 (evt) {
    var input = target(evt);
    var value = get(input);
    if (input && input.type && value) {
      var v = void 0;
      switch (input.type) {
        case 'radio':
        case 'checkbox':
          v = input.checked ? 'true' : 'false';
          break;
        case 'range':
          v = input.value;
          break;
        default:
          v = scrub(input.value, 'input', value.metadata.privacy);
          break;
      }
      var data = { target: input, value: v };
      if (
        state$4.length > 0 &&
        state$4[state$4.length - 1].data.target === data.target
      ) {
        state$4.pop();
      }
      state$4.push({ time: time(), event: 27, data: data });
      clearTimeout(timeout$5);
      timeout$5 = setTimeout(process$5, 500, 27);
    }
  }

  function process$5 (event) {
    schedule$1(encode$2.bind(this, event));
  }

  function reset$c () {
    state$4 = [];
  }

  function stop$m () {
    clearTimeout(timeout$5);
    reset$c();
  }

  var state$3 = [];
  var timeout$4 = null;

  function start$m () {
    reset$b();
  }

  function observe$7 (root) {
    bind(root, 'mousedown', mouse.bind(this, 13, root), true);
    bind(root, 'mouseup', mouse.bind(this, 14, root), true);
    bind(root, 'mousemove', mouse.bind(this, 12, root), true);
    bind(root, 'mousewheel', mouse.bind(this, 15, root), true);
    bind(root, 'dblclick', mouse.bind(this, 16, root), true);
    bind(root, 'touchstart', touch.bind(this, 17, root), true);
    bind(root, 'touchend', touch.bind(this, 18, root), true);
    bind(root, 'touchmove', touch.bind(this, 19, root), true);
    bind(root, 'touchcancel', touch.bind(this, 20, root), true);
  }

  function mouse (event, root, evt) {
    var frame = iframe(root);
    var d = frame
      ? frame.contentDocument.documentElement
      : document.documentElement;
    var x =
      'pageX' in evt
        ? Math.round(evt.pageX)
        : 'clientX' in evt
          ? Math.round(evt['clientX'] + d.scrollLeft)
          : null;
    var y =
      'pageY' in evt
        ? Math.round(evt.pageY)
        : 'clientY' in evt
          ? Math.round(evt['clientY'] + d.scrollTop)
          : null;
    if (frame) {
      var distance = offset(frame);
      x = x ? x + Math.round(distance.x) : x;
      y = y ? y + Math.round(distance.y) : y;
    }
    if (x !== null && y !== null) {
      handler({
        time: time(),
        event: event,
        data: { target: target(evt), x: x, y: y },
      });
    }
  }

  function touch (event, root, evt) {
    var frame = iframe(root);
    var d = frame
      ? frame.contentDocument.documentElement
      : document.documentElement;
    var touches = evt.changedTouches;
    var t = time();
    if (touches) {
      for (var i = 0; i < touches.length; i++) {
        var entry = touches[i];
        var x =
          'clientX' in entry
            ? Math.round(entry['clientX'] + d.scrollLeft)
            : null;
        var y =
          'clientY' in entry
            ? Math.round(entry['clientY'] + d.scrollTop)
            : null;
        x = x && frame ? x + Math.round(frame.offsetLeft) : x;
        y = y && frame ? y + Math.round(frame.offsetTop) : y;
        if (x !== null && y !== null) {
          handler({
            time: t,
            event: event,
            data: { target: target(evt), x: x, y: y },
          });
        }
      }
    }
  }

  function handler (current) {
    switch (current.event) {
      case 12:
      case 15:
      case 19:
        var length_1 = state$3.length;
        var last = length_1 > 1 ? state$3[length_1 - 2] : null;
        if (last && similar$1(last, current)) {
          state$3.pop();
        }
        state$3.push(current);
        clearTimeout(timeout$4);
        timeout$4 = setTimeout(process$4, 500, current.event);
        break;
      default:
        state$3.push(current);
        process$4(current.event);
        break;
    }
  }

  function process$4 (event) {
    schedule$1(encode$2.bind(this, event));
  }

  function reset$b () {
    state$3 = [];
  }

  function similar$1 (last, current) {
    var dx = last.data.x - current.data.x;
    var dy = last.data.y - current.data.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    var gap = current.time - last.time;
    var match = current.data.target === last.data.target;
    return current.event === last.event && match && distance < 20 && gap < 25;
  }

  function stop$l () {
    clearTimeout(timeout$4);
    if (state$3.length > 0) {
      process$4(state$3[state$3.length - 1].event);
    }
  }

  var data$8;

  function start$l () {
    bind(window, 'resize', recompute$5);
    recompute$5();
  }

  function recompute$5 () {
    var de = document.documentElement;
    data$8 = {
      width:
        de && 'clientWidth' in de
          ? Math.min(de.clientWidth, window.innerWidth)
          : window.innerWidth,
      height:
        de && 'clientHeight' in de
          ? Math.min(de.clientHeight, window.innerHeight)
          : window.innerHeight,
    };
    encode$2(11);
  }

  function reset$a () {
    data$8 = null;
  }

  function stop$k () {
    reset$a();
  }

  var state$2 = [];
  var timeout$3 = null;

  function start$k () {
    state$2 = [];
    recompute$4();
  }

  function observe$6 (root) {
    var frame = iframe(root);
    var node = frame ? frame.contentWindow : root === document ? window : root;
    bind(node, 'scroll', recompute$4, true);
  }

  function recompute$4 (event) {
    if (event === void 0) {
      event = null;
    }
    var w = window;
    var de = document.documentElement;
    var element = event ? target(event) : de;
    if (element && element.nodeType === Node.DOCUMENT_NODE) {
      var frame = iframe(element);
      w = frame ? frame.contentWindow : w;
      element = de = element.documentElement;
    }
    var x =
      element === de && 'pageXOffset' in w
        ? Math.round(w.pageXOffset)
        : Math.round(element.scrollLeft);
    var y =
      element === de && 'pageYOffset' in w
        ? Math.round(w.pageYOffset)
        : Math.round(element.scrollTop);
    var current = {
      time: time(),
      event: 10,
      data: { target: element, x: x, y: y },
    };
    if ((event === null && x === 0 && y === 0) || x === null || y === null) {
      return;
    }
    var length = state$2.length;
    var last = length > 1 ? state$2[length - 2] : null;
    if (last && similar(last, current)) {
      state$2.pop();
    }
    state$2.push(current);
    clearTimeout(timeout$3);
    timeout$3 = setTimeout(process$3, 500, 10);
  }

  function reset$9 () {
    state$2 = [];
  }

  function process$3 (event) {
    schedule$1(encode$2.bind(this, event));
  }

  function similar (last, current) {
    var dx = last.data.x - current.data.x;
    var dy = last.data.y - current.data.y;
    return dx * dx + dy * dy < 20 * 20 && current.time - last.time < 25;
  }

  function stop$j () {
    clearTimeout(timeout$3);
    state$2 = [];
  }

  var data$7 = null;
  var previous = null;
  var timeout$2 = null;

  function start$j () {
    reset$8();
  }

  function observe$5 (root) {
    bind(root, 'selectstart', recompute$3.bind(this, root), true);
    bind(root, 'selectionchange', recompute$3.bind(this, root), true);
  }

  function recompute$3 (root) {
    var doc = root.nodeType === Node.DOCUMENT_NODE ? root : document;
    var current = doc.getSelection();
    if (current === null) {
      return;
    }
    if (
      (current.anchorNode === null && current.focusNode === null) ||
      (current.anchorNode === current.focusNode &&
        current.anchorOffset === current.focusOffset)
    ) {
      return;
    }
    var startNode = data$7.start ? data$7.start : null;
    if (
      previous !== null &&
      data$7.start !== null &&
      startNode !== current.anchorNode
    ) {
      clearTimeout(timeout$2);
      process$2(21);
    }
    data$7 = {
      start: current.anchorNode,
      startOffset: current.anchorOffset,
      end: current.focusNode,
      endOffset: current.focusOffset,
    };
    previous = current;
    clearTimeout(timeout$2);
    timeout$2 = setTimeout(process$2, 500, 21);
  }

  function process$2 (event) {
    schedule$1(encode$2.bind(this, event));
  }

  function reset$8 () {
    previous = null;
    data$7 = { start: 0, startOffset: 0, end: 0, endOffset: 0 };
  }

  function stop$i () {
    reset$8();
    clearTimeout(timeout$2);
  }

  var state$1 = [];

  function start$i () {
    reset$7();
  }

  function observe$4 (root) {
    bind(root, 'submit', recompute$2, true);
  }

  function recompute$2 (evt) {
    state$1.push({ time: time(), event: 39, data: { target: target(evt) } });
    schedule$1(encode$2.bind(this, 39));
  }

  function reset$7 () {
    state$1 = [];
  }

  function stop$h () {
    reset$7();
  }

  var data$6;

  function start$h () {
    bind(window, 'pagehide', recompute$1);
  }

  function recompute$1 (evt) {
    data$6 = { name: evt.type };
    encode$2(26);
    stop();
  }

  function reset$6 () {
    data$6 = null;
  }

  function stop$g () {
    reset$6();
  }

  var data$5;

  function start$g () {
    bind(document, 'visibilitychange', recompute);
    recompute();
  }

  function recompute () {
    data$5 = {
      visible:
        'visibilityState' in document ? document.visibilityState : 'default',
    };
    encode$2(28);
  }

  function reset$5 () {
    data$5 = null;
  }

  function stop$f () {
    reset$5();
  }

  function start$f () {
    start$d();
    start$p();
    start$o();
    start$m();
    start$n();
    start$l();
    start$g();
    start$k();
    start$j();
    start$i();
    start$h();
  }

  function stop$e () {
    stop$c();
    stop$o();
    stop$n();
    stop$l();
    stop$m();
    stop$k();
    stop$f();
    stop$j();
    stop$i();
    stop$h();
    stop$g();
  }

  function observe$3 (root) {
    observe$6(root);
    if (root.nodeType === Node.DOCUMENT_NODE) {
      observe$a(root);
      observe$9(root);
      observe$7(root);
      observe$8(root);
      observe$5(root);
      observe$4(root);
    }
  }

  var interaction = Object.freeze({
    __proto__: null,
    start: start$f,
    stop: stop$e,
    observe: observe$3,
  });
  var digitsRegex = /[^0-9\.]/g;

  function ld (json) {
    for (var _i = 0, _a = Object.keys(json); _i < _a.length; _i++) {
      var key = _a[_i];
      var value = json[key];
      if (key === '@type' && typeof value === 'string') {
        value = value.toLowerCase();
        value =
          value.indexOf('article') >= 0 || value.indexOf('posting') >= 0
            ? 'article'
            : value;
        switch (value) {
          case 'article':
          case 'recipe':
            log(5, json[key]);
            log(8, json['creator']);
            log(18, json['headline']);
            break;
          case 'product':
            log(5, json[key]);
            log(10, json['name']);
            log(12, json['sku']);
            if (json['brand']) {
              log(6, json['brand']['name']);
            }
            break;
          case 'aggregaterating':
            if (json['ratingValue']) {
              max(11, num$1(json['ratingValue'], 100));
              max(18, num$1(json['bestRating']));
              max(19, num$1(json['worstRating']));
            }
            max(12, num$1(json['ratingCount']));
            max(17, num$1(json['reviewCount']));
            break;
          case 'person':
            log(8, json['name']);
            break;
          case 'offer':
            log(7, json['availability']);
            log(14, json['itemCondition']);
            log(13, json['priceCurrency']);
            log(12, json['sku']);
            max(13, num$1(json['price']));
            break;
          case 'brand':
            log(6, json['name']);
            break;
        }
      }
      if (value !== null && typeof value === 'object') {
        ld(value);
      }
    }
  }

  function num$1 (input, scale) {
    if (scale === void 0) {
      scale = 1;
    }
    if (input !== null) {
      switch (typeof input) {
        case 'number':
          return Math.round(input * scale);
        case 'string':
          return Math.round(parseFloat(input.replace(digitsRegex, '')) * scale);
      }
    }
    return null;
  }

  var IGNORE_ATTRIBUTES = ['title', 'alt', 'onload', 'onfocus', 'onerror'];
  var newlineRegex = /[\r\n]+/g;

  function processNode (node, source) {
    var child = null;
    if (source === 2 && has(node) === false) {
      return child;
    }
    if (
      source !== 0 &&
      node.nodeType === Node.TEXT_NODE &&
      node.parentElement &&
      node.parentElement.tagName === 'STYLE'
    ) {
      node = node.parentNode;
    }
    var add = has(node) === false;
    var call = add ? 'add' : 'update';
    var parent = node.parentElement ? node.parentElement : null;
    var insideFrame = node.ownerDocument !== document;
    switch (node.nodeType) {
      case Node.DOCUMENT_TYPE_NODE:
        parent =
          insideFrame && node.parentNode ? iframe(node.parentNode) : parent;
        var docTypePrefix = insideFrame ? 'iframe:' : '';
        var doctype = node;
        var docAttributes = {
          name: doctype.name,
          publicId: doctype.publicId,
          systemId: doctype.systemId,
        };
        var docData = { tag: docTypePrefix + '*D', attributes: docAttributes };
        dom[call](node, parent, docData, source);
        break;
      case Node.DOCUMENT_NODE:
        if (node === document) parse(document);
        observe$2(node);
        break;
      case Node.DOCUMENT_FRAGMENT_NODE:
        var shadowRoot = node;
        if (shadowRoot.host) {
          parse(shadowRoot);
          var type = typeof shadowRoot.constructor;
          if (
            type === 'function' &&
            shadowRoot.constructor.toString().indexOf('[native code]') >= 0
          ) {
            observe$2(shadowRoot);
            var style = '';
            var adoptedStyleSheets =
              'adoptedStyleSheets' in shadowRoot
                ? shadowRoot['adoptedStyleSheets']
                : [];
            for (
              var _i = 0, adoptedStyleSheets_1 = adoptedStyleSheets;
              _i < adoptedStyleSheets_1.length;
              _i++
            ) {
              var styleSheet = adoptedStyleSheets_1[_i];
              style += getCssRules(styleSheet);
            }
            var fragementData = { tag: '*S', attributes: { style: style } };
            dom[call](node, shadowRoot.host, fragementData, source);
          } else {
            dom[call](
              node,
              shadowRoot.host,
              { tag: '*P', attributes: {} },
              source,
            );
          }
        }
        break;
      case Node.TEXT_NODE:
        parent = parent ? parent : node.parentNode;
        if (
          call === 'update' ||
          (parent && has(parent) && parent.tagName !== 'STYLE')
        ) {
          var textData = { tag: '*T', value: node.nodeValue };
          dom[call](node, parent, textData, source);
        }
        break;
      case Node.ELEMENT_NODE:
        var element = node;
        var tag = element.tagName;
        var attributes = getAttributes(element);
        parent = node.parentElement
          ? node.parentElement
          : node.parentNode
            ? node.parentNode
            : null;
        if (element.namespaceURI === 'http://www.w3.org/2000/svg') {
          tag = 'svg:' + tag;
        }
        switch (tag) {
          case 'HTML':
            parent = insideFrame && parent ? iframe(parent) : null;
            var htmlPrefix = insideFrame ? 'iframe:' : '';
            var htmlData = { tag: htmlPrefix + tag, attributes: attributes };
            dom[call](node, parent, htmlData, source);
            break;
          case 'SCRIPT':
            if (
              'type' in attributes &&
              attributes['type'] === 'application/ld+json'
            ) {
              try {
                ld(JSON.parse(element.text.replace(newlineRegex, '')));
              } catch (_a) {}
            }
            break;
          case 'NOSCRIPT':
            break;
          case 'META':
            var key =
              'property' in attributes
                ? 'property'
                : 'name' in attributes
                  ? 'name'
                  : null;
            if (key && 'content' in attributes) {
              var content = attributes['content'];
              switch (attributes[key]) {
                case 'og:title':
                  log(20, content);
                  break;
                case 'og:type':
                  log(19, content);
                  break;
                case 'generator':
                  log(21, content);
                  break;
              }
            }
            break;
          case 'HEAD':
            var head = { tag: tag, attributes: attributes };
            if (location) {
              head.attributes['*B'] =
                location.protocol + '//' + location.hostname;
            }
            dom[call](node, parent, head, source);
            break;
          case 'STYLE':
            var styleData = {
              tag: tag,
              attributes: attributes,
              value: getStyleValue(element),
            };
            dom[call](node, parent, styleData, source);
            break;
          case 'IFRAME':
            var iframe$1 = node;
            var frameData = { tag: tag, attributes: attributes };
            if (sameorigin(iframe$1)) {
              monitor(iframe$1);
              frameData.attributes['*O'] = 'true';
              if (
                iframe$1.contentDocument &&
                iframe$1.contentWindow &&
                iframe$1.contentDocument.readyState !== 'loading'
              ) {
                child = iframe$1.contentDocument;
              }
            }
            dom[call](node, parent, frameData, source);
            break;
          default:
            var data = { tag: tag, attributes: attributes };
            if (element.shadowRoot) {
              child = element.shadowRoot;
            }
            dom[call](node, parent, data, source);
            break;
        }
        break;
    }
    return child;
  }

  function observe$2 (root) {
    if (has(root)) {
      return;
    }
    observe$1(root);
    observe$3(root);
  }

  function getStyleValue (style) {
    var value = style.textContent ? style.textContent.trim() : '';
    var dataset = style.dataset ? Object.keys(style.dataset).length : 0;
    if (value.length === 0 || dataset > 0) {
      value = getCssRules(style.sheet);
    }
    return value;
  }

  function getCssRules (sheet) {
    var value = '';
    var cssRules = null;
    try {
      cssRules = sheet ? sheet.cssRules : [];
    } catch (e) {
      log$1(1, 1, e ? e.name : null);
      if (e && e.name !== 'SecurityError') {
        throw e;
      }
    }
    if (cssRules !== null) {
      for (var i = 0; i < cssRules.length; i++) {
        value += cssRules[i].cssText;
      }
    }
    return value;
  }

  function getAttributes (element) {
    var output = {};
    var attributes = element.attributes;
    if (attributes && attributes.length > 0) {
      for (var i = 0; i < attributes.length; i++) {
        var name_1 = attributes[i].name;
        if (IGNORE_ATTRIBUTES.indexOf(name_1) < 0) {
          output[name_1] = attributes[i].value;
        }
      }
    }
    if (element.tagName === 'INPUT' && !('value' in output) && element.value) {
      output['value'] = element.value;
    }
    return output;
  }

  function traverse (root, timer, source) {
    return __awaiter(this, void 0, void 0, function() {
      var queue, node, next, state, subnode;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            queue = [root];
            _a.label = 1;
          case 1:
            if (!(queue.length > 0)) return [3, 4];
            node = queue.shift();
            next = node.firstChild;
            while (next) {
              queue.push(next);
              next = next.nextSibling;
            }
            state = state$8(timer);
            if (!(state === 0)) return [3, 3];
            return [4, suspend$1(timer)];
          case 2:
            state = _a.sent();
            _a.label = 3;
          case 3:
            if (state === 2) {
              return [3, 4];
            }
            subnode = processNode(node, source);
            if (subnode) {
              queue.push(subnode);
            }
            return [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }

  var observers = [];
  var mutations = [];
  var insertRule = null;
  var deleteRule = null;
  var attachShadow = null;
  var queue$1 = [];
  var timeout$1 = null;
  var activePeriod = null;
  var history$2 = {};

  function start$e () {
    observers = [];
    queue$1 = [];
    timeout$1 = null;
    activePeriod = 0;
    history$2 = {};
    if (insertRule === null) {
      insertRule = CSSStyleSheet.prototype.insertRule;
    }
    if (deleteRule === null) {
      deleteRule = CSSStyleSheet.prototype.deleteRule;
    }
    if (attachShadow === null) {
      attachShadow = Element.prototype.attachShadow;
    }
    CSSStyleSheet.prototype.insertRule = function() {
      schedule(this.ownerNode);
      return insertRule.apply(this, arguments);
    };
    CSSStyleSheet.prototype.deleteRule = function() {
      schedule(this.ownerNode);
      return deleteRule.apply(this, arguments);
    };
    try {
      Element.prototype.attachShadow = function() {
        return schedule(attachShadow.apply(this, arguments));
      };
    } catch (_a) {
      attachShadow = null;
    }
  }

  function observe$1 (node) {
    try {
      var m = api('MutationObserver');
      var observer = m in window ? new window[m](measure(handle$1)) : null;
      if (observer) {
        observer.observe(node, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true,
        });
        observers.push(observer);
      }
    } catch (e) {
      log$1(2, 0, e ? e.name : null);
    }
  }

  function monitor (frame) {
    if (has(frame) === false) {
      bind(frame, 'load', generate.bind(this, frame, 'childList'), true);
    }
  }

  function stop$d () {
    for (var _i = 0, observers_1 = observers; _i < observers_1.length; _i++) {
      var observer = observers_1[_i];
      if (observer) {
        observer.disconnect();
      }
    }
    observers = [];
    if (insertRule !== null) {
      CSSStyleSheet.prototype.insertRule = insertRule;
      insertRule = null;
    }
    if (deleteRule !== null) {
      CSSStyleSheet.prototype.deleteRule = deleteRule;
      deleteRule = null;
    }
    if (attachShadow != null) {
      Element.prototype.attachShadow = attachShadow;
      attachShadow = null;
    }
    history$2 = {};
    mutations = [];
    queue$1 = [];
    activePeriod = 0;
    timeout$1 = null;
  }

  function active$2 () {
    activePeriod = time() + 3e3;
  }

  function handle$1 (m) {
    var now = time();
    track$6(6, now);
    mutations.push({ time: now, mutations: m });
    schedule$1(process$1, 1).then(function() {
      measure(compute$7)();
      measure(compute$5)();
    });
  }

  function process$1 () {
    return __awaiter(this, void 0, void 0, function() {
      var timer, record, _i, _a, mutation, state, target, type, value;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            timer = { id: id(), cost: 3 };
            start$w(timer);
            _b.label = 1;
          case 1:
            if (!(mutations.length > 0)) return [3, 8];
            record = mutations.shift();
            (_i = 0), (_a = record.mutations);
            _b.label = 2;
          case 2:
            if (!(_i < _a.length)) return [3, 6];
            mutation = _a[_i];
            state = state$8(timer);
            if (!(state === 0)) return [3, 4];
            return [4, suspend$1(timer)];
          case 3:
            state = _b.sent();
            _b.label = 4;
          case 4:
            if (state === 2) {
              return [3, 6];
            }
            target = mutation.target;
            type = track$3(mutation, timer);
            if (type && target && target.ownerDocument) {
              parse(target.ownerDocument);
            }
            if (
              type &&
              target &&
              target.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
              target.host
            ) {
              parse(target);
            }
            switch (type) {
              case 'attributes':
                processNode(target, 3);
                break;
              case 'characterData':
                processNode(target, 4);
                break;
              case 'childList':
                processNodeList(mutation.addedNodes, 1, timer);
                processNodeList(mutation.removedNodes, 2, timer);
                break;
              case 'suspend':
                value = get(target);
                if (value) {
                  value.metadata.suspend = true;
                }
                break;
            }
            _b.label = 5;
          case 5:
            _i++;
            return [3, 2];
          case 6:
            return [4, encode$4(6, timer, record.time)];
          case 7:
            _b.sent();
            return [3, 1];
          case 8:
            stop$t(timer);
            return [2];
        }
      });
    });
  }

  function track$3 (m, timer) {
    var value = m.target ? get(m.target.parentNode) : null;
    if (value && value.data.tag !== 'HTML') {
      var inactive = time() > activePeriod;
      var target = get(m.target);
      var element =
        target && target.selector ? target.selector.join() : m.target.nodeName;
      var parent_1 = value.selector ? value.selector.join() : '';
      var key = [
        parent_1,
        element,
        m.attributeName,
        names(m.addedNodes),
        names(m.removedNodes),
      ].join();
      history$2[key] = key in history$2 ? history$2[key] : [0];
      var h = history$2[key];
      if (inactive === false && h[0] >= 10) {
        processNodeList(h[1], 2, timer);
      }
      h[0] = inactive ? h[0] + 1 : 1;
      if (h[0] === 10) {
        h[1] = m.removedNodes;
        return 'suspend';
      } else if (h[0] > 10) {
        return '';
      }
    }
    return m.type;
  }

  function names (nodes) {
    var output = [];
    for (var i = 0; nodes && i < nodes.length; i++) {
      output.push(nodes[i].nodeName);
    }
    return output.join();
  }

  function processNodeList (list, source, timer) {
    return __awaiter(this, void 0, void 0, function() {
      var length, i, state;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            length = list ? list.length : 0;
            i = 0;
            _a.label = 1;
          case 1:
            if (!(i < length)) return [3, 6];
            if (!(source === 1)) return [3, 2];
            traverse(list[i], timer, source);
            return [3, 5];
          case 2:
            state = state$8(timer);
            if (!(state === 0)) return [3, 4];
            return [4, suspend$1(timer)];
          case 3:
            state = _a.sent();
            _a.label = 4;
          case 4:
            if (state === 2) {
              return [3, 6];
            }
            processNode(list[i], source);
            _a.label = 5;
          case 5:
            i++;
            return [3, 1];
          case 6:
            return [2];
        }
      });
    });
  }

  function schedule (node) {
    if (queue$1.indexOf(node) < 0) {
      queue$1.push(node);
    }
    if (timeout$1) {
      clearTimeout(timeout$1);
    }
    timeout$1 = setTimeout(trigger$1, 33);
    return node;
  }

  function trigger$1 () {
    for (var _i = 0, queue_1 = queue$1; _i < queue_1.length; _i++) {
      var node = queue_1[_i];
      if (node) {
        var shadowRoot = node.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
        if (shadowRoot && has(node)) {
          continue;
        }
        generate(node, shadowRoot ? 'childList' : 'characterData');
      }
    }
    queue$1 = [];
  }

  function generate (target, type) {
    measure(handle$1)([
      {
        addedNodes: [target],
        attributeName: null,
        attributeNamespace: null,
        nextSibling: null,
        oldValue: null,
        previousSibling: null,
        removedNodes: [],
        target: target,
        type: type,
      },
    ]);
  }

  function target (evt) {
    var path = evt.composed && evt.composedPath ? evt.composedPath() : null;
    var node = path && path.length > 0 ? path[0] : evt.target;
    active$2();
    return node.nodeType === Node.DOCUMENT_NODE ? node.documentElement : node;
  }

  function link (node) {
    while (node && node !== document) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        var element = node;
        if (element.tagName === 'A') {
          return element;
        }
      }
      node = node.parentNode;
    }
    return null;
  }

  function metadata$2 (node, event) {
    var output = { id: 0, hash: null, privacy: 2, node: node };
    if (node) {
      var value = get(node);
      if (value !== null) {
        output.id = value.id;
        output.hash = value.hash;
        output.privacy = value.metadata.privacy;
        if (value.region) {
          track$4(value.region, event);
        }
      }
    }
    return output;
  }

  function encode$2 (type) {
    return __awaiter(this, void 0, void 0, function() {
      var t,
        tokens,
        _i,
        _a,
        entry,
        pTarget,
        _b,
        _c,
        entry,
        cTarget,
        cHash,
        _d,
        _e,
        entry,
        target,
        r,
        u,
        _f,
        _g,
        entry,
        iTarget,
        s,
        startTarget,
        endTarget,
        _h,
        _j,
        entry,
        sTarget,
        _k,
        _l,
        entry,
        target,
        _m,
        _o,
        entry,
        v;
      return __generator(this, function(_p) {
        t = time();
        tokens = [t, type];
        switch (type) {
          case 13:
          case 14:
          case 12:
          case 15:
          case 16:
          case 17:
          case 18:
          case 19:
          case 20:
            for (_i = 0, _a = state$3; _i < _a.length; _i++) {
              entry = _a[_i];
              pTarget = metadata$2(entry.data.target, entry.event);
              if (pTarget.id > 0) {
                tokens = [entry.time, entry.event];
                tokens.push(pTarget.id);
                tokens.push(entry.data.x);
                tokens.push(entry.data.y);
                queue(tokens);
                track$7(entry.event, entry.data.x, entry.data.y);
              }
            }
            reset$b();
            break;
          case 9:
            for (_b = 0, _c = state$6; _b < _c.length; _b++) {
              entry = _c[_b];
              cTarget = metadata$2(entry.data.target, entry.event);
              tokens = [entry.time, entry.event];
              cHash = cTarget.hash.join('.');
              tokens.push(cTarget.id);
              tokens.push(entry.data.x);
              tokens.push(entry.data.y);
              tokens.push(entry.data.eX);
              tokens.push(entry.data.eY);
              tokens.push(entry.data.button);
              tokens.push(entry.data.reaction);
              tokens.push(entry.data.context);
              tokens.push(scrub(entry.data.text, 'click', cTarget.privacy));
              tokens.push(entry.data.link);
              tokens.push(cHash);
              queue(tokens);
              track$2(
                entry.time,
                entry.event,
                cHash,
                entry.data.x,
                entry.data.y,
                entry.data.reaction,
                entry.data.context,
              );
            }
            reset$e();
            break;
          case 38:
            for (_d = 0, _e = state$5; _d < _e.length; _d++) {
              entry = _e[_d];
              tokens = [entry.time, entry.event];
              target = metadata$2(entry.data.target, entry.event);
              if (target.id > 0) {
                tokens.push(target.id);
                tokens.push(entry.data.action);
                queue(tokens);
              }
            }
            reset$d();
            break;
          case 11:
            r = data$8;
            tokens.push(r.width);
            tokens.push(r.height);
            track$7(type, r.width, r.height);
            reset$a();
            queue(tokens);
            break;
          case 26:
            u = data$6;
            tokens.push(u.name);
            reset$6();
            queue(tokens);
            break;
          case 27:
            for (_f = 0, _g = state$4; _f < _g.length; _f++) {
              entry = _g[_f];
              iTarget = metadata$2(entry.data.target, entry.event);
              tokens = [entry.time, entry.event];
              tokens.push(iTarget.id);
              tokens.push(entry.data.value);
              queue(tokens);
            }
            reset$c();
            break;
          case 21:
            s = data$7;
            if (s) {
              startTarget = metadata$2(s.start, type);
              endTarget = metadata$2(s.end, type);
              tokens.push(startTarget.id);
              tokens.push(s.startOffset);
              tokens.push(endTarget.id);
              tokens.push(s.endOffset);
              reset$8();
              queue(tokens);
            }
            break;
          case 10:
            for (_h = 0, _j = state$2; _h < _j.length; _h++) {
              entry = _j[_h];
              sTarget = metadata$2(entry.data.target, entry.event);
              if (sTarget.id > 0) {
                tokens = [entry.time, entry.event];
                tokens.push(sTarget.id);
                tokens.push(entry.data.x);
                tokens.push(entry.data.y);
                queue(tokens);
                track$7(entry.event, entry.data.x, entry.data.y);
              }
            }
            reset$9();
            break;
          case 39:
            for (_k = 0, _l = state$1; _k < _l.length; _k++) {
              entry = _l[_k];
              tokens = [entry.time, entry.event];
              target = metadata$2(entry.data.target, entry.event);
              if (target.id > 0) {
                tokens.push(target.id);
                queue(tokens);
              }
            }
            reset$7();
            break;
          case 22:
            for (_m = 0, _o = updates$1; _m < _o.length; _m++) {
              entry = _o[_m];
              tokens = [entry.time, entry.event];
              tokens.push(entry.data.type);
              tokens.push(entry.data.hash);
              tokens.push(entry.data.x);
              tokens.push(entry.data.y);
              tokens.push(entry.data.reaction);
              tokens.push(entry.data.context);
              queue(tokens, false);
            }
            reset$4();
            break;
          case 28:
            v = data$5;
            tokens.push(v.visible);
            queue(tokens);
            visibility(t, v.visible);
            reset$5();
            break;
        }
        return [2];
      });
    });
  }

  var state = [];
  var updates$1 = [];

  function start$d () {
    state = [];
    reset$4();
  }

  function reset$4 () {
    updates$1 = [];
  }

  function track$2 (time, event, hash, x, y, reaction, context) {
    if (reaction === void 0) {
      reaction = 1;
    }
    if (context === void 0) {
      context = 0;
    }
    state.push({
      time: time,
      event: 22,
      data: {
        type: event,
        hash: hash,
        x: x,
        y: y,
        reaction: reaction,
        context: context,
      },
    });
    track$7(event, x, y);
  }

  function compute$4 () {
    var temp = [];
    updates$1 = [];
    var max = data$1.start + data$1.duration;
    var min = Math.max(max - 2e3, 0);
    for (var _i = 0, state_1 = state; _i < state_1.length; _i++) {
      var s = state_1[_i];
      if (s.time >= min) {
        if (s.time <= max) {
          updates$1.push(s);
        }
        temp.push(s);
      }
    }
    state = temp;
    encode$2(22);
  }

  function stop$c () {
    state = [];
    reset$4();
  }

  var discoverBytes = 0;
  var playbackBytes = 0;
  var playback;
  var analysis;
  var timeout = null;
  var transit;
  var active$1;
  var queuedTime = 0;
  var track$1;

  function start$c () {
    active$1 = true;
    discoverBytes = 0;
    playbackBytes = 0;
    queuedTime = 0;
    playback = [];
    analysis = [];
    transit = {};
    track$1 = null;
  }

  function queue (tokens, transmit) {
    if (transmit === void 0) {
      transmit = true;
    }
    if (active$1) {
      var now = time();
      var type = tokens.length > 1 ? tokens[1] : null;
      var event_1 = JSON.stringify(tokens);
      switch (type) {
        case 5:
          discoverBytes += event_1.length;
        case 37:
        case 6:
          playbackBytes += event_1.length;
          playback.push(event_1);
          break;
        default:
          analysis.push(event_1);
          break;
      }
      count$1(25);
      var gap = delay();
      if (now - queuedTime > gap * 2) {
        clearTimeout(timeout);
        timeout = null;
      }
      if (transmit && timeout === null) {
        if (type !== 25) {
          reset$m();
        }
        timeout = setTimeout(upload, gap);
        queuedTime = now;
        check$2(playbackBytes);
      }
    }
  }

  function stop$b () {
    clearTimeout(timeout);
    upload(true);
    discoverBytes = 0;
    playbackBytes = 0;
    queuedTime = 0;
    playback = [];
    analysis = [];
    transit = {};
    track$1 = null;
    active$1 = false;
  }

  function upload (final) {
    if (final === void 0) {
      final = false;
    }
    return __awaiter(this, void 0, void 0, function() {
      var sendPlaybackBytes, last, e, a, p, encoded, payload, zipped, _a;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            timeout = null;
            sendPlaybackBytes =
              config$1.lean === false &&
              playbackBytes > 0 &&
              (playbackBytes < 1048576 || data$1.sequence > 0);
            if (sendPlaybackBytes) {
              max(1, 1);
            }
            compute$5();
            compute$4();
            compute$8();
            last = final === true;
            e = JSON.stringify(envelope(last));
            a = '['.concat(analysis.join(), ']');
            p = sendPlaybackBytes ? '['.concat(playback.join(), ']') : '';
            encoded = { e: e, a: a, p: p };
            payload = stringify(encoded);
            if (!last) return [3, 1];
            _a = null;
            return [3, 3];
          case 1:
            return [4, compress(payload)];
          case 2:
            _a = _b.sent();
            _b.label = 3;
          case 3:
            zipped = _a;
            sum(2, zipped ? zipped.length : payload.length);
            send(payload, zipped, data$1.sequence, last);
            analysis = [];
            if (sendPlaybackBytes) {
              playback = [];
              playbackBytes = 0;
              discoverBytes = 0;
            }
            return [2];
        }
      });
    });
  }

  function stringify (encoded) {
    return encoded.p.length > 0
      ? '{"e":'.concat(encoded.e, ',"a":').
        concat(encoded.a, ',"p":').
        concat(encoded.p, '}')
      : '{"e":'.concat(encoded.e, ',"a":').concat(encoded.a, '}');
  }

  function send (payload, zipped, sequence, beacon) {
    if (beacon === void 0) {
      beacon = false;
    }
    if (typeof config$1.upload === 'string') {
      var url = config$1.upload;
      var dispatched = false;
      if (beacon && 'sendBeacon' in navigator) {
        try {
          dispatched = navigator.sendBeacon.bind(navigator)(url, payload);
          if (dispatched) {
            done(sequence);
          }
        } catch (_a) {}
      }
      if (dispatched === false) {
        if (sequence in transit) {
          transit[sequence].attempts++;
        } else {
          transit[sequence] = { data: payload, attempts: 1 };
        }
        var xhr_1 = new XMLHttpRequest();
        xhr_1.open('POST', url);
        if (sequence !== null) {
          xhr_1.onreadystatechange = function() {
            measure(check$3)(xhr_1, sequence);
          };
        }
        xhr_1.withCredentials = true;
        if (zipped) {
          xhr_1.setRequestHeader('Accept', 'application/x-clarity-gzip');
          xhr_1.send(zipped);
        } else {
          xhr_1.send(payload);
        }
      }
    } else if (config$1.upload) {
      var callback = config$1.upload;
      callback(payload);
      done(sequence);
    }
  }

  function check$3 (xhr, sequence) {
    var transitData = transit[sequence];
    if (xhr && xhr.readyState === 4 && transitData) {
      if ((xhr.status < 200 || xhr.status > 208) && transitData.attempts <= 1) {
        if (xhr.status >= 400 && xhr.status < 500) {
          trigger(6);
        } else {
          if (xhr.status === 0) {
            config$1.upload = config$1.fallback
              ? config$1.fallback
              : config$1.upload;
          }
          send(transitData.data, null, sequence);
        }
      } else {
        track$1 = {
          sequence: sequence,
          attempts: transitData.attempts,
          status: xhr.status,
        };
        if (transitData.attempts > 1) {
          encode$1(2);
        }
        if (xhr.status === 200 && xhr.responseText) {
          response(xhr.responseText);
        }
        if (xhr.status === 0) {
          send(transitData.data, null, sequence, true);
          trigger(3);
        }
        if (xhr.status >= 200 && xhr.status <= 208) {
          done(sequence);
        }
        delete transit[sequence];
      }
    }
  }

  function done (sequence) {
    if (sequence === 1) {
      save();
    }
  }

  function delay () {
    var gap =
      config$1.lean === false && discoverBytes > 0
        ? 100
        : data$1.sequence * config$1.delay;
    return typeof config$1.upload === 'string'
      ? Math.max(Math.min(gap, 3e4), 100)
      : config$1.delay;
  }

  function response (payload) {
    var key = payload && payload.length > 0 ? payload.split(' ')[0] : '';
    switch (key) {
      case 'END':
        trigger(6);
        break;
      case 'UPGRADE':
        upgrade('Auto');
        break;
    }
  }

  function encode$1 (event) {
    var t = time();
    var tokens = [t, event];
    switch (event) {
      case 4:
        var b = state$9;
        if (b) {
          tokens = [b.time, b.event];
          tokens.push(b.data.visible);
          tokens.push(b.data.docWidth);
          tokens.push(b.data.docHeight);
          tokens.push(b.data.screenWidth);
          tokens.push(b.data.screenHeight);
          tokens.push(b.data.scrollX);
          tokens.push(b.data.scrollY);
          tokens.push(b.data.pointerX);
          tokens.push(b.data.pointerY);
          tokens.push(b.data.activityTime);
          queue(tokens, false);
        }
        reset$o();
        break;
      case 25:
        tokens.push(data$g.gap);
        queue(tokens);
        break;
      case 35:
        tokens.push(data$4.check);
        queue(tokens, false);
        break;
      case 3:
        tokens.push(data$e.key);
        queue(tokens);
        break;
      case 2:
        tokens.push(track$1.sequence);
        tokens.push(track$1.attempts);
        tokens.push(track$1.status);
        queue(tokens, false);
        break;
      case 24:
        tokens.push(data$i.key);
        tokens.push(data$i.value);
        queue(tokens);
        break;
      case 34:
        var variableKeys = Object.keys(data$d);
        if (variableKeys.length > 0) {
          for (
            var _i = 0, variableKeys_1 = variableKeys;
            _i < variableKeys_1.length;
            _i++
          ) {
            var v = variableKeys_1[_i];
            tokens.push(v);
            tokens.push(data$d[v]);
          }
          reset$k();
          queue(tokens, false);
        }
        break;
      case 0:
        var metricKeys = Object.keys(updates$3);
        if (metricKeys.length > 0) {
          for (
            var _a = 0, metricKeys_1 = metricKeys;
            _a < metricKeys_1.length;
            _a++
          ) {
            var m = metricKeys_1[_a];
            var key = parseInt(m, 10);
            tokens.push(key);
            tokens.push(Math.round(updates$3[m]));
          }
          reset$n();
          queue(tokens, false);
        }
        break;
      case 1:
        var dimensionKeys = Object.keys(updates);
        if (dimensionKeys.length > 0) {
          for (
            var _b = 0, dimensionKeys_1 = dimensionKeys;
            _b < dimensionKeys_1.length;
            _b++
          ) {
            var d = dimensionKeys_1[_b];
            var key = parseInt(d, 10);
            tokens.push(key);
            tokens.push(updates[d]);
          }
          reset$3();
          queue(tokens, false);
        }
        break;
      case 36:
        var eventKeys = Object.keys(data$f);
        if (eventKeys.length > 0) {
          for (
            var _c = 0, eventKeys_1 = eventKeys;
            _c < eventKeys_1.length;
            _c++
          ) {
            var e = eventKeys_1[_c];
            var key = parseInt(e, 10);
            tokens.push(key);
            tokens.push([].concat.apply([], data$f[e]));
          }
          reset$l();
          queue(tokens, false);
        }
        break;
    }
  }

  var data$4;

  function start$b () {
    data$4 = { check: 0 };
  }

  function check$2 (bytes) {
    if (data$4.check === 0) {
      var reason = data$4.check;
      reason = data$1.sequence >= 128 ? 1 : reason;
      reason = time() > 72e5 ? 2 : reason;
      reason = bytes > 10485760 ? 2 : reason;
      if (reason !== data$4.check) {
        trigger(reason);
      }
    }
  }

  function trigger (reason) {
    data$4.check = reason;
    clear();
    stop();
  }

  function compute$3 () {
    if (data$4.check !== 0) {
      encode$1(35);
    }
  }

  function stop$a () {
    data$4 = null;
  }

  var data$3 = null;
  var updates = null;

  function start$a () {
    data$3 = {};
    updates = {};
  }

  function stop$9 () {
    data$3 = {};
    updates = {};
  }

  function log (dimension, value) {
    if (value) {
      value = ''.concat(value);
      if (!(dimension in data$3)) {
        data$3[dimension] = [];
      }
      if (data$3[dimension].indexOf(value) < 0) {
        data$3[dimension].push(value);
        if (!(dimension in updates)) {
          updates[dimension] = [];
        }
        updates[dimension].push(value);
        if (data$3[dimension].length > 128) {
          trigger(5);
        }
      }
    }
  }

  function compute$2 () {
    encode$1(1);
  }

  function reset$3 () {
    updates = {};
  }

  var data$2 = null;
  var callback = null;
  var rootDomain = null;

  function start$9 () {
    callback = null;
    rootDomain = null;
    var ua = navigator && 'userAgent' in navigator ? navigator.userAgent : '';
    var title = document && document.title ? document.title : '';
    var s = session();
    var u = user();
    data$2 = {
      projectId: config$1.projectId || hash(location.host),
      userId: u.id,
      sessionId: s.session,
      pageNum: s.count,
    };
    config$1.lean =
      config$1.track && s.upgrade !== null ? s.upgrade === 0 : config$1.lean;
    config$1.upload =
      config$1.track &&
      typeof config$1.upload === 'string' &&
      s.upload &&
      s.upload.length > 'https://'.length
        ? s.upload
        : config$1.upload;
    log(0, ua);
    log(3, title);
    log(1, location.href);
    log(2, document.referrer);
    log(15, tab());
    log(16, document.documentElement.lang);
    log(17, document.dir);
    if (navigator) {
      log(9, navigator.userLanguage || navigator.language);
      max(26, navigator.webdriver ? 1 : 0);
      userAgentData();
    }
    max(0, s.ts);
    max(1, 0);
    if (screen) {
      max(14, Math.round(screen.width));
      max(15, Math.round(screen.height));
      max(16, Math.round(screen.colorDepth));
    }
    for (var _i = 0, _a = config$1.cookies; _i < _a.length; _i++) {
      var key = _a[_i];
      var value = getCookie(key);
      if (value) {
        set(key, value);
      }
    }
    track(u);
  }

  function userAgentData () {
    if (
      navigator['userAgentData'] &&
      navigator['userAgentData'].getHighEntropyValues
    ) {
      navigator['userAgentData'].getHighEntropyValues([
        'model',
        'platform',
        'platformVersion',
        'uaFullVersion',
      ]).then(function(ua) {
        var _a;
        log(22, ua.platform);
        log(23, ua.platformVersion);
        (_a = ua.brands) === null || _a === void 0
          ? void 0
          : _a.forEach(function(brand) {
            log(24, brand.name + '~' + brand.version);
          });
        log(25, ua.model);
        max(27, ua.mobile ? 1 : 0);
      });
    }
  }

  function stop$8 () {
    callback = null;
    rootDomain = null;
    data$2 = null;
  }

  function metadata (cb, wait) {
    if (wait === void 0) {
      wait = true;
    }
    if (data$2 && wait === false) {
      cb(data$2, !config$1.lean);
    } else {
      callback = cb;
    }
  }

  function id () {
    return data$2
      ? [data$2.userId, data$2.sessionId, data$2.pageNum].join('.')
      : '';
  }

  function consent () {
    if (active()) {
      config$1.track = true;
      track(user(), 1);
    }
  }

  function clear () {
    setCookie('_clsk', '', 0);
  }

  function tab () {
    var id = shortid();
    if (config$1.track && supported(window, 'sessionStorage')) {
      var value = sessionStorage.getItem('_cltk');
      id = value ? value : id;
      sessionStorage.setItem('_cltk', id);
    }
    return id;
  }

  function save () {
    var ts = Math.round(Date.now());
    var upgrade = config$1.lean ? 0 : 1;
    var upload =
      config$1.upload && typeof config$1.upload === 'string'
        ? config$1.upload.replace('https://', '')
        : '';
    if (upgrade && callback) {
      callback(data$2, !config$1.lean);
    }
    setCookie(
      '_clsk',
      [data$2.sessionId, ts, data$2.pageNum, upgrade, upload].join('|'),
      1,
    );
  }

  function supported (target, api) {
    try {
      return !!target[api];
    } catch (_a) {
      return false;
    }
  }

  function track (u, consent) {
    if (consent === void 0) {
      consent = null;
    }
    consent = consent === null ? u.consent : consent;
    var end = Math.ceil((Date.now() + 365 * 864e5) / 864e5);
    if (
      u.expiry === null ||
      Math.abs(end - u.expiry) >= 1 ||
      u.consent !== consent
    ) {
      setCookie(
        '_clck',
        [data$2.userId, 1, end.toString(36), consent].join('|'),
        365,
      );
    }
  }

  function shortid () {
    var id = Math.floor(Math.random() * Math.pow(2, 32));
    if (
      window &&
      window.crypto &&
      window.crypto.getRandomValues &&
      Uint32Array
    ) {
      id = window.crypto.getRandomValues(new Uint32Array(1))[0];
    }
    return id.toString(36);
  }

  function session () {
    var output = {
      session: shortid(),
      ts: Math.round(Date.now()),
      count: 1,
      upgrade: null,
      upload: '',
    };
    var value = getCookie('_clsk');
    if (value) {
      var parts = value.split('|');
      if (parts.length >= 5 && output.ts - num(parts[1]) < 18e5) {
        output.session = parts[0];
        output.count = num(parts[2]) + 1;
        output.upgrade = num(parts[3]);
        output.upload =
          parts.length >= 6
            ? ''.concat('https://').concat(parts[5], '/').concat(parts[4])
            : ''.concat('https://').concat(parts[4]);
      }
    }
    return output;
  }

  function num (string, base) {
    if (base === void 0) {
      base = 10;
    }
    return parseInt(string, base);
  }

  function user () {
    var output = { id: shortid(), expiry: null, consent: 0 };
    var cookie = getCookie('_clck');
    if (cookie && cookie.length > 0) {
      var parts = cookie.split('|');
      var count = 0;
      for (var _i = 0, _a = document.cookie.split(';'); _i < _a.length; _i++) {
        var c = _a[_i];
        count += c.split('=')[0].trim() === '_clck' ? 1 : 0;
      }
      if (parts.length === 1 || count > 1) {
        var deleted = ''.concat(';').
          concat('expires=').
          concat(new Date(0).toUTCString()).
          concat(';path=/');
        document.cookie = ''.concat('_clck', '=').concat(deleted);
        document.cookie = ''.concat('_clsk', '=').concat(deleted);
      }
      if (parts.length > 2) {
        output.expiry = num(parts[2], 36);
      }
      if (parts.length > 3 && num(parts[3]) === 1) {
        output.consent = 1;
      }
      config$1.track = config$1.track || output.consent === 1;
      output.id = config$1.track ? parts[0] : output.id;
    }
    return output;
  }

  function getCookie (key) {
    if (supported(document, 'cookie')) {
      var cookies = document.cookie.split(';');
      if (cookies) {
        for (var i = 0; i < cookies.length; i++) {
          var pair = cookies[i].split('=');
          if (pair.length > 1 && pair[0] && pair[0].trim() === key) {
            return pair[1];
          }
        }
      }
    }
    return null;
  }

  function setCookie (key, value, time) {
    if (
      config$1.track &&
      ((navigator && navigator.cookieEnabled) || supported(document, 'cookie'))
    ) {
      var expiry = new Date();
      expiry.setDate(expiry.getDate() + time);
      var expires = expiry ? 'expires=' + expiry.toUTCString() : '';
      var cookie = ''.concat(key, '=').
        concat(value).
        concat(';').
        concat(expires).
        concat(';path=/');
      try {
        if (rootDomain === null) {
          var hostname = location.hostname ? location.hostname.split('.') : [];
          for (var i = hostname.length - 1; i >= 0; i--) {
            rootDomain = '.'.concat(hostname[i]).
              concat(rootDomain ? rootDomain : '');
            if (i < hostname.length - 1) {
              document.cookie = ''.concat(cookie).
                concat(';').
                concat('domain=').
                concat(rootDomain);
              if (getCookie(key) === value) {
                return;
              }
            }
          }
          rootDomain = '';
        }
      } catch (_a) {
        rootDomain = '';
      }
      document.cookie = rootDomain
        ? ''.concat(cookie).concat(';').concat('domain=').concat(rootDomain)
        : cookie;
    }
  }

  var data$1 = null;

  function start$8 () {
    var m = data$2;
    data$1 = {
      version: version,
      sequence: 0,
      start: 0,
      duration: 0,
      projectId: m.projectId,
      userId: m.userId,
      sessionId: m.sessionId,
      pageNum: m.pageNum,
      upload: 0,
      end: 0,
    };
  }

  function stop$7 () {
    data$1 = null;
  }

  function envelope (last) {
    data$1.start = data$1.start + data$1.duration;
    data$1.duration = time() - data$1.start;
    data$1.sequence++;
    data$1.upload = last && 'sendBeacon' in navigator ? 1 : 0;
    data$1.end = last ? 1 : 0;
    return [
      data$1.version,
      data$1.sequence,
      data$1.start,
      data$1.duration,
      data$1.projectId,
      data$1.userId,
      data$1.sessionId,
      data$1.pageNum,
      data$1.upload,
      data$1.end,
    ];
  }

  var history$1;

  function reset$2 () {
    history$1 = [];
  }

  function report (e) {
    if (history$1 && history$1.indexOf(e.message) === -1) {
      var url = config$1.report;
      if (url && url.length > 0) {
        var payload = {
          v: data$1.version,
          p: data$1.projectId,
          u: data$1.userId,
          s: data$1.sessionId,
          n: data$1.pageNum,
        };
        if (e.message) {
          payload.m = e.message;
        }
        if (e.stack) {
          payload.e = e.stack;
        }
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.send(JSON.stringify(payload));
        history$1.push(e.message);
      }
    }
    return e;
  }

  function measure (method) {
    return function() {
      var start = performance.now();
      try {
        method.apply(this, arguments);
      } catch (ex) {
        throw report(ex);
      }
      var duration = performance.now() - start;
      sum(4, duration);
      if (duration > 30) {
        count$1(7);
        max(6, duration);
      }
    };
  }

  var bindings = [];

  function bind (target, event, listener, capture) {
    if (capture === void 0) {
      capture = false;
    }
    listener = measure(listener);
    try {
      target[api('addEventListener')](event, listener, capture);
      bindings.push({
        event: event,
        target: target,
        listener: listener,
        capture: capture,
      });
    } catch (_a) {}
  }

  function reset$1 () {
    for (var _i = 0, bindings_1 = bindings; _i < bindings_1.length; _i++) {
      var binding = bindings_1[_i];
      try {
        binding.target[api('removeEventListener')](
          binding.event,
          binding.listener,
          binding.capture,
        );
      } catch (_a) {}
    }
    bindings = [];
  }

  var pushState = null;
  var replaceState = null;
  var url = null;
  var count = 0;

  function start$7 () {
    url = getCurrentUrl();
    count = 0;
    bind(window, 'popstate', compute$1);
    if (pushState === null) {
      pushState = history.pushState;
    }
    history.pushState = function() {
      if (check$1()) {
        pushState.apply(this, arguments);
        compute$1();
      }
    };
    if (replaceState === null) {
      replaceState = history.replaceState;
    }
    history.replaceState = function() {
      if (check$1()) {
        replaceState.apply(this, arguments);
        compute$1();
      }
    };
  }

  function check$1 () {
    if (count++ > 20) {
      log$1(4, 0);
      return false;
    }
    return true;
  }

  function compute$1 () {
    count = 0;
    if (url !== getCurrentUrl()) {
      stop();
      window.setTimeout(start, 250);
    }
  }

  function getCurrentUrl () {
    return location.href
      ? location.href.replace(location.hash, '')
      : location.href;
  }

  function stop$6 () {
    if (pushState !== null) {
      history.pushState = pushState;
      pushState = null;
    }
    if (replaceState !== null) {
      history.replaceState = replaceState;
      replaceState = null;
    }
    url = null;
    count = 0;
  }

  var status = false;

  function start$6 () {
    status = true;
    start$E();
    reset$j();
    reset$1();
    reset$2();
    start$7();
  }

  function stop$5 () {
    stop$6();
    reset$2();
    reset$1();
    reset$j();
    stop$B();
    status = false;
  }

  function active () {
    return status;
  }

  function check () {
    try {
      return (
        status === false &&
        typeof Promise !== 'undefined' &&
        window['MutationObserver'] &&
        document['createTreeWalker'] &&
        'now' in Date &&
        'now' in performance &&
        typeof WeakMap !== 'undefined'
      );
    } catch (ex) {
      return false;
    }
  }

  function config (override) {
    if (override === null || status) {
      return false;
    }
    for (var key in override) {
      if (key in config$1) {
        config$1[key] = override[key];
      }
    }
    return true;
  }

  function suspend () {
    if (status) {
      event('clarity', 'suspend');
      stop();
      ['mousemove', 'touchstart'].forEach(function(x) {
        return bind(document, x, restart);
      });
      ['resize', 'scroll', 'pageshow'].forEach(function(x) {
        return bind(window, x, restart);
      });
    }
  }

  function restart () {
    start();
    event('clarity', 'restart');
  }

  function start$5 () {
    start$t();
    start$s();
  }

  function stop$4 () {
    stop$r();
  }

  var diagnostic = Object.freeze({
    __proto__: null,
    start: start$5,
    stop: stop$4,
  });

  function start$4 () {
    schedule$1(discover, 1).then(function() {
      measure(compute$7)();
      measure(compute$5)();
    });
  }

  function discover () {
    return __awaiter(this, void 0, void 0, function() {
      var ts, timer;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            ts = time();
            timer = { id: id(), cost: 3 };
            start$w(timer);
            return [4, traverse(document, timer, 0)];
          case 1:
            _a.sent();
            return [4, encode$4(5, timer, ts)];
          case 2:
            _a.sent();
            stop$t(timer);
            return [2];
        }
      });
    });
  }

  function start$3 () {
    start$v();
    start$q();
    start$r();
    start$e();
    start$4();
    start$u();
  }

  function stop$3 () {
    stop$p();
    stop$q();
    stop$d();
    stop$s();
    end();
  }

  var layout = Object.freeze({ __proto__: null, start: start$3, stop: stop$3 });

  function encode (type) {
    return __awaiter(this, void 0, void 0, function() {
      var t, tokens;
      return __generator(this, function(_a) {
        t = time();
        tokens = [t, type];
        switch (type) {
          case 29:
            tokens.push(data.fetchStart);
            tokens.push(data.connectStart);
            tokens.push(data.connectEnd);
            tokens.push(data.requestStart);
            tokens.push(data.responseStart);
            tokens.push(data.responseEnd);
            tokens.push(data.domInteractive);
            tokens.push(data.domComplete);
            tokens.push(data.loadEventStart);
            tokens.push(data.loadEventEnd);
            tokens.push(data.redirectCount);
            tokens.push(data.size);
            tokens.push(data.type);
            tokens.push(data.protocol);
            tokens.push(data.encodedSize);
            tokens.push(data.decodedSize);
            reset();
            queue(tokens, false);
            break;
        }
        return [2];
      });
    });
  }

  var data = null;

  function reset () {
    data = null;
  }

  function compute (entry) {
    data = {
      fetchStart: Math.round(entry.fetchStart),
      connectStart: Math.round(entry.connectStart),
      connectEnd: Math.round(entry.connectEnd),
      requestStart: Math.round(entry.requestStart),
      responseStart: Math.round(entry.responseStart),
      responseEnd: Math.round(entry.responseEnd),
      domInteractive: Math.round(entry.domInteractive),
      domComplete: Math.round(entry.domComplete),
      loadEventStart: Math.round(entry.loadEventStart),
      loadEventEnd: Math.round(entry.loadEventEnd),
      redirectCount: Math.round(entry.redirectCount),
      size: entry.transferSize ? entry.transferSize : 0,
      type: entry.type,
      protocol: entry.nextHopProtocol,
      encodedSize: entry.encodedBodySize ? entry.encodedBodySize : 0,
      decodedSize: entry.decodedBodySize ? entry.decodedBodySize : 0,
    };
    encode(29);
  }

  var observer;
  var types = [
    'navigation',
    'resource',
    'longtask',
    'first-input',
    'layout-shift',
    'largest-contentful-paint',
  ];

  function start$2 () {
    if (
      window['PerformanceObserver'] &&
      PerformanceObserver.supportedEntryTypes
    ) {
      if (document.readyState !== 'complete') {
        bind(window, 'load', setTimeout.bind(this, observe, 0));
      } else {
        observe();
      }
    } else {
      log$1(3, 0);
    }
  }

  function observe () {
    try {
      if (observer) {
        observer.disconnect();
      }
      observer = new PerformanceObserver(measure(handle));
      for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
        var x = types_1[_i];
        if (PerformanceObserver.supportedEntryTypes.indexOf(x) >= 0) {
          if (x === 'layout-shift') {
            sum(9, 0);
          }
          // FIXME: Issue is due to below call being made when x === 'resource'
          // Our proxytown calls are itself xhr calls which in turn triggers
          // the PerformanceObserver to measure document visibility check
          // which triggers another xhr call, hence the infinite calls
          observer.observe({ type: x, buffered: true });
        }
      }
    } catch (_a) {
      log$1(3, 1);
    }
  }

  function handle (entries) {
    process(entries.getEntries());
  }

  function process (entries) {
    var visible =
      'visibilityState' in document
        ? document.visibilityState === 'visible'
        : true;
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      switch (entry.entryType) {
        case 'navigation':
          compute(entry);
          break;
        case 'resource':
          log(4, host(entry.name));
          break;
        case 'longtask':
          count$1(7);
          break;
        case 'first-input':
          if (visible) {
            max(10, entry['processingStart'] - entry.startTime);
          }
          break;
        case 'layout-shift':
          if (visible && !entry['hadRecentInput']) {
            sum(9, entry['value'] * 1e3);
          }
          break;
        case 'largest-contentful-paint':
          if (visible) {
            max(8, entry.startTime);
          }
          break;
      }
    }
  }

  function stop$2 () {
    if (observer) {
      observer.disconnect();
    }
    observer = null;
  }

  function host (url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
  }

  function start$1 () {
    reset();
    start$2();
  }

  function stop$1 () {
    stop$2();
    reset();
  }

  var performance$1 = Object.freeze({
    __proto__: null,
    start: start$1,
    stop: stop$1,
  });
  var modules = [diagnostic, layout, interaction, performance$1];

  function start (config$1) {
    if (config$1 === void 0) {
      config$1 = null;
    }
    if (check()) {
      config(config$1);
      start$6();
      start$x();
      modules.forEach(function(x) {
        return measure(x.start)();
      });
    }
  }

  function pause () {
    if (active()) {
      event('clarity', 'pause');
      pause$1();
    }
  }

  function resume () {
    if (active()) {
      resume$1();
      event('clarity', 'resume');
    }
  }

  function stop () {
    if (active()) {
      modules.slice().reverse().forEach(function(x) {
        return measure(x.stop)();
      });
      stop$u();
      stop$5();
    }
  }

  var clarity = Object.freeze({
    __proto__: null,
    version: version,
    start: start,
    pause: pause,
    resume: resume,
    stop: stop,
    consent: consent,
    event: event,
    identify: identify,
    set: set,
    upgrade: upgrade,
    metadata: metadata,
  });
  (function() {
    if (typeof window !== 'undefined') {
      var w = window;
      var c = 'clarity';
      if (w[c] && w[c].v) {
        return console.warn('Error CL001: Multiple Clarity tags detected.');
      }
      var queue = w[c] ? w[c].q || [] : [];
      w[c] = function(method) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        return clarity[method].apply(clarity, args);
      };
      w[c].v = version;
      while (queue.length > 0) {
        w[c].apply(w, queue.shift());
      }
    }
  })();
})();
