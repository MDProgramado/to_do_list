const todoform = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#edit-form");
const editform = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");


const saveTodo = (text) => {
    const todo = document.createElement('div');
    todo.classList.add("todo");

    const todotitle = document.createElement('h3');
    todotitle.innerText = text;
    todo.appendChild(todotitle)


    const editBtn = document.createElement('button');
editBtn.classList.add('edit-todo')
editBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(editBtn);

        const  doneBtn = document.createElement('button');
    doneBtn.classList.add('finish-todo')
    doneBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(doneBtn);


       const  deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-todo')
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.append(deleteBtn)

    todoList.appendChild(todo)

    todoInput.value = "";
    todoInput.focus()
}

todoform.addEventListener("submit", (event) => {
    event.preventDefault()

    const inputValue = todoInput.value;
    
    if(inputValue){
        saveTodo(inputValue)
    }
})