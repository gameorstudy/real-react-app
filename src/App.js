import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar'
import Counters from './components/counters'

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  render() { 
    return ( 
      <>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset = {
              this.handleReset
            } />
        </main>
        </>
     );
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters
    });
  };

  handleIncrement = (counterId) => {
    const counters = this.state.counters.filter((c) => {
      if (c.id === counterId) {
        c.value += 1;
      }
      return c;
    });
    this.setState({
      counters
    });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({
      counters
    });
  };
}
 
export default App;