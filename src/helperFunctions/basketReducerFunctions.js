function removeItemInBasket(state, payload) {
    return state.filter((product) => product.productID !== payload.productID);
}

function updateProductInBasket(state, payload) {
    return state.map((product) => {
        const productQuantityToBeUpdated = product.productID === payload.productID;
        if (productQuantityToBeUpdated) {
            return payload;
        }
        return product;
    });
}

function addProductToBasket(state, payload) {
    const alreadyContainsProductInState = state.filter(
        (productObj) => productObj.productID === payload.productID
    ).length;

    if (alreadyContainsProductInState) {
        return state.reduce((acc, product) => {
            if (product.productID === payload.productID) {
                acc.push({
                    ...product,
                    quantity: product.quantity + payload.additionalQuantity,
                });
            } else {
                acc.push(product);
            }
            return acc;
        }, []);
    }
    return [
        ...state,
        {
            ...payload,
            quantity: payload.additionalQuantity,
            additionalQuantity: 0,
        },
    ];
}

export { addProductToBasket, updateProductInBasket, removeItemInBasket };