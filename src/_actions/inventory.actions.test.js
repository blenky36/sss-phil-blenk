import { ADD_SWEET_PACK_SIZE, UPDATE_SWEET_PACK_SIZE, REMOVE_SWEET_PACK_SIZE, SET_INVENTORY_ERROR_MESSAGE, SET_SHOW_INVENTORY_ERROR } from '../_constants/actionTypes';
import { addSweetPackSize, updateSweetPackSize, removeSweetPackSize, setInventoryErrorMessage, setShowInventoryError } from './inventory.actions';

describe('The inventory actions', () => {
    describe('The addSweetPackSize action', () => {
        it('Returns an object of type ADD_SWEET_PACK_SIZE with the sweet pack size as payload', () => {
            const fakeSweetPackSize = 50000;
            const expected = {
                type: ADD_SWEET_PACK_SIZE,
                payload: fakeSweetPackSize
            }

            const actual = addSweetPackSize(fakeSweetPackSize);
            expect(actual).toEqual(expected);
        });
    });

    describe('The updateSweetPackSize action', () => {
        it('Returns an object of type UPDATE_SWEET_PACK_SIZE with the sweet pack size and index as payload', () => {
            const fakeSweetPackSize = 50000;
            const fakeIndex = 1;
            const expected = {
                type: UPDATE_SWEET_PACK_SIZE,
                payload: {
                    index: fakeIndex,
                    sweetPackSize: fakeSweetPackSize
                }
            }

            const actual = updateSweetPackSize(fakeIndex, fakeSweetPackSize);
            expect(actual).toEqual(expected);
        });
    });

    describe('The removeSweetPackSize action', () => {
        it('Returns an object of type REMOVE_SWEET_PACK_SIZE with the sweet pack size as payload', () => {
            const fakeSweetPackSize = 50000;
            const expected = {
                type: REMOVE_SWEET_PACK_SIZE,
                payload: fakeSweetPackSize
            }

            const actual = removeSweetPackSize(fakeSweetPackSize);
            expect(actual).toEqual(expected);
        });
    });

    describe('The setInventoryErrorMessage action', () => {
        it('Returns an object of type SET_INVENTORY_ERROR_MESSAGE with the error message as payload', () => {
            const fakeErrorMessage = 'Error message'; 
            const expected = {
                type: SET_INVENTORY_ERROR_MESSAGE,
                payload: fakeErrorMessage
            }

            const actual = setInventoryErrorMessage(fakeErrorMessage);
            expect(actual).toEqual(expected);
        });
    });

    describe('The setShowInventoryError action', () => {
        it('Returns an object of type SET_SHOW_INVENTORY_ERROR with the error message as payload', () => {
            const fakeShowError = true; 
            const expected = {
                type: SET_SHOW_INVENTORY_ERROR,
                payload: fakeShowError
            }

            const actual = setShowInventoryError(fakeShowError);
            expect(actual).toEqual(expected);
        });
    });
});