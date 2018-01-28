const isEmptyObject = (obj) => {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false;
  return !Object.keys(obj).length
};

const shallowClone = (src) => {
  var copy = {};
  for (var prop in src) {
    if (src.hasOwnProperty(prop)) {
      copy[prop] = src[prop];
    }
  }
  return copy;
};

const deepClone = (values) => {
  var copy;
  if (null == values || typeof values !== 'object') return values;
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

export default {
  isEmptyObject,
  shallowClone,
  deepClone,
}
