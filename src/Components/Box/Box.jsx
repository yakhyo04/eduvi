import './Box.css';
import React from 'react';

import One from '../../Assets/SVG/One.svg';
import Two from '../../Assets/SVG/Two.svg';
import Three from '../../Assets/SVG/Three.svg';
import Four from '../../Assets/SVG/Four.svg';
import Five from '../../Assets/SVG/Five.svg';
import Six from '../../Assets/SVG/Six.svg';
import Seven from '../../Assets/SVG/Seven.svg';
import Eight from '../../Assets/SVG/Eight.svg';
import Skills from './Skills';
import Join from './Join';
import Subscribe from './Subscribe';

const Box = () => {
    return (
        <div className='box'>
            <div>
            <h2 className='box__heading'>Qualified lessons for students</h2>
            <p className='box__text'>A lesson or class is a structured period of time where learning is intended to occur. It involves one or more students being taught by a teacher or instructor.</p>
            <ul className='box__submenu'>
                <li className='box__subitem'>Kindergarten</li>
                <li className='box__subitem box__highschool'>High School</li>
                <li className='box__subitem'>College</li>
            </ul>
            </div>
            <ul className='box__list'>
                <li className='box__item'>
                    <img src={One} alt="One" />
                    <h3 className='box__header'>Standard One</h3>
                    <p className='box__text'>Standard  1 is a foundation Standard that reflects 7 important concepts...</p>
                    <a className='box__link' href="#">Class Details</a>
                </li>
                <li className='box__item'>
                    <img src={Two} alt="One" />
                    <h3 className='box__header'>Standard Two</h3>
                    <p className='box__text'>Standard  2 builds on the foundations of Standard 1 and includes requirements...</p>
                    <a className='box__link' href="#">Class Details</a>
                </li>
                <li className='box__item'>
                    <img src={Three} alt="Three" />
                    <h3 className='box__header'>Standard Three</h3>
                    <p className='box__text'>Standard  3 of the Aged Care Quality Standards applies to all services delivering personal...</p>
                    <a className='box__link' href="#">Class Details</a>
                </li>
                <li className='box__item'>
                    <img src={Four} alt="Four" />
                    <h3 className='box__header'>Standard Four</h3>
                    <p className='box__text'>Standard  4 of the Aged Care Quality Standards focuses on services and supports...</p>
                    <a className='box__link' href="#">Class Details</a>
                </li>
                <li className='box__item'>
                    <img src={Five} alt="Five" />
                    <h3 className='box__header'>Standard Five</h3>
                    <p className='box__text'>Standard 5 Learning Resources. Learning Resources ensure that the school has the...</p>
                    <a className='box__link' href="#">Class Details</a>
                </li>
                <li className='box__item'>
                    <img src={Six} alt="Six" />
                    <h3 className='box__header'>Standard Six</h3>
                    <p className='box__text'>Standard 6 requires an organisation to have a system to resolve complaints...</p>
                    <a className='box__link' href="#">Class Details</a>
                </li>
                <li className='box__item'>
                    <img src={Seven} alt="Seven" />
                    <h3 className='box__header'>Standard Seven</h3>
                    <p className='box__text'>Standard 7 Blood Management mandates that leaders of health service organisations...</p>
                    <a className='box__link' href="#">Class Details</a>
                </li>
                <li className='box__item'>
                    <img src={Eight} alt="Eight" />
                    <h3 className='box__header'>Standard Eight</h3>
                    <p className='box__text'>Standard 8 Course from NCERT Solutions help students to understand...</p>
                    <a className='box__link' href="#">Class Details</a>
                </li>
            </ul>
            <nav className='box__nav'>
                <a className='box__visit' href="#">Visit More Classes</a>
            </nav>
            <Skills/>
            <Join/>
            <Subscribe/>
        </div>
    );
}

export default Box;
