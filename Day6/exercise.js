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









    





