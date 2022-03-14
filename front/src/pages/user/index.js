import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar';

class user extends Component {


    state = {
        worlds: [],
        posts: [],
        loading: true,
    }


    async componentDidMount() {

        const res = await axios.get('http://127.0.0.1:8000/api/posts');
        console.log(res);
        if (res.data.status === 200) {
            this.setState({
                worlds: res.data.worlds,
                loading: false,
            });
        }
    }

    // item.forEach(post => {

    //                                 });

    render() {

        let users_HTMLTable = "";
        if (this.state.loading) {
            users_HTMLTable = <tr><td colSpan='7'><h2>Loading...</h2></td></tr>
        }
        else {
            users_HTMLTable =


                this.state.worlds.map((item) => {
                    return (
                        <div key={item.id}>







                            {item.posts.map((post) => {
                                return (<div key={post.id}>
                                    <h1>{post.post_title}</h1>
                                    <h1>{post.post_content}</h1>
                                    <h1>{post.id}</h1>
                                </div>)




                            })}




                        </div>
                    );
                });
        }



        return (
            <>
                <Sidebar />
                <div className="dashboard-table">
                    {users_HTMLTable}
                </div>

            </>

        )
    }
}


export default user;