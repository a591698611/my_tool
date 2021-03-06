const repeat = (str = '', times = 1) => {
  let result = '';
  if (!str || times < 1) return result;
  do {
    if (times % 2) {
      result += str;
    }
    times = Math.floor(times / 2);
    if (times) {
      str += str;
    }
  } while (times);
  return result;
};

const digitUppercase = (n) => {
  var fraction = ['角', '分'];
  var digit = [
    '零', '壹', '贰', '叁', '肆',
    '伍', '陆', '柒', '捌', '玖'
  ];
  var unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ];
  var head = n < 0 ? '欠' : '';
  n = Math.abs(n);
  var s = '';
  for (var i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '整';
  n = Math.floor(n);
  for (var i = 0; i < unit[0].length && n > 0; i++) {
    var p = '';
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return head + s.replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整');
};

const trim = (str) => str.replace(/(^\s*)|(\s*$)/g, "");

const getStrLength = (str) => {
  let realLength = 0;
  let len = str.length;
  let charCode = -1;
  for (let i = 0; i < len; i++) {
    charCode = str.charCodeAt(i);
    if (charCode >= 0 && charCode <= 128) {
      realLength += 1;
    } else {
      // 如果是中文则长度加2
      realLength += 2;
    }
  }
  return realLength;
};

export default {
  repeat,
  digitUppercase,
  trim,
  getStrLength,
}
