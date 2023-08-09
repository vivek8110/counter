import React from 'react'
import lunch from './lunch.jpeg'

function Lunch() {
    return (
        <div>
            <h1>Lunch time </h1>
            <div className="bbox">
                <img src={lunch} alt="" />
            </div>
        </div>
    )
}

export default Lunch