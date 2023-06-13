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
  //allows the user to choose if they want characters,numbers, or special characters
  var hasLowercase = confirm("Do you want lowercase characters?");
  if (hasLowercase) {
    possibleCharacters += lowercaseCharacters;
  }
  
  var hasUppercase = confirm("Do you want uppercase characters?");
  if (hasUppercase) {
    possibleCharacters += uppercaseCharacters;
  }
  
  var hasNumbers = confirm("Do you want to use numbers?");
  if (hasNumbers) {
    possibleCharacters += numericCharacters;
  }
  
  var hasSpecial = confirm("Do you want special characters?");
  if (hasSpecial) {
    possibleCharacters += specialCharacters;
  }
//if none of the characters are selected, and if so, it prompts the user to select at least one character type by returning a specific error message.
  if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
    return "Please select at least one character type.";
  }
//added code to generate the password
  var password = "";
  for (var i = 0; i < numberOfCharacters; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters.charAt(randomIndex);
  }
  //code returns the value stored in the 'password' var
  return password;

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
