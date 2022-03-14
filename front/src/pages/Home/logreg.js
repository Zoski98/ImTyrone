import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
import { useState } from "react";
import map1 from "../../media/map3.jpg"
import com from "../../media/com10.png"


function Logreg() {
    const history = useHistory();
    const [registerInput, setRegister] = useState({
        username: "",
        email: "",
        password: "",
        confirmed: "",
        file: "",
        error_list:[],
    });

    const toggleForm = () => {
        let container = document.getElementById('container');
        let section = document.querySelector('section');
        container.classList.toggle('active');
        section.classList.toggle('active');
    }


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

                localStorage.setItem('auth_name', res.data.username);
                localStorage.setItem('auth_token', res.data.token);
                swal({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                    button: "Aww yiss!",
                });
                history.push('/section');
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


    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
        
    });

    const handleInputs = (e) => {
        setLogin({ ...loginInput, [e.target.name]: e.target.value });
    }


    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/login`, data).then(res => {

                if (res.data.status === 200) {
                    localStorage.setItem('auth_name', res.data.username);
                    localStorage.setItem('auth_token', res.data.token);
                    swal("Success", res.data.message, "success");
                    if (res.data.type === '1') {
                        history.push('/admin');

                    }
                    else {
                        history.push('/section');
                    }

                }
                else if (res.data.status === 401) {
                    swal("Warning", res.data.message, "warning");

                }
                else {
                    setLogin({ ...loginInput, error_list: res.data.validation_errors });
                }
            });

        });

    }

    return (
        <>

            <section className='section'>
                <div class="container" id='container'>
                    <div class="user signinBx">
                        <div class="imgBx"><img src={com} /></div>
                        <div class="formBx">
                            <form onSubmit={loginSubmit} className='formes'>
                                <h2>Sign In</h2>
                                <input type="text" placeholder="Your Email" name='email' onChange={handleInputs} value={loginInput.email} />
                                <span className="text-danger">{loginInput.error_list.email}</span>
                                <input type="password" placeholder="Password" name='password' onChange={handleInputs} value={loginInput.password} />
                                <span className="text-danger">{loginInput.error_list.password}</span>
                                <input type="submit" value="Login" />
                                <p class="signup">Don't have an account? <a href="#" onClick={toggleForm}>Sign up.</a></p>
                            </form>
                        </div>
                    </div>

                    <div class="user signupBx">
                        <div class="imgBx"><img src={map1} /></div>
                        <div class="formBx">
                            <form onSubmit={registerSubmit}>
                                <h2>Create an account</h2>
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
                                <p class="signup">Already have an account? <a href="#" onClick={toggleForm}>Sign in.</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}


export default Logreg;