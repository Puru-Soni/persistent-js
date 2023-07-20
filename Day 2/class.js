class Student {
	fname;
	education;

	fullname() {
		return `${this.fname} ${this.lname}`;
	}

	constructor(fname, education) {
		this.fname = fname;
		this.education = education;
	}

	getName() {
		return this.fname;
	}
}

console.dir(Student);
console.dir(new Student());
console.log(new Student().fullname());
