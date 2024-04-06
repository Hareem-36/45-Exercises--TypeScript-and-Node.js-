//Exercise 43
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let modified_magicians: string[] = [];
    for (let magician of magicians) {
        modified_magicians.push(`${magician} the Great`);
    }
    return modified_magicians;
}

// Original array of magician's names
let original_magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call the make_great function with a copy of the original array
let great_magicians: string[] = make_great([...original_magicians]);

// Call the show_magicians function to print the original list of magicians
console.log("Original Magicians:");
show_magicians(original_magicians);

// Call the show_magicians function to print the modified list of magicians with "the Great" added
console.log("\nModified Magicians:");
show_magicians(great_magicians);
