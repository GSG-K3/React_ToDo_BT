import React from 'react';
import '../App.css'


const ToDoList = ({ task }) => {
  return (
    <div className="List">
      <ul>
 
        <li> 
          <input className="checkbox" type ="checkbox"/>
          <p className="task">{task}</p>
          <button className="deletebtn" > Delete Task  </button>
          <button className="editbtn">Edit Task</button>
        </li>

      </ul>
    </div>
  )
}
export default ToDoList;