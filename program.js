const http = require('http');

var url = process.argv[2];

http.get(url, (res) => {
  res.setEncoding('utf8')
  res.on('data', console.log)
}).on('error', console.error)
