const removeFromArray = function (array, ...elementsToRemove) {
    const outputArray = [];
    const removeArray = elementsToRemove;
    outer: for (const element of array) {
        for (const elementToRemove of removeArray) {
            if (element === elementToRemove) {
                continue outer;
            }
        }
        outputArray.push(element);
    }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
