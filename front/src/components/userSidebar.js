import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import bulb from '../media/bulb.png';
import logout from '../media/shutdown.png';


const Usersidebar = () => {

    const history = useHistory();
    const logoutSubmit = (e) => {
        e.preventDefault();
        localStorage.removeItem('auth_name');
        localStorage.removeItem('auth_token');
        swal("Succes", "hey", "success");
        history.push("/getin")
    }


    return (

        <>
            <nav className="navbar">
                <ul className="navbar-nav">

                    <li className="logo">
                        <a href="#" className="nav-link">
                            <img src={bulb} alt="yo" className='side-icon' />
                            <span className="link-text">WEBSITE</span>

                        </a>

                    </li>

                    <li className="nav-item">
                        <Link className='link' to="/user/world">
                            <a href="#" className="nav-link">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" className="svg-inline--fa fa-globe fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>

                                <span className="link-text">World</span>
                            </a>
                        </Link>
                    </li>

                    <li className="nav-item"><Link className='link' to="/user/community">
                        <a href="#" className="nav-link">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share-alt" className="svg-inline--fa fa-share-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"></path></svg>

                            <span className="link-text">Community</span>
                        </a></Link>
                    </li>

                    <li className="nav-item"><Link className='link' to="/user/feed">
                        <a href="#" className="nav-link">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hashtag" className="svg-inline--fa fa-hashtag fa-w-1'" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M440.667 182.109l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l14.623-81.891C377.123 38.754 371.468 32 363.997 32h-40.632a12 12 0 0 0-11.813 9.891L296.175 128H197.54l14.623-81.891C213.477 38.754 207.822 32 200.35 32h-40.632a12 12 0 0 0-11.813 9.891L132.528 128H53.432a12 12 0 0 0-11.813 9.891l-7.143 40C33.163 185.246 38.818 192 46.289 192h74.81L98.242 320H19.146a12 12 0 0 0-11.813 9.891l-7.143 40C-1.123 377.246 4.532 384 12.003 384h74.81L72.19 465.891C70.877 473.246 76.532 480 84.003 480h40.632a12 12 0 0 0 11.813-9.891L151.826 384h98.634l-14.623 81.891C234.523 473.246 240.178 480 247.65 480h40.632a12 12 0 0 0 11.813-9.891L315.472 384h79.096a12 12 0 0 0 11.813-9.891l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l22.857-128h79.096a12 12 0 0 0 11.813-9.891zM261.889 320h-98.634l22.857-128h98.634l-22.857 128z"></path></svg>

                            <span className="link-text">Feed</span>
                        </a></Link>
                    </li>

                    <li className="nav-item">
                        <Link className='link' to="/user/profile">
                            <a href="#" className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='currentColor' d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z" /></svg>

                                <span className="link-text">Profile</span>
                            </a></Link>
                    </li>

                    <li className="nav-item">
                        <a href='#' onClick={logoutSubmit} className="nav-link">
                            <img src={logout} alt="yo" className='bot-icon' />
                            <span className="link-text">Log Out</span>
                        </a>


                    </li>
                </ul>
            </nav>



        </>

    )

}



export default Usersidebar;