let current_users = ["Usman","ali","Areeba","Zain","Osama"];

let new_users = ["Hamza","Ayesha","Ali","Mahad","Areeba"];

// loop through new users to check for usernames availability
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user.toLowerCase())
    if(our_condition){
      console.log(`Sorry ${new_one_user} is already taken`)
    }else {
        console.log(`This username ${new_one_user} is available`)
    }
})