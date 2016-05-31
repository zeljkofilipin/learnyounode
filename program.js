const net = require('net');
const port = process.argv[2];

const server = net.createServer((c) => {
  var time    = new Date();
  var year    = time.getFullYear();
  var month   = time.getMonth() + 1;
  var date    = time.getDate();
  var hours   = time.getHours();
  var minutes = time.getMinutes();
  var endOfLine = require('os').EOL;
  c.end(`${year}-0${month}-${date} ${hours}:${minutes}${endOfLine}`);
});

server.on('error', (err) => {
  throw err;
});

server.listen(port, () => {
});
