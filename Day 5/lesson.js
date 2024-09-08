//Methods to manipulate array


//creates an array
const arr = Array() // creates an an empty array
console.log(arr)


const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]



//Creating static values with fill
const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']


//Array can have items of different data types
const arr2 = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr2)

//Creating an array using split
let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

let lastCompany = companiesString.length - 1;

console.log(lastCompany) //Amazon
 
//modifying array

const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10      // changing 1 at index 0 to 10
numbers[1] = 20      // changing  2 at index 1 to 20

console.log(numbers) // [10, 20, 3, 4, 5]

//concat

const firstList = [1,2,3]
const secondList = [4,5,6]

const combinedList = firstList.concat(secondList)

console.log(combinedList) //[ 1, 2, 3, 4, 5, 6 ]


//ndexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.

const numbers2 = [1,2,3,4,5]

console.log(numbers2.indexOf(5)) // -> 4
console.log(numbers2.indexOf(0)) // -> -1 //0 is not in the array
console.log(numbers2.indexOf(1)) // -> 0
console.log(numbers2.indexOf(6)) // -> -1 //6 is not in the array

//check if an array is existed


const fruits = ['banana', 'apple', 'orange', 'watermelon']
const checkIndex = fruits.indexOf('banana')

if(checkIndex === -1)
{
    console.log('This fruit does not exist in the array')
}
else
{
    console.log('This fruit does exist in the array')
}

//This fruit does exist in the array

checkIndex === -1 ? console.log('This fruit does not exist in the array') : console.log('This fruit does exist in the array') //This fruit does exist in the array

//lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.
const numbers3 = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers3.lastIndexOf(2)) // 7
console.log(numbers3.lastIndexOf(0)) // -1
console.log(numbers3.lastIndexOf(1)) //  6
console.log(numbers3.lastIndexOf(4)) //  3
console.log(numbers3.lastIndexOf(6)) // -1

//includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

const numbers4 = [1, 2, 3, 4, 5]

console.log(numbers4.includes(5)) // true
console.log(numbers4.includes(0)) // false
console.log(numbers4.includes(1)) // true
console.log(numbers4.includes(6)) // false

//check array
//Array.isArray()
//To check if the data type is an array

const numbers5 = [1, 2, 3, 4, 5]
const numbers7 = 500

console.log(Array.isArray(numbers5)) // true
console.log(Array.isArray(numbers6)) // false

//Converting array to string

//Joining array elements

const numbers = [1, 2, 3, 4, 5]
console.log(numbers.join()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

//Slice array elements
//Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.
console.log(numbers.slice()) // -> it copies all  item
console.log(numbers.slice(0)) // -> it copies all  item
console.log(numbers.slice(0, numbers.length)) // it copies all  item
console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position


//Splice method in array
//Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

const numbers6 = [1, 2, 3, 4, 5]
numbers6.splice()
console.log(numbers6) // -> remove all items

numbers6.splice(0,1)
console.log(numbers6)// remove the first item

numbers6.splice(3, 3, 7, 8, 9)
console.log(numbers6.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items



//push - add item in the eend
const arr3  = ['item1', 'item2','item3']
arr3.push('new item')
console.log(arr3) // ['item1', 'item2','item3','new item']

//pop - remove items in the end
arr3.pop()
console.log(arr3) // ['item1', 'item2','item3']

//shift - remove one item from the beginning
const numbers8 = [1, 2, 3, 4, 5]
numbers8.shift() // -> remove one item from the beginning
console.log(numbers8) // -> [2,3,4,5]

//unshift - add one item from the beginning
const numbers9 = [1, 2, 3, 4, 5]
numbers9.unshift(0) // -> add one item from the beginning
console.log(numbers9) // -> [0,1,2,3,4,5]

//reverse = reverse the ordeer of an array

const numbers10 = [1, 2, 3, 4, 5]
numbers10.reverse() // -> reverse array order
console.log(numbers10) // [5, 4, 3, 2, 1]

numbers10.reverse()
console.log(numbers10) // [1, 2, 3, 4, 5]


/*
Sorting elements in array
sort: arrange array elements in ascending order. 
*/

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

  webTechs.reverse() // after sorting we can reverse it
  console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]


  //array of arrays
  // array can store diffent dat types including itself

  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
  const backEnd = ['Node','Express', 'MongoDB']
  const fullStack = [frontEnd, backEnd]
  console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
  console.log(fullStack.length)  // 2
  console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
  console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]



