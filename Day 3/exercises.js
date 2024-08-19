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


//Calculate the slope, x-intercept and y-intercept of y = 2x -2

const m = 2 //slope
const b = -2 //y intercept

const slope = m;
const yIntercept = b;

//compute x-intercept
const xIntercept = -b / m 

console.log(`Slope: ${slope}`) //2
console.log(`Y-Intercept: ${yIntercept}`) //-2
console.log(`Y-Intercept: ${xIntercept}`) //1


//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

const x1 = 2
const y1 = 2

const x2 = 6
const y2 = 10

const computeSlope = (y2 -y1) / (x2 - x1)

console.log(computeSlope)


//compare two slopes above

slope === computeSlope ? console.log(true) : console.log(false) //true


//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

let numX = -3

let conputeY = y = (numX ** 2) + (6 * numX)  + 9 

console.log(conputeY) //0


//9

//calculate rate per hour
let hoursNow = Number(prompt('Enter hours'))
let ratePerHour = Number(prompt('Enter rate per hour'))

let pay = hoursNow * ratePerHour

console.log(pay)

//10

//check your name length is lomg or short
let first_Name = 'Clarence'

first_Name.length > 7 ? console.log(`your name is long`) : (' your name is short') //your name is long


//11 
let firstName2 = 'Clarence'
let lastName2 = 'Bonilla'

firstName2.length > lastName2.length ? console.log(`Your first name, ${firstName2} is longer than your family name, ${lastName2}`) 
: console.log(`Your first name, ${firstName2} is shorter than your family name, ${lastName2}`) //Your first name, Clarence is longer than your family name, Bonilla

//12

let myAge = 23
let yourAge = 18

myAge > yourAge ? console.log(`I am ${myAge - yourAge} years older than you.`) : console.log(`You are ${yourAge - myAge} years older than me.`) //I am 3 years older than you.


//13
let birthYear = Number(prompt('Enter birth year'))
const dateNow = new Date()
const yearToday = dateNow.getFullYear()
const legalAge = 18

const checkRequirement = yearToday - birthYear

checkRequirement >= legalAge ? console.log(`You are ${checkRequirement}. You are old enough to drive`) : console.log(`You are ${checkRequirement}. You are not old enough to drive`)


//14
let yearsLive = Number(prompt('Enter number of years you live'))
const dateNow2 = new Date()

//seconds in one year
const secondsInYear = 365 * 24 * 60 * 60

const secondsLive = yearsLive * secondsInYear

console.log(`You lived ${Math.floor(secondsLive)} seconds`) //You lived 3153600000 seconds




























