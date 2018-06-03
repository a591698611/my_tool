// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({3:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function ajax(obj) {
  var xhr = function () {
    if (typeof XMLHttpRequest !== 'undefined') {
      return new XMLHttpRequest();
    } else if (typeof ActiveXObject !== 'undefined') {
      var version = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'];
      for (var i = 0; version.length; i++) {
        try {
          return new ActiveXObject(version[i]);
        } catch (e) {
          // 跳过
        }
      }
    } else {
      throw new Error("浏览器不支持XHR对象!");
    }
  }();
  obj.url = obj.url + '?rand=' + Math.random();
  obj.data = function (data) {
    var arr = [];
    for (var i in data) {
      arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
    }
    return arr.join('&');
  }(obj.data);
  if (obj.method === 'get') obj.url += obj.url.indexOf('?') === -1 ? '?' + obj.data : '&' + obj.data;
  if (obj.async) {
    xhr.onreadystatechange = function () {
      if (parseInt(xhr.readyState, 10) === 4) callback();
    };
  }
  xhr.open(obj.method, obj.url, obj.async);
  if (obj.method === 'post') {
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(obj.data);
  } else {
    xhr.send(null);
  }
  if (!obj.async) callback();

  function callback() {
    if (parseInt(xhr.status, 10) === 200) {
      obj.success(xhr.responseText);
    } else {
      alert('错误代号' + xhr.status + '错误信息' + xhr.statusText);
    }
  }
}

exports.default = ajax;
},{}],5:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var arrayEqual = function arrayEqual(arr1, arr2) {
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;
  for (var i = 0, l = arr1.length; i < l; i++) {
    if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
      if (!arrayEqual(arr1[i], arr2[i])) return false;
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

var isArray = function isArray(obj) {
  return Array.isArray(obj) || Object.prototype.toString.call(obj) === '[object Array]';
};

var renderArr = function renderArr(num) {
  return Array.apply(null, Array(num));
};

var convertArr = function convertArr(obj) {
  return Array.prototype.slice.call(obj);
};

var flatten = function flatten(arr) {
  return arr.reduce(function (prev, next) {
    return prev.concat(isArray(next) ? flatten(next) : next);
  }, []);
};

exports.default = {
  arrayEqual: arrayEqual,
  isArray: isArray,
  renderArr: renderArr,
  convertArr: convertArr,
  flatten: flatten
};
},{}],4:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasClass = function hasClass(element, aClass) {
  return !!element.className.match(new RegExp('(\\s|^)' + aClass + '(\\s|$)'));
};

var addClass = function addClass(element, aClass) {
  if (!hasClass(element, aClass)) {
    element.className += ' ' + aClass;
  }
};

var removeClass = function removeClass(element, aClass) {
  if (hasClass(element, aClass)) {
    element.className = element.className.replace(new RegExp('(\\s|^)' + aClass + '(\\s|$)'), ' ');
  }
};

exports.default = {
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass
};
},{}],6:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function getCookie(name) {
  var arr = document.cookie.split(';');
  for (var i = 0; i < arr.length; i++) {
    var arr2 = arr[i].split('=');
    if (arr2[0] == encodeURIComponent(name)) {
      return decodeURIComponent(arr2[1]);
    }
  }
  return '';
}

function setCookie(name, value, iday, path, domain, secure) {
  var odate = new Date();
  odate.setDate(odate.getDate() + iday);
  var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';expires=' + odate;
  if (path) {
    cookieText += ';path=' + path;
  }
  if (domain) {
    cookieText += ';domain=' + domain;
  }
  if (secure) {
    cookieText += ';secure';
  }
  document.cookie = cookieText;
}

function removeCookie(name, path, domain, secure) {
  setCookie(decodeURIComponent(name), 1, -1, path, domain, secure);
}

exports.default = {
  getCookie: getCookie,
  setCookie: setCookie,
  removeCookie: removeCookie
};
},{}],7:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function gsstyle(obj, name, value) {
  switch (arguments.length) {
    case 2:
      if (_typeof(arguments[1]) == "object") {
        for (var i in name) {
          i == "opacity" ? (obj.style["filter"] = "alpha(opacity=" + name[i] + ")", obj.style[i] = name[i] / 100) : obj.style[i] = name[i];
        }
      } else {
        return obj.currentStyle ? obj.currentStyle[name] : getComputedStyle(obj, null)[name];
      }
      break;
    case 3:
      name == "opacity" ? (obj.style["filter"] = "alpha(opacity=" + value + ")", obj.style[name] = value / 100) : obj.style[name] = value;
  }
};

exports.default = {
  gsstyle: gsstyle
};
},{}],8:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getExplore = function getExplore() {
  var sys = {};
  var ua = navigator.userAgent.toLowerCase();
  var s;
  (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] : (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] : (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] : (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] : (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] : (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] : (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
  // 根据关系进行判断
  if (sys.ie) return 'IE: ' + sys.ie;
  if (sys.edge) return 'EDGE: ' + sys.edge;
  if (sys.firefox) return 'Firefox: ' + sys.firefox;
  if (sys.chrome) return 'Chrome: ' + sys.chrome;
  if (sys.opera) return 'Opera: ' + sys.opera;
  if (sys.safari) return 'Safari: ' + sys.safari;
  return 'Unkonwn';
};

function getOS() {
  var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
  var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';

  if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios';
  if (/android/i.test(userAgent)) return 'android';
  if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone';
  if (/mac/i.test(appVersion)) return 'MacOSX';
  if (/win/i.test(appVersion)) return 'windows';
  if (/linux/i.test(appVersion)) return 'linux';
}

exports.default = {
  getExplore: getExplore,
  getOS: getOS
};
},{}],10:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var offset = function offset(element) {
  var top = element.offsetTop;
  var left = element.offsetLeft;
  var parent = element.offsetParent;
  while (parent != null) {
    top += parent.offsetTop;
    left += parent.offsetLeft;
    parent = parent.offsetParent;
  }

  return {
    top: top,
    left: left
  };
};

var getScrollTop = function getScrollTop() {
  return document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
};

var setScrollTop = function setScrollTop(value) {
  window.scrollTo(0, value);
  return value;
};

var scrollTo = function scrollTo(to, duration) {
  if (duration < 0) {
    setScrollTop(to);
    return;
  }
  var diff = to - getScrollTop();
  if (diff === 0) return;
  var step = diff / duration * 10;
  requestAnimationFrame(function () {
    if (Math.abs(step) > Math.abs(diff)) {
      setScrollTop(getScrollTop() + diff);
      return;
    }
    setScrollTop(getScrollTop() + step);
    if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {
      return;
    }
    scrollTo(to, duration - 16);
  });
};

var windowResize = function windowResize() {
  var downCb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
  var upCb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var clientHeight = window.innerHeight;
  window.addEventListener('resize', function () {
    var height = window.innerHeight;
    if (height === clientHeight) downCb();
    if (height < clientHeight) upCb();
  });
};

var contains = function contains(fuNode, ziNode) {
  // 查询一个节点是不是另一个节点的子节点
  if (fuNode.contains !== 'undefined') {
    return fuNode.contains(ziNode);
  } else if (fuNode.compareDocumentPosition == 'function') {
    return fuNode.compareDocumentPosition(ziNode);
  } else {
    do {
      var node = ziNode.parentNode;
      if (node == fuNode) {
        return true;
      } else {
        node = ziNode.parentNode;
      }
    } while (node != null);
    return false;
  }
};

var serialize = function serialize(form) {
  var parts = [];
  for (var i = 0; i < form.elements.length; i++) {
    var filed = form.elements[i];
    switch (filed.type) {
      case undefined:
      case 'file':
      case 'submit':
      case 'reset':
      case 'button':
      case 'checkbox':
        break;
      case 'select-one':
      case 'select-multiple':
        for (var j = 0; j < filed.options.length; j++) {
          var option = filed.options[j];
          if (option.selected) {
            var optValue = '';
            if (option.hasAttribute) {
              optValue = option.hasAttribute('value') ? option.value : option.text;
            } else {
              optValue = option.attributes['value'].specified ? option.value : option.text;
            }
            parts.push(filed.name + '=' + optValue);
          }
        }
        break;
      case 'radio':
        if (filed.checked) parts[filed.name] = filed.value;
        break;
      default:
        parts.push(filed.name + '=' + optValue);
    }
  }
  return parts;
};

var getSize = function getSize() {
  var windowW = void 0,
      windowH = void 0,
      contentH = void 0,
      contentW = void 0,
      scrollT = void 0;
  windowH = window.innerHeight;
  windowW = window.innerWidth;
  scrollT = document.documentElement.scrollTop || document.body.scrollTop;
  contentH = document.documentElement.scrollHeight > document.body.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight;
  contentW = document.documentElement.scrollWidth > document.body.scrollWidth ? document.documentElement.scrollWidth : document.body.scrollWidth;
  return { windowW: windowW, windowH: windowH, contentH: contentH, contentW: contentW, scrollT: scrollT };
};

exports.default = {
  offset: offset,
  getScrollTop: getScrollTop,
  setScrollTop: setScrollTop,
  scrollTo: scrollTo,
  windowResize: windowResize,
  contains: contains,
  serialize: serialize,
  getSize: getSize
};
},{}],9:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isFunction = function isFunction(obj) {
  return obj instanceof Function || typeof obj === 'function';
};

var throttle = function throttle(func, wait) {
  var previous = 0;
  return function () {
    var now = +new Date();
    var context = this;
    var args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  };
};

var debounce = function debounce(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  var timer = null;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
};

var only = function only(obj, keys) {
  /* var a = {
    env : 'development',
    subdomainOffset : 2
  }
  only(a,['env']) */
  obj = obj || {};
  if ('string' === typeof keys) keys = keys.split(/ +/);
  return keys.reduce(function (ret, key) {
    if (null == obj[key]) return ret;
    ret[key] = obj[key];
    return ret;
  }, {});
};

exports.isFunction = isFunction;
exports.throttle = throttle;
exports.debounce = debounce;
exports.only = only;
},{}],11:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _array = require('../array');

function maxNum(arr) {
  var nweArr = [];
  if (arguments.length > 1) nweArr = (0, _array.convertArr)(arguments);
  return Math.max.apply(null, nweArr);
}

function minNum(arr) {
  var nweArr = [];
  if (arguments.length > 1) nweArr = (0, _array.convertArr)(arguments);
  return Math.min.apply(null, nweArr);
}

var isNumber = function isNumber(obj) {
  return !isNaN(parseFloat(obj)) && isFinite(obj);
};

var thouComma = function thouComma(num) {
  num = num.toFixed(2).toString();
  if (num.indexOf(',') !== -1) num = num.replace(/,/g, '');
  var ps = num.split('').reverse();
  var pointIndex = ps.indexOf('.');
  pointIndex = pointIndex === -1 ? 0 : pointIndex + 1;
  var newps = [];
  ps.map(function (v, i) {
    if (i > pointIndex && (i - pointIndex) % 3 === 0) newps.unshift(',');
    newps.unshift(v);
  });
  return newps.join('');
};

function quickSort() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  function quick(array, left, right) {
    var index = void 0;
    if (array.length > 1) {
      index = partition(array, left, right);
      if (left < index - 1) {
        quick(array, left, index - 1);
      }
      if (index < right) {
        quick(array, index, right);
      }
    }
    return array;
  }

  function partition(array, left, right) {
    // 用index取中间值而非splice
    var pivot = array[Math.floor((right + left) / 2)];
    var i = left;
    var j = right;

    while (i <= j) {
      while (compare(array[i], pivot) === -1) {
        i++;
      }
      while (compare(array[j], pivot) === 1) {
        j--;
      }
      if (i <= j) {
        var _ref = [array[j], array[i]];
        array[i] = _ref[0];
        array[j] = _ref[1];

        i++;
        j--;
      }
    }
    return i;
  }

  function compare(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }

  return quick(array, 0, array.length - 1);
};

exports.default = {
  maxNum: maxNum,
  minNum: minNum,
  isNumber: isNumber,
  thouComma: thouComma,
  quickSort: quickSort
};
},{"../array":5}],12:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isEmptyObject = function isEmptyObject(obj) {
  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || Array.isArray(obj)) return false;
  return !Object.keys(obj).length;
};

var shallowClone = function shallowClone(src) {
  var copy = {};
  for (var prop in src) {
    if (src.hasOwnProperty(prop)) {
      copy[prop] = src[prop];
    }
  }
  return copy;
};

var deepClone = function deepClone(values) {
  var copy;
  if (null == values || (typeof values === 'undefined' ? 'undefined' : _typeof(values)) !== 'object') return values;
  if (values instanceof Date) {
    copy = new Date();
    copy.setTime(values.getTime());
    return copy;
  }
  if (values instanceof Array) {
    copy = [];
    for (var i = 0, len = values.length; i < len; i++) {
      copy[i] = deepClone(values[i]);
    }
    return copy;
  }
  if (values instanceof Object) {
    copy = {};
    for (var attr in values) {
      if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
    }
    return copy;
  }
};

exports.default = {
  isEmptyObject: isEmptyObject,
  shallowClone: shallowClone,
  deepClone: deepClone
};
},{}],13:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _this2 = undefined,
    _arguments = arguments;
var isBool = function isBool(obj) {
  return Object.prototype.toString.call(obj) === '[object Boolean]';
};

var isLeapYear = function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
};

var cache = function () {
  var store = {};
  return {
    get: function get(key) {
      // cache.get('a')
      return store[key];
    },
    set: function set(key, val) {
      // cache.set('a', 1);
      store[key] = val;
    }
  };
}();

var length = function length(start, end) {
  return start > end ? 0 : end - start >>> 0;
};

var assign = function assign(object) {
  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (object == null) {
    object = {};
  }
  if (sources && sources.length > 0) {
    sources.forEach(function (source) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          object[key] = source[key];
        }
      }
    });
  }
  return object;
};

var testBind = function testBind(that) {
  var _this = _this2,
      slice = Array.prototype.slice,
      args = slice.apply(_arguments, [1]),
      fNOP = function fNOP() {},
      bound = function bound() {
    return _this.apply(this instanceof fNOP ? this : that || window, args.concat(Array.prototype.slice.apply(arguments, [0])));
  };
  fNOP.prototype = _this.prototype;
  bound.prototype = new fNOP();
  return bound;
};

exports.default = {
  isBool: isBool,
  isLeapYear: isLeapYear,
  cache: cache,
  length: length,
  assign: assign,
  testBind: testBind
};
},{}],14:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var randomNum = function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var randomSort = function randomSort(arr) {
  return arr.sort(function () {
    return Math.random() - 0.5;
  });
};

var shuffle = function shuffle(arr) {
  var m = arr.length,
      t = void 0,
      i = void 0;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr;
};

exports.default = {
  randomNum: randomNum,
  randomSort: randomSort,
  shuffle: shuffle
};
},{}],15:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isIphone = function isIphone(phone) {
  return (/^0{0,1}(13[0-9]|153|15[6-9]|18[7-9])[0-9]{8}$/.test(phone)
  );
};

var isMail = function isMail(mail) {
  return (/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(mail)
  );
};

var isCE = function isCE(ce) {
  return (/^[\u4e00-\u9fa5a-z]+$/gi.test(ce)
  );
};

var isIdCard = function isIdCard(str) {
  return (/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
  );
};

var isNum = function isNum(num) {
  return (/^\d+$/.test(num)
  );
};

var isLetter = function isLetter(letter) {
  return (/^[a-z]+$/i.test(letter)
  );
};

var isYYYYMMDD = function isYYYYMMDD(date) {
  return (/^\d{4}-\d{1,2}-\d{1,2}$/.test(date)
  );
};

var isURL = function isURL(url) {
  return (/^(https?|ftp):\/\/[^\s]+$/i.test(url)
  );
};

exports.default = {
  isIphone: isIphone,
  isMail: isMail,
  isCE: isCE,
  isIdCard: isIdCard,
  isNum: isNum,
  isLetter: isLetter,
  isYYYYMMDD: isYYYYMMDD,
  isURL: isURL
};
},{}],16:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var delNull = function delNull(arr) {
  return arr.filter(function (v) {
    return v !== undefined && v !== null && v.toString().trim() !== '';
  });
};

var removeHTMLLabel = function removeHTMLLabel(str) {
  return str.replace(/<[^<>]+>/g, '');
};

exports.default = {
  delNull: delNull,
  removeHTMLLabel: removeHTMLLabel
};
},{}],17:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var repeat = function repeat() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var result = '';
  if (!str || times < 1) return result;
  do {
    if (times % 2) {
      result += str;
    }
    times = Math.floor(times / 2);
    if (times) {
      str += str;
    }
  } while (times);
  return result;
};

var digitUppercase = function digitUppercase(n) {
  var fraction = ['角', '分'];
  var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
  var head = n < 0 ? '欠' : '';
  n = Math.abs(n);
  var s = '';
  for (var i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '整';
  n = Math.floor(n);
  for (var i = 0; i < unit[0].length && n > 0; i++) {
    var p = '';
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
};

var trim = function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
};

var getStrLength = function getStrLength(str) {
  var realLength = 0;
  var len = str.length;
  var charCode = -1;
  for (var i = 0; i < len; i++) {
    charCode = str.charCodeAt(i);
    if (charCode >= 0 && charCode <= 128) {
      realLength += 1;
    } else {
      // 如果是中文则长度加2
      realLength += 2;
    }
  }
  return realLength;
};

exports.default = {
  repeat: repeat,
  digitUppercase: digitUppercase,
  trim: trim,
  getStrLength: getStrLength
};
},{}],18:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var formatPassTime = function formatPassTime(startTime) {
  var currentTime = Date.parse(new Date()),
      time = currentTime - startTime,
      day = parseInt(time / (1000 * 60 * 60 * 24)),
      hour = parseInt(time / (1000 * 60 * 60)),
      min = parseInt(time / (1000 * 60)),
      month = parseInt(day / 30),
      year = parseInt(month / 12);
  if (year) return year + "年前";
  if (month) return month + "个月前";
  if (day) return day + "天前";
  if (hour) return hour + "小时前";
  if (min) return min + "分钟前";else return '刚刚';
};

var formatRemainTime = function formatRemainTime(endTime) {
  var startDate = new Date(); //开始时间
  var endDate = new Date(endTime); //结束时间
  var t = endDate.getTime() - startDate.getTime(); //时间差
  var d = 0,
      h = 0,
      m = 0,
      s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor(t / 1000 / 60 / 60 % 24);
    m = Math.floor(t / 1000 / 60 % 60);
    s = Math.floor(t / 1000 % 60);
  }
  return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
};

var isSameDay = function isSameDay(date1) {
  var date2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  var date1_year = date1.getFullYear(),
      date1_month = date1.getMonth() + 1,
      date1_date = date1.getDate();
  var date2_year = date2.getFullYear(),
      date2_month = date2.getMonth() + 1,
      date2_date = date2.getDate();
  return date1_date === date2_date && date1_month === date2_month && date1_year === date2_year;
};

exports.default = {
  formatPassTime: formatPassTime,
  formatRemainTime: formatRemainTime,
  isSameDay: isSameDay
};
},{}],19:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var parseQueryString = function parseQueryString(url) {
  url = url == null ? window.location.href : url;
  var search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
  if (search === '') return {};
  search = search.split('&');
  var query = {};
  for (var i = 0; i < search.length; i++) {
    var pair = search[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
};

exports.default = {
  parseQueryString: parseQueryString
};
},{}],1:[function(require,module,exports) {
'use strict';

var _ajax = require('./ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _array = require('./array');

var _class = require('./class');

var _cookie = require('./cookie');

var _css = require('./css');

var _device = require('./device');

var _dom = require('./dom');

var _function = require('./function');

var _number = require('./number');

var _object = require('./object');

var _other = require('./other');

var _random = require('./random');

var _regexp = require('./regexp');

var _remove = require('./remove');

var _string = require('./string');

var _time = require('./time');

var _url = require('./url');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  ajax: _ajax2.default,
  arrayEqual: _array.arrayEqual,
  isArray: _array.isArray,
  renderArr: _array.renderArr,
  convertArr: _array.convertArr,
  flatten: _array.flatten,
  addClass: _class.addClass,
  hasClass: _class.hasClass,
  removeClass: _class.removeClass,
  getCookie: _cookie.getCookie,
  setCookie: _cookie.setCookie,
  removeCookie: _cookie.removeCookie,
  gsstyle: _css.gsstyle,
  getExplore: _device.getExplore,
  getOS: _device.getOS,
  offset: _dom.offset,
  getScrollTop: _dom.getScrollTop,
  setScrollTop: _dom.setScrollTop,
  scrollTo: _dom.scrollTo,
  windowResize: _dom.windowResize,
  contains: _dom.contains,
  serialize: _dom.serialize,
  getSize: _dom.getSize,
  isFunction: _function.isFunction,
  throttle: _function.throttle,
  debounce: _function.debounce,
  only: _function.only,
  maxNum: _number.maxNum,
  minNum: _number.minNum,
  isNumber: _number.isNumber,
  thouComma: _number.thouComma,
  quickSort: _number.quickSort,
  isEmptyObject: _object.isEmptyObject,
  shallowClone: _object.shallowClone,
  deepClone: _object.deepClone,
  isBool: _other.isBool,
  isLeapYear: _other.isLeapYear,
  length: _other.length,
  assign: _other.assign,
  testBind: _other.testBind,
  randomNum: _random.randomNum,
  randomSort: _random.randomSort,
  shuffle: _random.shuffle,
  isIphone: _regexp.isIphone,
  isMail: _regexp.isMail,
  isCE: _regexp.isCE,
  isIdCard: _regexp.isIdCard,
  isNum: _regexp.isNum,
  isLetter: _regexp.isLetter,
  isYYYYMMDD: _regexp.isYYYYMMDD,
  isURL: _regexp.isURL,
  delNull: _remove.delNull,
  removeHTMLLabel: _remove.removeHTMLLabel,
  repeat: _string.repeat,
  digitUppercase: _string.digitUppercase,
  trim: _string.trim,
  getStrLength: _string.getStrLength,
  formatPassTime: _time.formatPassTime,
  formatRemainTime: _time.formatRemainTime,
  isSameDay: _time.isSameDay,
  parseQueryString: _url.parseQueryString
};
},{"./ajax":3,"./array":5,"./class":4,"./cookie":6,"./css":7,"./device":8,"./dom":10,"./function":9,"./number":11,"./object":12,"./other":13,"./random":14,"./regexp":15,"./remove":16,"./string":17,"./time":18,"./url":19}],37:[function(require,module,exports) {

var OVERLAY_ID = '__parcel__error__overlay__';

var global = (1, eval)('this');
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '50040' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[37,1])
//# sourceMappingURL=/index.map