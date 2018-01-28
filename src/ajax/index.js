function ajax(obj) {
  var xhr = (function () {
    if (typeof XMLHttpRequest !== 'undefined') {
      return new XMLHttpRequest();
    } else if (typeof ActiveXObject !== 'undefined') {
      var version = [
        'MSXML2.XMLHttp.6.0',
        'MSXML2.XMLHttp.3.0',
        'MSXML2.XMLHttp'
      ];
      for (var i = 0; version.length; i++) {
        try {
          return new ActiveXObject(version[i])
        }
        catch (e) {
          // 跳过
        }
      }
    } else {
      throw new Error("浏览器不支持XHR对象!")
    }
  })();
  obj.url = obj.url + '?rand=' + Math.random();
  obj.data = (function (data) {
    var arr = [];
    for (var i in data) {
      arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
    }
    return arr.join('&');
  })(obj.data);
  if (obj.method === 'get') obj.url += obj.url.indexOf('?') === -1 ? '?' + obj.data : '&' + obj.data;
  if (obj.async) {
    xhr.onreadystatechange = function () {
      if (parseInt(xhr.readyState, 10) === 4) callback();
    }
  }
  xhr.open(obj.method, obj.url, obj.async);
  if (obj.method === 'post') {
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(obj.data);
  } else {
    xhr.send(null);
  }
  if (!obj.async) callback();

  function callback() {
    if (parseInt(xhr.status, 10) === 200) {
      obj.success(xhr.responseText);
    } else {
      alert('错误代号' + xhr.status + '错误信息' + xhr.statusText)
    }
  }
}

export default ajax;
