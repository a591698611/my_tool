import ajax from './ajax';
import {arrayEqual, isArray, renderArr, convertArr, flatten, quickSort} from './array';
import {hasClass, addClass, removeClass} from './class';
import {getCookie, setCookie, removeCookie} from './cookie';
import {gsstyle} from './css';
import {getExplore, getOS} from './device';
import {offset, getScrollTop, setScrollTop, scrollTo, windowResize, contains, serialize, getSize} from './dom';
import {isFunction, debounce, throttle} from './function';
import {maxNum, minNum, isNumber, thouComma} from './number';
import {isEmptyObject, shallowClone, deepClone} from './object';
import {isBool, isLeapYear, length, assign, testBind} from './other';
import {randomNum, randomSort} from './random';
import {isIphone, isMail, isCE, isIdCard, isNum, isLetter, isYYYYMMDD, isURL} from './regexp';
import {delNull, removeHTMLLabel} from './remove';
import {repeat, digitUppercase, trim, getStrLength} from './string';
import {formatPassTime, formatRemainTime, isSameDay} from './time';
import {parseQueryString} from './url';

module.exports = {
  ajax,
  arrayEqual,
  isArray,
  renderArr,
  convertArr,
  flatten,
  quickSort,
  addClass,
  hasClass,
  removeClass,
  getCookie,
  setCookie,
  removeCookie,
  gsstyle,
  getExplore,
  getOS,
  offset,
  getScrollTop,
  setScrollTop,
  scrollTo,
  windowResize,
  contains,
  serialize,
  getSize,
  isFunction,
  debounce,
  throttle,
  maxNum,
  minNum,
  isNumber,
  thouComma,
  isEmptyObject,
  shallowClone,
  deepClone,
  isBool,
  isLeapYear,
  length,
  assign,
  testBind,
  randomNum,
  randomSort,
  isIphone,
  isMail,
  isCE,
  isIdCard,
  isNum,
  isLetter,
  isYYYYMMDD,
  isURL,
  delNull,
  removeHTMLLabel,
  repeat,
  digitUppercase,
  trim,
  getStrLength,
  formatPassTime,
  formatRemainTime,
  isSameDay,
  parseQueryString,
};
