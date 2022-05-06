import React, { useEffect, useState } from "react";
import Sidebars from "../../components/NewSidebar";
import search from '../../media/ZoubairIcons/Feed/PNG/search.png'
import notification from '../../media/ZoubairIcons/Feed/PNG/Group-35114.png'
import userprofile from '../../media/Illustrations/user-profile.png'
import bulb from '../../media/bulb.png'
import emojis from "../../media/ZoubairIcons/Message/PNG/emojis.png"
import file from "../../media/ZoubairIcons/Message/PNG/file.png"
import mic from "../../media/ZoubairIcons/Message/PNG/mic.png"
import send from "../../media/ZoubairIcons/Message/PNG/send.png"
import video from "../../media/ZoubairIcons/Message/PNG/video.png"
import axios from "axios";
import { Link, useParams } from "react-router-dom";



function Chat() {
    const [users, setUsers] = useState([])
    const { id } = useParams();
    const user_id = id;
    const [message, setMessage] = useState({

        message_content: "",
        user_id: "",
    });

    const handleInput = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        async function users() {
            const res = await axios.get('http://127.0.0.1:8000/api/user/chat');
            if (res.data.status === 200) {
                setUsers(res.data.users)
            }
        }
        users()
    }, [])

    const sendMessage = async (e) => {
        e.preventDefault();
        const data = {
            message_content: message.message,
            user_id: message.user_id,
        }

        await axios.post(`http://127.0.0.1:8000/api/user/message/${user_id}`, data).then(res => {

            if (res.data.status === 200) {


                setMessage({
                    message_content: '',
                });



            }


        });

    }




    return (
        <>
            <Sidebars />
            <section className="chat-container">

                <div class="serious-top-chat">
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
                                        <img src={bulb} alt="" />
                                        <h2>Mycroft Holmes</h2>
                                        <h3>Jan 5, 3:54 PM</h3>

                                    </div>
                                    <div className="message">
                                        <h2>Where are you ? Time to eat !! </h2>
                                    </div>



                                </div>


                            </div>
                            <form onSubmit={sendMessage}>
                                <div className="message-input">
                                    <div className="chat-icons">
                                        <img src={emojis} alt="" className="chat-ico" />
                                        <img src={file} alt="" className="chat-ico" />
                                        <img src={video} alt="" className="chat-ico" />
                                        <img src={mic} alt="" className="chat-ico" />
                                        <img src={send} alt="" className="chat-ico" />
                                    </div>
                                    <label>
                                        <input type="hidden" name="user_id" value={message.user_id} />
                                    </label>
                                    <input type="text" name="message" className="text" placeholder="Type Message here !" onChange={handleInput} value={message.message_content} />

                                </div>
                            </form>


                        </div>
                    </div>
                    <div className="chat-bot-right">
                        <div className="chat-right-line"></div>
                        <div className="chat-right-container">
                            <div class="search-chat">
                                <img src={search} alt="" className="searchs-chat" />
                                <input type="text" name="search" id="searchs" placeholder="Search" />
                            </div>
                            {users.map((user) => {
                                return (
                                    <div className="right-users-profiles" key={user.id}>
                                        <Link to={`messages/${user.id}`} className="web">
                                            <div className="chat-right-users">
                                                <img src={`http://127.0.0.1:8000/${user.file}`} alt="" />
                                                <div className="chat-users">
                                                    <h2>{user.username}</h2>

                                                </div>

                                            </div>
                                        </Link>
                                        <Link to={`phone/${user.id}`} className="phone">
                                            <div className="chat-right-users">
                                                <img src={`http://127.0.0.1:8000/${user.file}`} alt="" />
                                                <div className="chat-users">
                                                    <h2>{user.username}</h2>

                                                </div>

                                            </div>
                                        </Link>
                                        <div className="users-line"></div>
                                    </div>
                                    
                                )
                            })}




                        </div>

                    </div>
                </div>

            </section>

        </>
    )
}

export default Chat;