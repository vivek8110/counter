import React, { useState } from 'react'
import Validation from './Validation'

function Register() {

    const [data, setData] = useState({
        uname: '', email: '', mobile: '', address: '', password: '', conp: ''
    })
    const onchange = ((e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    })

    const [error, setError] = useState({})
    const [newData, setNewData] = useState([])

    const clickhandler = (e) => {

        e.preventDefault()
        setError(Validation(data))
        console.log(error)
        console.log(data)


        // // email.validation

        // if (newData.email === data.email) {
        //     error.email = "email already exist,try another one"
        // } else {
        //     if (!error.email && Object.keys(error).length === 0) {
        //         if (!/\S+@\S+\.\S+/.test(data.email)) {
        //             error.email = "email must be like this 'abc@xyz.com'";
        //         } else {

        //             // password.validation

        //             if (!error.password && Object.keys(error).length === 0) {
        //                 if (data.password.length <= 8 || !/[A-Z]/.test(data.password) || !/[a-z]/.test(data.password) || !/\d/.test(data.password)) {
        //                     error.password = "password does not match the criteria"
        //                 } else {

        //                     // mobile validation    

        //                     if (!error.email && !error.password && !error.mobile && Object.keys(error).length === 0) {
        //                         error.mobile = "mobile number must contain 10 digits"
        //                     }
        //                     else {

        //                         // name validation

        //                         if (!error.uname && Object.keys(error).length === 0) {
        //                             setNewData([
        //                                 ...newData, { ...data }
        //                             ]);
        //                             console.log(newData);
        //                         }
        //                     }
        //                 }
        //             } else {
        //                 error.password = "password does not match the critearia";
        //             }

        //         }
        //     } else {
        //         error.email = "email must be like this 'abc@xyz.com'";

        //     }

        // }


        //    password validation   

        if (newData.email === data.email) {
            error.email = "email already exist,try another one"
        } else {
            if (!error.password && Object.keys(error).length === 0) {
                if (data.password.length <= 8 || !/[A-Z]/.test(data.password) || !/[a-z]/.test(data.password) || !/\d/.test(data.password)) {
                    error.password = "password does not match the criteria"
                } else {
                    setNewData([
                        ...newData, { ...data }
                    ]);
                    console.log(newData);
                }
            } else {
                error.password = "password does not match the critearia";
            }
        }


        // confirm password validation

        if (!error.conp && Object.keys(error).length === 0) {
            setNewData([...newData, { ...data }]);
            console.log(newData);
        } else {
            error.conp = "chalna thik se password dal na"
        }
        // mobile validation

        if (!error.email && !error.password && !error.mobile && Object.keys(error).length === 0) {
            setNewData([...newData, { ...data }]);
            console.log(newData);
        }

        // name validation

        if (!error.uname && Object.keys(error).length === 0) {
            setNewData([
                ...newData, { ...data }
            ]);
            console.log(newData);
        }

        // email validation 

        if (!error.email && Object.keys(error).length === 0) {
            if (!/\S+@\S+\.\S+/.test(data.email)) {
                error.email = "email must be like this 'abc@xyz.com'";
            } else {
                setNewData([
                    ...newData, { ...data }
                ]);
                console.log(newData);

            }
        } else {
            error.email = "email must be like this 'abc@xyz.com'";

        }


    }

    return (
        <div>
            <div className="container">
                <form onSubmit={clickhandler}>
                    <div className="mb-3 row">
                        <label htmlFor="username" className="col-sm-3 col-form-label">YOUR NAME</label>
                        <div className="col-sm-9">
                            <input onChange={onchange} type="text" className="form-control" id="username" name="uname" />
                            {error.uname && <label style={{ color: "red" }}>{error.uname}</label>}

                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="email" className="col-sm-3 col-form-label">YOUR EMAIL</label>
                        <div className="col-sm-9">
                            <input onChange={onchange} type="text" className="form-control" id="email" name="email" />
                            {error.email && <label style={{ color: "red" }}>{error.email}</label>}

                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="mobile" className="col-sm-3 col-form-label">MOBILE</label>
                        <div className="col-sm-9">
                            <input onChange={onchange} type="number" className="form-control" id="mobile" name="mobile" />
                            {error.mobile && <label style={{ color: "red" }}>{error.mobile}</label>}

                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="address" className="col-sm-3 col-form-label primary">ADDRESS</label>
                        <div className="col-sm-9">
                            <input onChange={onchange} type="text" className="form-control" id="address" name="address" />
                            {error.address && <label style={{ color: "red" }}>{error.address}</label>}

                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="password" className="col-sm-3 col-form-label">PASSWORD</label>
                        <div className="col-sm-9">
                            <input onChange={onchange} type="text" className="form-control" id="password" name="password" />
                            {error.password && <label style={{ color: "red" }}>{error.password}</label>}

                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="conp" className="col-sm-3 col-form-label">CONFIRM PASSWORD</label>
                        <div className="col-sm-9">
                            <input onChange={onchange} type="text" className="form-control" id="conp" name="conp" />
                            {error.conp && <label style={{ color: "red" }}>{error.conp}</label>}

                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-sm-9 offset-sm-3">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
            </div>
            <center>
                <table className='table table-border text-center'>
                    <tr>
                        <th>no.</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>MOBILE</th>
                        <th>ADDRESS</th>
                        <th>PASSWORD</th>
                        <th>CONFIRM PASSWORD</th>
                    </tr>
                    <tbody>
                        {
                            newData.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{user.uname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobile}</td>
                                        <td>{user.address}</td>
                                        <td>{user.password}</td>
                                        <td>{user.conp}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </center>
        </div>
    )
}

export default Register