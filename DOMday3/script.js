let list = document.querySelectorAll('li')     //puri list slected
console.log(list)
//list works as array here called node.list 

let classOne = document.querySelectorAll('.dosti')
for(let i=0 ; i< classOne.length; i++){
     
    classOne[i].style.color = "red"

}

// for(let i = 0 ; i < list.length ; i++){
//     //console.log(liLiist)
    
//   console.log(list[i].textContent)
//     list[i].style.color = "green"

//  }
 list[0].style.color = "purple"
 list[list.length-1].style.color= "purple"     //last elemt coloured
 
  let classOn = document.querySelectorAll('.dosti')
 for(let i=0 ; i< classOn.length; i++){
      
     classOn[i].style.color = "yellow"
 
 }

