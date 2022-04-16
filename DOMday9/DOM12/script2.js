

//<li class="one" class="two">listName </li>

let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonOne = document.querySelector('button')
let olList = document.querySelector('ol')

// tagName
// class
//id 
//generic method

console.log(ulList)
console.log(inputText)
console.log(buttonOne)

// <li>Grapes</li>
//  

buttonOne.addEventListener('click',function(){
    let newText = inputText.value
    let liEle = document.createElement('li') // <li></li>
    liEle.textContent = newText // <li>Chiku</li>
    ulList.appendChild(liEle)
    
})

