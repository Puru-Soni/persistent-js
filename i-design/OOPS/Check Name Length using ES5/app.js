var fs = require("fs");
var input = fs.readFileSync("input.txt").toString().trim().split("\n");
//fill your code

class User {
	constructor([name]) {
		this.username = name;
	}

	getName() {
		return this.username;
	}

	checkNameLength() {
		this.username.length > 4
			? console.log(this.getName())
			: console.log("Name is too short");
	}
}

let obj = new User(input);
obj.checkNameLength();
