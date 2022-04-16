alert("hello")
let list = document.querySelector('ul')
let entertext = document.querySelector('input')
let buttonOne = document.querySelector('#one')
let ollist = document.querySelector('ol')

buttonOne.addEventListener('click',()=> {

    let newMember = entertext.value
    let newlist = document.createElement('li')     //<li></li>
    newlist.textContent = newMember              //<li>new html text</li>

    CreateButton(newlist)
    list.appendChild(newlist)
    

})

function CreateButton(li) {         //creating button for new added element

    let buttonA = document.createElement('button')      // <button></button>
    buttonA.textContent = "Remove"       // <button>remove</button>
    buttonA.classList = "remove"        //<button class = "remove">remove</button> 
    //remove.className = "remove"
    //remove.id = 'one'
    li.appendChild(buttonA)

    let buttonB = document.createElement('button')
    buttonB.textContent = "Up"
    buttonB.classList = "up"
    li.appendChild(buttonB)

    let buttonC = document.createElement('button')
    buttonC.textContent = "Down"
    buttonC.classList = "down"
    li.appendChild(buttonC)

}




