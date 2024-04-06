//Exercise 24
// Tests for equality and inequality with strings
var string1 = 'apple';
var string2 = 'banana';
console.log("Is string1 == string2? I predict False.");
console.log(string1 == string2); // False
var string3 = 'apple';
var string4 = 'apple';
console.log("Is string3 === string4? I predict True.");
console.log(string3 === string4); // True
// Tests using the lower case function
var string5 = 'HELLO';
var string6 = 'hello';
console.log("Is string5.toLowerCase() === string6? I predict True.");
console.log(string5.toLowerCase() === string6); // True
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 5;
var num2 = 10;
console.log("Is num1 !== num2? I predict True.");
console.log(num1 !== num2); // True
console.log("Is num1 < num2? I predict True.");
console.log(num1 < num2); // True
console.log("Is num1 >= num2? I predict False.");
console.log(num1 >= num2); // False
console.log("Is num1 <= num2? I predict True.");
console.log(num1 <= num2); // True
// Tests using "and" and "or" operators
var isMorning = true;
var isWeekend = false;
console.log("Is it morning and not the weekend? I predict True.");
console.log(isMorning && !isWeekend); // True
var hasCoffee = false;
console.log("Is it morning or the person has coffee? I predict True.");
console.log(isMorning || hasCoffee); // True
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
var isBananaInFruits = false;
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    if (fruit === 'banana') {
        isBananaInFruits = true;
        break;
    }
}
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(isBananaInFruits); // True
// Test whether an item is not in an array
var animals = ['cat', 'dog', 'rabbit'];
var isElephantNotInAnimals = true;
for (var _a = 0, animals_1 = animals; _a < animals_1.length; _a++) {
    var animal = animals_1[_a];
    if (animal === 'elephant') {
        isElephantNotInAnimals = false;
        break;
    }
}
console.log("Is 'elephant' not in the animals array? I predict True.");
console.log(isElephantNotInAnimals); // True
