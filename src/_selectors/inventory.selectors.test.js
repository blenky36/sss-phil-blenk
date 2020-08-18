import { getSweetPackSizes, getInventoryErrorMessage, getInventoryShowError } from './inventory.selectors';

describe('The inventory selectors', () => {
    describe('The getSweetPackSizes selector', () => {
        it('Returns the sweetPackSizes in the inventory reducer', () => {
            const fakeSweetPackSizes = [29, 30, 31];
            const fakeState = { inventoryReducer: { sweetPackSizes: fakeSweetPackSizes } };
            
            const expected = fakeSweetPackSizes;
            const actual = getSweetPackSizes(fakeState);

            expect(actual).toEqual(expected);
        });
    });

    describe('The getInventoryErrorMessage selector', () => {
        it('Returns the error message in the inventory reducer', () => {
            const fakeErrorMessage = 'Error message';
            const fakeState = { inventoryReducer: { errorMessage: fakeErrorMessage } };
            
            const expected = fakeErrorMessage;
            const actual = getInventoryErrorMessage(fakeState);

            expect(actual).toEqual(expected);
        });
    });

    describe('The getInventoryShowError selector', () => {
        it('Returns the show error boolean in the inventory reducer', () => {
            const fakeShowError = true;
            const fakeState = { inventoryReducer: { showError: fakeShowError } };
            
            const expected = fakeShowError;
            const actual = getInventoryShowError(fakeState);

            expect(actual).toEqual(expected);
        });
    });
});