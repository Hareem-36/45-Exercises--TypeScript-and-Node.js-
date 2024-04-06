function car_info(manufacturer, model) {
    var details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        details[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, details_1 = details; _a < details_1.length; _a++) {
        var detail = details_1[_a];
        for (var key in detail) {
            car[key] = detail[key];
        }
    }
    return car;
}
// Call the function with required information and additional details
var car = car_info("Toyota", "Corolla", { color: "Black", year: 2022 });
// Print the object returned by the function
console.log(car);
