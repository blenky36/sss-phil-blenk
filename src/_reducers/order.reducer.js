import { SET_ORDER_NUMBER_OF_SWEETS } from '../_constants/actionTypes';

const initialState = { numberOfSweets: 0 };

export const orderReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_ORDER_NUMBER_OF_SWEETS:
            return {
                ...state,
                numberOfSweets: payload
            };
        default:
            return state
    }
};