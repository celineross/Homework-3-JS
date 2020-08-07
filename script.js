var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var generateButton = document.getElementById("generate");


generateButton.addEventListener("click", function() {
    var pLength = prompt("How many characters would you like?"); 
    if (pLength < 8 || pLength > 128) {
        alert("Please enter a value between 8 and 128 characters.")
    } else {
        alert("You have chosen " + pLength + " characters. Press OK to continue.")
    }
})

/* click generate pw
prompt length of the password
    ask for length
    make sure its between 8 and 128 char
    reject if less than 8 or more than 128
confirm prompt option for lowercase
confirm prompt option for uppercase
confirm prompt option for numbers
confirm prompt option for special characters

i
*/