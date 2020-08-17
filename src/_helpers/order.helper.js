// number of Sweets is int, sweetPack size is array

export const orderCalculator = (numberOfSweets, sweetPackSizes) => {
    const order = {};

    if(!numberOfSweets || numberOfSweets === 0) {
        return order;

    } else if(isSmallerThanAllItems(numberOfSweets, sweetPackSizes)) {
        order[getSmallestItem(sweetPackSizes)] = 1;
        return order;

    } else if(sweetPackSizes.includes(numberOfSweets)) {
        order[numberOfSweets] = 1;
        return order;

    } else if(isAMultipleOfAnItem(numberOfSweets, sweetPackSizes)) {
        const multiples = getItemsThatAreMultiples(numberOfSweets, sweetPackSizes);
    
        if(multiples.length === 1) {
            order[multiples[0]] = numberOfSweets / multiples[0];
            return order;

        } else {
            const smallestMultiple = findSmallestMultiple(numberOfSweets, multiples);
            order[smallestMultiple] = numberOfSweets / smallestMultiple;
            return order;
        }

    } else {
        return {};
    }
}

export const isSmallerThanAllItems = (value, items) => items.filter(item => value > item).length < 1;
export const getSmallestItem = (items) => Math.min(...items);
export const isMultipleOf = (value, item) => item % value === 0;
export const getItemsThatAreMultiples = (value, items) => items.filter(item => isMultipleOf(item, value))
export const isAMultipleOfAnItem = (value, items) => getItemsThatAreMultiples(value, items).length > 0;
export const findSmallestMultiple = (value, multiples) => {
    let currentSmallestMultiplier = value / multiples[0];
    let currentSmallestMultiple = multiples[0];
    
    for (let i = 1; i < multiples.length; i++) {
        let currentMultiplier = value / multiples[i];
        if(currentMultiplier < currentSmallestMultiplier && currentMultiplier >= 1 && Number.isInteger(currentMultiplier)) {
            currentSmallestMultiplier = currentMultiplier;
            currentSmallestMultiple = multiples[i];
        }
    }
    return currentSmallestMultiple;
} 