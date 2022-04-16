
//<h1 class ='one' id ="two">HeadingOne</h1>

//By tagName

let tagName = document.querySelector('h1')
console.log(tagName)
let className = document.querySelector('.one')
console.log(className)
let idName= document.querySelector('#two')
console.log(className)
let forA = document.querySelector('h1[class="one"]')
console.log(forA)


//------------------------------------------------->

let para = document.querySelector('p')
console.log(para)
let buttonA = document.querySelector('button')
console.log(buttonA)


buttonA.addEventListener('click',function(){
    para.style.color = "red"
    idName.textContent = "headingTwo"

})

//-------------------------------------->
