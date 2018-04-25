const parseQueryString = (url) => {
  url = url == null ? window.location.href : url;
  var search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
  if (search === '') return {};
  search = search.split('&');
  var query = {};
  for (var i = 0; i < search.length; i++) {
    var pair = search[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
};

export default {
  parseQueryString,
}
 (min) return min + "分钟前";
  else return '刚刚'
};

const formatRemainTime = (endTime) => {
  var startDate = new Date(); //开始时间
  var endDate = new Date(endTime); //结束时间
  var t = endDate.getTime() - startDate.getTime(); //时间差
  var d = 0,
    h = 0,
    m = 0,
    s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor(t / 1000 / 60 / 60 % 24);
    m = Math.floor(t / 1000 / 60 % 60);
    s = Math.floor(t / 1000 % 60);
  }
  return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
};

const isSameDay = (date1, date2 = new Date()) => {
  var date1_year = date1.getFullYear(),
    date1_month = date1.getMonth() + 1,
    date1_date = date1.getDate();
  var date2_year = date2.getFullYear(),
    date2_month = date2.getMonth() + 1,
    date2_date = date2.getDate();
  return date1_date === date2_date && date1_month === date2_month && date1_year === date2_year;
};

export default {
  formatPassTime,
  formatRemainTime,
  isSameDay,
}
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
Node;
      if (node == fuNode) {
        return true
      } else {
        node = ziNode.parentNode
      }
    }
    while (node != null);
    return false
  }
};

const serialize = (form) => {
  var parts = [];
  for (var i = 0; i < form.elements.length; i++) {
    var filed = form.elements[i];
    switch (filed.type) {
      case undefined:
      case 'file':
      case 'submit':
      case 'reset':
      case 'button':
      case 'checkbox':
        break;
      case 'select-one' :
      case 'select-multiple' :
        for (var j = 0; j < filed.options.length; j++) {
          var option = filed.options[j];
          if (option.selected) {
            var optValue = '';
            if (option.hasAttribute) {
              optValue = option.hasAttribute('value') ? option.value : option.text;
            } else {
              optValue = option.attributes['value'].specified ? option.value : option.text;
            }
            parts.push(filed.name + '=' + optValue);
          }
        }
        break;
      case 'radio':
        if (filed.checked) parts[filed.name] = filed.value;
        break;
      default:
        parts.push(filed.name + '=' + optValue);
    }
  }
  return parts;
};

const getSize = () => {
  let windowW, windowH, contentH, contentW, scrollT;
  windowH = window.innerHeight;
  windowW = window.innerWidth;
  scrollT = document.documentElement.scrollTop || document.body.scrollTop;
  contentH = (document.documentElement.scrollHeight > document.body.scrollHeight) ? document.documentElement.scrollHeight : document.body.scrollHeight;
  contentW = (document.documentElement.scrollWidth > document.body.scrollWidth) ? document.documentElement.scrollWidth : document.body.scrollWidth;
  return {windowW, windowH, contentH, contentW, scrollT}
};

export default {
  offset,
  getScrollTop,
  setScrollTop,
  scrollTo,
  windowResize,
  contains,
  serialize,
  getSize,
}
