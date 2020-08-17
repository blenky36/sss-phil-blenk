// number of Sweets is int, sweetPack size is array

export const orderCalculator = (numberOfSweets, sweetPackSizes) => {
    const order = {};

    if(!numberOfSweets || numberOfSweets === 0) {
        return order;
    } else if(isSmallerThanAllItems(numberOfSweets, sweetPackSizes)) {
        order[getSmallestItem(sweetPackSizes)] = 1;
        return order
    } else {
        return {};
    }
}

const isSmallerThanAllItems = (item, array) => array.filter(x => item > x).length < 1;
const getSmallestItem = (array) => Math.min(...array);