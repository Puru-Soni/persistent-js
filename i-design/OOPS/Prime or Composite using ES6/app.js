var fs = require("fs");
var data = fs.readFileSync("input.txt").toString().trim().split("\n");
//fill your code
console.log(data);

const { checkPrime } = require("./display");

Number([data]) <= 1
	? console.log("Neither Prime nor Composite")
	: checkPrime(Number(data))
	? console.log("Prime Number")
	: console.log("Composite Number");
