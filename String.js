//concatenation

let space = ' '
let firstName = 'Clarence Jake'
let lastName = 'Bonilla'
let country = 'Philippines'
let city = 'San Pablo'
let language = 'JavaScript'
let job = 'Programmer'
let age = 22

let fullName = firstName + space + lastName

let personalInfo = "Hello. I am " + firstName + " Bonilla. " + "I am " + age + " years old." +  " I lived in " + city + " " + country + ". My favorite programming language is " + language

console.log(personalInfo)


//String Methods

// 1.length
let string = 'JavaScript'
console.log(string.length) //10

//2.Accessing part of the string
let firstLetter = string[0]
console.log(firstLetter)
console.log(string[0])


let secondLetter = string[1]
console.log(secondLetter)
console.log(string[1])

let lastLetter = string.length - 1 //9
console.log(string[lastLetter])

// 3.toUpperCase

let stringToUpperCase = 'JavaScript'

console.log(stringToUpperCase.toUpperCase()) //JAVASCRIPT

// 4.toLowerCase

let stringToLowerCase = 'JavaScript'

console.log(stringToLowerCase.toLowerCase()) //javascript

// 5. substr()

let character = 'Changli'
let characterSlice = character.substr(4, 3) //gli - starting is g and we will count 3 times to the right
console.log(character.substr(4, 3))
console.log(characterSlice) 

