import './Main.css';
import React from 'react';
// import Arrow from '../../Assets/SVG/Arrow.svg';
import Search from '../../Assets/SVG/Search.svg';
import ImagePerson from '../../Assets/Images/ImagePerson.png';

const Main = () => {
    return (
        <main className='main'>
            <div>
                <p className='main__text'>Never Stop Learning</p>
                <h1 className='main__heading'>Grow up your skills by online courses with Eduvi</h1>
                <p className='main__paragraph'>Eduvi is a Global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the barriers togetting a degree.</p>
                <nav className='main__nav'>
                    <select className='main__section'>
                        <option value="">Kindergarten</option>
                    </select>
                    <p>Class/Course</p>
                    <a className='main__link' href="#"><img src={Search} alt="Search" />Search</a>
                </nav>
            </div>
            <div>
                <img src={ImagePerson} alt="" />
            </div>
        </main>
    );
}

export default Main;
