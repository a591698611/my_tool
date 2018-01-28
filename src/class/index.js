const hasClass = (element, aClass) => {
  return !!element.className.match(new RegExp('(\\s|^)' + aClass + '(\\s|$)'))
};

const addClass = (element, aClass) => {
  if (!hasClass(element, aClass)) {
    element.className += ' ' + aClass
  }
};

const removeClass = (element, aClass) => {
  if (hasClass(element, aClass)) {
    element.className = element.className.replace(new RegExp('(\\s|^)' + aClass + '(\\s|$)'), ' ')
  }
};

export default {
  hasClass,
  addClass,
  removeClass,
}
