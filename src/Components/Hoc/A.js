import React from 'react'
import HOC from './Counter'

function A(props) {
    const { element, count } = props
    return (
        <div>
            <h1>bnbvcx</h1>
            <button onClick={element}>A {count} nyfhgsfetr</button>
        </div>
    )
}

export default HOC(A)