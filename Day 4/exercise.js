//1

const age = Number(prompt('Enter Your Age'))

switch(true)
{
    case age > 18:
        console.log('You are old enough to drive')
        break;
    case age < 18:
        console.log(`You are left with ${18 - age} years to drive.`)
        break;
    default:
        console.log('Error')
}

//2

let myAge = 23
let yourAge = Number(prompt('Enter Your Age'))

if(myAge > yourAge)
{
    console.log(`Im ${myAge - yourAge} years older than you`)
}else
{
    console.log(`Your ${yourAge - myAge} years older than me`)
}

//2 

let a = 4
let b = 3

//if else
if(a > b)
{
    console.log('a is greater than b')
}
else
{
    console.log('a is less than b')
}

//ternary
a > b ? console.log('a is greater than b') :  console.log('a is less than b')


//3
let num = Number(prompt('Enter Number'))
let even = num % 2

if (even === 0)
{
    console.log(`${num} is an even number`)
}else{
    console.log(`${num} is an odd number`)
}

