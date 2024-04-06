function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Shirt size: ".concat(size, ", Message: \"").concat(message, "\""));
}
// Call the function to create a large shirt with the default message
make_shirt();
// Call the function to create a medium shirt with the default message
make_shirt("Medium");
// Call the function to create a shirt of any size with a different message
make_shirt("Small", "Hello, world!");
