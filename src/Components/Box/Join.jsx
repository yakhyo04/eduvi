import './Box.css';
import React from 'react';
import imagejoin from '../../Assets/Images/imagejoin.png';

const Join = () => {
    return (
        <div className='join'>
            <div className='join__div'>
            <nav className='join__nav'>
                <img className='join__imagejoin' src={imagejoin} alt="" />
            </nav>
            <nav className='join__nav'>
                <h2 className='join__heading'>Want to share your knowledge? Join us a Mentor</h2>
                <p className='join__text'>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.</p>
                <a className='join__link' href="#">Career Information</a>
            </nav>
            </div>
        </div>
    );
}

export default Join;
