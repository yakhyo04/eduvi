import './Box.css';
import React from 'react';

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <h2 className='subscribe__heading'>Subscribe For Get Update Every New Courses</h2>
            <p className='subscribe__text'>20k+ students daily learn with Eduvi. Subscribe for new courses.</p>
            <nav className='subscribe__nav'>
                <span className='subscribe__span'>enter your email</span>
                <a className='subscribe__link' href="#">Subscribe</a>
            </nav>
        </div>
    );
}

export default Subscribe;
