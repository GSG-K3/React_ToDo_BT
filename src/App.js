import React, { Component } from "react";

import "./App.css";
import ToDoList from "./Components/ToDoList";
import ToDoInput from "./Components/ToDoInput";

var todoItems = [];

class App extends Component {
  state = {
    list: [],
    item: ""
  };

  AddItem = (e) => {
    e.preventDefault();

    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItems.newItemValue,
      done: false
    });

    this.setState(({ list, item }) => ({
      list: [...list, { item }],
      item: ""
    }));
  };

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };

  removeItem(itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({ item: itemIndex.target.value });
  }

  render() {
    return (
      <div>
        <div></div>
        <ToDoInput
          item={this.state.item}
          AddItem={this.AddItem}
          handleChange={this.handleChange}
        />

        {this.state.list.map((task) => (
          <ToDoList task={task.item} removeItem={this.removeItem} />
        ))}
      </div>
    );
  }
}

export default App;
