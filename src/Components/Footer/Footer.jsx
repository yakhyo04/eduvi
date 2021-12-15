import './Footer.css';
import React from 'react';
import Eduvi from '../../Assets/Images/eduvi.png';
import Facebook from '../../Assets/SVG/Facebook.svg';
import Instagram from '../../Assets/SVG/Instagram.svg';
import Twitter from '../../Assets/SVG/Twitter.svg';
import LinkedIn from '../../Assets/SVG/LinkedIn.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__div'>
                <nav>
                    <ul className='footer__list'>
                        <li>
                            <img src={Eduvi} alt="" />
                        </li>
                        <li>
                            <ul className='footer__list'>
                            <nav className='footer__icons'>                        
                                <li><img src={Facebook} alt="Facebook" /></li>
                                <li><img src={Instagram} alt="Instagram" /></li>
                                <li><img src={Twitter} alt="Twitter" /></li>
                                <li><img src={LinkedIn} alt="LinkedIn" /></li>
                            </nav>
                            </ul>
                        </li>
                        <li>
                            <p>©2021 Eduvi.co</p>
                        </li>
                        <li>
                            <p>Eduvi is a registered</p>
                        </li>
                        <li>
                            <p>trademark of Eduvi.co</p>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul className='footer__list'>
                        <h2>Courses</h2>
                        <li className='footer__item'>Classroom courses</li>
                        <li className='footer__item'>Virtual classroom courses</li>
                        <li className='footer__item'>E-learning courses</li>
                        <li className='footer__item'>Video Courses</li>
                        <li className='footer__item'>Offline Courses</li>
                    </ul>
                </nav>
                <nav>
                    <ul className='footer__list'>
                    <h2>Community</h2>
                    <li className='footer__item'>Learners</li>
                    <li className='footer__item'>Parteners</li>
                    <li className='footer__item'>Developers</li>
                    <li className='footer__item'>Transactions</li>
                    <li className='footer__item'>Blog</li>
                    <li className='footer__item'>Teaching Center</li>
                    </ul>
                </nav>
                <nav>
                    <ul className='footer__list'>
                        <h2>Quick Links</h2>
                        <li className='footer__item'>Home</li>
                        <li className='footer__item'>Professional Education</li>
                        <li className='footer__item'>Courses</li>
                        <li className='footer__item'>Admissions</li>
                        <li className='footer__item'>Testimonial</li>
                        <li className='footer__item'>Programs</li>
                    </ul>
                </nav>
                <nav>
                    <ul className='footer__list'>
                        <h2>More</h2>
                        <li className='footer__item'>Press</li>
                        <li className='footer__item'>Investors</li>
                        <li className='footer__item'>Terms</li>
                        <li className='footer__item'>Privacy</li>
                        <li className='footer__item'>Help</li>
                        <li className='footer__item'>Contact</li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
