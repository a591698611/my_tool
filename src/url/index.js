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
