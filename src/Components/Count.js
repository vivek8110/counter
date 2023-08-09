// import React, { Component } from 'react'
// class Count extends Component {

//     constructor() {
//         super()
//         this.state = { num1: 0 }
//     }
//     minushandler = () => {
//         this.setState({ num1: this.state.num1 -= 1 })
//     }
//     plushandler = () => {
//         this.setState({ num1: this.state.num1 += 1 });
//     }
//     render() {
//         return (
//             <div>
//                 <div className="box">
//                     <button onClick={this.minushandler()}>minus</button>
//                     <div className="in-box">{this.state.num1}</div>
//                     <button onClick={this.plushandler()}>plus</button>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Count

import React, { Component } from 'react';

class Count extends Component {
    constructor(props) {
        super(props);
        this.state = { num1: 0 };
    }

    minushandler = () => {
        this.setState({ num1: this.state.num1 - 1 });
    };

    plushandler = () => {
        this.setState({ num1: this.state.num1 + 1 });
    };

    render() {
        return (
            <div>
                <div className="box">
                    <button onClick={this.minushandler}>minus</button>
                    <div className="in-box">{this.state.num1}</div>
                    <button onClick={this.plushandler}>plus</button>
                    <h1>{this.props.name} {this.props.surname}</h1>
                    <h1></h1>
                </div>
            </div>
        );
    }
}

export default Count;
