import axios from 'axios';
import moment from 'moment';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import pawn from "../../media/SVGs/black-pawn.svg"


class Lastpost extends Component {

    state = {
        postes: [],
        loading: true,
    }


    async componentDidMount() {

        const tes = await axios.get('http://127.0.0.1:8000/api/community/last-posts');
        if (tes.data.status === 200) {
            this.setState({
                postes: tes.data.postes,
                loading: false,
            });
        }
    }


    render() {
        let users_HTMLTable = "";
        if (this.state.loading) {
            users_HTMLTable = <tr><td colSpan='7'><h2>Loading...</h2></td></tr>
        }
        else {
            users_HTMLTable =
                this.state.postes.map((item) => {
                    return (

                        <div class="post1" key={item.id}>
                        <h1>{item.post_title}</h1>

                        </div>

                    );
                });
        }
      
        return (
            <>
                
               <div>{users_HTMLTable}</div>
                    
               


            </>

        )
    }
}


export default Lastpost;

