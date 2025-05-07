//1
let age = Number(prompt("Enter your age"))
let yearsToDrive = Math.abs(age - 18)
if(age >= 18)
{
    alert("You are old enough to drive")
}
else
{
   alert(`You are left with ${yearsToDrive} years to drive.`)
}


//2
let myage = 25
let yourAge = Number(prompt("Enter your age"))
let ageGap = Math.abs(myage - yourAge)

if(myage > yourAge)
{
    alert(`I am ${ageGap} years older than you.`)
}
else if (yourAge > myage)
{
    alert(`You are ${ageGap} years older than me.`)
    
}
else
{
    alert(`We are same age`)
}

//3
let a = 4
let b = 3

if (a > b)
{
    console.log("a is greater than b")
}
else
{
    console.log("b is greater than a")
}


a > b ? console.log("a is greater than b") : console.log("b is greater than a")

//4

let numm = Number(prompt("Enter a number"))
let compute = numm % 2

if(compute === 0)
{
    alert(`${numm} is an even number`)
}
else
{
    alert(`${numm} is an odd number`)
}

//Exercises: Level 2

let getGrade = Number(prompt("Please input your grade here"))

switch(getGrade)
{
    case getGrade >= 80  && getGrade <= 100:
    alert(`Your Grade ${getGrade} is A`)
    break

    case getGrade >= 70  && getGrade <= 89:
    alert(`Your Grade ${getGrade} is B`)
    break

    case getGrade >= 60  && getGrade <= 69:
    alert(`Your Grade ${getGrade} is C`)
    break

    case getGrade >= 50  && getGrade <= 59:
    alert(`Your Grade ${getGrade} is D`)
    break

    case getGrade >= 0  && getGrade <= 49:
    alert(`Your Grade ${getGrade} is D`)
    break

    default:
        alert(`your gradee is out of range`)

}
