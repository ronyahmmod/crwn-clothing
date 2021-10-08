import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartItemDropdown from '../cart-item-dropdown/cart-item-dropdown.component';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectToggleCartDropDown } from '../../redux/cart/cart.selectors';
import './header.styles.scss';

const Header = ({currentUser, toggleCartDropdown, setToggleCartDropdown}) => {
    console.log(toggleCartDropdown);
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
                {
                    currentUser ? (
                        <li className="nav__item">
                            <div className="nav__link" onClick={() => auth.signOut()}>Sign Out</div>
                        </li>
                    ) :
                    (<li className="nav__item">
                        <Link to="/signin" className="nav__link">Sign In</Link>
                    </li>)
                }
                <li className="nav__item">
                    <CartIcon onClick={() => setToggleCartDropdown()} />
                </li>

                
                
            </ul>
            {
                toggleCartDropdown ? <CartItemDropdown /> : null
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setToggleCartDropdown: () => dispatch(toggleCartDropdown())
})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    toggleCartDropdown: selectToggleCartDropDown
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);
