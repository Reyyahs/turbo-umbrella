function generatePassword() {
  var numericCharacters = "0123456789";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var specialCharacters = "!@#$%^&*()_[]{}<>?/";
  var possibleCharacters = "";
//use to validate and ensure that the user enters a valid length for the password
  var numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128 || isNaN(numberOfCharacters)) {
    return "Choose a valid number of characters.";
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
