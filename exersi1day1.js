const arr = []
console.log(arr)//1

const fiveElement = [
    10,
    2,
    3,
    4, //middle
    5,
    6,
    7
]
console.log(fiveElement)//2

console.log(fiveElement.length)//3

console.log(fiveElement[0])
// let lengthArr = fiveElement.length-1
// let middle = lengthArr/2
// console.log(fiveElement[middle])
// console.log(fiveElement[lengthArr])//4

const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
]//6

console.log(itCompanies)//7
console.log(itCompanies.length)//8

let lengthArr = itCompanies.length-1
let middle = lengthArr/2
console.log(itCompanies[0])
console.log(itCompanies[middle])
console.log(itCompanies[lengthArr])//9

for(let x = 0; x <7; x++){
    console.log(itCompanies[x])
}//10

for(let x = 0; x <7; x++){
    console.log(itCompanies[x].toUpperCase())
}//11

let cut = itCompanies.slice(0, 6)//12
console.log(cut.join(', ')+` and ${itCompanies[6]} are big IT companies.`)//12

// let company = prompt("What company? (begins with a capital letter)")//13
// if (itCompanies.indexOf(company) != -1){
//     console.log('the company')
// } else {
//     console.log('company is not found')
// }

// console.log(itCompanies.splice(3, 4))//14

// itCompanies.sort()
// console.log(itCompanies)//15

// console.log(itCompanies.reverse())//16

// console.log(itCompanies.slice(0,3))//17

// console.log(itCompanies.slice(4, itCompanies.length))//18

// console.log(itCompanies.slice(3, 4))//19

// itCompanies.shift()
// console.log(itCompanies)//20

// const newArr = itCompanies.splice(3, 1)
// console.log(itCompanies)//21

// itCompanies.pop()
// console.log(itCompanies)//22

const newArr = itCompanies.splice(0, itCompanies.length)
console.log(itCompanies)//21
