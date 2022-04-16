
let headingone = document.querySelector('h1')
let inputText = document.querySelector('input')
let buttonOne = document.querySelector('button')

console.log(headingone)
console.log(inputText)
console.log(buttonOne)

buttonOne.addEventListener('click',function(){
let result = inputText.value
headingone.style.color = result
result.textContent = " "
// inputText.value = " "

})

// console.log('file attached')