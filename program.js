const http = require('http');
const port = process.argv[2];
const url  = require('url');

const server = http.createServer((request, response) => {
  var pathname = url.parse(request.url, true).pathname;
  var iso      = url.parse(request.url, true).query.iso;

  parsetime = {  
    "hour": 14,
    "minute": 23,
    "second": 15
  } 

  if (pathname === '/api/parsetime') {
    result = parsetime;
  } else if (pathname === '/api/unixtime') {
    var unixtime = new Date(iso).getTime();
    result = { "unixtime": unixtime }
  }

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(result));
});

server.listen(Number(port));
