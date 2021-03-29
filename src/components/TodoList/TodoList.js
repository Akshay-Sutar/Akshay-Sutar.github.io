import Todo from './Todo/Todo';

const TodoList = (props) => {
    return props.todolist.map((todoitem, index)=>{
        return <Todo
            key={todoitem.id}
            title={todoitem.title}
            description={todoitem.description}
            titleChanged={(event)=>props.titleChanged(event, todoitem.id)}
            descriptionChanged={ (event) => props.descriptionChanged(event, todoitem.id) }
        />;
    });
}
export default TodoList;