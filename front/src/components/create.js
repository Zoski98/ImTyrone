import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

function Create(){
    const id = useParams();

    const history = useHistory();
    const [registerInput, setRegister] = useState({
        post_title: "",
        post_content: "",
        section: "1",
    });

    const handleInput = (e) => {
        setRegister({ ...registerInput, [e.target.name]: e.target.value });
    }

    const registerSubmit = async (e) => {
        e.preventDefault();

        const data = {
            post_title: registerInput.post_title,
            post_content: registerInput.post_content,
            section: registerInput.section,
        }
        await axios.post('http://127.0.0.1:8000/api/post', data).then(res => {

            if (res.data.status === 200) {
                
                swal({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                    button: "Aww yiss!",
                });
                history.push('/world');
               
            }

        });

    }

    return(
        <>
        <h1>HEY</h1>
        <form onSubmit={registerSubmit}>
            <label>
                <p className="label-txt">Post Title</p>
                <input type="text" name='post_title' onChange={handleInput} value={registerInput.post_title} className="input" />
                {/* <span className="text-danger">{this.state.error_list.username}</span> */}
                <div className="line-box">
                    <div className="line"></div>
                </div>
            </label>
            <label>
                <p className="label-txt">Post Content</p>
                <input type="text" name='post_content' onChange={handleInput} value={registerInput.post_content} className="input" />
                {/* <span className="text-danger">{this.state.error_list.email}</span> */}
                <div className="line-box">
                    <div className="line"></div>
                </div>
            </label>
           
            <label>
            </label>
            <button type="submit">Register</button>
        </form>
        </>
    )
}
export default Create;