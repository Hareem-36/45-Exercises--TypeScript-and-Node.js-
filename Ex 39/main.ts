//Exercise 39
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with at least three city-country pairs
let location1 = city_country("Lahore", "Pakistan");
let location2 = city_country("Tokyo", "Japan");
let location3 = city_country("Paris", "France");

console.log(location1);
console.log(location2);
console.log(location3);
