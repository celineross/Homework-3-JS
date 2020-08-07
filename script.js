//reference generate and password IDs from html
var generateButton = document.getElementById("generate");
var passwordDisplay = document.getElementById("password")

//run function on click
generateButton.addEventListener("click", generatePassword);

//function to generate the password
function generatePassword() {

    //convert pLength to a numerical variable
    var pLength = parseInt(prompt("How many characters would you like?"));

    //establish min/max for password length
    if (pLength < 8 || pLength > 128) {
        alert("Please enter a value between 8 and 128 characters.");
        return;
    }

    //confirm prompts for including different character classes
    var lowercase = confirm("Would you like to include lowercase letters?");
    var uppercase = confirm("Would you like to include uppercase letters?");
    var numbers = confirm("Would you like to include numbers?");
    var special = confirm("Would you like to include special characters?");

    //if nothing selected, alert at least one class must be selected
    if (!(lowercase || uppercase || numbers || special)) {
        alert("Must select at least one character class.");
        return;
    }

    //variables for password and compiled options for characters
    var password = "";
    var options = "";

    //adds lowercase characters to the password
    if (lowercase) {
        var lowercaseVals = "abcdefghijklmnopqrstuvwxyz";
        options += lowercaseVals;
        //ensures at least one lowercase character is in the password
        password += getRandomChar(lowercaseVals);
    }

    //adds uppercase characters to the password
    if (uppercase) {
        var uppercaseVals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        options += uppercaseVals;
        //ensures at least one uppercase character is in the password
        password += getRandomChar(uppercaseVals);
    }

    //adds numbers to the password
    if (numbers) {
        var numbersVals = "1234567890";
        options += numbersVals;
        //ensures at least one number is in the password
        password += getRandomChar(numbersVals);
    }

    //adds special characters to the password
    if (special) {
        var specialVals = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        options += specialVals
        //ensures at least one special character is in the password
        password += getRandomChar(specialVals)
    }

    console.log(options);

    for (var i = password.length; i < pLength; i++) {
        // var randomIndex = Math.random()
        // randomIndex *= options.length
        // randomIndex = Math.floor(randomIndex)
        // password += options[randomIndex]

        password += getRandomChar(options)
    }

    passwordDisplay.textContent = password
}

// var string = options
function getRandomChar(string) {
    return string[Math.floor(Math.random() * string.length)]
}


//JSDOC
/**
 * 
 * @param {Number} x first number
 * @param {Number} y second number
 * @returns {Number} x and y added together
 */
function Add(x, y) {
    console.log("hello")
    return x + y;
}
//var sum = Add(4, 6)

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