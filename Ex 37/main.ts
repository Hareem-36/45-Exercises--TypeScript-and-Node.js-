//Exercise 37
function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`Shirt size: ${size}, Message: "${message}"`);
}

// Call the function to create a large shirt with the default message
make_shirt();

// Call the function to create a medium shirt with the default message
make_shirt("Medium");

// Call the function to create a shirt of any size with a different message
make_shirt("Small", "Hello, world!");
