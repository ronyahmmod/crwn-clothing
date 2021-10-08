import React from 'react';
import {ReactComponent as ShopingBagIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';


const CartIcon = ({ total, ...otherProps}) => {
    return(
    <div className="cart-icon" {...otherProps} >
        <ShopingBagIcon className="cart-icon__icon" />
        <span className="cart-icon__number">{total ? total: '0'}</span>
    </div>
)}

const mapStateToProps = state => ({
    total: selectCartItemsCount(state)
})

export default connect(mapStateToProps)(CartIcon);