"use strict"

function getSolutions( a, b, c ) {
	let D = b ** 2 - 4 * a * c;
	let x1;
	let x2;
	if (D < 0) {
		return {
			D: D, 
			roots: []
		}
	} else if (D === 0) {
		x1 = (- b / (2 * a));
		return {
			D: D,
			roots: [x1]
		}
	} else {
		x1 = (-b + Math.sqrt(D)) / (2 * a);
		x2 = (-b - Math.sqrt(D)) / (2 * a);
		return {
			D: D,
			roots: [x1, x2]
		}
	}
}

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c)
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`)
	if (result.roots.length === 0) {
		console.log('Уравнение не имеет вещественных корней');
	} else if (result.roots.length === 1) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
	} else {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	}
}

showSolutionsMessage(2,4,2);

// Задача 2

function getAverageScore(data) {
	let result = {};
	let totalAvarageMark = 0
	for (let prop in data) {
		let sumMarks = 0;
		for (let i = 0; i < data[prop].length; i++) {
			sumMarks += data[prop][i];
		}
		result[prop] = sumMarks / data[prop].length;
	} 

	function getAverageMark(marks) {
		let totalSumMarks = 0;
		let totalMarksCount = 0;
		for (let prop in marks) {
			totalSumMarks += marks[prop];
			totalMarksCount++;
		}
		if (totalSumMarks === 0) {
		 	totalAvarageMark = 0;
		} else {
			totalAvarageMark = totalSumMarks / totalMarksCount;
		}
		return totalAvarageMark;
	}
	result.average = getAverageMark(result);
	return result;
}	

/* 
// Вариант 2. Решения второй задачи - средняя оценка считается как средневзвешанная и внутри основной функции 

function getAverageScore(data) {
	let result = {};
	let totalSumMarks = 0;
	let totalMarksCount = 0;
	for (let prop in data) {
		let sumMarks = 0;
		for (let i = 0; i < data[prop].length; i++) {
			sumMarks += data[prop][i];
			totalSumMarks += data[prop][i];
		}
		result[prop] = sumMarks / data[prop].length;
		totalMarksCount += data[prop].length;
	} 
	if (totalSumMarks === 0) {
		result.average = 0;
	} else {
		result.average = totalSumMarks / totalMarksCount;
	}
	return result;
}
*/

console.log(getAverageScore({
	algebra: [2, 4, 5, 2, 3, 4 ],
	geometry: [2, 4, 5],
	russian: [3, 3, 4, 5],
	physics: [5, 5],
	music: [2, 2, 6],
	english: [4, 4, 3],
	poetry: [5, 3, 4],
	chemestry: [2],
	french: [4, 4]
}));

// Задачча 3

function getPersonData(secretData) {
	let result = {};
	function getDecodedValue(secret) {
		for (let prop in secret) {
			if (secret[prop] === 0) {
				secret[prop] = 'Родриго';
			} else if (secret[prop] === 1) {
				secret[prop] = 'Эмильо';
			} else {
				secret[prop] = 'Имя неизвестно';
			}
		}
		return secret;
	}
	result = {
		firstName: secretData.aaa,
		lastName: secretData.bbb
	}
	getDecodedValue(result);
	return result;
}

console.log( getPersonData({
	aaa: 0,
	bbb: 1
}))

