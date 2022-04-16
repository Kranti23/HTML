
let ulList = document.querySelector('ul')
let button = document.querySelector('#one')
let inputText = document.querySelector('input')


button.addEventListener('click',function(){
    let text = inputText.value              //read kely text
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text //<li>Chiku</li>
    CreateButton(newLi)
    ulList.appendChild(newLi)
})

ulList.addEventListener('click',function(event){

    if(event.target.tagName == "BUTTON"){
        if(event.target.classList == "remove"){
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)

        }
        if(event.target.classList == "up"){
            let li = event.target.parentElement
            let prevLi =  li.previousElementSibling // null
            //console.log(prevLi,"this is pre elem sibling")
            let ul = prevLi.parentElement
            
            if(prevLi){
                ul.insertBefore(li,prevLi)
            }
            
        }
        if(event.target.classList == "down"){

            let li = event.target.parentElement
            let nextLi =  li.nextElementSibling
            let ul = nextLi.parentElement
            if(nextLi){
                ul.insertBefore(nextLi,li)
            }
            

        }


    }




})


function CreateButton(li){

    // <button class = "remove">Remove</button>
    //     <button class = "up">Up</button>
    //         <button class = "down">Down</button>


    let remove = document.createElement('button') // <button></button>
    remove.textContent = "Remove" // <button> remove</button>
    remove.classList = "remove" // <button class = "remove">remove </button>
    li.appendChild(remove)

    let up = document.createElement('button') 
    up.textContent = "Up" 
    up.classList = "up" 
    li.appendChild(up)

    // let down = document.createElement('button') 
    down.textContent = "Down" 
    down.classList = "down" 
    li.appendChild(down)
    

}