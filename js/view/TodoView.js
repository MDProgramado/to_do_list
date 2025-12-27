export class TodoView {
    constructor(){
        this.todoList = document.querySelector('#todo-list');
        this.todoInput = document.querySelector('#todo-input');
        this.editForm = document.querySelector('#edit-form');
        this.todoForm = document.querySelector('#todo-form');
        this.editInput = document.querySelector('#edit-input');
    }

    getTodoText(){
        return this.todoInput.value;
    }
    resetInput(){
        this.todoInput.value = "";
        this.todoInput.focus();
    }

    renderTodo(todoData){
        const todo = document.createElement('div');
        todo.classList.add('todo');
        todo.dataset.id = todoData.id;

        if(todoData.done){
            todo.classList.add('done');
        }

        const todoTitle = document.querySelector('h3');
        todoTitle.innerHTML = todoData.text;
        todo.appendChild(todoTitle);

        const doneBtn = document.createElement('button');
        doneBtn.classList.add('finish-todo');
        doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
        todo.appendChild(doneBtn);


        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-todo');
        editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
        todo.appendChild(editBtn);

    
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('remove-todo'); 
        deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        todo.appendChild(deleteBtn);

        this.todoList.appendChild(todo);
    }

    toggleForms(){
        this.editForm.classList.toggle('hide');
        this.todoForm.classList.toggle('hide');
    }

    updateTodoElement(id, newText){
        const todoEl = document.querySelector(`[data-id="${id}"]`);
        if(todoEl){
            todoEl.querySelector('h3').innerText = newText;
        }
    }
    removeTodoElement(element){
        element.remove();
    }
}