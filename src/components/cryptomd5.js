import React from 'react'
import * as crypto from 'crypto'

const Md5Hash = (str) => {
    const hashIt = (key) => {
        return crypto.createHash('md5').update(key).digest("hex");;
    }
    const copyPast = () => {
        var copyText = document.getElementById(idKey);
        copyText.select();
        document.execCommand("Copy");
    };
    const idKey='zefzef';
    return (
        <div className="row">
            <div className="col-12">
                <button onClick={() => copyPast()} className="btn btn-lg btn-primary">COPY</button>
            </div>
            <div className="col-12">
                <div className="form-group">
                    <label htmlFor={idKey}>md5</label>
                    <input readOnly type="text" value={hashIt(str)} className="form-control" id={idKey} placeholder="Your Next-password" />
                </div>
            </div>

        </div>

    )
}

export default Md5Hash