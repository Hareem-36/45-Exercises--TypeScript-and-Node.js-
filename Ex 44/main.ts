//Exercise 44
function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function three times with different numbers of arguments
make_sandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
make_sandwich("Chicken", "Cheese");
make_sandwich("Peanut Butter", "Jelly");
