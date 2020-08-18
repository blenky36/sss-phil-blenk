// number of Sweets is int, sweetPack size is array

export const orderCalculator = (numberOfSweets, sweetPackSizes) => {
    let order = {};

    if(!numberOfSweets || numberOfSweets === 0) {
        return order;

    } else if(isSmallerThanAllItems(numberOfSweets, sweetPackSizes)) {
        order[getSmallestItem(sweetPackSizes)] = 1;
        return order;

    } else if(sweetPackSizes.includes(numberOfSweets)) {
        order[numberOfSweets] = 1;
        return order;
    } 

    const smallestNumSweetPacks = findSmallestNumSweetPacks(sweetPackSizes, numberOfSweets);
    return { smallestNumSweetPacks };

}

export const isSmallerThanAllItems = (value, items) => items.filter(item => value > item).length < 1;

export const getSmallestItem = (items) => Math.min(...items);

const findLowerNumberOfSweetsWithSolution = (solutions, noCoins, numberOfSweets) => {
    let newNumberOfSweets = numberOfSweets - 1;

    if(solutions[noCoins][newNumberOfSweets] === Infinity) {
        return findLowerNumberOfSweetsWithSolution(solutions, noCoins, newNumberOfSweets);
    } else {
        return newNumberOfSweets;
    }
}

const findSmallestNumSweetPacks = (sweetPackSizes, numberOfSweets, numExtraSweetBags) => {

    if(numberOfSweets === 0) {
        return 0;
    } else if (isSmallerThanAllItems(numberOfSweets, sweetPackSizes)) {
        return numExtraSweetBags ? numExtraSweetBags + 1 : 1;
    }

    // Prepopulate the solutions box with zeros for zero row and infinity for everything else
    let solutions = [];
    for (let row = 0; row <= sweetPackSizes.length; row++) {
        solutions[row] = [];
        for (let col = 0; col <= numberOfSweets; col++) {
            if(col === 0) {
                solutions[row][col] = 0;
            } else {
                solutions[row][col] = Infinity;
            }
        }
    }

    // Work out values for each cell
    for (let row = 1; row <= sweetPackSizes.length; row++) {
        for (let col = 0; col <= numberOfSweets; col++) {
            if(col - sweetPackSizes[row-1] >= 0) {
                solutions[row][col] = Math.min(solutions[row - 1][col], 1 + solutions[row][col - sweetPackSizes[row-1]])
            } else {
                solutions[row][col] = solutions[row - 1][col];
            }
        }
    }
    
    // Take the last cell as it uses all the sweetPackSizes and is the value we want
    if(solutions[sweetPackSizes.length][numberOfSweets] === Infinity) {
        // If the last value doesn't divide - go back down the tree until you find one that does and then work out remainder and sweetPackSizes from there
        const lowerNumberOfSweetsWithSolution = findLowerNumberOfSweetsWithSolution(solutions, sweetPackSizes.length, numberOfSweets);
        const newNumberOfSweets = numberOfSweets - lowerNumberOfSweetsWithSolution;
        return findSmallestNumSweetPacks(sweetPackSizes, newNumberOfSweets, solutions[sweetPackSizes.length][lowerNumberOfSweetsWithSolution]);

    } else if(numExtraSweetBags) {
        return solutions[sweetPackSizes.length][numberOfSweets] + numExtraSweetBags;
    } else {
        return solutions[sweetPackSizes.length][numberOfSweets];
    }

}


