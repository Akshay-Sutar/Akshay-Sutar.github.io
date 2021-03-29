import React,{Component} from 'react';
import TodoList from '../components/TodoList/TodoList';
import NewTodo from '../components/TodoList/NewTodo/NewTodo';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      todolist:[
        {
          id:'qwe',
          title:'Learn Node Js',
          description:'Learn Node js for API and backend',
          completed:false
        },
        {
          id:'asd',
          title:'Learn React',
          description:'Learn React for front end',
          completed:false
        },
        {
          id:'zxc',
          title:'Do Cool things',
          description:'Now you are ready to do cool things',
          completed:false
        }
      ],
      newTodo:{
        title:'',
        description:'',
        complete:false
      }
    };
  }

  handleTitleChangeEvent = (event, id) => {
    console.log(event,id);
    const index = this.state.todolist.findIndex( item => item.id ===id );

    const targetItem = {...this.state.todolist[index]};
    targetItem.title = event.target.value;

    const todolist = [...this.state.todolist];
    todolist[index] = targetItem;
    this.setState({todolist:todolist});
  }

  handleDescriptionChangeEvent = (event, id) => {
    const index = this.state.todolist.findIndex( item => item.id ===id );

    const targetItem = {...this.state.todolist[index]};
    targetItem.description = event.target.value;

    const todolist = [...this.state.todolist];
    todolist[index] = targetItem;
    this.setState({todolist:todolist});
  }

  handleCompletedClickEvent = (event, id)=>{
    const index = this.state.todolist.findIndex( item => item.id ===id );
    const targetItem = {...this.state.todolist[index]};
    targetItem.completed = !targetItem.completed;

    const todolist = [...this.state.todolist];
    todolist[index] = targetItem;

    this.setState({todolist:todolist});

  }

  handleCreateTodo = () => {
    const createTodo = {
      title:this.state.newTodo.title,
      description:this.state.newTodo.description,
      completed:false
    };

    const newTodo ={
      title:'',
      description:'',
      complete:false
    };
    
    this.setState({newTodo:newTodo});

    const todolist = [...this.state.todolist];
    todolist.push(createTodo);

    this.setState({todolist:todolist});
  }

  handleNewTitleChangeEvent = (event) =>{
    const newTodo = {...this.state.newTodo};
    newTodo.title = event.target.value;
    this.setState({newTodo:newTodo});
  }
  
  handleNewDescriptionChangeEvent = (event) =>{
    const newTodo = {...this.state.newTodo};
    newTodo.description = event.target.value;
    this.setState({newTodo:newTodo});
  }

  render(){
    return (
      <div className="App">
        <TodoList
          todolist={this.state.todolist }
          titleChanged={this.handleTitleChangeEvent}
          descriptionChanged={this.handleDescriptionChangeEvent}
          completedClicked={this.handleCompletedClickEvent}
        />
        <br/>
        <NewTodo 
          title={this.state.newTodo.title}
          description={this.state.newTodo.description}
          clicked={this.handleCreateTodo}
          titleChanged={this.handleNewTitleChangeEvent}
          descriptionChanged={this.handleNewDescriptionChangeEvent}
          />
      </div>
    );
  }
}
  

export default App;
