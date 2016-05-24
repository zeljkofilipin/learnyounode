const http = require('http');

var url = process.argv[2];
var response = '';

http.get(url, (res) => {
  res.setEncoding('utf8');
  res.on('data', (data) => {
    response += data;
  });
  res.on('end', (data) => {
    console.log(response.length);
    console.log(response);
  });
}).on('error', console.error);
