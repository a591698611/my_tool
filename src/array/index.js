const arrayEqual = (arr1, arr2) => {
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;
  for (var i = 0, l = arr1.length; i < l; i++) {
    if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
      if (!arrayEqual(arr1[i], arr2[i]))
        return false;
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const isArray = (obj) => Array.isArray(obj) || Object.prototype.toString.call(obj) === '[object Array]';

const renderArr = (num) => Array.apply(null, Array(num));

const convertArr = (obj) => Array.prototype.slice.call(obj);

const flatten = (arr) => {
  return arr.reduce((prev, next) => {
    return prev.concat(isArray(next) ? flatten(next) : next)
  }, [])
};

export default {
  arrayEqual,
  isArray,
  renderArr,
  convertArr,
  flatten,
}
