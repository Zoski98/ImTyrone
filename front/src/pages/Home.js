import React from 'react';
import '../styles/homepage.css';
import Earth from '../media/earth2.png'
import email from '../media/mail.png'
import fax from '../media/fax-2.png'
import phone from '../media/telephone-2.png'
import place from '../media/placeholder-2.png'
import Users from '../media/people.png'
import pawn from '../media/SVGs/black-pawn.svg'
import horse from '../media/SVGs/black-knight.svg'
import queen from '../media/SVGs/black-queen.svg'
import facebook from '../media/facebook.svg'
import youtube from '../media/youtube.svg'
import twitter from '../media/twitter.svg'
import instagram from '../media/instagram.svg'


const Home = () => {
    return (
        <>
        
            <section className="top">
                <div className='top-left'>
                    {/* <img src={logo} className='logo' alt="logo" /> */}
                    <h1 className='title'>Join our community</h1>
                    <h2 className='top-text'>A new global community where each one of us is part of something big.</h2>
                </div>
                <div className='top-right'>
                    <img src="" className='earth' alt="background-image" /><img />
                </div>
            </section>


            <section className="malcolm">
                <div className="users">
                    <img src={queen} alt="" ></img>
                    <h2 className='users-name'>Founder Father</h2>
                    <h2 className='users-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat praesentium quae consequatur tenetur, alias ratione repudiandae nam, blanditiis quod facere libero sapiente a omnis maxime pariatur id illum voluptatem.
                        Assumenda alias magni quas laborum esse sequi est aperiam, corrupti commodi repellendus consectetur incidunt vel cupiditate, ex necessitatibus? Nihil iste inventore et perferendis quas laborum nobis iusto illo nesciunt eaque.</h2>
                </div>
                <div className="users">
                    <img src={horse} alt="" ></img>
                    <h2 className='users-name'>Founder Father</h2>
                    <h2 className='users-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat praesentium quae consequatur tenetur, alias ratione repudiandae nam, blanditiis quod facere libero sapiente a omnis maxime pariatur id illum voluptatem.
                        Assumenda alias magni quas laborum esse sequi est aperiam, corrupti commodi repellendus consectetur incidunt vel cupiditate, ex necessitatibus? Nihil iste inventore et perferendis quas laborum nobis iusto illo nesciunt eaque.</h2>
                </div>
                <div className="users">
                    <img src={pawn} alt="" ></img>
                    <h2 className='users-name'>Founder Father</h2>
                    <h2 className='users-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat praesentium quae consequatur tenetur, alias ratione repudiandae nam, blanditiis quod facere libero sapiente a omnis maxime pariatur id illum voluptatem.
                        Assumenda alias magni quas laborum esse sequi est aperiam, corrupti commodi repellendus consectetur incidunt vel cupiditate, ex necessitatibus? Nihil iste inventore et perferendis quas laborum nobis iusto illo nesciunt eaque.</h2>
                </div>
            </section>

            <section className="bottom">
                <div className="bottom-left"><div className="image"><img src={Earth} className='x' alt="" /></div><div className="name"><h2 className='orange'>WORLD</h2></div><div className="details"><h2 className='oranges'>Each section serves to a purpose where everyone has to do something peculiar or shit.</h2></div></div>
                <div className="bottom-right"><div className="image"><img src={Users} className='x' id='x' alt="" /></div><div className="name"><h2 className='black'>COMMUNITY</h2></div><div className="details"><h2 className='blacks'>Each section serves to a purpose where everyone has to do something peculiar or shit.</h2></div></div>
            </section>

            <section className="minifut">
                <div className="info"><h2>Got new ideas ? Give us your email, and we will contact as soon as posible</h2></div>
                <div className="info"><input type="email" name="" id="input"/><a href="#" className='links'>SEND</a></div>
            </section>
            {/*             
            <section className="middle">
                <div className="link">
                    <a href="#" className='links'>Register</a>
                </div>
                <div className="link">
                    <a href="#" className="links">Login</a>
                </div>
            </section> */}


            <footer>
                <div className="fot">
                    <h2 className="fot-title">SOCIAL MEDIA</h2>
                    <div className="fot-content">
                        <div className='media'>
                            <img src={facebook} className='ico-media'  alt="" /><h2 className="content-fot">Facebook</h2>
                        </div>
                        <div className='media'>
                            <img src={instagram} className='ico-media'  alt="" /><h2 className="content-fot">Instagram</h2>
                        </div>
                        <div className='media'>
                            <img src={twitter} className='ico-media' alt="" /><h2 className="content-fot">Tweeter</h2>
                        </div>
                        <div className='media'>
                            <img src={youtube} className='ico-media'  alt="" /><h2 className="content-fot">Youtube</h2>
                        </div>
                    </div>
                </div>
                <div className="fot">
                    <h2 className="fot-title">ABOUT</h2>
                    <div className="fot-content">
                        <h2 className="content-fot">Who we are</h2>
                        <h2 className="content-fot">Our Team</h2>
                        <h2 className="content-fot">FaQ</h2>
                    </div>
                </div>
                <div className="fot">
                    <h2 className="fot-title">LEGAL</h2>
                    <div className="fot-content">
                        <h2 className="content-fot">Terms & Conditions</h2>
                        <h2 className="content-fot">Privacy Policy</h2>
                        <h2 className="content-fot">Terms Of Use</h2>
                    </div>
                </div>
                <div className="fot">
                    <h2 className="fot-title">CONTACT</h2>
                    <div className="fot-content">
                        <div className='media'>
                            <img src={place} className='ico-media'  alt="" /><h2 className="content-fot">Rabat, 10000, Morocco</h2>
                        </div>
                        <div className='media'>
                            <img src={email} className='ico-media'  alt="" /><h2 className="content-fot">Contact@email.com</h2>
                        </div>
                        <div className='media'>
                            <img src={phone} className='ico-media' alt="" /><h2 className="content-fot">+(212) 648 87 71 55</h2>
                        </div>
                        <div className='media'>
                            <img src={fax} className='ico-media'  alt="" /><h2 className="content-fot">+(212) 648 87 71 65</h2>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}



export default Home;