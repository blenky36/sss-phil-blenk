import sinon from 'sinon';
import { updateError, addInventoryItem } from './inventory.thunks';

describe('The inventory thunks', () => {
    describe('updateError', () => {
        it('dispatches the correct actions in the right order', () => {
            const fakeDispatch = sinon.spy();
            const fakeErrorMessage = 'Error message';
            const fakeShowError = true;
            const expectedFirstAction = {
                type: 'SET_INVENTORY_ERROR_MESSAGE',
                payload: fakeErrorMessage
            };
            const expectedSecondAction = {
                type: 'SET_SHOW_INVENTORY_ERROR',
                payload: fakeShowError
            };

            updateError(fakeDispatch, fakeErrorMessage, fakeShowError);

            expect(fakeDispatch.getCall(0).args[0]).toEqual(expectedFirstAction);
            expect(fakeDispatch.getCall(1).args[0]).toEqual(expectedSecondAction);
        });
    });

    describe('addInventoryItem', () => {
        it('dispatches the error actions when passed a zero item', () => {
            const fakeDispatch = sinon.spy();
            const fakeState = () => ({ inventoryReducer: { sweetPackSizes: [1, 2, 3] } })

            const expectedErrorMessage = 'Sweet pack size must be at least 1!';
            const expectedShowError = true;

            const expectedFirstAction = {
                type: 'SET_INVENTORY_ERROR_MESSAGE',
                payload: expectedErrorMessage
            };
            const expectedSecondAction = {
                type: 'SET_SHOW_INVENTORY_ERROR',
                payload: expectedShowError
            };

            addInventoryItem(0)(fakeDispatch, fakeState);

            expect(fakeDispatch.getCall(0).args[0]).toEqual(expectedFirstAction);
            expect(fakeDispatch.getCall(1).args[0]).toEqual(expectedSecondAction);
        });

        it('dispatches the error actions when passed an invalid item', () => {
            const fakeDispatch = sinon.spy();
            const fakeState = () => ({ inventoryReducer: { sweetPackSizes: [1, 2, 3] } })

            const expectedErrorMessage = 'Sweet pack size must be at least 1!';
            const expectedShowError = true;

            const expectedFirstAction = {
                type: 'SET_INVENTORY_ERROR_MESSAGE',
                payload: expectedErrorMessage
            };
            const expectedSecondAction = {
                type: 'SET_SHOW_INVENTORY_ERROR',
                payload: expectedShowError
            };

            addInventoryItem(null)(fakeDispatch, fakeState);

            expect(fakeDispatch.getCall(0).args[0]).toEqual(expectedFirstAction);
            expect(fakeDispatch.getCall(1).args[0]).toEqual(expectedSecondAction);
        });

        it('dispatches the error actions when passed an item that is already in sweetPack sizes', () => {
            const fakeDispatch = sinon.spy();
            const fakeState = () => ({ inventoryReducer: { sweetPackSizes: [1, 2, 3] } })

            const expectedErrorMessage = 'Sweet pack size already exists!';
            const expectedShowError = true;

            const expectedFirstAction = {
                type: 'SET_INVENTORY_ERROR_MESSAGE',
                payload: expectedErrorMessage
            };
            const expectedSecondAction = {
                type: 'SET_SHOW_INVENTORY_ERROR',
                payload: expectedShowError
            };

            addInventoryItem(2)(fakeDispatch, fakeState);

            expect(fakeDispatch.getCall(0).args[0]).toEqual(expectedFirstAction);
            expect(fakeDispatch.getCall(1).args[0]).toEqual(expectedSecondAction);
        });

        it('dispatches the error actions and the addSweetPackSize action when passed a valid item', () => {
            const fakeDispatch = sinon.spy();
            const fakeState = () => ({ inventoryReducer: { sweetPackSizes: [1, 2, 3] } })

            const expectedErrorMessage = '';
            const expectedShowError = false;
            const expectedPayload = 5;

            const expectedFirstAction = {
                type: 'SET_INVENTORY_ERROR_MESSAGE',
                payload: expectedErrorMessage
            };
            const expectedSecondAction = {
                type: 'SET_SHOW_INVENTORY_ERROR',
                payload: expectedShowError
            };
            const expectedThirdAction = {
                type: 'ADD_SWEET_PACK_SIZE',
                payload: expectedPayload
            };

            addInventoryItem(5)(fakeDispatch, fakeState);

            expect(fakeDispatch.getCall(0).args[0]).toEqual(expectedFirstAction);
            expect(fakeDispatch.getCall(1).args[0]).toEqual(expectedSecondAction);
            expect(fakeDispatch.getCall(2).args[0]).toEqual(expectedThirdAction);
        });
    });
}); 