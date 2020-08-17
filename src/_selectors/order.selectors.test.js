import { getOrderNumberOfSweets, getOrderOutputSweetPacks, getOrderErrorMessage, getOrderShowError } from './order.selectors';

describe('The order selectors', () => {
    describe('The getOrderNumberOfSweets selector', () => {
        it('Returns the number of sweets in the order reducer', () => {
            const fakeNumberOfSweets = 29;
            const fakeState = { orderReducer: { numberOfSweets: fakeNumberOfSweets } };
            
            const expected = fakeNumberOfSweets;
            const actual = getOrderNumberOfSweets(fakeState);

            expect(actual).toEqual(expected);
        });
    });

    describe('The getOrderOutputSweetPacks selector', () => {
        it('Returns the output sweet packs in the order reducer', () => {
            const fakeOutputSweetPacks = { 250: 1, 5000: 1 };
            const fakeState = { orderReducer: { outputSweetPacks: fakeOutputSweetPacks } };
            
            const expected = fakeOutputSweetPacks;
            const actual = getOrderOutputSweetPacks(fakeState);

            expect(actual).toEqual(expected);
        });
    });

    describe('The getOrderErrorMessage selector', () => {
        it('Returns the error message in the order reducer', () => {
            const fakeErrorMessage = 'Error message';
            const fakeState = { orderReducer: { errorMessage: fakeErrorMessage } };
            
            const expected = fakeErrorMessage;
            const actual = getOrderErrorMessage(fakeState);

            expect(actual).toEqual(expected);
        });
    });

    describe('The getOrderShowError selector', () => {
        it('Returns the show error boolean in the order reducer', () => {
            const fakeShowError = true;
            const fakeState = { orderReducer: { showError: fakeShowError } };
            
            const expected = fakeShowError;
            const actual = getOrderShowError(fakeState);

            expect(actual).toEqual(expected);
        });
    });
});