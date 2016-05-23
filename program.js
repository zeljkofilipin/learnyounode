const ls = require('./ls');

var directory = process.argv[2];
var extension = process.argv[3];

ls(directory, extension, (err, data) => {
  if (err) console.log(err);
  data.forEach((item, index, array) => {
    console.log(item);
  });
});
