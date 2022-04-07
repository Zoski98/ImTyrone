import React from "react";
import { Link } from "react-router-dom";
import Users from '../../media/Illustrations/World-bro.svg'
import Earth from '../../media/Illustrations/Teamwork.svg'





function UserHome() {
    return (
        <>
            <section className="bottoms">
                <div className="bottom-lefts"><div className="image"><img src={Earth} className='x' alt="" /></div><div className="details"><a href="users/community"><h2 className='orangeses'>Go to COMMUNITY</h2></a></div></div>
                <div className="bottom-rights"><div className="image"><img src={Users} className='x' id='x' alt="" /></div><div className="details"><a href="users/world"><h2 className='blackes'>Go to WORLD</h2></a></div></div>
            </section>


        </>
    )
}


export default UserHome;