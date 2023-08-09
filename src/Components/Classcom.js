import React, { Component } from 'react'

export default class Classcom extends Component {
    constructor() {
        super()
        this.state = {
            product: []
        }
    }
    componentDidMount() {
        console.log("did mounting");
        fetch('https://fakestoreapi.com/products/1')
            .then(res => res.json())
            .then(json => this.setState({
                product: json
            }))
        console.log(this.product);
    }
    render() {
        return (
            <div>
                <h1>vicky</h1>
            </div>
        )
    }
}
