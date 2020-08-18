import { setOrderErrorMessage, setShowOrderError, setOrderOutputSweetPacks } from '../_actions/order.actions';
import { getSweetPackSizes } from '../_selectors/inventory.selectors';
import { getOrderNumberOfSweets } from '../_selectors/order.selectors';
import { orderCalculator, orderOptimiser } from '../_helpers/order.helper';

export const calculateOrder = () => (dispatch, getState) => {
    const orderNumberOfSweets = getOrderNumberOfSweets(getState());
    
    if(orderNumberOfSweets === 0) {
        updateError(dispatch, 'Please order at least 1 sweet!', true);
        dispatch(setOrderOutputSweetPacks({}));
    } else {
        updateError(dispatch, '', false);
        const sweetPackSizes = getSweetPackSizes(getState());
        const outputSweetPacks = orderCalculator(orderNumberOfSweets, sweetPackSizes);
        const optimisedOutputSweetPacks = orderOptimiser(outputSweetPacks, sweetPackSizes);
        dispatch(setOrderOutputSweetPacks(optimisedOutputSweetPacks));
    }
}

const updateError = (dispatch, errorMessage, showError) => {
    dispatch(setOrderErrorMessage(errorMessage));
    dispatch(setShowOrderError(showError));
}
