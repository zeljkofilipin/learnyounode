const fs   = require('fs');
const http = require('http');

const file = process.argv[3];
const port = process.argv[2];

const server = http.createServer((request, response) => {
  fs.createReadStream(file).pipe(response);
});

server.listen(Number(port));
