const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomSort = (arr) => arr.sort(() => Math.random() - 0.5);

export default {
  randomNum,
  randomSort,
}
