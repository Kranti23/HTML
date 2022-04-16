//document.querySelector('li')

let liLiist = document.querySelectorAll('li')
console.log(liLiist)

let g = document.querySelectorAll('.yellow')

for(let i = 0 ; i <g.length ; i++){
    //console.log(liLiist)
  
    g[i].style.color = "brown"

}

// for(let i = 0 ; i < liLiist.length ; i++){
//     //console.log(liLiist)
//     console.log(liLiist[i].textContent)
//     liLiist[i].style.color = "green"

// }

//to make even numberd indexes of the list coloured
// for(let i = 0 ; i < liLiist.length ; i = i+2){
//     if(i % 2 == 0){
//         liLiist[i].style.color = "green"
//     }
//     else {
//         liLiist[i].style.color = "red"

//     }
// }

 liLiist[0].style.color = "purple"
liLiist[liLiist.length-1].style.color= "purple"     //last elemt coloured



// 7 am .... 9 pm .....  7 to 8

