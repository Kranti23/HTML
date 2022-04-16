

let buttonA = document.querySelector('button')
let headOne = document.querySelector('h1')
let inputText = document.querySelector('input')

console.log(buttonA)
console.log(headOne)
console.log(inputText)

buttonA.addEventListener('click',function(){

    let a = inputText.value
    headOne.style.color = a
    inputText.value = " "


})

