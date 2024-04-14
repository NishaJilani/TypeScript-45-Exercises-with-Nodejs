// creating a guest list array
let guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];

// making variable for those guest who can't come
let dontCome = guestList[0];

// printing the name of guest who can't come
console.log(dontCome, " isn't come :( ");

// add or remove person
guestList.splice(0, 1, "Amir");

// creating new message
console.log("Good News! we have found a bigger table for dinner");

// add a person at beginning
guestList.unshift("Ali");

// add a new person in the end
guestList.push("Zain");

// get a middle index
let middleIndex: number = Math.floor(guestList.length / 2);

// add a new person in the middle
guestList.splice(middleIndex, 0, "Osama");

// print message of updated list
console.log("Updated List of our guests");

// sending invitation message to every one
guestList.forEach(oneGuest => console.log(`Hey ${oneGuest}, would you like to dinner with me? `));