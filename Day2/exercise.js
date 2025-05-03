/* 

Exercise Level 1

Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
Print the string on the browser console using console.log()
Print the length of the string on the browser console using console.log()
Change all the string characters to capital letters using toUpperCase() method
Change all the string characters to lowercase letters using toLowerCase() method
Cut (slice) out the first word of the string using substr() or substring() method
Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
Check if the string contains a word Script using includes() method
Split the string into an array using split() method
Split the string 30 Days Of JavaScript at the space using split() method
'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
Use startsWith() method with the string 30 Days Of JavaScript and make the result true
Use endsWith() method with the string 30 Days Of JavaScript and make the result true
Use match() method to find all the a’s in 30 Days Of JavaScript
Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
Use repeat() method to print 30 Days Of JavaScript 2 times

*/



//Exercise Level 1

//1. 
let challenge = '30 Days Of JavaScript'

//2
connsole.log(challenge)

//3
console.log(challenge.length) //21

//4 
console.log(challenge.toUpperCase()) //30 DAYS OF JAVASCRIPT

//5
console.log(challenge.toLowerCase()) //30 days of javascript

//6
console.log(challenge.substr(2, 6)) //Days
console.log(challenge.substring(2, 7))  //Days

//7
console.log(challenge.substr(3, challenge.length - 1)) //Days Of JavaScript

//8
console.log(challenge.includes('Script')) //true

//9
console.log(challenge.split()) //[ '30 Days Of JavaScript' ]


//10
console.log(challenge.split(' '))  //[ '30', 'Days', 'Of', 'JavaScript' ]

//11
let techCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(techCompanies.split(','))

//output
/* [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
  ]
*/ 

//12
console.log(challenge.replace('Javascript', 'Python')) //30 Days Of Python

//13
console.log(challenge.charAt(15)) //S

//14
console.log(challenge.charCodeAt('J')) //51

//15
console.log(challenge.indexOf('a')) //4 is the first occurrence of a 

//16
console.log(challenge.lastIndexOf('a')) //14 is the first occurrence of a 

//17
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because')) //31

//18
console.log(sentence.lastIndexOf('because')) //47

//19
console.log(sentence.search(/because/g)); //31 g---> means global search


//20
let trimTest = ' 30 Days Of JavaScript '
console.log(trimTest.trim()) //30 Days Of JavaScript ---> renoves beginning and thhe end spaces

//21
console.log(challenge.startsWith('30')) //true

//22
console.log(challenge.endsWith('Script')) //true //case sensitive

//23
console.log(challenge.match('a')) //[ 'a', index: 4, input: '30 Days Of JavaScript', groups: undefined ]

//24

let substring1 = '30 Days of'
let substring2 = 'JavaScript'

console.log(substring1 + ' ' + substring2) //30 Days of JavaScript

//25

console.log(challenge.repeat(2)) //30 Days Of JavaScript30 Days Of JavaScript

//Exercise Level 2

//1
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us/ to help one another.`)


//2
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

//3
let num = '10'
let convertNum = +num

console.log(convertNum == 10) //true
console.log(typeof '10' == 10) //false


//4
let num2 = parseFloat('9.8')
console.log(num2 == 10) //false

console.log(Math.ceil(num2) === 10)  //true


//5 

let text1 = 'Python'
let text2 = 'Jargon'

console.log(text1.includes('on')) //true
console.log(text2.includes('On')) //false ---> case sensitive


//6
let text3  = 'I hope this course is not full of jargon'
console.log(text3.includes('jargon')) //true

//7
let random  =  Math.floor(Math.random() * 101) 
console.log(random) // 0 to 100


//8
let randNum =   Math.floor(Math.random()  * 51) + 50
console.log(randNum) // 50 * 100

//9
let randNumm =   Math.floor(Math.random()  * 256) 
console.log(randNum) // 0 to 255

//10

//Access JavaScript using random generator
let word = 'JavaScript'
let randomm = Math.floor(Math.random() * word.length + 1)
console.log(word[randomm])

//11
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t63\n5\t1\t5\t25\t125\n')

/*

1	1	1	1	1
2	1	2	4	8
3	1	3	9	27
4	1	4	16	63
5	1	5	25	125


*/


//12

let fsentence  = "You cannot end a sentence with because because because is a conjunction"

console.log(fsentence.substr(30, 24)) // because because because





const nums = [2,7,11,15]
let targetRandom = Math.floor(Math.random() * nums.length - 1) 
let target = 22

let indices = nums[targetRandom] + nums[targetRandom]


if(indices == target)
{
    console.log('Matched')
}
else
{
   console.log('Mismatched')
}

//Exercise Level 3

//1
let text = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
let count = text.match(/love/gi).length
console.log(count) //3


//2
let text4 = "You cannot end a sentence with because because because is a conjunction"
let count2 = text4.match(/because/gi).length
console.log(count2) //3


//3
    const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    console.log(sentence2.replace(/[%@#&;$]/g, ''));
    //I am a teacher, and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher!? This 30DaysOfJavaScript is also the result of love of teaching

//4

let text5 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month'
let extraact = text5.match(/\d+/g)
let sum = parseInt(extraact[0] * 12) +  parseInt(extraact[1]) +  parseInt(extraact[2]  * 12)

console.log(sum) //250000
















































