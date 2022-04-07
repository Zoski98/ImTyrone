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
import facebook from '../../media/facebook.svg'
import youtube from '../../media/youtube.svg'
import twitter from '../../media/twitter.svg'
import instagram from '../../media/instagram.svg'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>

            <section className="top">
                <div className="nav">
                    <img src="" alt="" className='logo' />
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
                    <h2 className='users-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat praesentium quae consequatur tenetur, alias ratione repudiandae nam, blanditiis quod facere libero sapiente a omnis maxime pariatur id illum voluptatem.
                        Assumenda alias magni quas laborum esse sequi est aperiam, corrupti commodi repellendus consectetur incidunt vel cupiditate, ex necessitatibus? Nihil iste inventore et perferendis quas laborum nobis iusto illo nesciunt eaque.</h2>
                </div>
                <div className="users">
                    <img src={horse} alt="" ></img>
                    <h2 className='users-name'>Premium</h2>
                    <h2 className='users-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat praesentium quae consequatur tenetur, alias ratione repudiandae nam, blanditiis quod facere libero sapiente a omnis maxime pariatur id illum voluptatem.
                        Assumenda alias magni quas laborum esse sequi est aperiam, corrupti commodi repellendus consectetur incidunt vel cupiditate, ex necessitatibus? Nihil iste inventore et perferendis quas laborum nobis iusto illo nesciunt eaque.</h2>
                </div>
                <div className="users">
                    <img src={pawn} alt="" ></img>
                    <h2 className='users-name'>Basic</h2>
                    <h2 className='users-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat praesentium quae consequatur tenetur, alias ratione repudiandae nam, blanditiis quod facere libero sapiente a omnis maxime pariatur id illum voluptatem.
                        Assumenda alias magni quas laborum esse sequi est aperiam, corrupti commodi repellendus consectetur incidunt vel cupiditate, ex necessitatibus? Nihil iste inventore et perferendis quas laborum nobis iusto illo nesciunt eaque.</h2>
                </div>
            </section>

            <section className="bottom">
                <div className="bottom-left"><div className="name"><h2 className='orange'>COMMUNITY</h2></div><div className="image"><img src={Earth} className='x' alt="" /></div><div className="details"><h2 className='oranges'>Each section serves to a purpose where everyone has to do something peculiar or shit.</h2></div></div>
                <div className="bottom-right"><div className="name"><h2 className='black'>WORLD</h2></div><div className="image"><img src={Users} className='x' id='x' alt="" /></div><div className="details"><h2 className='blacks'>Each section serves to a purpose where everyone has to do something peculiar or shit.</h2></div></div>
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
                        <h2 className='faqs-question'>Lorem ipsum sit amet ?</h2>
                    <h2>+</h2>
                    </div>
                    <div className="faqs-questions">
                        <h2 className='faqs-question'>Lorem ipsum sit amet ?</h2>
                    <h2>+</h2>
                    </div>
                    <div className="faqs-questions">
                        <h2 className='faqs-question'>Lorem ipsum sit amet ?</h2>
                    <h2>+</h2>
                    </div>
                    <div className="faqs-questions">
                        <h2 className='faqs-question'>Lorem ipsum sit amet ?</h2>
                    <h2>+</h2>
                    </div>
                    
                    
                </div>
                </div>
               
              
            </section>
            <section className="newsletter">
                <div className="news-content">
                    <h2 className='news-title'>Subscribe to our newsletter</h2>
                    <h2 className='news-text'>If you got any other questions, or just want to subscribe to our newsletter, you can give us your email and we do the rest</h2>
                    <div className="news-form">
                           <input type="email" name="email" id="email"  placeholder='Enter your email' className='news-email'/>
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