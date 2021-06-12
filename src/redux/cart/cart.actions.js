import cartReducer from "./cart.reducer";
import CartActionTypes from './cart.types';

const toggleCartHidden = () => {
    return {
        type:CartActionTypes.TOGGLE_CART_HIDDEN,


    }
}

export const addItem = (item) => {
    return {
        type:CartActionTypes.ADD_ITEM,
        payload:item
    }
}

export default toggleCartHidden;