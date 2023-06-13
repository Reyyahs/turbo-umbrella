// Assignment code here
function generatePassword() {
  var numericCharacters = "0123456789";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!@#$%^&*()_[]{}<>?/";
  var possibleCharacters = "";
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