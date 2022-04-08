import React from "react";
import Sidebars from "../../components/NewSidebar";
import users from '../../media/mapa1.png'


function Feed(){





    return(

        <>
        <Sidebars/>
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
                <div className="feed-content-bar"></div>
                <div className="feed-content-selection">
                    <h2 className="feed-title">FEED</h2>
                    <h2 className="feed-titles">ALL</h2>
                    <h2 className="feed-titles">FOLLOWING</h2>
                    <h2 className="feed-titles">NEWEST</h2>
                    <h2 className="feed-titles">POPULAR</h2>
                </div>
                <div className="feed-content-posts">
                    <div className="feed-post">
                        <h2 className="feed-post-title">POST TITLE</h2>
                        <img src={users} alt="" className="feed-image" />
                        <div className="feed-post-user">
                            <img src={users} alt="" className="user-feed-profile" />
                            <h2 className="users-name-feed">Khay Mojha</h2>                        
                        </div>

                    </div>
                </div>
            </div>
            <div className="feed-bar"></div>
            <div className="feed-right">
                <div className="feed-search"></div>
                <div className="feed-suggestions"></div>
                <div className="feed-users-suggested"></div>
                <div className="feed-right-bar"></div>
            </div>
        </section>
        </>

    )

}

export default Feed;