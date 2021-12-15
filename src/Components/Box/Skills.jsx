import './Box.css';
import React from 'react';
import imageman from '../../Assets/Images/imageman.png';
import html from '../../Assets/SVG/html.svg';
import java from '../../Assets/SVG/java.svg';
import php from '../../Assets/SVG/php.svg';
import bgdot from '../../Assets/SVG/bgdot.svg';

const Skills = () => {
    return (
        <div className='skills'>
            <div className='skills__div'>
                <nav className='skills__nav'>
                    <p className='skills__text'>College Level</p>
                    <h2 className='skills__heading'>Don’t waste time in COVID-19 pandemic. Develop your skills.</h2>
                    <p className='skills__paragraph'>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.</p>
                    <a className='skills__link' href="#">Registation Now</a>
                </nav>
                <nav>
                    <img className='skills__iamgemen' src={imageman} alt="" />
                </nav>
            </div>
        </div>
    );
}

export default Skills;
