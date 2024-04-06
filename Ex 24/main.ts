//Exercise 24
// Tests for equality and inequality with strings
let string1 = 'apple';
let string2 = 'banana';
console.log("Is string1 == string2? I predict False.");
console.log(string1 == string2); // False

let string3 = 'apple';
let string4 = 'apple';
console.log("Is string3 === string4? I predict True.");
console.log(string3 === string4); // True

// Tests using the lower case function
let string5 = 'HELLO';
let string6 = 'hello';
console.log("Is string5.toLowerCase() === string6? I predict True.");
console.log(string5.toLowerCase() === string6); // True

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 5;
let num2 = 10;
console.log("Is num1 !== num2? I predict True.");
console.log(num1 !== num2); // True

console.log("Is num1 < num2? I predict True.");
console.log(num1 < num2); // True

console.log("Is num1 >= num2? I predict False.");
console.log(num1 >= num2); // False

console.log("Is num1 <= num2? I predict True.");
console.log(num1 <= num2); // True

// Tests using "and" and "or" operators
let isMorning = true;
let isWeekend = false;
console.log("Is it morning and not the weekend? I predict True.");
console.log(isMorning && !isWeekend); // True

let hasCoffee = false;
console.log("Is it morning or the person has coffee? I predict True.");
console.log(isMorning || hasCoffee); // True

// Test whether an item is in an array
let fruits = ['apple', 'banana', 'orange'];
let isBananaInFruits = false;
for (let fruit of fruits) {
    if (fruit === 'banana') {
        isBananaInFruits = true;
        break;
    }
}
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(isBananaInFruits); // True

// Test whether an item is not in an array
let animals = ['cat', 'dog', 'rabbit'];
let isElephantNotInAnimals = true;
for (let animal of animals) {
    if (animal === 'elephant') {
        isElephantNotInAnimals = false;
        break;
    }
}
console.log("Is 'elephant' not in the animals array? I predict True.");
console.log(isElephantNotInAnimals); // True


