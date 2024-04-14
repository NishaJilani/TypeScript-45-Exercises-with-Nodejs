// define a function with a rest parameter that accepts items aurguments representing our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow enjoy sandwich");
}
// call the function three times with three different numbers of aurguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Mayo", "Egg", "cheese", "Chicken", "Lettuce", "Tomato");
