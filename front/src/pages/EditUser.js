import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";




class editUser extends Component {



    state = {
        username: '',
        email: '',
        password: '',
        file: '',
        type: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount() {
        const user_id = this.props.match.params.id;
        const res = await axios.get(`http://127.0.0.1:8000/api/edit-user/${user_id}`);
        if (res.data.status === 200) {
            this.setState({
                username: res.data.users.username,
                email: res.data.users.email,
                type: res.data.users.type,
            });
        }
    }

    updateUser = async (e) => {
        e.preventDefault();
        document.getElementById('update').disabled = true;
        document.getElementById('update').innerText = "Updating";
        const user_id = this.props.match.params.id;
        const res = await axios.put(`http://127.0.0.1:8000/api/update-user/${user_id}`, this.state);
        if (res.data.status === 200) {
            document.getElementById('update').disabled = false;
            document.getElementById('update').innerText = "Update ";
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                button: "Aww yiss!",
            });
            this.props.history.push("/users");

          
            
        }
       
       
    }
    







    render() {
        return (

            <form onSubmit={this.updateUser}>
                <label>
                    <p class="label-txt">USERNAME</p>
                    <input type="text" name='username' onChange={this.handleInput} value={this.state.username} class="input" />
                    <div class="line-box">
                        <div class="line"></div>
                    </div>
                </label>
                <label>
                    <p class="label-txt">EMAIL</p>
                    <input type="email" name='email' onChange={this.handleInput} value={this.state.email} class="input" />
                    <div class="line-box">
                        <div class="line"></div>
                    </div>
                </label>
                <label>
                    <p class="label-txt">User Type</p>
                    <input type="text" name='type' onChange={this.handleInput} value={this.state.type} class="input" />
                    <div class="line-box">
                        <div class="line"></div>
                    </div>
                </label>

                <button type="submit" id='update'>Update</button>
            </form>
        )
    }
}

export default editUser;