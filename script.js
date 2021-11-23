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
let hr = document.querySelectorAll('.hr')
let textDo = document.querySelector('.text-do')
let close=document.getElementById('close')
let iStyle=document.querySelector('.i-style')
// **************************** Classes names ****************************
const CHECK = "btn-select";
const UNCHECK = "btn-Unselect";
const LINE_THROUGH = "text-do";

// **************************** Variabls ****************************
let  LIST=[], id=0;


// **************************** Add To Do Function ****************************
function addToDo(toDo,id,done,trash) {
    if(trash){return;}
    const DONE=done? CHECK:UNCHECK;
    const LINE=done?LINE_THROUGH:'';

    const item = `
                    <li id="item" >
                    <button class="btn-style ${DONE}"  job="complete"><i class="fas fa-check i-style "  id="${id}"></i></button>
                    <p class=" ${LINE} text-style">${toDo}</p>
                    <div id="close" job="delete">
                        <svg id="${id}"  xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                            <path fill="#494C6B" fill-rule="evenodd"
                                  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"></path>
                        </svg>
                    </div>
                </li>
                <hr class="hr">
`;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);


}

// addToDo('coffe',1,true,false);

//**************************** Add an item to the list user the enter key ****************************
const addInput = (e) => {
    const toDo=input.value;
    e.preventDefault();
    addToDo(toDo,id,false,false);
    LIST.push({
        name:toDo,
        id:id,
        done:false,
        trash:false,
    });
    id++;
    input.value="";
}

inputCheck.addEventListener('click', addInput)

// **************************** Complete to do ****************************
function completeTodo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH)
    LIST[element.id].done=list[element.id].done?false:true;
}

// **************************** Remove to do ****************************
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash=true;
}

// **************************** Target the items created dynamically ****************************

// document.querySelector('.btn-style').attributes.job = 'complete' ;
// close.attributes.job='remove'
list.addEventListener('click',function (event){
    const element=event.target;
    console.log(element)
    const elementJob=element.attributes.job.value;
    if (elementJob==='complete'){
        completeTodo(element)

    }else if(elementJob==='remove'){
        removeToDo(element)
    }
});

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
        textDo.style.color = '#676666'
        hr.style.border = '0.5px solid #676666'


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
        textDo.style.color = '#cacde8'
        hr.style.border = ' 0.5px solid #EEEEEE'


    }
}



