import React, { Component } from 'react';
import './App.css';

import CircleSelector from './components/CircleSelector/CircleSelector.jsx'
import Circles from './components/Circles/Circles.jsx'

class App extends Component {
  state = {
    status: "",
    circle: "",
  }

  circleSelected = () => {
    console.log("this has been selected")
    this.setState({ status: "circle 1 selected"})
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector circleSelected= {this.circleSelected} status={this.state.status}/>
          <Circles />
        </main>
      </div>
    );
  }
}

export default App;
// 

// what do I need to make? 

// - when the circle 1 is slected button is clicked then the 
// state needs to chage to "circle1 selected"