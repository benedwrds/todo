import React, {Component} from 'react';
import './App.css';
import TodoComponent from "./TodoComponent";


class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    isClicked: false,
    text: '',
    todos: [],
  }
}

  clickState = () => {
    this.setState({
    todos: [...this.state.todos, this.state.text],
    text: ''
  })
}

  onChange = e => {
    this.setState({
      text: e.target.value
    })
}

  deleteItem = (index) => () => {
    let todoList = [...this.state.todos]
    todoList.splice(index, 1)
    this.setState({
      todos: todoList
    })
  }

render(){
  return(
  <div className="App">
    <input value={this.state.text} onChange={this.onChange}/>
    <button onClick={this.clickState}>{`${this.state.isClicked}`}</button>
    <ul>
      {this.state.todos.map((todo, index) => {
        return <TodoComponent key={index} deleteButton={this.deleteItem(index)} listValue={todo}/>
      })}
    </ul>
  </div>
    );
  }
}

export default App;
