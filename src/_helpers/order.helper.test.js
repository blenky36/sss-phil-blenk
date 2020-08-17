import { isSmallerThanAllItems, getSmallestItem } from './order.helper';

describe('The order helper', () => {
    describe('isSmallerThanAllItems', () => {
        it('Returns true if passed a value smaller than all items in the array', () => {
            const fakeValue = 1;
            const fakeArray = [2, 3, 4];

            const expected = true;
            const actual = isSmallerThanAllItems(fakeValue, fakeArray);

            expect(expected).toEqual(actual);
        }); 

        it('Returns false if passed a value larger than any item in the array', () => {
            const fakeValueOne = 3;
            const fakeValueTwo = 5;
            const fakeValueThree = 7;
            const fakeArray = [2, 4, 6];

            const expected = false;
            const actualOne = isSmallerThanAllItems(fakeValueOne, fakeArray);
            const actualTwo = isSmallerThanAllItems(fakeValueTwo, fakeArray);
            const actualThree = isSmallerThanAllItems(fakeValueThree, fakeArray);

            expect(expected).toEqual(actualOne);
            expect(expected).toEqual(actualTwo);
            expect(expected).toEqual(actualThree);
        }); 
    });

    describe('getSmallestItem', () => {
        it('Returns the smallest item in the array', () => {
            const fakeArrayOrdered = [1, 2, 3];
            const fakeArrayMixed = [20, 42, 3, 66];

            const expectedOrdered = 1;
            const expectedMixed = 3;
            const actualOrdered = getSmallestItem(fakeArrayOrdered);
            const actualMixed = getSmallestItem(fakeArrayMixed);

            expect(expectedMixed).toEqual(actualMixed);
            expect(expectedOrdered).toEqual(actualOrdered);
        });
    });
});