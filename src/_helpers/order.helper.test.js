import { isSmallerThanAllItems, getSmallestItem, isAMultipleOfAnItem, isMultipleOf, 
    getItemsThatAreMultiples, findSmallestMultiple } from './order.helper';

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

    describe('isMultipleOf', () => {
        it('Returns true when passed a mutiple of the item', () => {
            const value = 250;
            const item = 750;

            const expected = true;
            const actual = isMultipleOf(value, item);

            expect(actual).toEqual(expected);
        });

        it('Returns false when not passed a mutiple of the item', () => {
            const value = 3;
            const item = 4;

            const expected = false;
            const actual = isMultipleOf(value, item);

            expect(actual).toEqual(expected);
        });
    });

    describe('getItemsThatAreMultiples', () => {
        it('Returns items when passed a value that is a multiple of items', () => {
            const value = 750;
            const items = [250, 500, 1000, 1500];

            const expected = [250];
            const actual = getItemsThatAreMultiples(value, items);

            expect(actual).toEqual(expected);
        });

        it('Returns no items when not passed a value that is a multiple of items', () => {
            const value = 3;
            const items = [4, 5];

            const expected = [];
            const actual = getItemsThatAreMultiples(value, items);

            expect(actual).toEqual(expected);
        });
    });

    describe('isAMultipleOfAnItem', () => {
        it('Returns true when passed a mutiple of an item', () => {
            const value = 750;
            const items = [250, 500, 1000, 1500];

            const expected = true;
            const actual = isAMultipleOfAnItem(value, items);

            expect(actual).toEqual(expected);
        });

        it('Returns false when not passed a mutiple of an item', () => {
            const value = 3;
            const items = [4];

            const expected = false;
            const actual = isAMultipleOfAnItem(value, items);

            expect(actual).toEqual(expected);
        });
    });

    describe('findSmallestMultiple', () => {
        it('Returns the multiple with the smallest multiplier needed to make the passed value', () => {
            const value = 750;
            const items = [250, 500, 1000, 1500];

            const expected = 250;
            const actual = findSmallestMultiple(value, items);

            expect(actual).toEqual(expected);
        });

        it('Returns the multiple with the smallest multiplier needed to make the passed value', () => {
            const value = 1000;
            const items = [250, 500, 1000, 1500];

            const expected = 1000;
            const actual = findSmallestMultiple(value, items);

            expect(actual).toEqual(expected);
        });

        
    });
});