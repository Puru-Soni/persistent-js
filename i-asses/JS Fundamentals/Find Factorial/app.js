const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const n = Number(input);

const factorial = (n) => {
	if (n == 0 || n == 1) return 1;
	return n * factorial(n - 1);
};

console.log(factorial(n));
