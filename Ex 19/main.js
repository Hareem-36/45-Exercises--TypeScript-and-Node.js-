//Exercise 14 code
// List of people to invite to dinner
var dinnerGuests = ["Alina", "Huma", "Sara"];
// Print invitation messages to each person
for (var _i = 0, dinnerGuests_1 = dinnerGuests; _i < dinnerGuests_1.length; _i++) {
    var guest = dinnerGuests_1[_i];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner. We would be honored to have your presence.\nBest regards,\n[Hareem Jaweid]"));
}
//Exercise 19 - Dinner guests
// List of people to invite to dinner
var dinnerGuestsTotal = ["Alina", "Huma", "Sara"];
// Print invitation messages to each person
for (var _a = 0, dinnerGuestsTotal_1 = dinnerGuestsTotal; _a < dinnerGuestsTotal_1.length; _a++) {
    var guest = dinnerGuestsTotal_1[_a];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner. We would be honored to have your presence.\nBest regards,\n[Hareem Jaweid]"));
}
// Print a message indicating the number of people invited to dinner
console.log("Number of people invited to dinner: ".concat(dinnerGuestsTotal.length));
