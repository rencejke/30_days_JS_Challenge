/*

Truthy values
All numbers(positive and negative) are truthy except zero
All strings are truthy except an empty string ('')
The boolean true

Falsy values
0
0n
null
undefined
NaN
the boolean false
'', "", ``, empty string


== equal in value
=== equal in valuee and data type


--Pre-increment
let count = 0
console.log(++count)        // 1
console.log(count)          // 1


--Post-increment
let count = 0
console.log(count++)        // 0
console.log(count)          // 1


--Pre-decrement
let count = 0
console.log(--count) // -1
console.log(count)  // -1

--Post-increment
let count = 0
console.log(count--) // 0
console.log(count)   // -1


let isRaining = true
isRaining ? console.log('You need a rain coat.')  : console.log('No need for a rain coat.') //You need a rain coat.


isRaining = false
isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.') //No need for a rain coat.

--Window Methods
 Window alert()  
 alert() method displays an alert box with a specified message and an OK button. It is a builtin method and it takes on argument.
 
 example
 alert(message)

 --Window prompt() 
--The window prompt methods display a prompt box with an input on your browser to take input values and the input data can be stored in a variable. 
The prompt() method takes two arguments. The second argument is optional.


prompt('required text', 'optional text')

example
let number = prompt('Enter number', 'number goes here')
console.log(number)

--Date Object
getFullYear() -- get the year as a four digit nunber  //2025
getMonth() -- get month as number // 0-11 --> 0 is january
getDate() -- get Day as number // 1-31
getHours() -- get Hours
getMinutes() -- get Minutes // 0-59 
getSeconds() -- get Seconds // 0 - 59
getMilliseconds() -- get mullisecond // 0 - 999
getTime() -- get Time  (milliseconds since January 1 1970)
getDay() -- get the weekday as a number // 0 - 6

--Creating a time object
const now = new Date()
console.log(now) //2025-05-04T04:01:41.809Z

--Getting Fullyear
const now = new Date
console.log(now.getFullYear()) //2025

--Getting Month
const now = new Date
console.log(now.getMonth()) //4 

--Getting Day
const now = new Date
console.log(now.geetDay()) //0 because sunday is 0, and monday = 1

--Getting hours
const now = new Date()
console.log(now.getHours()) // 4

--Getting minutes
const now = new Date()
console.log(now.getMinutes()) // 14, because the time is 12:14:11

--Getting Seconds
const now = new Date()
console.log(now.getSeconds()) // 8, because the time is 12:15:08

*/



