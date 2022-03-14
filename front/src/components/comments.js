import axios from "axios";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";

function Comment() {
    const id = useParams();
    const history = useHistory();

    // const post_id = props.match.params.id;
    const [registerInput, setRegister] = useState({

        reply_content: "",
        post_id: "",
        file: "",
    });

    const handleInput = (e) => {
        setRegister({ ...registerInput, [e.target.name]: e.target.value });
    }

    const registerSubmit = async (e) => {
        e.preventDefault();

        const data = {
            reply_content: registerInput.reply_content,
            post_id: registerInput.post_id,


        }

        await axios.post(`http://127.0.0.1:8000/api/comment/${id.id}`, data).then(res => {

            if (res.data.status === 200) {

                swal({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                    button: "Aww yiss!",
                });
                if (res.data.type.type === 1)
                history.push(`/show-post/${id.id}`);
                else
                history.push(`user/show/post/${id.id}`);



            }


        });

    }



    return (
        <>
            <form className="comment-form" onSubmit={registerSubmit}>
                <label>
                    <p className="label-txt">Write your comment sir.</p>
                    <input type="text" name='reply_content' onChange={handleInput} value={registerInput.reply_content} className="input" />
                    {/* <span className="text-danger">{this.state.error_list.username}</span> */}
                    <div className="line-box">
                        <div className="line"></div>
                    </div>
                </label>
                <label>
                    <input type="hidden" name="post_id" value={registerInput.post_id} />
                </label>
                <label>
                    <div class="mb-3">
                        <label for="formFile" class="label-txt">Want to add a file ?</label>
                        <input class="form-control" name="file" type="file" id="formFile" onChange={handleInput} value={registerInput.file} />
                    </div>
                </label>


                <button type="button" class="btn btn-primary">Add Comment</button>
            </form>
        </>
    )
}
export default Comment;