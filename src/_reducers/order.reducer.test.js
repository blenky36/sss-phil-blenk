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
});