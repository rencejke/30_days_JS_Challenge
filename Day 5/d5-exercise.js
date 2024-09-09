const arr = Array() //empty array
const array2 = [1, 2, 3, 4, 5, 6]
console.log(array2.length)//6

console.log(array2[0]) //1
console.log(array2[2]) //3
console.log(array2[5]) //6

let name; //undefined
const mixedDataTypes = [3, 'three',  true,  ['banana', 'apple', 'pineapple'], null,  name] //diffeerent data types
console.log(mixedDataTypes.length)

const itCompanies =  ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

console.log(itCompanies)
console.log(itCompanies.length) //7
console.log(itCompanies[0]) //Facebook
console.log(itCompanies[3]) //Apple
console.log(itCompanies[6]) //Amazon

console.log(itCompanies.join(', '))  //Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon

//make thee array uppercase
const itCompanies2 =  ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
const arrayString  = itCompanies2.toString()
const convertUpperCase =  arrayString.toUpperCase()
console.log(convertUpperCase)

//Print the array like as a sentence

const  getCompanies = itCompanies2.slice(0, 5).join(', ') //Facebook, Google, Microsoft, Apple, IBM,
const  getCompanies2 = itCompanies2.slice(5, 6)  //Oracle


console.log(`${getCompanies}, and ${getCompanies2} are big IT companies.`) //Facebook, Google, Microsoft, Apple, IBM, and Oracle are big IT companies.


//cheeck if the company exist
const itCompanies3 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let checkd = itCompanies3.indexOf('Apple');

if (checkd === -1) {
    console.log('Company is not found');
} else {
    console.log('This company exists');
}


//filter
const filterOut = itCompanies3.filter(company => company.includes('o')) //[ 'Facebook', 'Google', 'Microsoft', 'Amazon' ]
console.log(filterOut)










