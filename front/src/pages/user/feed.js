import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from '../../components/sidebar';
import moment from 'moment';





class userFeed extends Component {


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



    render() {

        let users_HTMLTable = "";
        if (this.state.loading) {
            users_HTMLTable = <tr><td colSpan='7'><h2>Loading...</h2></td></tr>
        }
        else {
            users_HTMLTable =
                this.state.posts.map((item) => {
                    return (
                        <div className="feed-card" key={item.id}>
                            {/* <Link to={`show-post/${item.id}`}>
                            <div className="feed-user">
                                <h3>{item.image}</h3>
                                <h3>{item.user.username}</h3>
                            </div>
                            <div className="feed-content">
                                <h2 className="feed-title">{item.post_title}</h2>
                                <div className="feed-info">
                                    <h3>{item.post_content}</h3>
                                    <h3>{moment(item.created_at).fromNow()}</h3></div>
                            </div> */}
                            <div class="container  mb-5">
                                <div class="d-flex justify-content-center row">
                                    <div class="col-md-8">
                                        <div class="feed p-2">

                                            <div class="bg-white border mt-2">
                                                <div>
                                                    <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                                                        <div class="d-flex flex-row align-items-center feed-text px-2"><img class="rounded-circle" src="https://i.imgur.com/aoKusnD.jpg" width="45"></img>
                                                            <div class="d-flex flex-column flex-wrap ml-2"><span class="font-weight-bold">{item.user.username}</span><span class="text-black-50 time">{moment(item.created_at).fromNow()}</span></div>
                                                        </div>
                                                        <div class="feed-icon px-2"><i class="fa fa-ellipsis-v text-black-50"></i></div>
                                                    </div>
                                                </div>
                                                <div class="p-2 px-3"><span>{item.post_content}</span></div>
                                                <div class="d-flex justify-content-end socials p-2 py-3"><i class="fa fa-thumbs-up"></i><i class="fa fa-comments-o"></i><i class="fa fa-share"></i></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    );
                });
        }
        return (
            <>
                <Link to={"/create/feed/post"}><button type="button" id="create" class="btn btn-primary">Add Post</button></Link>

                {users_HTMLTable}


            </>

        )
    }




}

export default userFeed;