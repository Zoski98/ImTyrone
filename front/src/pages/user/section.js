import React from "react";
import { Link } from "react-router-dom";
import earth from '../../media/earth.png'
import community from '../../media/media.png'





function UserHome() {
    return (
        <>
            <section className="sector">
                <div className="part1">
                    <Link to="/user/community">
                    <img src={earth} alt="" className="sections" /></Link>
                </div>
                <div className="part2">
                    <Link to="">
                    <img src={community} alt="" className="sections" />
                    </Link>

                </div>
            </section>


        </>
    )
}


export default UserHome;