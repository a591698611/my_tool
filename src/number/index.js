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

const thouComma = (num) => {
  num = num.toFixed(2).toString();
  if (num.indexOf(',') !== -1) num = num.replace(/,/g, '');
  let ps = num.split('').reverse();
  let pointIndex = ps.indexOf('.');
  pointIndex = pointIndex === -1 ? 0 : pointIndex + 1;
  let newps = [];
  ps.map((v, i) => {
    if ((i > pointIndex) && ((i - pointIndex) % 3 === 0)) newps.unshift(',');
    newps.unshift(v);
  });
  return newps.join('');
};

export default {
  maxNum,
  minNum,
  isNumber,
  thouComma,
}
