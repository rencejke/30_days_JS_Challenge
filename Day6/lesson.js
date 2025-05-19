/* For loop structure

for(initialization, condition, increment/decrement){
   code goes here
}

*/

for(let i = 0; i <= 5; i++){
  console.log(i)
}

// 0 1 2 3 4 5

for(let i = 5; i >= 0; i--){
  console.log(i)
}

// 5 4 3 2 1 0

for(let i = 0; i <= 5; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}

/*
0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25
*/


//Adding all elements in the array

const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
    sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]
    
    //explanation
    // 0 + 0 = 0
    // 0  + 1 = 1
    // 1  + 2 = 3
    // 3 + 3 =  6
    // 6 + 4 = 10
    //10 + 5 = 15
}
 
console.log(sum) //15

//Creating a new array based on the existing array

const numbers2 = [1, 2, 3, 4, 5]
const newArr = []
for(let i = 0; i < numbers2.length; i++){
  newArr.push( numbers2[i] ** 2)

}

console.log(newArr)  // [1, 4, 9, 16, 25]


const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr2 = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

console.log(newArr2)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]



//while loop
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// 0 1 2 3 4 5

//We use for of loop for arrays. It is very hand way to iterate 
// through an array if we are not interested in the index of each element in the array.
for (const element of arr) {
  // code goes here
}



const numbers3 = [1, 2, 3, 4, 5]

// adding all the numbers in the array
let sum2 = 0
for (const num of numbers3) {
  sum2 = sum2 + num  
	// can be also shorten like this, sum += num
  // after this we will use the shorter synthax(+=, -=, *=, /= etc)
}
console.log(sum2) // 15



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
  console.log(tech[0])  // get only the first letter of each element,  H C J R N M
}

