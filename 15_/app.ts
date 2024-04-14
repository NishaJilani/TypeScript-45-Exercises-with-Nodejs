let guestList = ["Isbah", "Maham", "Fatima", "Alishba"];

let dontCome = guestList[3];

console.log(dontCome, "is busy so she can't come.");

guestList.splice(3, 3, "Dua");

guestList.forEach(guest => console.log(`Hello ${guest}, would you like to dinner with me?`));