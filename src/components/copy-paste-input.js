import React from 'react'
import * as crypto from 'crypto'

const CopyPasteInput = (str) => {
    const guid = () => {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
    const copyPast = () => {
        var copyText = document.getElementById(idKey);
        copyText.select();
        document.execCommand("Copy");
    };
    const idKey = guid();
    return (
        <div className="row">
            <div className="col-12">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button onClick={() => copyPast()} className="btn btn-lg btn-primary">COPY</button>
                    </div>
                    <input readOnly
                           type="text" value={str} className="form-control" id={idKey} placeholder="Your Next-password" />
                </div>
            </div>
        </div>

    )
}

export default CopyPasteInput