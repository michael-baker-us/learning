// my current age
const myAge = 29
// variable that needs to change
let earlyYears = 2
earlyYears *= 10.5
// my age minus 2
let laterYears = myAge - 2
//later years in dog years
laterYears *= 4
//my age in dog years
let myAgeInDogYears = earlyYears + laterYears
// my name in lowercase
let myName = 'Michael'.toLowerCase()


console.log(myAge)
console.log(earlyYears)
console.log(laterYears)
console.log(myAgeInDogYears)
console.log(myName)

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`)