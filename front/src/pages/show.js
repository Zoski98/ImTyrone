import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import Comment from '../components/comments';
import moment from 'moment';
import Sidebar from '../components/sidebar';

class Show extends Component {

    state = {
        posts: [],
        loading: true,
      
    }
    async componentDidMount() {
        const post_id = this.props.match.params.id;
        const res = await axios.get(`http://127.0.0.1:8000/api/show-post/${post_id}`);
        // const res = await axios.get('http://127.0.0.1:8000/api/posts');
        console.log(res);
        if (res.data.status === 200) {
            this.setState({
                posts: res.data.posts,
                post_title: res.data.posts.post_title,
                post_content: res.data.posts.post_content,
                loading: false,
            });
        }
    }

    deleteComment = async (e, id) => {
        const post_id = this.props.match.params.id;

        const deletedComment = e.currentTarget;
        deletedComment.innerText = "Deleting";
        const res = await axios.delete(`http://127.0.0.1:8000/api/delete-comment/${id}`);
        if (res.data.status === 200) {
            deletedComment.closest('div').remove();
            console.log(res.data.message);
        } swal({
            title: "Good job!",
            text: "You deleted the comment !",
            icon: "success",
            button: "Aww yiss!",
        });
        this.props.history.push(`/show-post/${post_id}`);
    }


    render() {


        let users_HTMLTable = "";
        if (this.state.loading) {
            users_HTMLTable = <tr><td colSpan='7'><h2>Loading...</h2></td></tr>
        }
        else {
            users_HTMLTable =
                this.state.posts.comment.map((item) => {
                    return (
                        <div className='comment-container' key={item.id}>
                            <div className='comment-username'>
                                <h2>{item.user.username}</h2>
                            </div>
                            <div className='comment-content'>
                                <h1>{item.reply_content}</h1>
                                <h2>{moment(item.created_at).fromNow()}</h2>
                            </div>

                            <div className='comment-delete'>
                                <button type='button' id="create" onClick={(e) => this.deleteComment(e, item.id)} className='btn btn-danger btn-sm'>Delete</button>
                            </div>



                        </div>
                    );
                });
        }

        return (
            <>
                <Sidebar />
                <section className="post-comments">
                    <div className='post'>
                        <p className="username-post">{this.state.username}</p>
                        <p className='post-title'><h1>{this.state.post_title}</h1></p>
                        <h1 className='title-post'>{this.state.post_content}</h1>
                    </div>
                    <div className='comments'>
                        {users_HTMLTable}
                    </div>
                    <div className='add-comment'><Comment /></div>
                </section>

            </>

        )
    }
}

export default Show;