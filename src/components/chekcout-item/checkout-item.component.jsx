import React from 'react'
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {selectTotalPriceCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect'

function CheckoutItem({totlaPriceCount}) {
    return (
        <div className="checkout-item">
            <h1>Checkout Item</h1>
            <span>{totlaPriceCount}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    totlaPriceCount: selectTotalPriceCount
})

export default connect(mapStateToProps)(CheckoutItem)
