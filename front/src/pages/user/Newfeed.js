import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import userprofile from '../../media/Illustrations/user-profile.png'
import comments from '../../media/ZoubairIcons/Feed/PNG/comments.png'
import saved from '../../media/ZoubairIcons/Feed/PNG/saved.png'
import search from '../../media/ZoubairIcons/Feed/PNG/search.png'
import share from '../../media/ZoubairIcons/Feed/PNG/share.png'
import notification from '../../media/ZoubairIcons/Feed/PNG/Group-35114.png'
import upload from '../../media/ZoubairIcons/Feed/PNG/Group-35113.png'
import dislike from '../../media/ZoubairIcons/Redditlikefeed/PNG/Group-35198.png'
import like from '../../media/ZoubairIcons/Redditlikefeed/PNG/Group-35197.png'
import usertype from '../../media/ZoubairIcons/HomePageIcons/Founder,premium,basic/PNG/Group-35179.png'
import Sidebars from "../../components/NewSidebar";



class UsersCommunity extends Component {


    state = {
        posts: [],
        loading: true,
    }


    async componentDidMount() {

        const res = await axios.get('http://127.0.0.1:8000/api/community/user/posts');
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

                        <div class="serious-post-left" key={item.id}>
                            <div class="serious-post-user">
                                <img src={userprofile} class="user-profile" alt="USER-PROFILE" />
                                <h2>{item.user.username}</h2>
                            </div>
                            <div class="serious-post-content">
                                <div class="serious-post">
                                    <h2 class="serious-post-title">{item.post_title}</h2>
                                    <h2 class="serious-post-txt">{item.post_content}</h2>
                                </div>
                                <div class="serious-post-details">
                                    <div class="details-icon">
                                        <img src={comments} alt="" />


                                        <h2>55</h2>


                                    </div>
                                    <div class="details-icon">
                                        <img src={saved} alt="" />

                                        <h2>14</h2>
                                    </div>
                                    <div class="details-icon">
                                        <img src={share} alt="" />

                                        <h2>37</h2>
                                    </div>

                                </div>
                            </div>

                            <div class="serious-post-type">
                                <div class="type-user">
                                    <img src={usertype} alt="" className="user-type-png" />


                                </div>
                                <div class="post-likes">
                                    <div class="likes">
                                        <div class="like">
                                            <img src={like} alt="" className="likes-png" />


                                        </div>
                                        <h2>345</h2>
                                    </div>
                                    <div class="likes">
                                        <div class="like">
                                            <img src={dislike} className='likes-png' alt="" />


                                        </div>
                                        <h2>122</h2>
                                    </div>
                                </div>
                            </div>
                        </div>



                    );
                });
        }
        return (
            <>
                <Sidebars />
                <section class="serious-part">
                    <div class="serious-top">
                        <div class="search">
                            <img src={search} alt="" className="searchs"/>
                            <input type="text" name="search" id="search" placeholder="Search" />
                        </div>



                        <div class="notification-icon">
                            <img src={notification} alt="" className="icon-top" />
                        </div>
                        <div class="upload-icon">
                            <button className="upload-post"><img src={upload} alt="" className="icon-top" /></button>
                            

                        </div>




                    </div>
                    <div class="serious-bot">
                        <div class="serious-bot-left">
                            <div class="serious-bot-left-header">
                                <h2 class="serious-section-name">COMMUNITY</h2>
                                <h2 class="serious-section-nam">ALL</h2>
                                <h2 class="serious-section-nam">FOLLOWING</h2>
                                <h2 class="serious-section-nam">NEWEST</h2>
                                <h2 class="serious-section-nam">POPULAR</h2>
                            </div>
                            <div class="serious-bot-left-bar"></div>
                            {/* aki va feed ppost */}
                            {users_HTMLTable}


                        </div>
                        <div class="serious-bot-right">
                            <div class="serious-bot-right-bar"></div>
                            <div class="serious-bot-right-posts">
                                <div class="right-posts">
                                    <div class="right-posts-categories">
                                        <h2 class="post-category">Latest Posts</h2>
                                    </div>
                                    <div class="right-posts-container">
                                        <div class="right-post">
                                            <div class="right-post-user">
                                                {/* <img src="/Components/user-profile.png" class="users-profile" alt="USER-PROFILE" /> */}
                                                <h2>USER NAME</h2>
                                            </div>
                                            <div class="right-post-title">
                                                <h2 class="right-title">Post Heading</h2>
                                            </div>
                                            <div class="right-post-type">
                                                <h3>Premium</h3>


                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div class="right-posts">
                                    <div class="right-posts-categories">
                                        <h2 class="post-category">Top Posts</h2>
                                    </div>
                                    <div class="right-posts-container">
                                        <div class="right-post">
                                            <div class="right-post-user">
                                                {/* <img src="/Components/user-profile.png" class="users-profile" alt="USER-PROFILE"> */}
                                                    <h2>USER NAME</h2>
                                            </div>
                                            <div class="right-post-title">
                                                <h2 class="right-title">Post Heading</h2>
                                            </div>
                                            <div class="right-post-type">
                                                <h3>Premium</h3>


                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                </section>


            </>



        )
    }
}


export default UsersCommunity;

