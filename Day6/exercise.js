//1 Iterate 0 to 10 using for loop, do the same using while and do while loop

//for loop
for(let i = 0; i <= 10; i++)
{
    console.log(i)
}

//do while 
let i = 0
do{
    console.log(i)
    i++
}while(i <= 10)

//while loop
let j = 0
while(j <= 10)
{
    console.log(j)
    j++
}


//2 Iterate 10 to 0 using for loop, do the same using while and do while loop

for(let i = 10; i >= 0; i--)
{
    console.log(i)
}

//do while 
let k = 10
do{
    console.log(k)
    k--
}while(k >= 0)

//while 
let l = 10
while(l >= 0)
{
    console.log(l)
    l--
}


//3 Iterate 0 to n using for loop
const n = Number(prompt("Enter the number of times you want to print"))

for(let i = 0; i <= n; i++)
{
    console.log(i)
}


//4 Write a loop that makes the following pattern using console.log():

for(i = 1; i <= 7; i++)
{
    let output = ''
    for (j = 0; j < i; j++)
    {
        output += '#';
    }
    console.log(output);
}

  /* 
    #
    ##
    ###
    ####
    #####
    ######
    #######
 */

//5 Use loop to print the following pattern:

for(let i = 0; i <= 10; i++)
{
    console.log(`${i} * ${i} = ${i * i}`)
}


//6 Use loop to print the following pattern:
for(let i = 0; i <= 10; i++)
{
    console.log(`${i}\t${i ** 2}\t${i ** 3}`);
    
}

//7 Use for loop to iterate from 0 to 100 and print only even numbers
let m = 0
do{
    m++ //increment

    if(m % 2 === 0) //check 
    {
        console.log(m)
    }
}while(m <= 100)

//8 Use for loop to iterate from 0 to 100 and print only even numbers
let odd = 1
do{
   
    if(odd % 2 != 0) //check first
    {
        console.log(odd)
    }
      odd++ // then increment
}while(odd <= 100)


//9 Use for loop to iterate from 0 to 100 and print only prime numbers


for (let i = 2; i < 100; i++) { //checking from 2 because 0 and 1 are not prime.
    let isPrime = true;
    
    for (let j = 2; j <= Math.sqrt(i); j++) { //For each number i, it checks if it’s divisible by any number j from 2 up to the square root of i.
        
        if (i % j === 0) { //If it’s divisible, it sets isPrime to false.
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) { // isPrime stays true, it prints the number 
        console.log(i);
    }
}

//10 Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum = 0

for(let i = 0; i <= 100; i++)
{
    sum += i
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`) //5050


//11
let sumEven = 0
let sumOdd = 0
for(let i = 0; i <= 100; i++)
{
    if(i % 2 === 0)
    {
        sumEven += i
    }
}

for(let i = 0; i <= 100; i++)
{
    if(i % 2 != 0)
    {
        sumOdd += i
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`)

//12
const array = new Array()
array.unshift(sumEven)
array.push(sumOdd)
console.log(array) //[2550, 2500]


//13 Develop a small script which generate array of 5 random numbers

let array2 = new Array()

for(let i = 0; i < 5; i++)
{
    const randomNum = Math.floor(Math.random () * 6)
    array2.push(randomNum)
}
console.log(array2)


//14 Develop a small script which generate array of 5 random numbers and the numbers must be unique
let array3 = new Array()

for(let i = 0; i < 5; i++)
{
    const randomNum2 = Math.floor(Math.random () * 6)
    if(!array3.includes(randomNum2))
    {
        array3.push(randomNum2)    
    }
}
console.log(array3)

//15 Develop a small script which generate a six characters random id:

for(let i = 0; i <= 6; i++)
{
       
}









    





