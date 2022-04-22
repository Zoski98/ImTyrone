import React from "react";
import { Link } from "react-router-dom";
import community from "../../media/community.png"
import earth from "../../media/earth.png"
import feed from "../../media/share.png"
import users from "../../media/add-group.png"


function AdminHome() {

    
   
    return (
        <>
            <section className="admin-home">
            <ul className="cards">
                <li className="routes">
                    <Link to='/world'>
                        <img src={earth} alt="" className="icons" />
                    </Link>
                </li>
                <li className="routes">
                    <Link to="/community">
                        <img src={community} alt="" className="icons" />
                    </Link>
                </li>
                <li className="routes">
                    <Link to="/feed">
                        <img src={feed} alt="" className="icons" />
                    </Link>
                </li>
                <li className="routes">
                    <Link to="/useres">
                        <img src={users} className="icons" alt="" />
                    </Link>
                </li>
            </ul></section>


        </>
    )
}


export default AdminHome;