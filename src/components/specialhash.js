import React from 'react'
import * as crypto from 'crypto'

const SpecialHash = (str) => {
    const hashIt = (key) => {
        return btoa(crypto.createHash('md5').update(key).digest("hex"));
    }

    const copyPast = () => {
        var copyText = document.getElementById("myInput");
        copyText.select();
        document.execCommand("Copy");
    };
    return (
        <div className="row">
            <div className="col-12">
                <button onClick={() => copyPast()} class="btn btn-lg btn-primary">COPY</button>
            </div>
            <div className="col-12">
                <div class="form-group">
                    <label for="exampleInputPassword1">MD5=> base64</label>
                    <input type="text" value={hashIt(str)} class="form-control" id="myInput" placeholder="Your Next-password" />
                </div>
            </div>

        </div>

    )
}

export default SpecialHash