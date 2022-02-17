let passLength
let hasLower
let hasUpper
let hasNumbers
let hasSpecChars

const passPrompt = () => {
  passLength = parseInt(prompt('How long do you want your password to be?'))
  hasLower = confirm('do you want lowercase characters?')
  hasUpper = confirm('do you want uppercase characters?')
  hasNumbers = confirm('do you want numbers?')
  hasSpecChars = confirm('do you want spec chars?')
  console.log(passLength, hasLower, hasUpper, hasNumbers, hasSpecChars)
  if(isNaN(passLength)==true || passLength < 8 || passLength > 128 ) {
    alert('your password needs to be a number between 8 and 128')
    passPrompt()
  }
}

const passGenerate = () => {

let lowerString = 'abcdefghijklmnopqrstuvwxyz'
let upperString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let numString = '0123456789'
let specString = '!@#$%^&*()'
let chosenString = ''
let password = ''

if(hasLower=== true) {
  chosenString += lowerString
}
if(hasUpper=== true) {
  chosenString += upperString
}
if(hasNumbers=== true) {
  chosenString += numString
}
if(hasSpecChars === true) {
  chosenString += specString
}
console.log(chosenString)

for (let i = 0; i < passLength; i++) {
  let randomIndex = Math.floor(Math.random() * chosenString.length)
  // console.log(randomIndex)
  let randomChar = chosenString[randomIndex]
  console.log(randomChar)
  password = password + randomChar
}
  console.log(password)
  return password
}


let tentativePassword
const passVerify = () => {
   tentativePassword = passGenerate()
   

}







document.getElementById('generate').addEventListener('click', () => {
  passPrompt()
  passVerify()
})
