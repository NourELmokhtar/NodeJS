var readline = require('readline');
var fs = require('fs');

var File = readline.createInterface({
    input: fs.createReadStream('Assignment2/Nour-Elmokhtar.txt'),
    crlfDelay: Infinity
});

File.on('line', (line) => {
    console.log(line);
});