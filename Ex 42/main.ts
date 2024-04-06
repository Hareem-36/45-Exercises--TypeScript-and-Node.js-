//Exercise 42
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

// Array of magician's names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call the make_great function to modify the array of magicians
magicians = make_great(magicians);

// Call the show_magicians function to print the modified list of magicians
show_magicians(magicians);
