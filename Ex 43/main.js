var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var modified_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        modified_magicians.push("".concat(magician, " the Great"));
    }
    return modified_magicians;
}
// Original array of magician's names
var original_magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Call the make_great function with a copy of the original array
var great_magicians = make_great(__spreadArray([], original_magicians, true));
// Call the show_magicians function to print the original list of magicians
console.log("Original Magicians:");
show_magicians(original_magicians);
// Call the show_magicians function to print the modified list of magicians with "the Great" added
console.log("\nModified Magicians:");
show_magicians(great_magicians);
