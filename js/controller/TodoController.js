export class TodoController {
    constructor(model, view){
        this.model = model;
        this.view = view;

        this.filterState = {
            text: "",
            status: 'all' 
        };
        
        this.view.renderTodoList(this.model.todos);
        this.currentEditId = null;

     
        this.initListeners(); 
    }

    applyFilters(){
        let result = this.model.todos;


        switch(this.filterState.status){
            case 'done':
                result = result.filter(todo => todo.done);
                break;
            case 'todo':
                result = result.filter(todo => !todo.done);
                break;     
             default:
                break;   
        }


        if(this.filterState.text){
            const term = this.filterState.text.toLowerCase();
            result = result.filter(todo => 
                todo.text.toLowerCase().includes(term)
            );
        }

       
        this.view.renderTodoList(result);
    }

    initListeners(){
  
        document.querySelector('#todo-form').addEventListener('submit', (event) => {
            event.preventDefault();
            const text = this.view.getTodoText();
            if(text){
                this.model.addTodo(text);
                this.view.resetInput();
                this.applyFilters(); 
            }
        });

  
        document.addEventListener('click', (event) => {
            const targetEl = event.target;
            const parentEl = targetEl.closest('.todo'); 

            if(!parentEl) return;

            const id = Number(parentEl.dataset.id);
            
            if(targetEl.classList.contains('finish-todo')){
                this.model.toggleDone(id);
                this.applyFilters(); 
            }

            if(targetEl.classList.contains('remove-todo')){
                this.model.removeTodo(id);
                this.applyFilters();
            }

            if(targetEl.classList.contains('edit-todo')){
                this.view.toggleForms();
                const currentText = parentEl.querySelector('h3').innerText;
                this.view.editInput.value = currentText;
                this.currentEditId = id;
            }
        });


        document.querySelector('#edit-form').addEventListener("submit", (event) => {
            event.preventDefault();
            const newText = this.view.editInput.value;
            if(newText){
                this.model.editTodo(this.currentEditId, newText);
                this.view.toggleForms(); 
                this.applyFilters(); 
            }
        });

  
        this.view.bindSearch((searchTerm) => {
            this.filterState.text = searchTerm;
            this.applyFilters();
        });

        this.view.bindFilter((filterStatus) => {
            this.filterState.status = filterStatus;
            this.applyFilters();
        });
    }
}