import './Todo.css';

const Todo = (props) => {
    return (
        <div className="todo-item">
            <input type="text" value={props.title} onChange={props.titleChanged} />
            <textarea onChange={props.descriptionChanged} value={props.description} ></textarea>
            <button>Mark as complete</button>
        </div>
    );
}

export default Todo;