import React from 'react'

const Input = (change) => {
    return (
        <div className='row'>
            <input type="password" value="" onChange={change} />
        </div>
    )
}

export default Input