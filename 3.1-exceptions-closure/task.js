"use strict"

//задача 1

function parseCount(value) {
	let result = Number.parseInt(value);
	if (isNaN(result)) {
		throw new Error("Невалидное значение");
	} 
	return result;
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
		if (((a + b) <= c) || ((a + c) <= b) || ((b + c) <= a)) {
				throw new Error("Треугольник с такими сторонами не существует");
			}
	}

	getPerimeter() {
		return Number((this.side1 + this.side2 + this.side3).toFixed(3))
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
		return new Triangle(a, b, c);
	}  catch(e) {
		return {
			getPerimeter() { return 'Ошибка! Треугольник не существует'}, 
			getArea() { return 'Ошибка! Треугольник не существует'}
		}
	}
}