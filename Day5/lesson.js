//rrays
//In contrast to variables, 
//an array can store multiple values. Each value in an array has an index, and each index has a 
//reference in a memory address. Each value can be accessed by using their indexes. T

//How to create an empty array
// syntax
const arr = Array()
// or
// let arr = new Array()
console.log(arr) // []

//Array can have items of different data types
const arr2 = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr2)

//Modifying array element
const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10      // changing 1 at index 0 to 10
numbers[1] = 20      // changing  2 at index 1 to 20

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  countries[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
  let lastIndex = countries.length - 1
  countries[lastIndex] = 'Korea' // Replacing Kenya by Korea
  
  console.log(countries)

  //Methods to manipulate array
  //There are different methods to manipulate an array. These are some of the available methods to deal with arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift
