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

//3

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


//4
let num = Number(prompt('Enter Number'))
let even = num % 2

if (even === 0)
{
    console.log(`${num} is an even number`)
}else{
    console.log(`${num} is an odd number`)
}

//exercise level 2

//1
let grade = Number(prompt('Enter Your Grade'))

switch(true)
{
    case grade >=80 && grade <= 100:
        console.log('A')
    break;

    case grade >=70 && grade <= 89:
        console.log('B')
    break;

    case grade >=60 && grade <= 69:
        console.log('C')
    break;

    case grade >=50 && grade <= 59:
        console.log('D')
    break;

    case grade >=0 && grade <= 49:
        console.log('F')
    break;
    
    default:
        console.log('Error')
}

//2

let season = prompt('Enter Your Season').toLowerCase()

switch(true)
{
    case season == 'september' || season == 'october' || season == 'november':
        console.log('Autumn')
    break;

    case season == 'december' || season == 'january' || season == 'february':
        console.log('Winter')
    break;

    case season == 'march' || season == 'april' || season == 'may':
        console.log('Spring')
    break;

    case season == 'june' || season == 'july' || season == 'august':
        console.log('Summer')
    break;
    
    default:
        console.log('Error')
}


//3

let days =  prompt('What is the day today').toLowerCase()

if(days == 'saturday' ||  days == 'sunday')
{
    console.log(`${days} is a weekend`)
}
else if(days == 'monday' ||  days == 'tuesday' || days == 'wednesday' || days == 'thursday' || days == 'friday')
{
    console.log(`${days} is a working day`)
}

//4





