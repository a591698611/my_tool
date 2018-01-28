import {convertArr} from '../array';

function maxNum(arr) {
  var nweArr = [];
  if (arguments.length > 1) nweArr = convertArr(arguments);
  return Math.max.apply(null, nweArr)
}

function minNum(arr) {
  var nweArr = [];
  if (arguments.length > 1) nweArr = convertArr(arguments);
  return Math.min.apply(null, nweArr)
}

const isNumber = (obj) => !isNaN(parseFloat(obj)) && isFinite(obj);

export default {
  maxNum,
  minNum,
  isNumber,
}
