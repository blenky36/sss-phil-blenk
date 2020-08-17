import { SET_ORDER_NUMBER_OF_SWEETS, SET_ORDER_OUTPUT_SWEET_PACKS } from '../_constants/actionTypes';
import { setOrderNumberOfSweets, setOrderOutputSweetPacks } from './order.actions';

describe('The order actions', () => {
    describe('The setOrderNumberOfSweets action', () => {
        it('Returns an object of type SET_ORDER_NUMBER_OF_SWEETS with the number of sweets as payload', () => {
            const fakeNumberOfSweets = 50000;
            const expected = {
                type: SET_ORDER_NUMBER_OF_SWEETS,
                payload: fakeNumberOfSweets
            }

            const actual = setOrderNumberOfSweets(fakeNumberOfSweets);
            expect(actual).toEqual(expected);
        });
    });

    describe('The setOrderOutputSweetPacks action', () => {
        it('Returns an object of type SET_ORDER_OUTPUT_SWEET_PACKS with the number of sweets as payload', () => {
            const fakeOutputSweetPacks = { 250: 1, 5000: 1 };
            const expected = {
                type: SET_ORDER_OUTPUT_SWEET_PACKS,
                payload: fakeOutputSweetPacks
            }

            const actual = setOrderOutputSweetPacks(fakeOutputSweetPacks);
            expect(actual).toEqual(expected);
        });
    });
});