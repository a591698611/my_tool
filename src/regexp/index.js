const isIphone = (phone) => /^0{0,1}(13[0-9]|153|15[6-9]|18[7-9])[0-9]{8}$/.test(phone);

const isMail = (mail) => /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(mail);

const isCE = (ce) => /^[\u4e00-\u9fa5a-z]+$/gi.test(ce);

const isIdCard = (str) => /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str);

const isNum = (num) => /^\d+$/.test(num);

const isLetter = (letter) => /^[a-z]+$/i.test(letter);

const isYYYYMMDD = (date) => /^\d{4}-\d{1,2}-\d{1,2}$/.test(date);

const isURL = (url) => /^(https?|ftp):\/\/[^\s]+$/i.test(url);

export default {
  isIphone,
  isMail,
  isCE,
  isIdCard,
  isNum,
  isLetter,
  isYYYYMMDD,
  isURL,
}
