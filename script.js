let rezultati = document.querySelector('.result')
let inputi = document.querySelector('input')
let butonat = document.querySelectorAll('button')

let [btnCheck, btnAdd, btnDelete, btnShow, btnClear] = butonat

let itemsArray = []
function Add(){
    itemsArray.push(inputi.value)
    localStorage.setItem("items",itemsArray)
}


function Check(){
    let itemsArray = localStorage.getItem('items')
    if (itemsArray.includes(inputi.value)) {
        rezultati.textContent = inputi.value + "egziston ne localStorage"
    }
    else {
        rezultati.textContent = inputi.value + "nuk egziston ne localStorage"
    }
}

function Delete() {
let itemsArray = localStorage.getItem('items')
let indexiEl = itemsArray.indexOf(inputi.value)
itemsArray.splice(indexiEl, 1)
localStorage.setItem("items", itemsArray)
rezultati.textContent = inputi.value + " eshte fshi prej localStorage"
}
function Show(){
    let itemsArray = localStorage.getItem('items')
    rezultati.textContent = 'elementet ne localStorage jane:' + itemsArray
}
function Clear(){
    localStorage.clear()
    rezultati.textContent = 'localStorage eshte fshi'
}
btnCheck.addEventListener('click', Check)
btnAdd.addEventListener('click', Add)
btnDelete.addEventListener('click', Delete)
btnShow.addEventListener('click', Show)
btnClear.addEventListener('click', Clear)