// Make a list of current users
var current_users = ["John", "Ali", "Bushra", "Asma", "Danish"];
// Make a list of new users
var new_users = ["Jaweria", "Siddiqa", "Sadia", "Sana", "John"];
var _loop_1 = function (new_user) {
    // Check if the username exists in current_users (case insensitive)
    if (current_users.some(function (user) { return user.toLowerCase() === new_user.toLowerCase(); })) {
        console.log("Sorry, the username '".concat(new_user, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_user, "' is available."));
    }
};
// Loop through new_users list
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
