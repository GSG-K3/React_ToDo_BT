import React from 'react';
import '../App.css'


const ToDoList = ({ task ,id, deletetask }) => {
  return (
    <div className="List">
      <ul>
 
        <li> 
          <input className="checkbox" type ="checkbox"/>
          <p className="task">{task}</p>
          <button className="deletebtn" id={id} onClick ={()=>deletetask(task)} > Delete Task  </button>
          <button className="editbtn">Edit Task</button>
        </li>

      </ul>
    </div>
  )
}
export default ToDoList;