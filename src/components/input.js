import React from 'react'

const Input = (change) => {
    return (
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type='password' onChange={change} class="form-control" id="exampleInputPassword1" placeholder="Your Password" />
        </div>

    )
}
export default Input