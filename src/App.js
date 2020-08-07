import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { findAllByDisplayValue } from '@testing-library/react';

class App extends Component {
  constructor(props) {

    super(props)

    
  this.state = {
    isClicked: false,
    buttonValue: "true",
    todos: []
  }
}

clickState = () => {
  this.setState({
    isClicked: true, 
  })

}

valueInput = () => {

}
render(){
  return(
  <div className="App">
    <input{e.target.value}/>
    <button onClick={clickState()}>{this.state.isClicked}</button>
  </div>
    );
  }
}

export default App;
