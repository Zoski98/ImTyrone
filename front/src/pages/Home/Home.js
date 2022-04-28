import React from 'react';
import '../../styles/homepage.css';
import Earths from '../../media/Illustrations/Online-world.svg'
import email from '../../media/mail.png'
import fax from '../../media/fax-2.png'
import phone from '../../media/telephone-2.png'
import place from '../../media/placeholder-2.png'
import Users from '../../media/Illustrations/World-bro.svg'
import Earth from '../../media/Illustrations/Teamwork.svg'
import thinks from '../../media/Illustrations/Thinking.svg'
import pawn from '../../media/Icons/Founder.svg'
import horse from '../../media/Icons/Basic.svg'
import queen from '../../media/Icons/Premium.svg'
import logo from '../../media/ZoubairIcons/logo.png'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>

            <section className="top">
                <div className="nav">
                    <img src={logo} alt="" className='logo' />
                    <a href="/getin" className='nav-in'>Sign in here</a>
                </div>
                <div className="top-content">
                    <div className="top-left">
                        <h2 className='top-title'>Let's bring your global friends together here</h2>
                        <h2 className='top-text'>A new global community where each one
                            of us is part of something big.</h2>
                        <a href="/getin" className='nav-in'>Register here</a>
                    </div>
                    <div className="top-right">
                        <img src={Earths} alt="" className='connected-earth' />
                    </div>
                </div>

            </section>


            <section className="malcolm">
                <div className="users">
                    <img src={queen} alt="" ></img>
                    <h2 className='users-name'>Founder Father</h2>
                    <h2 className='users-description'>Every user who trusts this idea an put effort and dedication to it before the official launch, will be a Founder Father, with special priviligies and unique position on their group for a lifetime. Any kind of help or improvement will be recognised, and will be regarded by all users in the web.</h2>
                </div>
                <div className="users">
                    <img src={horse} alt="" ></img>
                    <h2 className='users-name'>Premium</h2>
                    <h2 className='users-description'>Our Premium users are the ones who will pay a monthly fee for our high-quality service.
                        With many advantages compared to the normal user and a special treatment for the duration of the subscription.
                        They will be recognized and differentiated throughout the web.</h2>
                </div>
                <div className="users">
                    <img src={pawn} alt="" ></img>
                    <h2 className='users-name'>Basic</h2>
                    <h2 className='users-description'>Our normal user will be the most basic. There will be no disadvantages regarding the functionality of the web, the only difference with respect to other types of users is the time and effort they will give to be recognized for their contributions to the web, either in the world or in the community.</h2>
                </div>
            </section>

            <section className="bottom">
                <div className="bottom-left"><div className="name"><h2 className='orange'>COMMUNITY</h2></div><div className="image"><img src={Earth} className='x' alt="" /></div><div className="details"><h2 className='oranges'>The community will be the part in which we deal with the personal problems of each individual and together will be able to find and provide an adequate solution according to the subject. <br /><br /> Personal problems will be dealt with, it means, we will make the ego work in this section of the web. <br /><br /> Any form of help will be welcome and it will be the user himself the responsible to conclude the topic. <br /><br /> We will all help each other as best as we can by following the rules established for the forum.</h2></div></div>
                <div className="bottom-right"><div className="name"><h2 className='black'>WORLD</h2></div><div className="image"><img src={Users} className='x' id='x' alt="" /></div><div className="details"><h2 className='blacks'>The world will be the part where we will deal with the global problems that are currently on the planet, and with the help of everyone, propose solutions to these. <br /> <br /> Whatever your skill, profession or knowledge will be welcome and grateful in our way to find an answer. <br /> <br /> Among the main problems that we will deal with as long as it takes until they are solved, we have The 5. These are Hunger, Wars, Health, Education and Supplies (Light and Water). <br /><br /> These are the big fish that are currently affecting the planet, we will also respond to the smaller problems with easy solutions on the road.</h2></div></div>
            </section>

            <section className="minifut">
                <div className="info">
                    <h2 className='faqs'>FAQs</h2>
                    <h2>Here you'll find answers to the most common questions.</h2>
                </div>
                <div className="minifut-content">
                    <div className="minifut-left"><img src={thinks} className='faqs-img' alt="" /></div>
                    <div className="minifut-right">
                        <div className="faqs-questions">
                            <h2 className='faqs-question'>It is possible to be active on both parts of the web ?</h2>
                            <h2 className='plus'>+</h2>
                        </div>
                        <div className="faqs-questions">
                            <h2 className='faqs-question'>Is it possible to have various posts at the same time  ?</h2>
                            <h2 className='plus'>+</h2>
                        </div>
                        <div className="faqs-questions">
                            <h2 className='faqs-question'>I want to became a Founder Father, how should i do that ?</h2>
                            <h2 className='plus'>+</h2>
                        </div>
                        <div className="faqs-questions">
                            <h2 className='faqs-question'>If im not happy with your service, can i get my money back ?</h2>
                            <h2 className='plus'>+</h2>
                        </div>


                    </div>
                </div>


            </section>
            <section className="newsletter">
                <div className="news-content">
                    <h2 className='news-title'>Subscribe to our newsletter</h2>
                    <h2 className='news-text'>If you got any other questions, or just want to subscribe to our newsletter, you can give us your email and we do the rest</h2>
                    <div className="news-form">
                        <input type="email" name="email" id="email" placeholder='Enter your email' className='news-email' />
                        <button type="submit" className='news-button'>Subscribe</button>
                    </div>


                </div>
            </section>

            <footer>
                <div className='fot-logo'>
                    <img src="" alt="" />
                </div>
                <div className="fot-contents">
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
                                <img src={place} className='ico-media' alt="" /><h2 className="content-fot">Rabat, 10000, Morocco</h2>
                            </div>
                            <div className='media'>
                                <img src={email} className='ico-media' alt="" /><h2 className="content-fot">Contact@email.com</h2>
                            </div>
                            <div className='media'>
                                <img src={phone} className='ico-media' alt="" /><h2 className="content-fot">+(212) 648 87 71 55</h2>
                            </div>
                            <div className='media'>
                                <img src={fax} className='ico-media' alt="" /><h2 className="content-fot">+(212) 648 87 71 65</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <h2 className='copy-txt'>Todos los derechos reservados a la marca y a su estetica visual no intentes jodernos o te matamos</h2>
                </div>


            </footer>
        </>
    )
}



export default Home;