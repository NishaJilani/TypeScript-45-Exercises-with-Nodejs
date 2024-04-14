// making a function
function make_shirt (size: string = "Large", printMessage: string = "I love TypeScript"){
     console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// calling a function
make_shirt();

// calling a function now with medium size and defaULT message
make_shirt("Medium")

// calling a function with any type and different message
make_shirt("small", "I like Programming")