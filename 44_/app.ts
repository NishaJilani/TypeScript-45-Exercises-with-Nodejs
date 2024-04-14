// define a function with a rest parameter that accepts items aurguments representing our sandwich
function makeSandwich (...items: string[]){
    console.log("Making a sandwich with the following items: \n")

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow enjoy sandwich");
}


// call the function three times with three different numbers of aurguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Mayo", "Egg", "cheese", "Chicken", "Lettuce", "Tomato");