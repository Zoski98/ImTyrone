import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from '../../components/sidebar';
import moment from 'moment';





class Feed extends Component {

    state = {
        posts: [],
        loading: true,
    }


    async componentDidMount() {

        const res = await axios.get('http://127.0.0.1:8000/api/feed/posts');
        console.log(res);
        if (res.data.status === 200) {
            this.setState({
                posts: res.data.posts,
                loading: false,
            });
        }
    }

    deletePost = async (e, id) => {
        const deletedUser = e.currentTarget;
        deletedUser.innerText = "Deleting";
        const res = await axios.delete(`http://127.0.0.1:8000/api/delete-post/${id}`);
        if (res.data.status === 200) {
            deletedUser.closest('tr').remove();
            console.log(res.data.message);
        }
    }
    approvePost = async (e, id) => {
        const approvedPost = e.currentTarget;
        const res = await axios.put(`http://127.0.0.1:8000/api/approve/${id}`);
        if (res.data.status === 200) {
            console.log(res.data.message);
            this.props.history.push("/feed");
        }
        

    }

    render() {

        let users_HTMLTable = "";
        if (this.state.loading) {
            users_HTMLTable = <tr><td colSpan='7'><h2>Loading...</h2></td></tr>
        }
        else {
            users_HTMLTable =
                this.state.posts.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.post_title}</td>
                            <td>{item.user.username}</td>
                            <td>{moment(item.created_at).fromNow()}</td>
                            <td>{item.isApproved}</td>

                            <td>
                                <Link to={`show-post/${item.id}`} id="create" className="btn btn-success btn-sm">Show</Link>
                            </td>
                            <td>
                                <button type='button' id="create" onClick={(e) => this.approvePost(e, item.id)} className='btn btn-info btn-sm'>Approve</button>
                            </td>
                            <td><button type='button' id="create" onClick={(e) => this.deletePost(e, item.id)} className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                    );
                });
        }
        return (
            <>
                <Sidebar />
                <section className="tables">
                    <Link to={"/create/feed/post"}><button type="button" id="create" class="btn btn-primary">Create Post</button></Link>
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
                            {users_HTMLTable}
                        </tbody>
                    </table>
                </section>

            </>

        )
    }




}

export default Feed;