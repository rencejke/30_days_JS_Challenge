console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")



let check = parseFloat('9.8')
console.log(check) //9.8
console.log(Math.ceil(check)) //10

let stringCheck = 'python and jargon'
let stringCheck2 = 'I hope this course is not full of jargon'

console.log(stringCheck.includes('on')) 
console.log(stringCheck2.includes('jargon')) 


let randomNumber  = Math.random() * 100 //0 to 100.99
console.log(Math.floor(randomNumber)) // 0 to 100


let randomNumber2  = Math.random() * 50 + 50 // 50 - 100  
console.log(Math.floor(randomNumber2)) 

let randomNumber3  = Math.random() * 255
console.log(Math.floor(randomNumber3)) 


let accessString = 'JavaScript'
let randomNumber4 = Math.random() * accessString.length // 0 - 10.99
let accessStringIndex = Math.floor(randomNumber4) //0 - 10

console.log(accessString.charAt(accessStringIndex)) // prints every letter from accessStrinng



console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')
/*
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/

let challengeText = 'You cannot end a sentence with because because because is a conjunction'
let getSubstring = challengeText.substr(31, 23)
let sliceString = getSubstring.slice()
console.log(sliceString) //because because because



let challengeText2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let findText = challengeText2.match(/love/gi) //g - means check the whole text  and i for case insensitive ['love', 'love', 'love']
console.log(findText.length) // counts how  many times an argument appears 


let challengeText3 =  'You cannot end a sentence with because because because is a conjunction'
let findText2 = challengeText3.match(/because/gi)
console.log(findText2.length) //3

//clean this sentence
const challengeText4 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'   
let cleanText  = challengeText4.replace(/[%@&#;$;]/g, '') //get all the repeated symbols and replace them with an empty string
let words = cleanText.split(/\s+/); //splits the text by spaces

console.log(words);


//calculate the total annual income from a text

let problemText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let extractNumbers = problemText.match(/\d+/g) 
// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// g means global search
// result  is ['5000', '10000', '15000']

const num1 = Number(extractNumbers[0])
const num2 = Number(extractNumbers[1])
const num3 = Number(extractNumbers[2])

const sum = (num1 * 12) + (num3 * 12) + num2

console.log(sum)

















