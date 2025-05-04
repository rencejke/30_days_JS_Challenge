//1
let fName = "Clarence Jake"
let lName = "Bonilla"
let country = 'Philippines'
let age = 23 
let isMarried = false
let year = 2025

console.log(typeof fName) //string
console.log(typeof lName) //string
console.log(typeof country) //string
console.log(typeof age) //number
console.log(typeof isMarried) //boolean
console.log(typeof year) //numnber


//2
console.log('10' == 10) //true, exact value
console.log('10' === 10) //false, exact value but not the same datx type

//3 
console.log(parseInt('9.8') == 10) //false

//4
console.log(3 > 1) //true
console.log(2 < 5) //true
console.log(25 > 10 || 15  > 20) //true

console.log(undefined === null) //false
console.log(25 > 10 && 15  > 20) //false
console.log(25 < 10 ) //false


//5

/*
4 > 3 //true
4 >= 3 //true
4 < 3 //false
4 <= 3 //false
4 == 4 //true
4 === 4 //true
4 != 4 //false
4 !== 4 //false
4 != '4' //false
4 == '4' //true
4 === '4' //false
*/
let word1 = "Python"
let word2 = "Jargon"

console.log(word1.length !== word2.length) //false, they have same length which is 6 and same data type which is number

//6
/*

4 > 3 && 10 < 12 //true
4 > 3 && 10 > 12 //false
4 > 3 || 10 < 12 // true
4 > 3 || 10 > 12 //true
!(4 > 3) //false
!(4 < 3) //true
!(false) //true
!(4 > 3 && 10 < 12) //false
!(4 > 3 && 10 > 12) //true
!(4 === '4') //true
There is no 'on' in both dragon and python //false

*/

//7

const now =  new Date()
console.log(now.getFullYear()) //2025
console.log(now.getMonth()) //4, 0 = january
console.log(now.getDate()) //4
console.log(now.getDay()) //0 = sunday, 1 = monday
console.log(now.getHours()) //4 
console.log(now.getMinutes()) //52
console.log(now.getTime()) //1746334354219



//Exercise Level 2

//1, Area of thee triangle
let base = prompt("Enter the base")
let height = prompt("Enter the Height")

const area = 0.5 * base * height
alert(`The area of the triangle is ${area}`)

//2, Perimeter of the triangle
let sideA = Number(prompt("Enter the side a"))
let sideB = Number(prompt("Enter the side b"))
let sideC = Number(prompt("Enter the side c"))

const perimeter = sideA + sideB + sideC
alert(`The perimeter of the triangle is ${perimeter}`) 

//3, perimeter of the triangle

let length = Number(prompt("Enter the Length"))
let width = Number(prompt("Enter the width"))

let perimeterRectangle = 2 * (length + width)
alert(`The perimeter of the rectangle is ${perimeterRectangle}`)

//4, get the radius 

//get the area from a radius
let numRadius = Number(prompt("Enter the Radius"))
const radiusircle = 3.14* (numRadius * numRadius)

alert(radiusircle)

//get the circumfernce from a radius
let numRadius2 = Number(prompt("Enter the Radius"))
const circumference = 2 * 3.14 * numRadius2

alert(circumference)


//5
//Calculate the slope, x-intercept and y-intercept of y = 2x -2

//x-intercept
//y = 2x -2
// 0 = 2x - 2 because y is 0
// 0 + 2 = 2x - 2 + 2 // add 2 to both sides
// 2 = 2x
// now divide by 2 each side, x = 1

let slope = 2;       // m = 2, // slope is the number in front of x 
let intercept = -2;  // b = -2

// Finding the x-intercept (where y = 0)
let x_intercept = -intercept / slope;
console.log("X-Intercept:", x_intercept);  // 1

// The y-intercept is directly given as 'b'
console.log("Y-Intercept:", intercept);  // -2


//6
let x1 = 2, y1 = 2;
let x2 = 6, y2 = 10;

let slope2 = (y2 - y1) / (x2 - x1);
console.log("Slope:", slope);  // 2

//7
//They have the same slope

//8 calculkate the value of y
//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.


//-3 to make the value of y to 0
let x = Number(prompt("Enter the value"))
let computeY = (x ** 2) + (6 * x) + 9
alert(computeY)


//9
let hours = Number(prompt("Enter Hours"))
let ratePerHour = Number(prompt("Enter rate per Hour"))
let weeklyRate = hours * ratePerHour
alert(`Your weekly Rate is ${weeklyRate}`)


//10
let name3 = "Clarence Jake Bonilla"
console.log(name3.length > 7 ? "your name is long" : "your name is short")


//11

let fname2 = "Clarence Jake"
let lname2 = "Bonilla"

console.log(fname2.length > lname2.length ? `Your first name, ${fname2} is longer than your family name, ${lname2}` : `Your first name, ${fname2} is shorter than your family name, ${lname2}`
)

//12

let myAge = 23
let yourAge = 24
let ageGap = myAge - yourAge

const showwGap = myAge > yourAge ? `I am ${ageGap} years older than you` : `You are ${Math.abs(ageGap)} year older than me `
console.log(showwGap)

//13

let birthYear = Number(prompt("Enter Your Birth Year"))
const date = new Date()
const years = date.getFullYear()

let calcYearToDrive = years - birthYear

showAvailabilityToDrive = calcYearToDrive > 18 ?  `You are ${calcYearToDrive}. You are old enough to drive`
                                               : `You are ${calcYearToDrive}. You are not old enough to drive`
alert(showAvailabilityToDrive)


//14
let yearsLive = Number(prompt("Enter number of years live"))
const numSecondsLive = 365 * 24 * 60 * 60
const calcSecondsLive = yearsLive * numSecondsLive

alert(calcSecondsLive) //3153600000 seconds

//15
const dates = new Date()
let yearss = dates.getFullYear()
let months = dates.getMonth() + 1
let days = dates.getDate()
let hourss = dates.getHours()
let minutes = dates.getMinutes()


console.log(`${yearss}-${months + 1}-${days} ${hourss}:${minutes}`) //2025-5-4 8:3
console.log(`${days}-${months + 1}-${yearss} ${hourss}:${minutes}`) //4-5-2025 8:5
console.log(`${days}/${months + 1}/${yearss} ${hourss}:${minutes}`) //4/5/2025 8:7

//Exercise level 3

//const dates = new Date()
//let yearss = dates.getFullYear()
//let months = dates.getMonth() + 1
//let days = dates.getDate()
//let hourss = dates.getHours()
//let minutes = dates.getMinutes()

let monthsString = months.toString()
let daysString = days.toString()
let hoursString = hourss.toString()
let minutesString = minutes.toString()


console.log(`${yearss}-${"0"+ monthsString}-${ "0" + daysString} ${hourss > 9 ? hourss : "0" + hoursString}:${minutes > 9 ? minutes : "0" + minutesString}`)
//2025-05-04 08:24 



































