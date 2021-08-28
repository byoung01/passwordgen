var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numeric = "0123456789";
var special = "!@#$%^&*()_+";

function getRandom(str) {
  var randomIndex = Math.floor(Math.random() * str.length);
  return str[randomIndex];
  //using this function to grab a random element from a passed in string, function than returns the random elements index (for lowercase[1] = "b")
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  var length = prompt("How long would you like your password to be?");
  if (length < 8 || length > 128) {
    //using the length given from the user in the prompt we compare it to 8 and 128 to make sure its within the num range
    alert("Your password must be between 8 and 128");
    return "";
  }
  //using confirm the user decides what the password consists of
  var useLowercase = confirm("Would you like to use lower case characters?");
  var useUppercase = confirm("Would you like to use upper case characters?");
  var useNumeric = confirm("Would you like to use numeric characters?");
  var useSpecial = confirm("Would you like to use special characters?");
  var random = ""; // this will be the completed password

  //for loop loops through each if statement until it hits the length designated by the user
  for (var i = 0; i < [length]; i++) {
    if (useLowercase) {
      //using += we concatante our var """ with the variable given in the getrandom function, and by concatenating to the var""" we dont overwrite var"" with a new variable each time.
      random += getRandom(lowercase);
    }
    if (useUppercase) {
      random += getRandom(uppercase);
    }
    if (useNumeric) {
      random += getRandom(numeric);
    }
    if (useSpecial) {
      random += getRandom(special);
    }
  }

  // `return` that password
  return random.substr(0, length);
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
