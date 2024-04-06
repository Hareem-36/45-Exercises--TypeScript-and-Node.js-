//Exercise 45
function car_info(manufacturer: string, model: string, ...details: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    let car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };
    for (let detail of details) {
        for (let key in detail) {
            car[key] = detail[key];
        }
    }
    return car;
}

// Call the function with required information and additional details
let car = car_info("Toyota", "Corolla",{color: "Black", year: 2022});
// Print the object returned by the function
console.log(car);
