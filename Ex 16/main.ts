//Exercise 16
// List of people to invite to dinner
let dinnerGuests: string[] = ["Alina", "Huma", "Sara"];

// One guest can't make it, so we remove them and invite someone else
let indexOfGuest: number = dinnerGuests.indexOf("Huma");
if (indexOfGuest !== -1) {
    dinnerGuests.splice(indexOfGuest, 1); 
    dinnerGuests.push("Ahmed"); // Invite someone else
}

// Informing people about the bigger dinner table
console.log("Great news! We found a bigger dinner table.");

// Add one new guest to the beginning of the array
dinnerGuests.unshift("Jawad");

// Add one new guest to the middle of the array
let middleIndex: number = Math.floor(dinnerGuests.length / 2);
dinnerGuests.splice(middleIndex, 0, "Sophia");

// Use push() to add one new guest to the end of the list
dinnerGuests.push("Laiba");

// Print invitation messages to each person
for (let guest of dinnerGuests) {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner. We would be honored to have your presence.\nBest regards,\n[Hareem Jaweid]`);
}
