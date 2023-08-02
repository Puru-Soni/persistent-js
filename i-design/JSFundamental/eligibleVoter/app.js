const { log } = require("console");
var fs = require("fs");
var input = fs.readFileSync("input.txt").toString();
//fill your code

console.log(input == "");
input >= 18 ? console.log("Allowed") : console.log("Not Allowed");
