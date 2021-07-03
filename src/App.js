import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = "John Doe"
    let isLoading = true

    return (
      <div className="App"> 
        <h2>{isLoading ? 'Loading...': null}</h2>
        <h1>Hellow and Welcome { name }</h1>
      </div>
    );
  }
}

export default App;
