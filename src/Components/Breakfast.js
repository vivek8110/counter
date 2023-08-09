import React from 'react'
import breakfast from './br.jpg'

function Breakfast() {
    return (
        <div>
            <h1>Breakfast time </h1>
            <div className="bbox">
                <img src={breakfast} alt="" />
            </div>
        </div>
    )
}

export default Breakfast
