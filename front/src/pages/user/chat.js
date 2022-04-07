import React from "react";
import Sidebars from "../../components/NewSidebar";
import search from '../../media/ZoubairIcons/Feed/PNG/search.png'
import notification from '../../media/ZoubairIcons/Feed/PNG/Group-35114.png'
import userprofile from '../../media/Illustrations/user-profile.png'
import emojis from "../../media/ZoubairIcons/Message/PNG/emojis.png"
import file from "../../media/ZoubairIcons/Message/PNG/file.png"
import mic from "../../media/ZoubairIcons/Message/PNG/mic.png"
import send from "../../media/ZoubairIcons/Message/PNG/send.png"
import video from "../../media/ZoubairIcons/Message/PNG/video.png"



function Chat() {

    return (
        <>
            <Sidebars />
            <section className="chat-container">

                <div class="serious-top">
                    <div class="search">
                        <img src={search} alt="" className="searchs" />
                        <input type="text" name="search" id="search" placeholder="Search" />
                    </div>



                    <div class="notification-icon">
                        <img src={notification} alt="" className="icon-top" />
                    </div>


                </div>

                <div className="chat-top-line"></div>
                <div className="chat-bot">
                    <div className="chat-bot-left">
                        <div className="chat-left-upper">
                            <h2 className="clear-chat">Clear Chat</h2>
                            <h2 className="more-chat">More</h2>
                        </div>
                        <div className="chat-left-bottom">

                            <div className="chat-top">
                                <img src={userprofile} alt="" className="user-chat" />
                                <div className="chat-status">
                                    <h2 className="user-name-chat">Enola Holmes</h2>
                                    <h2 className="status">Active</h2>
                                </div>
                                <img src="" alt="" className="dots" />
                            </div>

                            <div className="chat-line"></div>

                            <div className="chat">
                                <div className="message-container">
                                    <div className="message-owner">
                                        <img src={userprofile} alt="" />
                                        <h2>Enola Holmes</h2>
                                        <h3>Jan 5, 3:54 PM</h3>

                                    </div>
                                    <div className="message">
                                        <h2>Hi, How you doing ? </h2>
                                    </div>
                                    <div className="message-owner">
                                        <img src={userprofile} alt="" />
                                        <h2>Enola Holmes</h2>
                                        <h3>Jan 5, 3:54 PM</h3>

                                    </div>
                                    <div className="message">
                                        <h2>Hi, How you doing ? </h2>
                                    </div>



                                </div>
                                <div className="message-input">
                                    <div className="chat-icons">
                                        <img src={emojis} alt="" className="chat-ico" />
                                        <img src={file} alt="" className="chat-ico" />
                                        <img src={video} alt="" className="chat-ico" />
                                        <img src={mic} alt="" className="chat-ico" />
                                        <img src={send} alt="" className="chat-ico" />
                                    </div>
                                    <input type="text" className="text" placeholder="Type Message here !" />

                                </div>

                            </div>



                        </div>
                    </div>
                    <div className="chat-bot-right">
                        <div className="chat-right-line"></div>
                        <div className="chat-right-container">
                            <div class="search-chat">
                                <img src={search} alt="" className="searchs-chat" />
                                <input type="text" name="search" id="searchs" placeholder="Search" />
                            </div>
                            <div className="right-users-profiles">
                                <div className="chat-right-users">
                                    <img src={userprofile} alt="" />
                                    <div className="chat-users">
                                        <h2>Aya Doba</h2>
                                        <h3>Soy aya la gorda xD</h3>
                                    </div>
                                    <h3>10:00 AM</h3>
                                </div>
                                <div className="users-line"></div>
                            </div>
                            <div className="right-users-profiles">
                                <div className="chat-right-users">
                                    <img src={userprofile} alt="" />
                                    <div className="chat-users">
                                        <h2>Aya Doba</h2>
                                        <h3>Soy aya la gorda xD</h3>
                                    </div>
                                    <h3>10:00 AM</h3>
                                </div>
                                <div className="users-line"></div>
                            </div>
                            <div className="right-users-profiles">
                                <div className="chat-right-users">
                                    <img src={userprofile} alt="" />
                                    <div className="chat-users">
                                        <h2>Aya Doba</h2>
                                        <h3>Soy aya la gorda xD</h3>
                                    </div>
                                    <h3>10:00 AM</h3>
                                </div>
                                <div className="users-line"></div>
                            </div>
                            <div className="right-users-profiles">
                                <div className="chat-right-users">
                                    <img src={userprofile} alt="" />
                                    <div className="chat-users">
                                        <h2>Aya Doba</h2>
                                        <h3>Soy aya la gorda xD</h3>
                                    </div>
                                    <h3>10:00 AM</h3>
                                </div>
                                <div className="users-line"></div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>

        </>
    )
}

export default Chat;