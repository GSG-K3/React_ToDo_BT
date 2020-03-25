import React from "react";


const ToDoInput = ({ handleChange, item, AddItem }) => {
  return (
    <div>
     
      <h1>TODO List</h1>
      <form >
        <input
          
          onChange={handleChange}
          type="text"
          value={item}
          placeholder="Add Task"
        />
        <button  onClick={AddItem}>
          Add item
        </button>
      </form>
    </div>
  )
}

export default ToDoInput;
