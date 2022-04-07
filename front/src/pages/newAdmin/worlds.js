import React, { Component, useEffect, useState } from "react";
import Sidebar from '../../components/sidebar';
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import moment from 'moment';

function Worlds() {

    const history = useHistory()
    const [world, setWorld] = useState([])


    useEffect(() => {
        async function world() {
            const res = await axios.get('http://127.0.0.1:8000/api/world/posts');
            if (res.data.status === 200) {
                setWorld(res.data.posts)
            }
        }
        world()
    }, [])

    const approvePost = async (e, id) => {
        const approvedPost = e.currentTarget;
        approvedPost.innerText = "Approving";
        const res = await axios.put(`http://127.0.0.1:8000/api/approve/${id}`);
        if (res.data.status === 200) {
            console.log(res.data.message);
        }
        approvedPost.innerText = "Approved"
        history.push("world");

    }

    const deletePost = async (e, id) => {
        const deletedPost = e.currentTarget;
        deletedPost.innerText = "Deleting";
        const res = await axios.delete(`http://127.0.0.1:8000/api/admin/delete/post/${id}`);
        if (res.data.status === 200) {
            deletedPost.closest('tr').remove();
            console.log(res.data.message);
        }
        history.push('world')
    }





    return (
        <>
            <Sidebar />
            <section className="tables">
                <Link to={"/create/world/post"}><button type="button" id="create" class="btn btn-primary">Create Post</button></Link>

                <table id="admin-table" className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Post Ttitle</th>
                            <th scope="col">Username</th>
                            <th scope="col">Created</th>
                            <th scope="col">Status</th>
                            <th scope="col">Show</th>
                            <th scope="col">Approve</th>
                            <th scope="col">Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {world.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.post_title}</td>
                                    <td>{item.user.username}</td>
                                    <td>{moment(item.created_at).fromNow()}</td>
                                    <td className="status-td">{item.isApproved}</td>

                                    <td>
                                        <Link to={`show-post/${item.id}`} id="create" className="btn btn-success btn-sm">Show</Link>
                                    </td>
                                    <td>
                                        <button type='button' id="create" onClick={(e) => approvePost(e, item.id)} className='btn btn-info btn-sm approved'>Approve</button>
                                    </td>
                                    <td>
                                        <button type='button' id="create" onClick={(e) => deletePost(e, item.id)} className='btn btn-danger btn-sm'>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
        </>
    )

}

export default Worlds;