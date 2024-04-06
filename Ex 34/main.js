// Store the names of three favorite pizzas in an array
var favorite_pizzas = ["Pepperoni", "Margherita", "Supreme"];
// Use a for loop to print the name of each pizza
console.log("Printing pizza names:");
for (var _i = 0, favorite_pizzas_1 = favorite_pizzas; _i < favorite_pizzas_1.length; _i++) {
    var pizza = favorite_pizzas_1[_i];
    console.log(pizza);
}
// Modify the for loop to print a sentence using the name of the pizza
console.log("\nPrinting sentences about favorite pizzas:");
for (var _a = 0, favorite_pizzas_2 = favorite_pizzas; _a < favorite_pizzas_2.length; _a++) {
    var pizza = favorite_pizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
// Add a line outside the for loop stating how much you like pizza
console.log("\nI really love pizza!");
