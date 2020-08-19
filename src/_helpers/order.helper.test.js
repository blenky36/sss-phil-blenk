import { isSmallerThanAllItems, getSmallestItem, itemIsMultipleOfOtherItemInArray, orderOptimiser, orderCalculator } from './order.helper';

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

    describe('itemIsMultipleOfOtherItemInArray', () => {
        it('Returns true when item * multipler equals another item in the passed array', () => {
            const fakeItem = 250;
            const fakeArray = [250, 500, 1000, 1200];
            const fakeMultiplier = 2;

            const expected = true;
            const actual = itemIsMultipleOfOtherItemInArray(fakeItem, fakeMultiplier, fakeArray);

            expect(actual).toEqual(expected);
        });

        it('Returns false when item is a multiple of another item in the passed array but not when multiplied by the multiplier', () => {
            const fakeItem = 250;
            const fakeArray = [250, 500, 1000, 1200];
            const fakeMultiplier = 3;

            const expected = false;
            const actual = itemIsMultipleOfOtherItemInArray(fakeItem, fakeMultiplier, fakeArray);

            expect(actual).toEqual(expected);
        });

        it('Returns true when item * multipler does not equal another item in the passed array', () => {
            const fakeItem = 251;
            const fakeArray = [250, 500, 1000, 1200];
            const fakeMultiplier = 2;

            const expected = false;
            const actual = itemIsMultipleOfOtherItemInArray(fakeItem, fakeMultiplier, fakeArray);

            expect(actual).toEqual(expected);
        });
    });

    describe('orderOptimiser', () => {
        it('optimises quantities of bags when there are two bags that could be replaced by one', () => {
            const fakeSweetPackSizes = [250, 500, 1000];
            const fakeOrder = { 250: 2, 1000: 1 };

            const expected = { 500: 1, 1000: 1 };
            const actual = orderOptimiser(fakeOrder, fakeSweetPackSizes);

            expect(expected).toEqual(actual);
        });
    });

    describe('orderCalculator', () => {
        it('returns an empty order if passed 0 or an invalid number of sweeets', () => {
            const fakeSweetPackSizes = [250, 500, 1000, 2000, 5000];
            const fakeNumberOfSweets1 = 0;
            const fakeNumberOfSweets2 = null;
            const fakeNumberOfSweets3 = undefined;
            
            const actual1 = orderCalculator(fakeNumberOfSweets1, fakeSweetPackSizes);
            const actual2 = orderCalculator(fakeNumberOfSweets2, fakeSweetPackSizes);
            const actual3 = orderCalculator(fakeNumberOfSweets3, fakeSweetPackSizes);
            
            const expected1 = {  };
            const expected2 = {  };
            const expected3 = {  };
            
            expect(actual1).toEqual(expected1);
            expect(actual2).toEqual(expected2);
            expect(actual3).toEqual(expected3);
        });
        
        it('returns an order of the smallest sweetPack size with quantity 1 when passed a number of sweets smaller than all the sweetPack sizes', () => {
            const fakeSweetPackSizes = [250, 500, 1000, 2000, 5000];
            const fakeNumberOfSweets = 10;

            const expected = { 250: 1 };
            const actual = orderCalculator(fakeNumberOfSweets, fakeSweetPackSizes);

            expect(actual).toEqual(expected);
        });

        it('calculates the combinations of bags needed when passed a number of sweets that is a sweetPack size', () => {
            const fakeSweetPackSizes = [250, 500, 1000, 2000, 5000];
            const fakeNumberOfSweets1 = 250;
            const fakeNumberOfSweets2 = 500;
            const fakeNumberOfSweets3 = 1000;
            const fakeNumberOfSweets4 = 2000;
            const fakeNumberOfSweets5 = 5000;

            const actual1 = orderCalculator(fakeNumberOfSweets1, fakeSweetPackSizes);
            const actual2 = orderCalculator(fakeNumberOfSweets2, fakeSweetPackSizes);
            const actual3 = orderCalculator(fakeNumberOfSweets3, fakeSweetPackSizes);
            const actual4 = orderCalculator(fakeNumberOfSweets4, fakeSweetPackSizes);
            const actual5 = orderCalculator(fakeNumberOfSweets5, fakeSweetPackSizes);

            const expected1 = { 250: 1 };
            const expected2 = { 500: 1 };
            const expected3 = { 1000: 1 };
            const expected4 = { 2000: 1 };
            const expected5 = { 5000: 1 };

            expect(actual1).toEqual(expected1);
            expect(actual2).toEqual(expected2);
            expect(actual3).toEqual(expected3);
            expect(actual4).toEqual(expected4);
            expect(actual5).toEqual(expected5);
        });

        it('calculates the smallest number of sweetPacks by top down subtraction of sweetPackSizes from the numberOfSweets', () => {
            const fakeSweetPackSizes = [250, 500, 1000, 2000, 5000];
            const fakeNumberOfSweets1 = 15000;
            const fakeNumberOfSweets2 = 15400;
            const fakeNumberOfSweets3 = 15600;

            const actual1 = orderCalculator(fakeNumberOfSweets1, fakeSweetPackSizes);
            const actual2 = orderCalculator(fakeNumberOfSweets2, fakeSweetPackSizes);
            const actual3 = orderCalculator(fakeNumberOfSweets3, fakeSweetPackSizes);

            const expected1 = { 5000: 3 };
            const expected2 = { 5000: 3, 250: 2 };
            const expected3 = { 5000: 3, 500: 1, 250: 1 };


            expect(actual1).toEqual(expected1);
            expect(actual2).toEqual(expected2);
            expect(actual3).toEqual(expected3);
        });
    });
});