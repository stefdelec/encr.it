import React from 'react'
import * as crypto from 'crypto'

const SpecialHash = (str) => {
    const hashIt = (key) => {
        return btoa(crypto.createHash('md5').update(key).digest("hex"));
    }

    const copyPast = () => {
        var copyText = document.getElementById(idKey);
        copyText.select();
        document.execCommand("Copy");
    };
    const idKey='zefefjknzekcjnzec'
    return (
        <div className="row">
            <div className="col-12">
                <button onClick={() => copyPast()} className="btn btn-lg btn-primary">COPY</button>
            </div>
            <div className="col-12">
                <div className="form-group">
                    <label htmlFor={idKey}>MD5=> base64</label>
                    <input readOnly type="text" value={hashIt(str)} className="form-control" id={idKey} placeholder="Your Next-password" />
                </div>
            </div>

        </div>

    )
}

export default SpecialHash