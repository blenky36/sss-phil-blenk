import { SET_ORDER_NUMBER_OF_SWEETS, SET_ORDER_OUTPUT_SWEET_PACKS, SET_ORDER_ERROR_MESSAGE, SET_SHOW_ORDER_ERROR } from '../_constants/actionTypes';

export const setOrderNumberOfSweets = (numberOfSweets) => ({
    type: SET_ORDER_NUMBER_OF_SWEETS,
    payload: numberOfSweets
});

export const setOrderOutputSweetPacks = (outputSweetPacks) => ({
    type: SET_ORDER_OUTPUT_SWEET_PACKS,
    payload: outputSweetPacks
});

export const setShowOrderError = (showError) => ({
    type: SET_SHOW_ORDER_ERROR,
    payload: showError
});

export const setOrderErrorMessage = (orderErrorMessage) => ({
    type: SET_ORDER_ERROR_MESSAGE,
    payload: orderErrorMessage
});