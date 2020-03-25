import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './Components/ToDoList'
import ToDoInput from './Components/ToDoInput'




class App extends Component {


state = {
  list: [], 
  item: ""
}

AddItem = e => {
  e.preventDefault()
  this.setState(({ list, item }) => ({
    list: [...list, { item }],
    item: ""
  }))
}

handleChange = e => {
  this.setState({ item: e.target.value })
}



 

  render(){
    return (
      <div >
        
        <ToDoInput
          item={this.state.item}
          AddItem={this.AddItem}
          handleChange={this.handleChange} />

        {this.state.list.map((task) => (
          <ToDoList
            
            task={task.item}
            
          />
        ))}

      
      </div>
    );

  }



}

export default App;
