//Exercise 15
// List of people to invite to dinner
let dinnerGuests: string[] = ["Alina", "Huma", "Sara"];

// One guest can't make it, so we remove them and invite someone else
let indexOfGuest: number = dinnerGuests.indexOf("Huma");
if (indexOfGuest !== -1) {
    dinnerGuests.splice(indexOfGuest, 1); 
    dinnerGuests.push("Ahmed"); // Invite someone else
}

// Print invitation messages to each person
for (let guest of dinnerGuests) {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner. We would be honored to have your presence.\nBest regards,\n[Hareem Jaweid]`);
}
