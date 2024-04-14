// creating a guest list array
var guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];
// making variable for those guest who can't come
var dontCome = guestList[0];
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
var middleIndex = Math.floor(guestList.length / 2);
// add a new person in the middle
guestList.splice(middleIndex, 0, "Osama");
// print message of updated list
console.log("Updated List of our guests");
// sending invitation message to every one
guestList.forEach(function (oneGuest) { return console.log("Hey ".concat(oneGuest, ", would you like to dinner with me? ")); });
// inform that only two guests are invited for dinner
console.log("Unfortunately, the new dinner table won't arrived on time, so I can invite only two guests to dinner with me");
// using while loop to remove guest from the array until only two names remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, " I can't invite you to dinner"));
}
// printing  a invitationss to the last two guests on the list
console.log("Invitations to the last two Guests");
guestList.forEach(function (lastTwo) { return console.log("Luckily ".concat(lastTwo, ", you are still invited to the dinner")); });
// removing last two guests from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
