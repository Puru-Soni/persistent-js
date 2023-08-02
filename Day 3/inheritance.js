class A {
	val = 100;
	display() {
		console.log(this.val);
	}
}

class B extends A {
	size = 1;
	show() {
		console.log(this.size);
	}
}

let b = new B();
b.display();
b.val = 5;
console.log(b.val);

// B { __proto__ : size, show } -> A { __proto__ : val , display } -> Object.__proto__ -> null
