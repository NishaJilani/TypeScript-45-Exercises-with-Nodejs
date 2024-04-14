var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making a array of countries and print its original order
var countriesToVisit = ["Saudia Arabia", "Turkey", "Maldives", "Paris", "Italy"];
console.log("Original Order:", countriesToVisit);
// print the array in alphabetical order without modifying the actuall array list
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// show that the arrsy is still in its original order
console.log("Still in original order:", countriesToVisit);
// print the array in reverse order without modifying the actuall list
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
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
