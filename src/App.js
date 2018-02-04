import React, {Component} from 'react';
import './App.css';
import Input from "./components/input";
import * as crypto from 'crypto'
import CopyPasteInput from "./components/copy-paste-input";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'my amazing easy password', toggle: false};
        this.change = this.change.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    change(event) {
        // this.setState({value: event.target.value});
        this.setState({value: event.target.value});
    }


    toggle() {
        this.setState({toggle: !this.state.toggle});
    }

    md5(key) {
        return crypto.createHash('md5').update(key).digest("hex");
    }

    base64(key) {
        return btoa(key);
    }

    render() {
        return (
            <div className="container">
                <div className='row'>
                    <div className='col-12'>
                        {Input(this.change)}
                    </div>
                    <div className='col-12'>
                        <button className="btn btn-info btn-block" onClick={() => this.toggle()}>
                            {this.state.toggle ? this.state.value : 'voir'}
                        </button>
                        <hr/>
                    </div>
                    <div className='col-12'>
                        <h3>MD5</h3>
                        {CopyPasteInput(this.md5(this.state.value))}
                        <hr/>

                    </div>
                    <div className='col-12'>
                        <h3>MD5=>Base64</h3>
                        {CopyPasteInput(this.base64(this.md5(this.state.value)))}
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
