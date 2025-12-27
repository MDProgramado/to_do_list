export class TodoModel {
    constructor() {
       
        const savedTodos = localStorage.getItem('todos');
        this.todos = savedTodos ? JSON.parse(savedTodos) : [];
    }

    _commit(todos) {
        this.todos = todos;
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    addTodo(text) {
        const todo = {
            id: Date.now(),
            text: text,
            done: false
        };
       
        this._commit([...this.todos, todo]);
        return todo;
    }

    removeTodo(id) {
       
        const newTodos = this.todos.filter(todo => todo.id !== id);
        this._commit(newTodos);
    }

    toggleDone(id) {
       
        const newTodos = this.todos.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        );
        this._commit(newTodos);
    }

    editTodo(id, newText) {
        
        const newTodos = this.todos.map(todo =>
            todo.id === id ? { ...todo, text: newText } : todo
        );
        this._commit(newTodos);
    }
}