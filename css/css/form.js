function validation(){

    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var confirmpass = document.getElementById('conpass').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var emails = document.getElementById('emails').value;





    if(user == ""){
        document.getElementById('username').innerHTML =" ** Please fill the username field";
        return false;
    }
    if((user.length <= 2) || (user.length > 20)) {
        document.getElementById('username').innerHTML =" ** Username lenght must be between 2 and 20";
        return false;	
    }
    if(!isNaN(user)){
        document.getElementById('username').innerHTML =" ** only characters are allowed";
        return false;
    }







    if(pass == ""){
        document.getElementById('passwords').innerHTML =" ** Please fill the password field";
        
        return false;
    }
    if((pass.length <= 5) || (pass.length > 20)) {
        document.getElementById('passwords').innerHTML =" ** Passwords lenght must  contain atleast 8 characters,atleast one uppercase and one lowercase,must contain atleast one number";
        return false;	
    }


    if(pass!=confirmpass){
        document.getElementById('confrmpass').innerHTML =" ** Password does not match the confirm password";
        return false;
    }



    if(confirmpass == ""){
        document.getElementById('confrmpass').innerHTML =" ** Please fill the confirmpassword field";
        return false;
    }




    if(mobileNumber == ""){
        document.getElementById('mobileno').innerHTML =" ** Please fill the mobile Number field";
        return false;
    }
    if(isNaN(mobileNumber)){
        document.getElementById('mobileno').innerHTML =" ** user must write digits only not characters";
        return false;
    }
    if(mobileNumber.length!=10){
        document.getElementById('mobileno').innerHTML =" ** Mobile Number must be 10 digits";
        return false;
    }



    if(emails == ""){
        document.getElementById('emailids').innerHTML =" ** Please fill the email id field";
        return false;
    }
    if(emails.indexOf('@') <= 0 ){
        document.getElementById('emailids').innerHTML =" ** @ Invalid Position";
        return false;
    }

    if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
        document.getElementById('emailids').innerHTML =" ** . Invalid Position";
        return false;
    }
}
// login form validation 
function validate(){

    var emails = document.getElementById("emails").value;
    var pwd = document.getElementById("pwd").value;
    if(emails == ""){
        document.getElementById("username").innerHTML =" ** Please fill the username field";
        return false;
    }
    if((emails.length <= 2) || (emails.length > 20)) {
        document.getElementById("username").innerHTML =" ** Username lenght must be between 2 and 20";
        return false;	
    }
    if(!isNaN(emails)){
        document.getElementById("username").innerHTML =" ** only characters are allowed";
        return false;
    }







    if(pwd == ""){
        document.getElementById("password").innerHTML =" ** Please fill the password field";
        
        return false;
    }
    if((pwd.length <= 5) || (pwd.length > 20)) {
        document.getElementById("password").innerHTML =" ** Passwords lenght must be between  5 and 20";
        return false;	
    }

}


// password strength bar 

function CheckPasswordStrength(password) {
    var password_strength = document.getElementById("password_strength");

    //TextBox left blank.
    if (password.length == 0) {
        password_strength.innerHTML = "";
        return;
    }

    //Regular Expressions.
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    regex.push("[$@$!%*#?&]"); //Special Character.

    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(password)) {
            passed++;
        }
    }
    //Validate for length of Password.
    if (passed > 2 && password.length > 8) {
        passed++;
    }

    //Display status.
    var color = "";
    var strength = "";
    switch (passed) {
        case 0:
        case 1:
            strength = "Weak";
            color = "red";
            break;
        case 2:
            strength = "Good";
            color = "darkorange";
            break;
        case 3:
        case 4:
            strength = "Strong";
            color = "green";
            break;
        case 5:
            strength = "Very Strong";
            color = "darkgreen";
            break;
    }
    password_strength.innerHTML = strength;
    password_strength.style.color = color;
}



  