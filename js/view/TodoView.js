export class TodoView {
    constructor() {
        this.todoList = document.querySelector('#todo-list');
        this.todoInput = document.querySelector('#todo-input');
        this.editForm = document.querySelector('#edit-form');
        this.todoForm = document.querySelector('#todo-form');
        this.editInput = document.querySelector('#edit-input');
        
    
        this.searchInput = document.querySelector('#search-input');
        this.filterSelect = document.querySelector('#filter-select');
        this.eraseBtn = document.querySelector('#erase-button');
    }

    getTodoText() {
        return this.todoInput.value;
    }

    resetInput() {
        this.todoInput.value = "";
        this.todoInput.focus();
    }

    toggleForms() {
        this.editForm.classList.toggle('hide');
        this.todoForm.classList.toggle('hide');
        this.todoList.classList.toggle('hide'); 
    }

  
    renderTodoList(todos) {
        this.todoList.innerHTML = ""; 

        if (todos.length === 0) {
           this.todoList.innerHTML = `
        <div class="empty-state">
            <i class="fa-solid fa-clipboard-list"></i>
            <p>Nenhuma tarefa por aqui... Que tal adicionar uma?</p>
        </div>`;
            return;
        }


        todos.forEach(todo => {
            const todoElement = this.createTodoItem(todo);
            this.todoList.appendChild(todoElement);
        });
    }


    createTodoItem(todoData) {
        const todo = document.createElement('div');
        todo.classList.add('todo');
        todo.dataset.id = todoData.id;

        if (todoData.done) {
            todo.classList.add('done');
        }

  
        const todoTitle = document.createElement('h3');
        todoTitle.innerText = todoData.text;
        todo.appendChild(todoTitle);

   
        const doneBtn = document.createElement('button');
        doneBtn.classList.add('finish-todo');
        doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
        doneBtn.setAttribute('aria-label', 'Concluir tarefa');
        todo.appendChild(doneBtn);

      
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-todo');
        editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
        doneBtn.setAttribute('aria-label', 'Editar tarefa');
        todo.appendChild(editBtn);


        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('remove-todo');
        deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        doneBtn.setAttribute('aria-label', 'Excluir tarefa');
        todo.appendChild(deleteBtn);

        return todo;
    }


    bindSearch(handler) {
        this.searchInput.addEventListener('input', event => {
            handler(event.target.value);
        });
        
       
        if(this.eraseBtn) {
            this.eraseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.searchInput.value = "";
                handler("");
            });
        }
    }

    bindFilter(handler) { 
        this.filterSelect.addEventListener('change', event => {
            handler(event.target.value);
        });
    }
}