import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar';

class Useradmin extends Component {
    

    state = {
        users: [],
        loading: true,
    }


    async componentDidMount() {

        const res = await axios.get('http://127.0.0.1:8000/api/users');
        // console.log(res);
        if (res.data.status === 200) {
            this.setState({
                users: res.data.users,
                loading: false,
            });
        }
    }

    deleteUser = async (e, id) => {
        const deletedUser = e.currentTarget;
        deletedUser.innerText = "Deleting";
        const res = await axios.delete(`http://127.0.0.1:8000/api/delete-user/${id}`);
        if (res.data.status === 200) {
            deletedUser.closest('tr').remove();
            console.log(res.data.message);
        }
    }

    render() {

        let users_HTMLTable = "";
        if (this.state.loading) {
            users_HTMLTable = <tr><td colSpan='7'><h2>Loading...</h2></td></tr>
        }
        else {
            users_HTMLTable =
                this.state.users.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td><img src={item.file} alt="" ></img></td>
                            <td>{item.type}</td>
                            <td>
                                <Link to={`edit-user/${item.id}`} id='create' className="btn btn-success btn-sm">Edit</Link>
                            </td>
                            <td><button type='button' id='create' onClick={(e) => this.deleteUser(e, item.id)} className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                    );
                });
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
                            {users_HTMLTable}

                        </tbody>
                    </table>
                </section>

            </>

        )
    }
}


export default Useradmin;