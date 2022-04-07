import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import user from '../../media/Illustrations/user-profile.png'
import media from "../../media/ZoubairIcons/CreatePost/PNG/files.png"


function CreateF() {
    const history = useHistory();
    const [postInput, setPost] = useState({
        post_title: "",
        post_content: "",
        file: "",
        section: "3",
    });

    const handleInput = (e) => {
        setPost({ ...postInput, [e.target.name]: e.target.value });
    }

    const postSubmit = async (e) => {
        e.preventDefault();

        const data = {
            post_title: postInput.post_title,
            post_content: postInput.post_content,
            section: postInput.section,
            file: postInput.file,
        }
        await axios.post('http://127.0.0.1:8000/api/admin/feed/create/post', data).then(res => {

            if (res.data.status === 200) {

                swal({
                    title: "Well Done!",
                    text: "You created the post",
                    icon: "success",
                    button: "Continue !",
                });
                history.push('/feed');

            }

        });

    }

    return (
        <>
           <section className="create-post-admin">
            <div className='create-container'>
                <div className="create-post">
                    <div className="create-header">
                        <h2 className='create-name'>Create Post</h2>
                    </div>
                    <div className="create-line"></div>
                    <div className="user-create">
                        <img src={user} alt="" className="user-avatar" />
                        <h2 className="user-create-name">ADMIN</h2>

                        <div className="addfile-container"><img src={media} alt="" className="add-file" /><input type="file" value={postInput.file} onChange={handleInput} size={60} name="file" id="file" /><label for="file"></label></div>
                    
                    </div>
                    <form className='create-form' onSubmit={postSubmit}>
                        <label className='label-title'>
                            <input type="text" name='post_title' onChange={handleInput} className="input-title" value={postInput.post_title} placeholder='Inser your title here...' />
                        </label>
                        <label className='label-content'>
                            <input type="text" name='post_content' onChange={handleInput} className="input-content" value={postInput.post_content} placeholder="What's on your mind, Lord Admin ? " />
                        </label>
                        <button type="submit" className='create-button'>Post</button>
                    </form>
                </div>
            </div>

            </section>
        </>
    )
}
export default CreateF;