import React, { Components } from "react";

class ToDoList extends Components {
  render() {
    return (
      <div className="MainToDoList">
        <form>
          <input placeholder="enter task" />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default ToDoList;
