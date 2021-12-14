import  {ACTIONS_TYPES}  from "../Actions/Types";

const initialState = {
    products:[],
}

export const productReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case ACTIONS_TYPES.SET_PRODUCTS:
            return {...state, products: payload};
    
        default:
            return state;
    }
}