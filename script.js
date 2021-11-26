// alert("hello")
// Selectors
let clearCompleted = document.querySelector('.btn-clear')
let list = document.querySelector('#list')
let count = document.querySelector('#count-items-todo')
let inputWrapper = document.getElementsByClassName('input-wrapper')
let input = document.querySelector('#input')
let inputCheck = document.querySelector('#input-check')
let sun = document.getElementById('sun')
let moon = document.getElementById('moon')
let todoListWrapper = document.querySelector('.todo-list-wrapper')
let hr = document.getElementsByClassName('hr')
let textDo = document.getElementsByClassName('text-do')
let close = document.getElementById('close')
let iStyle = document.querySelector('.i-style')
// **************************** Classes names ****************************
const CHECK = "btn-select";
const UNCHECK = "btn-Unselect";
const LINE_THROUGH = "text-do";
// **************************** Variabls ****************************
let LIST, id;
// **************************** Get item form localstorage ****************************
let data = localStorage.getItem("TODO")
// **************************** Check if data is not empty****************************
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
} else {
    LIST = [];
    id = 0;
}

//load items to the users interface
function loadList(array) {
    array.forEach(function (item) {
        addToDo(item.name, item.id, item.done, item.trash)
    });
}

// **************************** Add To Do Function ****************************
function addToDo(toDo, id, done, trash) {
    if (trash) {
        return;
    }
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : '';

    const item = `
                    <li id="item" >
                    <button class="btn-style ${DONE}" job="complete" id="${id}"><i class="fas fa-check i-style" ></i></button>
                    <p class=" ${LINE} text-style">${toDo}</p>
                    <div id="close"  >
                        <svg id="${id}" job="remove"  xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                            <path fill="#494C6B" fill-rule="evenodd"
                                  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"></path>
                        </svg>
                    </div >
                 
                </li>
                <hr class="hr"> 
              
`;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);
}

// addToDo('coffe',1,true,false);
//**************************** Add an item to the list user the enter key ****************************
const addInput = (e) => {
    const toDo = input.value;
    e.preventDefault();
    addToDo(toDo, id, false, false);
    LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false,
    });
    // add item to localstorage
    localStorage.setItem("TODO", JSON.stringify(LIST));
    id++;
    input.value = "";
    location.reload()

}

inputCheck.addEventListener('click', addInput)
// **************************** Item Left ****************************
function itemLeft(){
    let count=0;
    LIST.forEach(item=>{
        if(!item.done){
            count++
        }
    })
    document.getElementById('item-left').innerHTML=`${count}`+"items left"

}
itemLeft();

// **************************** Complete to do ****************************
function completeTodo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector('.text-style').classList.toggle(LINE_THROUGH);
    console.log(LIST[element.id].done)
    LIST[element.id].done = LIST[element.id].done ? false : true;

}

// **************************** Remove to do ****************************
function removeToDo(element) {
    element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode);
    LIST[element.id].trash = true;
}

// **************************** Target the items created dynamically ****************************
list.addEventListener('click', function (event) {
    const element = event.target;
    console.log(element)
    const elementJob = element.attributes.job.value;
    if (elementJob === 'complete') {
        completeTodo(element)
        itemLeft();

    } else if (elementJob === 'remove') {
        removeToDo(element)
    }
    // add item to localstorage
    localStorage.setItem("TODO", JSON.stringify(LIST))

});
// **************************** Clear Completed ****************************
clearCompleted.addEventListener('click',function (){
    // console.log(LIST)
    // let filteredArray = LIST.filter(value => value.done === true);
    // console.log(LIST)
    // console.log(filteredArray)
    // filteredArray.remove();
    localStorage.clear();
    location.reload();
})
// **************************** DarkMode ****************************
function btnSwitch() {
    console.log(hr)
    if (moon.style.display === 'block') {
        document.body.style.backgroundImage = "url('image/img_1.png')";
        document.body.style.backgroundColor = "#161722";
        inputWrapper[0].style.boxShadow = '0 35px 50px rgb(0 0 0 / 50%)'
        todoListWrapper.style.backgroundColor = '#25273c';
        todoListWrapper.style.boxShadow = '0 35px 50px rgb(0 0 0 / 50%)'
        inputWrapper[0].style.backgroundColor = '#25273c';
        sun.style.display = 'block';
        moon.style.display = 'none';
        inputCheck.style.border = '1px solid #676666'
        document.documentElement.style.setProperty('--filter-hover-color', '#fff');
        document.documentElement.style.setProperty('--hr-color', '#676666');
        document.documentElement.style.setProperty('--text-color', '#4d5066');
    } else {
        document.body.style.backgroundImage = "url('image/img.png')";
        document.body.style.backgroundColor = "#fff";
        inputWrapper[0].style.boxShadow = ' 0 35px 50px rgb(194 195 214 / 50%)'
        todoListWrapper.style.backgroundColor = "#fff";
        todoListWrapper.style.boxShadow = ' 0 35px 50px rgb(194 195 214 / 50%)'
        inputWrapper[0].style.backgroundColor = '#fff'
        sun.style.display = "none";
        moon.style.display = "block"
        inputCheck.style.border = '1px solid #e4e5f1'
        document.documentElement.style.setProperty('--filter-hover-color', '#cacde8');
        document.documentElement.style.setProperty('--hr-color', '#EEEEEE');
        document.documentElement.style.setProperty('--text-color', '#cacde8');
    }
}
// **************************** Drag And Drop ****************************
let  drag=document.getElementById("item");
new Sortable(drag,{animation:350,group:'shared',ghostClass:'blue-background-class'})


