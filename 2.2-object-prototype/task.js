"use strict"

String.prototype.isPalindrome = function () {
	let clearString = this.replace(/[\s, '!', '?', '.', '-']/g , '');
	clearString = clearString.toLowerCase()
	let reverseStr = "";
	for (let i = clearString.length - 1; i >= 0; i--) {
		 reverseStr += clearString.charAt(i);
	}
	let result = clearString === reverseStr;
	return result;
}

function getAverageMark(marks) {
	let totalSumMarks = 0;
	let totalMarksCount = 0;
	let totalAvarageMark = 0;
	for (let prop in marks) {
		totalSumMarks += marks[prop];
		totalMarksCount++;
	}
	if (totalSumMarks === 0) {
		totalAvarageMark = 0;
	} else {
		totalAvarageMark = totalSumMarks / totalMarksCount;
	}
	return Math.round(totalAvarageMark);
}


function checkBirthday(birthday) {
	let verdict;
	const currentYear = new Date().getFullYear();
	const now = new Date();
	const firstDayOfCurrentYear = new Date(new Date().getFullYear(), 0, 1);
	const dateOfBirthday = new Date(birthday);
	const monthDayOfBirthday = new Date(currentYear, dateOfBirthday.getMonth(), dateOfBirthday.getDate());
	
	if ((currentYear - dateOfBirthday.getFullYear()) < 18) {
		verdict = false;
	} else if ((currentYear - dateOfBirthday.getFullYear()) === 18) {
		if (((+now) - (+firstDayOfCurrentYear)) < ((+monthDayOfBirthday) - (+firstDayOfCurrentYear))) {
			verdict = false;
		} else {
			verdict = true;
		}
	} else {
		verdict = true;
	}
	return verdict;
}

//console.log(checkBirthday(birthday));
