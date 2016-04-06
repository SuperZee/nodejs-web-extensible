var fs = require('fs');
var path = require('path');
fs.readFile(path.join(__dirname + '/readFile.js'), {encoding: 'utf-8'}, function (err, data) {
    if (err) throw err;
    console.log(data);
});