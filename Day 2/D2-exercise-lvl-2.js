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


let accessString = 'Javascript'
let randomNumber4 = Math.random() * accessString.length // 0 - 10.99
let accessStringIndex = Math.floor(randomNumber4) //0 - 10

console.log(accessString.charAt(accessStringIndex)) // prints every letter from accessStrinng