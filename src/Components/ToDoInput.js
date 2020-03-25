import React from "react";
import '../App.css'
import Todo from '../Todo.png'

const ToDoInput = ({ handleChange, item, AddItem }) => {
  return (
    <div>
     <img className="pic-todo" alt="Todo" src={Todo}/>
     
      <form className ="Todoinput">

      
        <input
          className="inputtask"
          onChange={handleChange}
          type="text"
          value={item}
          placeholder="Add Task"
        />
        <button className="Addbtn" onClick={AddItem}>
          Add item
        </button>
      </form>
    </div>
  )
}

export default ToDoInput;
