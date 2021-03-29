import './Todo.css';

const Todo = (props) => {
    const completed = props.completed;

    let disabled = completed?'disabled':'';
    let btnText = completed?'Mark as incomplete':'Mark as complete';
    return (
        <div className="todo-item">
            <input type="text" value={props.title} onChange={props.titleChanged} disabled={disabled}/>
            <textarea onChange={props.descriptionChanged} value={props.description} disabled={disabled} ></textarea>
            <button onClick={props.completedClicked} >{btnText}</button>
        </div>
    );
}

export default Todo;