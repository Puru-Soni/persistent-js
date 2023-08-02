function person(fname, lname, age) {
	this.fname = fname;
	this.lname = lname;
	this.age = age;

	this.getfullname = () => this.firstname + " " + this.lastname;
}

const ram = new person("ram", "soni", 21);
console.log(ram.getfullname());
