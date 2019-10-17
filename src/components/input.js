import React, { Component } from 'react';

class Input extends Component {

    componentDidMount(){}
    render = () => {
        const { change, value } = this.props;
        return (
            <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input autoFocus value={value} type="password" onChange={change} className="form-control" id="inputPassword" placeholder="Your Password" />
            </div>

        )
    }
}

export default Input