import { getOrderNumberOfSweets } from './order.selectors';

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
});