export class TodoModel {
    constructor(){
        this.todos = [];
    }

    addTodo(text){
        const todo = {
            id: Date.now(),
            text: text,
            done: false
        };
        this.todos.push(todo);
        return todo;
    }

    removeTodo(id){
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
    toggleDone(id){
        this.todos = this.todos.map(todo =>
            todo.id === id ? {...todo, done: !todo.done} : todo
        );
    }
    editTodo(id, newText){
        this.todos = this.todos.map(todo =>
            todo.id === id ? { ...todo, text: newText }: todo
        )
    }
}