import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss';

const Header = () => {
    return(
        <div className="header">
            <Link to="/" className="header__logo-box">
                <Logo className="header__logo" />
            </Link>

            <ul className="nav">
                <li className="nav__item">
                    <Link to="/shop" className="nav__link">shop</Link>
                </li>
                <li className="nav__item">
                    <Link to="/contact" className="nav__link">contact</Link>
                </li>
                <li className="nav__item">
                    <Link to="/signin" className="nav__link">Sign In</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;