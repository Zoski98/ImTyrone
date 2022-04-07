import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import world from '../media/ZoubairIcons/Sidebar/White/PNG/Group-35170.png'
import community from '../media/ZoubairIcons/Sidebar/White/PNG/Group-35171.png'
import feed from '../media/ZoubairIcons/Sidebar/White/PNG/Group-35170.png'
import chat from '../media/ZoubairIcons/Sidebar/White/PNG/Group-35118.png'
import logout from '../media/shutdown.png';

import profile from '../media/ZoubairIcons/Sidebar/White/PNG/Group-35119.png'


const Sidebars = () => {
    // container.classList.toggle('create-post-active');

    // button.classList.remove('side-active');
    const light = () => {
        let zoubair = document.getElementById('zoubair');
        let se = document.querySelector('.serious-post-content');
        zoubair.classList.toggle('zoubair');
        se.classList.add('zoubair');


    }

    const dark = () => {
        let zoubair = document.getElementById('zoubair');
        zoubair.classList.remove('zoubair');


    }

    const history = useHistory();
    const logoutSubmit = (e) => {
        e.preventDefault();
        localStorage.removeItem('auth_name');
        localStorage.removeItem('auth_token');
        swal("You logged out !", "See you soon...", "success");
        history.push("/getin")
    }


    return (

        <>

            <nav class="sidebar" id="side-active" >
                <div class="side-logo">
                    <h2>LOGO</h2>
                </div>
                <div class="side-icons">
                    <Link to='/users/world' className="linkto" >
                        <div class="side-icon">
                            <img src={world} alt="x" className='side-img' />

                            <h2 class="side-txt">WORLD</h2>
                        </div></Link>
                    <Link to='/users/community' className="linkto" >

                        <div class="side-icon">
                            <img src={community} alt="" className='side-img' />

                            <h2 class="side-txt">COMMUNITY</h2>
                        </div></Link>
                    <Link to='/users/feed' className="linkto" >

                        <div class="side-icon">
                            <img src={feed} alt="" className='side-img' />

                            <h2 class="side-txt">FEED</h2>
                        </div></Link>
                    <Link to='/users/chat' className="linkto" >

                        <div class="side-icon">
                            <img src={chat} alt="" className='side-img' />

                            <h2 class="side-txt">CHAT</h2>
                        </div></Link>
                    <Link to='/users/profile' className="linkto" >

                        <div class="side-icon">
                            <img src={profile} alt="" className='side-img' />

                            <h2 class="side-txt">PROFILE</h2>
                        </div>
                    </Link>

                </div>

                <div class="side-off">
                    <a href='#' onClick={logoutSubmit} >
                        <img src={logout} alt="yo" className='logout-ico' />
                        <span className="link-text">Log Out</span>
                    </a>
                </div>
                <div className="mode">
                    <div className="dark-mode" onClick={dark}></div>
                    <div className="light-mode" onClick={light}></div>
                </div>

            </nav>

        </>
    )
}

export default Sidebars;