//Exercise: Level 1

//1 Declare an empty array;
const empty = new Array()

//2 Declare an array with more than 5 number of elements
const countries = ['United States', 'Denmark', 'France', 'Japan', 'Finland', 'Estoria']

//3 Find the length of your array
console.log(countries.length) //6

//4 Get the first item, the middle item and the last item of the array
console.log(countries[0]) //United States
console.log(countries[2]) //France
console.log(countries[5]) //Estoria

//5 Declare an array called mixedDataTypes, 
// put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = ['Kim Chaewon', 24, {firstGroup: 'IZONE', secondGroup:'LE SSERAFIM'},
                        'August 1, 2000', 'Seoul, Korea', 'She like manndarins', 'Favorite Fruit is Mandarin',
                        {Height: '164cm (5\'4)', Weight: '42kg (92 lbs)'}]
                        
console.log(mixedDataTypes.length) //8


//6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ['Facebook', 'Google','Microsoft', 'Apple', 'IBM', 'Oracle',  'Amazon']

//7 Print the array using console.log()
console.log(itCompanies)

//8 Print the number of companies in the array
console.log(itCompanies.length) //7

//9
//const itCompanies = ['Facebook', 'Google','Microsoft', 'Apple', 'IBM', 'Oracle',  'Amazon']
console.log(itCompanies[0]) //Facebook
console.log(itCompanies[4]) //Apple
console.log(itCompanies[6]) //Amazon


//10
//const itCompanies = ['Facebook', 'Google','Microsoft', 'Apple', 'IBM', 'Oracle',  'Amazon']
console.log(itCompanies[0]) //Facebook
console.log(itCompanies[1]) //Google
console.log(itCompanies[2]) //Microsoft
console.log(itCompanies[3]) //Apple
console.log(itCompanies[4]) //IBM
console.log(itCompanies[5]) //Oracle
console.log(itCompanies[6]) //Amazon

//11
const convertCase = itCompanies.toString()
console.log(convertCase.toLowerCase())

//12
console.log(convertCase.concat(' are big IT companies.'))


//13
const itCompanies2 = ['Facebook', 'Google','Microsoft', 'Apple', 'IBM', 'Oracle',  'Amazon']

const askCompanies = prompt('Enter here to check if the company exist in the array', 'Enter here in Sentence Case format')
const checkCompanies = itCompanies2.includes(askCompanies)

checkCompanies == true ? console.log(askCompanies) : console.log('Company is not found')

//14
console.log(itCompanies2.slice(2, itCompanies.length)) //[ 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ]

//15
console.log(itCompanies2.sort()) //['Amazon','Apple', 'Facebook', 'Google','IBM','Microsoft','Oracle']

//16
console.log(itCompanies2.reverse()) //[ 'Amazon', 'Oracle','IBM','Apple','Microsoft','Google','Facebook']

//17
console.log(itCompanies2.slice(0, 4)) //[ 'Facebook', 'Google', 'Microsoft' ]

//18
console.log(itCompanies2.slice(4, itCompanies2.length))  //[ 'IBM', 'Oracle', 'Amazon' ]

//19
console.log(itCompanies2.slice(3, 4)) //[ 'Apple' ]
 
//20
console.log(itCompanies2.shift()) //['Google','Microsoft', 'Apple', 'IBM', 'Oracle',  'Amazon']

//21
console.log(itCompanies2.splice(2, 3))

//22
const itCompanies3 = ['Facebook', 'Google','Microsoft', 'Apple', 'IBM', 'Oracle',  'Amazon']
const removedData = itCompanies3.splice(3, 3) //remove the first 3 items in the array and stored in this variable
console.log(removedData.splice(0, 1)); //removed the first time

//23
console.log(itCompanies3.pop()) //['Facebook', 'Google','Microsoft', 'Apple', 'IBM', 'Oracle']

//24
console.log(itCompanies3.splice()) //empty array -- removes all iteem in the array

//Exercise Level 2

//1
import { webTechs } from './web_techs.js';
import { countries } from './countries.js';

console.log(webTechs)
console.log(countries)

//2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const arrayNew = text.split(' ')
console.log(arrayNew) //["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
console.log(arrayNew.length) //13


//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if(shoppingCart.includes('Meat'))
{
    console.log('Meat are not inside the array')
}
else{
    shoppingCart.unshift('Meat')
    console.log(shoppingCart) //[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]
}

if(shoppingCart.includes('Sugar'))
{
    console.log('Sugar are not inside the array')
}
else{
    shoppingCart.push('Sugar')
    console.log(shoppingCart) //[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]
}

shoppingCart[3] = 'Green Tea'
console.log(shoppingCart) //[ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Honey', 'Sugar' ]

//4
//import { countries } from './countries.js';

if(countries.includes('Ethiopia'))
{
   console.log('ETHIOPIA')
}
else
{
    countries.push('Ethopia')
    console.log(countries)
}























