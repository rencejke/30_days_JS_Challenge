//make readable date using date objects

const now = new Date()
const year = now.getFullYear()
const month =  now.getMonth()
const date =  now.getDate()
const hours =  now.getHours()
const minutes =  now.getMinutes()

console.log(`The date  today is ${month}/${date}/${year} and the time is ${hours}:${minutes}`)


//2

let firstName = 'Clarence'
let lastName =  'Bonilla'
let country = 'Philippines'
let city = 'San Pablo'
let age = 22
let isMarried = false
let years  = 2024

console.log(typeof firstName)  //string
console.log(typeof lastName)  //string
console.log(typeof country)  //string
console.log(typeof city)  //string
console.log(typeof age)  //number
console.log(typeof isMarried)  //boolean
console.log(typeof years)  //number

//3

let check = typeof '10'
check === typeof 10 ? console.log('true') : console.log('false') //false

let check2 = parseInt(9.8)
console.log(check2 === 10) //false

//4

//truthy value

let isGraduate = true

console.log(5 > 4) //true
console.log(5 === 5) //true
console.log(isGraduate) //true

//falsy  value

let working
let isDoneWriting = false
let empty = ''

console.log(working)  //undefined - falsy value
console.log(isDoneWriting)  
empty ? console.log('true') : console.log('false')  //false







