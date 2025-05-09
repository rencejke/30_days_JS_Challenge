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

//1
let getGrade = Number(prompt("Please input your grade here"))

 if(getGrade >= 90  && getGrade <= 100){
    alert(`Your Grade ${getGrade} is A`)
 }
 else if( getGrade >= 70  && getGrade <= 89)
 {
    alert(`Your Grade ${getGrade} is B`)
 }
 else if(getGrade >= 60  && getGrade <= 69)
{
    alert(`Your Grade ${getGrade} is C`)
}
else if(getGrade >= 50  && getGrade <= 59)
{
    alert(`Your Grade ${getGrade} is C`)
}

else if(getGrade >= 0  && getGrade <= 49)
{
    alert(`Your Grade ${getGrade} is C`)
}
else
{
    alert(`your grade is out of range`)
}
        
//2
let day = prompt("What day is today?").toLowerCase()

switch (day) {
    case 'monday':
        alert(`Monday is a working day`)
      break
    case 'tuesday':
        alert(`Tuesday is a working day`)
      break
    case 'wednesday':
        alert(`Wednesday is a working day`)
      break
    case 'thursday':
      calert(`Thursday is a working day`)
      break
    case 'friday':
      calert(`Friday is a working day`)
      break
    case 'saturday':
        alert(`Saturday is a weekend`)
      break
    case 'sunday':
        alert(`Sunday is a weekend`)
      break
    default:
      alert('It is not a week day.')
  }


//3
  let month = prompt("Enter the month here").toLowerCase()

  if(month == 'september' || month == 'october' || month == 'november')
  {
    alert(`Autumn`)
  }
  else if(month == 'december' || month == 'january' || month == 'february')
  {
      alert(`Winter`)
  }
  else if(month == 'march' || month == 'april' || month == 'may')
    {
      alert(`Spring`)
    }
   else if(month == 'june' || month == 'july' || month == 'august')
  {
        alert(`Summer`)
   }
   else
   {
        alert(`It is not a month`)
   }
  
   //4
   const dayMonth = prompt("Enter the month here").toLowerCase()

   if(dayMonth == "january" || dayMonth == "march" || dayMonth == "may" || dayMonth == "july" || dayMonth == "august" || dayMonth == "october" || dayMonth == "december")
   {
      alert(`${dayMonth} has 31 days.`)
   }
   else if(dayMonth == "april" || dayMonth == "june" || dayMonth == "september" || dayMonth == "november")
   {
      alert(`${dayMonth} has 30 days.`)
   }
   else if (dayMonth == "february")
   {
      alert(`${dayMonth} has 28 days.`)
   }
   else
   {
    alert(`Unknown Date`)
   }


   //5
   const dayMonths = prompt("Enter the month here").toLowerCase()
   const datee = new Date()
   const year = datee.getFullYear() 

   if(dayMonths == "january" || dayMonths == "march" || dayMonths == "may" || dayMonths == "july" || dayMonths == "august" || dayMonths == "october" || dayMonths == "december")
   {
      alert(`${dayMonths} has 31 days.`)
   }
   else if(dayMonths == "april" || dayMonths == "june" || dayMonths == "september" || dayMonths == "november")
   {
      alert(`${dayMonths} has 30 days.`)
   }
   else if (dayMonths == "february")
   {
      if(year % 4 == 0)
      {
        alert(`${dayMonths} has 29 days.`)
      }
      else
      {
        alert(`${dayMonths} has 28 days.`)
      }
   }
   else
   {
    alert(`Unknown Date`)
   }
   
   



   






  