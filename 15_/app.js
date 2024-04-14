var guestList = ["Isbah", "Maham", "Fatima", "Alishba"];
var dontCome = guestList[3];
console.log(dontCome, "is busy so she can't come.");
guestList.splice(3, 3, "Dua");
guestList.forEach(function (guest) { return console.log("Hello ".concat(guest, ", would you like to dinner with me?")); });
