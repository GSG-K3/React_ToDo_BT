import React from 'react';



const ToDoList = ({ task }) => {
  return (
    <div >
      <ul>

        <li> 
          <input type ="checkbox"/>
          <p>{task}</p>
          <button  > Delete Task </button>
          <button>Edit Task</button>
        </li>

      </ul>
    </div>
  )
}
export default ToDoList;