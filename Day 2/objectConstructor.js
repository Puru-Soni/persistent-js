function person(fname, lname, age) {
	this.firstname = fname;
	this.lastname = lname;
	this.aged = age;

	this.name = () => this.firstname + " " + this.lastname;
}

const ram = new person("ram", "soni", 21);
console.log(ram.name());
