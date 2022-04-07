import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import moment from 'moment';
import userprofile from '../../media/Illustrations/user-profile.png'
import comments from '../../media/ZoubairIcons/Feed/PNG/comments.png'
import saved from '../../media/ZoubairIcons/Feed/PNG/saved.png'
import share from '../../media/ZoubairIcons/Feed/PNG/share.png'
import search from '../../media/ZoubairIcons/Feed/PNG/search.png'
import notification from '../../media/ZoubairIcons/Feed/PNG/Group-35114.png'
import upload from '../../media/ZoubairIcons/Feed/PNG/Group-35113.png'
import dislike from '../../media/ZoubairIcons/Redditlikefeed/PNG/Group-35198.png'
import like from '../../media/ZoubairIcons/Redditlikefeed/PNG/Group-35197.png'
import usertype from '../../media/ZoubairIcons/HomePageIcons/Founder,premium,basic/PNG/Group-35179.png'
import close from '../../media/ZoubairIcons/CommentPage/PNG/return.png'
import users from '../../media/Illustrations/user-profile.png'
import media from "../../media/ZoubairIcons/CreatePost/PNG/files.png"
import Sidebars from "../../components/NewSidebar";
import swal from "sweetalert";



function NewCommunity() {
  const history = useHistory();
  const [state, setState] = useState([])
  const [post, setPost] = useState([])
  const [user, setUser] = useState([])
  const [createInput, setCreate] = useState({
    post_title: "",
    post_content: "",
    file: "",
  });

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


  useEffect(() => {
    async function test() {
      const res = await axios.get('http://127.0.0.1:8000/api/community/user/posts');
      if (res.data.status === 200) {
        setState(res.data.posts)
      }
    }
    test()
  }, [])

  useEffect(() => {
    async function testy() {
      const res = await axios.get('http://127.0.0.1:8000/api/community/last-posts');
      if (res.data.status === 200) {
        setPost(res.data.postes)
      }
    }
    testy()
  }, [])

  const handleInput = (e) => {
    setCreate({ ...createInput, [e.target.name]: e.target.value });
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

  const createPost = async (e) => {
    e.preventDefault();

    const data = {
      post_title: createInput.post_title,
      post_content: createInput.post_content,
      file: createInput.file,
    }
    await axios.post('http://127.0.0.1:8000/api/user/community/create/post', data).then(res => {

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
      history.push('users/community');
        
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
              <img src={users} alt="" className="user-avatar" />
              <h2 className="user-create-name">{user.username}</h2>

              <div className="addfile-container"><img src={media} alt="" className="add-file" /><input type="file" size={60} name="file" id="file" onChange={handleInput} value={createInput.file} /><label for="file"></label></div>

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
      <section id="serious-parts" class="serious-part">
        <div class="serious-top">
          <div class="search">
            <img src={search} alt="" className="searchs" />
            <input type="text" name="search" id="search" placeholder="Search" />
          </div>



          <div class="notification-icon">
            <img src={notification} alt="" className="icon-top" />
          </div>
          <div class="upload-icon">
            <button className="upload-post" onClick={createOn}><img src={upload} alt="" className="icon-top" /></button>


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
            {state.map((postes) => {
              return (
                <div class="serious-post-left" key={postes.id}>
                  <div class="serious-post-user">
                    <img src={userprofile} class="user-profile" alt="USER-PROFILE" />
                    <h2>{postes.user.username}</h2>
                  </div>
                  <div class="serious-post-content" id="1">
                    <div class="serious-post">
                    <Link to={`/show/post/${postes.id}`} className="linkto" ><h2 class="serious-post-title">{postes.post_title}</h2></Link>
                      <h2 class="serious-post-txt">{postes.post_content}</h2>
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
              )
            })}




          </div>
          <div class="serious-bot-right">
            <div class="serious-bot-right-bar"></div>
            <div class="serious-bot-right-posts">
              <div class="right-posts">
                <div class="right-posts-categories">
                  <h2 class="post-category">Latest Posts</h2>
                </div>
                <div class="right-posts-container">
                   {post.map((posts) => {
                    return ( 
                      <div class="right-post" key={posts.id}>
                        <div class="right-post-user">
                          {/* <img src="/Components/user-profile.png" class="users-profile" alt="USER-PROFILE" /> */}
                          <h2 className="username-last">{posts.user.username}</h2>
                        </div>
                        <div class="right-post-title">
                        <Link to={`/show/post/${posts.id}`}  className="linkto" ><h2 class="right-title">{posts.post_title}</h2></Link>
                        </div>
                        <div class="right-post-type">
                        <img src={usertype} alt="" className="type-png" />



                        </div>
                      </div>
                      )
                  })}


                </div>

              </div>
            </div>

          </div>
        </div>


      </section>


    </>


  )
}

export default NewCommunity;
