const { log } = require("console");
var fs = require("fs");
var input = fs.readFileSync("input.txt").toString();
//fill your code

let word = input.toLowerCase().split(" ").join("").trim();
let reversed = word.split("").reverse().join("").trim();

word == reversed
	? console.log(input, "is a palindrome")
	: console.log(input, "is not a palindrome");
