const http = require('http');

var count = 0;
var responses = [];

function printResponses () {
  responses.forEach( item => {
    console.log(item);
  });
}

function getResponses (index) {
  var url = process.argv[index + 2];
  var response = '';
  http.get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', (data) => {
      response += data;
    });
    res.on('end', (data) => {
      responses[index] = response;
      console.log(responses[index]);
      if (count === 3) printResponses();
    });
  }).on('error', console.error);
}

for (var i = 0; i < 3; i++)
  getResponses(i);
