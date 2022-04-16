let list = document.querySelector('ul')
let entertext = document.querySelector('input')
let buttonA = document.querySelector('#one')

buttonA.addEventListener('click',()=>{
     let newtext = entertext.value
     let newplace = document.createElement('li')
     newplace.textContent = newtext          //textcontent se new HTML TEXT milega

      CreateButton(newplace)
     list.appendChild(newplace)
})

list.addEventListener('click',function(event){     //event inbuilt hai

    if(event.target.tagName == "BUTTON"){
        if(event.target.classList == "remove"){
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }
        if(event.target.classList == "up"){   //button ka parent hai li
            let li = event.target.parentElement      //button ke parent ko target kiya jo hai li 
            let prevLi =  li.previousElementSibling // null  
                      //li n preLi siblings hai uske parent hai ul        //saare li ka parent ul
            let ul = prevLi.parentElement     
                                              //up wrt to prev elme hoga
            if(prevLi){
                ul.insertBefore(li,prevLi)   //insertbefore ke sath pure li i.e uske buttons bhi milenge
        // li ko prevLi ke pehle dalna hai jab class up hai and tagname is button 
            }
        }
        if(event.target.classList == "down"){

            let li = event.target.parentElement
            let nextLi =  li.nextElementSibling         //down wrt nxt elem hoga
            let ul = nextLi.parentElement        
            if(nextLi){
                ul.insertBefore(nextLi,li)        //next sibling/el ko pehle wale li ke pehle dalna,class is down
            }
        }
    }
})


function CreateButton(li){
  let buttonOne = document.createElement('button')
   buttonOne.textContent = "Remove"
   buttonOne.className = "remove"
  li.appendChild(buttonOne)


let buttonTwo = document.createElement('button')
buttonTwo.textContent = "Up"
buttonTwo.classList = "up"
li.appendChild(buttonTwo)

let button3 = document.createElement('button')
button3.textContent = "Down"
button3.classList = "down"
li.appendChild(button3)

}

