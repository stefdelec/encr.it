import React, { Component } from 'react';
import './App.css';
import Input from "./components/input";
import * as crypto from 'crypto'
import CopyPasteInput from "./components/copy-paste-input";

const initialState = { value: '', timestamp: Date.now(), toggle: false };

class App extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.change = this.change.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    launchTimer = () => {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            this.setState(initialState);
            setTimeout(() => {
                document.getElementById('inputPassword').focus();
            })
        }, 30000)
    }
    change(event) {
        this.setState({ value: event.target.value, timestamp: Date.now() });
        this.launchTimer();
    }


    toggle() {
        this.setState({ toggle: !this.state.toggle });
    }

    md5(key) {
        return crypto.createHash('md5').update(key).digest("hex");
    }

    base64(key) {
        return btoa(key);
    }

    render() {
        return (
            <div className="container" onClick={this.launchTimer}>
                <div className='row'>
                    <div className='col-12'>
                        <Input change={this.change} value={this.state.value} />
                    </div>
                    <div className='col-12'>
                        <button className="btn btn-info btn-block" onClick={() => this.toggle()}>
                            {this.state.toggle ? this.state.value : 'voir'}
                        </button>
                        <hr />
                    </div>
                    <div className='col-12'>
                        <h3>MD5</h3>
                        {CopyPasteInput(this.md5(this.state.value))}
                        <hr />

                    </div>
                    <div className='col-12'>
                        <h3>MD5=>Base64</h3>
                        {CopyPasteInput(this.base64(this.md5(this.state.value)))}
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
