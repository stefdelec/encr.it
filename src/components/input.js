import React from 'react'

const Input = (change) => {
    return (
        <div className='row'>
            <input type="password" onChange={change} />
        </div>
    )
}
export default Input