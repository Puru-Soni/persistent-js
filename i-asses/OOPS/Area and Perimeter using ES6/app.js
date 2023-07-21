const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

class Shape {
	constructor(name) {
		this.name = name;
	}

	calculatePerimeter(side, side1, side2) {
		return this.name === "Circle"
			? (2 * Math.PI.toFixed(2) * side).toFixed(2)
			: this.name === "Square"
			? 4 * side
			: this.name === "Triangle"
			? side1 + side2 + side
			: null;
	}

	calculateArea(side, height) {
		return this.name === "Circle"
			? (Math.PI.toFixed(2) * Math.pow(side, 2)).toFixed(2)
			: this.name === "Square"
			? side * side
			: this.name === "Triangle"
			? (side * height) / 2
			: null;
	}
}

class Circle extends Shape {
	constructor(name, radius) {
		super(name);
		this.radius = radius;
	}

	displayCircleMeasurments() {
		console.log(
			`Perimeter of a Circle: ${this.calculatePerimeter(
				this.radius,
			)}\nArea of a Circle: ${this.calculateArea(this.radius)}`,
		);
	}
}

class Square extends Shape {
	constructor(name, side) {
		super(name);
		this.side = side;
	}

	displaySquareMeasurments() {
		console.log(
			`Perimeter of a Square: ${this.calculatePerimeter(
				this.side,
			)}\nArea of a Square: ${this.calculateArea(this.side)}`,
		);
	}
}

class Triangle extends Shape {
	constructor(name, side1, side2, side3, base, height) {
		super(name);
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
		this.base = base;
		this.height = height;
	}

	displayTriangleMeasurments() {
		console.log(
			`Perimeter of a Triangle: ${this.calculatePerimeter(
				this.side1,
				this.side2,
				this.side3,
			)}\nArea of a Triangle: ${this.calculateArea(this.base, this.height)}`,
		);
	}
}

const [circle, square, triangle] = input;

const [nameC, radius] = circle.split(",");
let c = new Circle(nameC, Number(radius));
c.displayCircleMeasurments();

const [nameS, side] = square.split(",");
let s = new Square(nameS, Number(side));
s.displaySquareMeasurments();

const [nameT, side1, side2, side3, base, height] = triangle.split(",");
let t = new Triangle(
	nameT,
	Number(side1),
	Number(side2),
	Number(side3),
	Number(base),
	Number(height),
);
t.displayTriangleMeasurments();
