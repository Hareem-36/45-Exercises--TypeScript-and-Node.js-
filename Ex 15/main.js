// List of people to invite to dinner
var dinnerGuests = ["Alina", "Huma", "Sara"];
// One guest can't make it, so we remove them and invite someone else
var indexOfGuest = dinnerGuests.indexOf("Huma");
if (indexOfGuest !== -1) {
    dinnerGuests.splice(indexOfGuest, 1);
    dinnerGuests.push("Ahmed"); // Invite someone else
}
// Print invitation messages to each person
for (var _i = 0, dinnerGuests_1 = dinnerGuests; _i < dinnerGuests_1.length; _i++) {
    var guest = dinnerGuests_1[_i];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner. We would be honored to have your presence.\nBest regards,\n[Hareem Jaweid]"));
}
