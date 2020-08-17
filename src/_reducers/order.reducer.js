import { SET_ORDER_NUMBER_OF_SWEETS, SET_ORDER_OUTPUT_SWEET_PACKS } from '../_constants/actionTypes';

const initialState = { numberOfSweets: 0, outputSweetPacks: {} };

export const orderReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_ORDER_NUMBER_OF_SWEETS:
            return {
                ...state,
                numberOfSweets: payload
            };
        case SET_ORDER_OUTPUT_SWEET_PACKS: 
            return {
                ...state,
                outputSweetPacks: payload
            }
        default:
            return state
    }
};