"use strict"

//задача 1

function parseCount(value) {
	let result = Number.parseInt(value);
	if (isNaN(result) === true) {
		const parseError = new Error("Невалидное значение");
		throw parseError;
	} else {
		return result;
	}
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch(e) {
		return e;
	}
}

//задача 2

class Triangle {
	constructor (a,b,c) {
		this.side1 = a;
		this.side2 = b;
		this.side3 = c;
		if (((this.side1 + this.side2) <= this.side3) || ((this.side1 + this.side3) <= this.side2) || ((this.side2 + this.side3) <= this.side1)) {
				const triangleError = new Error("Треугольник с такими сторонами не существует");
				throw triangleError;
			}
	}

	getPerimeter() {
		let perimeter = this.side1 + this.side2 + this.side3;
		return Number(perimeter.toFixed(3));
	}

	getArea() {
		const p = (this.side1 + this.side2 + this.side3) / 2;
		const area = Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
		return Number(area.toFixed(3));
	}
}

function getTriangle(a,b,c) {
	let triangle;
	try {
		triangle = new Triangle(a, b, c);
		return triangle;
	}  catch(e) {
		triangle = {
			getPerimeter() { return 'Ошибка! Треугольник не существует'},
			getArea() { return 'Ошибка! Треугольник не существует'}
		}
		return triangle; 
	}
}