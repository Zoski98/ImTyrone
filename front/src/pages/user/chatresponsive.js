import React, { useEffect, useState } from "react";
import Sidebars from "../../components/NewSidebar";
import search from '../../media/ZoubairIcons/Feed/PNG/search.png'
import notification from '../../media/ZoubairIcons/Feed/PNG/Group-35114.png'
import userprofile from '../../media/Illustrations/user-profile.png'
import emojis from "../../media/ZoubairIcons/Message/PNG/emojis.png"
import file from "../../media/ZoubairIcons/Message/PNG/file.png"
import mic from "../../media/ZoubairIcons/Message/PNG/mic.png"
import send from "../../media/ZoubairIcons/Message/PNG/send.png"
import video from "../../media/ZoubairIcons/Message/PNG/video.png"
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";
import moment from "moment";



function ChatResponsive() {
    const [users, setUsers] = useState([])
    const [state, setState] = useState([])
    const { id } = useParams();
    const user_id = id;
    const [message, setMessage] = useState({
        message_content: "",
        user_id: "",
    });
    const [texts, setTexts] = useState([]);
    const history = useHistory();


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


    useEffect(() => {
        async function messages() {
            const res = await axios.get(`http://127.0.0.1:8000/api/user/messages/${id}`);
            if (res.data.status === 200) {
                setTexts(res.data.chat);

            }
        }
        messages()
    }, [])

    useEffect(() => {
        async function receiver() {
            const res = await axios.get(`http://127.0.0.1:8000/api/user/receiver/${user_id}`);
            if (res.data.status === 200) {
                setState({
                    receiver:res.data.records.receiver.user_id,
                });
                
            }
        }
        receiver()
    }, [])








    const sendMessage = async (e) => {
        e.preventDefault();
        const data = {
            message_content: message.message_content,
            user_id: message.user_id,
        }

        await axios.post(`http://127.0.0.1:8000/api/user/message/${user_id}`, data).then(res => {

            if (res.data.status === 200) {


                setMessage({
                    message_content: '',
                });
                window.location.reload()



            }


        });

    }




    return (
        <>
            <Sidebars />
            <section className="chat-containers">

                
                <div className="chat-top-lines"></div>
                <div className="chat-bots">
                    <div className="chat-bot-lefts">
                        
                        <div className="chat-left-bottom">

                            <div className="chat-top">
                                {/* <img src={`http://127.0.0.1:8000/${receiver.user}`} alt="" className="user-chat" /> */}
                                <div className="chat-status">
                                    <h2 className="user-name-chat">{state.receiver}</h2>
                                    <h2 className="status">Active</h2>
                                </div>
                                <img src="" alt="" className="dots" />
                            </div>
                            

                            <div className="chat-line"></div>
                            <div className="chat-left-upper">
                            <h2 className="clear-chat">Clear Chat</h2>
                            <h2 className="more-chat">More</h2>
                        </div>

                            <div className="chat">

                                {texts.map((user) => {
                                    return (
                                        <div className="message-container" key={user.id}>
                                            <div className="message-owner">
                                                <img src={`http://127.0.0.1:8000/${user.sender.file}`} alt="" />
                                                <h2>{user.sender.username}</h2>
                                                <h3>{moment(user.created_at).fromNow()}</h3>

                                            </div>
                                            <div className="message">
                                                <h2>{user.message_content}</h2>

                                            </div>
                                        </div>
                                    )
                                })}






                            </div>

                            <div className="message-input">
                                <div className="chat-icons">
                                    <img src={emojis} alt="" className="chat-ico" />
                                    <img src={file} alt="" className="chat-ico" />
                                    <img src={video} alt="" className="chat-ico" />
                                    <img src={mic} alt="" className="chat-ico" />
                                    <img src={send} alt="" className="chat-ico" />
                                </div>
                                <form onSubmit={sendMessage}>
                                    <label>
                                        <input type="hidden" name="user_id" value={message.user_id} />
                                    </label>
                                    <input type="text" name="message_content" className="text" placeholder="Type Message here !" onChange={handleInput} value={message.message_content} />

                                </form>
                            </div>

                        </div>
                    </div>
                    
                </div>

            </section>

        </>
    )
}

export default ChatResponsive;