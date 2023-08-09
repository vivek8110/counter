import React from 'react'
import dinner from './dinner.jpg'

function Dinner() {
    return (
        <div>
            <h1>Dinner time </h1>
            <div className="bbox">
                <img src={dinner} alt="" />
            </div>
        </div>
    )
}

export default Dinner