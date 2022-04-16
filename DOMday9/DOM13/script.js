//<li class="one" class="two">listName </li>
let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonOne = document.querySelector('#jkl')
//let olList = document.querySelector('ol')

// tagName
// class
//id 
//generic method

console.log(ulList)
console.log(inputText)
console.log(buttonOne)

// <li>Grapes</li>  
buttonOne.addEventListener('click', function () {
    let newText = inputText.value
    let liEle = document.createElement('li') // <li></li>
    liEle.textContent = newText // <li>Chiku</li>
    CreateButton(liEle)
    ulList.appendChild(liEle)
})

function CreateButton(li) {        //creating button for new added element

    let remove = document.createElement('button')           // <button></button>
    remove.textContent = "remove"         // <button>remove</button>
    remove.classList = "remove"         //<button class = "remove">remove</button> /
    //remove.className = "remove"
    //remove.id = 'one'
    li.appendChild(remove)

    let up = document.createElement('button')
    up.textContent = "up"
    up.classList = "up"
    li.appendChild(up)

    let down = document.createElement('button')
    down.textContent = "down"
    down.classList = "down"
    li.appendChild(down)

}



