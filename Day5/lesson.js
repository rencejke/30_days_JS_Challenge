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

const arr3 = Array() // creates an an empty array
console.log(arr3)

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]


// .fill() ---Fill all the array elements with a static value

const arr4 = Array() // creates an an empty array
console.log(arr4)

const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]


// .concat() --To concatenate two arrays.

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]



// Length:To know the size of the array

const numbers = [1, 2, 3, 4, 5]
console.log(numbers.length) // -> 5 is the size of the array

//indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.indexOf(5)) // -> 4
console.log(numbers.indexOf(0)) // -> -1
console.log(numbers.indexOf(1)) // -> 0
console.log(numbers.indexOf(6)) // -> -1


// lcheck if a banana exist in the array

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  // 0

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does exist in the array

// we can use also ternary here
index === -1 ? console.log('This fruit does not exist in the array') : console.log('This fruit does exist in the array')

//Getting last index of an element in array
//lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) // 7
console.log(numbers.lastIndexOf(0)) // -1
console.log(numbers.lastIndexOf(1)) //  6
console.log(numbers.lastIndexOf(4)) //  3
console.log(numbers.lastIndexOf(6)) // -1


//includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.includes(5)) // true
console.log(numbers.includes(0)) // false
console.log(numbers.includes(1)) // true
console.log(numbers.includes(6)) // false


//Checking array
//Array.isArray:To check if the data type is an array

const numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) // true

const number = 100
console.log(Array.isArray(number)) // false

//Converting array to string
//toString:Converts array to string

const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

//Joining array elements
//join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string.

//.join() -- it adds space, text, symbols after each element

const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names2.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names2.join('')) //AsabenehMathiasEliasBrook
console.log(names2.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names2.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names2.join(' # ')) //Asabeneh # Mathias # Elias # Brook


//Slice 
//Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

  const numbers3 = [1,2,3,4,5]

  console.log(numbers3.slice()) // -> it copies all  item
  console.log(numbers3.slice(0)) // -> it copies all  item
  console.log(numbers3.slice(0, numbers3.length)) // it copies all  item
  console.log(numbers3.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position


//Splice method in array
//Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

  const numbers = [1, 2, 3, 4, 5]
  numbers.splice()
  console.log(numbers)                // -> remove all items
  
  const numbers = [1, 2, 3, 4, 5]
  numbers.splice(0,1)
  console.log(numbers)            // remove the first item

  const numbers = [1, 2, 3, 4, 5, 6]
  numbers.splice(3, 3, 7, 8, 9)
  console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [7, 8, 9] //it removes three item and replace three items
// first 3 is the starting position, the second 3 is the number of times to be remove so in the array [1, 2, 3, 4, 5, 6]
//4,5,6 will be remove later on and 7,8,9 will be the one to be added

//Add an item to the array using push 
//.push('item to be added')

const arr5 = ['item1', 'item2','item3']
arr.push('new item')
console.log(arr5)
// ['item1', 'item2','item3','new item']

//Removing the end element using pop
//pop: Removing item in the end. 

//.pop()

const numbers = [1, 2, 3, 4, 5]
numbers.pop() // -> remove one item from the end
console.log(numbers) // -> [1,2,3,4]

//Removing an element from the beginning
//shift: Removing one array element in the beginning of the array.

const numbers = [1, 2, 3, 4, 5]
numbers.shift() // -> remove one item from the beginning
console.log(numbers) // -> [2,3,4,5]


//Add an element from the beginning
//unshift: Adding array element in the beginning of the array.

const numbers = [1, 2, 3, 4, 5]
numbers.unshift(0) // -> add one item from the beginning
console.log(numbers) // -> [0,1,2,3,4,5]

//Reversing array order
//reverse: reverse the order of an array.
// its like descending order 

const numbers = [1, 2, 3, 4, 5]
numbers.reverse() // -> reverse array order
console.log(numbers) // [5, 4, 3, 2, 1]

//Sorting elements in array
//sort: arrange array elements in ascending order.

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

webTechs.sort()
console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

//Array of arrays
//Array can store different data types including an array itself.

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]




 













