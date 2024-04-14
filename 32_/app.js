var current_users = ["Usman", "ali", "Areeba", "Zain", "Osama"];
var new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"];
// loop through new users to check for usernames availability
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
