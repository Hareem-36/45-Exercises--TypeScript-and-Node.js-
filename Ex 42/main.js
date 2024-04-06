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
// Array of magician's names
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Call the make_great function to modify the array of magicians
magicians = make_great(magicians);
// Call the show_magicians function to print the modified list of magicians
show_magicians(magicians);
