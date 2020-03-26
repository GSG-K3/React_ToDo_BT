import React from 'react';
import '../App.css'


const ToDoList = ({ task ,removeItem}) => {
  return (
    <div className="List">
      <ul>
 
        <li> 
          <input className="checkbox" type ="checkbox"/>
          <p className="task">{task}</p>
          <button className="deletebtn" onClick={removeItem} > Delete Task  </button>
          <button className="editbtn">Edit Task</button>
        </li>

      </ul>
    </div>
  )
}
export default ToDoList;