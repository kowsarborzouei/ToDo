alert("hello")
//Select the elements
let clearCompleted = document.querySelector('.btn-clear')
let list = document.querySelector('#list')

let count =document.querySelector('#count-items-todo')

// **************************** AddToDoList ****************************
let inputCheck=document.querySelector('#input-check')
let input = document.querySelector('#input')

// **************************** DarkMode ****************************
// Selectors
let sun = document.querySelector('#sun')
let moon = document.querySelector('#moon')
let btnSwitch = document.querySelector('#btn-switch')
// Function
btnSwitch.onclick = function () {
    if (moon.style.display !== 'none') {
        document.body.style.backgroundImage = "url('image/img_1.png')";
        document.body.style.backgroundColor = "#161722";
        sun.style.display = "block";
        moon.style.display = "none";
    } else {
        document.body.style.backgroundImage = "url('image/img.png')";
        document.body.style.backgroundColor = "#fff";
        sun.style.display = "none";
        moon.style.display = "block"
    }
}



