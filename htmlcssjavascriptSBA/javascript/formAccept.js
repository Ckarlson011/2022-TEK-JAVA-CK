function loginAccept() {
    //name="signinForm"
    //name="username"
    //name="password"
    let username = document.forms['signinForm']['username'].value;
    let password = document.forms['signinForm']['password'].value;
    let entries = [username,password];
    for (i = 0; i < 2; i++) {
        if (entries[i] == "")
        alert("required field left blank");
        return;
    }
    
}

function signupAccept() {
    //name="signupForm"
    //name="firstname"
    //name="lastname"
    //name="username"
    //name="password"
    //name="passwordConfirm"
    let firstName = document.forms['signupForm']['firstname'].value;
    let lastName = document.forms['signupForm']['lastname'].value;
    let username = document.forms['signupForm']['username'].value;
    let password = document.forms['signupForm']['password'].value;
    let passwordConfirm = document.forms['signupForm']['passwordConfirm'].value;
    let adminSelect = document.forms['signupForm']['adminSelect'].value;
    let entries=[firstName,lastName,username,password,passwordConfirm];
    for (i=1; i<5; i++) {
        if (entries[i] == "") {
            alert("required field left blank");
            return;
        }
    }
    if (password != passwordConfirm) {
        alert("passwords do not match");
        return;
    }
    if (password.length < 8) {
        alert("password must be at least 8 characters long");
        return;
    }
}