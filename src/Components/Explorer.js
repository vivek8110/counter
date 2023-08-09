import React, { Component } from 'react'
import Myform from './Myform'
import Count from './Count'
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';


export default class Explorer extends Component {
    time = new Date().toLocaleTimeString();
    constructor() {
        super()
        this.state = {
            date: this.time
        }
    }
    componentDidMount() {
        let ctime = new Date().getMinutes()
        setInterval(() => {
            this.setState({
                date: new Date().toLocaleTimeString()
            })
        }, 1000);

        if (ctime == 16) {
            console.log("hello");
        }
    }
    render() {
        const ftime = new Date().getMinutes()

        const showcomponent = () => {
            if (ftime >= 46 && ftime < 47) {
                return (<Breakfast />)
            } else if (ftime >= 48 && ftime < 49) {
                return (<Lunch />)
            } else if (ftime >= 49 && ftime < 50) {
                return (<Dinner />)
            }
            else {
                return (<p>waiting................</p>)
            }
        }


        return (
            <div>
                <div className="box">
                    <h1>{this.state.date}</h1>
                    {/* {
                        (ftime >= 12 && ftime < 15) ? <Breakfast /> :
                            (ftime >= 15 && ftime < 18) ? <Lunch /> :
                                (ftime >= 18 && ftime < 21) ? <Dinner /> : null
                    } */}

                    {/* {ftime === 49 && <Breakfast />}
                    {ftime === 50 && <Lunch />}
                    {ftime === 51 && <Dinner />} */}

                    {showcomponent()}

                </div>
            </div>
        )
    }
}
