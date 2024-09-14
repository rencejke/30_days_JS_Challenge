let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const textToArray = text.split(' ')

console.log(textToArray) //["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
console.log(textToArray.length)


//In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//add 'Meat' in the beginning of your shopping cart if it has not been already added

shoppingCart.unshift('Meat')

console.log(shoppingCart)


if(shoppingCart.includes('Sugar'))
{
    console.log('Sugar is already in the array')
}
else 
{
    shoppingCart.push('Sugar')
    console.log(shoppingCart) //[ 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]
}

const updatedArray = [ 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ];

const allergic = confirm('Are you allergic to Honey?');

if (allergic) {
   // Find the index of 'Honey' and remove it from the array
   const index = updatedArray.indexOf('Honey');
   if (index > -1) {
       updatedArray.splice(index, 1); // Removes Honey
   }
   console.log(updatedArray); //['Milk', 'Coffee', 'Tea', 'Sugar']
} else {
   console.log(updatedArray);
}

//modify Tea to 'Green Tea'
const updatedArray2 = [ 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]

updatedArray2[2] = 'Green Tea'

console.log(updatedArray2)


//4

const countries =  ['China', 'America', 'Korea', 'Paris', 'Philippines', 'Japan']

const checkExist = countries.indexOf('Ethiopia')
if(checkExist > -1)
{
    console.log('ETHIOPIA')
}
else
{
    countries.push('Ethiopia')
    console.log(countries)
}


//5 

const webTechs = ['ReactJS', 'HTML', 'JS', 'CSS', 'Bootstrap', 'Tailwind']

const  doesExist = webTechs.includes('Sass')

if(doesExist === true)
{
    console.log('Sass is a CSS preprocess')
}
else
{
    webTechs.push('Sass')
    console.log(webTechs) //['ReactJS', 'HTML', 'JS', 'CSS', 'Bootstrap', 'Tailwind', 'Sass']
}


//6 concat

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']


const fullStack = frontEnd.concat(backEnd)

console.log(fullStack) //["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

