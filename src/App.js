import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./components/input";
import Md5Hash from './components/cryptomd5';
import SpecialHash from './components/specialhash';

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
      <div className="container">
        <div className='row'>
          <div className='col-12'>
            {Input(this.change)}
          </div>
          <div className='col-12'>
            {Md5Hash(this.state.value)}
          </div>
          <div className='col-12'>
            {SpecialHash(this.state.value)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
