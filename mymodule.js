var fs = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {
  fs.readdir(directory, function (err, list) {
    if (err) return callback(err);
    for (var i = 0; i < list.length; i++) {
      var filename = list[i];
      if(path.extname(filename) === '.' + extension) callback(null, filename);
    }
  })
};
