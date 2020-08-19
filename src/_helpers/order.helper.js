// number of Sweets is int, sweetPack size is array

export const orderCalculator = (numberOfSweets, sweetPackSizes, existingOrder) => {
    let order = existingOrder ? existingOrder : {};

    if (!numberOfSweets || numberOfSweets === 0) {
        return order;

    } else if (isSmallerThanAllItems(numberOfSweets, sweetPackSizes)) {
        order[getSmallestItem(sweetPackSizes)] ? order[getSmallestItem(sweetPackSizes)] += 1 : order[getSmallestItem(sweetPackSizes)] = 1;
        return order;

    } else if (sweetPackSizes.includes(numberOfSweets)) {
        order[numberOfSweets] ? order[numberOfSweets] += 1 : order[numberOfSweets] = 1;
        return order;
    }

    let newNumberOfSweets = numberOfSweets;

    for (let i = sweetPackSizes.length - 1; i >= 0; i--) {
        while (newNumberOfSweets - sweetPackSizes[i] >= 0) {
            newNumberOfSweets -= sweetPackSizes[i];
            if (order[sweetPackSizes[i]]) {
                order[sweetPackSizes[i]] += 1;
            } else {
                order[sweetPackSizes[i]] = 1;
            }
        }
    }

    if(newNumberOfSweets === 0) {
        return order;
    }

    return orderCalculator(newNumberOfSweets, sweetPackSizes, order);
}

export const isSmallerThanAllItems = (value, items) => items.filter(item => value > item).length < 1;

export const getSmallestItem = (items) => Math.min(...items);

export const itemIsMultipleOfOtherItemInArray = (item, multiplier, array) => array.includes(item * multiplier); 

export const orderOptimiser = (order, sweetPackSizes) => {
    for (let i = 0; i < sweetPackSizes.length; i++) {
        let sweetPackQuantity = order[sweetPackSizes[i]];
        if(sweetPackQuantity && itemIsMultipleOfOtherItemInArray(sweetPackSizes[i], sweetPackQuantity, sweetPackSizes)) {
            delete order[sweetPackSizes[i]];
            // due to the way the orderCalculator works from the top down, there won't be a scenario where there are three of an item that has a multiple bigger than it
            order[sweetPackSizes[sweetPackSizes.indexOf(sweetPackSizes[i] * sweetPackQuantity)]] = 1;
        }
    }
    return order;
}



