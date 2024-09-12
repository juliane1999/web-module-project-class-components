import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const tasks = [
  {
      task: 'Organize Garage',
      id: 152,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528,
      completed: false
    },
    {
      task: 'Wash Car',
      id: 1556,
      completed: false
    },
    {
      task: 'Do Laundry',
      id: 1578,
      completed: false
    }
];


class App extends React.Component {
  constructor() {
    super();
    this.state ={
        tasks:tasks
    }
}
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  handleComplete = (id) => {
    this.setState({
        tasks: this.state.tasks.map(item => {
            if (item.id === id) {
                return({
                    ...item,
                    completed: !item.completed
                });
            }
            return item;
        })
    });
  }
  handleNewTask = (task) => {
    const newTask = {
        task: task,
        id: Date.now(),
        completed: false
    }
    this.setState({
        tasks: [...this.state.tasks,newTask]
    });
  }
  handleClear = () => {
    this.setState({
        ...this.state,
        tasks:this.state.tasks.filter(item =>{
            return(item.completed === false);
        })
    });
  }
  
  render() {
    return (
      <div className='App'>
        <div className='header'>
        <h2>To-Do List</h2>
        <TodoForm handleNewTask={this.handleNewTask}/>
        </div>
        <TodoList handleClear={this.handleClear} handleComplete={this.handleComplete} tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
