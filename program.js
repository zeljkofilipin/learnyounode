var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(directory, (err, list) => {
  if (err) throw err;
  for (var i = 0; i < list.length; i++) {
    var filename = list[i];
    if(path.extname(filename) == extension) console.log(filename);
  }
});
