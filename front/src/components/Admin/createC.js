import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

function CreateC() {
    const history = useHistory();
    const [postInput, setPost] = useState({
        post_title: "",
        post_content: "",
        file: "",
        section: "1",
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
        await axios.post('http://127.0.0.1:8000/api/community/create/post', data).then(res => {

            if (res.data.status === 200) {

                swal({
                    title: "Congrats!",
                    text: "You created the post",
                    icon: "success",
                    button: "Aww yiss!",
                });
                history.push('/community');

            }

        });

    }

    return (
        <>

            <form onSubmit={postSubmit}>
                <label>
                    <p className="label-txt">Post Title</p>
                    <input type="text" name='post_title' onChange={handleInput} value={postInput.post_title} className="input" />
                    {/* <span className="text-danger">{this.state.error_list.username}</span> */}
                    <div className="line-box">
                        <div className="line"></div>
                    </div>
                </label>
                <label>
                    <p className="label-txt">Post Content</p>
                    <input type="text" name='post_content' onChange={handleInput} value={postInput.post_content} className="input" />
                    {/* <span className="text-danger">{this.state.error_list.email}</span> */}
                    <div className="line-box">
                        <div className="line"></div>
                    </div>
                </label>

                <label>
                    <div class="file-field">
                        <div class="btn btn-primary btn-sm float-left">
                            <span>Choose file</span>
                            <input type="file" name="file" onChange={handleInput} value={postInput.file} />

                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" placeholder="Upload your file" />
                        </div>
                    </div>
                </label>
                <button type="submit">Create</button>
            </form>
        </>
    )
}
export default CreateC;