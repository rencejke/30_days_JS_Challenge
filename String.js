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

// 3.toUpperCase()

let stringToUpperCase = 'JavaScript'

console.log(stringToUpperCase.toUpperCase()) //JAVASCRIPT

// 4.toLowerCase()

let stringToLowerCase = 'JavaScript'

console.log(stringToLowerCase.toLowerCase()) //javascript

// 5. substr()

let character = 'Changli'
let characterSlice = character.substr(4, 3) //gli - starting is g and we will count 3 times to the right
console.log(character.substr(4, 3))
console.log(characterSlice) 

// 6. substring()

let language2 = 'Javascript'
let substring = language2.substring(0, 4) //Java

console.log(substring)

// 7. split()

let text = '30 Days Of JavaScript'
let name = 'Asabeneh'

let splitText = text.split() //changes string to an array [ '30 Days Of JavaScript' ]
let splitBySpace = text.split(' ')  //changes string to an array at space ["30", "Days", "Of", "Javascript"]
let splitByLetter = name.split('')  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

console.log(splitText)
console.log(splitBySpace)
console.log(splitByLetter)


// 8. trim()  Removes trailing space in the beginning or the end of a string.

let text2 = '30 Days Of JavaScript'

console.log(string)
console.log(string.trim(' '))
console.log(string.trim()) // still removes spaces at the beginning and the end of the string

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // split to any array at comma ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]


// 9. includes() check if the substring argument exists in the string.

let string3 = '30 Days Of JavaScript'

console.log(string3.includes('Days')) // true
console.log(string3.includes('days')) // false - it is case sensitive!

//10  replace(): takes as a parameter the old substring and a new substring.

let string4 = '30 Days Of JavaScript'
console.log(string4.replace('JavaScript', 'Python')) // 30 Days Of Python

// 11 charAt(): Takes index and it returns the value at that index
// string.charAt(index)

let string5 = '30 Days Of JavaScript'
console.log(string5.charAt(0))        // 3

// 12 charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index

let string6 = '30 Days Of JavaScript'
console.log(string6.charCodeAt(3))        // D ASCII number is 68

// 13 indexOf() check if the substring exist in a string it returns the first position of the substring if does not exist it returns -1

let string7 = '30 Days Of JavaScript'

console.log(string7.indexOf('D'))          // 3
console.log(string7.indexOf('Days'))       // 3
console.log(string7.indexOf('days'))       // -1

// 14. lastIndexOf() - lastIndexOf is the opposite of indexOf but it also return - 1 if the substring does not exist

let string8 = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string8.lastIndexOf('love')) // 67
console.log(string8.lastIndexOf('you'))  // 63


// 15. concat() it takes many strings and join them

let string9 = '30'
console.log(string9.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

// 16. startsWith() check a substring and check if the string starts with the specific substring

let string10 = 'Love is the best to in this world'

console.log(string10.startsWith('Love'))   // true
console.log(string10.startsWith('love'))   // false - case sensitive

// 17. endsWith()  check a substring and check if the string ens with the specific substring

let string11 = 'Love is the most powerful feeling in the world'

console.log(string11.endsWith('world')) // true
console.log(string11.endsWith('World')) // false
console.log(string11.endsWith('love')) // false

// 18. search()  check a substring and check if the string ens with the specific substring
let string12 = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string12.search('love'))          // 2
console.log(string12.search(/javascript/gi))  // 7

//19. match()

//20. repeat() takes number as a argument then it returns the repeated version

let string13 = 'love'
console.log(string13.repeat(10)) // lovelovelovelovelovelovelovelovelovelove


//string to int

/*we can convert string to int by
using parseInt(), Number(), or + sign
*/
let num = '10'
let numInt = parseInt(num)
let numInt2 = Number(num)
let numInt3 = +num

console.log(numInt)
console.log(numInt2)
console.log(numInt3)

//string to float

let numFlt = '10'
let numFloat = parseFloat(numFlt)
let numFloat2 = Number(numFlt)
let numFloat3 = +numFlt

console.log(numFloat)
console.log(numFloat2)
console.log(numFloat3)

//float to int

let numFltToInt = 1.43
let fltToInt = parseInt(numFltToInt)
console.log(fltToInt) // 1

