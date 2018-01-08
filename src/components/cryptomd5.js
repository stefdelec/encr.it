import React from 'react'
import * as crypto from 'crypto'

const Md5Hash = (str) => {
    const hashIt = (key) => {
        return crypto.createHash('md5').update(key).digest("hex");;
    }
    const copyPast = () => {
        var copyText = document.getElementById("myInput");
        copyText.select();
        document.execCommand("Copy");
    };

    return (
        <div>
            <input id='myInput' value={hashIt(str)} />
            <button className="btn-big" onClick={() => copyPast()}>Copy</button>
        </div>
    )
}

export default Md5Hash