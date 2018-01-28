const formatPassTime = (startTime) => {
  var currentTime = Date.parse(new Date()),
    time = currentTime - startTime,
    day = parseInt(time / (1000 * 60 * 60 * 24)),
    hour = parseInt(time / (1000 * 60 * 60)),
    min = parseInt(time / (1000 * 60)),
    month = parseInt(day / 30),
    year = parseInt(month / 12);
  if (year) return year + "年前";
  if (month) return month + "个月前";
  if (day) return day + "天前";
  if (hour) return hour + "小时前";
  if (min) return min + "分钟前";
  else return '刚刚'
};

const formatRemainTime = (endTime) => {
  var startDate = new Date(); //开始时间
  var endDate = new Date(endTime); //结束时间
  var t = endDate.getTime() - startDate.getTime(); //时间差
  var d = 0,
    h = 0,
    m = 0,
    s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor(t / 1000 / 60 / 60 % 24);
    m = Math.floor(t / 1000 / 60 % 60);
    s = Math.floor(t / 1000 % 60);
  }
  return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
};

const isSameDay = (date1, date2 = new Date()) => {
  var date1_year = date1.getFullYear(),
    date1_month = date1.getMonth() + 1,
    date1_date = date1.getDate();
  var date2_year = date2.getFullYear(),
    date2_month = date2.getMonth() + 1,
    date2_date = date2.getDate();
  return date1_date === date2_date && date1_month === date2_month && date1_year === date2_year;
};

export default {
  formatPassTime,
  formatRemainTime,
  isSameDay,
}
