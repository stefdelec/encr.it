import React, { Component } from 'react';

class Input extends Component {


    render = () => {
        const { change, value } = this.props;
        return (
            <div className="form-group mt-2">
                <input
                    value={value}
                    type="password" onChange={change} className="form-control" id="inputPassword" placeholder="Your Password" />
            </div>

        )
    }
}

export default Input