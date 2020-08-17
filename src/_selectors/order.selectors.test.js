import { getOrderNumberOfSweets, getOrderOutputSweetPacks } from './order.selectors';

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
});