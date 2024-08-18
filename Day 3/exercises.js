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


//5

// i.  4  > 3  true
// ii.  4  >= 3  true
// iii.  4  <  3  false
// iv.  4  <=  3  false
// v.  4  ==  4  true
// vi.  4  ===  4  true
// vii.  4  ===  4  true
// vii.  4  !=  4  false
// viii.  4  !==  4  false
// ix.  4  !=  '4'  false
// xi.  4  ====  '4'  false

//xii

let word1 = 'python'
let word2 = 'jargon'

console.log(word1.length !=  word2.length)  //false


//6

//i.  4 > 3 && 10 < 12        true  &&  true = true
//ii. 4 > 3 && 10 > 12        true && false =  false  
//iii. 4 > 3 || 10 < 12       true || true = true
//iv.  4 > 3 || 10 > 12       true || false = true
//v.  !(4 > 3)                false
//vi. !(4 < 3)                true
//vii. !(false)               true
//viii.  !(4 > 3 && 10 < 12)   - !(true && true) = false
//ix.  !(4 > 3 && 10 > 12)   - !(true && false) = true 
//xi. !(4 === '4')             true

//xii. There is no 'on' in both dragon and python

let word3 = 'dragon'
let word4 = 'pythonn'
console.log(word3.includes('on')) //true
console.log(word3.includes('on')) //true


//7

const dateTime = new Date()

//What is the year today?
console.log(dateTime.getFullYear())

//What is the month today as a number?
console.log(dateTime.getMonth()) //7 nnumber


//What is the date today?
console.log(dateTime.getDate()) //18 - August 18

//What is the day today as a number?
console.log(dateTime.getDay()) //0  because it's monday

//What is the hours now?
console.log(dateTime.getHours()) //16

//What is the minutes now?
console.log(dateTime.getMinutes()) //34 - 12:34am

//Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(dateTime.getTime()) //1723998930214

//exercise level 2


//1 area of the triangle

let base = prompt('Enter Base')
let height = prompt('Enter Height')

const area = 0.5 * base * height
console.log(`The area of the triangle is ${area}`)

//2  perimeter of the triangle

let sideA = Number(prompt('Enter Side A'))
let sideB = Number(prompt('Enter Side B'))
let sideC = Number(prompt('Enter Side C')) 

const perimeter = sideA + sideB +  sideC

console.log(`The perimeter of the triangle is ${perimeter}`)

//3 area of rectangle  and perimeter of rectangle

//area of rectangle

let length = Number(prompt('Enter length'))
let width = Number(prompt('Enter width'))

const areaRectagle = length * width

console.log(`The area of rectangle is ${areaRectagle}`)

//perimeter of rectangle

let length2 = Number(prompt('Enter length'))
let width2 = Number(prompt('Enter width'))

const perimeterRectangle = 2 * (length2 + width2)

console.log(`The perimeeter of rectangle is ${perimeterRectangle}`)

//4 area of circle and circumference of a circle

//area of circle 

const pi = 3.14
let radius = Number(prompt('Enter Radius'))

const areaCircle = pi * radius * radius

console.log(`The area of a circle is ${areaCircle}`)

//circumference of a circle

const pi2 = 3.14
let r = Number(prompt('Enter Radius'))

const circumference = 2 * pi2 * r

console.log(`The circumference of a circle is ${circumference}`)




















