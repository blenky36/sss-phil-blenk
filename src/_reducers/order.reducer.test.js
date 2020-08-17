import { orderReducer } from './order.reducer';

const getFakeAction = (type, payload) => ({ type, payload });

describe('The order reducer', () => {
    it('Sets the numberOfSweets correctly when passed SET_ORDER_NUMBER_OF_SWEETS', () => {
        const fakeState = { numberOfSweets: 20 };
        const fakeAction = getFakeAction('SET_ORDER_NUMBER_OF_SWEETS', 100);

        const expected = { numberOfSweets: 100 }
        const actual = orderReducer(fakeState, fakeAction);
    
        expect(actual).toEqual(expected);
    });

    it('Sets the outputSweetPacks correctly when passed SET_ORDER_OUTPUT_SWEET_PACKS', () => {
        const fakeState = { outputSweetPacks: {} };
        const fakeOutputSweetPacks = { 250: 1, 500: 1 }
        const fakeAction = getFakeAction('SET_ORDER_OUTPUT_SWEET_PACKS', fakeOutputSweetPacks);

        const expected = { outputSweetPacks: fakeOutputSweetPacks }
        const actual = orderReducer(fakeState, fakeAction);
    
        expect(actual).toEqual(expected);
    });

    it('Sets the showError correctly when passed SET_SHOW_ORDER_ERROR', () => {
        const fakeState = { showError: true };
        const fakeAction = getFakeAction('SET_SHOW_ORDER_ERROR', false);

        const expected = { showError: false }
        const actual = orderReducer(fakeState, fakeAction);
    
        expect(actual).toEqual(expected);
    });

    it('Sets the errorMessage correctly when passed SET_ORDER_ERROR_MESSAGE', () => {
        const fakeState = { errorMessage: '' };
        const fakeErrorMessage = 'Error message';
        const fakeAction = getFakeAction('SET_ORDER_ERROR_MESSAGE', fakeErrorMessage);

        const expected = { errorMessage: fakeErrorMessage }
        const actual = orderReducer(fakeState, fakeAction);
    
        expect(actual).toEqual(expected);
    });
});
