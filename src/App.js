import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./components/input";
import Md5Hash from './components/cryptomd5';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'null' };
    this.change = this.change.bind(this);
  }
  change(event) {
    // this.setState({value: event.target.value});
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <h1>Enter the key to be encoded in md5</h1>
        {Input(this.change)}
        {Md5Hash(this.state.value)}
      </div>
    );
  }
}

export default App;
