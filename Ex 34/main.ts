//Exercise 34
// Store the names of three favorite pizzas in an array
let favorite_pizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];

// Use a for loop to print the name of each pizza
console.log("Printing pizza names:");
for (let pizza of favorite_pizzas) {
    console.log(pizza);
}

// Modify the for loop to print a sentence using the name of the pizza
console.log("\nPrinting sentences about favorite pizzas:");
for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Add a line outside the for loop stating how much you like pizza
console.log("\nI really love pizza!");
