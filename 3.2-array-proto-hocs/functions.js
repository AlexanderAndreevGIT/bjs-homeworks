'use strict';

console.clear();

// Задача 1

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
	return weapons.map(item => item.name);
}

function getCountReliableWeapons(reliability) {
	return weapons.filter(item => item.durability > reliability).length;
}

function hasReliableWeapons(reliability) {
	return weapons.some(item => item.durability > reliability);
}

function getReliableWeaponsNames(reliability) {
	return (weapons.filter(item => item.durability > reliability)).map(item => item.name)
}

function getTotalDamage() {
	return weapons.reduce((totalDemage, weapons, index) => {
		return totalDemage + weapons.attack;
	},0);
}

// Задача 2

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	} else {
	return arr1.every((element, index) => {
		return element === arr2[index];
	})
	}
}

function memorize(fn, limit) {
	let memory = [];
	let returnFunction = (...args) => {
		const memorySearch = (memory.find(item => compareArrays(item.args, args)));
		if (memorySearch !== undefined) {
			console.log('результат берётся из памяти');
			return memorySearch.result;
		} else {
			const calc = fn(...args);
			console.log('функция вызвана не из памяти');
			if (memory.length >= limit) {
				memory.shift();
			}
			memory.push({
				args: args,
				result: calc,
			})
			return calc;
		}
	}
		return returnFunction;
}