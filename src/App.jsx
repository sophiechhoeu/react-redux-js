import React, { Component } from 'react';
import './App.css';
import Clock from './Clock'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 20, 2018',
      newDeadline: ''
    }
  }

  changeDeadline() {

this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Count to {this.state.deadline}</div>
        <div>
          <Clock />
        </div>
        <div>
        <input placeholder='new date' onChange={event => this.setState({newDeadline: event.target.value})}></input>
        <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
