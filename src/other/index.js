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

export default {
  isBool,
  isLeapYear,
  cache,
  length,
}
