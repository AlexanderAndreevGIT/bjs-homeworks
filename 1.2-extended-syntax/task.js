"use strict";

function getResult(a,b,c){
    let x;
    let D =  b ** 2 - 4 * a * c;
    if (D < 0) {
    	x = [];
    } else if (D == 0) {
    	x = [-b / (2 * a)];
    } else {
    	x = [(-b + D ** (1/2)) / (2 * a), (-b - D ** (1/2)) / (2 * a)];
    }
    return x;
}

function getAverageMark(marks){
    let averageMark;
    let sumMarks = 0;
    if (marks.length > 5) {
    	marks = marks.slice(0,5);
    	console.log('количество оценок больше 5');
    }
    if (marks.length == 0) {
    	averageMark = 0;
    } else {
    	for (let i = 0; i < marks.length; i++) {
    		sumMarks += marks[i];
    	}
    	averageMark = sumMarks / marks.length;
    }
    return averageMark;
}

function askDrink(name,dateOfBirthday){
	 let result;
    const currentYear = new Date().getFullYear();
    if ((currentYear - dateOfBirthday.getFullYear()) >= 18) {
    	result = `Не желаете ли олд-фэшн, ${name}?`
    } else {
    	result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    }
    return result;
}