// number of Sweets is int, sweetPack size is array

export const orderCalculator = (numberOfSweets, sweetPackSizes, existingOrder) => {
    let order = existingOrder ? existingOrder : {};
    console.log({ numberOfSweets, existingOrder, order });

    if (!numberOfSweets || numberOfSweets === 0) {
        return order;

    } else if (isSmallerThanAllItems(numberOfSweets, sweetPackSizes)) {
        existingOrder ? order[getSmallestItem(sweetPackSizes)] += 1 : order[getSmallestItem(sweetPackSizes)] = 1;
        return order;

    } else if (sweetPackSizes.includes(numberOfSweets)) {
        existingOrder ? order[numberOfSweets] += 1 : order[numberOfSweets] = 1;
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
    console.log('remainder: ' + newNumberOfSweets);
    return orderCalculator(newNumberOfSweets, sweetPackSizes, order);
}

export const isSmallerThanAllItems = (value, items) => items.filter(item => value > item).length < 1;

export const getSmallestItem = (items) => Math.min(...items);




