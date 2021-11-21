alert("hello")
// Selectors
let clearCompleted = document.querySelector('.btn-clear')
let list = document.querySelector('#list')
let count =document.querySelector('#count-items-todo')
let inputWrapper=document.getElementsByClassName('input-wrapper')
let input = document.querySelector('#input')
let inputCheck=document.querySelector('#input-check')
let sun = document.getElementById('sun')
let moon = document.getElementById('moon')
let todoListWrapper=document.querySelector('.todo-list-wrapper')
let  hr=document.getElementById('hr')
let textDo=document.getElementsByClassName('text-do')[0]
// **************************** AddToDoList ****************************



// **************************** DarkMode ****************************

// Function
function btnSwitch() {
    if (moon.style.display ==='block') {
        document.body.style.backgroundImage = "url('image/img_1.png')";
        document.body.style.backgroundColor = "#161722";
        inputWrapper[0].style.boxShadow='0 35px 50px rgb(0 0 0 / 50%)'
        todoListWrapper.style.backgroundColor='#25273c';
        todoListWrapper.style.boxShadow='0 35px 50px rgb(0 0 0 / 50%)'
        inputWrapper[0].style.backgroundColor='#25273c';
        hr.style.border='0.5px solid #676666'
        sun.style.display='block';
        moon.style.display='none';
        inputCheck.style.border='1px solid #676666'
        textDo.style.color='#676666'
    } else {
        document.body.style.backgroundImage = "url('image/img.png')";
        document.body.style.backgroundColor = "#fff";
        inputWrapper[0].style.boxShadow=' 0 35px 50px rgb(194 195 214 / 50%)'
        todoListWrapper.style.backgroundColor="#fff";
        todoListWrapper.style.boxShadow=' 0 35px 50px rgb(194 195 214 / 50%)'
        inputWrapper[0].style.backgroundColor='#fff'
        sun.style.display = "none";
        moon.style.display = "block"
        hr.style.border=' 0.5px solid #EEEEEE'
        inputCheck.style.border='1px solid #e4e5f1'
        textDo.style.color='#cacde8'
    }
}



