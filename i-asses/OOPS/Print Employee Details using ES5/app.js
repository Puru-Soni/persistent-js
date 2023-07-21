const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

class Employee {
	constructor(name, dept, DOJ) {
		this.name = name;
		this.dept = dept;
		this.DOJ = DOJ;
	}

	displayEmployee() {
		console.log(
			`Name : ${this.name}\nDepartment : ${this.dept}\nDOJ : ${this.DOJ}`,
		);
	}
}

let ob = new Employee(...input);
ob.displayEmployee();
