import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Sidebar from '../../components/sidebar';


function Useres() {
    const history = useHistory()
    const [user, setUser] = useState([])
  

    useEffect(() => {
        async function test() {
            const res = await axios.get('http://127.0.0.1:8000/api/users');
            if (res.data.status === 200) {
                setUser(res.data.users)
            }
        }
        test()
    }, [])

    const deleteUser = async (e, id) => {
        const deletedUser = e.currentTarget;
        deletedUser.innerText = "Deleting";
        const res = await axios.delete(`http://127.0.0.1:8000/api/delete-user/${id}`);
        if (res.data.status === 200) {
            deletedUser.closest('tr').remove();
            console.log(res.data.message);
        }
        history.push('/users')
    }


    return (
        <>
            <Sidebar />
            <section className='tables'>
                <Link to={"/create/user"}><button type="button" id="create" class="btn btn-primary">Add an user</button></Link>
                <table id="admin-table" className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Avatar</th>
                            <th scope="col">Type</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td><img src={`http://127.0.0.1:8000/${item.file}`} className='profile-user' alt="" ></img></td>
                                    <td>{item.type}</td>
                                    <td>
                                        <Link to={`edit-user/${item.id}`} id='create' className="btn btn-success btn-sm">Edit</Link>
                                    </td>
                                    <td><button type='button' id='create' onClick={(e) => deleteUser(e, item.id)} className='btn btn-danger btn-sm'>Delete</button></td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </section>

        </>
    )

}

export default Useres;