import React from "react";
import Sidebars from "../../components/NewSidebar";
import users from '../../media/mapa1.png'
import like from '../../media/ZoubairIcons/Feed/PNG/heart.png'
import comments from '../../media/ZoubairIcons/Feed/PNG/comments.png'
import useres from '../../media/Illustrations/user-profile.png'
import search from '../../media/ZoubairIcons/Feed/PNG/search.png'
import upload from '../../media/ZoubairIcons/Feed/PNG/Group-35113.png'


function Feed() {

    const createOn = () => {
        let container = document.getElementById('create-post');
        let serious = document.getElementById('serious-parts');
        let button = document.getElementById('side-active');
        container.classList.toggle('create-post-active');
        serious.classList.toggle('serious-active');
        button.classList.toggle('side-active');
      }
    

    return (

        <>
            <Sidebars />
            <section className="feed-container">
                <div className="feed-content">
                    <div className="feed-story">
                        <div className="user-story">
                            <img src={users} alt="" />
                            <h2>LOKO 2</h2>
                        </div>
                        <div className="user-story">
                            <img src={users} alt="" />
                            <h2>LOKO 2</h2>
                        </div>
                        <div className="user-story">
                            <img src={users} alt="" />
                            <h2>LOKO 2</h2>
                        </div>
                        <div className="user-story">
                            <img src={users} alt="" />
                            <h2>LOKO 2</h2>
                        </div>
                        <div className="user-story">
                            <img src={users} alt="" />
                            <h2>LOKO 2</h2>
                        </div>
                        <div className="user-story">
                            <img src={users} alt="" />
                            <h2>LOKO 2</h2>
                        </div>
                        <div className="user-story">
                            <img src={users} alt="" />
                            <h2>LOKO 2</h2>
                        </div>
                        <div className="user-story">
                            <img src={users} alt="" />
                            <h2>LOKO 2</h2>
                        </div>
                        <div className="user-story">
                            <img src={users} alt="" />
                            <h2>LOKO 2</h2>
                        </div>

                    </div>
                    <div className="feed-content-selection">
                        <h2 className="feed-title">FEED</h2>
                        <h2 className="feed-titeles">ALL</h2>
                        <h2 className="feed-titles">FOLLOWING</h2>
                        <h2 className="feed-titles">NEWEST</h2>
                        <h2 className="feed-titles">POPULAR</h2>
                    </div>
                    <div className="feed-content-bar"></div>

                    <div className="feed-content-posts">

                        <div className="feed-post">
                            <h2 className="feed-post-title">POST TITLE</h2>
                            <img src={users} alt="" className="feed-image" />
                            <div className="feed-post-user">
                                <img src={useres} alt="" className="user-feed-profile" />
                                <h2 className="users-name-feed">Khay Mojha</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>16</h2>
                                <img src={comments} alt="" className="feed-likes" />
                                <h2>24</h2>
                            </div>

                        </div>

                        <div className="feed-post">
                            <h2 className="feed-post-title">POST TITLE</h2>
                            <img src={users} alt="" className="feed-image" />
                            <div className="feed-post-user">
                                <img src={useres} alt="" className="user-feed-profile" />
                                <h2 className="users-name-feed">Khay Mojha</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>16</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>24</h2>
                            </div>

                        </div>

                        <div className="feed-post">
                            <h2 className="feed-post-title">POST TITLE</h2>
                            <img src={users} alt="" className="feed-image" />
                            <div className="feed-post-user">
                                <img src={useres} alt="" className="user-feed-profile" />
                                <h2 className="users-name-feed">Khay Mojha</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>16</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>24</h2>
                            </div>

                        </div>  <div className="feed-post">
                            <h2 className="feed-post-title">POST TITLE</h2>
                            <img src={users} alt="" className="feed-image" />
                            <div className="feed-post-user">
                                <img src={useres} alt="" className="user-feed-profile" />
                                <h2 className="users-name-feed">Khay Mojha</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>16</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>24</h2>
                            </div>

                        </div>  <div className="feed-post">
                            <h2 className="feed-post-title">POST TITLE</h2>
                            <img src={users} alt="" className="feed-image" />
                            <div className="feed-post-user">
                                <img src={useres} alt="" className="user-feed-profile" />
                                <h2 className="users-name-feed">Khay Mojha</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>16</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>24</h2>
                            </div>

                        </div>  <div className="feed-post">
                            <h2 className="feed-post-title">POST TITLE</h2>
                            <img src={users} alt="" className="feed-image" />
                            <div className="feed-post-user">
                                <img src={useres} alt="" className="user-feed-profile" />
                                <h2 className="users-name-feed">Khay Mojha</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>16</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>24</h2>
                            </div>

                        </div>  <div className="feed-post">
                            <h2 className="feed-post-title">POST TITLE</h2>
                            <img src={users} alt="" className="feed-image" />
                            <div className="feed-post-user">
                                <img src={useres} alt="" className="user-feed-profile" />
                                <h2 className="users-name-feed">Khay Mojha</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>16</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>24</h2>
                            </div>

                        </div>  <div className="feed-post">
                            <h2 className="feed-post-title">POST TITLE</h2>
                            <img src={users} alt="" className="feed-image" />
                            <div className="feed-post-user">
                                <img src={useres} alt="" className="user-feed-profile" />
                                <h2 className="users-name-feed">Khay Mojha</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>16</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>24</h2>
                            </div>

                        </div>  <div className="feed-post">
                            <h2 className="feed-post-title">POST TITLE</h2>
                            <img src={users} alt="" className="feed-image" />
                            <div className="feed-post-user">
                                <img src={useres} alt="" className="user-feed-profile" />
                                <h2 className="users-name-feed">Khay Mojha</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>16</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>24</h2>
                            </div>

                        </div>  <div className="feed-post">
                            <h2 className="feed-post-title">POST TITLE</h2>
                            <img src={users} alt="" className="feed-image" />
                            <div className="feed-post-user">
                                <img src={useres} alt="" className="user-feed-profile" />
                                <h2 className="users-name-feed">Khay Mojha</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>16</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>24</h2>
                            </div>

                        </div>  <div className="feed-post">
                            <h2 className="feed-post-title">POST TITLE</h2>
                            <img src={users} alt="" className="feed-image" />
                            <div className="feed-post-user">
                                <img src={useres} alt="" className="user-feed-profile" />
                                <h2 className="users-name-feed">Khay Mojha</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>16</h2>
                                <img src={like} alt="" className="feed-likes" />
                                <h2>24</h2>
                            </div>

                        </div>


                    </div>
                </div>
                <div className="feed-bar"></div>
                <div className="feed-right">
                    <div className="feed-search">
                        <div class="search">
                            <img src={search} alt="" className="searchs" />
                            <input type="text" name="search" id="search" placeholder="Search" />
                        </div>
                        <div class="upload-icons">
                            <button className="upload-post" onClick={createOn}><img src={upload} alt="" className="icon-top" /></button>
                        </div>
                    </div>
                    <div className="feed-suggestions">
                        <div className="suggested">
                            <h2>Suggestions for you</h2>
                        </div>
                        <div className="user-suggested">
                            <img src={useres} alt="" className="user-feed-profile" />
                            <div className="usename-email">
                                <h2>Abderzak</h2>
                                <h3>loko@loko.com</h3>
                            </div>
                            <h2 className="suggest-but">Follow</h2>
                        </div>
                        <div className="user-suggested">
                            <img src={useres} alt="" className="user-feed-profile" />
                            <div className="usename-email">
                                <h2>Abderzak</h2>
                                <h3>loko@loko.com</h3>
                            </div>
                            <h2 className="suggest-but">Follow</h2>
                        </div>
                        <div className="user-suggested">
                            <img src={useres} alt="" className="user-feed-profile" />
                            <div className="usename-email">
                                <h2>Abderzak</h2>
                                <h3>loko@loko.com</h3>
                            </div>
                            <h2 className="suggest-but">Follow</h2>
                        </div>
                        <div className="user-suggested">
                            <img src={useres} alt="" className="user-feed-profile" />
                            <div className="usename-email">
                                <h2>Abderzak</h2>
                                <h3>loko@loko.com</h3>
                            </div>
                            <h2 className="suggest-but">Follow</h2>
                        </div>
                        <div className="user-suggested">
                            <img src={useres} alt="" className="user-feed-profile" />
                            <div className="usename-email">
                                <h2>Abderzak</h2>
                                <h3>loko@loko.com</h3>
                            </div>
                            <h2 className="suggest-but">Follow</h2>
                        </div>
                    </div>
                    <div className="feed-right-bar"></div>
                    <div className="feed-users-suggested"></div>

                </div>
            </section>
        </>

    )

}

export default Feed;