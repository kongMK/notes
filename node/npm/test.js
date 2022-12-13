const TIME = require('./dateFormate.js');

const date = new Date();
const newDate = TIME.dateFormat(date);
console.log(newDate);