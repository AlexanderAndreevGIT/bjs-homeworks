"use strict"

class PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state = this.state * 1.5;
		if (this.state <= 0) {
			this.state = 0;
		} else if (this.state >= 100) {
			this.state = 100;
		}
	}
	set state(value) {
		if (value <= 0) {
			this._state = 0;
		} else if (value >= 100) {
			this._state = 100;
		} else {
			this._state = value;
		}
	}
	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'book'
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel'
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic'
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective'
	}
}

// Часть 2

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		let result = this.books.find(item => item[type] === value);
		if (result === undefined) {
			return result = null;
		} else {
			return result;
		}
	}
	giveBookByName(bookName) {
		let result = this.books.find(item => item['name'] === bookName);
		if (result === undefined) {
			return result = null;
		} else {
			let resultOrder = this.books.indexOf(result);
			this.books.splice(resultOrder, 1);
		}
		return result;
	}
}



//Задача 3

class StudentLog {
	constructor(name) {
		this.name = name;
		this.grades = {
			algebra: [],
			geometry: [],
			russian: [],
			physics: [],
			music: [],
		}
	}
	
	getName() {
		return this.name;
	}

	addSubject(subject) {
		if (this.grades[subject] === undefined) {
			this.grades[subject] = [];
			console.log(`Предмет "${subject}" добавлен в журнал`)
		} else {
			console.log(`Предмет "${subject}" уже есть в журнале`)
		}
	}

	addGrade(grade, subject) {
		if (this.grades[subject] === undefined) {
			console.log(`Предмета "${subject}" нет в журнале. Проверьте правильность его написания или добавьте предмет в журнал с помощью метода "addSubject"`)
		} else if (grade === 1 || grade === 2 || grade === 3 || grade === 4 || grade === 5) {
			return this.grades[subject].push(grade);
		} else {
			console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`)
			return this.grades[subject].length;
		}
	}

	getAverageBySubject(subject) {
		let sumMarks = 0;
		let marksCount = 0;
		let avarageMark = 0;
		for (let prop in this.grades[subject]) {
			sumMarks += this.grades[subject][prop];
			marksCount++;
		}
		if (sumMarks === 0) {
			avarageMark = 0;
		} else {
			avarageMark = sumMarks / marksCount;
		}
		return Number(avarageMark.toFixed(2));
	}

	getTotalAverage() {
		let result = {};
		let totalSumMarks = 0;
		let totalMarksCount = 0;
		for (let prop in this.grades) {
			if (this.grades[prop].length > 0) {
				totalMarksCount += this.grades[prop].length;
				for (let i = 0; i < this.grades[prop].length; i++) {
					totalSumMarks += this.grades[prop][i];
				}
			}
		}
		if (totalSumMarks === 0) {
			result = 0;
		} else {
			result = totalSumMarks / totalMarksCount;
		}
		return Number(result.toFixed(2));
	}
}

