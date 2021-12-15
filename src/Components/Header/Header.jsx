import './Header.css';
import React, {useState} from 'react';
import Eduvi from '../../Assets/Images/eduvi.png';
import Cart from '../../Assets/SVG/Cart.svg';
import Account from '../../Assets/SVG/Account.svg';

import { NavLink } from 'react-router-dom';

const Header = () => {
    const [toggleBtn, setToggleBtn] = useState(false)
    return (
        <header className='header'>
        <div className='header__div'>
            <nav>
                <img src={Eduvi} alt="Eduvi" />
            </nav>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='header__item header__item2'>
                        <span>Cart (0)</span>
                        <img className='header__img' src={Cart} alt="Cart" />
                    </li>
                    <li className='header__item header__item2'>
                        <span>My Account</span>
                        <img className='header__img' src={Account} alt="Account" />
                    </li>
                    <li className='header__item header__item3'>
                        <span>Menu</span>
                        <button className='toggle__btn' onClick={() => setToggleBtn(!toggleBtn)}>
                        <i class="fas fa-bars"></i>
                        </button>
                    </li>


                    {toggleBtn ?
               
               <ul className="toggle__list">
                   <li className='toggle__item'>
                        <span>Cart (0)</span>
                        <img className='header__img' src={Cart} alt="Cart" />
                    </li>
                    <li className='toggle__item'>
                        <span>My Account</span>
                        <img className='header__img' src={Account} alt="Account" />
                    </li>
                   <li className="toggle__item"><NavLink to="/home" className='toggle__link'>Home</NavLink></li>
                   <li className="toggle__item"><NavLink to="/eduvi-shop" className='toggle__link'>Eduvi shop</NavLink></li>
                   <li className="toggle__item"><NavLink to="/eduvi-courses" className='toggle__link' >Eduvi Courses</NavLink></li>
                   <li className="toggle__item"><NavLink to="/eduvi-courses-details" className='toggle__link'>Eduvi Courses Details</NavLink></li>
                   <li className="toggle__item"><NavLink to="/eduvi-pricing" className='toggle__link'>Eduvi Pricing</NavLink></li>
                   <li className="toggle__item"><NavLink to="/eduvi-join" className='toggle__link'>Eduvi Join As Teacher</NavLink></li>
                   <li className="toggle__item"><NavLink to="/eduvi-mentors" className='toggle__link'>Eduvi Mentors</NavLink></li>
                   <li className="toggle__item"><NavLink to="/eduvi-single" className='toggle__link' href="#">Eduvi Single Mentors</NavLink></li>
               </ul>
              
               : null 
           }
                </ul>
            </nav>
        </div>
        </header>
        );
    }
    
    export default Header;
    