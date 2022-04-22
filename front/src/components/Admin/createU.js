import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import '../../App.css'

function CreateU() {

    const history = useHistory();
    const [registerInput, setRegister] = useState({
        username: "",
        email: "",
        password: "",
        confirmed: "",
        error_list: [],
    });

    const handleInput = (e) => {
        setRegister({ ...registerInput, [e.target.name]: e.target.value });
    }

    const [imagedata, setImagedata] = useState("");

    const handleImage = (file) => {
        setImagedata(file[0]);
    };


    const registerSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("image", imagedata);
        data.append("username", registerInput.username);
        data.append("email", registerInput.email);
        data.append("password", registerInput.password);
        data.append("confirmed", registerInput.confirmed);
        
        await axios.post('http://127.0.0.1:8000/api/register', data).then(res => {

            if (res.data.status === 200) {

                localStorage.setItem('auth_name', res.data.username);
                localStorage.setItem('auth_token', res.data.token);
                swal({
                    title: "Welcome!",
                    text: "You are now registered!",
                    icon: "success",
                    button: "Continue...",
                });
                history.push('/useres');
                setRegister({
                    username: '',
                    email: '',
                    password: '',
                    confirmed: '',
                    file: '',
                });
            }
            else {
                setRegister({ ...registerInput, error_list: res.data.validation_errors });
            }

        });

    }
    return (
        <>
            <section className='section' id="section">
                <div className="containers">
                    <div class="user signupBx">
                        <div class="formBx">
                            <form onSubmit={registerSubmit}>
                                <h2>Add an user</h2>
                                <input type="text" placeholder="Username" name='username' onChange={handleInput} value={registerInput.username} />
                                <span className="text-danger">{registerInput.error_list.username}</span>
                                <input type="text" placeholder="Email Adress" name='email' onChange={handleInput} value={registerInput.email} />
                                <span className="text-danger">{registerInput.error_list.email}</span>
                                <input type="password" placeholder="Create Password" name='password' onChange={handleInput} value={registerInput.password} />
                                <span className="text-danger">{registerInput.error_list.password}</span>
                                <input type="password" placeholder="Confirm Password" name='confirmed' onChange={handleInput} value={registerInput.confirmed} />
                                <span className="text-danger">{registerInput.error_list.confirmed}</span>
                                <input type="file" name='image' onChange={e => handleImage(e.target.files)} />
                                <input type="submit" value="Sign up" />

                            </form>
                        </div>
                    </div></div>

            </section>
        </>
    )

}

export default CreateU;