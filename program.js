var fs = require('fs');
console.log(fs.readFileSync('README.md', {encoding: 'utf8'}));
