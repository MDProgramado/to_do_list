export class TodoController {
    constructor(model, view){
        this.model = model;
        this.view = view;

        this.currentEditId = null;

        this.initListenrs();
    }

    initListenrs(){
        document.querySelector('#todo-form').addEventListener('submit', (event) => {
            event.preventDefault();

            const text = this.view.getTodoText();
            if(text){
                const todo = this.model.addTodo(text);
                this.view.renderTodo(todo);
                this.view.resetInput();
            }
        });

        document.addEventListener('click', (event) => {
            const targetEl = event.target;
            const parentEl = targetEl.closest('div');

            if(!parentEl){
                return;
            }
            const id = Number(parentEl.dataset.id);
            if(targetEl.classList.contains('finish-todo')){
                this.model.toggleDone(id);
                parentEl.classList.toggle('done');
            }
            if(targetEl.classList.contains('remove-todo')){
                this.model.removeTodo(id);
                this.view.removeTodoElement(parentEl);
            }

            if(targetEl.classList.contains('edit-todo')){
                this.view.toggleForms();
                this.view.editInput.value = parentEl.querySelector('h3').innerText;
                this.currentEditId = id;
            }
        });

        document.querySelector('#edit-form').addEventListener("submit", (event) => {
            event.preventDefault();
            const newText = this.view.editInput.value;
            if(newText){
                this.model.editTodo(this.currentEditId, newText);
                this.view.updateTodoElement(this.currentEditId, newText);
                this.view.toggleForms();
            }
        })
    }
}