var fs = require("fs");

var contents = fs.readFileSync(process.argv[1]);
var lines = contents.toString().split("\n").length - 1;

console.log(lines);
