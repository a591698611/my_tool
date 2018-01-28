function getCookie(name) {
  var arr = document.cookie.split(';');
  for (var i = 0; i < arr.length; i++) {
    var arr2 = arr[i].split('=');
    if (arr2[0] == encodeURIComponent(name)) {
      return decodeURIComponent(arr2[1]);
    }
  }
  return '';
}

function setCookie(name, value, iday, path, domain, secure) {
  var odate = new Date();
  odate.setDate(odate.getDate() + iday);
  var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';expires=' + odate;
  if (path) {
    cookieText += ';path=' + path;
  }
  if (domain) {
    cookieText += ';domain=' + domain;
  }
  if (secure) {
    cookieText += ';secure';
  }
  document.cookie = cookieText;
}

function removeCookie(name, path, domain, secure) {
  setCookie(decodeURIComponent(name), 1, -1, path, domain, secure);
}

export default {
  getCookie,
  setCookie,
  removeCookie,
}
