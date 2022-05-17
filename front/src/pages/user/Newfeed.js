import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Sidebars from "../../components/NewSidebar";
import like from '../../media/ZoubairIcons/Feed/PNG/heart.png'
import comments from '../../media/ZoubairIcons/Feed/PNG/comments.png'
import useres from '../../media/Illustrations/user-profile.png'
import search from '../../media/ZoubairIcons/Feed/PNG/search.png'
import upload from '../../media/ZoubairIcons/Feed/PNG/Group-35113.png'
import close from '../../media/ZoubairIcons/CommentPage/PNG/return.png'
import users from '../../media/Illustrations/user-profile.png'
import media from "../../media/ZoubairIcons/CreatePost/PNG/files.png"
import swal from "sweetalert";


function Feed() {

    const createOn = () => {
        let container = document.getElementById('create-post');
        let serious = document.getElementById('serious-parts');
        let button = document.getElementById('side-active');
        container.classList.toggle('create-post-active');
        serious.classList.toggle('serious-active');
        button.classList.toggle('side-active');
    }


    const createOff = () => {
        let container = document.getElementById('create-post');
        let serious = document.getElementById('serious-parts');
        let button = document.getElementById('side-active');
        container.classList.remove('create-post-active');
        serious.classList.remove('serious-active');
        button.classList.remove('side-active');
    }

    const handleInput = (e) => {
        setCreate({ ...createInput, [e.target.name]: e.target.value });
    }

    const [createInput, setCreate] = useState({
        post_title: "",
        post_content: "",
        file: "",
    });
    const [state, setState] = useState([])

    const history = useHistory();
    const [user, setUser] = useState([])

    const [post, setPost] = useState([])
    const [stories, setStories] = useState([])
    const [storiesr, setStoriesr] = useState([])

    const [suggested, setSuggested] = useState([])


    useEffect(() => {
        async function test() {
            const res = await axios.get('http://127.0.0.1:8000/api/feed/user/posts');
            if (res.data.status === 200) {
                setState(res.data.posts)
            }
        }
        test()
    }, [])


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
        async function stories() {
            const res = await axios.get('http://127.0.0.1:8000/api/user/stories');
            if (res.data.status === 200) {
                setStories(res.data.users)
            }
        }
        stories()
    }, [])

    
    useEffect(() => {
        async function storiesr() {
            const res = await axios.get('http://127.0.0.1:8000/api/user/stories/responsive');
            if (res.data.status === 200) {
                setStoriesr(res.data.users)
            }
        }
        storiesr()
    }, [])

    useEffect(() => {
        async function suggested() {
            const res = await axios.get('http://127.0.0.1:8000/api/user/suggested');
            if (res.data.status === 200) {
                setSuggested(res.data.users)
            }
        }
        suggested()
    }, [])

    const [imagedata, setImagedata] = useState("");

    const handleImage = (file) => {
        setImagedata(file[0]);
    };

    const createPost = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("image", imagedata);
        data.append("post_title", createInput.post_title);
        data.append("post_content", createInput.post_content);


        await axios.post('http://127.0.0.1:8000/api/user/feed/create/post', data).then(res => {

            if (res.data.status === 200) {

                setCreate({
                    post_title: '',
                    post_content: '',
                    file: '',
                });
                swal({
                    title: "Well Done!",
                    text: "You created a post",
                    icon: "success",
                    button: "Continue",
                });
                window.location.reload()

            }
        });

    }




    return (

        <>
            <Sidebars />
            <div id="create-post" className="create-post-toggle">
                <div className='create-container'>
                    <div className="create-post">
                        <div className="create-header">
                            <h2 className='create-name'>Create Post</h2>
                            <div className="quit-container" onClick={createOff}>
                                <img src={close} alt="" className="create-quit" />
                            </div>
                        </div>
                        <div className="create-line"></div>
                        <div className="user-create">
                            <img src={`http://127.0.0.1:8000/${user.file}`} alt="" className="user-avatar" />
                            <h2 className="user-create-name">{user.username}</h2>

                            <div className="addfile-container"><img src={media} alt="" className="add-file" /><input type="file" size={60} name="image" id="file" onChange={e => handleImage(e.target.files)} /><label for="file"></label></div>

                        </div>
                        <form className='create-form' onSubmit={createPost}>
                            <label className='label-title'>
                                <input type="text" name='post_title' className="input-title" placeholder='Post Heading here !!' onChange={handleInput} value={createInput.post_title} />
                            </label>
                            <label className='label-content'>
                                <input type="text" name='post_content' className="input-content" placeholder="What's on your mind, Aya Doba ? " onChange={handleInput} value={createInput.post_content} />
                            </label>
                            <button type="submit" className='create-button'>Post</button>
                        </form>
                    </div>
                </div>

            </div>
            <section className="feed-containers" id="serious-parts"> <div className="feed-container" >
          
                <div className="feed-content">
                    <div className="feed-searchs">
                        <div class="search">
                            <img src={search} alt="" className="searchs" />
                            <input type="text" name="search" id="search" placeholder="Search" />
                        </div>
                        <div class="upload-icons">
                            <button className="upload-post" onClick={createOn}><img src={upload} alt="" className="icon-top" /></button>
                        </div>
                    </div>
                    <div className="feed-storyr">
                    {storiesr.map((user) => {
                            return (
                                <div className="user-story" key={user.id}>
                                    <img src={`http://127.0.0.1:8000/${user.file}`} alt="" />
                                    <h2>{user.username}</h2>
                                </div>
                            )
                        })}

                    </div>
                    <div className="feed-story">
                        {stories.map((user) => {
                            return (
                                <div className="user-story" key={user.id}>
                                    <img src={`http://127.0.0.1:8000/${user.file}`} alt="" />
                                    <h2>{user.username}</h2>
                                </div>
                            )
                        })}

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

                        {state.map((post) => {
                            return (
                                <div className="feed-post" key={post.id}>
                                    <Link to={`/show/post/${post.id}`} className="linkto" ><h2 class="feed-post-title">{post.post_title}</h2></Link>

                                    <div className="feed-image">  <img src={`http://127.0.0.1:8000/${post.image}`} alt="" className=""/>
                                    </div>

                                    <div className="feed-post-user">
                                        <img src={`http://127.0.0.1:8000/${post.user.file}`} alt="" className="user-feed-profile" />
                                        <h2 className="users-name-feed">{post.user.username}</h2>
                                        <img src={like} alt="" className="feed-likes" />
                                        <h2>16</h2>
                                        <img src={comments} alt="" className="feed-likes" />
                                        <h2>24</h2>
                                    </div>

                                </div>
                            )
                        })}






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
                        {suggested.map((item) => {
                            return (
                                <div className="user-suggested" key={item.id}>
                                    <img src={`http://127.0.0.1:8000/${item.file}`} alt="" className="user-feed-profile" />
                                    <div className="username-email">
                                        <h2>{item.username}</h2>
                                        <h3>{item.email}</h3>
                                    </div>
                                    <h2 className="suggest-but">Follow</h2>
                                </div>
                            )
                        })}


                    </div>
                    <div className="feed-right-bar"></div>


                </div>
            </div></section>

        </>

    )

}

export default Feed;