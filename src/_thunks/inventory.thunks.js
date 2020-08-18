import { getSweetPackSizes } from '../_selectors/inventory.selectors';
import { setInventoryErrorMessage, setShowInventoryError, addSweetPackSize } from '../_actions/inventory.actions';

export const addInventoryItem = (item) => (dispatch, getState) => {
    const sweetPacks = getSweetPackSizes(getState());
    if(!item || item === 0) {
        updateError(dispatch, 'Sweet pack size must be at least 1!', true);
    } else if(sweetPacks.includes(item)) {
        updateError(dispatch, 'Sweet pack size already exists!', true);
    } else {
        updateError(dispatch, '', false);
        dispatch(addSweetPackSize(parseInt(item)));
    }
}

const updateError = (dispatch, errorMessage, showError) => {
    dispatch(setInventoryErrorMessage(errorMessage));
    dispatch(setShowInventoryError(showError));
}