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
console.log(itCompanies[0]) //Facebook
console.log(itCompanies[4]) //Apple
console.log(itCompanies[6]) //Amazon


//10
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


























