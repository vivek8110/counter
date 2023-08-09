import React, { useState } from 'react'

const HOC = (Wrapperdcomponent) => {
    const Counter = () => {

        const [num, setnum] = useState(0)
        const increment = () => {
            setnum(num + 1)
        }
        return (
            <div>
                <h1>nhbvctdvtby</h1>
                <Wrapperdcomponent count={num} element={increment}></Wrapperdcomponent>
            </div>
        )
    }
    return Counter
}

export default HOC