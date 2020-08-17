import { ADD_SWEET_PACK_SIZE, UPDATE_SWEET_PACK_SIZE, REMOVE_SWEET_PACK_SIZE } from '../_constants/actionTypes';

export const addSweetPackSize = (sweetPackSize) => ({
    type: ADD_SWEET_PACK_SIZE,
    payload: sweetPackSize
});

export const updateSweetPackSize = (index, sweetPackSize) => ({
    type: UPDATE_SWEET_PACK_SIZE,
    payload: {
        index, 
        sweetPackSize
    }
});

export const removeSweetPackSize = (sweetPackSize) => ({
    type: REMOVE_SWEET_PACK_SIZE,
    payload: sweetPackSize
});