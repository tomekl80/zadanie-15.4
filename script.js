'use strict';

// Zadanie 1

const greeting = 'Hello';
const greet = 'World';

function seyHello() {
	console.log(`${greeting} ${greet}!`);
};



// Zadanie 2
const multiply = (a, b = 1) => a * b;

consol.log(multiply(2, 5));



// Zadanie 3
const average = (...numbers) => numbers.reduce((prev, curr) => prev + curr) / numbers.length;

console.log(average(1, 3, 6, 6));



// Zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));



// Zadanie 5
const names = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = names;

console.log(`${firstName} ${lastName}`);