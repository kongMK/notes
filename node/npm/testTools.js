const tools = require('./my-tools');

console.log(tools.dateFormat(new Date()));
console.log('------------------------');
console.log(tools.htmlEscape('<h1 title="abc"><span>&nbsp;</span></h1>'));
console.log('------------------------');
console.log(tools.htmlUnEscape('&lt;h1 title=&quot;abc&quot;&gt;&lt;span&gt;&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;'));