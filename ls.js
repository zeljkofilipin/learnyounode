const fs   = require('fs');
const path = require('path');
var filtered_files = [];

module.exports = (directory, extension, callback) => {
  fs.readdir(directory, (err, files) => {
    if (err) return callback(err);
    files.forEach((item, index, array) => {
      if (path.extname(item) === '.' + extension) filtered_files.push(item);
    });
      callback(null, filtered_files);
  });
};
