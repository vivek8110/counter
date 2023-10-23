import axios from 'axios';
import React, { useState } from 'react'

function Axiform() {

    const [data, setData] = useState({
        name: "",
        email: "",
        id: "",
    });
    const url = "http://localhost:3030/student";


    const onchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(url, data).then(res => {
            console.log(res.data);
        })
        setData({
            name: "", email: "", id: ""
        })

        getdata()
    }


    const [dataList, setDataList] = useState([])


    const getdata = async () => {
        try {
            const response = await axios.get(url);
            setDataList(response.data)

        } catch (err) {
            console.log(err);
        }

    }


    const deletedata = async (id) => {
        try {
            await axios.delete(`${url}/${id}`);
            const updatedData = dataList.filter(item => item.id !== id);
            setDataList(updatedData);
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    }

    // geteditdata

    const editdata = (user) => {
        setData(user)
    }


    const edituser = () => {
        const { id, ...restUser } = data;
        axios.put(`${url}/${id}`, restUser).then((res) => {
            getdata();
            setData({
                name: "", email: "", id: ""
            })
        }
        )
        console.log(id);

    }


    
    return (
        <div className='App'>
            <h1>axios crud operation</h1>


            <div className="container">
                <form onSubmit={submitHandler}>
                    <div className="mb-3 row">
                        <label htmlFor="username" className="col-sm-3 col-form-label">YOUR NAME</label>
                        <div className="col-sm-9">
                            <input onChange={onchange} value={data.name} type="text" className="form-control" id="username" name="name" />


                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="email" className="col-sm-3 col-form-label">YOUR EMAIL</label>
                        <div className="col-sm-9">
                            <input onChange={onchange} value={data.email} type="text" className="form-control" id="email" name="email" />


                        </div>
                    </div>

                    <div className="mb-3 row">
                        <div className="col-sm-9 offset-sm-3 my-3  m-auto">
                            <button type="submit" className="btn btn-primary mx-5">Register</button>
                            <button onClick={() => edituser()} type='button' className="btn btn-primary mx-5">Edit User</button>
                        </div>
                    </div>
                </form>
            </div>

            <center>
                <table className='table table-striped text-center'>
                    <tr>
                        <th>Id No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    <tbody>
                        {
                            dataList.map((singledata, index) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{singledata.id}</td>
                                            <td>{singledata.name}</td>
                                            <td>{singledata.email}</td>
                                            <td>
                                                <button onClick={() => deletedata(singledata.id)} className='mx-2 btn btn-outline-danger'>Delete</button>
                                                <button onClick={() => editdata(singledata)} className='mx-2 btn btn-outline-success'>Edit</button>
                                            </td>
                                        </tr>
                                    </>)
                            })

                        }
                    </tbody>
                </table>
            </center>
        </div>
    )
}

export default Axiform