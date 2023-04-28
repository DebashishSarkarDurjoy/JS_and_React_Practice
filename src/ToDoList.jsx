import { TodoItem } from "./TodoItem";

export function ToDoList({ deleteTodo, toggleTodo, todos }) {
    return (
        <ul className="list">
            {todos.length === 0 && "No Todo"}
            {todos.map(todo => {
                return (
                    <TodoItem deleteTodo={deleteTodo} toggleTodo={toggleTodo} key={todo.id} {...todo} />
                );
            })}
        </ul>
    );
}