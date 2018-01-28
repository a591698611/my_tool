import ajax from './ajax';
import {arrayEqual, isArray, renderArr, convertArr, flatten} from './array';
import {hasClass, addClass, removeClass} from './class';
import {getCookie, setCookie, removeCookie} from './cookie';
import {gsstyle} from './css';
import {getExplore, getOS} from './device';
import {offset, getScrollTop, setScrollTop, scrollTo, windowResize, contains, serialize} from './dom';
import {isFunction, debounce} from './function'; // TODO
import {maxNum, minNum, isNumber} from './number';
import {isEmptyObject, shallowClone, deepClone} from './object';
import {isBool, isLeapYear, length} from './other';
import {randomNum, randomSort} from './random';
import {isIphone, isMail, isCE, isIdCard, isNum, isLetter, isYYYYMMDD, isURL} from './regexp';
import {delNull, removeHTMLLabel} from './remove';
import {repeat, digitUppercase, trim} from './string';
import {formatPassTime, formatRemainTime, isSameDay} from './time';
import {parseQueryString} from './url';

module.exports = {
  ajax,
  arrayEqual,
  isArray,
  renderArr,
  convertArr,
  flatten,
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
  isFunction,
  debounce,
  maxNum,
  minNum,
  isNumber,
  isEmptyObject,
  shallowClone,
  deepClone,
  isBool,
  isLeapYear,
  length,
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
  formatPassTime,
  formatRemainTime,
  isSameDay,
  parseQueryString,
};
