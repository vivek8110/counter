import React, { useEffect } from 'react'
import { useState } from 'react'

function State() {
    const [fname, setfname] = useState('vicky')
    const [lname, setlname] = useState([]);

    const clickhandler = () => {
        console.log(setfname('vivek'))
        console.log(setlname('sojitra'))
    }
    useEffect(() => {
    }, [fname])


    return (
        <div>
            <h1>hello myself {fname} {lname} </h1>
            <button onClick={clickhandler}>click</button>
        </div>
    )
}

export default State



