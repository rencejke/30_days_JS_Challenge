
//Truthy values

//All numbers(positive and negative) are truthy except zero
//All strings are truthy except an empty string ('')
//The boolean true




//Falsy Values

//0
//0n
//null
//undefined
//NaN
//the boolean false
//'', "", ``, empty string



//calculate the area of a circle

const pi = 3.14;
let radius = 100

const area  = pi * radius * radius

console.log(area); //314

//calculate the weight of  an object

const gravity = 9.81
let mass = 72

const weight  = gravity  * mass

console.log(weight);  // 706.32 N(Newton)


// if a value is not true with == it will not be equal with ===. Using === is safer than using ==. 

//! Negation examples

let check = 4 > 3        // true
let check2 = !(4 > 3)   //  false
let isMarried = !false  // true


// Logical Operators

const check3 = 4 > 3 && 10 > 5         // true && true -> true
const check4 = 4 > 3 && 10 < 5         // true && false -> false
const check5 = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const check6 = 4 > 3 || 10 > 5         // true  || true -> true
const check7 = 4 > 3 || 10 < 5         // true  || false -> true
const check8 = 4 < 3 || 10 < 5         // false || false -> false


//pre-increment
let count = 0
console.log(++count)  // 1
console.log(count)  //1

//post-increment
let count2 = 0
console.log(count2++)  // 0
console.log(count2)  //1

//pre-decrement
let count3 = 0
console.log(--count3)  // -1
console.log(count3)  //1

//post-decrement
let count4 = 0
console.log(count4--)  // 0
console.log(count4)  //-1


//ternary operator

let isRaining = true
                        //true                                          //false
isRaining ? console.log('You need an  umbrella') : console.log('No need to bring an umbrella')

//You need an  umbrella

let  number = 6

number > 0 ? console.log(`${number} is greater than 0`) : console.log(`${number} is less than 0`)

// 6 is  greater than 0

let  number2 = -6

number > 0 ? console.log(`${number} is greater than 0`) : console.log(`${number} is less than 0`)

//-6 is less than 0



//WINDOW

//alert()

//dont use too much alert use it only for testing
alert('Hello  World')

//prompt()
prompt('required text', 'optional text')

let numberPrompt = prompt('Enter number', 'number goes here')
console.log(numberPrompt)

//confirm
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box


//Date Object

const now = new Date()
console.log(now) //Sat Aug 17 2024 00:48:47 GMT+0800 (Philippine Standard Time) 


//getting full year

const now2 = new Date()
console.log(now2.getFullYear()) //2024


//getting month

const now3 = new Date()
console.log(now2.getMonth()) //7 (August) 0-11 January - December

//getting date

const now4 = new Date()
console.log(now4.getDate())  //16 today is august 16 2024

//getting day

const now5 = new Date()
console.log(now5.getDay()) // 6
//Sunday = 0, Monday = 1




