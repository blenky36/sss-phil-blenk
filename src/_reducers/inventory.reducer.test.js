import { inventoryReducer } from './inventory.reducer';

const getFakeAction = (type, payload) => ({ type, payload });

describe('The inventory reducer', () => {
    it('Adds a sweet pack size to sweetPackSizes when passed ADD_SWEET_PACK_SIZE', () => {
        const fakeState = { sweetPackSizes: [10, 20, 30] };
        const fakeAction = getFakeAction('ADD_SWEET_PACK_SIZE', 100);

        const expected = { sweetPackSizes: [10, 20, 30, 100] };
        const actual = inventoryReducer(fakeState, fakeAction);
    
        expect(actual).toEqual(expected);
    });

    it('Does not add a sweet pack size to sweetPackSizes when passed ADD_SWEET_PACK_SIZE and a size that is already in sweetPackSizes', () => {
        const fakeState = { sweetPackSizes: [10, 20, 30] };
        const fakeAction = getFakeAction('ADD_SWEET_PACK_SIZE', 10);

        const expected = { sweetPackSizes: [10, 20, 30] };
        const actual = inventoryReducer(fakeState, fakeAction);
    
        expect(actual).toEqual(expected);
    });

    it('Removes a sweet pack size from sweetPackSizes when passed REMOVE_SWEET_PACK_SIZE', () => {
        const fakeState = { sweetPackSizes: [10, 20, 30] };
        const fakeAction = getFakeAction('REMOVE_SWEET_PACK_SIZE', 10);

        const expected = { sweetPackSizes: [20, 30] };
        const actual = inventoryReducer(fakeState, fakeAction);
    
        expect(actual).toEqual(expected);
    });

    it('Does not remove a sweet pack size from sweetPackSizes when passed REMOVE_SWEET_PACK_SIZE and a size that is not in sweetPackSizes', () => {
        const fakeState = { sweetPackSizes: [10, 20, 30] };
        const fakeAction = getFakeAction('REMOVE_SWEET_PACK_SIZE', 100);

        const expected = { sweetPackSizes: [10, 20, 30] };
        const actual = inventoryReducer(fakeState, fakeAction);
    
        expect(actual).toEqual(expected);
    });

    it('Updates a sweet pack size in sweetPackSizes when passed UPDATE_SWEET_PACK_SIZE and a valid array index and sweetPackSize that is not already in sweetPackSizes', () => {
        const fakeState = { sweetPackSizes: [10, 20, 30] };
        const fakePayload = { index: 0, sweetPackSize: 15 }
        const fakeAction = getFakeAction('UPDATE_SWEET_PACK_SIZE', fakePayload);

        const expected = { sweetPackSizes: [15, 20, 30] };
        const actual = inventoryReducer(fakeState, fakeAction);
    
        expect(actual).toEqual(expected);
    });

    it('Does not  update a sweet pack size in sweetPackSizes when passed UPDATE_SWEET_PACK_SIZE and an invalid array index and sweetPackSize that is not already in sweetPackSizes', () => {
        const fakeState = { sweetPackSizes: [10, 20, 30] };
        const fakePayload = { index: 20, sweetPackSize: 15 }
        const fakeAction = getFakeAction('UPDATE_SWEET_PACK_SIZE', fakePayload);

        const expected = { sweetPackSizes: [10, 20, 30] };
        const actual = inventoryReducer(fakeState, fakeAction);
    
        expect(actual).toEqual(expected);
    });

    it('Does not  update a sweet pack size in sweetPackSizes when passed UPDATE_SWEET_PACK_SIZE and a valid array index and sweetPackSize that is already in sweetPackSizes', () => {
        const fakeState = { sweetPackSizes: [10, 20, 30] };
        const fakePayload = { index: 0, sweetPackSize: 20 }
        const fakeAction = getFakeAction('UPDATE_SWEET_PACK_SIZE', fakePayload);

        const expected = { sweetPackSizes: [10, 20, 30] };
        const actual = inventoryReducer(fakeState, fakeAction);
    
        expect(actual).toEqual(expected);
    });
});