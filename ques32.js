let current_users = ["Abdullah", "wajih", "mustufa", "humayun", "ali"];
let new_users = ["ali", "humayun", "ammar", "moeed", "danish"];
for (let i = 0; i < new_users.length; i++) {
    let usernameExists = false;
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log(`Username '${new_users[i]}' is not available. Please choose a different username.`);
    }
    else {
        console.log(`Username '${new_users[i]}' is available.`);
    }
}
export {};
