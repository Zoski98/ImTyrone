import React, { useEffect, useState } from "react";
import userprofile from '../../media/Illustrations/user-profile.png'
import usertype from '../../media/ZoubairIcons/HomePageIcons/Founder,premium,basic/PNG/Group-35179.png'
import comments from "../../media/ZoubairIcons/Feed/PNG/comments.png"
import saved from "../../media/ZoubairIcons/Feed/PNG/saved.png"
import share from "../../media/ZoubairIcons/Feed/PNG/share.png"
import map from "../../media/earth2.png"
import logout from '../../media/shutdown.png';




import Sidebars from "../../components/NewSidebar";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";

function Profile() {
    const history = useHistory()
    const [user, setUser] = useState([])
    const [world, setWorld] = useState([])
    const [community, setCommunity] = useState([])
    const [feed, setFeed] = useState([])
    const logoutSubmit = (e) => {
        e.preventDefault();
        localStorage.removeItem('auth_name');
        localStorage.removeItem('auth_token');
        swal("You logged out !", "See you soon...", "success");
        history.push("/getin")
    }

    useEffect(() => {
        async function user() {
            const res = await axios.get('http://127.0.0.1:8000/api/current/user');
            if (res.data.status === 200) {
                setUser(res.data.user)
            }
        }
        user()
    }, [])


    useEffect(() => {
        async function world() {
            const res = await axios.get('http://127.0.0.1:8000/api/user/world/posts');
            if (res.data.status === 200) {
                setWorld(res.data.posts)
            }
        }
        world()
    }, [])

    useEffect(() => {
        async function community() {
            const res = await axios.get('http://127.0.0.1:8000/api/user/community/posts');
            if (res.data.status === 200) {
                setCommunity(res.data.posts)
            }
        }
        community()
    }, [])


    useEffect(() => {
        async function feed() {
            const res = await axios.get('http://127.0.0.1:8000/api/user/feed/posts');
            if (res.data.status === 200) {
                setFeed(res.data.posts)
            }
        }
        feed()
    }, [])






    return (

        <>
            <Sidebars />
            <section className="profile-container">
                <div className="left-profile">
                    <div className="profile-details">
                    <a href='#' onClick={logoutSubmit} >
                        <img src={logout} alt="yo" id='logout-ico' />
                        <span className="link-text">Log Out</span>
                    </a>
                        <img src={`http://127.0.0.1:8000/${user.file}`} alt="" />                       
                        <Link className="edit-profile" to={`/edit/user/${user.id}`} ><a href="" className="edit-profile">Edit Profile</a></Link>
                        <h2 className="q">Username</h2>
                        <h2 className="a">{user.username}</h2>
                        <h2 className="q">Email</h2>
                        <h2 className="a">{user.email}</h2>
                        <h2 className="q">Password</h2>
                        <h2 className="a">******</h2>
                        <img src={usertype} alt="" />
                        
                    </div>
                    
                </div>
                <div className="right-profile">
                    <div className="right-profile-title">
                        <h2>My uploads</h2>
                    </div>
                    <div className="right-profile-posts">
                        <div className="profile-posts">
                            <h2 className="post-type">WORLD</h2>
                            {world.map((world) => {
                                return (
                                    <div className="user-posts" key={world.id}>
                                        <Link to={`/show/post/${world.id}`}><h2 className="user-title">{world.post_title}</h2></Link>

                                        <img src={`http://127.0.0.1:8000/${world.image}`} alt="" className="map" />
                                        <div className="show-detailes">
                                            <div className="icon-containers" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="23.732" height="22.819" viewBox="0 0 23.732 22.819">
                                                    <path id="Icon_ionic-ios-heart" data-name="Icon ionic-ios-heart" d="M20.718,3.938h-.057A6.491,6.491,0,0,0,15.241,6.9a6.491,6.491,0,0,0-5.42-2.967H9.764a6.45,6.45,0,0,0-6.389,6.447A13.887,13.887,0,0,0,6.1,17.954a47.788,47.788,0,0,0,9.139,8.8,47.788,47.788,0,0,0,9.139-8.8,13.887,13.887,0,0,0,2.727-7.57A6.45,6.45,0,0,0,20.718,3.938Z" transform="translate(-3.375 -3.938)" fill="#ef820D" />
                                                </svg>
                                                <h2 className="icon-number" id="red-heart">12</h2>
                                            </div>
                                            <div className="icon-containers">
                                                <img src={comments} alt="" className="icon-details" />
                                                <h2 className="icon-number">55</h2>
                                            </div>
                                            <div className="icon-containers">
                                                <img src={saved} alt="" className="icon-details" />
                                                <h2 className="icon-number">4</h2>
                                            </div>
                                            <div className="icon-containers">
                                                <img src={share} alt="" className="icon-details" />
                                                <h2 className="icon-number">211</h2>
                                            </div>
                                        </div>
                                    </div>)
                            })}

                        </div>
                        <div className="profile-posts">
                            <h2 className="post-type">COMMUNITY</h2>

                            {community.map((community) => {
                                return (
                                    <div className="user-posts" key={community.id}>
                                        <Link to={`/show/post/${community.id}`} className="linkto" ><h2 class="user-title">{community.post_title}</h2></Link>
                                        <img src={`http://127.0.0.1:8000/${community.image}`} alt="" className="map" />
                                        <div className="show-detailes">
                                            <div className="icon-containers" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="23.732" height="22.819" viewBox="0 0 23.732 22.819">
                                                    <path id="Icon_ionic-ios-heart" data-name="Icon ionic-ios-heart" d="M20.718,3.938h-.057A6.491,6.491,0,0,0,15.241,6.9a6.491,6.491,0,0,0-5.42-2.967H9.764a6.45,6.45,0,0,0-6.389,6.447A13.887,13.887,0,0,0,6.1,17.954a47.788,47.788,0,0,0,9.139,8.8,47.788,47.788,0,0,0,9.139-8.8,13.887,13.887,0,0,0,2.727-7.57A6.45,6.45,0,0,0,20.718,3.938Z" transform="translate(-3.375 -3.938)" fill="#ef820D" />
                                                </svg>
                                                <h2 className="icon-number" id="red-heart">12</h2>
                                            </div>
                                            <div className="icon-containers">
                                                <img src={comments} alt="" className="icon-details" />
                                                <h2 className="icon-number">55</h2>
                                            </div>
                                            <div className="icon-containers">
                                                <img src={saved} alt="" className="icon-details" />
                                                <h2 className="icon-number">4</h2>
                                            </div>
                                            <div className="icon-containers">
                                                <img src={share} alt="" className="icon-details" />
                                                <h2 className="icon-number">211</h2>
                                            </div>
                                        </div>
                                    </div>)
                            })}
                        </div>
                        <div className="profile-posts">
                            <h2 className="post-type">FEED</h2>
                            {feed.map((post) => {
                                return (
                                    <div className="user-posts" key={post.id}>
                                        <Link to={`/show/post/${post.id}`} className="linkto" ><h2 class="user-title">{post.post_title}</h2></Link>

                                        
                                        <img src={`http://127.0.0.1:8000/${post.image}`} alt="" className="map" />
                                        <div className="show-detailes">
                                            <div className="icon-containers" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="23.732" height="22.819" viewBox="0 0 23.732 22.819">
                                                    <path id="Icon_ionic-ios-heart" data-name="Icon ionic-ios-heart" d="M20.718,3.938h-.057A6.491,6.491,0,0,0,15.241,6.9a6.491,6.491,0,0,0-5.42-2.967H9.764a6.45,6.45,0,0,0-6.389,6.447A13.887,13.887,0,0,0,6.1,17.954a47.788,47.788,0,0,0,9.139,8.8,47.788,47.788,0,0,0,9.139-8.8,13.887,13.887,0,0,0,2.727-7.57A6.45,6.45,0,0,0,20.718,3.938Z" transform="translate(-3.375 -3.938)" fill="#ef820D" />
                                                </svg>
                                                <h2 className="icon-number" id="red-heart">12</h2>
                                            </div>
                                            <div className="icon-containers">
                                                <img src={comments} alt="" className="icon-details" />
                                                <h2 className="icon-number">55</h2>
                                            </div>
                                            <div className="icon-containers">
                                                <img src={saved} alt="" className="icon-details" />
                                                <h2 className="icon-number">4</h2>
                                            </div>
                                            <div className="icon-containers">
                                                <img src={share} alt="" className="icon-details" />
                                                <h2 className="icon-number">211</h2>
                                            </div>
                                        </div>
                                    </div>)
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}

export default Profile;