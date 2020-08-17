import { SET_ORDER_NUMBER_OF_SWEETS, SET_ORDER_OUTPUT_SWEET_PACKS, SET_ORDER_ERROR_MESSAGE, SET_SHOW_ORDER_ERROR } from '../_constants/actionTypes';

const initialState = { numberOfSweets: 0, outputSweetPacks: {}, errorMessage: '', showError: false };

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
        case SET_ORDER_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: payload
            }
        case SET_SHOW_ORDER_ERROR: 
            return {
                ...state,
                showError: payload
            }
        default:
            return state
    }
};