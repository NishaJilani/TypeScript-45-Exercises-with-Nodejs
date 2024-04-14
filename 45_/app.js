// define a function to create a car object with optional options...
function create_Car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // add additional options to the car objects
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to create a car object
var my_car = create_Car("Toyota", "Corrolla", "color : Black", "Sunroof : True");
// print the variable to insure all the information is stored correctly in the car object
console.log(my_car);
