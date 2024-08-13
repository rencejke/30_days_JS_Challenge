let challenge = '30 Days Of JavaScript'

console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(3,4))
console.log(challenge.substr(3, 18))
console.log(challenge.includes('Script'))
console.log(challenge.split(''))
console.log(challenge.split(' '))

let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 

console.log(company.split(','))

let change = challenge.replace('Javascript', 'Python')
console.log(change)

let checkIndex  = '30 Days Of JavaScript'
console.log(checkIndex.charAt(15)) //S 
console.log(checkIndex.charCodeAt('J')) //51
 

let text = '30 Days Of JavaScript'

console.log(text.indexOf('a')) //4
 

let sentence = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.indexOf('because')) //31
console.log(sentence.lastIndexOf('because')) //47
console.log(sentence.search('because')) //31

let removeSpace = ' 30 Days Of JavaScript '

console.log(removeSpace.trim())

let checkStart = '30 Days Of JavaScript'
let checkEnd = '30 Days Of JavaScript'

console.log(checkStart.startsWith('30'))
console.log(checkEnd.endsWith('JavaScript'))


//match

let findMatch = '30 Days Of JavaScript'

console.log(findMatch.match('/a/gi'))

console.log(findMatch.repeat(2))


let stringConcat = '30 Days Of'

console.log(stringConcat.concat(' JavaScript'))


let challengeText = 'You cannot end a sentence with because because because is a conjunction'

let getSubstring = challengeText.substr(31, 23)

let sliceString = getSubstring.slice()

console.log(sliceString)