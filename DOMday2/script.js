//TO FIND THE ELEMENT--->> class,id,tagname,button,tagname[attribute="value"]
//<h1 class = "job" id="key" id="mtech" name ="nm" > htmltextheading </h1>

//BY TAGNAME
let headingone = document.querySelector("h1")
console.log(headingone)

//BY CLASS
let classone = document.querySelector(".job ")
console.log(classone)

//BY ID
let idone = document.querySelector("#mtech")
console.log(idone)

//COMMON FORMAT 
//tagname[attribute="value"]
let k = document.querySelector('li[class = "job"]')
// let aaa = document.querySelector('h1[name = "nm"]')
console.log(k)
// console.log(aaa)

//BY BUTTON
let rr = document.querySelector("button")
console.log(rr)

//Action: click, dbclick, mouseover, mouseout
// rr.addEventListener('mouseout',function(){
//     k.style.color = "red"
// })
// console.log(k.textContent)             //textContent -->gives new html text

 rr.addEventListener('click',function(){
   k.style.color = "darkbrown"
   k.textContent = "anotherheading"
})






