// define a function to create a car object with optional options...
function create_Car(manufacturer, model, ...options){
       let car = {
          manufacturer: manufacturer,
          model: model
       };

    // add additional options to the car objects
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    
    return car;
}


// call the function to create a car object
let my_car = create_Car("Toyota", "Corrolla", "color : Black", "Sunroof : True");

// print the variable to insure all the information is stored correctly in the car object
console.log(my_car);