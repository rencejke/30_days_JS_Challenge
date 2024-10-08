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
 for(let i = 0; i < numbers2.length; i++){
   newArr2.push( numbers2[i] ** 2)
 }

 console.log(newArr2)  // [1, 4, 9, 16, 25]

//while loop
let k = 0
while (k <= 5) {
  console.log(i)
  k++
} // 0 1 2 3 4 5

 //do while
 let l = 0
do {
  console.log(l)
  l++
} while (l <= 5)

// 0 1 2 3 4 5

//for of loops
const numbers3 = [1, 2, 3, 4, 5]

for (const num of numbers3) {
  console.log(num)
}

// 1 2 3 4 5

for (const num of numbers3) {
  console.log(num * num)
}

// 1 4 9 16 25

const countries2 = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr3 = []
for(const country of countries2){
  newArr3.push(country.toUpperCase())
}

console.log(newArr3)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]) // get only the first letter of each element,  H C J R N M
}

//break
//Break is used to interrupt a loop.

for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
} // 0 1 2


//continue
//We use the keyword continue to skip a certain iterations.

for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}

// 0 1 2 4 5



