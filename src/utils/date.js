// date.js
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

export function str2Date(dateStr, separator) {
  if (!separator) {
    separator = "-";
  }
  let dateArr = dateStr.split(separator);
  let year = parseInt(dateArr[0]);
  let month;
  //处理月份为04这样的情况
  if (dateArr[1].indexOf("0") == 0) {
    month = parseInt(dateArr[1].substring(1));
  } else {
    month = parseInt(dateArr[1]);
  }
  let day = parseInt(dateArr[2]);
  let date = new Date(year, month - 1, day);
  return date;
}

export function dateDiff(date1, date2) {
  // 相差秒数的绝对值
  return parseInt(Math.abs(date1.getTime() - date2.getTime()) / 1000);
}


// 计算发布时间
export function calculateLastUpdate(date) {
  // 
  // 由于时区问题，暂时精确到天
  // 
  // let secondNum = dateDiff(date, new Date());
  // if (secondNum < 60) {
  //   return secondNum + "秒";
  // } else if (secondNum < 60 * 60) {
  //   return parseInt(secondNum / 60) + "分钟";
  // } else if (secondNum < 60 * 60 * 24) {
  //   return parseInt(secondNum / (60 * 60)) + "小时";
  // }
  let secondNum = dateDiff(date, new Date());
  let dayNum = parseInt(secondNum / (24 * 60 * 60));
  if (dayNum < 1) {
    return "刚刚发布"
  }
  if (dayNum <= 30) {
    return dayNum + "天发布";
  } else if (dayNum <= 356) {
    return parseInt(dayNum / 30) + "个月前发布";
  } else {
    return parseInt(dayNum / 365) + "年前发布";
  }
}