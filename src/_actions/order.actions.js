import { SET_ORDER_NUMBER_OF_SWEETS, SET_ORDER_OUTPUT_SWEET_PACKS } from '../_constants/actionTypes';

export const setOrderNumberOfSweets = (numberOfSweets) => ({
    type: SET_ORDER_NUMBER_OF_SWEETS,
    payload: numberOfSweets
});

export const setOrderOutputSweetPacks = (outputSweetPacks) => ({
    type: SET_ORDER_OUTPUT_SWEET_PACKS,
    payload: outputSweetPacks
});