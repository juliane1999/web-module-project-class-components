// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from '../components/Todo'

const TodoList = props => {
    const handleClick = ()=> {
        props.handleClear();
      }

      return (
          <div>
           {props.tasks.map(item => (
               <Todo handleComplete={props.handleComplete} key={item.id} item={item} />
           ))}
           <button onClick={handleClick}>Clear Task</button>
          </div>
      );
};

export default TodoList;