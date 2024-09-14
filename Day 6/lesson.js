//For Loop

// For loop structure
/* for(initialization, condition, increment/decrement){
    // code goes here
  }
*/


//example 
for(let i = 0; i <= 5; i++){
    console.log(i) // 0 1 2 3 4  5
  }

//pabalik
  for(let i = 5; i >= 0; i--){
    console.log(i) //5 4 3 2 1 0
  }

//multiplication
for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
  }


//add the first array to an empty array

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}


//Adding all elements in the array

const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]
}

 console.log(sum) // 15


//Creating a new array based on the existing array
 const numbers2 = [1, 2, 3, 4, 5]
 const newArr2 = []
 let sum2 = 0
 for(let i = 0; i < numbers2.length; i++){
   newArr2.push( numbers2[i] ** 2)
 }

 console.log(newArr2)  // [1, 4, 9, 16, 25]