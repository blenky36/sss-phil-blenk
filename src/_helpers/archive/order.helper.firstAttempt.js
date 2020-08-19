// number of Sweets is int, sweetPack size is array

export const orderCalculator = (numberOfSweets, sweetPackSizes) => {
    let order = {};
    let currentNumberOfSweetPacks = 0;

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
            let multiplier = numberOfSweets / multiples[0];
            order[multiples[0]] = multiplier;
            currentNumberOfSweetPacks = multiplier;
            
        } else {
            let multiplier = numberOfSweets / smallestMultiple;
            const smallestMultiple = findSmallestMultiple(numberOfSweets, multiples);
            order[smallestMultiple] = multiplier;
            currentNumberOfSweetPacks = multiplier;

        }
    } else if(true) {
        // multiple items multiply and add to give total with no remainder
        

    } else if(true) {
        // multiple items multiply and add to give total with remainer :(
    } else {
        return {};
    }
}

export const isSmallerThanAllItems = (value, items) => items.filter(item => value > item).length < 1;

export const getSmallestItem = (items) => Math.min(...items);

export const isMultipleOf = (value, item) => item % value === 0;

export const getItemsThatAreMultiples = (value, items) => items.filter(item => isMultipleOf(item, value));

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