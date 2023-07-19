class Student {
	fname = "john";
	education = "BE";

	fullname() {
		return `${this.fname} ${this.lname}`;
	}

	constructor(fname, education) {
		this.fname = fname;
		this.education = education;
	}
}

console.log(new Student("john", "wick"));
console.log(new Student().fullname());
