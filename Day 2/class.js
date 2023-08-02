class Student {
	fname;
	education;

	constructor(fname, education) {
		this.fname = fname;
		this.education = education;
	}

	getName() {
		return this.fname;
	}

	fullname() {
		return `${fname} ${lname}`;
	}
}

console.dir(Student);
console.dir(new Student("puru", "b.tech"));
console.log(new Student().fullname());
