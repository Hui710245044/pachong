const url = require('url');
var str = 'https://www.clevaly.com/liyou/images/1.jpg';
var urlObj = url.parse(str);
console.log(urlObj);