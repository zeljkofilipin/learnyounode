const http = require('http');
const port = process.argv[2];
const url  = require('url');

var result;

const server = http.createServer((request, response) => {
  var pathname = url.parse(request.url, true).pathname;
  var iso      = url.parse(request.url, true).query.iso;
  var date     = new Date(iso);

  if (pathname === '/api/parsetime') {
    var hour   = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var parsetime = {  
      "hour": hour,
      "minute": minute,
      "second": second 
    } 

    result = parsetime;
  } else if (pathname === '/api/unixtime') {
    var unixtime = new Date(iso).getTime();
    result = { "unixtime": unixtime }
  }

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(result));
});

server.listen(Number(port));
