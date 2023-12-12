import { createContext, useReducer } from "react";
import { BasketReducer, BasketActionTypes } from "../reducers/BasketReducer";

const BasketContext = createContext(null);

const BasketContextProvider = ({ children }) => {
    const [basket, basketDispatch] = useReducer(BasketReducer, []);


    const value = {
        basket,
        basketDispatch,
        BasketActionTypes
    }

    return (
        <BasketContext.Provider value={value}>
            {children}
        </BasketContext.Provider>
    )
}

export { BasketContext, BasketContextProvider };