// making a array of countries and print its original order
let countriesToVisit: string[] = ["Saudia Arabia", "Turkey", "Maldives", "Paris", "Italy"];
console.log("Original Order:", countriesToVisit);

// print the array in alphabetical order without modifying the actuall array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// show that the arrsy is still in its original order
console.log("Still in original order:", countriesToVisit);

// print the array in reverse order without modifying the actuall list
console.log("Reverse Order:", [...countriesToVisit].reverse());

// show that the arrsy is still in its original order
console.log("Still in original order:", countriesToVisit);

// we have changed the original array order now 
console.log("Original Array reversed:", countriesToVisit.reverse());

// print the array to show its back to its original order
console.log("Back to Original Order:", countriesToVisit.reverse());

// print the array to show its order has been changed in alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// we have changed again the original array order now in reversed order again 
console.log("Original Array reversed:", countriesToVisit.reverse());
