import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import userprofile from "../../media/Illustrations/user-profile.png"
import heart from "../../media/ZoubairIcons/Feed/SVG/hearts.svg"
import comments from "../../media/ZoubairIcons/Feed/PNG/comments.png"
import saved from "../../media/ZoubairIcons/Feed/PNG/saved.png"
import share from "../../media/ZoubairIcons/Feed/PNG/share.png"
import returns from "../../media/ZoubairIcons/CommentPage/PNG/return.png"
import send from "../../media/ZoubairIcons/CommentPage/PNG/send.png"
import map from "../../media/map3.jpg"
import axios from "axios";
import moment from 'moment';
import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";






function ShowAdmin() {

    const [state, setState] = useState([])
    const [comment, setComment] = useState([])
    const { id } = useParams();
    const post_id = id;

    const history = useHistory();

    const [createInput, setCreate] = useState({

        reply_content: "",
        post_id: "",
        file: "",
    });

    const handleInput = (e) => {
        setCreate({ ...createInput, [e.target.name]: e.target.value });
    }

    const createComment = async (e) => {
        e.preventDefault();
        const data = {
            reply_content: createInput.reply_content,
            post_id: createInput.post_id,


        }

        await axios.post(`http://127.0.0.1:8000/api/admin/comment/${post_id}`, data).then(res => {

            if (res.data.status === 200) {

                swal({
                    title: "Well done!",
                    text: "You added a comment!",
                    icon: "success",
                    button: "Continue",
                });
                setCreate({
                    reply_content: '',
                    file: '',
                  });



            }


        });

    }

    const deleteComment = async (e, id) => {
        const deletedComment = e.currentTarget;
        deletedComment.innerText = "Deleting";
        const res = await axios.delete(`http://127.0.0.1:8000/api/admin/delete/comment/${id}`);
        if (res.data.status === 200) {
            deletedComment.closest('div').remove();
            console.log(res.data.message);
        } swal({
            title: "Deleted",
            text: "You deleted the comment !",
            icon: "success",
            button: "Continue",
        });
        history.push(`/show-post/${post_id}`);
    }

    useEffect(() => {
        async function test() {
            
            const res = await axios.get(`http://127.0.0.1:8000/api/admin/show/post/${post_id}`);
            if (res.data.status === 200) {
                setState({
                    posts: res.data.posts,
                    postes: res.data.postes,
                    username: res.data.posts.user.username,
                    post_title: res.data.posts.post_title,
                    image: res.data.posts.image,
                    post_content: res.data.posts.post_content,
                    usernames: res.data.posts.user.username,
                    reply_content: res.data.postes.reply_content,
                })
                setComment(res.data.postes)

            }
        }
        test()
    }, [])


    return (
        <>

            <Sidebar />
            <section className="show">
                <div className="show-container">

                    <div className="show-header">
                        <img src={userprofile} alt="" className="show-img" />
                        <h2 className="show-username">{state.username}</h2>
                        {/* <h2 className="show-time">{moment(state.created_at).fromNow()}</h2> */}
                        <img src={returns} alt="" className="show-return" />
                    </div>

                    <div className="show-post">
                        <h2 className="show-post-title">{state.post_title}</h2>
                        <h2 className="show-post-content">{state.post_content}</h2>
                        <img src={`http://127.0.0.1:8000/${state.image}`} alt="" className="show-post-img" />

                    </div>

                    <div className="show-details">
                        <div className="icon-container" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="23.732" height="22.819" viewBox="0 0 23.732 22.819">
                                <path id="Icon_ionic-ios-heart" data-name="Icon ionic-ios-heart" d="M20.718,3.938h-.057A6.491,6.491,0,0,0,15.241,6.9a6.491,6.491,0,0,0-5.42-2.967H9.764a6.45,6.45,0,0,0-6.389,6.447A13.887,13.887,0,0,0,6.1,17.954a47.788,47.788,0,0,0,9.139,8.8,47.788,47.788,0,0,0,9.139-8.8,13.887,13.887,0,0,0,2.727-7.57A6.45,6.45,0,0,0,20.718,3.938Z" transform="translate(-3.375 -3.938)" fill="#ef820D" />
                            </svg>
                            <h2 className="icon-number" id="red-heart">12</h2>
                        </div>
                        <div className="icon-container">
                            <img src={comments} alt="" className="icon-details" />
                            <h2 className="icon-number">55</h2>
                        </div>
                        <div className="icon-container">
                            <img src={saved} alt="" className="icon-details" />
                            <h2 className="icon-number">4</h2>
                        </div>
                        <div className="icon-container">
                            <img src={share} alt="" className="icon-details" />
                            <h2 className="icon-number">211</h2>
                        </div>
                    </div>

                    <div className="show-comments">
                        <h2 className="show-comments-header">Comments</h2>
                    </div>

                    <div className="show-comments-input">
                        <img src={userprofile} alt="" className="current-user-img" />

                        <div className="kenza">
                            <form onSubmit={createComment}>
                            <button><img src={send} alt="" className="comments-send" /></button>
                            <label>
                                <input type="hidden" name="post_id" value={createInput.post_id} />
                            </label>
                            <input type="text" id="" className="add-comments" placeholder="Add a public comment" name='reply_content' onChange={handleInput} value={createInput.reply_content} />
                        </form>
                    </div>


                </div>
                {comment.map((item) => {
                    return (
                        <div className="show-comments-container" key={item.id} >
                            <div className="show-user-img">
                                <img src={userprofile} alt="" className="comment-user-img" />
                            </div>
                            <div className="show-user-name">
                                <h2 className="user-name-comment">{item.user.username}</h2>
                                <h2 className="comment-time">{moment(item.created_at).fromNow()}</h2>
                            </div>
                            <div className="show-comment-container">
                                <div className="show-comment-content">
                                    <h2 className="comment-content">{item.reply_content}</h2>
                                </div>
                                <div className="comment-details">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="heart-svg" width="23.732" height="22.819" viewBox="0 0 23.732 22.819">
                                        <path id="Icon_ionic-ios-heart" data-name="Icon ionic-ios-heart" d="M20.718,3.938h-.057A6.491,6.491,0,0,0,15.241,6.9a6.491,6.491,0,0,0-5.42-2.967H9.764a6.45,6.45,0,0,0-6.389,6.447A13.887,13.887,0,0,0,6.1,17.954a47.788,47.788,0,0,0,9.139,8.8,47.788,47.788,0,0,0,9.139-8.8,13.887,13.887,0,0,0,2.727-7.57A6.45,6.45,0,0,0,20.718,3.938Z" transform="translate(-3.375 -3.938)" fill="#ef820D" />
                                    </svg>
                                    <h2 className="number-likes">64 Likes</h2>
                                    <h2 className="comment-reply">Reply</h2>
                                </div>
                            </div>
                            <div className="comment-type">
                                <h2 className="type-comment">Basic</h2>
                            </div>
                            <button type='button' id="create" onClick={(e) => deleteComment(e, item.id)} className='btn btn-danger btn-sm'>Delete</button>

                        </div>
                    )
                })}







            </div>

            <div className="show-right">
                <div className="show-right-bar"></div>
            </div>
        </section>
        </>
    )




}




export default ShowAdmin;