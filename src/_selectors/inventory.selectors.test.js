import { getSweetPackSizes } from './inventory.selectors';

describe('The inventory selectors', () => {
    describe('The getSweetPackSizes selector', () => {
        it('Returns the sweetPackSizes in the inventory reducer', () => {
            const fakeSweetPackSizes = [29, 30, 31];
            const fakeState = { inventoryReducer: { sweetPackSizes: fakeSweetPackSizes } };
            
            const expected = fakeSweetPackSizes;
            const actual = getSweetPackSizes(fakeState);

            expect(actual).toEqual(expected);
        });
    });
});