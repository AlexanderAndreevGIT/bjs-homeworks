"use strict";

class AlarmClock {
	constructor () {
		this.alarmCollection = [];
		this.timerId = null;	
	}

	addClock(time, callback, id) {
		if (id === undefined) {
			throw new Error('Невозможно идентифицировать будильник. Параметр id не передан');
		}
		try {
			if (this.alarmCollection.some(item => item.id === id)) {
				throw new Error('Будильник с таким id уже существует')
			} else {
				this.alarmCollection.push(
					{
						id: id,
						time: time,
						callback: callback
					})
			}
		} catch(e) {
			console.error(e)
		}
	}

	removeClock(id) {
		const result = this.alarmCollection.some(item => item.id === id);
		if (result === true) {
			this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
		}
		return console.log(result);
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString().slice(0,-3);
	}

	start() {
		let checkClock = (alarm) => {
			if (alarm.time === this.getCurrentFormattedTime()) {
				return alarm.callback()
			}
		}

		if (this.timerId === null) {
			this.timerId = setInterval(() => this.alarmCollection.forEach(element => checkClock(element)), 5000);
		}
	}

	stop() {
		if (this.timerId !== null) {
			clearInterval(1);
			this.timerId = null;
		}
	}

	printAlarms() {
		this.alarmCollection.forEach(element => console.log(`Будильник №${element.id} завыеден на ${element.time}`));
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}

let phoneAlarm = new AlarmClock;
phoneAlarm.addClock('23:21', () => console.log('Пора вставать'), 1);
phoneAlarm.addClock('23:22', () => console.log('Давай, вставай уже!'), 2);
phoneAlarm.addClock('23:23', () => console.log('Иди умыватсья'), 2);
phoneAlarm.start();
phoneAlarm.printAlarms();
console.log(phoneAlarm);
phoneAlarm.clearAlarms();
console.log(phoneAlarm);






