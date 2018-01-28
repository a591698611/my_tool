function gsstyle(obj, name, value) {
  switch (arguments.length) {
    case 2:
      if (typeof arguments[1] == "object") {
        for (var i in name) i == "opacity" ? (obj.style["filter"] = "alpha(opacity=" + name[i] + ")", obj.style[i] = name[i] / 100) : obj.style[i] = name[i];
      } else {
        return obj.currentStyle ? obj.currentStyle[name] : getComputedStyle(obj, null)[name];
      }
      break;
    case 3:
      name == "opacity" ? (obj.style["filter"] = "alpha(opacity=" + value + ")", obj.style[name] = value / 100) : obj.style[name] = value;
  }
};

export default {
  gsstyle,
}
