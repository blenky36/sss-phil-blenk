import { isEmpty, getOrderList } from './OrderList';

describe('OrderList functions', () => {
    describe('isEmpty', () => {
        it('returns true if the object is empty', () => {
            const fakeEmptyObject = {};

            const expected = true;
            const actual = isEmpty(fakeEmptyObject);

            expect(actual).toEqual(expected);
        });

        it('returns false if the object is not empty', () => {
            const fakeObject = { key: 'value' };

            const expected = false;
            const actual = isEmpty(fakeObject);

            expect(actual).toEqual(expected);
        });
    });

    describe('getOrderList', () => {
        it('returns an array of length one when passed an empty object', () => {
            const fakeEmptyOrder = {};

            const actual = getOrderList(fakeEmptyOrder);
            
            expect(actual.length).toBe(1);

        })
    });
});