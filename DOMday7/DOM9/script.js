// find the element 
// <h1 class="one" id = "two">Heading</h1>


// By TagName
let  headingOne = document.querySelector('h1')
console.log(headingOne)

// By Class

let byClass = document.querySelector('.one')
console.log(byClass)

// By Id

let byID = document.querySelector('#two')
console.log(byID)

// common 

// tagName[attribute=value]
let k = document.querySelector('h1[name="nm"]')
console.log(k)


// button

let buttonA = document.querySelector('button')
console.log(buttonA)

// element select --->
// tagName , class , id , tagName[attribute="value"]
// click dbclick , mouserover , mouseout


// buttonA.addEventListener('click',function(){
//     k.style.color = "blue"

// })

// // <h1 class="one" id = "two">Heading</h1>
// console.log(k.textContent)


// program 2

buttonA.addEventListener('mouseover',function(){

    k.textContent ="HeadingTwo"
    k.style.color = "red"


})

// object -- method and property








// let person = {

//     fullName:"chinmay deshpande",
//     age:12,
//     skills:["python","css"], // javascript
//     parents:{
//         father:"shirsh",
//         mother:"kanchan" // "kanchan D"
//     }

// }

// person.parents.mother = "kanchan D"
// console.log(person)
// person['parents']['father'] = "Shirish M"
// person.skills.push('javscript')
// console.log(person)


// let r = {

//     color:'red',
//     age:123

// }

// // retrive 

// console.log(r.color)
// console.log(r['color'])

// // add 

// r.language = "marathi"
// r['city'] = "pune"


// // update 

// r.age = 55
// r['age'] = 66

// // delete 

// delete r.age
// delete r['city']







// // let r =  [11,33,44]

// // let ra = 10

// // let hh  = "chinmay"

// // let gh = true