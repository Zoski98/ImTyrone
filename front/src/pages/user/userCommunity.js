import axios from 'axios';
import moment from 'moment';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Usersidebar from '../../components/userSidebar';
import pawn from "../../media/SVGs/black-pawn.svg"
import Lastpost from './lastpost';

class userCommunity extends Component {

    state = {
        posts: [],
        loading: true,
        username:'',
        image:"",
    }

    


    async componentDidMount() {

        const res = await axios.get('http://127.0.0.1:8000/api/community/user/posts');
        if (res.data.status === 200) {
            this.setState({
                posts: res.data.posts,
                loading: false,
            });
        }
    }

    async showUser(){
        const tes = await axios.get('http://127.0.0.1:8000/api/current/user');
        if (tes.data.status === 200) {
            console.log(tes);
            this.setState({
                username: tes.data.user.username,
                image: tes.data.user.file,
            });
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

                        <div class="post1" key={item.id}>
                            <div class="container">
                                <div class="avatar">
                                    <img src={item.user.image} alt="avatar-img" class="avatar-img" />
                                    <div class="users-name"><h2 class="user-name">{item.user.username}</h2></div>
                                </div>
                                <div class="post-date">
                                    <div class="post-title"><Link to={`/user/show/post/${item.id}`}><h2 class="titles">{item.post_title}</h2></Link></div>
                                    <div class="post-content"><h2 class="content">{item.post_content}</h2></div>
                                    <div class="date-time"><h2 class="timing">{moment(item.created_at).fromNow()}</h2></div>
                                </div>

                                <div class="user-type"><img src={pawn} alt="" /></div></div>

                        </div>

                    );
                });
        }
      
        return (
            <>
                <Usersidebar />
                
                <div className="user-posts">
                    <Link to="/create/community/user/post"><h2>create post</h2></Link>
                    {users_HTMLTable}
                    <div>
                        <h2>{this.state.image}</h2>
                        <h2>{this.state.username}</h2>
                    </div>
                </div>


            </>

        )
    }
}


export default userCommunity;