const isFunction = (obj) => obj instanceof Function || typeof obj === 'function';

const debounce = (fn, delay = 500) => {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
};

export {
  isFunction,
  debounce
}
