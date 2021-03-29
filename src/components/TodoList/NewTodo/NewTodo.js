import './NewTodo.css';

const NewTodo = (props) => {
    return (
        <div className="new-todo" >
            <input type="text" placeholder="Type title" value={props.title} onChange={props.titleChanged} />
            <textarea placeholder="Type description" value={props.description} onChange={props.handleNewDescriptionChangeEvent} ></textarea>
            <button onClick={props.clicked} >Create</button>
        </div>
    );
}

export default NewTodo;