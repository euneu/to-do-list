const toDoForm = document.querySelector("#todoForm");
const toDoInput = document.querySelector("#todoForm input");
const toDoList = document.querySelector("#todoList");

const TODOS_KEY = "todos";

//기존에 있던 todo에 새로운걸 추가할 거니까 let
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id != parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.classList.add("todolist");
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";

    button.addEventListener("click", deleteToDo)

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    button.addEventListener("click", deleteToDo); 
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}


toDoForm.addEventListener("submit", handleToDoSubmit)


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const paredToDos = JSON.parse(savedToDos);
    //예전에 있던 거 복원
    toDos = paredToDos;
    paredToDos.forEach(paintToDo);
}