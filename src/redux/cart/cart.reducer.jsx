// define initial state for this reducer 
import { cartTypes } from "./cart.types";
import { cartHelper } from "./cart.helper";


const INITIAL_STATE = {
    toggleCartDropdown: false,
    items: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cartTypes.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                toggleCartDropdown: !state.toggleCartDropdown
            }
        case cartTypes.ADD_ITEM:
            return {
                ...state,
                items: cartHelper(action.payload, state.items)
            }
        default:
            return state;
    }
}