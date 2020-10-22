"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
   
    let result;

    if (isNaN(percent) === true) {
    	result = `Параметр "Процентная ставка" содержит неправильное значение`;
    	return result;
    }
    if (isNaN(contribution) === true) {
    	result = `Параметр "Начальный взнос" содержит неправильное значение`;
    	return result;
    }
    if (isNaN(amount) === true) {
    	result = `Параметр "Общая стоимость" содержит неправильное значение`;
    	return result;
    }

    let mortgage = amount - contribution;
    let numberOfMonth = (date.getMonth() + date.getFullYear() * 12) - (new Date().getMonth() + new Date().getFullYear() * 12);
    const P = percent / 100 / 12;
    let monthlyPayment = mortgage * (P + P / (((1 + P) ** numberOfMonth) - 1));
    let totalAmount = monthlyPayment * numberOfMonth;
    console.log(Number(totalAmount.toFixed(2))) ;
    console.log(typeof totalAmount);
    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
	let greeting;
	if (!!name === false || name === 'null' || name === 'undefined') {
		greeting = 'Привет, мир! Меня зовут Аноним'
	} else {
		greeting = `Привет, мир! Меня зовут ${name}`
	}
    
    console.log(greeting)
    return greeting;
}