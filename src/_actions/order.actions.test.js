import { SET_ORDER_NUMBER_OF_SWEETS } from '../_constants/actionTypes';
import { setOrderNumberOfSweets } from './order.actions';

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
});