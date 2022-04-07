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
        file: "",
        error_list: [],
    });

    const handleInput = (e) => {
        setRegister({ ...registerInput, [e.target.name]: e.target.value });
    }


    const registerSubmit = async (e) => {
        e.preventDefault();

        const data = {
            username: registerInput.username,
            email: registerInput.email,
            password: registerInput.password,
            confirmed: registerInput.confirmed,
            file: registerInput.file,
        }
        await axios.post('http://127.0.0.1:8000/api/register', data).then(res => {

            if (res.data.status === 200) {
                swal({
                    title: "Well Done!",
                    text: "You registered a new user !",
                    icon: "success",
                    button: "Continue !",
                });
                history.push('/users');
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
                                <input type="file" name='file' onChange={handleInput} value={registerInput.file} />
                                <input type="submit" value="Sign up" />

                            </form>
                        </div>
                    </div></div>

            </section>
        </>
    )

}

export default CreateU;