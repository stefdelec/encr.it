import React from 'react'

const Input = (change) => {
    return (
        <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input type='password' onChange={change} className="form-control" id="inputPassword" placeholder="Your Password" />
        </div>

    )
}
export default Input