import { ADD_SWEET_PACK_SIZE, REMOVE_SWEET_PACK_SIZE, UPDATE_SWEET_PACK_SIZE } from '../_constants/actionTypes';

const initialState = { sweetPackSizes: [250, 500, 1000, 2000, 5000] };

export const inventoryReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_SWEET_PACK_SIZE:
            if(state.sweetPackSizes.includes(payload)) {
                return {
                    ...state
                }
            } 
            return {
                ...state,
                sweetPackSizes: [...state.sweetPackSizes, payload]
            };
        case REMOVE_SWEET_PACK_SIZE:
            return {
                ...state,
                sweetPackSizes: state.sweetPackSizes.filter((item) => item !== payload)
            }
        case UPDATE_SWEET_PACK_SIZE:
            if(state.sweetPackSizes.includes(payload.sweetPackSize)) {
                return {
                    ...state
                }
            }
            return {
                ...state,
                sweetPackSizes: [...state.sweetPackSizes.map((sweetPackSize, index) => {
                    if (index !== payload.index) {
                        return sweetPackSize;
                    }
                    return payload.sweetPackSize
                })]
            }
        default:
            return state
    }
};