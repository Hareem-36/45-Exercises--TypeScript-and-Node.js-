//Exercise 17
// List of people to invite to dinner
var dinnerGuests = ["Alina", "Huma", "Sara"];
// One guest can't make it, so we remove them and invite someone else
var indexOfGuest = dinnerGuests.indexOf("Huma");
if (indexOfGuest !== -1) {
    dinnerGuests.splice(indexOfGuest, 1);
    dinnerGuests.push("Ahmed"); // Invite someone else
}
// Informing people about the bigger dinner table
console.log("Great news! We found a bigger dinner table.");
// Add one new guest to the beginning of the array
dinnerGuests.unshift("Jawad");
// Add one new guest to the middle of the array
var middleIndex = Math.floor(dinnerGuests.length / 2);
dinnerGuests.splice(middleIndex, 0, "Sophia");
// Use push() to add one new guest to the end of the list
dinnerGuests.push("Laiba");
// Print invitation messages to each person
for (var _i = 0, dinnerGuests_1 = dinnerGuests; _i < dinnerGuests_1.length; _i++) {
    var guest = dinnerGuests_1[_i];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner. We would be honored to have your presence.\nBest regards,\n[Hareem Jaweid]"));
}
// Print a message saying that you can only invite two people for dinner
console.log("Sorry, we can only invite two people for dinner.");
// Remove guests from the list until only two names remain
while (dinnerGuests.length > 2) {
    var removedGuest = dinnerGuests.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print a message to each of the two people still on your list, letting them know they’re still invited
for (var _a = 0, dinnerGuests_2 = dinnerGuests; _a < dinnerGuests_2.length; _a++) {
    var guest = dinnerGuests_2[_a];
    console.log("Dear ".concat(guest, ",\nYou're still invited to dinner. See you there!\nBest regards,\n[Hareem Jaweid]"));
}
// Remove the last two names from your list
dinnerGuests.pop();
dinnerGuests.pop();
// Print your list to make sure you actually have an empty list at the end of your program
console.log("Remaining guests:", dinnerGuests);
