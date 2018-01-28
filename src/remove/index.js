const delNull = (arr) => arr.filter(v => v !== undefined && v !== null && v.toString().trim() !== '');

const removeHTMLLabel = (str) => str.replace(/<[^<>]+>/g, '');

export default {
  delNull,
  removeHTMLLabel,
}
