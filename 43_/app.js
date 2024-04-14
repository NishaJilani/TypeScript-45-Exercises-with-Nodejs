function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Harry Potter", "Hamza", "Usman"];
// making a copy of original array through .Slice() function
var copy_magician_names = magician_names.slice();
// modify the copied array to include the great with their names
var copy_great_magicians = make_great(copy_magician_names);
// show both arrays original and copied
// original
show_magicians(magician_names);
// copied
show_magicians(copy_great_magicians);
