import sinon from 'sinon';
import { updateError, calculateOrder } from './order.thunks';

describe('The order thunks', () => {
    describe('updateError', () => {
        it('dispatches the correct actions in the right order', () => {
            const fakeDispatch = sinon.spy();
            const fakeErrorMessage = 'Error message';
            const fakeShowError = true;
            const expectedFirstAction = {
                type: 'SET_ORDER_ERROR_MESSAGE',
                payload: fakeErrorMessage
            };
            const expectedSecondAction = {
                type: 'SET_SHOW_ORDER_ERROR',
                payload: fakeShowError
            };

            updateError(fakeDispatch, fakeErrorMessage, fakeShowError);

            expect(fakeDispatch.getCall(0).args[0]).toEqual(expectedFirstAction);
            expect(fakeDispatch.getCall(1).args[0]).toEqual(expectedSecondAction);
        });
    });

    describe('calcualteOrder', () => {
        it('dispatches the error actions and setOrderOutputSweetPacks with empty object when numberOfSweets in the state is zero', () => {
            const fakeDispatch = sinon.spy();
            const fakeState = () => ({ orderReducer: { numberOfSweets: 0 } })

            const expectedErrorMessage = 'Please order at least 1 sweet!';
            const expectedShowError = true;
            const expectedPayload = {};

            const expectedFirstAction = {
                type: 'SET_ORDER_ERROR_MESSAGE',
                payload: expectedErrorMessage
            };
            const expectedSecondAction = {
                type: 'SET_SHOW_ORDER_ERROR',
                payload: expectedShowError
            };
            const expectedThirdAction = {
                type: 'SET_ORDER_OUTPUT_SWEET_PACKS',
                payload: expectedPayload
            };

            calculateOrder(0)(fakeDispatch, fakeState);

            expect(fakeDispatch.getCall(0).args[0]).toEqual(expectedFirstAction);
            expect(fakeDispatch.getCall(1).args[0]).toEqual(expectedSecondAction);
            expect(fakeDispatch.getCall(2).args[0]).toEqual(expectedThirdAction);
        });

        it('dispatches the error actions and setOrderOutputSweetPacks with completed object when numberOfSweets in the state is zero', () => {
            const fakeDispatch = sinon.spy();
            const fakeState = () => ({ inventoryReducer: { sweetPackSizes: [250, 500, 1000] }, orderReducer: { numberOfSweets: 1000 } })

            const expectedErrorMessage = '';
            const expectedShowError = false;
            const expectedPayload = { 1000: 1 };

            const expectedFirstAction = {
                type: 'SET_ORDER_ERROR_MESSAGE',
                payload: expectedErrorMessage
            };
            const expectedSecondAction = {
                type: 'SET_SHOW_ORDER_ERROR',
                payload: expectedShowError
            };
            const expectedThirdAction = {
                type: 'SET_ORDER_OUTPUT_SWEET_PACKS',
                payload: expectedPayload
            };

            calculateOrder(5)(fakeDispatch, fakeState);

            expect(fakeDispatch.getCall(0).args[0]).toEqual(expectedFirstAction);
            expect(fakeDispatch.getCall(1).args[0]).toEqual(expectedSecondAction);
            expect(fakeDispatch.getCall(2).args[0]).toEqual(expectedThirdAction);
        });
    });
}); 