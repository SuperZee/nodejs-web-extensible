// 写入文件的范例
var fs = require('fs');
fs.createReadStream(__dirname + '/readFile.js').pipe(process.stdout);