//Exercise 38
function describe_city(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("London", "United Kingdom");
describe_city("New York"); // Using the default country
