let ullist = document.querySelector('ul')
let entertext = document.querySelector('input')
let buttonA = document.querySelector('button')
let ollist = document.querySelector('ol')

console.log(ullist)
console.log(entertext)
console.log(buttonA)
console.log(ollist)


buttonA.addEventListener('click', function () {

  let newMember = entertext.value
  let newelement = document.createElement('li')
  newelement.textContent = newMember
  ollist.appendChild(newelement)

  let first = entertext.value
  let two = document.createElement('li')
  two.textContent = first
  ullist.appendChild(two)

})