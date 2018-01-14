import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./components/input";
import Md5Hash from './components/cryptomd5';
import SpecialHash from './components/specialhash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'my amazing easy password', toggle: false };
    this.change = this.change.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  change(event) {
    // this.setState({value: event.target.value});
    this.setState({ value: event.target.value });
  }
  toggle() {
    console.log((!this.state.toggle));
    this.setState({ toggle: !this.state.toggle });
    console.log(this.state.toggle);
  }
  render() {
    return (
        <div className="container">
          <div className='row'>
            <div className='col-12'>
              {Input(this.change)}
            </div>
            <div className='col-12'>
              <button  className="btn btn-info btn-block" onClick={() => this.toggle()}>
                {this.state.toggle?  this.state.value : 'voir'}
              </button>
              <hr />
            </div>
            <div className='col-12'>
              {Md5Hash(this.state.value)}
              <hr />

            </div>
            <div className='col-12'>
              {SpecialHash(this.state.value)}
              <hr />

            </div>
          </div>
        </div>
    );
  }
}

export default App;
