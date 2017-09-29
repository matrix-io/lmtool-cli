const fs = require('fs');
const lmtool = require('./src/lmtool');

const fileStream = fs.createReadStream(__dirname + '/dict.txt');
lmtool.run(fileStream).then(link => console.log(link)).catch(err => console.log(err));