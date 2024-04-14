function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

let magician_names = ["Harry Potter", "Hamza", "Usman"];

// making a copy of original array through .Slice() function

let copy_magician_names = magician_names.slice()

// modify the copied array to include the great with their names
let copy_great_magicians = make_great(copy_magician_names);

// show both arrays original and copied

// original
show_magicians(magician_names);

// copied
show_magicians(copy_great_magicians);