import {ACTIONS_TYPES}  from "./Types"

export const  setProducts = (products) => {
    return {
        type: ACTIONS_TYPES.SET_PRODUCTS,
        payload: products,
    };
};
