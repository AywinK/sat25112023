import { addProductToBasket, updateProductInBasket, removeItemInBasket } from "../helperFunctions/basketReducerFunctions";

const BasketActionTypes = {
    ADD: "ADD",
    UPDATE_QUANTITY: "UPDATE QUANTITY",
    REMOVE_ITEM: "REMOVE ITEM"
};


function reducer(state, action) {
    switch (action.type) {
        case BasketActionTypes.ADD:
            console.log(action.type);
            return addProductToBasket(state, action.payload);
        case BasketActionTypes.UPDATE_QUANTITY:
            return updateProductInBasket(state, action.payload);
        case BasketActionTypes.REMOVE_ITEM:
            return removeItemInBasket(state, action.payload);
        default:
            return state;
    }
}

export { reducer as BasketReducer, BasketActionTypes };