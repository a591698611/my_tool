const offset = (element) => {
  var top = element.offsetTop;
  var left = element.offsetLeft;
  var parent = element.offsetParent;
  while (parent != null) {
    top += parent.offsetTop;
    left += parent.offsetLeft;
    parent = parent.offsetParent;
  }

  return {
    top,
    left,
  };
};

const getScrollTop = () => {
  return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
};

const setScrollTop = (value) => {
  window.scrollTo(0, value);
  return value;
};

const scrollTo = (to, duration) => {
  if (duration < 0) {
    setScrollTop(to);
    return
  }
  var diff = to - getScrollTop();
  if (diff === 0) return;
  var step = diff / duration * 10;
  requestAnimationFrame(() => {
    if (Math.abs(step) > Math.abs(diff)) {
      setScrollTop(getScrollTop() + diff);
      return;
    }
    setScrollTop(getScrollTop() + step);
    if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {
      return;
    }
    scrollTo(to, duration - 16);
  });
};

const windowResize = (downCb = () => {
}, upCb = () => {
}) => {
  var clientHeight = window.innerHeight;
  window.addEventListener('resize', () => {
    var height = window.innerHeight;
    if (height === clientHeight) downCb();
    if (height < clientHeight) upCb();
  });
};

const contains = (fuNode, ziNode) => { // 查询一个节点是不是另一个节点的子节点
  if (fuNode.contains !== 'undefined') {
    return fuNode.contains(ziNode)
  } else if (fuNode.compareDocumentPosition == 'function') {
    return fuNode.compareDocumentPosition(ziNode)
  } else {
    do {
      var node = ziNode.parentNode;
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

export default {
  offset,
  getScrollTop,
  setScrollTop,
  scrollTo,
  windowResize,
  contains,
  serialize,
}
