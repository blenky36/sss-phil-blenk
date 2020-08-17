import { SET_ORDER_NUMBER_OF_SWEETS } from '../_constants/actionTypes';

export const setOrderNumberOfSweets = (numberOfSweets) => ({
    type: SET_ORDER_NUMBER_OF_SWEETS,
    payload: numberOfSweets
});