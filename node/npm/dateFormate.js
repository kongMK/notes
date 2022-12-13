// 格式化时间
function dateFormat(dateString) {
  const date = new Date(dateString);
  
  const y = date.getFullYear();
  const m = padZero(date.getMonth() + 1);
  const d = padZero(date.getDay());

  const hh = padZero(date.getHours());
  const mm = padZero(date.getMinutes());
  const ss = padZero(date.getSeconds());

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

// 补零
function padZero(n) {
  return n > 9 ? n : '0' + n;
}

// 导出
module.exports = {
  dateFormat
}