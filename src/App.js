import React, { Component } from 'react';
import './App.css';
import Die from './components/Die'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dieNumOne: "one",
      dieNumTwo: "one"
    }
  }
  render() {
  const dieRoll = () => {
    const dieString = ["one", "two", "three", "four", "five", "six"];
    this.setState({dieNumOne : dieString[Math.floor(Math.random()*6)], dieNumTwo : dieString[Math.floor(Math.random()*6)]});
  }
  return (
    <div className="App">
      <div>
        <Die num={this.state.dieNumOne}/>
        <Die num={this.state.dieNumTwo}/>
      </div>
      <div>
        <button type="button" className="btn btn-success" onClick={() => dieRoll()}>Roll dem bones!</button>
      </div>
    </div>
  );
}
}

export default App;
