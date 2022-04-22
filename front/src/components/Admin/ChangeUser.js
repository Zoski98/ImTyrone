import React, { useEffect, useState } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory, useParams } from "react-router-dom";


function EditUsers() {
    const history = useHistory();
    const { id } = useParams();
    const user_id = id;
    

    const [changeInput, setChange] = useState({
        username: "",
        email: "",
        password: "",
        file: "",
        type: "",
    });

    const handleInput = (e) => {
        setChange({ ...changeInput, [e.target.name]: e.target.value });
    }
    const [imagedata, setImagedata] = useState("");

    const handleImage = (file) => {
        setImagedata(file[0]);
    };

    useEffect(() => {
        async function change() {
            const res = await axios.get(`http://127.0.0.1:8000/api/edit-user/${user_id}`);
            if (res.data.status === 200) {
                setChange({
                    username: res.data.users.username,
                    password: res.data.users.password,
                    email: res.data.users.email,
                    type: res.data.users.type,
                    file: res.data.users.file,
                });

            }
        }
        change()
    }, [])


    
        const Update = async (e) =>  {
            e.preventDefault();
            document.getElementById('update').disabled = true;
            document.getElementById('update').innerText = "Updating";
            const res = await axios.put(`http://127.0.0.1:8000/api/update-user/${user_id}`, changeInput, imagedata);
            if (res.data.status === 200) {
                document.getElementById('update').disabled = false;
                document.getElementById('update').innerText = "Update ";
                swal({
                    title: "Well Done!",
                    text: "You edited an User!",
                    icon: "success",
                    button: "Continue...",
                });
                history.push("/useres");



            }
        }
        




    return (
        <>
            <section className='section' id="section">
                <div className="containers">
                    <div class="user signupBx">
                        <div class="formBx">
                            <form onSubmit={Update}>
                                <h2>Edit user</h2>
                                <input type="text" placeholder="Username" name='username' onChange={handleInput} value={changeInput.username} />
                                <input type="text" placeholder="Email Adress" name='email' onChange={handleInput} value={changeInput.email} />
                                <input type="password" placeholder="Change Password" name='password' onChange={handleInput} value={changeInput.password} />
                                <input type="file" name='image' onChange={e => handleImage(e.target.files)} />
                                <input type="submit" id="update" value="Change it !" />

                            </form>
                        </div>
                    </div></div>

            </section>
        </>
    )

}

export default EditUsers;