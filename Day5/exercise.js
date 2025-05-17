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

//5
//import { webTechs } from './web_techs.js';
//import { countries } from './countries.js';

if(webTechs.includes('Sass'))
{
    console.log('Sass is a CSS preprocess')
}
else
{
   webTechs.push('Sass')
   console.log(webTechs) 
}
//output
/*
[
  'HTML',       'CSS',
  'JavaScript', 'React',
  'Redux',      'Node',
  'MongoDB',    'Sass'
]
*/
//6 
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fuillStack = frontEnd.concat(backEnd)
 console.log(fuillStack) 
 //output
/*
[
  'HTML',    'CSS',
  'JS',      'React',
  'Redux',   'Node','Express', 'MongoDB'
]
*/

//Exercise Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//1
console.log(ages.sort()) //[19, 19, 20, 22, 24, 24, 24, 25, 25, 26]

const minAge = Math.min(...ages); // ...spread operator
const maxAge = Math.max(...ages);

console.log(minAge); // 19
console.log(maxAge); // 26

//2
const middle1 = ages[ages.length / 2 - 1]
const middle2 = ages[ages.length / 2]

console.log([middle1, middle2]) //20 25 if not sorted if sorted 24 24

//3 
//const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sum = ages.reduce((total, num) => total + num, 0);
let average = sum / ages.length
console.log(average) //22.8 average age

//4
//const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//const minAge = Math.min(...ages); // ...spread operator
//const maxAge = Math.max(...ages);

//const minAge = Math.min(...ages); 
//const maxAge = Math.max(...ages);

console.log(maxAge - minAge) //7 range of the ages

//5
console.log(Math.abs(minAge - maxAge)) 

const countries2 = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]
  
  //Slice the first ten countries from the countries array
  const findCountries = Math.ceil(countries2.length / 19)  //10
  console.log(countries2.slice(0, findCountries)) 

  //output
  /*['Afghanistan', 'Albania', 'Algeria','Andorra','Angola', 
  'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria','Azerbaijan'] */




























