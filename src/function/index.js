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

const throttle = (func, wait) => {
  let lastTime = null;
  return function () {
    const now = new Date();
    if (now - lastTime - wait > 0) {
      func();
      lastTime = now
    }
  }
};

export {
  isFunction,
  debounce,
  throttle,
}
