
/*
    USER AND PASSWORD TRANSFORMATIONS
*/
// onClick, the styles of the username field will change with a transition
function onClickChangeStyleUser() {
    // Change the id "username" to usernameTransformed
    document.getElementById("username").setAttribute("class", "usernameTransformed");

}
// reset user field
function resetUser() {
    document.getElementById("username").setAttribute("class", "username");
    document.getElementById("username").setAttribute("placeholder", "Username");
}

// onClick, the styles of the username field will change with a transition
function onClickChangeStylePassword() {
        // Change the id "username" to usernameTransformed
        document.getElementById("password").setAttribute("class", "passwordTransformed");
}

// reset password field
function resetPass() {
    document.getElementById("password").setAttribute("class", "password");
    document.getElementById("password").setAttribute("placeholder", "Password");
}
