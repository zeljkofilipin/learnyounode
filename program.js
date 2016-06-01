const http = require('http');
const port = process.argv[2];
const url  = require('url');

const server = http.createServer((request, response) => {
  var pathname = url.parse(request.url, true).pathname;
  var iso      = url.parse(request.url, true).query.iso;
  var result;

  if (pathname === '/api/parsetime') {
    var hour   = new Date(iso).getHours();
    var minute = new Date(iso).getMinutes();
    var second = new Date(iso).getSeconds();

    var parsetime = {  
      "hour": hour,
      "minute": minute,
      "second": second 
    } 

    console.log(hour);

    result = parsetime;
  } else if (pathname === '/api/unixtime') {
    var unixtime = new Date(iso).getTime();
    result = { "unixtime": unixtime }
  }

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(result));
});

server.listen(Number(port));
