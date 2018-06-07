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

const quickSort = (array, left = 0, right = array.length - 1) => {
  function operation(array, left, right) {
    const pivot = array[Math.floor((right + left) / 2)];
    while (left <= right) {
      while (compare(array[left], pivot) === -1) {
        left++;
      }
      while (compare(array[right], pivot) === 1) {
        right--;
      }
      if (left <= right) {
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
      }
    }
    return left;
  }
  function compare(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }
  if (array.length > 1) {
    const index = operation(array, left, right);
    if (left < index - 1) {
      quick(array, left, index - 1);
    }
    if (index < right) {
      quick(array, index, right);
    }
  }
  return array;
};

export default {
  arrayEqual,
  isArray,
  renderArr,
  convertArr,
  flatten,
  quickSort,
}
