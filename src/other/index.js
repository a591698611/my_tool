const isBool = (obj) => Object.prototype.toString.call(obj) === '[object Boolean]';

const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

const cache = (function () {
  const store = {};
  return {
    get(key) { // cache.get('a')
      return store[key]
    },
    set(key, val) { // cache.set('a', 1);
      store[key] = val
    }
  }
}());

const length = (start, end) => start > end ? 0 : ((end - start) >>> 0);

const assign = (object, ...sources) => {
  if (object == null) {
    object = {};
  }
  if (sources && sources.length > 0) {
    sources.forEach(source => {
      for (let key in source) {
        if (source.hasOwnProperty(key)) {
          object[key] = source[key];
        }
      }
    });
  }
  return object;
};

const testBind = that => {
  const _this = this,
    slice = Array.prototype.slice,
    args = slice.apply(arguments, [1]),
    fNOP = function () {
    },
    bound = function () {
      return _this.apply(this instanceof fNOP ? this : that || window,
        args.concat(Array.prototype.slice.apply(arguments, [0]))
      )
    };
  fNOP.prototype = _this.prototype;
  bound.prototype = new fNOP();
  return bound;
};

export default {
  isBool,
  isLeapYear,
  cache,
  length,
  assign,
  testBind,
}
