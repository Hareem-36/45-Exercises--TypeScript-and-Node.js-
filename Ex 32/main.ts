////Exercise 32
// Make a list of current users
let current_users: string[] = ["John", "Ali", "Bushra", "Asma", "Danish"];

// Make a list of new users
let new_users: string[] = ["Jaweria", "Siddiqa", "Sadia", "Sana", "John"];

// Loop through new_users list
for (let new_user of new_users) {
    // Check if the username exists in current_users (case insensitive)
    if (current_users.some(user => user.toLowerCase() === new_user.toLowerCase())) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
