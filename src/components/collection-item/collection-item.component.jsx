import React from "react";
import {connect} from 'react-redux';
import './collection-item.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return(
        <div className="collection-item">
            <div className="collection-item__image" style={{
                backgroundImage: `URL(${imageUrl})`
            }} />

            <div className="collection-item__footer">
                <span className="collection-item__name">{name}</span>
                <span className="collection-item__price">{price}</span>
                <CustomButton onClick={() => addItem(item)}>Add to cart</CustomButton>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);