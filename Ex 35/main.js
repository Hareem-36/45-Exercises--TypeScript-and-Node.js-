// Array storing names of animals with a common characteristic
var animalsType = ["Dog", "Cat", "Rabbit"];
// Print the name of each animal using a for loop
console.log("Printing animal names:");
for (var i = 0; i < animalsType.length; i++) {
    console.log(animalsType[i]);
}
// Print a statement about each animal
console.log("\nDescribing animals:");
for (var i = 0; i < animalsType.length; i++) { // corrected array name from 'animals' to 'animalsType'
    console.log("A ".concat(animalsType[i], " would make a great pet."));
}
// Print a statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");
