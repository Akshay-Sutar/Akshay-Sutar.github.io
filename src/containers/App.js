import React,{Component} from 'react';
import TodoList from '../components/TodoList/TodoList';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      todolist:[
        {
          id:1,
          title:'Learn Node Js',
          description:'Learn Node js for API and backend',
          completed:false
        },
        {
          id:2,
          title:'Learn React',
          description:'Learn React for front end',
          completed:false
        },
        {
          id:3,
          title:'Do Cool things',
          description:'Now you are ready to do cool things',
          completed:false
        }
      ]
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

  render(){
    return (
      <div className="App">
        <TodoList
          todolist={this.state.todolist }
          titleChanged={this.handleTitleChangeEvent}
          descriptionChanged={this.handleDescriptionChangeEvent}
        />
      </div>
    );
  }
}
  

export default App;
