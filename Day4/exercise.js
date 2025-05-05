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
