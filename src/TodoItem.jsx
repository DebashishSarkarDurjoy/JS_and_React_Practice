
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
            <label>
                <input type="checkbox" defaultChecked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
                {title}
            </label>
            <button className="btn btn-danger" onClick={e => deleteTodo(id)}>Delete</button>
        </li>
    );
}