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
      <form>
        <div className="container">
          <div className='row'>
            <div className='col-12'>
              {Input(this.change)}
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
      </form>
    );
  }
}

export default App;
