import './Wrapper.css';
import React from 'react';
import wrapperImage from '../../Assets/Images/wrapperImage.png';
import Audio from '../../Assets/SVG/Audio.svg';
import Live from '../../Assets/SVG/Live.svg';
import Recorded from '../../Assets/SVG/Recorded.svg';

const Wrapper = () => {
    return (
        <div className='wrapper'>
            <h1 className='wrapper__heading'>High quality video, audio & live classes</h1>
            <p className='wrapper__text'>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video image with considerably more than 480 vertical scan lines or 576 vertical lines is considered high-definition.</p>
            <a className='wrapper__link' href="#">Visit Courses</a>
            <div>
            <img className='wrapper__image' src={wrapperImage} alt="" />
            <ul className='wrapper__list'>
                <li className='wrapper__item'>
                    <span>Audio Classes</span>
                    <img src={Audio} alt="" />
                </li>
                <li className='wrapper__item'>
                    <span>Live Classes</span>
                    <img src={Live} alt="" />
                </li>
                <li className='wrapper__item'>
                    <span>Recorded Class</span>
                    <img src={Recorded} alt="" />
                </li>
            </ul>
            </div>
        </div>
    );
}

export default Wrapper;
